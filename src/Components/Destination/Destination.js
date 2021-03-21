import React, { useContext, useState } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { FaArrowCircleDown, FaUserFriends } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { vehicles } from '../../FakeData/Vehicles';
import Map from '../Map/Map';
import './Destination.css'

const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [place, setPlace] = useState({
        from: '',
        to: '',
    })

    const handleBlur = (e) => {
        place.from =e.target.value;
            //console.log(e.target.name , e.target.value)
            // const newPlace = { ...place};
            // newPlace[e.target.name] = e.target.value;
            
            // setPlace(newPlace);
            // setLoggedInUser(place)
            // console.log(loggedInUser)  
    }
    const handleToBlur = (e) => {
        place.to =e.target.value;
            //console.log(e.target.name , e.target.value)
            // const newPlace = { ...place};
            // newPlace[e.target.name] = e.target.value;
            
            // setPlace(newPlace);
            // setLoggedInUser(place)
            // console.log(loggedInUser)
    }
    
    const { name } = useParams();

    const vehicle = vehicles.find(vehicle => vehicle.name === name )
    const [show ,setShow] =useState(true);
    return (
        <div className="row">
            
            <div className="col-md-3" >
                {
                    show?
                        <div className="detailsForm text-center" style={{backgroundColor: 'red'}}>
                            <label className="m-1">Journey Date:</label>
                            <input className="m-3 input" type="date" name="" id=""/>
                            <br/>
                            <label className="m-3">Pick from:</label>
                            <input name="from" onBlur={handleBlur}  className="input"type="text"required/>
                            <br/>
                            <label className="m-3">Pick To : </label>
                            <input name="to" onBlur={handleToBlur} className="input" type="text"required/>
                            <br/>
                            <button className="ml-5 mt-2 btn btn-danger" onClick={() => setShow(false)}>Search</button>
                        </div>
                        :
                        <div>
                            <Card className="text-center py-4 bg-success">
                                <h5>{place.from}</h5> 
                                <h5><FaArrowCircleDown className="icon"></FaArrowCircleDown></h5>
                                <h5>{place.to}</h5>
                            </Card>
                            <div className="text-center">
                                <div>
                                    <Card className="my-3 pr-2">
                                        <p> You didn't select any vehicle.Go back Home and select one vehicle to know costing</p>
                                        <button className="btn btn-danger">
                                        <Link className="link" to='/'>Go Back Home</Link>
                                        </button>
                                    </Card>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div  className="col-md-9 text-center mt-2">
                <Map to={place.to}></Map>
            </div>
            
        </div>
    );
};

export default Destination;