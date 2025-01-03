import { useState } from "react"
import { FaCamera } from "react-icons/fa";
import "./Profile.css"
import Tabs from "./Tabs";

const Profile = () => {
    const [banner, setBanner] = useState("https://via.placeholder.com/1500x400");
    const [profileUrl, setProfileUrl] = useState("https://via.placeholder.com/100");

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setBanner(URL.createObjectURL(file));
        }
      };


    const handleChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
          setProfileUrl(URL.createObjectURL(file));
        }
      };
  return (
<div>
     <div className="banner">
          <img className = "banner-img"src={banner} alt="" />
          <button className="btn-1">
            <input type="file" id= "bannerUrl"accept="image/*" onChange={handleChange}/>
            <label htmlFor="bannerUrl">
               <FaCamera size={24} />
            </label>
         </button>
     </div>

     <div className="profile">
          <img className="profile-img" src={profileUrl} alt="" />
          <button className="btn-2">
            <label htmlFor="profileUrl">
               <FaCamera size={24} />
            </label>
            <input type="file" id= "profileUrl" accept="image/*" onChange={handleChange2}/>
         </button>
    </div>
    
    <div className="content">
         <h1>Subhash Galla</h1>
         <p>I'm a Programmer studying bachelors in University Of North Texas</p>
    </div>
   
   
    <Tabs/>
   

</div>
  )
}

export default Profile