import React from 'react'
import './css/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Your name"

        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          
        />

        <button type="submit" className="continue-btn">
          Continue
        </button>

        <p className="login-text">
          Already have an account?
         <span>
            Login here
         </span>
        
        </p>

        <div className="terms">
          <input
            type="checkbox"
            name="agreed"
           
          />
          <span>
            By continuing, I agree to the terms of use & privacy policy.
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup