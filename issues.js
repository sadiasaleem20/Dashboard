import React from 'react';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Createbtn from '../createbtn/create'


const Issue = () => {

// createbtn modal

const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <PriorityHighIcon style={{ fontSize: 100, marginBottom: '16px', color:'#0000008a' }} />

      {/* Heading */}
      <Typography variant="p" align="center" gutterBottom sx={{color:'#0000008a', fontSize:'20px', fontWeight:'500', fontFamily:'Poppins,sans-serif'}}>
        Your team hasn't added any Issues yet.
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" align="center" paragraph sx={{color:'#0000008a', fontSize:'14px', fontWeight:'400', fontFamily:'Nunito Sans,sans-serif'}}>
        Improve communication and transparency to matters that need attention with Issues.
      </Typography>

      {/* Button */}
      <Button variant="contained" sx={{width:'250px',height:'40px', textTransform:'capitalize' ,  marginTop:'16px', bgcolor:'#1993c6', '&:hover': {   bgcolor: '#156f96', },}} onClick={openModal} disabled={isModalOpen}>
      <Createbtn isOpen={isModalOpen} onClose={closeModal} />
        Add Issue
      </Button>

      {/* Text Link */}
      <Typography variant="body2" align="center" sx={{marginTop: '24px',color:'#1993c6', fontSize:'14px', fontWeight:'400', fontFamily:'Nunito Sans,sans-serif', '& a': {
          color: '#1993c6',
          textDecoration: 'none',
          '&:hover': {
            color: '#156f96',
          },
        },}}>
        <Link href="#">Learn more about Issues</Link>
      </Typography>

    </div>
  );
};

export default Issue;
