import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import Headericons from './Headericons'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header d-flex bg-dark pt-2 justify-content-around fixed-top">
        

      <div className="left d-flex justify-content-center align-items-center ms-3">
        <LinkedInIcon className='text-white fs-1' />
        <div className="search ms-3">
         <SearchIcon className='text-white me-2'/>
         <input type="text" name="search" id="" placeholder="Search" className="rounded px-2" />
        </div>
      </div>
      <div className="right d-flex">
        <Headericons Icon={HomeIcon} title="Home"/>
        <Headericons Icon={PeopleAltIcon} title="My Network"/>
        <Headericons Icon={WorkIcon} title="Jobs"/>
        <Headericons Icon={MessageIcon} title="Messaging"/>
        <Headericons Icon={NotificationsActiveIcon} title="Notifications"/>
        <Headericons Icon={AccountCircleIcon} title="Me"/>
      </div>
        
    </div>
  )
}

export default Header