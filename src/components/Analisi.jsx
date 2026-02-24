import { IoEyeSharp } from "react-icons/io5"
import { BsPeopleFill, BsBarChartLineFill, BsArrowRight } from "react-icons/bs"
import "./ProfiloBoxes.css"

const Analisi = () => {
  return (
    <div className="card shadow-none border-1 mb-2 custom-rounded">
      <div className="card-body p-3 p-md-4 pb-0">
        <h2 className="fw-bold mb-0 h5">Analisi</h2>
        <div className="d-flex align-items-center text-secondary mb-3 small">
          <IoEyeSharp className="me-1" /> Solo per te
        </div>

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <div className="d-flex align-items-start p-1">
              <BsPeopleFill className="fs-4 me-2 flex-shrink-0 text-dark opacity-75" />
              <div>
                <div className="fw-bold small">
                  4 visualizzazioni del profilo
                </div>
                <div className="text-secondary extra-small">
                  Scopri chi ha visitato il tuo profilo.
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="d-flex align-items-start p-1">
              <BsBarChartLineFill className="fs-4 me-2 flex-shrink-0 text-dark opacity-75" />
              <div>
                <div className="fw-bold small">98 impression del post</div>
                <div className="text-secondary extra-small">
                  Scopri chi sta interagendo con i tuoi post.
                </div>
                <div className="text-secondary extra-small mt-1">
                  Ultimi 7 giorni
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer bg-transparent border-top-1 text-center py-2 cursor-pointer hover-bg-light transition-all">
        <span className="fw-bold text-secondary small d-flex align-items-center justify-content-center gap-1">
          Mostra tutte le analisi <BsArrowRight />
        </span>
      </div>
    </div>
  )
}

export default Analisi
