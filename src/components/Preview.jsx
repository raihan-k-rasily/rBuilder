import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';



function Preview() {
  return (
    <>
      <Stack direction={'row'} sx={{justifyContent:'flex-end'}}>
        {/* DELETE */}
        <button className='btn fs-3 text-primary'><FaFileDownload/></button>
        {/* EDIT */}
        <div>
          <Edit/>
        </div>
        {/* HISTORY */}
        <Link to={'/history'} className='btn fs-3 text-danger'><FaHistory /></Link>
        {/* Back */}
        <Link to={'/resume'} className='btn text-primary mt-2'>BACK</Link>
      </Stack>
      <Box component="section">
        <Paper elevation={3} sx={{ my:2 , p: 5, textAlign: 'center' }}>
          <h2>Name</h2>
          <h6>Job Title</h6>
          <p><span>location</span>|<span>Email</span>|<span>Phone</span></p>
          <p>
            <Link href={""}>Github</Link> |
            <Link href={""}>LinkedIN</Link> |
            <Link href={""}>Prfile</Link>
          </p>
          <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
          <p className='fs-5 text-start'>user summary</p>
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
          <h6>User Education</h6>
          <p><span>College</span>|<span>University</span>|<span>Year</span></p>
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Proffessional Experience</Divider>
          <h6>User Job</h6>
          <p><span>Company</span>|<span>Location</span>|<span>Duration</span></p>
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
          <Stack spacing={2} direction="row" sx={{flexWrap:'wrap' , gap: '10px'}}>
            <Button className='ms-3' variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
            <Button variant="contained">user Skill</Button>
          </Stack>
        </Paper>
      </Box>

    </>
  )
}

export default Preview