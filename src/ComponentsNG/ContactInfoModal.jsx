import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeContactInfoModal } from "../redux/actions";
import { useParams } from "react-router-dom";
import "./ContactInfoModal.css";

function ContactInfoModal() {
  const dispatch = useDispatch();
  const params = useParams();
  const modalState = useSelector((state) => {
    return state.contactModalState.modalState;
  });

  const profileDetails = useSelector((currentState) => currentState.profile.profileDetails);

  const handleClose = () => {
    dispatch(closeContactInfoModal());
  };

  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {profileDetails?.name} {profileDetails?.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-4 align-items-start">
            <i class="bi bi-linkedin fs-3"></i>
            <div>
              <h5 className="pt-2">Il tuo Profilo</h5>
              <p className="text-primary contact-info-data">linkedinclone.com/profile/{params.userId}</p>
            </div>
          </div>
          <div className="d-flex gap-4 align-items-start">
            <i className="bi bi-envelope fs-3"></i>
            <div>
              <h5 className="pt-2">Email</h5>
              <p className="text-primary contact-info-data">{profileDetails?.email}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactInfoModal;
