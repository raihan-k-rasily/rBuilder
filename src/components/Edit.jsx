import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField, Button } from '@mui/material';
import { editResumeAPI, getEditResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ resumeID , setUpdateUserInput }) {

    const [userInput, setUserInput] = React.useState({})

    React.useEffect(() => {
        resumeID && getEditResumeDetails()
    }, [resumeID])

    console.log(userInput);

    console.log(resumeID);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getEditResumeDetails = async () => {
        try {
            const result = await getEditResumeAPI(resumeID)
            setUserInput(result?.data)
            console.log(result?.data);

        } catch {

        }
    }

    
      const userSkillRef = React.useRef()
    // add skill
  const addSkill = (inputSkill)=>{
    if(inputSkill){
    if(userInput.skills.includes(inputSkill)){
      alert("Skill already Excist !!! Add Another Skill")
    }else{
      // userInput.skills.push(inputSkill)
      setUserInput({...userInput,skills:[...userInput.skills , inputSkill]})
    }
  }
  }
  const removeskill = (skill) =>{
      setUserInput({...userInput,skills: userInput.skills.filter(item=>item!=skill)})
  }
  const handleResumeUpdate = async ()=>{
    try {
        const result =await editResumeAPI(userInput?.id,userInput);
        setUpdateUserInput(result?.data);  
        swal("Good job!", "RESUME UPDATED SUCCESSFULLY!", "success");
        handleClose()
    } catch (err) {
        console.log(err);
        
    }
  }
    return (
        <>

            <button onClick={handleOpen} className='btn fs-3' style={{ color: 'purple' }}><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* PERSONAL DETAILS */}
                        <h3>Personal Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })} value={userInput?.personalData?.name} />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} value={userInput?.personalData?.jobTitle} />
                            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} value={userInput?.personalData?.location} />

                        </div>
                        {/* CONTACT DETAILS */}
                        <h3>Contact Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } })} value={userInput?.personalData?.email} />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } })} value={userInput?.personalData?.phone} />
                            <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } })} value={userInput?.personalData?.github} />
                            <TextField id="standard-basic-linkedin" label="Linked Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, linkedIn: e.target.value } })} value={userInput?.personalData?.linkedIn} />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } })} value={userInput?.personalData?.portfolio} />

                        </div>
                        {/* EDUCATION DETAILS */}
                        <h3>Education Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } })} value={userInput?.educationData?.course} />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } })} value={userInput?.educationData?.college} />
                            <TextField id="standard-basic-university" label="University" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } })} value={userInput?.educationData?.university} />
                            <TextField id="standard-basic-yop" label="Year of Passing" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } })} value={userInput?.educationData?.year} />

                        </div>
                        {/* PROFFESSIONAL DETAILS */}
                        <h3>Proffessional Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-job" label="Job Role" variant="standard" onChange={e => setUserInput({ ...userInput, experienceData: { ...userInput.experienceData, jobRole: e.target.value } })} value={userInput?.experienceData?.jobRole} />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experienceData: { ...userInput.experienceData, company: e.target.value } })} value={userInput?.experienceData?.company} />
                            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, experienceData: { ...userInput.experienceData, jobLocation: e.target.value } })} value={userInput?.experienceData?.jobLocation} />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experienceData: { ...userInput.experienceData, duration: e.target.value } })} value={userInput?.experienceData?.duration} />

                        </div>
                        {/* SKILL */}
                        <h3>Skills</h3>
                        <div className='d-flex align-items-center justify-content-between p-3'>
                            <input type="text" ref={userSkillRef} className='form-control' placeholder='Add Skill' />
                            <Button variant="text" onClick={() => addSkill(userSkillRef.current.value)}>Add</Button>
                        </div>
                        <h6>Selected Skills :</h6>
                        <div className="d-flex flex-wrap justify-contenet-between my-3">
                            {/* <span className='btn btn-outline-primary'>REACT <button className='text-light btn'>X</button></span> */}
                            {
                                userInput?.skills?.length >= 0 && userInput?.skills?.map(skill => (
                                    <span key={skill} className='btn btn-primary d-flex align-items-center justify-content-center m-1 '>{skill} <button onClick={() => removeskill(skill)} className='text-light btn'>X</button></span>
                                ))
                            }
                        </div>
                        {/* SUMMARY */}
                        <h3>Professional Summary</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} variant="standard" value={userInput.summary} />

                        </div>
                    </Typography>
                    <Button onClick={handleResumeUpdate}>UPDATE</Button>
                </Box>
            </Modal>

        </>
    )
}

export default Edit