import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeProfileEditForm, editProfile, uploadProfilePicture } from "../redux/actions";
import { useEffect, useState } from "react";

function ProfileEditForm() {
  const dispatch = useDispatch();

  const profileDetails = useSelector((currentState) => currentState.profile.profileDetails);
  console.log("PROFILE", profileDetails);

  const [formUpdate, setFormUpdate] = useState({
    name: "",
    surname: "",
    area: "",
    title: "",
    email: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleClose = () => {
    dispatch(closeProfileEditForm());
  };

  const modalState = useSelector((currentState) => {
    return currentState.modalState.modalState;
  });
  console.log(typeof setFormUpdate);

  useEffect(() => {
    if (profileDetails) {
      setFormUpdate(profileDetails);
    }
  }, [profileDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(editProfile(formUpdate));
    if (selectedFile) {
      await dispatch(uploadProfilePicture(profileDetails._id, selectedFile));
    }
    dispatch(closeProfileEditForm());
  };

  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="ProfileEditFormName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formUpdate.name} onChange={handleChange} type="text" placeholder="Mario" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control name="surname" value={formUpdate.surname} onChange={handleChange} type="text" placeholder="Rossi" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormSurname">
              <Form.Label>Profile image</Form.Label>
              <Form.Control name="image" onChange={handleFileChange} type="file" placeholder="Rossi" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormLocation">
              <Form.Label>Area</Form.Label>
              <Form.Control name="area" value={formUpdate.area} onChange={handleChange} type="text" placeholder="Town, Region, Country" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormJob">
              <Form.Label>Job</Form.Label>
              <Form.Control name="title" value={formUpdate.title} onChange={handleChange} type="text" placeholder="Full Stack Developer" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormMail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" value={formUpdate.email} onChange={handleChange} type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ProfileEditForm;
