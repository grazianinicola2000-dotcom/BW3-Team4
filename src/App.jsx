import "./App.css"
import NavBarLink from "./componentsCri/NavBarLink"
import ProfileMainDetails from "./ComponentsNG/ProfileMainDetails"
import ConsigliatoPerTe from "./components/ConsigliatoPerTe"
import Analisi from "./components/Analisi"
import Experience from "./components/Experience"
import Aside from "./components/Aside"
import FooterLink from "./componentsCri/FooterLink"
import { Col, Container, Row } from "react-bootstrap"
import Posts from "./componentsCri/Posts"
import CreatePostLink from "./componentsCri/CreatePostLink"

function App() {
  return (
    <>
      <NavBarLink />
      <Container>
        <Row>
          <Col className=" col-12 col-lg-8">
            {/* <ProfileMainDetails />
            <ConsigliatoPerTe />
            <Analisi />
            <Experience />
            <FooterLink />
            <Posts /> */}
            <CreatePostLink />
          </Col>
          <Col className=" d-none d-lg-block col-4">
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
