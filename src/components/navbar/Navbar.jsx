import { Link, NavLink } from "react-router-dom";
import { MdOutlineTravelExplore  } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleSignOut =()=>{
     logOut()
     .then()
     .catch()
    }

    const navLinks = <>
        <li className="text-white"><NavLink to='/'>Home</NavLink> </li>
        <li className="text-white"><NavLink to='/all-tourists'>All Tourists Spot</NavLink> </li>
        <li className="text-white"><NavLink to='/add-tourists'>Add Tourists Spot</NavLink> </li>
        <li className="text-white"><NavLink to='/my-list'>My list</NavLink> </li>
        <li className="text-white"><NavLink to='/contact'>Contact</NavLink> </li>
        <li className="text-white"><NavLink to='/about'>About</NavLink> </li>
    </>


    return (
        <div className="navbar   bg-[#008080]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">Natural Horizon <MdOutlineTravelExplore ></MdOutlineTravelExplore ></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">

              {
                user ?
                <button onClick={handleSignOut} className="btn">Sign out</button>
                :
                <Link to='/logIn' className="btn">logIn now</Link>

              }


               
            </div>
        </div>
    );
};

export default Navbar;