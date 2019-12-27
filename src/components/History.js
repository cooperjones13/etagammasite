import React from 'react';
// import {Link} from 'react-router-dom';
import {Jumbotron, Card, Tabs, Tab, Button} from 'react-bootstrap';
import './../style/History.scss';

import placeholder from '../images/placeholder.png';

function History() {

  return (
        <div className="History">
            <Jumbotron fluid className="banner">
                <h2>History</h2>
            </Jumbotron>

            <Card className="localHistory historyCard" style={{ width: '90%' }}>
              <Card.Header as="h3">Local History</Card.Header>
              <Card.Body>
                <Card.Title>Founding and Alpha Pledge Class (1997)</Card.Title>
                lorem ipsum 
              </Card.Body>
              <Card.Body>
              <Card.Title>Present Day (2020)</Card.Title>
                The fraternity is currently run by Regent Mitchell Spencer.
              </Card.Body>
            </Card>

            <Card className="nationalHistory historyCard" style={{ width: '90%' }}>
              <Card.Header as="h3">National History</Card.Header>
              <Card.Body>
                Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Since its founding at the University of Minnesota in 1904, over 30,000 have been initiated over the years. With emphasis on quality and a strong fraternal bond, the Fraternity has chapters only at ABET accredited schools. Theta Tau follows carefully a program in the selection and development of its members that stresses the importance of high professional ethics and exemplary practices. Within each chapter, the Fraternity stimulates professional activity and social compatibility; provides a framework for group participation in campus, community, engineering, and fraternity affairs; and promotes lasting friendships - a lifetime of brotherhood in an engineering environment.
              </Card.Body>
              <Card.Body>
                <Card.Title>Purpose</Card.Title>
                The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.
              </Card.Body>
              <Card.Body>
                <Card.Title>Core Values</Card.Title>
                From recruitment, through pledging, to lifelong brotherhood, our members are:
                <ul>
                  <li>Honest and Ethical</li>
                  <li>Dependable and Trustworthy</li>
                  <li>Respectful of Ourselves and Each Other</li>
                  <li>Generous of Time, Talent, and Treasure for Each Other, Theta Tau, and our Community</li>
                  <li>Proud that we are the oldest, largest, and foremost Fraternity for Engineers</li>
                </ul>
              </Card.Body>
              <Card.Body>
                <Card.Title>Open Motto</Card.Title>
                <blockquote className="blockquote mb-0">
                  <p>
                    {'\"'}
                    Whatsoever thy hand findeth to do, do it with thy might{'\"'}
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Ecclesiastes 9:10</cite>
                  </footer>
                </blockquote>
              </Card.Body>
              <Card.Body>
                <Card.Title>Core Values</Card.Title>
                From recruitment, through pledging, to lifelong brotherhood, our members are:
                <ul>
                  <li>Culture of brotherhood, lifelong relationships, and connection</li>
                  <li>Mutual respect and professionalism</li>
                  <li>Balance of social, service, and professional activities</li>
                  <li>Diversity of engineering disciplines and demographics</li>
                </ul>
              </Card.Body>

              
            </Card>
        </div>
  );
}

export default History;