import React from "react";
import slider1 from "../assets/images/supermarket-worker-measuring-selling-meat-customer.png";
import slider2 from "../assets/images/side-view-male-chef-flambeing-dish.png";
import slider3 from "../assets/images/couple-enjoying-food-restaurant.png";
import TextField from "@mui/material/TextField";
import login from "../assets/images/logooo 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Login() {
  return (
    <div className="login-main">
      <section className="p-3 p-md-4 p-xl-5 h-100">
        <div className="container h-100">
          <div className="card border-light-subtle shadow-sm h-100">
            <div className="login-content row g-0 h-100">
              <div className="left-login h-100">
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide h-100"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                      <img
                        src={slider1}
                        className="d-block w-100 h-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item h-100">
                      <img
                        src={slider2}
                        className="d-block w-100 h-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item h-100">
                      <img
                        src={slider3}
                        className="d-block w-100 h-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="right-login">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="login-head mb-5">
                        <img src={login} alt="Login Logo" />
                      </div>
                      <div className="login-subhead mb-5">
                        <h3>Welcome</h3>
                        <h4>Please login to your account</h4>
                      </div>
                    </div>
                  </div>
                  <form action="#">
                    <div className="row gy-1 gy-md-2 overflow-hidden">
                      <div className="data-login">
                        <label className="login-label">Username or Email</label>
                        <TextField
                          required
                          id="username"
                          variant="standard"
                          fullWidth
                        />
                      </div>
                      <div className="data-login">
                        <label className="login-label">Password</label>
                        <TextField
                          required
                          id="password"
                          variant="standard"
                          fullWidth
                        />
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <div className="login-button">
                        <div className="login-forgot">Forget Password</div>
                        <div className="login-submit">
                          <button>Submit</button>
                        </div>
                      </div>
                      <div className="login-footer">
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <h3> Terms and Conditions & Privacy Policy</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
