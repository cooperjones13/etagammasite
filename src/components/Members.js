import React, { useEffect, useState } from 'react';
// import {Redirect, NavLink} from 'react-router-dom';
import {Jumbotron, Button, Card, Badge, Spinner} from 'react-bootstrap';
import './../style/Members.scss';
import GetSheetDone from 'get-sheet-done';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Members(props) {

    const [filter, setFilter] = useState(props.match.params.activetab);
    // console.log(props);
    const [sheet, setSheet] = useState([]);

    const [members, setMembers] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(()=>{
        setFilter(props.match.params.activetab);
    }, [props.match.params.activetab])

    useEffect(()=>{

        async function loadMembers(){
            if(!isLoaded){
                const spreadsheet = await GetSheetDone.labeledCols("10byFtG7v3t_ihh7ZcTXT7e_S_2DeNOSzvYylTGBe_gY");
                setLoaded(true);
                setSheet(spreadsheet);
                return;
            }
            // setMembers(sheet);
            
    
            // console.log(members);
            let filteredSheet = [];
            //  console.log(sheet.data);
            for(let row in sheet.data){
                // console.log(sheet.data[row]);
                if(sheet.data[row].isnotblank === "FALSE"){
                    if(filter.toUpperCase() === "ALUMNI" || filter.toUpperCase() === "ACTIVE"){
                        // console.log(row);
                        if(sheet.data[row].status === filter.toUpperCase()){
                            // console.log(sheet.data[row]);
                            filteredSheet.push(sheet.data[row]);
                        }
                    } else if (filter.toUpperCase() === "ALL"){
                        filteredSheet.push(sheet.data[row]);
                    }
                }
            }
            return filteredSheet;
        }    

        async function setFilteredMembers(){
            const filteredSheet = await loadMembers();
            setMembers(filteredSheet);
            // console.log("***",filteredSheet);
        }
        
        setFilteredMembers();
    }, [filter, sheet, isLoaded]);
    

 
    return (
        <div className="Members">
            <Jumbotron fluid className="member-banner banner">
                <h2>Brothers of Eta Gamma Chapter</h2>
            </Jumbotron>

            {
                isLoaded?
                (<section className="membersView">
                {members && Object.entries(members).map(member=>{
                    return(
                        <Card style={{ width: '18rem' }} key={member[1].uid}>
                            <Card.Body>
                                <Card.Text><Badge variant="secondary">ΗΓ {member[1].rollnum}</Badge></Card.Text>
                                <Card.Title>{member[1].fullname}</Card.Title>
                                <Card.Text>
                                {member[1].status}
                                </Card.Text>
                                {(member[1].linkurl !== "")?(<Button variant="primary" href={member[1].linkurl} target="_blank">Contact</Button>):null}
                            </Card.Body>
                        </Card>
                        )
                    })}
                </section>):
                <Spinner animation="grow" />
            }
        </div>
    );
}

export default Members;
