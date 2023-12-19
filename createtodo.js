import React from 'react';
import Createbtn from '../../components/createbtn/create'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const CreateTODO = () => {

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
      <LibraryAddCheckIcon style={{ fontSize: 100, marginBottom: '16px', color:'#0000008a' }} />

      {/* Heading */}
      <Typography variant="p" align="center" gutterBottom sx={{color:'#0000008a', fontSize:'20px', fontWeight:'500', fontFamily:'Poppins,sans-serif'}}>
        Your team hasn't added any To-Dos yet.
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" align="center" paragraph sx={{color:'#0000008a', fontSize:'14px', fontWeight:'400', fontFamily:'Nunito Sans,sans-serif'}}>
        Conversations are a great way to give and receive feedback from your teammates.
      </Typography>

      {/* Button */}
      <Button onClick={openModal} disabled={isModalOpen} variant="contained" sx={{width:'250px',height:'40px', textTransform:'capitalize' ,  marginTop:'16px', bgcolor:'#1993c6', '&:hover': {   bgcolor: '#156f96', },}}>
      <Createbtn isOpen={isModalOpen} onClose={closeModal} />
        Create To-Dos
      </Button>

      {/* Text Link */}
      <Typography variant="body2" align="center" sx={{marginTop: '24px',color:'#1993c6', fontSize:'14px', fontWeight:'400', fontFamily:'Nunito Sans,sans-serif', '& a': {
          color: '#1993c6',
          textDecoration: 'none',
          '&:hover': {
            color: '#156f96',
          },
        },}}>
        <Link href="#">Learn more about To-Dos</Link>
      </Typography>


    </div>
  );
};

export default CreateTODO;
