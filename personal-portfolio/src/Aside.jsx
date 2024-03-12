import { FaUser } from "react-icons/fa";
import { IoIosBrush } from "react-icons/io";
import { BsFileTextFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaHtml5 } from "react-icons/fa";
import { useState } from "react";

function Aside() {
  // const [showCard, setShowCard] = useState({
  //   about: false,
  //   works: false,
  //   blog: false,
  //   contact: false,
  // });
  // function handleClickAbout() {
  //   setShowCard((prevshowCard) => ({
  //     ...prevshowCard,
  //     about: !about,
  //   }));
  // }
  // function handleClickBlog() {
  //   setShowCard((prevshowCard) => ({
  //     ...prevshowCard,
  //     blog: !blog,
  //   }));
  // }
  // function handleClickWorks() {
  //   setShowCard((prevshowCard) => ({
  //     ...prevshowCard,
  //     works: !works,
  //   }));
  // }
  // function handleClickContact() {
  //   setShowCard((prevshowCard) => ({
  //     ...prevshowCard,
  //     contact: !contact,
  //   })); 
  // }

const [btn1State, set1BtnState] = useState(false);
const [btn2State, setBtn2State] = useState(false);
const [btn3State, setBtn3State] = useState(false);
const [btn4State, setBtn4State] = useState(false);
const [btn5State, setBtn5State] = useState(false);

function about(){
  setBtnState(btnState => !btnState);
}

// let toggleClassCheck = btnState ? ' active' : ' null';

  return (
    <div className="card">
      
      <div className="long">
        <div className="menu" id="test">
          <button className="btn"
             
          ><HiOutlineMenuAlt2 /></button>
        </div>
        <div className="aside">
          <ul>
            <div className="li" >
              <FaUser />
              <a href="#" onClick={()=>{setBtn2State(!btn2State)}}>ABOUT</a>
            </div>
            <div className="li">
              <IoIosBrush />
              <a href="#" onClick={()=>{setBtn3State(!btn3State)}}>WORKS</a>
            </div>
            <div className="li">
              <BsFileTextFill />
              <a href="#" onClick={()=>{setBtn4State(!btn4State)}}>BLOG</a>
            </div>
            <div className="li">
              <FaPhone />
              <a href="#" onClick={()=>{setBtn5State(!btn5State)}}>CONTACT</a>
            </div>
          </ul>
        </div>
      </div>

      <div className={`showCard${btn2State? ' active' : ' inactive'}`} >
        <header>
          <div className="left">
            <div className="circle">
              <span>About</span>
            </div>
            <h1 className="meee">Me</h1>
          </div>
          <div className="right"></div>
        </header>

        <div className="main">
          <div className="left2">
            <p>
              I am Kalkidan Solomon, web designer from Ethiopia, Addis Ababa. I
              have rich experience in web site design and building and
              customization, also I am good at wordpress. I love to talk with
              you about our unique.
            </p>
            <div className="header2">
              <div className="circle2">
                <span className="s2">My</span>
              </div>
              <h1 className="meeee">Services</h1>
            </div>

            <div className="b">
              <div className="c">
                <FaHtml5 />
              </div>
              <h4 className="web">Web Development</h4>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit in placeat voluptatem vero dicta modi temporibus
                architecto ducimus suscipit. Est velit sint iusto placeat odio
                expedita nostrum. Voluptatibus, recusandae natus!
              </h5>
            </div>
          </div>
          <div className="right2">
            <div className="dis">
              <div className="diss">Age....</div>
              <h2>21</h2>
            </div>
            <div className="dis">
              <div className="diss">Residence....</div>
              <h2>Ethiopia</h2>
            </div>
            <div className="dis">
              <div className="diss">Freelance....</div>
              <h2>Available</h2>
            </div>
            <div className="dis">
              <div className="diss">Address....</div>
              <h2>Dessie city, Ethiopia</h2>
            </div>
          </div>
        </div>
      </div>

          <div id="sc1" className={`showCard2${btn3State? ' active' : ' inactive'}`}>
        <header>
          <div className="left">
            <div className="circle">
              <span>About</span>
            </div>
            <h1 className="meee">Mee</h1>
          </div>
          <div className="right"></div>
        </header>

        <div className="main">
          <div className="left2">
            <p>
              I am Kalkidan Solomon, web designer from Ethiopia, Addis Ababa. I
              have rich experience in web site design and building and
              customization, also I am good at wordpress. I love to talk with
              you about our unique.
            </p>
            <div className="header2">
              <div className="circle2">
                <span className="s2">My</span>
              </div>
              <h1 className="meeee">Services</h1>
            </div>

            <div className="b">
              <div className="c">
                <FaHtml5 />
              </div>
              <h4 className="web">Web Development</h4>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit in placeat voluptatem vero dicta modi temporibus
                architecto ducimus suscipit. Est velit sint iusto placeat odio
                expedita nostrum. Voluptatibus, recusandae natus!
              </h5>
              
            </div>
          </div>
          <div className="right2">
            <div className="dis">
              <div className="diss">Age....</div>
              <h2>21</h2>
            </div>
            <div className="dis">
              <div className="diss">Residence....</div>
              <h2>Ethiopia</h2>
            </div>
            <div className="dis">
              <div className="diss">Freelance....</div>
              <h2>Available</h2>
            </div>
            <div className="dis">
              <div className="diss">Address....</div>
              <h2>Dessie city, Ethiopia</h2>
            </div>

            
          </div>
        </div>
      </div> 
      {/* <div id="sc1" className={`showCard3${btn3State? ' null' : ' null'}`}>
        <header>
          <div className="left">
            <div className="circle">
              <span>About</span>
            </div>
            <h1 className="meee">Mee</h1>
          </div>
          <div className="right"></div>
        </header>

        <div className="main">
          <div className="left2">
            <p>
              I am Kalkidan Solomon, web designer from Ethiopia, Addis Ababa. I
              have rich experience in web site design and building and
              customization, also I am good at wordpress. I love to talk with
              you about our unique.
            </p>
            <div className="header2">
              <div className="circle2">
                <span className="s2">My</span>
              </div>
              <h1 className="meeee">Services</h1>
            </div>

            <div className="b">
              <div className="c">
                <FaHtml5 />
              </div>
              <h4 className="web">Web Development</h4>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit in placeat voluptatem vero dicta modi temporibus
                architecto ducimus suscipit. Est velit sint iusto placeat odio
                expedita nostrum. Voluptatibus, recusandae natus!
              </h5>
              
            </div>
          </div>
          <div className="right2">
            <div className="dis">
              <div className="diss">Age....</div>
              <h2>21</h2>
            </div>
            <div className="dis">
              <div className="diss">Residence....</div>
              <h2>Ethiopia</h2>
            </div>
            <div className="dis">
              <div className="diss">Freelance....</div>
              <h2>Available</h2>
            </div>
            <div className="dis">
              <div className="diss">Address....</div>
              <h2>Dessie city, Ethiopia</h2>
            </div>

            
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Aside;
