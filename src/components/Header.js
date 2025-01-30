import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const Header = () => {
    const [btnName , setbtnName] = useState("login");
    const onlinestate  = useOnlineStatus(true)
    return(
        <div className="bg-gray-200 p-2 flex justify-between">
            <div className="">
                <img alt="restaurent" className="w-25 h-25" src = "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div> 
            <div className="space-y-3 self-center">
                <ul className="flex p-2 m-3  space-x-3 ">
                    <li>online Status: {onlinestate ? "online" : "offline"}</li>
                <Link to = "/" className="no-underline"> <li>Home</li></Link>
                <Link to = "/about" className="no-underline">  <li>About</li></Link>
                <Link to = "/contact" className="no-underline"> <li>Contact Us</li></Link>
                <Link to = "/gocery" className="no-underline"> <li>Grocery</li></Link>
                <li>cart</li>
                
                
                <button className="color-Red" onClick={ () => {btnName === "login" ?setbtnName("logout") : setbtnName("login")}
           }>{btnName}</button>
           </ul>
        </div> 
               
        </div>
    )
}

export default Header