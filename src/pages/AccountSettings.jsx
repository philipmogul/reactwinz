import NavBar from "../components/NavBar";

function AccountSettings() {
  return (
    <div className="account-settings-page">
      <NavBar />
      <h1>Account Settings</h1>
      <p>This is the account settings page.</p>
      {/* Additional content can be added here, such as forms for updating user information */}
    </div>
  );
}

export default AccountSettings;
