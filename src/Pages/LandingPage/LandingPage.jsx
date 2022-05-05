import React, { useContext } from 'react'
import './LandingPage.css'
import logo from '../../images/logo.svg'
import main from '../../images/main.svg'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user/userContext'
import {  logOutUser } from '../../Services/connectApi'

const LandingPage = () => {
  const user = useContext(UserContext)

  const onClickLogOut = async () => {
    try{
      await logOutUser()
    }
    catch(err){
      console.log(err)
    }
    
  }
  

  return (
    <div className='landingpage-container'>
      <nav className='landingpage-navbar'><img src={logo} alt='logo'></img></nav>
      <div className='landingpage-content'>
          <div className='landingpage-inner-contents'>
              <h1>Job <span>Tracking</span> App</h1>
              <p>We're here to help you keep track of your job application
                  till forever. Interested in keeping track of your applications?
                  Click the link below to get started.
              </p>
             { user?(
                <>
                     <h2>Welcome to Jobster {user.name}</h2>
                     <button className='btn landingpage-inner-contents-btn' onClick={()=> onClickLogOut() }>Logout</button>
                </>
             )
             : <Link className='btn landingpage-inner-contents-btn' to='/login'>Login/Register</Link>}
          </div>
          <div>
              <img src={main} alt='hero'></img>
          </div>
      </div>
    </div>
  )
}

export default LandingPage