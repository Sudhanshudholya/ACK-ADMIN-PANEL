onSubmit={async(values, { setSubmitting }) => {
            setSubmitting(true);
            setLoginError('');

            try {
              
              const res = await axios.post(`${BASE_URL}/admin/adminLogin`, values);              

              if (res?.status === "OK") {
                localStorage.setItem('token', res.data.token);
                toasts.successMsg('Login Successfully');
                navigate('/layout');
              } else {
                setLoginError('Invalid username or password. Please try again.');
              }
            } catch (err) {
              setLoginError('An error occurred during login. Please try again.');
              console.error('Login error:', err);
              toasts.errorMsg('Login failed. Please try again later.');
            } finally {
              setSubmitting(false);
            }
          }}