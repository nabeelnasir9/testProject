import { useState } from "react";
import axios from "axios";
const TestPage = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [show, seShow] = useState();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPost(res.data);
    } catch (error) {
      console.log("Error fetching");
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.log("Error in Fetching");
    }
  };

  // useEffect(()=>{
  //     fetchData();
  // },[])

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={fetchComments}>FetchComments</button>
      <div className="Hellotest">
        {post.map((post, index) => (
          <div key={index}>
            <div>{post.userId}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
      <div>
        {comments.map((comments, index) => (
          <div key={index}>
            <div>{comments.postId}</div>
            <div>{comments.id}</div>
            <div>{comments.name}</div>
            <div>{comments.email}</div>
            <div>{comments.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
