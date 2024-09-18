import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toasts from "../Toast/Toast";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../Redux/UserApiSlice";

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [login] = useLoginMutation()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().trim().required("Username is required"),
    password: Yup.string().trim().required("Password is required"),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Admin Login</h1>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            login(values)
              .then((res) => {
                if (res.data.status === "OK") {
                  localStorage.setItem("token", res.data.data.token);
                  toasts.successMsg("Login Successfully");
                  navigate("/layout");
                } else {
                  toasts.errorMsg(err)
                }
              }).catch((err) => {
                console.log(err)
                toasts.errorMsg("Invalid Credentials");
              }).finally(() => {
                setSubmitting(false);
                setLoginError(null);
              })


          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  id="userName"
                  name="userName"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your username"
                  autoComplete="username"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Conditionally toggle password visibility
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <span
                  className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {loginError && (
                <div className="text-red-500 text-sm text-center">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Admin Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
