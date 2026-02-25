import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBarLink from "./componentsCri/NavBarLink"
import ProfileMainDetails from "./ComponentsNG/ProfileMainDetails"
import ConsigliatoPerTe from "./components/ConsigliatoPerTe"
import Analisi from "./components/Analisi"
import Experience from "./components/Experience"
import Aside from "./components/Aside"
import FooterLink from "./componentsCri/FooterLink"
import AsideHomeProfile from "./components/AsideHomeProfile"
import AsideJobProfile from "./components/AsideJobProfile"
import { Col, Container, Row } from "react-bootstrap"
import Posts from "./componentsCri/Posts"
import CreatePostLink from "./componentsCri/CreatePostLink"
import AsideHome from "./components/AsideHome"

function App() {
  return (
    <>
      <NavBarLink />
      <Container className=" px-0">
        <Routes>
          <Route
            path="/"
            element={
              // <Col className=" d-none d-lg-block col-3">
              //   <AsideHome />
              // </Col>
              <>
                <Col className=" col-12 col-lg-6">
                  <CreatePostLink />
                  <Posts />
                </Col>
                <Col className=" d-none d-lg-block col-3">
                  <Aside />
                </Col>
              </>
            }
          />
          {/* <Route path="/jobs" element={<Jobs />} /> */}
          <Route
            path="/profile"
            element={
              <Row>
                <Col className=" col-8">
                  <ProfileMainDetails />
                  <ConsigliatoPerTe />
                  <Analisi />
                  <Experience />
                  <FooterLink />
                </Col>
                <Col className=" col-4">
                  <Aside />
                </Col>
              </Row>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <div>
                <ProfileMainDetails />
                <ConsigliatoPerTe />
                <Analisi />
                <Experience />
                <AsideHomeProfile />
                <AsideJobProfile />
              </div>
            }
          />
        </Routes>
      </Container>
    </>
  )
}

export default App
