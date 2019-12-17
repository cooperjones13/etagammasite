import React from 'react';
// import {Redirect, NavLink} from 'react-router-dom';
import {Jumbotron, Button, Card} from 'react-bootstrap';
import './../style/Members.scss'
import {connect} from 'react-redux'
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

function Members(props) {

    useFirebaseConnect([
        { path: 'members' } // or 'todos'
      ])
    const members = useSelector(state => state.firebase.data['members']);
 
    return (
        <div className="Members">
            <Jumbotron fluid className="member-banner banner">
                <h2>Brothers of Eta Gamma Chapter</h2>
            </Jumbotron>
            <section className="membersView">
                {members && Object.entries(members).map(member=>{
                    console.log(member);
                    return(
                        <Card style={{ width: '18rem' }} key={member[0]}>
                            <Card.Body>
                                <Card.Title>{member[1].name}</Card.Title>
                                <Card.Text>
                                {member[1].status}
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
