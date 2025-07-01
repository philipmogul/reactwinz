import NavBar from "../components/NavBar";

const NoPage = () => {
  return (
    <div>
      <NavBar />
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default NoPage;
// This component displays a 404 error message when the user navigates to a non-existent page.
// It includes a navigation bar at the top for consistent navigation across the application.