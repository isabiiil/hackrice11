import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { FaCar, FaTrain, FaBus, FaBiking, FaWalking } from 'react-icons/fa';

export default function Input() {
  const options = [
    { icon: FaCar, label: "by car", link: "/car" },
    { icon: FaTrain, label: "by train", link: "/train" },
    { icon: FaBus, label: "by bus", link: "/bus" },
    { icon: FaBiking, label: "by bike", link: "/bike" },
    { icon: FaWalking, label: "by foot", link: "/walk" },
  ]

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    header: {
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      lineHeight: '2em',
    },
    container: {
      padding: '2vw',
      margin: '2vw',
      border: '1px hidden red',
      borderRadius: '20px',
      backgroundColor: '#009688',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: '100px',
      height: '100px',
      margin: '2vw',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };

  return (
    <Router>
      <h1 style={styles.header}>How did you travel?</h1>
      <div style={styles.main}>
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <Link to={option.link} style={styles.link} onClick={() => window.location.reload()}>
              <div style={styles.container}>
                <Icon style={styles.icon} />
                <p>{option.label}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </Router>
  )
}
