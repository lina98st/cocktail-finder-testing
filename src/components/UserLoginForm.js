import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import catAvatar from '../assets/cat-avatar.png';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';
import { postLoginData } from '../api/auth';

const UserLoginForm = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const handleLogin = async (values) => {
            const token = await postLoginData(values.username, values.password);
    localStorage.setItem('token', token);
        const user = {
            id: Date.now(),
            avatar: catAvatar,
            username: values.username,
        };
        setCurrentUser(user);
        setLoginModalOpen(false);
    };

    return (
        <>
            {currentUser ? (
                <img src={currentUser.avatar} alt="user" className="user-avatar rounded-circle" />
            ) : (
                <button className="btn btn-cocktail" onClick={() => setLoginModalOpen(true)}>
                    Login
                </button>
            )}

            {loginModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <div className="modal-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Login</h5>
                            <button className="btn-close btn-close-white" onClick={() => setLoginModalOpen(false)} />
                        </div>
                        <div className="modal-body">
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
                                    <button className="btn btn-cocktail w-100" type="submit">Sign In</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserLoginForm;