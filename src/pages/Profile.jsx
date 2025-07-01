import NavBar from "../components/NavBar";

function Profile() {
  return (
    <div className="profile-page">
      <NavBar />
      <h1>Profile Page</h1>
      <p>This is the profile page where user information can be displayed.</p>
      {/* Additional profile-related content can be added here */}
    </div>
  );
}          
export default Profile;