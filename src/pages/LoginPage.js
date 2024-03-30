import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/LoginPage.css';
import img from "../images/img1.jpg";
const Login = () => {
  const [numberPlate, setNumberPlate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submit logic here, like sending data to an API
    console.log(numberPlate);
  };

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-7">
          <div className="card login-card">
            <div className="row g-0">
              <div className="col-md-6">
                <img src={img} alt="Vehicle" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <h1 className="card-title text-center mb-4">Vehicle Tracking System</h1>
                  <p className="text-center mb-5">Welcome Back! Please enter your vehicle's number plate to track your towed vehicle</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Vehicle Number Plate"
                        value={numberPlate}
                        onChange={e => setNumberPlate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary btn-block">Let's Track Your Vehicle</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;