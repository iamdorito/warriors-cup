
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../assets/logo.png';

const Header = ({ profile, search, setSearch }) => {

    const [ input, setInput ] = useState('')
    const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearch(search => input);
    //     setInput('');
    //     navigate('/search');
    // }

    return (
        <div className="headerContainer">
            <Link to={'/events'} className='link-title'>
                Events
                </Link>
            <Link to={'/athletes'} className='link-title'>
                Athletes
                </Link>
            <Link to={'/'} className='link-title'>
                <img className='headerLogo' src={headerLogo} />
            </Link>
            <Link to={'/connect'} className='link-title'>
                Connect
                </Link>
            <Link to={'/login'} className='link-title'>
                Login
                </Link>
        </div>
    )
}

export default Header  