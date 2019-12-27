import React from 'react';
// import {Link} from 'react-router-dom';
import {Card, Jumbotron, Accordion, Button} from 'react-bootstrap';
import './../style/Rush.scss';


function Rush() {

  return (
        <div className="Rush">
              <Jumbotron fluid className="rushFlyer">
              </Jumbotron>


              <Button variant="primary" size="lg" href="https://forms.gle/h7A6dZ9gWuGvgnaB7" target="_blank">Link to Signup Form</Button>

              <Card className="aboutRush" style={{ width: '90%' }}>
                <Card.Body id="faq">
                  <Card.Title>Frequently Asked Questions</Card.Title>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          What is Pledging?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Pledging is the process by which individuals integrate themselves into the brotherhood. It is led by pledge instructors, who assist the pledges in developing their professional skills, aiding the community, and most important of all, getting to know their future brothers.
                            <br/>
                            <br/>
                            As a Pledge, you will be asked to:
                            <ul>
                              <li>Attend weekly meetings - time and location will be determined based on Pledge Class's schedules</li>
                              <li>Learn the local and national history and complete weekly quizzes and a final test at the end of the semester</li>
                              <li>Get to know the active brothers through short "interviews"</li>
                              

                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Is Theta Tau a gender-inclusive fraternity?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          <Card.Title>Yes!</Card.Title>
                          Theta Tau is a Coed Fraternity and we accept all engineers regardless of gender identity, race, and sexual orientation! Approximately half of our fraternity identify as women.
                          <br/>
                          <span role="img" aria-label="Pride Flag" id="prideFlag">🏳️‍🌈</span>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        Does Theta Tau condone or participate in hazing?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                          <Card.Title>No.</Card.Title>
                          Theta Tau has a strict zero tolerance policy regarding hazing. Pledges will not be asked to do anything unreasonable, and are encouraged to talk to their pledge trainers or any chapter officer if they feel something makes them uncomfortable.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                        Is Theta Tau a Social Fraternity?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                          <Card.Title>No.</Card.Title>
                            Theta Tau is a Professional Fraternity. We are not affiliated with CU Boulder's IFC or Panhellenic Council.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                        Can I rush Theta Tau if I am a member of another Greek Organization? 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                          <Card.Title>Yes!</Card.Title>
                            Theta Tau is non-competitive with the social fraternities and sororities, we have several brothers that are members of Greek Life on campus and can offer advice on balancing time between organizations.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                </Card.Body>
              </Card>

              <Button variant="primary" size="lg" href="https://forms.gle/h7A6dZ9gWuGvgnaB7" target="_blank">Link to Signup Form</Button>
              <br/>
        </div>
  );
}

export default Rush;