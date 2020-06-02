import React from 'react';

import ItemForm from './ItemForm';

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <img
        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/52013919/original/6d1a3ad91335506330189dafa780af958fd03f50/draw-you-a-cute-drawing-in-my-style.jpg"
        alt="img"
        className="imageCover"
      />
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Names;