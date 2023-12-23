import React, { useState } from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import UndoIcon from '@mui/icons-material/Undo';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Switch from '@mui/material/Switch';
import EditIcon from '@mui/icons-material/Edit';
import HttpsIcon from '@mui/icons-material/Https';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SchoolIcon from '@mui/icons-material/School';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import FeedIcon from '@mui/icons-material/Feed';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Meetingsettings() {
  const [teamName, setTeamName] = useState('');
  const [agenda, setagenda] = useState('');
  const handleTeam = (event) => {
    setTeamName(event.target.value);
  };
  // handle agenda
  const handleAgenda = (event) => {
    setagenda(event.target.value);
  };

 //

// reset menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // switch

   const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

// section static data

const [ agendaSection, setAgendaSection ] = React.useState ([
  {id:1, section: "SEGUE", minutes: 5, icon: <EditIcon />},
  {id:2, section: "SCORECARD", minutes: 5, icon: <HttpsIcon />},
  {id:3, section: "ROCK REVIEW", minutes: 5, icon: <HttpsIcon />},
  {id:4, section: "CUSTOMER / EMPLOYEE HEADLINES", minutes: 5, icon: <EditIcon />},
  {id:5, section: "TO-DO LIST", minutes: 5, icon: <HttpsIcon />},
  {id:6, section: "IDS™", minutes: 60, icon: <HttpsIcon />},
])

// tool section menu

const [addTool, setAddTool] = React.useState(null);
  const openTool = Boolean(addTool);
  const handleToolClick = (event) => {
    setAddTool(event.currentTarget);
  };
  const handleToolClose = () => {
    setAddTool(null);
  };

  return (
    <div >
      <div className='d-flex flex-row justify-content-between'>

      </div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ minWidth: 120, display: 'flex' }}>
            <FormControl  style={{ width: "220px" }} size="small">
              {/* Team Dropdown */}
              <InputLabel id="demo-simple-select-label">Team</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={teamName}
                label="Team"
                onChange={handleTeam}
                style={{ width: "200px" }}
              >
                <MenuItem value={"AI Team"}>AI Team</MenuItem>
                <MenuItem value={"Leadership Team"}>Leadership Team</MenuItem>
                <MenuItem value={"MERN Stack"}>MERN Stack</MenuItem>
              </Select>

            </FormControl>
            <FormControl size="small">
              {/* Agenda dropdown */}
              <InputLabel id="demo-simple-select-label">Agenda</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={agenda}
                label="Agenda"
                onChange={handleAgenda}
                style={{ width: "200px" }}
              >
                <MenuItem value={"Level 10 Meeting™"}>Level 10 Meeting™</MenuItem>
                <MenuItem value={"Quarterly Session"}>Quarterly Session</MenuItem>
                <MenuItem value={"Focus Day®"}>Focus Day®</MenuItem>
                <MenuItem value={"Annual Session"}>Annual Session</MenuItem>
                <MenuItem value={"Vision Building®"}>Vision Building®</MenuItem>
              </Select>
            </FormControl>
            <button className="btn btn-outline-secondary px-1"><AddIcon style={{color: '#2596be'}}/></button>
            <div style={{width: '170px'}} ></div>
{/*save and reset*/}
            <div className="d-flex">
              <button style={{color: '#2596be'}} className="btn btn-outline-secondary bg-white ms-5"><SaveIcon />&nbsp;&nbsp;SAVE</button>
              <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="btn btn-outline-secondary bg-white text-black ms-3 px-3"><MenuIcon />&nbsp;&nbsp;More Options</button>

                <button className="btn text-black p-0 ms-3"><CloseIcon /></button>

            </div>

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
        <MenuItem onClick={handleClose}><UndoIcon />&nbsp;&nbsp;Undo All Changes</MenuItem>
        <hr/>
        <MenuItem onClick={handleClose}><RestartAltIcon />&nbsp;&nbsp;Reset to Default</MenuItem>
      </Menu>

          </Box>
        </CardContent>
      </Card>

{/*Agenda*/}
<div className="bg-white p-2 mt-3">
  <h5 className="ms-2" style={{fontFamily: 'Poppins, sans-serif'}} >Level 10 Meeting™ Agenda</h5>

