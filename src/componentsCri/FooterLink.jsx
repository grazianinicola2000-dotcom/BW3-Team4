import { Col, Container, Row } from "react-bootstrap"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"
import { IoShieldHalf } from "react-icons/io5"

const FooterLink = () => {
  return (
    <Container>
      <Row>
        <Col className=" d-flex gap-5 small p-0 mt-5">
          <ul className=" list-unstyled d-flex flex-column gap-3 me-3 small">
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Informazioni
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Linee guida della comunità
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Privacy e condizioni
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Sales Solutions
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Centro sicurezza
              </a>
            </li>
          </ul>
          <ul className=" list-unstyled d-flex flex-column gap-3 me-3 small">
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Accessibilità
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Carriera
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Mobile
              </a>
            </li>
          </ul>
          <ul className=" list-unstyled d-flex flex-column gap-3 small">
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Talent Solution
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Soluzioni di marketing
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Pubblicità
              </a>
            </li>
            <li>
              <a href="#" className=" text-decoration-none text-secondary">
                Piccole imprese
              </a>
            </li>
          </ul>
        </Col>
        <p className=" fw-semibold mt-2 mb-5 p-0" style={{ fontSize: "12px" }}>
          Linkedin Corporation © {new Date().getFullYear()}
        </p>
        <Col className=" d-flex gap-5 small p-0">
          <ul className=" list-unstyled d-flex flex-column gap-3 me-3 small">
            <li className="d-flex align-items-center gap-2">
              <BsFillQuestionCircleFill className=" mb-3 fs-5 text-secondary" />
              <div>
                <h6 className=" text-secondary m-0">Domande?</h6>
                <a
                  href="#"
                  className=" text-decoration-none text-black nav-hover"
                >
                  Visita il nostro Centro assistenza
                </a>
              </div>
            </li>
            <li className="d-flex align-items-center gap-2">
              <IoMdSettings className=" mb-3 fs-5 text-secondary" />
              <div>
                <h6 className=" text-secondary m-0">
                  Gestisci il tuo account e la tua privacy
                </h6>
                <a
                  href="#"
                  className=" text-decoration-none text-black nav-hover"
                >
                  Vai alle impostazioni
                </a>
              </div>
            </li>
            <li className="d-flex align-items-center gap-2">
              <IoShieldHalf className=" mb-3 fs-5 text-secondary" />
              <div>
                <h6 className=" text-secondary m-0">
                  Trasparenza sui contenuti consigliati
                </h6>
                <a
                  href="#"
                  className=" text-decoration-none text-black nav-hover"
                >
                  Scopri di più sui contenuti consigliati.
                </a>
              </div>
            </li>
          </ul>
          <Col>
            <label htmlFor="lingua" className=" text-muted mb-1 small">
              Seleziona lingua
            </label>
            <select
              id="lingua"
              name="lingua"
              className=" d-block border border-black rounded-1 w-50 p-1"
            >
              <option value="">italiano</option>
              <option value="linkedin">inglese</option>
              <option value="google">spagnolo</option>
            </select>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default FooterLink
