import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <div className="">
      <h1 className="text-center my-5">Resume Download History</h1>
      <Link to={'/'} style={{ marginTop:"-20px"}} className='float-end me-5'>BACK </Link>
      </div>
      <Box component="section">
        <div className='row '>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{ my: 2, p: 5, textAlign: 'center' }}>
              <div className="d-flex align-items-center justify-content-evenly">
                <h6>Review At: <br /> 24/08/2025, 1:22:27 </h6>
              <button className="btn text-danger fs-4 ms-5"><MdDelete/></button>
              </div>
              <div className="border rounded p-3">
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
              <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
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
              </div>
            </Paper>
          </div>
        </div>

      </Box>
    </div>
  )
}

export default History