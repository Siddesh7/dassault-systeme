import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "Mechanical",
      description: "Design & Development",
      imgUrl:
        "http://drive.google.com/uc?export=view&id=1lSO2JnmA2wYZ439h2C_UWGXIfaHkF4x_",
      link: "/category/mech/8",
    },
    {
      title: "Physics",
      description: "Design & Development",
      imgUrl:
        "http://drive.google.com/uc?export=view&id=1_9ifQpsl-vAK4ju7PW9eVlcVC9LBFTMP",
      link: "/category/phy/5",
    },
    {
      title: "Maths",
      description: "Design & Development",
      imgUrl:
        "http://drive.google.com/uc?export=view&id=13CaGHjhj_GKws7MA6LSuiCmT53Su9GPE",
      link: "/category/math/0",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    VR can be used to create virtual models of buildings and
                    other structures, allowing architects and designers to
                    visualize their projects and make changes before
                    construction begins.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
