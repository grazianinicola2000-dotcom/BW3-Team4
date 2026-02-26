import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getComments, addComment } from "../redux/actions/post";
import { Alert, Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

const Posts = () => {
  const dispatch = useDispatch();
  // const [toggleCommentsSection, settoggleCommentsSection] = useState(false);

  const profileDetails = useSelector((currentState) => {
    return currentState.profile.profileDetails;
  });

  // POST

  const post = useSelector((currentState) => {
    return currentState.post.postDetails;
  });

  const loading = useSelector((currentState) => {
    return currentState.post.loading;
  });

  const error = useSelector((currentState) => {
    return currentState.post.error;
  });

  // COMMENTI

  const comments = useSelector((currentState) => currentState.comments.comments);
  const commentsLoading = useSelector((currentState) => currentState.comments.loading);
  const [showCommentsPosts, setShowCommentsPosts] = useState([]);
  const [newComments, setNewComments] = useState({});

  const toggleComments = (postId) => {
    // if (toggleCommentsSection === true) {
    //   settoggleCommentsSection(false);
    // } else {
    //   settoggleCommentsSection(true);
    // }
    if (!comments[postId]) {
      dispatch(getComments(postId));
    }

    setShowCommentsPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]));
  };

  // TEXT

  const [expandedPosts, setExpandedPosts] = useState([]);
  const limit = 200;

  const togglePost = (id) => {
    setExpandedPosts((prev) => (prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]));
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <Container className=" mt-3">
      <Row className="justify-content-center">
        {loading && (
          <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && (
          <div className="text-danger text-center py-5">
            <Alert>Si è verificato un errore </Alert>
          </div>
        )}
        {!loading &&
          !error &&
          post &&
          post
            .slice(-20)
            .reverse()
            .map((p, index) => (
              <Col key={p._id || index} className=" col-12">
                <div className=" d-flex flex-column p-3 border border rounded bg-white my-2">
                  <div className=" d-flex gap-2 align-items-center mb-3">
                    <img
                      src={p.user.image}
                      alt="profile"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <h5 className=" m-0">{p.user.username || "Unknown"}</h5>
                    <Button className=" text-primary bg-white border-0 p-0 fw-semibold flex-grow-1 text-end">segui +</Button>{" "}
                  </div>
                  <p>
                    {expandedPosts.includes(p._id) ? p.text : p.text.slice(0, limit)}

                    {p.text.length > limit && !expandedPosts.includes(p._id) && "... "}

                    {p.text.length > limit && (
                      <span
                        onClick={() => togglePost(p._id)}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expandedPosts.includes(p._id) ? "Mostra meno" : "Leggi di più"}
                      </span>
                    )}
                  </p>
                  <span className=" small">at {p.createdAt.slice(0, 10)}</span>
                  <hr />
                  <section className="d-flex flex-row align-items-center justify-content-around">
                    <div style={{ cursor: "pointer" }}>
                      <Button className="d-flex flex-column align-items-center bg-white text-black border-0 rounded fw-semibold px-2">
                        <AiOutlineLike className="fs-5" />
                        Consiglia
                      </Button>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                      <Button
                        onClick={() => toggleComments(p._id)}
                        className="d-flex flex-column align-items-center bg-white text-black border-0 rounded fw-semibold px-2"
                      >
                        <FaRegCommentDots className="fs-5" />
                        Commenta
                      </Button>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                      <Button className="d-flex flex-column align-items-center bg-white text-black border-0 rounded fw-semibold px-2">
                        <BiRepost className="fs-5" />
                        Diffondi il post
                      </Button>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                      <Button className="d-flex flex-column align-items-center bg-white text-black border-0 rounded fw-semibold px-2">
                        <RiShareForwardLine className="fs-5" />
                        Invia
                      </Button>
                    </div>
                  </section>
                  {showCommentsPosts.includes(p._id) && (
                    <div className="comments-panel mt-3">
                      <div className="d-flex gap-2 align-items-center mb-2">
                        <img src={profileDetails.image} className="rounded-circle" width="30" />
                        <input
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && newComments[p._id]?.trim()) {
                              e.preventDefault();
                              dispatch(addComment(p._id, newComments[p._id]));
                              setNewComments({
                                ...newComments,
                                [p._id]: "",
                              });
                            }
                          }}
                          value={newComments[p._id] || ""}
                          onChange={(e) => setNewComments({ ...newComments, [p._id]: e.target.value })}
                          type="text"
                          placeholder="Aggiungi un commento..."
                          className="form-control rounded-pill"
                        />
                      </div>

                      <div>
                        {commentsLoading && <Spinner size="sm" />}

                        {comments[p._id]?.length > 0 ? (
                          comments[p._id].map((c) => (
                            <div key={c._id}>
                              <strong>{c.author}</strong>: {c.comment}
                            </div>
                          ))
                        ) : (
                          <div>Nessun commento disponibile</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            ))}
      </Row>
      {console.log(comments)}
      {console.log(post)}
    </Container>
  );
};

export default Posts;
