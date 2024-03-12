import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";

function Me(){
    return(
        <div className="back">
        <div className="profile">
            <div className="photo"></div>
            <h3>Kalkidan Solomon</h3>
            <h5><ReactTyped
      strings={[
        "Software Engineer",
        "Front-End Developer",
      ]}
      typeSpeed={30}
      backSpeed={30}
      loop
    >
      <input type="text" />
    </ReactTyped></h5>
            <div className="media">
                <div className="m"><FaGithub /></div>
                <div className="m"><FaLinkedin /></div>
                <div className="m"><FaInstagram /></div>
                <div className="m"><CiFacebook /></div>
                <div className="m"><FaTelegram /></div>
                
            </div>
            
            <footer>CONTACT ME</footer>
            
        </div>
        </div>
    );
}

export default Me