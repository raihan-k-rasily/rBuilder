import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certificates', 'Review & Submit'];

function Steps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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

  const renderStepContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
            <TextField id="standard-basic-location" label="Location" variant="standard" />

          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-email" label="Email" variant="standard" />
            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
            <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" />
            <TextField id="standard-basic-linkedin" label="Linked Profile Link" variant="standard" />
            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />

          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
            <TextField id="standard-basic-college" label="College Name" variant="standard" />
            <TextField id="standard-basic-university" label="University" variant="standard" />
            <TextField id="standard-basic-yop" label="Year of Passing" variant="standard" />

          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Work Experience</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-job" label="Job Role" variant="standard" />
            <TextField id="standard-basic-company" label="Company Name" variant="standard" />
            <TextField id="standard-basic-location" label="Location" variant="standard" />
            <TextField id="standard-basic-duration" label="Duration" variant="standard" />

          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
            <TextField id="standard-basic-location" label="Location" variant="standard" />

          </div>
        </div>
      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} defaultValue={'Dedicated and results-driven professional with a strong work ethic and proven ability to adapt in dynamic environments. Skilled in problem-solving, effective communication, and time management, with a focus on delivering high-quality outcomes. Adept at collaborating with diverse teams and leveraging new technologies to support organizational objectives. Committed to continuous learning and professional growth.'} variant="standard" />

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