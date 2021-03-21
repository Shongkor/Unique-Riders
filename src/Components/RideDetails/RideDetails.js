import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { vehicles } from '../../FakeData/Vehicles'
import Map from '../Map/Map';
import './RideDetails.css'
import { FaLevelDownAlt , FaUserFriends , FaArrowCircleDown} from "react-icons/fa";
import { Card } from 'react-bootstrap';


const RideDetails = () => {
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
    //    console.log(e.target.name , e.target.value)
        
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
                            <div className="mt-3 desContainer" style={{backgroundColor: 'red'}}>
                                <img style={{ height: 70,width: 70 ,padding : 10 }} src={vehicle.image} alt=""/>    
                                <h5 className="ml-1">{vehicle.name}</h5>
                                <h5 className="ml-2"><FaUserFriends></FaUserFriends> 4</h5>
                                <h5 className="ml-2"> $ 67</h5>
                            </div>
                            <div className="mt-3 desContainer" style={{backgroundColor: 'red'}}>
                                <img style={{ height: 70,width: 70 ,padding : 10 }} src={vehicle.image} alt=""/>    
                                <h5 className="ml-1">{vehicle.name}</h5>
                                <h5 className="ml-2"><FaUserFriends></FaUserFriends> 4</h5>
                                <h5 className="ml-2"> $ 67</h5>
                            </div>
                            <div className="mt-3 desContainer mb-3" style={{backgroundColor: 'red'}}>
                                <img style={{ height: 70,width: 70 ,padding : 10 }} src={vehicle.image} alt=""/>    
                                <h5 className="ml-1">{vehicle.name}</h5>
                                <h5 className="ml-2"><FaUserFriends></FaUserFriends> 4</h5>
                                <h5 className="ml-2"> $ 67</h5>
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

export default RideDetails;