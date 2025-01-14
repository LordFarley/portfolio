import React from "react";
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import travel from './Assests/travel.png';
import websitepng from './Assests/website.png';
import colorsharp from './Assests/color-sharp2.png';
import boost from './Assests/Boost.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";

export const Projects = () =>{
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: travel,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: websitepng,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: boost,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: travel,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: websitepng,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: boost,
        },
      ];

      return (
        <section className="project" id="projects">
            <Container className="">
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {(isVisible) => 
                                <div className={isVisible? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>o i i ah o o i i ah</p>
                                    <Tab.Container id="project-tabs" defaultActiveKey="first">
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
                                        <Tab.Content id="slideInUp" className={isVisible? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index)=>{
                                                        return(
                                                            <ProjectCard key={index} {...project}/>
                                                        )
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Ohio</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorsharp} /> */}
        </section>
      )
}