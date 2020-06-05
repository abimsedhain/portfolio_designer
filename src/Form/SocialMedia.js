import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    // github:yup.string().required('Github Link is required'),
    // linkedin:yup.string().required('Linkedin Link is required'),
    // skills:yup.string().required('PLEASE TRY SOME COMMENTS').max(50)
});


const SocialMedia = ({ formData, setFormData, nextStep, prevStep }) => {
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
                <label htmlFor='github'>Github Link</label><br/>
                <Field type='text' id='github' name='github'
                />
                <br /><br />
                <ErrorMessage name='github' />
                <br />  <br />

                <label htmlFor='linkedin'>Linkedin Link</label><br/>
                <Field type='text' id='linkedin' name='linkedin'
                />
                <br /><br />
                <ErrorMessage name='linkedin' />
                <br /><br />

                <h1>Skills</h1>
                <label htmlFor='skills'>Skills</label><br/>
                <Field type='text' id='skills' name='skills'
                />
                <br /><br />
                <ErrorMessage name='skills' />
                <br />

                <div>
                    <button type='submit'> NEXT</button>
                </div>
                <div style={{ marginTop: '-25px', marginLeft: '150px' }}>
                    <button onClick={prevStep}> BACK</button>
                </div>

            </Form>
        </Formik>
    )

}

export default SocialMedia;