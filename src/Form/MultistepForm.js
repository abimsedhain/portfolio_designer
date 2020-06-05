import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Review from './Review';
import SocialMedia from './SocialMedia';
import Experience from './Experience';
import Education from './Education';
import Submit from './Submit';

export const MultistepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        bio: '',

        github: '',
        linkedin: '',

        skills: '',

        pro1Title: '',
        pro1Description: '',
        pro2Title: '',
        pro2Description: '',
        pro3Title: '',
        pro3Description: '',

        exp1Title: '',
        exp1Description: '',
        exp2Title: '',
        exp2Description: '',

        eduTitle: '',
        eduDescription: '',

        errorMsg: ''
    });
    const nextStep = () => setStep(step => step + 1);
    const prevStep = () => setStep(step => step - 1);

    switch (step) {
        case 1:
            return (
                <PersonalInfo
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />);

        case 2:
            return (<SocialMedia
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep} />);

        case 3:
            return (<Projects
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep} />)

        case 4:
            return (
                <Experience
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep} />
            )

        case 5:
            return (
                <Education
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep} />
            )

        case 6:
            return (
                <Review
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep} />
            )
        case 7:
            return (
                <Submit />
            )
        default:
            break;
    }
}

export default MultistepForm;
