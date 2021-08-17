
import React, { useState } from 'react';
import { MenuItems } from './menuItems';
import '../styles/components/Dropdown.scss';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      {/* {console.log(props)} */}
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        style={{ ...props.styles }}
      >
        {
          props.dropvalues

            ?

            props.dropvalues.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    as={Link}
                    className={item.cName}
                    to={item.path}
                    onClick={() => {
                      setClick(false);
                      props.closer();
                    }
                  }
                    style={{ border: 'none', color: 'white' }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })

            :

            props.children
        }
      </ul>
    </>
  );
}

export default Dropdown;