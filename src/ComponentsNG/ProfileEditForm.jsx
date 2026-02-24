import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeProfileEditForm } from "../redux/actions";

function ProfileEditForm() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeProfileEditForm());
  };

  const modalState = useSelector((currentState) => {
    return currentState.modalState.modalState;
  });

  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ProfileEditFormName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Mario" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Rossi" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormLocation">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" placeholder="Town, Region, Country" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormJob">
              <Form.Label>Job</Form.Label>
              <Form.Control type="text" placeholder="Full Stack Developer" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormMail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileEditForm;