<div class="table-wrapper-scroll-y my-custom-scrollbar mt-3">

  <table class="table mb-0">
    <thead>
      <tr>
        <th className="text-secondary"></th>
        <th className="text-secondary fw-normal">Section Name</th>
        <th className="text-secondary fw-normal">Duration (minutes)</th>
        <th className="text-secondary fw-normal">Visible</th>
        <th className="text-secondary fw-normal"></th>
      </tr>
    </thead>
    <tbody>
    {agendaSection.map((agenda, index) =>
      <tr>
        <td><DragIndicatorIcon /></td>
        <td><TextField style={{width:'400px'}} defaultValue={agenda.section}  size="small" id="outlined-basic"  variant="outlined" /></td>
        <td><TextField size="small" defaultValue={agenda.minutes} type="number" id="outlined-basic" variant="outlined" /></td>
        <td><Switch color="warning" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/></td>
        <td><div style={{color: '#BDBDBD'}} >{agenda.icon}</div></td>
      </tr>
    )}

    </tbody>
  </table>

<div className="container">
  <div className="row mt-3">

    <div className="col-12 col-lg-8 col-md-6 col-sm-12 d-flex">
      <div className="d-flex" style={{color: '#2596be'}} >
        <button style={{color: '#2596be'}} className="btn p-0 m-0"><AddIcon /></button>
        <h6 className="pt-2 ms-2" style={{fontFamily: 'Poppins, sans-serif'}} >Add Custom Section</h6>
      </div>

      <div className="d-flex ms-4" >
        <button
          id="basic-button"
          aria-controls={openTool ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openTool ? 'true' : undefined}
          onClick={handleToolClick}
          className="btn p-0 m-0" style={{fontFamily: 'Poppins, sans-serif'}} ><AddIcon />  Add Tool Section <KeyboardArrowDownIcon /></button>
      </div>

{/*add tool menu*/}

    <Menu
        id="basic-menu"
        anchorEl={addTool}
        open={openTool}
        onClose={handleToolClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleToolClose}>
          <div className="d-flex fs-5">
            <h6 className="text-secondary fs-5"><FontAwesomeIcon icon={faBinoculars} /></h6>
            <h6 className="text-black ms-3 mt-1" style={{fontFamily: 'Poppins, sans-serif'}} >V/TO® </h6>
          </div>
        </MenuItem>

        <MenuItem onClick={handleToolClose}>
          <div className="d-flex fs-5">
            <h6 className="text-secondary fs-5"><FontAwesomeIcon icon={faBinoculars} /></h6>
            <h6 className="text-black ms-3 mt-1" style={{fontFamily: 'Poppins, sans-serif'}} >V/TO® - Goals </h6>
          </div>
        </MenuItem>

        <MenuItem onClick={handleToolClose}>
          <div className="d-flex fs-5">
            <h6 className="text-secondary fs-5"><FontAwesomeIcon icon={faBinoculars} /></h6>
            <h6 className="text-black ms-3 mt-1" style={{fontFamily: 'Poppins, sans-serif'}} >V/TO® - Long-Term </h6>
          </div>
        </MenuItem>

        <MenuItem onClick={handleToolClose}>
          <div className="d-flex fs-5">
            <h6 className="text-secondary fs-5"><FontAwesomeIcon icon={faBinoculars} /></h6>
            <h6 className="text-black ms-3 mt-1" style={{fontFamily: 'Poppins, sans-serif'}} >V/TO® - SWOT </h6>
          </div>
        </MenuItem>

        <MenuItem onClick={handleToolClose}>
          <div className="d-flex fs-5">
            <h6 className="text-secondary fs-5"> <SchoolIcon /> </h6>
            <h6 className="text-black ms-3 mt-1" style={{fontFamily: 'Poppins, sans-serif'}} >EOS Toolbox™</h6>
          </div>
        </MenuItem>

      </Menu>


    </div> {/*col-1*/}

    <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex text-end mt-2">
      <h6 className="fw-bold text-secondary" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px'}} >Total Duration : </h6>
      <h6 className="fw-bold ms-2" style={{fontFamily: 'Poppins, sans-serif', fontSize: '14px'}} >1 hour  30 minutes</h6>

    </div> {/*col-2*/}

  </div> {/*row*/}
</div> {/*container*/}

</div>
</div> {/*bg-white*/}


    </div>
  )
}
