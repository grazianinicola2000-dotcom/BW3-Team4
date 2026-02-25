import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../redux/actions/post"
import { Alert, Button, Col, Container, Row, Spinner } from "react-bootstrap"

const Posts = () => {
  const dispatch = useDispatch()

  const post = useSelector((currentState) => {
    return currentState.post.postDetails
  })

  const loading = useSelector((currentState) => {
    return currentState.post.loading
  })

  const error = useSelector((currentState) => {
    return currentState.post.error
  })

  useEffect(() => {
    dispatch(getPost())
  }, [])

  console.log(post)

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
          post.slice(0, 20).map((p, index) => (
            <Col key={p.id || index} className=" col-12">
              <div className=" d-flex flex-column p-3 shadow rounded bg-white my-3">
                <h5 className=" d-flex justify-content-between">
                  {p.user.username || "Unknown"}
                  <Button className=" text-primary bg-white border-0 p-0 fw-semibold">
                    segui +
                  </Button>{" "}
                </h5>
                <img src={p.user.image} alt="" />
                <p>{p.text}</p>
                <span className=" small">at {p.createdAt.slice(0, 10)}</span>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Posts
