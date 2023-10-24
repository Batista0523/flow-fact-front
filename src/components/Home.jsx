import React from "react";
import { Link } from "react-router-dom";
import CreatePage from "./CreatePage";
const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("https://www.blog.attachedocs.com/wp-content/uploads/2021/07/Fast-Tracking-Processes-with-Transaction-Monitoring-System-1024x536.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const contentStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-6 offset-md-3 text-center"
            style={contentStyle}
          >
            <h1>Welcome to Flow Fact</h1>
            <p>
              Effortlessly monitor your daily transactions to maintain a
              meticulous financial record.
            </p>

            <p>Explore and manage your resources with ease.</p>
            <Link to="/index" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
