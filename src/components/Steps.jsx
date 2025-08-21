import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certificates', 'Review & Submit'];

function Steps({userInput,setUserInput}) {
  const skillSuggestionArray = ['NODE JS','EXPRESS','MONGODB','REACT','ANGULAR','NEXT JS','BOOTSTRAP','TAILWIND','CSS','GIT']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const userSkillRef = React.useRef()
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
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



  // render the content 
  const renderStepContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,name:e.target.value}})} value={userInput.personalData.name} />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,jobTitle:e.target.value}})} value={userInput.personalData.jobTitle} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,location:e.target.value}})} value={userInput.personalData.location} />

          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,email:e.target.value}})} value={userInput.personalData.email} />
            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,phone:e.target.value}})} value={userInput.personalData.phone} />
            <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,github:e.target.value}})} value={userInput.personalData.github} />
            <TextField id="standard-basic-linkedin" label="Linked Profile Link" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,linkedIn:e.target.value}})} value={userInput.personalData.linkedIn} />
            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({...userInput , personalData:{...userInput.personalData,portfolio:e.target.value}})} value={userInput.personalData.portfolio} />

          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e=>setUserInput({...userInput , educationData:{...userInput.educationData,course:e.target.value}})} value={userInput.educationData.course} />
            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e=>setUserInput({...userInput , educationData:{...userInput.educationData,college:e.target.value}})} value={userInput.educationData.college} />
            <TextField id="standard-basic-university" label="University" variant="standard" onChange={e=>setUserInput({...userInput , educationData:{...userInput.educationData,university:e.target.value}})} value={userInput.educationData.university} />
            <TextField id="standard-basic-yop" label="Year of Passing" variant="standard" onChange={e=>setUserInput({...userInput , educationData:{...userInput.educationData,year:e.target.value}})} value={userInput.educationData.year} />

          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Proffessional Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-job" label="Job Role" variant="standard" onChange={e=>setUserInput({...userInput , experienceData:{...userInput.experienceData,jobRole:e.target.value}})} value={userInput.experienceData.jobRole} />
            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e=>setUserInput({...userInput , experienceData:{...userInput.experienceData,company:e.target.value}})} value={userInput.experienceData.company} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e=>setUserInput({...userInput , experienceData:{...userInput.experienceData,jobLocation:e.target.value}})} value={userInput.experienceData.jobLocation} />
            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e=>setUserInput({...userInput , experienceData:{...userInput.experienceData,duration:e.target.value}})} value={userInput.experienceData.duration} />

          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex align-items-center justify-content-between p-3'>
            {/* <TextField sx={{width:'500px'}} id="standard-basic-skill" label="Add Skill" variant="standard" /> */}
            <input type="text" ref={userSkillRef} className='form-control' placeholder='Add Skill' />
            <Button variant="text" onClick={()=>addSkill(userSkillRef.current.value)}>Add</Button>
          </div>
          <h5>Suggestions :</h5>
          <div className="d-flex flex-wrap justify-contenet-between my-3">
            {
              skillSuggestionArray.map(userSkill=>(
                <Button onClick={()=>addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          {
              userInput.skills !="" &&
            <>
          <h5>Added Skills :</h5>
          <div className="d-flex flex-wrap justify-contenet-between my-3">
          {
            userInput.skills.length>0 && userInput.skills.map(skill=>(
              
            <span key={skill} className='btn btn-primary d-flex align-items-center justify-content-center m-1 '>{skill} <button onClick={()=>removeskill(skill)} className='text-light btn'>X</button></span>
            ))
          }
          </div>
          </>
          }
        </div>
      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} defaultValue={'Dedicated and results-driven professional with a strong work ethic and proven ability to adapt in dynamic environments. Skilled in problem-solving, effective communication, and time management, with a focus on delivering high-quality outcomes. Adept at collaborating with diverse teams and leveraging new technologies to support organizational objectives. Committed to continuous learning and professional growth.'} variant="standard" onChange={e=>setUserInput({...userInput , summary :e.target.value})} value={userInput.summary} />

          </div>
        </div>
      )
      default: return null 
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* VIEW OF EACH STEP */}
          <Box>
            {renderStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Steps