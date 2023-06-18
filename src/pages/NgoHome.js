import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import NgoMaps from "./NgoMaps";

const NgoHome = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[2276px] overflow-hidden text-left text-5xl text-dimgray font-poppins">
     <img
          className="absolute top-[737px] left-[-126px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/ellipse8@2x.png"
        />
       
        <img
          className="absolute top-[186px] left-[117px] rounded-3xs w-[1287px] h-[653px] object-cover"
          alt=""
          src="/ngobg.png"
        />
        <div className="absolute top-[208px] left-[197px] text-[96px] font-medium font-playfair-display text-white flex items-center w-[657px] h-[259px]">
          Be a part of the movement
        </div>
        <div className="absolute top-[477px] left-[197px] w-52 h-[71px] text-gray-200">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gold-100 w-52 h-[71px]" />
          <div className="absolute top-[18px] left-[26px] font-medium flex items-center w-[182px] h-[33px]">
            Donate Now
          </div>
        </div>
      
        <div className="absolute top-[668px] left-[321px] text-[40px] font-semibold text-white flex items-center w-[533px] h-40">
         Baby Care Foundation
        </div>
        <img
          className="absolute top-[697px] left-[197px] w-20 h-20 object-cover"
          alt=""
          src="/ngoicon.svg"
        />
        <div className="absolute top-[842px] left-[847px] flex items-center w-[546px] h-[161px]">
          {" "}
          Unit no. 20/5, 3rd Floor Sainath Niwas Building, New Ayre Rd, Dombivali
        (E), Mumbai, Maharashtra 421201
        </div>
        <img
          className="absolute top-[881px] left-[807px] w-10 h-[38.11px] overflow-hidden"
          alt=""
          src="/vector5.svg"
        />
        <div className="absolute top-[871px] left-[223px] flex items-center w-[411px] h-[59px]">
          bbc@gmail.com
        </div>
        <img
          className="absolute h-[2.51%] w-[2.63%] top-[54.75%] right-[87.04%] bottom-[42.74%] left-[10.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/Vector8.svg"
        />
        <img
          className="absolute h-[2.51%] w-[2.63%] top-[42.03%] right-[87.04%] bottom-[37.46%] left-[10.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/Vector9.svg"
        />
        <div className="absolute top-[955px] left-[232px] flex items-center w-[284px] h-[55px]">
        08692003105
        </div>
        <div className="absolute top-[963px] left-[676px] text-29xl font-semibold font-playfair-display text-seagreen-100 flex items-center w-[807px] h-[277px]">
          How we’re making a difference
        </div>
        <div className="absolute top-[1208px] left-[676px] font-medium font-playfair-display flex items-center w-[574px] h-[63px]">
       Baby Care Foundation is a non-profit organization that is committed to making a positive impact in the world. Our mission is to address critical social, economic, and environmental issues facing communities worldwide. We work towards achieving this goal through various programs and initiatives that promote
        </div>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6382068854546!2d73.07930057487728!3d19.210998182021658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7be26802ec01b%3A0x73554485098a31f!2sThe%20Baby%20Care%20Foundation!5e0!3m2!1sen!2sin!4v1681007411897!5m2!1sen!2sin"
  width="500"
  height="300"
  style={{
    border: 0,
    position: "relative",
    left: "150px",
    top: "1050px",
  }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        <nav
          className="absolute top-[0px] left-[0px] w-[1520px] h-28 overflow-hidden"
          id="navbar"
        >
          <img
            className="absolute top-[21px] left-[28px] w-20 h-[68.49px] object-cover"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="absolute top-[40px] left-[115px] text-5xl font-kumbh-sans text-gray-200 text-left flex items-center w-[234px]">
            HungerZero
          </div>
       <Link to={"/ngomaps"}> <div className="absolute top-[44px] left-[994px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Maps
          </div></Link>  
         <Link to={"/ngohome/feedback"}><div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Feedback
          </div></Link> 
         <Link to={"/contact"}> <div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Contact Us
          </div></Link>
       <Link to={"/ngohome"}> <img
            className="absolute top-[30px] left-[1415px] w-[52px] h-[52px] object-cover"
            alt=""
            src="/ngoicon.svg"
          /></Link>  
        <Link to={"/ngohome"}> <div className="absolute text-seagreen-100 font-bold  top-[44px] left-[892px] text-mini font-poppins text-left flex items-center w-[55px]">
            Home
          </div></Link> 
       <Link to={"/notificationngo"}>  <img
            className="absolute h-[23.15%] w-[1.64%] top-[38.85%] right-[9.34%] bottom-[38%] left-[89.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          /></Link> 
        </nav>
    
    
      <img
        className="absolute h-[1.76%] w-[2.63%] top-[38.71%] right-[87.04%] bottom-[59.53%] left-[10.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/Vector8.svg"
      />
     
      <img
        className="absolute h-[1.98%] w-[2.96%] top-[31.85%] right-[15.72%] bottom-[66.17%] left-[81.32%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/Vector10.svg"
      />
    
      <div className="absolute top-[2018px] left-[315px] w-[1074px] h-[87px] text-17xl text-white">
        <button className="absolute top-[0px] left-[-90px] rounded-3xs bg-seagreen-100 w-[933px] h-[87px] text-17xl text-white font-medium flex items-center w-[779px] h-[63px]" >
          Post request for Donation
        </button>
      </div>
      <div className="absolute top-[1484px] left-[223px] text-29xl font-medium font-playfair-display text-seagreen-100 flex items-center w-[526px] h-[159px]">
        Donations
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[1664px] left-[-280px]"
        sx={{ width: 933 }}
        color="success"
        variant="outlined"
        type="text"
        label="Name of NGO"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[1450px] left-[220px]"
        sx={{ width: 933 }}
        color="success"
        variant="outlined"
        type="text"
        label="Requirement Description"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[1500px] left-[220px]"
        sx={{ width: 933 }}
        color="success"
        variant="outlined"
        type="number"
        label="Requirement of number of people"
        size="medium"
        margin="none"
      />
    </div>
  );
};

export default NgoHome;
