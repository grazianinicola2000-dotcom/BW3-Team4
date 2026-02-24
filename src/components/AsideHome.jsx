import {
  BsInfoSquareFill,
  BsChevronDown,
  BsChevronRight,
} from "react-icons/bs";
import "./Aside.css";

const AsideHome = () => {
  const notizie = [
    {
      id: 1,
      titolo: 'Milano Cortina "ha definito un nuovo ...',
      tempo: "1 giorno fa",
      lettori: "631 lettori",
    },
    {
      id: 2,
      titolo: "Numeri e trend di Sanremo 2026",
      tempo: "8h fa",
      lettori: "356 lettori",
    },
    {
      id: 3,
      titolo: "Le competenze in crescita nel 2026",
      tempo: "8h fa",
      lettori: "274 lettori",
    },
    {
      id: 4,
      titolo: "Enel investirà nelle Rinnovabili",
      tempo: "1h fa",
      lettori: "143 lettori",
    },
    {
      id: 5,
      titolo: "Cosa ci lascerà Milano Cortina",
      tempo: "4h fa",
      lettori: "8778 lettori",
    },
  ];

  return (
    <aside className="aside-container ms-3" style={{ width: "320px" }}>
      <div className="card shadow-none border-1 mb-2 custom-rounded-aside">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-0" style={{ fontSize: "16px" }}>
              LinkedIn Notizie
            </h6>
            <BsInfoSquareFill
              className="text-secondary"
              style={{ fontSize: "12px" }}
            />
          </div>

          <p className="text-secondary fw-bold small mb-3">Storie principali</p>

          <ul className="list-unstyled mb-2">
            {notizie.map((news) => (
              <li key={news.id} className="mb-3 news-item cursor-pointer">
                <div
                  className="fw-bold text-dark d-block text-truncate"
                  style={{ fontSize: "14px" }}
                >
                  • {news.titolo}
                </div>
                <div
                  className="text-secondary ps-3"
                  style={{ fontSize: "12px" }}
                >
                  {news.tempo} • {news.lettori}
                </div>
              </li>
            ))}
          </ul>

          <button className="btn btn-light btn-sm fw-bold text-secondary d-flex align-items-center p-1 px-2 border-0 bg-transparent hover-bg-light mb-4">
            Visualizza altro <BsChevronDown className="ms-1" />
          </button>

        </div>
      </div>

      <div className="card shadow-none border-1 overflow-hidden custom-rounded-aside mb-3">
        <img
          src="https://media.licdn.com/media/AAYAAQTPAAgAAQAAAAAAADBJg6kiYYJxTUOBq1MuLPcNcQ.png"
          className="card-img-top"
          alt="LinkedIn Learning"
        />
      </div>

      <div className="px-4 text-center">
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-2"
          style={{ fontSize: "12px" }}
        >
          <span className="text-secondary cursor-pointer hover-blue">
            Informazioni
          </span>
          <span className="text-secondary cursor-pointer hover-blue">
            Accessibilità
          </span>
          <span className="text-secondary cursor-pointer hover-blue">
            Centro assistenza
          </span>
        </div>
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-2"
          style={{ fontSize: "12px" }}
        >
          <span className="text-secondary cursor-pointer hover-blue">
            Privacy e condizioni <BsChevronDown style={{ fontSize: "10px" }} />
          </span>
          <span className="text-secondary cursor-pointer hover-blue">
            Opzioni per gli annunci pubblicitari
          </span>
        </div>
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-2"
          style={{ fontSize: "12px" }}
        >
          <span className="text-secondary cursor-pointer hover-blue">
            Pubblicità
          </span>
          <span className="text-secondary cursor-pointer hover-blue">
            Servizi alle aziende <BsChevronDown style={{ fontSize: "10px" }} />
          </span>
        </div>
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-3"
          style={{ fontSize: "12px" }}
        >
          <span className="text-secondary cursor-pointer hover-blue">
            Scarica l'app LinkedIn
          </span>
          <span className="text-secondary cursor-pointer hover-blue">
            Altro
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 pb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
            alt="LinkedIn Logo"
            width="58"
          />
          <span className="text-dark small">LinkedIn Corporation © 2026</span>
        </div>
      </div>
    </aside>
  );
};

export default AsideHome;
