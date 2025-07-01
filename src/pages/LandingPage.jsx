import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <h1>Welcome to the Landing Page</h1>
      <p>This is the landing page of our application.</p>
      {/* Additional content can be added here */}
    </div>
  );
}

export default LandingPage;