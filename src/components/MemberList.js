

import React from 'react';
// import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import {Card, Button, Badge} from 'react-bootstrap'
import './../style/Members.scss';


function MemberList({members}) {

    return (
        <div className="members-list">  
        {members && Object.entries(members).map(member=>{
            return(
                <Card style={{ width: '18rem' }} key={member[1].uid}>
                    {
                        // member[1].imageurl !== ""?
                        false? //uncomment line above and comment this line if you want to add pictures
                            (
                                <LazyLoad>
                                    <Card.Img variant="top" src={member[1].imageurl} />
                                </LazyLoad>
                            )
                            :null
                    }
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
            }
        )}
        </div>  
    );
}

export default MemberList;