
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/pages/Students.scss';
import { Link } from 'react-router-dom';

import CenterContainer from '../components/CenterContainer';
import Card from '../components/Card';
import Button from '../components/Button';

function CardHolder(props) {

    return (
        <div
            className='card-holder card'
        // style={{ display: 'flex', justifyContent: 'space-between' }} 
        >

            <div>
                <h2>{props.no + 1}</h2>
            </div>

            <div>
                <p>{props.value.lastName + " " + props.value.firstName}</p>
            </div>

            <div>
                <p> {props.value.email} </p>
            </div>

            <div>
                <p>{props.value.regNo}</p>
            </div>

            <div>
                <p> {props.value.cardNo} </p>
            </div>

            <div>

                <p> {props.value.gender} </p>
            </div>

            <div>

                <p> {props.value.age} </p>
            </div>



        </div>
    )
}


function Students(props) {
    const [click, setClick] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [data, setData] = useState([
        {
            email: 'abc@gmail.com',
            name: 'mr abc',
            regno: '1111111',
            cardno: '22 33 44 55',
            gender: 'male',
            age: '270'
        }
    ]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/student/getall`)
            .then(res => {
                console.log(res);
                setData(res.data.data);
            })
    }, []);


    // const handleClick = () => setClick(!click);



    const handleSubmit = (e) => {
        e.preventDefault();
        alert(firstname);
    }

    return (
        <div className="students" >
            <CenterContainer>

                <div className='cont'>
                    <div
                        className='card-holder'
                    // style={{ display: 'flex', justifyContent: 'space-between' }} 
                    >

                        <div>
                            <h2>S/N</h2>
                        </div>

                        <div>
                            <p>Name</p>
                        </div>

                        <div>
                            <p> {"Email"} </p>
                        </div>

                        <div>
                            <p>{"Reg No"}</p>
                        </div>

                        <div>
                            <p> {"Card No"} </p>
                        </div>

                        <div>

                            <p> {"Gender"} </p>
                        </div>

                        <div>

                            <p> {"Age"} </p>
                        </div>



                    </div>

                    {
                        data.map((value, index) => (

                            <CardHolder
                                key={index}
                                no={index}
                                value={value}

                            />
                        ))
                    }

                </div>

            </CenterContainer>
        </div>
    );
}

export default Students;