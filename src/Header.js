import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Link to="/"><img src="https://i.pinimg.com/originals/56/00/dd/5600ddbbc680a4a100e62077d90763eb.jpg" alt=""/></Link>
            
            </div>
            <div className="header_center">
                <input type="text" className="text" placeholder="search here"/>
                <SearchIcon/>
            </div>
            <div className="header_right">
                <p>Become a Host</p>
                <ExpandMoreIcon/>
                <LanguageIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    )
}
