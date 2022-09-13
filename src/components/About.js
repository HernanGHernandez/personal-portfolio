import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Badge, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../styles/About.css";
import hern2 from "../assets/img/hern2.jpeg"
import hern from "../assets/img/hern.jpeg"
import { TbBrandGithub, } from "react-icons/tb";
import { FiLinkedin, FiInstagram } from "react-icons/fi";


export const About = () => {
    return (
        <section className="aboutme" id="home">
            <Container>
                <div className='outerBackground'>
                    <div className='innerBackground'>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={6} xl={6}>
                                <h1><span className="tagline">About Me </span></h1>
                                {/* <Row className="justify-content-md-center">
                                    <Col xs={12} md={12} xl={12}> */}

                                <ListGroup className="myList" variant="flush">
                                    <ListGroup.Item> <b> Name: </b> Hernan Hernandez</ListGroup.Item>
                                    <ListGroup.Item> <b> HomeTown: </b> Greenfield, California</ListGroup.Item>
                                    <ListGroup.Item> <b> School: </b> California State University Monterey Bay</ListGroup.Item>
                                    <ListGroup.Item><b> Hobbies: </b> Cooking, Weight Lifting, Art Design,  </ListGroup.Item>
                                    <ListGroup.Item> <b> Resume: </b> <a href="" className="resumeBtn">Hernandez_Hernan_Resume</a></ListGroup.Item>
                                    <ListGroup.Item><b> Contact Me:</b> <a className="email" href="mailto:hernanghrndz@gmail.com">hernanghrndz@gmail.com</a></ListGroup.Item>
                                </ListGroup>
                                {/* </Col>
                                </Row> */}
                            </Col>
                            <Col xs={0} md={6} xl={3}>
                                <div className="outerImg">
                                    <img className="hernImg" width={380} src={hern} alt="about_Img" />
                                </div>
                                <div className="social-icon">
                                    <a href="linkedin.com/in/HernanHrndz"> <FiLinkedin size={35} /></a>
                                    <a href="https://www.instagram.com/hernanh_"> <FiInstagram size={35} /></a>
                                    <a href="github.com/HernanGHernandez"> <TbBrandGithub size={35} /></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default About