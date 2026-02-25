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

function App() {
  return (
    <>
      <NavBarLink />
      <Routes>
        <Route
          path="/profile"
          element={
            <div>
              <ProfileMainDetails />
              <ConsigliatoPerTe />
              <Analisi />
              <Experience />
            </div>
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
      <Aside />
      <FooterLink />
    </>
  )
}

export default App
