import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import Select from '@mui/material/Select';
import LandscapeIcon from '@mui/icons-material/Landscape';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const EditLayout = () => {

const [color, setColor] = React.useState("false");
  const mystyle = {
    backgroundColor: color,
  };

  return (
  <>
{/*TopBar*/}
<AppBar position="static" sx={{ bgcolor: '#2596be' }}>
  <Toolbar>
    <div className="row w-100">

      <div className="col-12 col-lg-10 col-md-6"></div> {/*col-1*/}

      <div className="col-12 col-lg-2 col-md-6 d-flex">
        <Button className="bg-white text-black" variant="contained">Cancel</Button>
        <Button sx={{ bgcolor: '#2596be' }} className="ms-2" variant="contained">SAVE</Button>
      </div> {/*col-2*/}

    </div> {/*row*/}
  </Toolbar>
</AppBar>


{/*card*/}
<div className="container">
  <div className="row">

   <div className="col-12 col-lg-7 col-md-6"></div> {/*col-1*/}

   <div className="col-12 col-lg-5">

<div className="card mt-1" style={{width: '350px', height: '100vh'}} >
  <h6 className="fw-bold p-1 m-3" style={{fontFamily: 'Poppins, sans-serif' }} >Add Sections</h6>

{/*team to-do*/}
<div className="py-1 my-1" style={mystyle}>
  <div className="d-flex ms-3" onClick={() => setColor("#EAF3F7")}>
    <div className="fs-5" style={{color: '#757575'}}><FontAwesomeIcon icon={faSquareCheck} /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">Team To-Dos</h6>
      <p className="mb-0" style={{color: '#757575'}} >Checklist for daily team tasks</p>
    </div>
  </div>
</div>

{/*personal to-do*/}
<div className="py-1 my-1" style={mystyle}>
  <div className="d-flex ms-3" onClick={() => setColor("#EAF3F7")}>
    <div className="fs-5" style={{color: '#757575'}}><FontAwesomeIcon icon={faSquareCheck} /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">Personal To-Dos</h6>
      <p className="mb-0" style={{color: '#757575'}} >Checklist for daily personal tasks</p>
    </div>
  </div>
</div>

{/*rocks to-do*/}
<div className="py-1 my-1" style={mystyle}>
  <div className="d-flex ms-3" onClick={() => setColor("#EAF3F7")}>
    <div className="fs-5" style={{color: '#757575'}}><LandscapeIcon /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">Rocks & Milestones</h6>
      <p className="mb-0" style={{color: '#757575'}} >Quarterly Goal</p>
    </div>
  </div>
</div>

{/*scorecard to-do*/}
<div className="py-1 my-1" style={mystyle}>
  <div className="d-flex ms-3" onClick={() => setColor("#EAF3F7")}>
    <div className="fs-5" style={{color: '#757575'}}><FontAwesomeIcon icon={faChartLine} /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">Scorecard</h6>
      <p className="mb-0" style={{color: '#757575'}} >Measurable tracker</p>
    </div>
  </div>
</div>

{/*to-do 90 days*/}
<div className="py-1 my-1" style={mystyle}>
  <div className="d-flex ms-3" onClick={() => setColor("#EAF3F7")}>
    <div className="fs-5" style={{color: '#757575'}}><EqualizerIcon /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">To-Dos Created Last 90 Days</h6>
      <p className="mb-0" style={{color: '#757575'}} >Track To-Do creation and completion</p>
    </div>
  </div>
</div>

{/*rock status to-do*/}
<div className="py-1 my-1" style={mystyle} onClick={() => setColor("#EAF3F7")}>
  <div className="d-flex ms-3">
    <div className="fs-5" style={{color: '#757575'}}><EqualizerIcon /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">Rock Statuses</h6>
      <p className="mb-0" style={{color: '#757575'}} >Track Rock status across teams</p>
    </div>
  </div>
</div>

{/*measurable status to-do*/}
<div className="py-1 my-1" style={mystyle} onClick={() => setColor("#EAF3F7")}>
  <div className="d-flex ms-3">
    <div className="fs-5" style={{color: '#757575'}}><EqualizerIcon /></div>
    <div className="d-flex flex-column ms-3">
      <h6 className="m-0">Measurables</h6>
      <p className="mb-0" style={{color: '#757575'}} >Track Measurable progress</p>
    </div>
  </div>
</div>

</div> {/*card*/}
    </div>{/*col-2*/}
  </div> {/*row*/}
</div> {/*container*/}

</>
  )
};

export default EditLayout