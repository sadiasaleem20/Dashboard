import React from 'react';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import SchoolIcon from '@mui/icons-material/School';

const EOSArchive = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh', // Makes the content take up the full viewport height
      }}
    >
      {/* Icon */}
      <SchoolIcon style={{ fontSize: 100, marginBottom: '16px', color:'#0000008a' }} />

      {/* Heading */}
      <Typography variant="p" align="center" gutterBottom sx={{color:'#0000008a', fontSize:'20px', fontWeight:'700', fontFamily:'Poppins,sans-serif'}}>
        Your company has no archived Tools.
      </Typography>

    </div>
  );
};

export default EOSArchive;
