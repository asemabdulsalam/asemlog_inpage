import React, { useState } from "react";
import "./CreateAccount.css";
import s from "../images/signup.jpg"; // Image path, make sure this path is correct

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        termsChecked: false,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));

        if (errorMessage) setErrorMessage(''); // Clear error message on input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Account created successfully!');
        } else {
            setErrorMessage('Please fill in all fields correctly');
        }
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, termsChecked } = formData;
        return (
            firstName.trim().length > 0 &&
            lastName.trim().length > 0 &&
            validateEmail(email) &&
            phone.trim().length > 0 &&
            termsChecked
        );
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <div className="image">
                <img src={s} alt="Signup" />
            </div>

        <div className="create-account-container">
            <h2>Create Account</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />

                <div className="options">
                    <label>
                        <input
                            type="checkbox"
                            id="termsChecked"
                            checked={formData.termsChecked}
                            onChange={handleChange}
                        />{' '}
                        I agree to the <a href="#">Terms & Conditions</a>
                    </label>
                </div>

                <button type="submit">Create Account</button>
            </form>

            {errorMessage && <p id="error-message">{errorMessage}</p>}
        </div>
        </div>
    );
};

export default CreateAccount;
