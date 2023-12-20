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
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ResetZoomIcon from '@mui/icons-material/ZoomOutMap';
import PrintIcon from '@mui/icons-material/Print';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from MUI
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


// modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 620,
  bgcolor: 'background.paper',
  p: 3,
};

function ScoreCardAppBar() {
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

// 1st setting switch

 const [trailingChecked, setTrailingChecked] = React.useState(true);

  const handleTrailingChange = (event) => {
    setTrailingChecked(event.target.checked);
  };

// 2nd setting switch

 const [averageChecked, setAverageChecked] = React.useState(true);

  const handleAverageChange = (event) => {
    setAverageChecked(event.target.checked);
  };

// 3rd setting switch

 const [totalChecked, setTotalChecked] = React.useState(true);

  const handleTotalChange = (event) => {
    setTotalChecked(event.target.checked);
  };

// 4th setting switch

 const [statusColor, setStatusColor] = React.useState(true);

  const handleColorChange = (event) => {
    setStatusColor(event.target.checked);
  };

// 5th setting switch

 const [hideWeek, setHideWeek] = React.useState(true);

  const handleHideChange = (event) => {
    setHideWeek(event.target.checked);
  };

// textfield
const [weeklyStart, setWeeklyStart] = React.useState('');

  const handleWeeklyChange = (event) => {
    setWeeklyStart(event.target.value);
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

          <Tooltip title="Goal Forecasting"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="zoom-in"
              sx={{ marginRight: '6px' }}
            >
              <EqualizerIcon />
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

          <Tooltip title="Download XLS"> {/* Add Tooltip to show text on hover */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="reset-zoom"
              sx={{ marginRight: '6px' }}
            >
              <FileDownloadIcon />
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
            placeholder="Search ScoreCard"
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
              sx={{ marginRight: 'px' }}
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
          <h6 style={{fontFamily: 'Poppins, sans-serif', fontSize: '20px'}} >ScoreCard Settings</h6>

          <div className="row">

            <div className="col-12 col-lg-6 col-md-6 d-flex flex-column">
              <div className="d-flex mt-2">
                <Switch checked={trailingChecked} color="warning" onChange={handleTrailingChange} inputProps={{ 'aria-label': 'controlled' }}/>
                <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '300', color: '#5E5E5E'}}>Trailing ScoreCard</h6>
              </div>

              <div className="d-flex mt-2">
                <Switch checked={totalChecked} color="warning" onChange={handleTotalChange} inputProps={{ 'aria-label': 'controlled' }}/>
                <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '300', color: '#5E5E5E'}}>Measurable Total Column</h6>
              </div>

              <div className="d-flex mt-2">
                <Switch color="warning" onChange={handleHideChange} inputProps={{ 'aria-label': 'controlled' }}/>
                <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '300', color: '#5E5E5E'}}>Hide current week for <b>Leadership Team</b>?</h6>
              </div>

            </div> {/*col-1*/}

            <div className="col-12 col-lg-6 col-md-6 d-flex flex-column">
              <div className="d-flex mt-2">
                <Switch checked={averageChecked} color="warning" onChange={handleAverageChange} inputProps={{ 'aria-label': 'controlled' }}/>
                <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '300', color: '#5E5E5E'}}>Measurable Average Column</h6>
              </div>

              <div className="d-flex mt-2 w-100">
                <Switch checked={statusColor} color="warning" onChange={handleColorChange} inputProps={{ 'aria-label': 'controlled' }}/>
                <h6 className="ms-2 mt-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '300', color: '#5E5E5E'}}>Measurable Status Color Indicator</h6>
              </div>

              <div className="d-flex flex-column">
                 <FormControl variant="standard" sx={{ minWidth: '80' }}>
                   <InputLabel id="demo-simple-select-standard-label">Measurable Weekly Start Day</InputLabel>
                     <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={weeklyStart}
                        onChange={handleWeeklyChange}
                        label="Weekly Start Day"
                     >
                     <MenuItem value={'Monday'}>Monday</MenuItem>
                     <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                     <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                     <MenuItem value={'Thursday'}>Thursday</MenuItem>
                     <MenuItem value={'Friday'}>Friday</MenuItem>
                     <MenuItem value={'Saturday'}>Saturday</MenuItem>
                     <MenuItem value={'Sunday'}>Sunday</MenuItem>
                   </Select>
                 </FormControl>
              </div>

            </div> {/*col-2*/}

          </div> {/*row*/}

          <div className="text-end mt-4">
             <Button sx={{backgroundColor: '#2596be' }} variant="contained">CLOSE</Button>
          </div>

        </Box>
      </Modal>
    </div>

      {/* Your content goes here */}
      {/* Add your list of teams and users */}
    </div>
  );
}

export default ScoreCardAppBar;