import React from 'react'
import {useRef, useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Paper from '@mui/material/Paper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faList, faUserPlus, faExclamation, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import UndoIcon from '@mui/icons-material/Undo';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddIcon from '@mui/icons-material/Add';

// tab code
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const OneOnOneSettings = () => {

// reset menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// tab code
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

// switch code

const [managerChecked, setManagerChecked] = React.useState(true);

  const handleManagerChange = (event) => {
    setManagerChecked(event.target.checked);
  };

  return (
    <>

{/*TopBar*/}
<AppBar position="static" sx={{ bgcolor: 'white' }}>
  <Toolbar>
    <div className="row w-100">

      <div className="col-12 col-lg-7 col-md-6">
        <h5 className="text-black mt-1" style={{fontFamily: 'Poppins, sans-serif'}}>Discussion Settings</h5>
      </div> {/*col-1*/}

      <div className="col-12 col-lg-5 col-md-6 d-flex">
        <div className="d-flex ms-5">
        <button style={{color: '#2596be'}} className="btn btn-outline-secondary bg-white ms-5"><SaveIcon />&nbsp;&nbsp;SAVE</button>
        <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="btn btn-outline-secondary bg-white ms-3 text-black px-3"><RestartAltIcon />&nbsp;&nbsp;Reset</button>

        <Divider orientation="vertical" flexItem />

        <button className="btn text-black ms-5 p-0"><CloseIcon /></button>
        </div>
      </div> {/*col-2*/}


    </div> {/*row*/}
  </Toolbar>
</AppBar>

{/*Reset Menu*/}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><UndoIcon />&nbsp;&nbsp;Cancel Changes</MenuItem>
        <hr/>
        <MenuItem onClick={handleClose}><RestartAltIcon />&nbsp;&nbsp;Reset to Default</MenuItem>
      </Menu>

{/*tab code*/}
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Commitments" {...a11yProps(0)} />
          <Tab label="Annual Questions" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      {/*Leadership Assessment*/}
        <div class="grid gap-3 d-flex justify-content-between">

          <div class="p-2 g-col-6 d-flex">
            <h6 style={{fontFamily: 'Poppins, sans-serif'}} >Leadership Assessment</h6>
            <h6 className="ms-2"><AddCircleOutlineIcon /></h6>
		  </div>

		  <div class=" g-col-6 d-flex">
		    <h6 className="mt-1" style={{fontSize: '18px'}} >Managee</h6>
		    <div className="mt-0"><Switch color="warning" onChange={handleManagerChange} inputProps={{ 'aria-label': 'controlled' }} /></div>
            <h6 className="mt-1" style={{fontSize: '18px'}}>Manager</h6>
          </div>

		</div> {/*grid*/}

       <div className="bg-white w-100 m-0">

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I am given clear direction.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I am given necessary tools.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >My manager has let go of the wine.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	   </div> {/*bg-white*/}

	   {/*Management Assessment*/}
	   <div className="d-flex mt-4">
          <h6 style={{fontFamily: 'Poppins, sans-serif'}} >Management Assessment</h6>
          <h6 className="ms-2"><AddCircleOutlineIcon /></h6>
	   </div>

	   <div className="bg-white w-100 m-0">

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >My manager keeps expectations clear.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >My manager communicates well.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >There is a Meeting Pulse.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	   </div> {/*bg-white*/}

      </CustomTabPanel>

{/*second tab*/}
      <CustomTabPanel value={value} index={1}>

{/*headings*/}

      <div class="grid gap-3 d-flex justify-content-start">

          <div class="p-2 g-col-6 d-flex">
            <h6 style={{fontFamily: 'Poppins, sans-serif'}} >Side Bar Link</h6>
		  </div>

		  <div class="p-2 g-col-6 d-flex ms-5">
		    <h6 className="text-center" style={{fontFamily: 'Poppins, sans-serif', marginLeft: '230px'}} >Question</h6>
          </div>

		</div> {/*grid*/}

{/*textfield -1*/}

<div class="grid gap-3 d-flex justify-content-start">

  <div class=" g-col-6 d-flex">
    <div className="d-flex">
	  <TextField style = {{width: 400, m: '0'}} id="standard-basic" label="Standard" variant="standard" />

	</div>
  </div>

  <div class=" g-col-6 d-flex">
	<div className="d-flex">
	   <TextField style = {{width: 500, m: '0'}} id="standard-basic" label="Standard" variant="standard" />
	</div>
	<div className="ms-4 mt-4" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
  </div>

</div> {/*grid*/}

{/*textfield -2*/}

<div class="grid gap-3 d-flex justify-content-start">

  <div class=" g-col-6 d-flex">
    <div className="d-flex">
	  <TextField style = {{width: 400, m: '0'}} id="standard-basic" label="Standard" variant="standard" />

	</div>
  </div>

  <div class=" g-col-6 d-flex">
	<div className="d-flex">
	   <TextField style = {{width: 500, m: '0'}} id="standard-basic" label="Standard" variant="standard" />
	</div>
	<div className="ms-4 mt-4" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
  </div>

</div> {/*grid*/}

 {/*add question*/}

 <div className="d-flex mt-4">
   <button className="fw-bold btn p-0"><AddIcon /></button>
   <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '16px'}} >Add Question</h6>

 </div>

      </CustomTabPanel>
</Box>

{/*Switch Data*/}

{/*Leadership Assessment*/}
        <div class="grid gap-3 d-flex justify-content-between">

          <div class="p-2 g-col-6 d-flex">
            <h6 style={{fontFamily: 'Poppins, sans-serif'}} >Leadership Assessment</h6>
            <h6 className="ms-2"><AddCircleOutlineIcon /></h6>
		  </div>

		  <div class=" g-col-6 d-flex">
		    <h6 className="mt-1" style={{fontSize: '18px'}} >Managee</h6>
		    <div className="mt-0"><Switch color="warning" checked={managerChecked} onChange={handleManagerChange} inputProps={{ 'aria-label': 'controlled' }} /></div>
            <h6 className="mt-1" style={{fontSize: '18px'}}>Manager</h6>
          </div>

		</div> {/*grid*/}

       <div className="bg-white w-100 m-0">

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I am giving clear direction.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I am giving necessary tools.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I am letting go of the wine.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	   </div> {/*bg-white*/}

	   {/*Management Assessment*/}
	   <div className="d-flex mt-4">
          <h6 style={{fontFamily: 'Poppins, sans-serif'}} >Management Assessment</h6>
          <h6 className="ms-2"><AddCircleOutlineIcon /></h6>
	   </div>

	   <div className="bg-white w-100 m-0">

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I keep expectations clear.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I am communicating well well.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	       <div className="d-flex p-2">
	         <p className="mt-2 mb-0" style={{fontFamily: 'Poppins, sans-serif', fontSize:'16px'}} >I have the right Meeting Pulse.</p>
	         <div className="ms-2 mt-2" style={{color: '#626262'}} ><DeleteOutlineIcon /></div>
	       </div> <hr />

	   </div> {/*bg-white*/}

</>
  )
};

export default OneOnOneSettings