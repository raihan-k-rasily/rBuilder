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



function Preview({userInput}) {
  // console.log(userInput);
  
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
          <h2>{userInput.personalData.name}</h2>
          <h6>{userInput.personalData.jobTitle}</h6>
          <p><span>{userInput.personalData.location}</span>|<span>{userInput.personalData.email}</span>|<span>{userInput.personalData.phone}</span></p>
          <p>
            <Link href={userInput.personalData.github}>Github</Link> |
            <Link href={userInput.personalData.linkedIn}>LinkedIn</Link> |
            <Link href={userInput.personalData.portfolio}>Portfolio</Link>
          </p>
          <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
          <p className='fs-5 text-start'>{userInput.summary}</p>
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
          <h6>{userInput.educationData.course}</h6>
          <p><span>{userInput.educationData.college}</span>|<span>{userInput.educationData.university}</span>|<span>{userInput.educationData.year}</span></p>
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Proffessional Experience</Divider>
          <h6>{userInput.experienceData.jobRole}</h6>
          <p><span>{userInput.experienceData.company}</span>|<span>{userInput.experienceData.jobLocation}</span>|<span>{userInput.experienceData.duration}</span></p>
          <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
          <Stack spacing={2} direction="row" sx={{flexWrap:'wrap' , gap: '10px' }}>
            {
              userInput.skills?.map(skills=>(
            <Button key={skills} variant="contained">{skills}</Button>
          ))
            }
          </Stack>
        </Paper>
      </Box>

    </>
  )
}

export default Preview