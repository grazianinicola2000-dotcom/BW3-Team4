import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getPost,
  getComments,
  addComment,
  deleteComment,
  editPost,
  deletePost,
} from "../redux/actions/post"
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap"
import { useState } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"
import { BiRepost } from "react-icons/bi"
import { RiShareForwardLine } from "react-icons/ri"
import { SlOptions } from "react-icons/sl"
import { IoClose } from "react-icons/io5"
import { FaRegImage } from "react-icons/fa6"
import { FaRegCalendarAlt } from "react-icons/fa"
import { BsFillChatSquareTextFill } from "react-icons/bs"
import { IoMdAdd } from "react-icons/io"
import { MdOutlineWatchLater } from "react-icons/md"
import { FaRegBookmark } from "react-icons/fa6"
import { FaLink } from "react-icons/fa6"
import { FaFlag } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import { MdDeleteForever } from "react-icons/md"
import { FaEarthAmericas } from "react-icons/fa6"

const Posts = () => {
  const dispatch = useDispatch()

  const profileDetails = useSelector((currentState) => {
    return currentState.profile.profileDetails
  })

  const formatDate = (date) => {
    if (!date) return ""

    const formatted = new Date(date).toLocaleDateString("it-IT", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
    })

    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
  }
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
  const [newComments, setNewComments] = useState({})

  const toggleComments = (postId) => {
    if (!comments[postId]) {
      dispatch(getComments(postId))
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

  const [openMenuId, setOpenMenuId] = useState(null)

  const [editingPost, setEditingPost] = useState(null)
  const [updatedData, setUpdatedData] = useState({ text: "" })

  const handleEditPost = (post) => {
    setEditingPost(post)
    setUpdatedData({ text: post.text || "" })
    setOpenMenuId(null)
    setShowModal(true)
  }

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getPost())
  }, [])

  return (
    <Container className=" mt-3 px-0">
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
                  <div className=" d-flex align-items-center mb-3 justify-content-between">
                    <div className=" d-flex gap-2">
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
                    </div>
                    <div className=" d-flex gap-3 position-relative">
                      <Button className=" text-primary bg-white border-0 p-0 fw-semibold">
                        + segui
                      </Button>{" "}
                      <Button
                        onClick={() =>
                          setOpenMenuId(openMenuId === p._id ? null : p._id)
                        }
                        className=" text-secondary bg-white border-0 p-0 fw-semibold"
                      >
                        <SlOptions />
                      </Button>{" "}
                      {openMenuId === p._id && (
                        <div
                          className="position-absolute bg-white shadow rounded p-2 d-flex flex-column gap-2"
                          style={{
                            zIndex: 10,
                            top: "40px",
                            left: "-85px",
                          }}
                        >
                          <div className=" d-flex align-items-center gap-1 home-hover px-2 rounded">
                            <FaRegBookmark />
                            <Button
                              variant="trasparent"
                              className="dropdown-item p-1"
                            >
                              Salva
                            </Button>
                          </div>
                          <div className=" d-flex align-items-center gap-1 home-hover px-2 rounded">
                            <FaLink />
                            <Button
                              variant="trasparent"
                              className="dropdown-item p-1"
                            >
                              Copia link al post
                            </Button>
                          </div>
                          <div className=" d-flex align-items-center gap-1 home-hover px-2 rounded">
                            <FaFlag />
                            <Button
                              variant="trasparent"
                              className="dropdown-item p-1"
                            >
                              Segnala post
                            </Button>
                          </div>
                          {p.user.username === profileDetails.username && (
                            <div className=" d-flex align-items-center gap-1 home-hover px-2 rounded">
                              <FiEdit2 />
                              <Button
                                variant="secondary"
                                className="dropdown-item rounded p-1"
                                onClick={() => handleEditPost(p)}
                              >
                                Modifica
                              </Button>
                            </div>
                          )}
                          {p.user.username === profileDetails.username && (
                            <div className=" d-flex align-items-center gap-1 text-danger home-hover-delete px-2 rounded">
                              <MdDeleteForever />
                              <Button
                                variant="danger"
                                className="dropdown-item text-danger home-hover-delete-btn rounded p-1"
                                onClick={() => dispatch(deletePost(p._id))}
                              >
                                Elimina
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <p>
                    {expandedPosts.includes(p._id)
                      ? p.text
                      : p.text.slice(0, limit)}

                    {p.text.length > limit &&
                      !expandedPosts.includes(p._id) &&
                      "... "}

                    {p.text.length > limit && (
                      <span
                        onClick={() => togglePost(p._id)}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expandedPosts.includes(p._id)
                          ? "Mostra meno"
                          : "Leggi di più"}
                      </span>
                    )}
                  </p>
                  <span className="small d-flex align-items-center gap-2">
                    {new Date(p.createdAt).toLocaleString("it-IT", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    <FaEarthAmericas />
                  </span>
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
                      <div className="d-flex gap-2 align-items-center mb-4">
                        <img
                          src={profileDetails.image}
                          className="rounded-circle"
                          width="30"
                        />
                        <input
                          onKeyDown={(e) => {
                            if (
                              e.key === "Enter" &&
                              newComments[p._id]?.trim()
                            ) {
                              e.preventDefault()
                              dispatch(addComment(p._id, newComments[p._id]))
                              setNewComments({
                                ...newComments,
                                [p._id]: "",
                              })
                            }
                          }}
                          value={newComments[p._id] || ""}
                          onChange={(e) =>
                            setNewComments({
                              ...newComments,
                              [p._id]: e.target.value,
                            })
                          }
                          type="text"
                          placeholder="Aggiungi un commento..."
                          className="form-control rounded-pill"
                        />
                      </div>

                      <div>
                        {commentsLoading && <Spinner size="sm" />}

                        {comments[p._id]?.length > 0 ? (
                          comments[p._id].map((c) => (
                            <div className="mb-4" key={c._id}>
                              <div className="d-flex justify-content-between align-items-baseline">
                                <h5 className="m-0">
                                  {c.author}
                                  {console.log(c)}
                                </h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p
                                    className="text-secondary m-0"
                                    style={{ fontSize: "10px" }}
                                  >
                                    {formatDate(c.updatedAt)}
                                  </p>
                                  <i class="bi bi-three-dots"></i>
                                </div>
                              </div>
                              <p className="m-0 ps-3">{c.comment}</p>
                              {c.author === profileDetails.username && (
                                <p
                                  style={{ fontSize: "10px" }}
                                  onClick={() =>
                                    dispatch(deleteComment(c._id, p._id))
                                  }
                                >
                                  Elimina
                                </p>
                              )}
                            </div>
                          ))
                        ) : (
                          <div>Nessun commento disponibile</div>
                        )}
                      </div>
                    </div>
                  )}
                  {editingPost && editingPost._id === p._id && (
                    <Modal
                      show={showModal}
                      onHide={() => setShowModal(false)}
                      centered
                      className=" custom-modal modal-fullscreen modal-lg"
                    >
                      <Modal.Body className=" d-flex flex-column p-4">
                        <div className="d-flex align-items-center gap-3 mb-5">
                          {profileDetails?.image && (
                            <img
                              src={profileDetails.image}
                              alt="profile"
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          )}
                          <div className=" d-flex flex-column">
                            <span className="fw-semibold fs-5">
                              {profileDetails?.name} {profileDetails?.surname}
                            </span>
                            <span className=" small">Pubblica: chiunque</span>
                          </div>
                          <div className=" ms-auto">
                            <Button
                              variant="light"
                              className=" bg-transparent border-0 fs-4 p-0"
                              onClick={() => setShowModal(false)}
                            >
                              <IoClose className=" d-flex align-self-center" />
                            </Button>
                          </div>
                        </div>

                        <Form.Control
                          as="textarea"
                          placeholder="Di cosa vorresti parlare?"
                          className="form-control mb-2"
                          value={updatedData.text}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              text: e.target.value,
                            })
                          }
                          style={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            fontSize: "1.1em",
                            resize: "none",
                          }}
                        />
                        <div className=" d-flex gap-2 mt-auto">
                          <Button className=" bg-transparent text-secondary border-0 fs-5">
                            <FaRegImage />
                          </Button>
                          <Button className=" bg-transparent text-secondary border-0 fs-5">
                            <FaRegCalendarAlt />
                          </Button>
                          <Button className=" bg-transparent text-secondary border-0 fs-5">
                            <BsFillChatSquareTextFill />
                          </Button>
                          <Button className=" bg-transparent text-secondary border-0 fs-5">
                            <IoMdAdd />
                          </Button>
                        </div>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button className=" bg-transparent text-secondary border-0 fs-5">
                          <MdOutlineWatchLater />
                        </Button>
                        <Button
                          onClick={() => {
                            dispatch(editPost(editingPost._id, updatedData))
                            setEditingPost(null)
                            setShowModal(false)
                          }}
                          className=" bg-secondary border-0"
                        >
                          Salva
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
