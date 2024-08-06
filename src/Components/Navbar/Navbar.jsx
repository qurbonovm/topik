import React from 'react'
import  '../Navbar/Navbar.css'
import Logo from '../Image/logo.png'

function Navbar() {
  return (
      <div className="nav">
        <div className="container">
          <img className='nav-logo' src={Logo} alt="" />
          <p className='nav-title'>Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</p>
          <ul className='nav-item'>
            <li className='nav-list'>Nega biz</li>
            <li className='nav-list'>Natijalar</li>
            <li className='nav-list'>Kurslar</li>
            <li className='nav-list'>Ko’p beriladigan savollar</li>
          </ul>
          <div className="nav-phone">
          <p className='nav-number'>+998 (33) 306 0098</p>
          <p className='nav-data'>Hoziroq bog’laning</p>
          </div>
        </div>
      </div>
  )
}

export default Navbar 