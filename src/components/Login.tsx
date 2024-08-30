import { useContext } from 'react'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { UserContext } from '../UserContext'
import type { User, UserContextProps } from '../types.dt'

const Login = (): JSX.Element => {
  const userContext: UserContextProps | undefined = useContext(UserContext)
  const navigate: NavigateFunction = useNavigate()

  const SignUpSchema: Yup.Schema = Yup.object().shape({
    username: Yup.string().required('Field is required'),
    email: Yup.string()
      .email('Not correct format')
      .required('Field is required'),
    password: Yup.string()
      .required('Field is required')
      .min(6, 'Minimum 6 symbol'),
  })

  const handleSubmit = (values: User): void => {
    userContext ? userContext.login(values) : console.log('No user context')
    navigate('/user', { replace: true })
  }

  return (
    <div className="login">
      <h1 className="login__header">Login</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form method="POST" className="login__form">
            <label>
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                autoComplete="input"
                className={errors.username || touched.username ? 'error' : ''}
              />
              <div className="error">
                {errors.username || touched.username ? errors.username : ''}
              </div>
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="input"
                className={errors.email || touched.email ? 'error' : ''}
              />
              <div className="error">
                {errors.email || touched.email ? errors.email : ''}
              </div>
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="input"
                className={errors.password || touched.password ? 'error' : ''}
              />
              <div className="error">
                {errors.password || touched.password ? errors.password : ''}
              </div>
            </label>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
