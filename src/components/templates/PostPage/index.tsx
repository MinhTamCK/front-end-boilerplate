import React from "react";
import cn from "classnames";

import usePostStore from "@/stores/post";

import s from "./PostPage.module.scss";

const PostPage: React.FunctionComponent = () => {
  const posts = usePostStore(state => state.posts);

  return (
    <div className="container">
      <div className="row">
        <h1>This is post page</h1>
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

export default PostPage;
