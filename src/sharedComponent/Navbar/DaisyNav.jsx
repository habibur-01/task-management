
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const DaisyNav = () => {
    const { user, userSignOut } = useContext(AuthContext)
    console.log(user)

     const handleLogOut =()=> {
        userSignOut()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error.message)
        })
     }


    return (
        <div>
            <div className="navbar px-20 fixed text-white bg-black bg-opacity-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li className={`${user?'hidden':'visible'}`}> <NavLink to={'/taskmangement'}>Task Management</NavLink></li>
                            <li><NavLink to={'/register'}>Registration</NavLink></li>
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DO-TASK</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        
                        <li className={`${user?'visible':'hidden'}`}> <NavLink to={'/taskmangement'}>Task Management</NavLink></li>
                        <li><NavLink to={'/register'}>Registration</NavLink></li>
                        <li>
                            {
                                user ? <p onClick={handleLogOut}>Logout</p>: <NavLink to={'/login'}>Login</NavLink>

                            }
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='relative'>
                        <div className="w-10 rounded-full">
                            {
                                user ? <div><p className="text-white btn btn-outline">{user?.displayName?.split(' ')[0]}</p></div> : <img alt="Tailwind CSS Navbar component" className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            }
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
                </div>
            </div>

        </div>
    );
};

export default DaisyNav;