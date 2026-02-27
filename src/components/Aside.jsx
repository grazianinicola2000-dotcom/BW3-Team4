import { BsPencil, BsFillPersonPlusFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Aside.css";
import { useDispatch, useSelector } from "react-redux";
import { tokens } from "../tokens/tokens";
import { setActiveUser } from "../redux/actions";

const Aside = () => {
  const dispatch = useDispatch();
  const allProfiles = useSelector((currentState) => currentState.profile.profiles);

  const teamUsernames = ["fabry23", "NicolaG", "Cristian.05__"];
  const profiliTeam = teamUsernames.map((username) => allProfiles[username]).filter(Boolean);

  return (
    <aside className="aside-container ms-3 mt-4">
      {/* CARD LINGUA E URL */}
      <div className="card shadow-none border-1 mb-2 custom-rounded-aside">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}>
                {" "}
                Lingua del profilo{" "}
              </div>
              <div className="text-secondary" style={{ fontSize: "14px" }}>
                Italiano
              </div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1 cursor-pointer" />
          </div>
          <hr className="my-3 opacity-25" />
          <div className="d-flex justify-content-between align-items-start">
            <div className="pe-2">
              <div className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}>
                {" "}
                Profilo pubblico e URL{" "}
              </div>
              <div className="text-secondary text-break" style={{ fontSize: "14px", lineHeight: "1.2" }}>
                www.linkedin.com/in/team-project-strive
              </div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. CARD ALTRI PROFILI CONSULTATI */}
      <div className="card shadow-none border-1 mb-2" style={{ borderRadius: "10px" }}>
        <div className="card-body p-3">
          <div className="mb-3">
            <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}>
              {" "}
              Altri profili consultati{" "}
            </h6>
            <div className="d-flex align-items-center text-secondary" style={{ fontSize: "14px" }}>
              <IoEyeSharp className="me-1" />
              <span>Solo per te</span>
            </div>
          </div>

          {profiliTeam.length > 0 ? (
            profiliTeam.map((profilo) => (
              <div key={profilo._id} className="d-flex align-items-start mb-3 border-bottom pb-3 last-child-no-border">
                <Link to={`/profile/${profilo._id}`}>
                  <img
                    src={profilo.image || "https://via.placeholder.com/48"}
                    alt={profilo.name}
                    className="rounded-circle flex-shrink-0 me-2"
                    width="48"
                    height="48"
                    style={{ objectFit: "cover", border: "1px solid #eee" }}
                  />
                </Link>
                <div className="w-100">
                  <Link
                    to={`/profile/${profilo._id}`}
                    className="text-decoration-none"
                    onClick={() => {
                      dispatch(
                        setActiveUser({
                          user: profilo,
                          token: tokens[profilo.username],
                        }),
                      );
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="fw-bold text-dark name-link" style={{ fontSize: "14px" }}>
                      {profilo.name} {profilo.surname}
                    </div>
                  </Link>
                  <div className="text-secondary mb-2" style={{ fontSize: "12px", lineHeight: "1.2" }}>
                    {profilo.title || "Epicode Student"}
                  </div>
                  <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 fw-bold d-flex align-items-center gap-1 border-1">
                    <BsFillPersonPlusFill /> Collegati
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-3 text-muted small">Nessun compagno trovato.</div>
          )}
        </div>
      </div>

      <div className="card shadow-none border-1 overflow-hidden custom-rounded-aside">
        <img src="https://media.licdn.com/media/AAYAAQTPAAgAAQAAAAAAADBJg6kiYYJxTUOBq1MuLPcNcQ.png" className="card-img-top" alt="LinkedIn Learning" />
      </div>
    </aside>
  );
};

export default Aside;
