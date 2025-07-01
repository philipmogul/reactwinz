import NavBar from "../components/NavBar";

function SignUp() {
  return (
    <div className="signup">
      <NavBar />
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;