
import '../styles/components/Button.scss';

const Button = (props) => {

    return (
        <button className="button" onClick={props.onclick} style={{...props.styles, textAlign: 'center'}}>{props.name || props.children}</button>
    );

}

export default Button;