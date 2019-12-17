import React, {useRef, useState} from 'react';
// import {Redirect, NavLink} from 'react-router-dom';
import {Form, Button, Row, Col, Card} from 'react-bootstrap';
import {createMember} from "../store/actions/createMember.js";
import { useFirebase } from 'react-redux-firebase'
import {connect} from "react-redux";
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'
import './../style/AddMember.scss'

function AddMember(props) {
    const [wasSent, updateSentState] = useState(false)

    const firebase = useFirebase()

    useFirebaseConnect([
        { path: 'members' } // or 'todos'
      ])
    const members = useSelector(state => state.firebase.data['members']);

    let addMemberForm = useRef("");
    console.log(members);


    

    
    function handleSubmit (member){
        let status = "";
        if(member.current[3].checked){
            status = "active";
        }
        else if(member.current[4].checked){
            status = "alumni";
        }
        

        const newMember = {
            name:member.current[0].value,
            rollNum:member.current[1].value,
            status:status
        }

        if(newMember.name !== "" && newMember.rollNum !== "" && newMember.status !== ""){
            return firebase.push('members', newMember)
        } else{
            console.log("Unable to add member, check inputs");
        }


    }

    return (
        <div className="AddMember">
            <div className="form-container">
                <Form className="addMemberForm" ref={addMemberForm}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                        Member Name
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control size="lg" type="text" placeholder="Member Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalRoll">
                        <Form.Label column sm={2}>
                        Roll Number
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control size="lg" type="number" placeholder="Roll Number"/>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} controlId="formHorizontalStatus" >
                        <Form.Label as="legend" column sm={2}>
                            Status
                        </Form.Label>
                        <Col>
                            <Form.Check

                            type="radio"
                            label="Active"
                            name="formHorizontalRadios"
                            id="statusActive"
                            />
                        </Col>    
                        <Col>    
                            <Form.Check
                            type="radio"
                            label="Alumni"
                            name="formHorizontalRadios"
                            id="statusAlumni"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row} className="btn-row">
                        <Button onClick={()=>handleSubmit(addMemberForm)}>Add Member</Button>
                    </Form.Group>
                </Form>
            </div>    
            <div className="members-container">
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
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createMember: (member) => dispatch(createMember(member)) 
    }
}

const mapStateToProps = (state) =>{
    return{
        members: state.member.members
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
