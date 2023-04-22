import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
// import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useHistory } from 'react-router-dom';


function Header() {
    const user = useSelector(selectUser);
    const history = useHistory();
    return (
        <header>
            <div className='header-container'>
                <div className='header-left'>
                    <Link to='/'>
                        <div className='img'>
                            <img src= {'./images/stack-icon.png'} alt='logo' />
                                <span className='stack'>stack</span>
                                <span className='overflow'>overflow</span>
                        </div>
                    </Link>
                    <h3>Products</h3>
                </div>
                <div className='header-middle'>
                    <div className='header-search-container'>
                        <SearchIcon/>
                        <input type='text' placeholder='Search....'/>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-right-container'>
                        <span onClick={ () => {
                            auth.signOut()
                            history.push('/auth')
                        }
                        }>
                            <Avatar 
                            style={{
                                cursor: 'pointer',
                            }}
                            src={user?.photo} 
                            />
                        </span>
                        <InboxIcon/>
                        <HelpIcon/>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
