import React from 'react';
import {Alert} from 'react-bootstrap'
import '../style/PageNotFound.scss'


function PageNotFound() {

    return (
        <div className="PageNotFound">
            <Alert variant="danger">
                Error 404: Page Not Found
            </Alert>
        </div>
    );

}

export default PageNotFound;