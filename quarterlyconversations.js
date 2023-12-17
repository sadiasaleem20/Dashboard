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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


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

const QuarterlyConversations = () => {

const [values, setValues] = React.useState(0);

  const handleChange = (event, newValues) => {
    setValues(newValues);
  };

// modal
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 'inherit',
  bgcolor: 'background.paper',
  p: 3,
};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);
// quill

const [value, setValue] = React.useState('');
var toolbarOptions = [
  ['bold', 'italic'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'direction': 'rtl' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']
];
const module = {
toolbar : toolbarOptions,
};

// select

  const [manager, setManager] = React.useState('');

  const handleManagerChange = (event) => {
    setManager(event.target.value);
  };

  // menu items

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleMenuClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuCloses = () => {
    setAnchorEl(null);
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
      <ForumOutlinedIcon style={{ fontSize: 100, marginBottom: '16px', color:'#0000008a' }} />

      {/* Heading */}
      <Typography variant="p" align="center" gutterBottom sx={{color:'#0000008a', fontSize:'20px', fontWeight:'500', fontFamily:'Poppins,sans-serif'}}>
        You don't have any Quarterly Conversations.
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" align="center" paragraph sx={{color:'#0000008a', fontSize:'14px', fontWeight:'400', fontFamily:'Nunito Sans,sans-serif'}}>
        Conversations are a great way to give and receive feedback from your teammates.
      </Typography>

      {/* Button */}
      <Button data-bs-toggle="modal" data-bs-target="#exampleModal" variant="contained" sx={{width:'250px',height:'40px', textTransform:'capitalize' ,  marginTop:'16px', bgcolor:'#1993c6', '&:hover': {   bgcolor: '#156f96', },}}>
        Create Conversation
      </Button>

      {/* Text Link */}
      <Typography variant="body2" align="center" sx={{marginTop: '24px',color:'#1993c6', fontSize:'14px', fontWeight:'400', fontFamily:'Nunito Sans,sans-serif', '& a': {
          color: '#1993c6', 
          textDecoration: 'none',
          '&:hover': {
            color: '#156f96',
          },
        },}}>
        <Link href="#">Learn more about Conversations</Link>
      </Typography>

{/*Modal Output*/}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 className="mt-2" style= {{fontFamily: 'Poppins, sans-serif'}} >Create Quarterly Conversation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Settings" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={values} index={0}>
{/*Name Field*/}
        <div className="d-flex flex-column m-0">
        <label className="text-secondary mb-1">Name</label>
        <TextField size="small" placeholder="Enter a name" id="outlined-basic" variant="outlined" />
        </div>
{/*Description Field*/}
        <div className="d-flex flex-column m-0">
        <label className="text-secondary mt-3 mb-1">Description (optional)</label>
        <ReactQuill modules={module} style={{ marginTop: "2px" }} theme="snow" placeholder="Write a Description" value={value} onChange={setValue} />
        </div>
{/*Time Period Field*/}
        <div className="d-flex flex-column m-0 mt-2 w-100">
          <label className="text-secondary mt-3">Time Period</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker placeholder="Select a time period" fullWidth />
            </DemoContainer>
          </LocalizationProvider>
        </div>
{/*Due Date Field*/}
        <div className="d-flex flex-column m-0 mt-2 w-100">
          <label className="text-secondary mt-3">Due Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker placeholder="Select a due date"  fullWidth />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <hr />
{/*Participant Field*/}
        <div>
        <h5 className="fw-bold">Participants</h5>
        <label className="mt-3">Manager</label>
        <div>
      <FormControl variant="standard" sx={{  minWidth: '100%' }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={manager}
          onChange={handleManagerChange}
          label="Manager"
        >
          <MenuItem style={{display:'flex'}} value={'Adeel Saleem'}>
          <div className="d-flex">
          <Stack direction="row" spacing={2}><Avatar>AS</Avatar></Stack>&nbsp;&nbsp;
          <h6 className="mt-2">Adeel Saleem</h6></div>
          </MenuItem>

          <MenuItem style={{display:'flex'}} value={'Husnain Khalid'}>
          <div className="d-flex">
          <Stack direction="row" spacing={2}><Avatar>HK</Avatar></Stack>&nbsp;&nbsp;
          <h6 className="mt-2">Husnain Khalid</h6></div>
          </MenuItem>

          <MenuItem style={{display:'flex'}} value={'Muhammad Huzaifa'}>
          <div className="d-flex">
          <Stack direction="row" spacing={2}><Avatar>MH</Avatar></Stack>&nbsp;&nbsp;
          <h6 className="mt-2">Muhammad Huzaifa</h6></div>
          </MenuItem>
          <MenuItem style={{display:'flex'}} value={'Sadia Saleem'}>
          <div className="d-flex">
          <Stack direction="row" spacing={2}><Avatar>SS</Avatar></Stack>&nbsp;&nbsp;
          <h6 className="mt-2">Sadia Saleem</h6></div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
        </div>

{/*Managee*/}

<div  className="mt-4">
  <h6>Managee</h6>
  <p className="text-secondary"><small>Separate Conversations will be created for each Managee.</small></p>
  <button style={{backgroundColor: '#F6F6F6'}} className="btn w-100 text-center py-2"><small>You must add at least one Managee.</small></button>
</div>


{/*add manager*/}

<div className="d-flex mt-5">
  <h6><button className="btn"  id="basic-button"
        aria-controls={opens ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClicks}><PersonAddIcon /></button></h6>
  <h6 className="ms-2 mt-2 text-secondary-emphasis">Add Managee(s)</h6>
</div>

<div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={opens}
        onClose={handleMenuCloses}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleMenuCloses}><FormControlLabel control={<Checkbox />} />Adeel Saleem</MenuItem>
        <MenuItem onClick={handleMenuCloses}><FormControlLabel control={<Checkbox />} />Husnain Khalid</MenuItem>
        <MenuItem onClick={handleMenuCloses}><FormControlLabel control={<Checkbox />} />Muhammad Huzaifa</MenuItem>
        <MenuItem onClick={handleMenuCloses}><FormControlLabel control={<Checkbox />} />Sadia Saleem</MenuItem>
         <div className="row m-1">

           <div className="col-12 col-lg-6">
             <button type="button" class="btn bg-body-tertiary text-center w-100">Close</button>
           </div>

            <div className="col-12 col-lg-6">
             <button type="button" class="btn bg-body-tertiary text-center w-100">OK</button>
           </div>

         </div>
      </Menu>
    </div>

{/*end*/}
      </CustomTabPanel>

      <CustomTabPanel value={values} index={1}>
<h6 style={{fontFamily:'Poppins, sans-serif'}} className="fw-bold">Conversation Settings</h6>
{/*First Checkbox*/}
<div className="d-flex">
  <FormControlLabel control={<Checkbox defaultChecked color="success" />} />
  <div className="d-flex flex-column">
    <h6 className="mt-5" style={{fontFamily:'Poppins, sans-serif' }} >Self Evaluation</h6>
    <p className="text-secondary">Conversation participants evaluate themselves</p>
  </div>
</div>

{/*Second Checkbox*/}
<div className="d-flex">
  <FormControlLabel control={<Checkbox defaultChecked color="success" />} />
  <div className="d-flex flex-column mt-5">
    <h6 style={{fontFamily:'Poppins, sans-serif' }} >Manager Evaluation</h6>
    <p className="text-secondary">Managees evaluate their Managers.</p>
  </div>
</div>

<hr />

<h6 style={{fontFamily:'Poppins, sans-serif'}} className="fw-bold">Meeting Settings</h6>
{/*First Checkbox*/}
<div className="d-flex">
  <FormControlLabel control={<Checkbox defaultChecked color="success" />} />
  <div className="d-flex flex-column">
    <h6 className="mt-4" style={{fontFamily:'Poppins, sans-serif' }} >Hold Meeting</h6>
    <p className="text-secondary">Once both participants complete their forms, a 1-on-1 Meeting can be run in ICTM.</p>
  </div>
</div>

{/*Second Checkbox*/}
<div className="d-flex">
  <FormControlLabel control={<Checkbox defaultChecked color="success" />} />
  <div className="d-flex flex-column mt-4">
    <h6 style={{fontFamily:'Poppins, sans-serif' }} >Reveal Answers Prior to Meeting</h6>
    <p className="text-secondary">Once both participants complete their forms, the answers are revealed to Conversation participants prior to Meeting.</p>
  </div>
</div>

      </CustomTabPanel>

    </Box>
      </div>
      <hr />
         <div className="row m-1">

           <div className="col-12 col-lg-4 col-md-4">
             <button type="button" class="btn btn-secondary text-center w-100" data-bs-dismiss="modal">Close</button>
           </div>

            <div className="col-12 col-lg-8 col-md-4">
             <button type="button" style={{backgroundColor: '#1993c6'}} class="btn text-white text-center w-100">Create Conversation</button>
           </div>

         </div>

    </div>
  </div>
</div>


    </div>
  );
};

export default QuarterlyConversations;
