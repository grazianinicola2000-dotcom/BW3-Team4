import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap"
import { PiVideoFill } from "react-icons/pi"
import { HiMiniPhoto } from "react-icons/hi2"
import { RiArticleLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../redux/actions"
import { createPost, getPost } from "../redux/actions/post"
import { useEffect, useState, useRef } from "react"
import { IoClose } from "react-icons/io5"
import { FaRegImage } from "react-icons/fa6"
import { FaRegCalendarAlt } from "react-icons/fa"
import { BsFillChatSquareTextFill } from "react-icons/bs"
import { IoMdAdd } from "react-icons/io"
import { MdOutlineWatchLater } from "react-icons/md"

const CreatePostLink = () => {
  const dispatch = useDispatch()

  const profileDetails = useSelector((state) => state.profile.profileDetails)
  const profileLoading = useSelector((state) => state.profile.loading)
  const postLoading = useSelector((state) => state.post.loading)

  const [showModal, setShowModal] = useState(false)
  const [postText, setPostText] = useState("")
  const [imageFile, setImageFile] = useState(null)

  const fileInputRef = useRef(null)

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  const handleSubmit = async () => {
    if (!postText.trim() && !imageFile) return

    await dispatch(createPost({ text: postText }, imageFile))

    setPostText("")
    setImageFile(null)
    setShowModal(false)

    dispatch(getPost())
  }

  return (
    <>
      <Container className="px-0">
        <Row>
          <Col>
            <Col className="d-flex flex-column bg-white p-4 rounded-3 border mt-4">
              <div className="d-flex align-items-center gap-2">
                {!profileLoading && profileDetails?.image && (
                  <img
                    src={profileDetails.image}
                    alt="profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                )}

                <Button
                  onClick={() => setShowModal(true)}
                  className="bg-white text-black border-secondary rounded-5 w-100 text-start py-2"
                >
                  Crea un post
                </Button>
              </div>

              <div className="d-flex justify-content-around mt-4">
                <div className="d-flex flex-column flex-lg-row align-items-center home-hover rounded-3">
                  <PiVideoFill className="fs-3 text-success" />
                  <Button className="bg-transparent text-black border-0 fw-semibold px-2">
                    Video
                  </Button>
                </div>

                <div className="d-flex flex-column flex-lg-row align-items-center home-hover rounded-3">
                  <HiMiniPhoto className="fs-3 text-primary" />
                  <Button className="bg-transparent text-black border-0 fw-semibold px-2">
                    Foto
                  </Button>
                </div>

                <div className="d-flex flex-column flex-lg-row align-items-center home-hover rounded-3">
                  <RiArticleLine className="fs-3 text-danger" />
                  <Button className="bg-transparent text-black border-0 fw-semibold px-2">
                    Scrivi un articolo
                  </Button>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="custom-modal modal-fullscreen modal-lg"
      >
        <Modal.Body className="d-flex flex-column p-4">
          <div className="d-flex align-items-center gap-3 mb-4">
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
            <div className="d-flex flex-column">
              <span className="fw-semibold fs-5">
                {profileDetails?.name} {profileDetails?.surname}
              </span>
              <span className="small">Pubblica: chiunque</span>
            </div>
            <div className="ms-auto">
              <Button
                variant="light"
                className="bg-transparent border-0 fs-4 p-0"
                onClick={() => setShowModal(false)}
              >
                <IoClose />
              </Button>
            </div>
          </div>

          <Form.Control
            as="textarea"
            placeholder="Di cosa vorresti parlare?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize: "1.1em",
              resize: "none",
              minHeight: "120px",
            }}
          />

          {imageFile && (
            <div className="mt-3 position-relative">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="preview"
                className="img-fluid rounded"
              />
              <Button
                size="sm"
                className="position-absolute top-0 end-0 m-2"
                variant="light"
                onClick={() => setImageFile(null)}
              >
                <IoClose />
              </Button>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <div className="d-flex gap-2 mt-auto">
            <Button
              className="bg-transparent text-secondary border-0 fs-5"
              onClick={() => fileInputRef.current.click()}
            >
              <FaRegImage />
            </Button>
            <Button className="bg-transparent text-secondary border-0 fs-5">
              <FaRegCalendarAlt />
            </Button>
            <Button className="bg-transparent text-secondary border-0 fs-5">
              <BsFillChatSquareTextFill />
            </Button>
            <Button className="bg-transparent text-secondary border-0 fs-5">
              <IoMdAdd />
            </Button>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="bg-transparent text-secondary border-0 fs-5">
            <MdOutlineWatchLater />
          </Button>

          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={postLoading || (!postText.trim() && !imageFile)}
          >
            {postLoading ? "Pubblicazione..." : "Pubblica"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreatePostLink
