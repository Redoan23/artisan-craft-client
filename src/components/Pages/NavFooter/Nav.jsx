import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import Tooltip from '@mui/material/Tooltip';
import './nav.css'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


// const MySwal = withReactContent(Swal)
const Nav = () => {

    const { user, logout, handleTheme, theme } = useContext(AuthContext)

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allart'}>All Art & craft Items</NavLink></li>
        {user && <li><NavLink to={'/addcraft'}>Add Craft Item</NavLink></li>}
        {user && <li><NavLink to={`/myartandcraft/${user.email}`}>My Art&Craft List</NavLink></li>}

    </>

    const handleLogout = () => {
        logout()
        Swal.fire({
            title: 'Successfully Logged Out!',
            text: 'Continue Browsing',
            icon: 'success',
            confirmButtonText: 'okay'
        })
    }

    return (
        <div className="navbar dark:bg-gray-200 bg-orange-200 border-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" text-red-500 text-3xl font-bold">ARTISAN's FORGE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div onClick={handleTheme} className='lg:pr-3'>
                    {
                        theme === 'light' ? <MdDarkMode className=' h-8 w-8 duration-300 delay-700 ease-in-out' /> : <MdOutlineLightMode className=' h-8 w-8' />
                    }
                </div>
                {user ?
                    <div className=' flex gap-3 items-center'>
                        <Tooltip title={user.displayName}>
                            {user.photoURL ? <div className=' w-10 border rounded-full'>
                                <img className='rounded-full' src={user.photoURL} alt="" />
                            </div> : <div className='w-10 rounded-full'><img src='./user_847969.png' alt="" /></div>}
                        </Tooltip>
                        <Link onClick={handleLogout} className={'btn rounded-none bg-red-400 text-white hover:bg-transparent hover:border-2 hover:border-red-400 hover:text-red-400'}>Logout</Link>
                    </div>
                    :
                    <div className=' flex gap-2'>
                        <NavLink className={'btn'} to={'/login'}>Login</NavLink>
                        <NavLink className={'btn'} to={'/register'}>Register</NavLink>
                    </div>}
            </div>
        </div>
    );
};

export default Nav;