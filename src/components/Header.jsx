import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const HeaderTitle = () => {
    return (
        <h1 className='headerTitle'>尋找下趟住宿</h1>
    )
}

const HeaderDescription = () => {
    return (
        <p className='headerDescription'>搜尋飯店、民宿及其他住宿類型的優惠...
            <br/> XD
        </p>
    )
}

const HeaderSearchBar = () => {
    return <>
        <div className='headerSearchBar'>
            <FontAwesomeIcon icon = {faBed} />
            <input type='Search' placeholder='你要去哪裡？' className='SearchInput'/>
        </div>
        <div className='SearchBarItem'>
            <FontAwesomeIcon icon = {faCalendar} />
            <span className='SearchText'>01/09/2025-02/16/2025</span>
        </div>
        <div className='SearchBarItem'>
            <FontAwesomeIcon icon = {faPeopleGroup} />
            <span className='SearchText'>3 位成人，2 位小孩，1 間房</span>
        </div>
        <button className='SearchBarBtn'>搜尋</button>
    </>
}

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
            <HeaderTitle/>
            <HeaderDescription/>
            <HeaderSearchBar/>
        </div>
    </div>
  )
}

export default Header
