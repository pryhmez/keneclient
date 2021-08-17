
import React, { useState } from 'react';
import axios from 'axios';

import '../styles/pages/OurServices.scss';
import { Link } from 'react-router-dom';

import CenterContainer from '../components/CenterContainer';
import Card from '../components/Card';
import Button from '../components/Button';


function Register(props) {
    const [click, setClick] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [cardno, setCardno] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [regno, setRegno] = useState('');


    // const handleClick = () => setClick(!click);

    const handleSubmit = (e) => {
        e.preventDefault();

        const student = {
            firstname,
            lastname,
            email,
            cardno,
            gender,
            age,
            regno
        }

        axios.post(`http://localhost:8080/api/student/register`, student)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }


    // const imageUploaded = () => {
    //     let base64String = "";
    //     var file = document.querySelector(
    //         'input[type=file]')['files'][0];

    //     var reader = new FileReader();
    //     console.log("next");

    //     reader.onload = function () {
    //         base64String = reader.result.replace("data:", "")
    //             .replace(/^.+,/, "");

    //         imageBase64Stringsep = base64String;

    //         // alert(imageBase64Stringsep);
    //         console.log(base64String);
    //     }
    //     reader.readAsDataURL(file);
    // }

    return (
        <div className="our-services" >
            <CenterContainer>
                <form >

                    <label>Name</label>
                    <div>
                        <input
                            type='text'
                            name='firstname'
                            placeholder='John'
                            // value={firstname}
                            onChange={(e) => { setFirstname(e.target.value) }}
                        />
                        <input
                            type='text'
                            name='lastname'
                            placeholder='Bull'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />

                    </div>

                    <label>Email</label>
                    <div>

                        <input
                            type='email'
                            name='email'
                            placeholder='ABC@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <label>Card Digits</label>
                    <div>

                        <input
                            type='text'
                            name='cardno'
                            placeholder='11 11 11 11'
                            value={cardno}
                            onChange={(e) => setCardno(e.target.value)}
                        />
                        <input
                            type='text'
                            name='Registration Number'
                            placeholder='20151011111'
                            value={regno}
                            onChange={(e) => setRegno(e.target.value)}
                        />
                    </div>

                    <label>Gender</label>
                    <div>

                        <select
                            name="gender"
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                    </div>

                    <label>Age</label>
                    <div>
                        <input
                            type='age'
                            name='age'
                            placeholder='100'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <Button onclick={handleSubmit} styles={{ height: '5.5rem', marginRight: '0px' }}>SUBMIT</Button>

                </form>
            </CenterContainer>
        </div>
    );
}

export default Register;