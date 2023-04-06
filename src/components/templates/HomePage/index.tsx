import React from "react";
import cn from "classnames";

import { Post } from "@/interfaces/post";

import s from "./HomePage.module.scss";

const HomePage: React.FunctionComponent<{ posts: Post[] }> = ({ posts }) => {

  return (
    <div className="container">
      <div className="row">
        {posts?.map(post => (
          <div key={post.id} className={cn("col-2", s.post)}>
            <div>{post.title}</div>
            <hr />
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
