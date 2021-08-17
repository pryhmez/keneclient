import React, { useState, useEffect } from 'react';
// import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import '../styles/components/photocard.scss';
import logo from '../assets/futo1.jpeg';

// import { socket, privateMessenger } from './config/socketConfig';
import io from "socket.io-client";
const ENDPOINT = 'localhost:8080';

let socket;



function PhotocardPage() {

    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [pix, setPix] = useState('');
    const [email, setEmail] = useState('');
    const [lati, setLati] = useState('00');

    const mapStyles = {
        width: '100%',
        height: '100%'
    };



    useEffect(() => {

        socket = io(ENDPOINT);


        socket.on("data", (data) => {
            console.log(data);
        })
    }, [ENDPOINT]);

    useEffect(() => {

        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.longitude);
                console.log(position.coords.latitude);
            });
        } else {
            console.log("Not Available");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
            });
        }

        socket.on('data', message => {
            setName(message.name);
            setRegno(message.regno);
            setPix(message.pix);
            setEmail(message.email);
            setLati(message.latitude);
        });

        // socket.on("roomData", ({ users }) => {
        //   setUsers(users);
        // });
    }, []);

    return (
        <div className="photocard">

            <div className="header-bar">
                <p>SMART ATTENDANCE SYSTEM, FUTO ©.   |   All rights reserved.</p>
            </div>

            <div className="container">
                <div className="centralizer">
                    <div style={{marginBottom: '50px', marginTop: '300px', background: 'transparent'}}>
                        <img src={`data:image/jpeg;${pix}`} height='280px'/>
                    </div>

                    <div style={{ background: 'transparent', fontSize: '25px', display: 'flex', flexDirection: 'column'}}>
                        <p>{name}</p>
                        <p style={{fontSize: '15px'}}>{regno}</p>
                        <p style={{fontSize: '15px'}}>{email}</p>

                    </div>
                </div>
            </div>


            {/* <div className="snack-bar">
                <p>2020 EEE FINAL YEAR PROJECT, FUTO ©.   |   All rights reserved.</p>
            </div> */}
        </div>
    );
}

export default PhotocardPage;

