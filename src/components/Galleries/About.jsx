import React from "react";
import "../Portfolio/PortfolioPage.css";
import MenuBar from "../Navigation/MenuBar";
import { Container, Col, Row, Image } from "react-bootstrap";
import FadeIn from "react-fade-in";
import ProfilePic from "../Portfolio/img/ambika.png";

function About() {
  return (
    <FadeIn transitionDuration={1000} delay={0}>
      <Container className="PortfolioPage">
        <Row className="Title">
          <p id="title"> AMBIKA MIGLANI</p>
        </Row>
        <Row>
          <Col className="MenuBar" md={4}>
            <MenuBar />
          </Col>

          <Col className="ContentCol" md={8}>
            <Row id="about">
              <Col md={6}>
                <Row id="profile">
                  <a>
                    Hi! I'm Ambika. I'm currently a frontend software developer
                    at{" "}
                    <a href="https://www.intuscare.com/" target="_blank">
                      Intus Care.
                    </a>{" "}
                    I recently graduated from Brown University with degrees in{" "}
                    <a href="https://cs.brown.edu/" target="_blank">
                      Computer Science
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.brown.edu/academics/modern-culture-and-media/about"
                      target="_blank"
                    >
                      Modern Culture and Media
                    </a>
                    . I've spent the past three years exploring CS as a partner
                    for art and digital media. One of my favourite projects that
                    I've worked on was a data visualization for the{" "}
                    <a href="https://www.tate.org.uk/art" target="_blank">
                      Tate Modern
                    </a>{" "}
                    , as a part of my product design and UI/UX internship at{" "}
                    <a href="https://cs.brown.edu/" target="_blank">
                      Holition
                    </a>{" "}
                    . Computer Science and digital media art are, in my opinion,
                    are at their most transformative state when combined with
                    other disciplines. At Brown, I led the interdisciplinary New
                    Media team in{" "}
                    <a href="https://www.ivyfilmfestival.org/" target="_blank">
                      Ivy Film Festival.
                    </a>{" "}
                    We created a{" "}
                    <a
                      href="https://hubs.mozilla.com/f5wm3MP/iff-vr-arcade-2021 "
                      target="_blank"
                    >
                      VR gallery
                    </a>{" "}
                    about hypertext, VR, AR, and New Media storytelling. As
                    someone who didn't know what CS was before coming to
                    college, making tech accessible and fun to learn is
                    important to me. I recently created a community called
                    'Decrypted By Us', a Youtube channel and community designed
                    to make technical education more accessible to minority
                    groups. In my spare time I like to do yoga, DJ, take photos,
                    <a href="http://babyface.media/" target="_blank">
                      {" "}
                      make music videos,
                    </a>
                    , and lots of tea! Email me, DM me, or make an{" "}
                    <a href="https://www.are.na/ambika-miglani" target="_blank">
                      Are.na
                    </a>{" "}
                    page with me!
                  </a>
                </Row>
                <Row id="contact">
                  <li>Email: ambika_miglani@brown.edu</li>
                  <li>
                    Linkedin:{" "}
                    <a
                      href="https://www.linkedin.com/in/ambika-miglani-031694173/"
                      target="_blank"
                    >
                      ambika-miglani
                    </a>{" "}
                  </li>
                  <li>Instagram: @ambika-miglani</li>
                </Row>
              </Col>
              <Col md={6}>
                <Image
                  className="Img"
                  fluid
                  src={ProfilePic}
                  id="profile"
                ></Image>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </FadeIn>
  );
}

export default About;
