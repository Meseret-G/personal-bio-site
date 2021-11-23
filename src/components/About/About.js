import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../../styles/globals/index.scss';

export default function About() {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/86808221?s=400?u=18959c7406db1b54601ee821038c5b72b507de78?v=4"
        className="img-fluid"
        alt="headShot"
      />
      <h1> Meseret Gebremariam, Frontend Developer </h1>
      <div>
        <Accordion className="aboutpage" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Background</Accordion.Header>
            <Accordion.Body>
              Hi there!My name is Meseret Gebremariam. I have been working as a
              business analyst in the healthcare IT industry for the last 5
              years. Why did I joined Nashville Software school? I have always
              been intrigued by how a website works. There are several
              similarities between web development and business analysis. both
              require a strong analytical and problem solving skill. I enjoy
              learning and trying new things, and I hope to find my version of
              success in the software engineering.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why Software Development?</Accordion.Header>
            <Accordion.Body>
              Software development provides an opportunity for continuous
              learning. The field is broad and encompasses various roles related
              to both computer applications and systems. software developers
              work in practically every industry, and I am confident that it
              helps me to create a better career opportunity by maintaining my
              personal passion in continuous education.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Contact Me!</Accordion.Header>
            <Accordion.Body>
              Email: negash4@gmail.com
              <hr />
              <a
                href="https://github.com/Meseret-G?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <hr />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
