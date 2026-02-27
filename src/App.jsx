import "./App.css";
import NavBarLink from "./componentsCri/NavBarLink";
import ProfileMainDetails from "./ComponentsNG/ProfileMainDetails";
import ConsigliatoPerTe from "./components/ConsigliatoPerTe";
import Analisi from "./components/Analisi";
import Experience from "./components/Experience";
import Aside from "./components/Aside";
import FooterLink from "./componentsCri/FooterLink";
import { Col, Container, Row } from "react-bootstrap";
import Posts from "./componentsCri/Posts";
import Jobs from "./ComponentsNG/jobs";
import { Route, Routes } from "react-router-dom";
import AsideHomeProfile from "./components/AsideHomeProfile";
import AsideJobProfile from "./components/AsideJobProfile";
import AsideHome from "./components/AsideHome";
import CreatePostLink from "./componentsCri/CreatePostLink";
import { useEffect } from "react";
import { getAllProfiles } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfiles());
  }, []);

  return (
    <>
      <NavBarLink />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row>
                <Col className="d-none d-lg-block" lg={2}>
                  <AsideHomeProfile />
                </Col>
                <Col xs={12} lg={7}>
                  <CreatePostLink />
                  <Posts />
                </Col>
                <Col className="d-none d-lg-block" lg={3}>
                  <AsideHome />
                </Col>
              </Row>
            </Container>
          }
        />
        <Route
          path="/jobs"
          element={
            <Container>
              <Row>
                <Col className="d-none d-lg-block" lg={3}>
                  <AsideJobProfile />
                </Col>
                <Col xs={12} lg={9}>
                  <Jobs />
                </Col>
              </Row>
            </Container>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <>
              <Container>
                <Row>
                  <Col className="col-12 col-lg-8">
                    <ProfileMainDetails />
                    <ConsigliatoPerTe />
                    <Analisi />
                    <Experience />
                  </Col>
                  <Col>
                    <Aside />
                  </Col>
                </Row>
              </Container>
              <FooterLink />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
