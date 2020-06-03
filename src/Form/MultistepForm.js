import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Review from './Review';
import SocialMedia from './SocialMedia';
import Experience from './Experience';
import Education from './Education';
import Submit from './Submit';

export class MultistepForm extends Component {
  state = {
    step: 1,
    fullName: "",
    email: "",
    bio: "",

    github: "",
    linkedin: "",

    skills: "",

    pro1Title: "",
    pro1Description: "",
    pro2Title: "",
    pro2Description: "",
    pro3Title: "",
    pro3Description: "",

    exp1Title: "",
    exp1Description: "",
    exp2Title: "",
    exp2Description: "",

    eduTitle: "",
    eduDescription: "",

    errorMsg: ""

  }

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }
  render() {
    const { step } = this.state;
    const { fullName, email, bio,
      github, linkedin,
      skills,
      pro1Title, pro1Description,
      pro2Title, pro2Description,
      pro3Title, pro3Description,
      exp1Title, exp1Description,
      exp2Title, exp2Description,
      eduTitle, eduDescription, errorMsg } = this.state;

    const values = {
      fullName, email, bio,
      github, linkedin,
      skills,
      pro1Title, pro1Description,
      pro2Title, pro2Description,
      pro3Title, pro3Description,
      exp1Title, exp1Description,
      exp2Title, exp2Description,
      eduTitle, eduDescription, errorMsg
    }

    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <SocialMedia
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} />

        )

      case 3:
        return (<Projects
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values} />)

      case 4:
        return (
          <Experience
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} />
        )

      case 5:
        return (
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} />
        )

      case 6:
        return (
          <Review
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values} />
        )
      case 7:
        return (
          <Submit />
        )
    }

    return (
      <div>

      </div>
    )
  }
}

export default MultistepForm



