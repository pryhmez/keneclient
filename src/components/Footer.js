
import '../styles/components/Footer.scss';
import Button from './Button';


const Footer = () => {


  return (
    <div className="footer">
      <div className="footer-main">
        <div className="foot">

          <h2>Contact Us</h2>
          <p><b>Address:</b> 33, Oran Street, Off Nouakchott Street, Wuse Zone 1. Abuja.</p>
          <p><b>Phone number:</b> +234 09 291 6896.</p>
          <p><b>Email:</b> info@negst.com.ng</p>

        </div>
        <div className="foot">
          <h2>Subscribe to our newsletter</h2>
          <form>
            <input
              placeholder="Email"
            />

            <Button name='SignUp' styles={{background: '#f5af18', height: '100%', padding: '10px', margin: '0px'}}/>
          </form>
        </div>
      </div>

      <div className="snack-bar">
        <p>2021 EEE Final Year Of Kenechukwu©.   |   All rights reserved.</p>
      </div>
    </div >
  );
}

export default Footer;
