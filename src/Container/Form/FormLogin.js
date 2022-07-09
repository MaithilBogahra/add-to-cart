import React, { useState,useEffect } from 'react';
import './Form.css';
import * as yup from 'yup';
import {useHistory} from "react-router-dom"
import { Form, Formik, useFormik } from 'formik';



function FormLogin(props) {
    const history = useHistory();
    const [usertype, setUsertype] = useState('Login');
    const [password, setPassword] = useState(false);
    const [data, setData] = useState([]);

    const [localItems, setLocalItems] = useState(localStorage.getItem('local'))
    useEffect(() => {
        if (localItems) {
            history.push("/");
        }
    }, [localItems])


    let LoginSchema, initVal;

    if (usertype == 'Login') {
        LoginSchema = {
            email: yup.string().email("Invalid email address format").required("Email is required"),
            password: yup.string().required("Password is required")
        };
        initVal = {
            email: '',
            password: ''
        }
    } else if (usertype == 'Signup') {
        LoginSchema = {
            username: yup.string().required("name is required"),
            email: yup.string().email("Invalid email address format").required("Email is required"),
            password: yup.string().required("Password is required")
        };
        initVal = {
            username: '',
            email: '',
            password: ''
        }
    } else {
        LoginSchema =
            { email: yup.string().email("Invalid email address format").required("Email is required") }
        initVal = {
            email: ''
        }
    }

    let Schema = yup.object().shape(LoginSchema);


    const formikobj = useFormik({
        initialValues: initVal,
        validationSchema: Schema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            handleInsert(values);
        },
    });

    const { errors, handleChange, handleSubmit, handleBlur, touched } = formikobj;

    const handleInsert = (values) => {
        let id = Math.floor(Math.random() * 1000);

        const data = {
            id: id,
            ...values
        }

        const localData = JSON.parse(localStorage.getItem('local'));
        console.log(localData);
        if (localData === null) {
            localStorage.setItem('local', JSON.stringify([data]));
        } else {
            localData.push(data);
            localStorage.setItem('local', JSON.stringify(localData));
        }
    }


    return (
        <div className="container">
            <div className="card">
                <div className="card_title">
                    {
                        password ?
                            <h1>Forgot Account</h1>
                            :
                            usertype === 'Login' ?
                                <h1>Login Account</h1>
                                :
                                <h1>Signup Account</h1>

                    }
                </div>
                <div className="card_title">

                </div>
                <div className="form">
                    <Formik values={formikobj}>
                        <Form action="/register" method="post" onSubmit={handleSubmit}>
                            {
                                usertype === 'Signup' ?
                                    <>
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="UserName"
                                        />
                                        {
                                            errors.username && touched.username ?
                                                <p>{errors.username}</p>
                                                : ""
                                        }
                                    </>
                                    :
                                    null
                            }

                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                            />
                            {
                                errors.email && touched.email ?
                                    <p>{errors.email}</p>
                                    : ""
                            }

                            {
                                password ?
                                    null
                                    :
                                    <>
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                        />
                                        {
                                            errors.password && touched.password ?
                                                (<p>{errors.password}</p>)
                                                :
                                                ("")
                                        }
                                    </>
                            }

                            {

                                password === false && usertype === 'Login' ?
                                    <>
                                        <a
                                            type="submit"
                                            onClick={() => setUsertype('Signup')}>
                                            Create an account ?
                                        </a><br />
                                        <a
                                            type="submit"
                                            onClick={() => setPassword(true)}>
                                            Forgot Password ?
                                        </a>
                                    </>
                                    :
                                    password === true ?
                                        <a
                                            type="submit"
                                            onClick={() => setPassword(false)}>
                                            Remember your password !
                                        </a> :
                                        <a
                                            type="submit"
                                            onClick={() => setUsertype('Login')}>
                                            Already an account ?
                                        </a>

                            }


                            {
                                password ?
                                    <button>Forgot</button>
                                    :
                                    usertype === "Login" ?
                                        <button type='submit'>Login</button>
                                        :
                                        <button type='submit'>Sign Up</button>
                            }

                        </Form>
                    </Formik>
                </div>
                <div className="card_terms">
                    <input type="checkbox" name id="terms" /> <span>I have read and agree to the <a href>Terms of Service</a></span>
                </div>
            </div>
        </div >


    )
}
export default FormLogin;