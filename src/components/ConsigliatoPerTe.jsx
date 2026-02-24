import { IoEyeSharp } from "react-icons/io5";
import "./ProfiloBoxes.css";

const ConsigliatoPerTe = () => {
  return (
    <div className="card shadow-none border-1 mb-2 custom-rounded">
      <div className="card-body p-3 p-md-4">
        <h2 className="fw-bold mb-0 h5 text-dark">Consigliato per te</h2>
        <div className="d-flex align-items-center text-secondary mb-3 small">
          <IoEyeSharp className="me-1" /> Solo per te
        </div>

        <div className="inner-suggestion-box p-3">
          <div className="d-flex align-items-center mb-2">
            <div className="me-3 flex-shrink-0">
              <svg
                width="56"
                height="40"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="40" rx="2" fill="#DCE6F1" />
                <rect
                  x="0"
                  y="0"
                  width="56"
                  height="10"
                  rx="2"
                  fill="#8BB1D1"
                />
                <circle cx="5" cy="5" r="1.5" fill="white" />
                <rect x="10" y="15" width="40" height="2" fill="#5E5E5E" />
                <rect x="10" y="20" width="40" height="2" fill="#5E5E5E" />
                <rect x="10" y="25" width="25" height="2" fill="#5E5E5E" />
                <rect
                  x="10"
                  y="32"
                  width="40"
                  height="4"
                  fill="#F8B133"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <h3 className="fw-bold h6 mb-0 text-dark">
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </h3>
          </div>

          <div className="mt-2">
            <p className="text-secondary mb-3 small">
              Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
              più visualizzazioni del profilo.
            </p>
            <button className="btn btn-outline-secondary rounded-pill fw-bold btn-compact px-3 py-1">
              Aggiungi un riepilogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsigliatoPerTe;
