import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loginError, setLoginError] = useState(null); // Updated to handle login error
  const navigate = useNavigate();

  // Validation schema for userName and password
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
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            setLoginError(null); // Reset error state

            try {
              const res = await axios.post(
                "https://qkk4fj7d-4000.inc1.devtunnels.ms/admin/adminLogin",
                values
              );

              console.log(res)

              // Checking if the response status is OK
              if (res.data.status === "OK") {
                // Store token in localStorage
                localStorage.setItem("token", res.data.data.token);

                // Navigate to transactions page
                navigate("/layout");
              } else {
                // Handle login error with response message
                setLoginError(res.data.msg || "Invalid username or password");
              }
            } catch (err) {
              console.error("Login error:", err);
              setLoginError("An error occurred while logging in.");
            } finally {
              setSubmitting(false);
            }
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

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
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
                className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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