import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    // fullName: yup.string().required('Name is required').max(20),
    // email: yup.string().email('INVALID EMAIL').required('Email is Reqired')
    // bio: yup.string().required('Description should be less than 240 words').max(240)
});

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
    return (

        <Formik
            initialValues={formData}
            onSubmit={values => {
                setFormData(values);
                nextStep();
                console.log(values);
            }}
            validationSchema={validationSchema}>

            <Form>
                <h1>Personal Information</h1>

                <label htmlFor='name'>Full Name</label> <br/>
                 <Field type='text' id='fullName' name='fullName'/>
                <br /><br />
                <ErrorMessage name='fullName' />
                <br />

                <label htmlFor='email'>EMAIL</label><br/>
                <Field type='email' id='email' name='email'
                />
                <br /><br />
                <ErrorMessage name='email' />
                <br />

                <label htmlFor='bio'>Bio</label><br/>
                <Field as='textarea' rows='5' id='bio' name='bio'
                />
                <br /><br />
                <ErrorMessage name='email' />
                <br />

                <button type='submit'> NEXT </button>
            </Form>
        </Formik>


    )

}

export default PersonalInfo;