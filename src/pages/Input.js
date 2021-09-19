import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Travel from "./Travel";
import { FaRoute, FaShoppingCart, FaUtensils } from 'react-icons/fa';

export default function Input() {
  const options = [
    { icon: FaRoute, label: "travel", link: "/travel" },
    { icon: FaShoppingCart, label: "shop", link: "/shop" },
    { icon: FaUtensils, label: "eat", link: "/eat" },
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
      width: '200px',
      padding: '4vw',
      margin: '4vw',
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
      <h1 style={styles.header}>What did you do recently?</h1>
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
      <Switch>
        <Route exact path="/travel" component={Travel} />
      </Switch>
    </Router>
  )
}
