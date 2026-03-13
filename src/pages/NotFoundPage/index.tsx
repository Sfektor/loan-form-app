import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold">404</h1>

      <p className="fs-4 mb-4">Page not found</p>

      <Link to="/" className="btn btn-primary btn-lg">
        Go to Home
      </Link>
    </div>
  );
};