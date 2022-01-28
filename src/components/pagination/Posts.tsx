import { FC, useContext } from "react";
import "../../styles/pagination.css";
import { PaginationContext } from "./DisplayPagination";

interface Post {
  key: string;
  label: string;
  country: string;
}

const Posts: FC = () => {
  const { currentPosts: posts } = useContext(PaginationContext);

  return (
    <div style={styles.container}>
      <ul style={styles.listGroup}>
        {posts.map((post: Post) => (
          <li style={styles.label} key={post.key}>
            {post.label}
            <hr />
            <img
              style={styles.image}
              src="https://cdn.pixabay.com/photo/2017/02/16/10/48/pixabay-2071080_960_720.png"
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  listGroup: {
    listStyle: "none",
    maxWidth: "60vw",
  },
  label: {
    display: "inline-block",
    position: "relative" as const,
    width: "200px",
    height: "150px",
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    margin: "0.5rem",
    padding: "1rem",
    border: "1px solid #C5C5C5",
  },
  image: {
    width: "170px",
    height: "100px",
    borderRadius: "10px",
  },
};
