import React from 'react';
import { ListGroup, Figure, Card } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="contactPage">
      <Card className="contact-card">
        <ListGroup className="ListGroup">
          <ListGroup.Item className="contacticon">
            {' '}
            <Figure.Image
              width={180}
              height={180}
              border={0}
              alt="171x180"
              src="https://cdn.worldvectorlogo.com/logos/mail-ios.svg"
            />
            negash4@gmail.com
          </ListGroup.Item>
          <ListGroup.Item className="contacticon">
            <Figure.Image
              className="image"
              width={180}
              height={180}
              alt="171x180"
              src="https://cdn.worldvectorlogo.com/logos/github-icon.svg"
            />
            <a
              href="https://github.com/Meseret-G?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my work!
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
