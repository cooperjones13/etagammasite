import React, {useState, useEffect} from 'react';
import {Card, Jumbotron, Accordion, Button, Tabs, Tab} from 'react-bootstrap';
import './../style/Rush.scss';

import placeholder from '../images/placeholder.png';

function Rush(props) {
  const [activeTab, setActiveTab] = useState(props.match.params.activetab);

  useEffect(()=>{
    setActiveTab(props.match.params.activetab);
}, [props.match.params.activetab])

  return (
        <div className="Rush">
              <Jumbotron fluid className="rushFlyer">
              </Jumbotron>

              <Card className="aboutRush" style={{ width: '90%' }}>
              <Card.Header as="h3">Rush Theta Tau</Card.Header>
              <Tabs id="controlled-tab-rush" activeKey={activeTab} onSelect={k => setActiveTab(k)}>
                <Tab eventKey="requirements" title="Requirements">
                <Card.Body>
                  <Card.Title>Requirements</Card.Title>
                    <ul>
                      <li>Students must be at least 18 years of age</li>
                      <li>Students must be enrolled at the University of Colorado Boulder in the College of Engineering and Applied Sciences during the Pledging Semester</li>
                      <li>Students must be in good standing with the University and have a GPA of at least 2.25</li>
                      <li>Students must posses the qualities of brotherhood as determined by the Chapter</li>
                      <li>Students must not be a member of any of the following organizations:</li>
                      <ul className="competingList">
                        <li>Alpha Chi Sigma</li>
                        <li>Alpha Omega Epsilon</li>
                        <li>Alpha Rho Chi</li>
                        <li>Alpha Sigma Kappa</li>
                        <li>Kappa Eta Kappa</li>
                        <li>Phi Sigma Rho*</li>
                        <li>Sigma Beta Epsilon</li>
                        <li>Scarab</li>
                        <li>Sigma Phi Delta</li>
                        <li>Sigma Rho</li>
                        <li>Triangle</li>
                      </ul>
                      <p className="note">* Phi Sigma Rho is the only organization on this list that is active at CU</p>
                      <li>Students must demonstrate a professional attitude which will be beneficial to the Fraternity at large</li>
                      <li>Students must not be within six months of graduation</li>
                    </ul>
                  </Card.Body>
                </Tab>
                <Tab eventKey="faq" title="Frequently Asked Questions">
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
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <Card.Body>
                  <Card.Title>Recruitment Officers</Card.Title>
                    <div className="contact">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={placeholder}/>
                        <Card.Body>
                          <Card.Title>Pledge Trainer #1</Card.Title>
                          <Card.Text>
                            <em>Pledge Trainer - Inner Guard</em>
                          </Card.Text>
                          <Button variant="primary">Contact</Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                          <Card.Title>Pledge Trainer #2</Card.Title>
                          <Card.Text>
                            <em>Pledge Trainer - Outer Guard</em>
                          </Card.Text>
                          <Button variant="primary">Contact</Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                          <Card.Title>Kaitlin Olsen</Card.Title>
                          <Card.Text>
                            <em>Rush Chair</em>
                          </Card.Text>
                          <Button variant="primary">Contact</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Card.Body>
                </Tab>
              </Tabs>
            
              
              </Card>

              <Button variant="primary" size="lg" href="https://forms.gle/h7A6dZ9gWuGvgnaB7" target="_blank">Link to Signup Form</Button>
              <br/>
        </div>
  );
}

export default Rush;