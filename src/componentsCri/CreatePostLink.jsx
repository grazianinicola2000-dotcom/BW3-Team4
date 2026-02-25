import { Button, Col, Container, Row } from "react-bootstrap"
import { PiVideoFill } from "react-icons/pi"
import { HiMiniPhoto } from "react-icons/hi2"
import { RiArticleLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../redux/actions"
import { useEffect } from "react"

const CreatePostLink = () => {
  const profileDetails = useSelector((currentState) => {
    return currentState.profile.profileDetails
  })

  const loading = useSelector((currentState) => {
    return currentState.profile.loading
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Col className=" d-flex flex-column bg-white p-4 rounded-3 border mt-4">
            <div className=" d-flex align-items-center gap-2">
              {!loading && profileDetails?.image && (
                <img
                  src={profileDetails.image}
                  alt="profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
              )}
              <Button className=" bg-white text-black border-secondary rounded-5 w-100 text-start py-2">
                Crea un post
              </Button>
            </div>
            <div className=" d-flex justify-content-around mt-4">
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <PiVideoFill className="fs-3 text-success" />
                <Button className="bg-white text-black border-0 rounded fw-semibold px-2">
                  Video
                </Button>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <HiMiniPhoto className="fs-3 text-primary" />
                <Button className="bg-white text-black border-0 rounded fw-semibold px-2">
                  Foto
                </Button>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <RiArticleLine className="fs-3 text-danger" />
                <Button className="bg-white text-black border-0 rounded fw-semibold px-2">
                  Scrivi un articolo
                </Button>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default CreatePostLink
