
import React, { useState } from 'react';
import '../styles/components/Card.scss';
import { Link } from 'react-router-dom';

function Card(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
   <div className="card" >
       {props.children}
   </div>
  );
}

export default Card;