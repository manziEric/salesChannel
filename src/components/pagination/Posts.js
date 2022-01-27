import React, { useContext } from "react";
import "../../styles/pagination.css";
import { PaginationContext } from "./DisplayPagination";

const Posts = () => {
  const { currentPosts: posts } = useContext(PaginationContext);

  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.key} className="list-group-item">
          {post.label}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
