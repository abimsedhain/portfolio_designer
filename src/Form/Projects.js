import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    // pro1Title:yup.string().required('Title is required'),
    // pro1Description:yup.string().required('Description should be less than 240 words').max(240)

    // pro2Title:yup.string().required('Title is required'),
    // pro2Description:yup.string().required('Description should be less than 240 words').max(240)
    
    // pro3Title:yup.string().required('Title is required'),
    // pro3Description:yup.string().required('Description should be less than 240 words').max(240)
});


const Projects = ({ formData, setFormData, nextStep, prevStep }) => {
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
                <h1>Social Media</h1>

                <label htmlFor='pro1Title'>Project 1 Title</label>
                <Field type='text' id='pro1Title' name='pro1Title'
                />
                <br /><br />
                <ErrorMessage name='pro1Title' />
                <br />

                <label htmlFor='pro1Description'>Project 1 Description</label>
                <Field type='text' id='pro1Description' name='pro1Description'
                />
                <br /><br />
                <ErrorMessage name='pro1Description' />
                <br />

                <label htmlFor='pro2Title'>Project 2 Title</label>
                <Field type='text' id='pro2Title' name='pro2Title'
                />
                <br /><br />
                <ErrorMessage name='pro2Title' />
                <br />

                <label htmlFor='pro2Description'>Project 2 Description</label>
                <Field type='text' id='pro2Description' name='pro2Description'
                />
                <br /><br />
                <ErrorMessage name='pro2Description' />
                <br />

                <label htmlFor='pro3Title'>Project 3</label>
                <Field type='text' id='pro3Title' name='pro3Title'
                />
                <br /><br />
                <ErrorMessage name='pro3Title' />
                <br />

                <label htmlFor='pro31Description'>Project 3 Description</label>
                <Field type='text' id='pro3Description' name='pro3Description'
                />
                <br /><br />
                <ErrorMessage name='pro3Description' />
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

export default Projects;