import { useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { ToastContainer } from "react-toastify";

export default function Homelogin() {
    const navigate = useNavigate();
    

    // Login function
    const login = () => {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Đăng nhập thành công!',
            background: '#333',
            color: '#fff',
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/");  // Redirect to home page after login
    };

    useEffect(() => {
        const signInButton = document.querySelector("#sign-in-btn");
        const signUpButton = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
        const submitButton = document.getElementById('socialtext');
        const returnButton = document.getElementById('returnt');
        const passwordSection = document.getElementById('ppass');

        const toggleSignUpMode = () => container.classList.add("sign-up-mode");
        const toggleSignInMode = () => container.classList.remove("sign-up-mode");
        const showForgotPassword = () => passwordSection.classList.add("lissi");
        const hideForgotPassword = () => passwordSection.classList.remove("lissi");

        signUpButton.addEventListener("click", toggleSignUpMode);
        signInButton.addEventListener("click", toggleSignInMode);
        submitButton.addEventListener("click", showForgotPassword);
        returnButton.addEventListener("click", hideForgotPassword);

        // Cleanup event listeners on component unmount
        return () => {
            signUpButton.removeEventListener("click", toggleSignUpMode);
            signInButton.removeEventListener("click", toggleSignInMode);
            submitButton.removeEventListener("click", showForgotPassword);
            returnButton.removeEventListener("click", hideForgotPassword);
        };
    }, []);

    return (
        
        <div className="oeoe">
           
            <ToastContainer />
            <div className="container">
                <div  id="ppass" className="p-pass">
                    <h2 className="title">Forgot Password</h2>
                    <div className="input-field">
                        <i className="bx bxs-envelope" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="tk">
                        <input type="submit" value="Submit" className="btn" />
                        <input id="returnt" type="submit" value="Return" className="btn" />
                    </div>
                </div>
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Login</h2>
                        <div className="input-field">
                            <i className="bx bxs-user-circle" />
                            <input type="text" placeholder="Username" id="username" required />
                        </div>
                        <div className="input-field">
                            <i className="bx bxs-key" />
                            <input type="password" placeholder="Password" id="password" required />
                        </div>
                        <p id="socialtext" className="social-text" style={{ marginRight: 180 }}>
                            Forgot password
                        </p>
                        <input type="submit" value="Login" className="btn" onClick={login} />
                        <p className="social-text">Or Login By</p>
                        <div className="social-media">
                            <a href="#" className="social-icon"><i className="bx bxl-facebook-circle" /></a>
                            <a href="#" className="social-icon"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="social-icon"><i className="bx bxl-instagram-alt" /></a>
                            <a href="#" className="social-icon"><i className="bx bxl-google" /></a>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">Register</h2>
                        <div className="input-field">
                            <i className="bx bx-envelope" />
                            <input type="email" placeholder="Email" id="dk_email" required />
                        </div>
                        <div className="input-field">
                            <i className="bx bxs-user-circle" />
                            <input type="text" placeholder="Username" id="dk_user" required />
                        </div>
                        <div className="input-field">
                            <i className="bx bxs-key" />
                            <input type="password" placeholder="Password" id="dk_pass" required />
                        </div>
                        <div className="input-field">
                            <i className="bx bxs-key" />
                            <input type="password" placeholder="Confirm Password" id="ad" required />
                        </div>
                        <input type="submit" value="Sign Up" className="btn" />
                        <p className="social-text">or sign in with social platform</p>
                        <div className="social-media">
                            <a href="#" className="social-icon"><i className="bx bxl-facebook-circle" /></a>
                            <a href="#" className="social-icon"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="social-icon"><i className="bx bxl-instagram-alt" /></a>
                            <a href="#" className="social-icon"><i className="bx bxl-google" /></a>
                        </div>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>WELCOME BACK!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            <button  className="btn" id="sign-in-btn">Sign In</button>
                        </div>
                        <img src="../image/logovs.jpg" alt="" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>WELCOME BACK!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            <button className="btn" id="sign-up-btn">Sign Up</button>
                        </div>
                        <img src="../image/logovs.jpg" alt="" className="image" />
                    </div>
                </div>
            </div>
        </div>
    );
}