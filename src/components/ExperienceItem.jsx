import { VscBriefcase } from "react-icons/vsc";
import { deleteExperience, openExperienceEditForm } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./ExperienceItem.css";

const ExperienceItem = ({ data, isPlaceholder }) => {
  const dispatch = useDispatch();
  const formatDate = (date) => {
    if (!date) return "";

    const formatted = new Date(date).toLocaleDateString("it-IT", {
      month: "short",
      year: "numeric",
    });

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  const profileDetails = useSelector((state) => state.profile.profileDetails);

  const title = data?.role || "Job Title";
  const organization = data?.company || "Organization";
  const duration = data?.startDate ? `${formatDate(data.startDate)}` : "2023 - present";

  const textColor = isPlaceholder ? "#B2B2B2" : "inherit";

  return (
    <div>
      <div className="d-flex align-items-center mb-0">
        <div className="job-placeholder me-3 d-flex align-items-center justify-content-center flex-shrink-0">
          {data?.image ? (
            <img src={data.image} alt={organization} style={{ width: "100%", height: "100%", borderRadius: "4px" }} />
          ) : (
            <VscBriefcase className="fs-4" style={{ color: textColor }} />
          )}
        </div>
        <div>
          <div className="fw-bold" style={{ fontSize: "16px", color: textColor }}>
            {title}
          </div>
          <div style={{ fontSize: "14px", color: textColor }}>{organization}</div>
          <div className="opacity-50" style={{ fontSize: "13px", color: textColor }}>
            {duration}
          </div>
        </div>
      </div>
      <div className="d-flex gap-2 mb-3">
        <p
          id="editBtn"
          style={{ fontSize: "10px" }}
          onClick={() => {
            dispatch(
              openExperienceEditForm({
                mode: "edit",
                experience: data,
              }),
            );
          }}
        >
          Edit
        </p>
        <p
          id="deleteBtn"
          style={{ fontSize: "10px" }}
          onClick={() => {
            dispatch(deleteExperience(profileDetails._id, data._id));
          }}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
