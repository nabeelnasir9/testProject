/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-09-27&sortBy=publishedAt&apiKey=f0c1903ca78f4dd7a273a2f6b86c5f8c"
      );
      console.log(response.data);
      setPosts(response.data.articles);
    } catch (error) {
      console.log("Fetching error");
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={fetchBlogPosts}>Fetch Articles</button>
      <div className="articles">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.urlToImage}
            articleUrl={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
