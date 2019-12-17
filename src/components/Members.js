import React from 'react';
// import {Redirect, NavLink} from 'react-router-dom';
import {Jumbotron, Button, Card} from 'react-bootstrap';
import './../style/Members.scss'
import {connect} from 'react-redux'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

function Members(props) {

    useFirestoreConnect([
        { collection: 'members' } // or 'todos'
      ])
    const members = useSelector(state => state.firestore.ordered.members);
 
    return (
        <div className="Members">
            <Jumbotron fluid className="member-banner banner">
                <h2>Brothers of Eta Gamma Chapter</h2>
            </Jumbotron>
            <section className="membersView">
                {members && members.map(member=>{
                    return(
                        <Card style={{ width: '18rem' }} key={member.id}>
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </section>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        members: state.member.members
    }
}

export default connect(mapStateToProps)(Members);
