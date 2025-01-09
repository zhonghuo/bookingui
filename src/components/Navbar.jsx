import React from 'react'
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi, faToriiGate } from '@fortawesome/free-solid-svg-icons'

const LineOne = () => {
    return (
        <div className='lineOne'>
            <div className = 'left'>
                <span className='logo'>Howard</span>
            </div>
            <div className = 'right'>
                <button className='navButtonFlag'/>
                <button className='navButtonNotify'>使用webpack測試</button>
                <button className='navButton'>註冊</button>
                <button className='navButton'>登入</button>
            </div>
        </div>
    )
}

const LineTwo = () => {
    return (
        <div className='lineTwo'>
            <div className='item active'>
                <FontAwesomeIcon icon = {faBed} />
                <span>住宿</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon = {faPlane} />
                <span>航班</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon = {faCar} />
                <span>租車</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon = {faToriiGate} />
                <span>景點/活動</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon = {faTaxi} />
                <span>機場計程車</span>
            </div>
        </div>
    )
}

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <LineOne/>
            <LineTwo/>
        </div>
    </div>
  )
}

export default Navbar
