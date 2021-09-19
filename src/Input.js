import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { FaRoute, FaShoppingCart, FaUtensils } from 'react-icons/fa';

export default function Input() {
  const options = [
    { icon: FaRoute, label: "travel", link: "/travel1" },
    { icon: FaShoppingCart, label: "shopping", link: "/shopping1" },
    { icon: FaUtensils, label: "meal", link: "/meal1" },
  ]

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    container: {
      width: '200px',
      padding: '4vw',
      margin: '4vw',
      border: '1px hidden red',
      borderRadius: '20px',
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: '100px',
      height: '100px',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };

  return (
    <Router>
      <div style={styles.main}>
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <Link to={option.link} style={styles.link}>
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
