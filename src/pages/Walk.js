import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';

export default function Walk() {
  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    header: {
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      lineHeight: '2em',
      width: '100vw',
    },
    input: {
      padding: '2vw',
      backgroundColor: 'rgba(256, 256, 256, 0.7)',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submit: {
      padding: '4vw',
      backgroundColor: 'rgba(256, 256, 256, 0.7)',
      lineHeight: '2em',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.header}>How far did you walk?</h1>
      <div style={styles.input}><TextField required id="distance" label="Distance in miles" /></div>
      <h1 style={styles.header}>For how long were you walking?</h1>
      <div style={styles.input}><TextField required id="time" label="Time in minutes" /></div>
      <div style={styles.submit}><Button variant="outlined" startIcon={<PublishIcon />} size="large">Submit</Button></div>
    </div>
  )
}
