import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { FaLinkedin, FaUserCircle } from "react-icons/fa"
import { IoSearch, IoHomeSharp, IoBriefcase } from "react-icons/io5"
import { BsFillPeopleFill } from "react-icons/bs"
import { HiChatAlt } from "react-icons/hi"
import { IoIosNotifications } from "react-icons/io"
import { TfiLayoutGrid3Alt } from "react-icons/tfi"
import { MdRequestPage } from "react-icons/md"
import { Button, Col, Row } from "react-bootstrap"
import { IoMdCompass } from "react-icons/io"
import { MdGroups } from "react-icons/md"
import { FaChalkboard } from "react-icons/fa"
import { VscGraph } from "react-icons/vsc"
import { FaInfoCircle } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import getProfile from "../redux/actions"
import { useEffect } from "react"

function NavBarLink() {
  const profileDetails = useSelector((currentState) => {
    return currentState.profile.profileDetails
  })

  const loading = useSelector((currentState) => {
    return currentState.profile.loading
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <Navbar expand="lg" className=" border-bottom p-0">
      <Container className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="p-0">
            <FaLinkedin className=" d-none d-lg-block text-primary display-5" />
            <FaUserCircle className=" fs-1 d-lg-none" />
          </Navbar.Brand>

          <div className="d-flex align-items-center rounded-5 border border-secondary ps-3 pe-5 py-1">
            <IoSearch className=" fs-5 me-2" />
            <input
              type="text"
              placeholder="Cerca"
              className="border-0 py-1"
              style={{ outline: "none" }}
            />
          </div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className=" d-flex flex-row align-items-center gap-4 justify-content-between">
            <Nav.Link className=" text-center nav-hover">
              <IoHomeSharp className="fs-4" />
              <div className="small">Home</div>
            </Nav.Link>

            <Nav.Link className=" text-center nav-hover">
              <BsFillPeopleFill className="fs-4" />
              <div className="small">My Network</div>
            </Nav.Link>

            <Nav.Link className=" text-center nav-hover">
              <IoBriefcase className="fs-4" />
              <div className="small">Jobs</div>
            </Nav.Link>

            <Nav.Link className=" text-center nav-hover">
              <HiChatAlt className="fs-4" />
              <div className="small">Messaging</div>
            </Nav.Link>

            <Nav.Link className=" text-center nav-hover">
              <IoIosNotifications className="fs-4" />
              <div className="small">Notifications</div>
            </Nav.Link>

            <NavDropdown
              id="user-dropdown"
              className=" d-none d-lg-block text-center"
              align="end"
              title={
                <div className=" d-flex flex-column align-items-center">
                  <FaUserCircle className="fs-4" />
                  <span className="small">You</span>
                </div>
              }
            >
              <Container>
                <Row>
                  <Col className="col-3 pt-1">
                    {!loading && profileDetails?.image && (
                      <img
                        src={profileDetails.image}
                        alt="profile"
                        style={{
                          width: "25px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </Col>
                  <Col className=" col-9 fs-6 ps-0">
                    <h5
                      className={`m-0 ${loading || !profileDetails ? "placeholder col-2" : ""}`}
                    >
                      {!loading && profileDetails && (
                        <>
                          {profileDetails.name} {profileDetails.surname}
                        </>
                      )}
                    </h5>
                    <span
                      className={
                        loading || !profileDetails
                          ? "placeholder col-2 m-0"
                          : "m-0"
                      }
                    >
                      {!loading && profileDetails?.title}
                    </span>
                  </Col>
                  <div className=" d-flex justify-content-center gap-1 my-3">
                    <Button className=" bg-light text-primary text-start rounded-5 fw-semibold">
                      Visualizza profilo
                    </Button>
                    <Button className=" text-start rounded-5 fw-semibold">
                      Verifica ora
                    </Button>
                  </div>
                  <NavDropdown.Divider />
                  <Col>
                    <h6>Account</h6>
                    <p className=" text-secondary fw-semibold">
                      <MdRequestPage className="fs-4 text-warning" /> Prova 1
                      mese di Premium per 0 EUR
                    </p>
                    <ul className=" list-unstyled">
                      <li className=" my-2">
                        <a
                          href="#"
                          className=" text-decoration-none text-secondary"
                        >
                          Impostazioni e privacy
                        </a>
                      </li>
                      <li className=" my-2">
                        <a
                          href="#"
                          className=" text-decoration-none text-secondary"
                        >
                          Guida
                        </a>
                      </li>
                      <li className=" my-2">
                        <a
                          href="#"
                          className=" text-decoration-none text-secondary"
                        >
                          Lingua
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <NavDropdown.Divider />
                  <Col>
                    <h6>Gestisci</h6>
                    <ul className=" list-unstyled">
                      <li className=" my-2">
                        <a
                          href="#"
                          className=" text-decoration-none text-secondary"
                        >
                          Post e attività
                        </a>
                      </li>
                      <li className=" my-2">
                        <a
                          href="#"
                          className=" text-decoration-none text-secondary"
                        >
                          Account per la pubblicazione di offerte di lavoro
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <NavDropdown.Divider />
                  <Col>
                    <a
                      href="#"
                      className=" text-decoration-none text-secondary"
                    >
                      Esci
                    </a>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>

            <div className="vr d-none d-lg-block"></div>

            <NavDropdown
              id="second-dropdown"
              className=" d-none d-lg-block text-center"
              align="end"
              title={
                <div className="d-flex flex-column align-items-center">
                  <TfiLayoutGrid3Alt className="fs-4" />
                  <span className="small">For Business</span>
                </div>
              }
            >
              <Container style={{ width: "400px" }}>
                <Row className=" d-flex">
                  <Col className=" col-6">
                    <h4>Le mie app</h4>
                    <ul className=" list-unstyled">
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          <IoMdCompass className=" text-primary" />
                          Trova nuovi clienti
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          <MdGroups className=" text-primary" />
                          Gruppi
                        </a>
                      </li>
                      <h5 className=" text-secondary fw-semibold">Talent</h5>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          <FaChalkboard className=" text-primary" />
                          Assumi con l'IA
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          <VscGraph className=" text-primary" />
                          Talent Insight
                        </a>
                      </li>
                      <h5 className=" text-secondary fw-semibold">Vendite</h5>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          <FaInfoCircle className=" text-primary" />
                          MarketPlace dei servizi
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col className=" col-6">
                    <h4>Scopri altro per il business</h4>
                    <ul className=" list-unstyled">
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Assumi su Linkedin <br />
                          <span className=" fw-normal small">
                            trova, attrai e assumi
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Vendi con Linkedin <br />
                          <span className=" fw-normal small">
                            Costruisci relazioni con i buyer
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Pubblica un'offerta di lavoro gratuita <br />
                          <span className=" fw-normal small">
                            Trova candidati di qualità
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Fai pubblicità su Linkedin <br />
                          <span className=" fw-normal small">
                            Acquisisci clienti e fai crescere la tua azienda
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Inizia con premium <br />
                          <span className=" fw-normal small">
                            Amplia e sfrutta la tua rete
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Impara con Linkedin <br />
                          <span className=" fw-normal small">
                            Corsi per formare i tuoi dipendenti
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" text-decoration-none text-black fw-semibold nav-hover"
                        >
                          Centro per amministratori <br />
                          <span className=" fw-normal small">
                            Gestisci i dettagli di fatturazione e account
                          </span>
                        </a>
                      </li>
                      <h6>
                        Crea una pagina aziendale{" "}
                        <span className=" fs-3">+</span>
                      </h6>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>

            <Nav.Link className=" text-center d-none d-xl-block nav-hover">
              <MdRequestPage className="fs-4 text-warning" />
              <div className=" d-none d-xl-block small">Try Premium</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarLink
