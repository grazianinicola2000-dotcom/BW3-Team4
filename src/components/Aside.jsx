import { BsPencil, BsFillPersonPlusFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import "./Aside.css"

const Aside = () => {
  const profiliConsultati = [
    { id: 1, nome: "Fabrizio Pesaresi", ruolo: "Back-End Developer", img: "" },
    { id: 2, nome: "Nicola Graziani", ruolo: "UX/UI Specialist", img: "" },
    { id: 3, nome: "Cristian Cicale", ruolo: "Full Stack Developer", img: "" },
    { id: 4, nome: "Simone Goti", ruolo: "Front-End Developer", img: "" },
  ]

  return (
    <aside className="aside-container ms-3 mt-4">
      {/* CARD LINGUA E URL */}
      <div
        className="card shadow-none border-1 mb-2"
        style={{ borderRadius: "10px" }}
      >
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <div
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "16px" }}
              >
                Lingua del profilo
              </div>
              <div className="text-secondary" style={{ fontSize: "14px" }}>
                Italiano
              </div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1" />
          </div>
          <hr className="my-3 opacity-25" />
          <div className="d-flex justify-content-between align-items-start">
            <div className="pe-2">
              <div
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "16px" }}
              >
                Profilo pubblico e URL
              </div>
              <div
                className="text-secondary text-break"
                style={{ fontSize: "14px", lineHeight: "1.2" }}
              >
                www.linkedin.com/in/mario-rossi-363b47250
              </div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1" />
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
            <h6 className="fw-bold text-dark mb-0" style={{ fontSize: "16px" }}>
              Altri profili consultati
            </h6>
            <div
              className="d-flex align-items-center text-secondary"
              style={{ fontSize: "14px" }}
            >
              <IoEyeSharp className="me-1" />
              <span>Solo per te</span>
            </div>
          </div>

          {profiliConsultati.map((profilo) => (
            <div
              key={profilo.id}
              className="d-flex align-items-start mb-3 border-bottom pb-3 last-child-no-border"
            >
              <img
                src={profilo.img}
                alt={profilo.nome}
                className="rounded-circle flex-shrink-0 me-2"
                width="48"
                height="48"
                style={{ objectFit: "cover" }}
              />
              <div className="w-100">
                <div className="fw-bold text-dark" style={{ fontSize: "14px" }}>
                  {profilo.nome}
                </div>
                <div
                  className="text-secondary mb-2"
                  style={{ fontSize: "12px", lineHeight: "1.2" }}
                >
                  {profilo.ruolo}
                </div>
                <button
                  className="btn btn-outline-secondary btn-sm rounded-pill px-3 fw-bold d-flex align-items-center gap-1 border-1"
                  style={{ fontSize: "13px" }}
                >
                  <BsFillPersonPlusFill /> Collegati
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CARD PUBBLICITÀ LEARNING */}
      <div
        className="card shadow-none border-1 overflow-hidden"
        style={{ borderRadius: "10px" }}
      >
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
