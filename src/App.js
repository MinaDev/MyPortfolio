
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component'
import MyCarousal from './components/my-carousal/my-carousal.component'
import TitleMessage from './components/title-message/title-message.component'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide"
import { Parallax } from "react-parallax";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import BgImage from "./assets/img/parallex/background.webp"
import Skills  from "./pages/skills/skills.component"
import Experience from './pages/experience/experience.component'


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>      
      <MyNavbar />
      <MyCarousal />
      <TitleMessage/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
          <hr/>
             <Skills/>
          </Slide>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr/>
             <Experience/>
          </Fade>
        </Container>
      </div>
      
      
      </div>
  );
 
}

export default App;
