import { VscBriefcase } from "react-icons/vsc";

const ExperienceItem = ({ data, isPlaceholder }) => {
  const title = data?.title || "Job Title";
  const organization = data?.company || "Organization";
  const duration = data?.startDate
    ? `${data.startDate} - ${data.endDate || "present"}`
    : "2023 - present";

  const textColor = isPlaceholder ? "#B2B2B2" : "inherit";

  return (
    <div className="d-flex align-items-center mb-3">
      <div className="job-placeholder me-3 d-flex align-items-center justify-content-center flex-shrink-0">
        {data?.image ? (
          <img
            src={data.image}
            alt={organization}
            style={{ width: "100%", height: "100%", borderRadius: "4px" }}
          />
        ) : (
          <VscBriefcase className="fs-4" style={{ color: textColor }} />
        )}
      </div>
      <div>
        <div className="fw-bold" style={{ fontSize: "16px", color: textColor }}>
          {title}
        </div>
        <div style={{ fontSize: "14px", color: textColor }}>{organization}</div>
        <div
          className="opacity-50"
          style={{ fontSize: "13px", color: textColor }}
        >
          {duration}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
