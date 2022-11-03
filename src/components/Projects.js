import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectimg1.png";
import projImg2 from "../assets/img/projectimg2.png";
import projImg3 from "../assets/img/projectimg3.png";
import projImg4 from "../assets/img/projectimg4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects1 = [
    {
      title: "FONDATION TUNISIE",
      description: "I contributed to the front-end development of this website using ReactJS and GATSBY.",
      imgUrl: projImg1,
      link: "https://fondationtunisie.org/"
    },
    {
      title: "ATELIER",
      description: "I contributed to the front-end development of this website using ReactJS and GATSBY.",
      imgUrl: projImg2,
      link: "https://preview.atelier.eyespot.agency/"
    },
    {
      title: "ONYVA",
      description: "I contributed to the front-end development of this website using ReactJS and GATSBY.",
      imgUrl: projImg3,
      link: "https://preview.onyva.eyespot.agency/"
    },
   
  
  ];
  const projects2 = [
    {
      title: "MY OLD PORTFOLIO",
      description: " I have developed a fully responsive personal portfolio using React and CSS3.",
      imgUrl: projImg4,
      link: "https://amal-benhenia.github.io/myPortfolio/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few past projects I've worked on. For more projects, I invite you to visit my Github account.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     {
                      projects2.map((project, index)=>{
                        return (
                          <ProjectCard
                          key={index}
                          {...project}/>
                        )
                      })
                     }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Skills grow so will this portfolio.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}