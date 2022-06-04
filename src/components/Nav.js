import { Link } from "react-router-dom";
// import logo from "../../public/logo192.png"

const Navbar = () => {

    return (
        <header>
             <nav className="navbar">  
             <img src="../logo192/png" alt="" />
            <ul className="Navigation">
                
               <li> <Link to="/">Home</Link> </li>
               <li> <Link to="/create">Add article</Link> </li>
            </ul>
      
                
             </nav>
        </header>

        );
}
 
export default Navbar;
