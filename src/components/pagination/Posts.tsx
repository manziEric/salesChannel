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
    justifyContent: "center",
    alignItems: "center",
  },
  listGroup: {
    listStyle: "none",
    display: "block",
  },
  label: {
    position: "relative" as const,
    width: "220px",
    height: "150px",
    background: "#232323",
    borderRadius: "20px",
    overflow: "hidden",
  },
};
