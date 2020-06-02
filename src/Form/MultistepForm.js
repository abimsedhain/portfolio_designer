import React from 'react';
import {useForm, useStep} from 'react-hooks-helper';

import Names from "./Names";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit";

const steps = [
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" }
  ];
  
  const defaultData = {
    firstName: "Jane",
    lastName: "Doe",
    nickName: "Jan",
    address: "200 South Main St",
    city: "Anytown",
    state: "CA",
    zip: "90505",
    email: "email@domain.com",
    phone: "+61 4252 454 332"
  };

const MultistepForm = ({ images }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
  
    const props = { formData, setForm, navigation };
  
    switch (id) {
      case "names":
        return <Names {...props} />;
      case "address":
        return <Address {...props} />;
      case "contact":
        return <Contact {...props} />;
      case "review":
        return <Review {...props} />;
      case "submit":
        return <Submit {...props} />;
      default:
        return null;
    }
  };

export default MultistepForm
