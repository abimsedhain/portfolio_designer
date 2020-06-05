import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    // exp1Title:yup.string().required('Title is required'),
    // exp1Description:yup.string().required('Description should be less than 240 words').max(240)

    // exp2Title:yup.string().required('Title is required'),
    // exp2Description:yup.string().required('Description should be less than 240 words').max(240)
});


const Experience = ({ formData, setFormData, nextStep, prevStep }) => {
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
                <h1>Experience</h1>

                <label htmlFor='exp1Title'>Experience 1 Title</label>
                <Field type='text' id='exp1Title' name='exp1Title'
                />
                <br /><br />
                <ErrorMessage name='exp1Title' />
                <br />


                <label htmlFor='exp1Description'>Experience 1 Description</label>
                <Field type='text' id='exp1Description' name='exp1Description'
                />
                <br /><br />
                <ErrorMessage name='exp1Description' />
                <br />

                <label htmlFor='exp2Title'>Experience 2 Title</label>
                <Field type='text' id='exp2Title' name='exp2Title'
                />
                <br /><br />
                <ErrorMessage name='exp2Title' />
                <br />

                <label htmlFor='exp2Description'>Experience 2 Description</label>
                <Field type='text' id='exp2Description' name='exp2Description'
                />
                <br /><br />
                <ErrorMessage name='exp2Description' />
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

export default Experience;