import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function FoundationSteper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Stepper nonLinear activeStep={activeStep} orientation="vertical" className="text-brand-yellow">
      {steps.map((label, index) => (
        <Step key={label}>
          <StepButton color="red" onClick={handleStep(index)} className="group">
            <span className="hidden group-hover:block uppercase text-brand-yellow">{label}</span>
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
}
