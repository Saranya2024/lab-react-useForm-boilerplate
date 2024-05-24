import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 10000); 
    };

    return (
        <div>{isSubmitted && <div className="message">Registration successful!</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input type="text" name="firstName" placeholder="First Name" {...register("firstName", { required: 'Please enter your First Name' })} />
            {errors.firstName && <div className="error">{errors.firstName.message}</div>}
            <input type="text" name="lastName" placeholder="Last Name" {...register("lastName", { required: 'Please enter your Last Name' })} />
            {errors.lastName && <div className="error">{errors.lastName.message}</div>}
            <input type="text" name="email" placeholder="Email" {...register("email", { required: 'Please enter your Email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} />
            {errors.email && <div className="error">{errors.email.message}</div>}
            <input type="password" name="password" placeholder="Password" {...register("password", { required: 'Please enter your Password', minLength: { value: 5, message: 'Password must be more than 4 characters' }, maxLength: { value: 20, message: 'Password cannot be more than 20 characters' } })} />
            {errors.password && <div className="error">{errors.password.message}</div>}
          </div>
          <button type="submit">Register</button></form></div>
    );
}

export default RegistrationForm;
