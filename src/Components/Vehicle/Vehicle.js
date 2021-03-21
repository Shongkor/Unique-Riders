import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Vehicle = (props) => {
    const { name, id, image } = props.vehicle;
    return (
        <>
            

                <div className='col-sm-12 col-md-6 col-lg-3 my-3 py-5 text-align-center container'>
                    <Link to={`/better-ride/${name}`}>
                        <Card style={{ width: '15rem', height: '20rem' }} className='p-4 my-5'>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
           
        </>
    );
};

export default Vehicle;