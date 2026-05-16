import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import catAvatar from '../assets/cat-avatar.png';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';
import { postLoginData, postSignupData } from '../api/auth';
import { Link } from 'react-router-dom';

const UserLoginForm = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (values) => {
          setIsLoading(true);
        const token = await postLoginData(values.username, values.password);
        localStorage.setItem('token', token);
        const user = {
            id: Date.now(),
            avatar: catAvatar,
            username: values.username,
        };
        setCurrentUser(user);
        setLoginModalOpen(false);
         setIsLoading(false);
    };

    const handleSignup = async (values) => {
        await postSignupData(values.firstName, values.lastName, values.username, values.password);
        setIsSignup(false);
    };

    //LOGOUT
const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
};

    return (
        <>
            {currentUser ? (
                <div className="d-flex align-items-center gap-3">
                <img src={currentUser.avatar} alt="user" className="user-avatar rounded-circle" />
                <Link to="/favorites" className="btn btn-cocktail">My Favorites</Link>
               <button className="btn btn-cocktail" onClick={() => handleLogout()}>
                   Logout
                </button>
                </div>
            ) : (
                <button className="btn btn-cocktail" onClick={() => setLoginModalOpen(true)}>
                   
                    Login
                </button>
            )}

            {loginModalOpen && createPortal(
                <div className="modal-overlay">
                    <div className="modal-box">
                        <div className="modal-box-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">{isSignup ? 'Sign Up' : 'Login'}</h5>
                            <button className="btn-close btn-close-white" onClick={() => setLoginModalOpen(false)} />
                        </div>
                        <div className="modal-box-body">
                            {isSignup ? (
                                <Formik
                                    initialValues={{ firstName: '', lastName: '', username: '', password: '' }}
                                    validate={validateUserLoginForm}
                                    onSubmit={handleSignup}
                                >
                                    <Form>
                                        <div className="mb-2">
                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                            <Field id="firstName" name="firstName" placeholder="First Name" className="form-control" type="text" />
                                            <ErrorMessage name="firstName">
                                                {(msg) => <p className="text-danger small mt-1">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <Field id="lastName" name="lastName" placeholder="Last Name" className="form-control" type="text" />
                                            <ErrorMessage name="lastName">
                                                {(msg) => <p className="text-danger small mt-1">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <Field id="username" name="username" placeholder="Username" className="form-control" />
                                            <ErrorMessage name="username">
                                                {(msg) => <p className="text-danger small mt-1">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <Field id="password" name="password" placeholder="Password" className="form-control" type="password" />
                                            <ErrorMessage name="password">
                                                {(msg) => <p className="text-danger small mt-1">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                        <button className="btn btn-cocktail w-100" type="submit">Sign Up</button>
                                        <button className="btn btn-cocktail w-100 mt-2" type="button" onClick={() => setIsSignup(false)}>Already have an account? Login</button>
                                    </Form>
                                </Formik>
                            ) : (
                                <Formik
                                    initialValues={{ username: '', password: '' }}
                                    validate={validateUserLoginForm}
                                    onSubmit={handleLogin}
                                >
                                    <Form>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <Field id="username" name="username" placeholder="Username" className="form-control" />
                                            <ErrorMessage name="username">
                                                {(msg) => <p className="text-danger small mt-1">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <Field id="password" name="password" placeholder="Password" className="form-control" type="password" />
                                            <ErrorMessage name="password">
                                                {(msg) => <p className="text-danger small mt-1">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                        <button className="btn btn-cocktail w-100" type="submit" disabled={isLoading}>
                                            {isLoading ? 'Signing in...' : 'Sign In'}
                                        </button>
                                        <button className="btn btn-cocktail w-100 mt-2" type="button" onClick={() => setIsSignup(true)}>No account yet? Sign up</button>
                                    </Form>
                                </Formik>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default UserLoginForm;