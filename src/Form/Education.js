import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    // eduTitle:yup.string().required('Title is required'),
    // eduDescription:yup.string().required('Description should be less than 240 words').max(240)
});


const Education = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <Formik
            initialValues={formData}
            onSubmit={values => {
                setFormData(values);
                nextStep();
                console.log(values);
            }}
            validationSchema={validationSchema}
        >

            <Form>
                <h1>Education</h1>

                <label htmlFor='eduTitle'>Education Institution</label>
                <Field type='text' id='eduTitle' name='eduTitle'
                />
                <br /><br />
                <ErrorMessage name='eduTitle' />
                <br />

                <label htmlFor='eduDescription'>Education Description</label>
                <Field type='text' id='eduDescription' name='eduDescription'
                />
                <br /><br />
                <ErrorMessage name='eduDescription' />
                <br />
                <div>
                    <button type='submit'> NEXT</button>
                </div>
                <div style={{ marginTop: '-30px', marginLeft: '150px' }}>
                    <button onClick={prevStep}> BACK</button>
                </div>
            </Form>
        </Formik>

    )
}

export default Education;