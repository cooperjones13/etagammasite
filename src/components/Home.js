import React from 'react';
import {Jumbotron, Card, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../style/Home.scss'

import placeholder from '../images/placeholder.png';
import coat from '../images/thetatau-coat.png';

function Home() {

    const pillars = [
        {
            "title": "For our Brotherhood",
            "description" : "We forge lifelong bonds of fraternal friendship, a journey that develops and delivers a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment in which our members become lifelong friends.",
            "imgCaption": "Brothers doing brotherly stuff dude",
            "buttonText": "Brotherhood",
            "url":"/brotherhood"
        },
        {
            "title": " For our Community",
            "description" : "We are known for our service to our college, university and the larger community. Our service projects create a unifying environment for learning and personal growth for our members.",
            "imgCaption": "Brothers doing brotherly stuff dude",
            "buttonText": "Service",
            "url":"/service"
        },
        {
            "title": "For our Profession",
            "description" : "We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.",
            "imgCaption": "Brothers doing brotherly stuff dude",
            "buttonText": "Professionalism",
            "url":"/careers"
        } 
    ];

    const pillarCards = pillars.map((pillar, index)=>
        <Card key={index}>
            <div className="img-hover-container">
                <Card.Img variant="top" src={placeholder} />
                <p className="card-img-caption">{pillar.imgCaption}</p>
            </div>
            <Card.Body>
                <Card.Title>{pillar.title}</Card.Title>
                <Card.Text>
                {pillar.description}
                </Card.Text>
                <Button variant="primary" as={Link} to={pillar.url}>Explore {pillar.buttonText}</Button>
            </Card.Body>
        </Card>
    )

    return (
        <div className="Home">
            <Jumbotron fluid className="banner">
                <Image src={coat}/>
                <div className="banner-text">
                    <h2>Theta Tau</h2>
                    <p><em>Engineering Leadership for Service, Profession, and Brotherhood</em></p>
                </div>
            </Jumbotron>
            <section className="pillars">
                {pillarCards}
            </section>
            <Jumbotron fluid className="rush-banner">
                <h2>Interested in Becoming a Member?</h2>
                <p>Join us for our Spring 2020 Rush!</p>
                <Button as={Link} to="/rush">RUSH</Button>
            </Jumbotron>
        </div>
    );

}

export default Home;