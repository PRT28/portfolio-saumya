import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shakespeare’s Poetry Creator",
      description: "Trained on the sonnets and poems of Shakespeare’s and create new text in a similar style continuing the given input by the user.",
      imgUrl: "https://cdn.vox-cdn.com/thumbor/ptzEs3NDhNrDQKzVTy4W8N4NE-M=/0x270:2040x1360/1400x788/filters:focal(988x848:989x849)/cdn.vox-cdn.com/uploads/chorus_asset/file/11526929/acastro_180612_2664_0001.jpg",
    },
    {
      title: "Home Automation",
      description: "Controlling switches using remote devices.",
      imgUrl: "https://drivercentral.io/images/blog/3/19f5d1d0-21f2-42f6-bd32-599ee6eacf4a.jpeg",
    },
    {
      title: "E-Commerce Website",
      description: "A Sample Website which can be used to placed order, check out inventory , apply discounts and login features.",
      imgUrl: "https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg",
    },
    {
      title: "Sarva Siksha Abhiyaan",
      description: "A Payment Integration website using HTML and CSS.",
      imgUrl: "data:image/png;base64,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",
    },
    {
      title: "EDA Prediction on E-commerce dataset",
      description: "Analysis of the collected data (Data Preprocessing and visualiza-tion) and making predictions on the data set.",
      imgUrl: "https://media.istockphoto.com/id/1158641041/photo/4k-abstract-network-connection-financial-economy.jpg?s=612x612&w=0&k=20&c=dmyksQMEAkkIOQ7u5EtaIpPkj2bY6WtrSkHjUMySCUs=",
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of the projects I have worked on to showcase my skillset. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
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
