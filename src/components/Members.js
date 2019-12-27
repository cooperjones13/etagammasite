import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
// import {Redirect, NavLink} from 'react-router-dom';
import {Jumbotron, Button, Spinner, ButtonGroup, InputGroup, FormControl} from 'react-bootstrap';
import './../style/Members.scss';
import GetSheetDone from 'get-sheet-done';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import MemberList from './MemberList.js'

function Members(props) {

    const [filter, setFilter] = useState(props.match.params.activetab);
    const [searchFilter, setSearchFilter] = useState("");
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
                if(sheet.data[row].blank === "FALSE"){
                    if(filter.toUpperCase() === "ALUMNI" || filter.toUpperCase() === "ACTIVE" || filter.toUpperCase() === "PLEDGE" ){

                        if(sheet.data[row].status === filter.toUpperCase() && sheet.data[row].fullname.includes(searchFilter)){
                            // console.log(sheet.data[row]);
                            filteredSheet.push(sheet.data[row]);
                        }
                    } else if (filter.toUpperCase() === "ALL"){
                        if(sheet.data[row].fullname.includes(searchFilter)){
                            // console.log(sheet.data[row]);
                            filteredSheet.push(sheet.data[row]);
                        }
                    }
                }
            }
            return filteredSheet;
        }    

        async function setFilteredMembers(){
            const filteredSheet = await loadMembers();
            setMembers(filteredSheet);
            return null;
            // console.log("***",filteredSheet);
        }
        
        setFilteredMembers();
    }, [filter, sheet, isLoaded, searchFilter]);
    

 
    return (
        <div className="Members">
            <Jumbotron fluid className="member-banner banner">
                <h2>Members</h2>
            </Jumbotron>
            <div className="members-filter">
                <ButtonGroup aria-label="Basic example">
                    <Button as={Link}  to="/members/active" variant="primary">Actives</Button>
                    <Button as={Link}  to="/members/alumni" variant="primary">Alumni</Button>
                    <Button as={Link}  to="/members/pledge" variant="primary">Pledges</Button>
                    <Button as={Link}  to="/members/all" variant="primary">All</Button>
                </ButtonGroup>
                <InputGroup className="search-members">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="btnGroupAddon"><FontAwesomeIcon icon={faFilter}/></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={(e)=>{
                            setSearchFilter(e.target.value);
                            // console.log(e.target.value);
                        }}
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="btnGroupAddon"
                    />
                </InputGroup>
            </div>
            {
                isLoaded?
                (<section className="membersView">
                    <MemberList members={members} page={filter}/>
                </section>):
                <Spinner animation="grow" />
            }
        </div>
    );
}

export default Members;
