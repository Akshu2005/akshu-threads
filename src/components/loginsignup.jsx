import  { useState } from "react";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form>
        {isSignup && <input type="text" placeholder="Full Name" required />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Login" : "New here? Sign up"}
      </p>
    </div>
  );
};

export default LoginSignup;
