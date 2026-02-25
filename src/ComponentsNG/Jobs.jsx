import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/actions";
import { useEffect } from "react";
import "./Jobs.css";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((currentState) => {
    return currentState.searched.jobs;
  });

  const searched = useSelector((currentState) => {
    return currentState.searched.searched;
  });

  const formatDate = (date) => {
    if (!date) return "";

    const formatted = new Date(date).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  useEffect(() => {
    if (searched) {
      dispatch(getJobs(searched));
    }
  }, [searched]);

  return (
    <div className="card shadow-none border-1 mb-2 custom-rounded mt-4">
      <div className="card-body p-3 p-md-4">
        <h2 className="fw-bold mb-0 h5 text-dark">Le migliori scelte di lavoro per te</h2>
        <p className="m-0 text-secondary mb-3">In base al tuo profilo, alle tue preferenze e alle tue attività, come candidature, ricerche e salvataggi</p>
        <div className="d-flex flex-column  text-secondary mb-3 small">
          {console.log(jobs)}
          {jobs.map((job) => {
            return (
              <div className="jobCard d-flex py-3 border-bottom" key={job._id}>
                <div className="m-2 me-3">
                  <img style={{ width: "60px" }} src="https://placehold.co/80x80?text=Logo" alt="company_logo" />
                </div>
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="text-primary m-0">
                      {job.category} - {job.title}
                    </h5>
                    <p className="text-secondary m-0">{job.company_name}</p>
                    <p className="mt-1">{job.candidate_required_location}</p>
                  </div>
                  <p className="m-0">{formatDate(job.publication_date)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
