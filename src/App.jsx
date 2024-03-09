import AboutMe from "./Components/AboutMe";
import Awards from "./Components/Awards";
import Collaboration from "./Components/Collaboration";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import SkillSection from "./Components/SkillsSection";
import TechnologiesCarousel from "./Components/TechnologiesCarrousel";

function App() {
    return(
        <>
            <Header></Header>
            <Home></Home>
            {/* {<TechnologiesCarousel technologies={["CSS", "PHP", "React", "Tailwind", "Vite", "Django"]}></TechnologiesCarousel>} */}
            <AboutMe></AboutMe>
            <Awards></Awards>
            <SkillSection></SkillSection>
            <Portfolio></Portfolio>
            <Collaboration></Collaboration>
            <Footer></Footer>
        </>
    );
}

export default App;