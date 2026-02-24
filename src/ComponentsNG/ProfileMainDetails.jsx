import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import "./ProfileMainDetails.css";
import { openProfileEditForm } from "../redux/actions";
import ProfileEditForm from "./ProfileEditForm";

const ProfileMainDetails = () => {
  const dispatch = useDispatch();

  const profileDetails = useSelector((currentState) => {
    return currentState.profile.profileDetails;
  });

  const loading = useSelector((currentState) => {
    return currentState.profile.loading;
  });

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <section className="rounded-4 overflow-hidden">
      <Row>
        <Col xs={12} id="profileSection">
          <img className="profile-details-bg w-100" src="/profile_bg.png" alt="profile_bg_img" />
          <div id="profileImg">
            {loading || !profileDetails ? (
              <Spinner className="spinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <img src={profileDetails.image} className="rounded-circle border border-5 border-light" alt="profile_img" />
            )}
          </div>
          <div id="porfileSectionCamerabutton" className="m-0 bg-light rounded-circle">
            <i className="m-0 bi bi-camera-fill text-primary"></i>
          </div>
        </Col>
      </Row>
      <section className="p-5 position-relative">
        <div className="d-flex gap-2 pt-3 align-items align-items-center">
          <h3 className={loading || !profileDetails ? "placeholder col-2 m-0" : "m-0"}>
            {loading || !profileDetails ? "" : `${profileDetails.name} ${profileDetails.surname}`}
          </h3>
          <div style={{ border: "1px dashed #0d6efd" }} className="m-0 text-primary d-flex gap-2 rounded-pill align-items-center px-2">
            <i className="bi bi-shield-check"></i>
            <p className="p-0 m-0">Add verification badge</p>
          </div>
        </div>
        <div className="mt-2">
          <h6 className={loading || !profileDetails ? "placeholder col-1 m-0" : "m-0"}>{loading || !profileDetails ? "" : `${profileDetails.title}`}</h6>
        </div>
        <div className="d-flex mt-3">
          <p className={loading || !profileDetails ? "placeholder col-4" : "text-body-tertiary"}>
            {loading || !profileDetails ? "" : `${profileDetails.area}`}
            <span className="px-1">&middot;</span>
          </p>
          <p className="text-primary fw-semibold">Contanct info</p>
        </div>
        <div className="d-flex gap-2 flex-wrap row">
          <Button className="rounded-pill col-auto order-1" variant="primary">
            Open to
          </Button>
          <Button className="rounded-pill col-auto order-2" variant="outline-primary">
            Add profile section
          </Button>
          <Button className="rounded-pill col-auto order-3 order-md-4" variant="outline-dark">
            Resources
          </Button>
          <Button className="rounded-pill col-12 col-md-auto order-4 order-md-3" variant="outline-primary">
            Enhance profile
          </Button>
        </div>
        <div
          onClick={() => {
            dispatch(openProfileEditForm());
          }}
          id="editBtnContainer"
          className="m-0 rounded-circle"
        >
          <i id="editBtn" className="bi bi-pencil"></i>
        </div>
      </section>
      <ProfileEditForm />
    </section>
  );
};

export default ProfileMainDetails;
