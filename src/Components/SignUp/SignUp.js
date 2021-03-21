import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from '../LogIn/firebase.config'
import { UserContext } from '../../App';
import './SignUp.css'
import { FaGoogle  } from "react-icons/fa";

const SignUp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        succes: ''
    })



    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setuser(newUser);
        }
    }

    const handleCreateAccount = (e) => {
        if (user.email) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    
                    const newUserinfo = { ...user };
                    newUserinfo.error = '';
                    newUserinfo.succes = true;
                    newUserinfo.name =res.user.displayName;
                    setuser(newUserinfo);
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    const newUser = { ...user };
                    newUser.error = errorMessage;
                    newUser.succes = false;
                    setuser(newUser)

                });

        }
        e.preventDefault();
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                // console.log(res)
                const newUserinfo = { ...user }
                newUserinfo.error = '';
                newUserinfo.succes = true;
                newUserinfo.email = res.user.email;
                newUserinfo.name = res.user.displayName;
                setuser(newUserinfo);
                setLoggedInUser(newUserinfo);
                history.replace(from);
            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage,email ,errorCode,credential)

            });

    }




    return (
        <div>
            <div className="text-center regFormColor py-5">
                <form onSubmit={handleCreateAccount}>
                    <input className="inputField" type="text" name="name" onBlur={handleBlur} placeholder='Enter your Name' required />
                    <br />
                    <input className="inputField" type="email" name="email" onBlur={handleBlur} placeholder="Enter your email" required />
                    <br />
                    <input className="inputField" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required />
                    <br />
                    <input className="inputField" type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm password" required />
                    <br />
                    <input className="inputField" type="submit" value="Create Account" />
                </form>
                <p>{user.error}</p>
                {user.succes && <div><p className="success">User created successfully </p> <b> <Link className="link" to='/login'> Click Here To LogIn</Link> </b></div>}
                

                <div>
                <p>
                    or
                </p>
                <button className="btn btn-primary"onClick={handleGoogleSignIn}><FaGoogle className="google"></FaGoogle>Continue with Google</button>
            </div>
            </div>
            

        </div>
    );
};

export default SignUp;