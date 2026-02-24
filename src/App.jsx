import "./App.css"
import NavBarLink from "./componentsCri/NavBarLink"
import ProfileMainDetails from "./ComponentsNG/ProfileMainDetails"
import ConsigliatoPerTe from "./components/ConsigliatoPerTe"
import Analisi from "./components/Analisi"
import Experience from "./components/Experience"
import Aside from "./components/Aside"
import FooterLink from "./componentsCri/FooterLink"

function App() {
  return (
    <>
      <div>
        <NavBarLink />
        <ProfileMainDetails />
        <ConsigliatoPerTe />
        <Analisi />
        <Experience />
      </div>
      <Aside />
      <FooterLink />
    </>
  )
}

export default App
