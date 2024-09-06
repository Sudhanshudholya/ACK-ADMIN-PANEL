import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toasts from '../Toast/Toast';
import { useNavigate } from 'react-router-dom';

const loginFormValidationSchema = yup.object().shape({
    username: yup.string().min(5, 'Username should be at least 5 characters').required('Username is required'),
    password: yup.string().min(8, 'Password should be at least 8 characters').required('Password is required'),
});

const USERNAME = "sudhanshu";
const PASSWORD = "1234567890";

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState(false);

    const togglePassword = () => {
        setPassword(!password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={loginFormValidationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        if (values.username === USERNAME && values.password === PASSWORD) {
                            toasts.successMsg("Login successfully");
                            setTimeout(() => {
                                navigate('/');
                            }, 2000);
                        } else {
                            toasts.errorMsg("Invalid username or password");
                            navigate('/login');
                        }
                        setSubmitting(false);
                    }}
                >
                    {({ values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label>Username:</label><br />
                                <input
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    placeholder="Username"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded-md ${errors.username && touched.username ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.username && touched.username && <span className="text-sm text-red-500">{errors.username}</span>}
                            </div>

                            <div className="relative">
                                <label>Password:</label>
                                <input
                                    type={password ? "text" : "password"}
                                    name="password"
                                    value={values.password}
                                    placeholder="Password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded-md pr-10 ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.password && touched.password && <span className="text-sm text-red-500">{errors.password}</span>}



                                <span
                                    className="absolute right-2 bottom-1 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                    onClick={togglePassword}
                                >
                                    {password ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </span>

                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                            >
                                Login
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;







