import { Link } from "react-router-dom";
import logo from "../media/logo1.jpg";
import { AiOutlineHome  } from 'react-icons/ai';
import {  BsCardList ,BsPencilSquare } from 'react-icons/bs';
const Navbar = () => {

    return (
        <header>
             <nav className="navbar">  
             <img src={logo} alt="" />
            <ul className="Navigation">
                
               <li> <Link to="/"><AiOutlineHome/> Home</Link> </li>
               <li> <Link to="/"><BsCardList/> Your Travel Stories</Link> </li>
               <li> <Link to="/create"><BsPencilSquare/>Write a Story</Link> </li>

            </ul>
      
        
             </nav>
        </header>

        );
}
 
export default Navbar;
