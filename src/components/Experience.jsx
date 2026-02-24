import { VscBriefcase } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section mt-3">
      <div
        className="card shadow-none border-1"
        style={{ borderRadius: "10px" }}
      >
        <div className="card-body p-2">
          {/* Inizio box bordo tratteggiato */}
          <div className="dashed-container p-3 position-relative">
            {/* Pulsante di chiusura in alto a destra */}
            <IoClose className="position-absolute end-0 top-0 m-2 text-secondary fs-4 cursor-pointer" />

            <h5
              className="fw-bold text-secondary mb-1"
              style={{ fontSize: "18px" }}
            >
              Experience
            </h5>
            <p className="text-secondary mb-3" style={{ fontSize: "14px" }}>
              Showcase your accomplishments and get up to 2X as many profile
              views and connections
            </p>

            {/* Placeholder lavoro */}
            <div className="d-flex align-items-center mb-3">
              <div className="job-placeholder me-3 d-flex align-items-center justify-content-center">
                <VscBriefcase
                  className="text-secondary fs-4"
                  style={{ color: "#B2B2B2" }}
                />
              </div>
              <div>
                <div
                  className="fw-bold"
                  style={{ fontSize: "16px", color: "#B2B2B2" }}
                >
                  Job Title
                </div>
                <div style={{ fontSize: "14px", color: "#B2B2B2" }}>
                  Organization
                </div>
                <div
                  className="text-muted opacity-50"
                  style={{ fontSize: "13px", color: "#B2B2B2" }}
                >
                  2023 - present
                </div>
              </div>
            </div>

            <button className="btn btn-outline-primary rounded-pill fw-bold px-3 py-1 border-1">
              Add experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
