import  { useState } from 'react';
import logo from "../../assets/img/profile.png"
import { NavLink } from 'react-router-dom';
import { MdCancel, MdMenu } from "react-icons/md";


const Navbar = () => {
    const [isProfile, setIsProfile] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    // const showProfile = () =>{

    // }
    console.log(isProfile)
    return (
        <div>
            <nav className='flex justify-between w-full fixed z-10 px-5 lg:justify-around bg-black bg-opacity-25 items-center py-4 text-white'>

                <div className='hidden md:block'>
                    <figure className=''>
                        <img src={logo} className='w-10 h-10 rounded-full' alt="" />
                    </figure>
                </div>
                <div className='hidden md:block'>
                    <ul className='inline-flex gap-6'>
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/taskmangement'}><li>Task Management </li></NavLink>
                        <NavLink to={'/register'}><li>Registration</li></NavLink>
                        <NavLink to={'/login'}><li>Login</li></NavLink>

                    </ul>

                </div>

                <div className="w-10 rounded-full md:hidden" onClick={() => setIsMenu(!isMenu)}>
                    {isMenu ? <MdCancel size={25} /> : < MdMenu size={25} />}

                </div>
                <div className={`absolute top-14 bg-white p-2 rounded shadow ${isMenu ? 'visible' : 'hidden'}`}>
                    <ul>
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/taskmangement'}><li>Task Management </li></NavLink>
                        <NavLink to={'/register'}><li>Registration</li></NavLink>
                        <NavLink to={'/login'}><li>Login</li></NavLink>

                    </ul>
                </div>
                <div className='relative'>
                    <div className="w-10 rounded-full" onClick={() => setIsProfile(!isProfile)}>
                        <img alt="Tailwind CSS Navbar component" className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    {/* <div className={`absolute top-14 right-0 bg-white p-2 rounded shadow ${isProfile ? 'visible' : 'hidden'}`}>
                        <ul>
                            <NavLink to={'/'}><li></li></NavLink>
                            <NavLink to={'/about'}><li>About </li></NavLink>
                            <NavLink to={'/contact'}><li>Contact</li></NavLink>
                            <NavLink to={'/award'}><li>Award</li></NavLink>
                        </ul>
                    </div> */}

                </div>
            </nav>

        </div>
    );
};

export default Navbar;