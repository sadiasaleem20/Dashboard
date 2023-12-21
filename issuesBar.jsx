import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from MUI
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Switch from '@mui/material/Switch';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

//modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  p: 3,
};

function IssuesBar() {
  const handleRefreshClick = () => {
    // Handle the refresh icon click event here
    // You can add your refresh logic in this function
    console.log('Refresh icon clicked');
  };

  const handleSearchChange = (event) => {
    // Handle search field input changes here
    // event.target.value contains the search input value
    console.log('Search input:', event.target.value);
  };

// modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//prioritization
const [priorChecked, setPriorChecked] = React.useState(true);

  const handlePriorChange = (event) => {
    setPriorChecked(event.target.checked);
  };

//vote
const [voteChecked, setVoteChecked] = React.useState(true);

  const handleVoteChange = (event) => {
    setVoteChecked(event.target.checked);
  };

//solve rate
const [rateChecked, setRateChecked] = React.useState(true);

  const handleRateChange = (event) => {
    setRateChecked(event.target.checked);
  };

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: '#2596be' }}>
        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1, fontSize: '16px' }}>
            <span style={{ color: '#ffffff91', marginRight: '8px' }}>FILTERS</span> {/* Add the "Filter" text here */}
            <label htmlFor="owner-select">Team:</label>
            <Select
              variant="standard"
              id="owner-select"
              label="Teams"
              sx={{
                icon: {
                  fill: 'white', // Change the color to white
                },
                marginRight: '16px',
                marginLeft: '10px',
                width: '200px',
                '&:before': {
                  borderColor: 'white',
                },
                '&:after': {
                  borderColor: 'white',
                },
                color: 'white',
              }}
              defaultValue={1}
              inputProps={{ style: { border: 'none' } }} // Add border style here
            >
              <MenuItem value={1}>All</MenuItem>
              <MenuItem value={2}>Team 1</MenuItem>
              <MenuItem value={3}>Team 2</MenuItem>
            </Select>
            
            <label htmlFor="owner-select">Archive:</label>
            <Switch {...label} />

          </Typography>

          <Tooltip title="Refresh"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="refresh"
              onClick={handleRefreshClick}
              sx={{ marginRight: '6px' }}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Print to PDF"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="zoom-out"
              sx={{ marginRight: '6px' }}
            >
              <PictureAsPdfIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Archive all completed"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="reset-zoom"
              sx={{ marginRight: '6px' }}
            >
              <DoneAllOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Search"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="search"
              sx={{ marginRight: '6px' }}
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>

          <InputBase
            placeholder="Search Issues"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchChange}
            sx={{ marginRight: '6px', borderBottom: '1px solid white', color: 'white' }}
          />
          <Tooltip title="Open Rocks Settings"> {/* Add Tooltip to show text on hover */}
            <IconButton
              onClick={handleOpen}
              edge="end"
              color="inherit"
              aria-label="reset-zoom"
              sx={{ marginRight: '6px' }}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

{/*setting modal*/}
   <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h6 style={{fontFamily: 'Poppins, sans-serif', fontSize: '20px'}} >Issue Settings</h6>

          <div className="d-flex mt-4">
             <div><Checkbox color="warning" checked={priorChecked} onChange={handlePriorChange} inputProps={{ 'aria-label': 'controlled' }}/></div>
             <div className="d-flex flex-column mt-2">
               <h6 className="ms-1 mb-1" style={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: '300', color: '#5E5E5E'}}>Show Prioritization</h6>
               <p className="ms-1 mt-0" style={{fontSize: '14px', color: '#666666'}}>Display an additional field next to your Issues that allows you to prioritize them from 1 to 5.</p>
             </div>
          </div>

          <div className="d-flex mt-1">
             <div><Checkbox  disabled onChange={handleVoteChange} inputProps={{ 'aria-label': 'controlled' }}/></div>
             <div className="d-flex flex-column mt-2">
               <h6 className="ms-1 mb-1" style={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: '300', color: '#5E5E5E'}}>Voting</h6>
               <p className="ms-1 mt-0" style={{fontSize: '14px', color: '#666666'}}>Allow Meeting attendees to vote on Issue for prioritization during a Meeting.</p>
             </div>
          </div>

          <div className="d-flex mt-1">
             <div><Checkbox color="warning" onChange={handleRateChange} inputProps={{ 'aria-label': 'controlled' }}/></div>
             <div className="d-flex flex-column mt-2">
               <h6 className="ms-1 mb-1" style={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: '300', color: '#5E5E5E'}}>Set desired solve rate</h6>
               <p className="ms-1 mt-0" style={{fontSize: '14px', color: '#666666'}}>Help your team stay on track by setting a desired Issue solve rate.</p>
             </div>
          </div>



          <div className="text-end mt-2">
             <button className="btn btn-outline-secondary">Cancel</button>
             <Button className="ms-2" sx={{backgroundColor: '#2596be' }} variant="contained">SAVE</Button>
          </div>

        </Box>
      </Modal>
    </div>

      {/* Your content goes here */}
      {/* Add your list of teams and users */}
    </div>
  );
}

export default IssuesBar;