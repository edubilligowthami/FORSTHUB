
import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import './styles/admin.css'

function AdminHeader({OpenSidebar}) {
  const username = localStorage.getItem('username');
  console.log(username);
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        {/* <div className='header-left'>
            <BsSearch  className='icon'/>
        </div> */}
        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/> */}
            <BsPersonCircle className='icon'/>{username}
        </div>
    </header>
  )
}

export default AdminHeader;