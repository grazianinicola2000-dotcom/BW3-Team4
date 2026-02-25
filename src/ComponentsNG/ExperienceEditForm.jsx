import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, closeExperienceEditForm, getExperiences, updateExperience, uploadExperiencePicture } from "../redux/actions";
import { useEffect, useState } from "react";

function ExperienceEditForm() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const profileDetails = useSelector((currentState) => {
    return currentState.profile.profileDetails;
  });

  const { modalMode, selectedExperience } = useSelector((state) => state.expModalState);

  const [formUpdate, setFormUpdate] = useState({
    role: "",
    company: "",
    startDate: "",
    description: "",
  });

  useEffect(() => {
    if (modalMode === "edit" && selectedExperience) {
      setFormUpdate({
        ...selectedExperience,
        startDate: selectedExperience.startDate ? selectedExperience.startDate.split("T")[0] : "",
      });
    } else {
      setFormUpdate({
        role: "",
        company: "",
        startDate: "",
        description: "",
        area: "",
      });
    }
  }, [modalMode, selectedExperience]);

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
    dispatch(closeExperienceEditForm());
  };

  const modalState = useSelector((currentState) => {
    return currentState.expModalState.modalState;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modalMode === "edit") {
      await dispatch(updateExperience(profileDetails._id, selectedExperience._id, formUpdate));
      await dispatch(getExperiences(profileDetails._id));
    } else {
      const newExp = await dispatch(addExperience(profileDetails._id, formUpdate));

      if (selectedFile && newExp) {
        await dispatch(uploadExperiencePicture(profileDetails._id, newExp._id, selectedFile));
      }
    }

    dispatch(closeExperienceEditForm());
  };
  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Esperienze</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="ExperienceEditFormRole">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control name="role" value={formUpdate.role} onChange={handleChange} type="text" placeholder="Front End Developer" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ExperienceEditFormCompany">
              <Form.Label>Azienda</Form.Label>
              <Form.Control name="company" value={formUpdate.company} onChange={handleChange} type="text" placeholder="Joinrs" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ExperienceEditFormStartDate">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control name="startDate" value={formUpdate.startDate} onChange={handleChange} type="date" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ExperienceEditFormStartDate">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control name="description" value={formUpdate.description} onChange={handleChange} type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProfileEditFormSurname">
              <Form.Label>Profile image</Form.Label>
              <Form.Control name="image" onChange={handleFileChange} type="file" placeholder="Rossi" autoFocus />
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

export default ExperienceEditForm;
