import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.jpg"
import bg1 from "../assets/bg1.jpg";
const AuthLayout = ({ children }) => {
  return (
    <div style={{ height: '100vh', backgroundImage: `url(${bg1})`, backgroundSize: "cover", backgroundPosition: "center"  }}>
      <div>
        <div className="auth-header">
          <h2 className="text-white text-bold text-center font-serif text-5xl pt-5">Movie Booking App</h2>
          <p className="text-white text-bold text-center font-serif text-4xl py-5">Welcome! Please Login and Register Here!</p>
        </div>
        <div className="auth-content">
          {children}
        </div>
        <div className="auth-footer">
          {/* Footer content */}
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
  