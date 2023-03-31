import React from "react";
import cn from "classnames";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

import { Post } from "@/interfaces/post";

import s from "./HomePage.module.scss";

const HomePage: React.FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  // const [show, setShow] = useState<boolean>(false);
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-12">
          <Button onClick={() => setShow(true)}>click me!</Button>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
              <FontAwesomeIcon onClick={() => setShow(false)} icon={faClose} />
            </Modal.Header>
            <Modal.Body>
              Woohoo, you&apos;re reading this text in a modal!
            </Modal.Body>
          </Modal>
        </div> */}
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
