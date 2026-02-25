import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPost, getComments } from "../redux/actions/post"
import { Alert, Button, Col, Container, Row, Spinner } from "react-bootstrap"
import { useState } from "react"

const Posts = () => {
  const dispatch = useDispatch()

  // POST

  const post = useSelector((currentState) => {
    return currentState.post.postDetails
  })

  const loading = useSelector((currentState) => {
    return currentState.post.loading
  })

  const error = useSelector((currentState) => {
    return currentState.post.error
  })

  // COMMENTI

  const comments = useSelector((currentState) => currentState.comments.comments)
  const commentsLoading = useSelector(
    (currentState) => currentState.comments.loading,
  )
  const [showCommentsPosts, setShowCommentsPosts] = useState([])

  const toggleComments = (postId) => {
    if (!comments[postId]) {
      dispatch(getComments(postId)) // il postId qui è post._id
    }

    setShowCommentsPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    )
  }

  // TEXT

  const [expandedPosts, setExpandedPosts] = useState([])
  const limit = 200

  const togglePost = (id) => {
    setExpandedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id],
    )
  }

  useEffect(() => {
    dispatch(getPost())
  }, [])

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
              <Col key={p.id || index} className=" col-12">
                <div className=" d-flex flex-column p-3 shadow rounded bg-white my-3">
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
                    <Button className=" text-primary bg-white border-0 p-0 fw-semibold flex-grow-1 text-end">
                      segui +
                    </Button>{" "}
                  </div>
                  <p>
                    {expandedPosts.includes(p.id)
                      ? p.text
                      : p.text.slice(0, limit)}

                    {p.text.length > limit &&
                      !expandedPosts.includes(p.id) &&
                      "... "}

                    {p.text.length > limit && (
                      <span
                        onClick={() => togglePost(p.id)}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expandedPosts.includes(p.id)
                          ? "Mostra meno"
                          : "Leggi di più"}
                      </span>
                    )}
                  </p>
                  <span className=" small">at {p.createdAt.slice(0, 10)}</span>
                  <Button
                    variant="link"
                    onClick={() => toggleComments(p._id)} // usa sempre post._id
                    className=" d-flex"
                  >
                    {showCommentsPosts.includes(p._id)
                      ? "Nascondi commenti"
                      : "Mostra commenti"}
                  </Button>

                  {showCommentsPosts.includes(p._id) && (
                    <div className="mt-2">
                      {commentsLoading && (
                        <Spinner animation="border" size="sm" />
                      )}
                      {comments[p._id] && comments[p._id].length > 0 ? (
                        comments[p._id].map((c) => (
                          <div key={c._id} className="border-top pt-1">
                            <strong>{c.author}</strong>: {c.comment}
                          </div>
                        ))
                      ) : (
                        <div className="text-muted">
                          Nessun commento disponibile
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Col>
            ))}
      </Row>
      {console.log(comments)}
      {console.log(post)}
    </Container>
  )
}

export default Posts
