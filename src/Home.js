import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./Home.css";
import logo from "./icon.png"

export default function Home() {
  const styles = {
    main: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    top: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100vw',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'baseline',
    },
    title: {
      fontSize: '32px',
      textAlign: 'center',
      margin: '2vw',
    },
    icon: {
      width: '80px',
      height: '80px',
      float: 'left',
      margin: '2vw',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px hidden red',
      borderRadius: '80px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      margin: '4vw',
      padding: '2vw',
    },
  }

  const links = [
    { text: 'HOME', link: '/', emphasis: true },
    { text: 'ABOUT', link: '/about' },
    { text: 'SERVICE', link: '/service' },
    { text: 'DESIGN', link: '/design' },
    { text: 'CONTACT', link: '/contact' },
    { text: 'LOGIN', link: '/login' , emphasis: true },
  ]
  return (
    <Router>
      <div style={styles.main}>
        <div style={styles.top}>
          <img src={logo} style={styles.icon} />
          <div style={styles.navbar}>
            {links.map((link) => (
              <Link to={link.link}>
                <p className="link">{link.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.title}>
            <h1>Calculate Your</h1>
            <h1>Carbon</h1>
            <h1>Footprint</h1>
          </div>
          <p>Track your own carbon footprint over time and compare it with your friends</p>
          <p>Rise in the leaderboards while doing your part to save the environment</p>
          <div className="button">
            <span className="buttonCover"></span>
            Join now!
          </div>
        </div>
      </div>
    </Router>
    // <div class="main">
    //   <div class="navbar">
    //     <ul>
    //       <li><a href = "/">HOME</a></li>
    //       <li><a href = "/extensions/about.html">ABOUT</a></li>
    //       <li><a href = "/">SERVICE</a></li>
    //       <li><a href = "/">DESIGN</a></li>
    //       <li><a href = "/extensions/contact.html">CONTACT</a></li>
    //       <li><a href = "/login.html">LOGIN</a></li>
    //     </ul>
    // </div>
    // <div class="content">
    //   <h1>Calculate Your Carbon Footprint</h1>
    //   <p class="par">Reduce carbon emissions by tracking individual’s carbon footprint and creating a leaderboard of carbon reducers</p>
    //   <div class="phu">
    //     <button type = "button"><span></span>JOIN US</button>
    //   </div>
    //   </div>
    // </div>
  )
}
