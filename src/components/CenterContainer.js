import '../styles/components/CenterContainer.scss';

function CenterContainer(props) {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  return (
    <div className="center-container" >
      <div className="centralize" styles={{...props.style}}>
        {props.children}
     </div>
    </div>
  );
}

export default CenterContainer;