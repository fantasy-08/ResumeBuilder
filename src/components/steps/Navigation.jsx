import React from 'react'
import { StepsContext } from '../../App';
import Stepper from '../utils/Stepper';

function Navigation() {
    const { stepsState } = React.useContext(StepsContext);
    const [stepsBuild, setStepsBuild] = React.useState(false)
    const [stepsMetadata, setStepsMetadata] = React.useState({ steps: [], optional: new Set() })
    // navigation management
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    React.useEffect(() => {

        if (stepsMetadata.steps.length === 0) {
            let new_step = [], new_optional = new Set()
            for (let index in stepsState) {
                let step = stepsState[index]
                new_step.push(step.heading)
                if (step.optional)
                    new_optional.add(index)
            }
            setStepsMetadata({ steps: new_step, optional: new_optional })
        }
        else {
            // there is a change in state of any step
            let activeStep_ = 0, skipped_ = new Set()
            for (let index in stepsState) {
                let step = stepsState[index]
                if (step.skipped)
                    skipped_.add(index)
                if (step.completed === true)
                    activeStep_ = parseInt(index) + 1
            }
            setActiveStep(activeStep_)
            setSkipped(skipped_)
        }

        setStepsBuild(true)
    }, [stepsState])

    return (
        <div>
            {
                stepsBuild ?
                    <Stepper
                        steps={stepsMetadata.steps}
                        optionalSteps={stepsMetadata.optional}
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        skipped={skipped}
                        setSkipped={setSkipped}
                    /> :
                    <></>
            }
        </div>
    )
}

export default Navigation
