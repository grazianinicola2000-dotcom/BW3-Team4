import React, { useState, useEffect } from "react";
import { BsPencil, BsFillPersonPlusFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
  const [profiliTeam, setProfiliTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const MY_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTlkYjE2YWI1NTgyMDAwMTU4YzM0MzkiLCJpYXQiOjE3NzE5NDI5NTIsImV4cCI6MTc3MzE1MjU1Mn0.fqEAxEzCR84sB0KSCyC2rXD4ncgGAFC_9lip-eG64-o";
  
  const teamUsernames = ["fabry23", "NicolaG", "Cristian.05__", ".."];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
          headers: { "Authorization": `Bearer ${MY_TOKEN}` }
        });

        if (response.ok) {
          const allProfiles = await response.json();
          const myTeam = allProfiles.filter(user => 
            teamUsernames.includes(user.username)
          );
          setProfiliTeam(myTeam);
        }
      } catch (error) {
        console.error("Errore fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <aside className="aside-container ms-3 mt-4">
      {/* CARD LINGUA E URL */}
      <div className="card shadow-none border-1 mb-2 custom-rounded-aside">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}> Lingua del profilo </div>
              <div className="text-secondary" style={{ fontSize: "14px" }}>Italiano</div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1 cursor-pointer" />
          </div>
          <hr className="my-3 opacity-25" />
          <div className="d-flex justify-content-between align-items-start">
            <div className="pe-2">
              <div className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}> Profilo pubblico e URL </div>
              <div className="text-secondary text-break" style={{ fontSize: "14px", lineHeight: "1.2" }}>
                www.linkedin.com/in/team-project-strive
              </div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 2. CARD ALTRI PROFILI CONSULTATI */}
      <div
        className="card shadow-none border-1 mb-2"
        style={{ borderRadius: "10px" }}
      >
        <div className="card-body p-3">
          <div className="mb-3">
            <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}> Altri profili consultati </h6>
            <div className="d-flex align-items-center text-secondary" style={{ fontSize: "14px" }}>
              <IoEyeSharp className="me-1" />
              <span>Solo per te</span>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-3 text-secondary small">Ricerca compagni...</div>
          ) : profiliTeam.length > 0 ? (
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
                    onClick={() => window.scrollTo(0, 0)}
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
        <img
          src="https://media.licdn.com/media/AAYAAQTPAAgAAQAAAAAAADBJg6kiYYJxTUOBq1MuLPcNcQ.png"
          className="card-img-top"
          alt="LinkedIn Learning"
        />
      </div>
    </aside>
  )
}

export default Aside
