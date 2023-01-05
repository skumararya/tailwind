import React from "react";

export const HomeSlider = () => {
  return (
    <>
      <div className="videoSection">
        <div className="container-fluid">
          <div className="row">
            <div
              id="demo"
              className="carousel slide banner pointer-event  w-100"
              data-ride="carousel"
            >
              <ol className="carousel-indicators newindicate">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/banner1.jpg"
                    className="img-fluid"
                    alt="Home slider"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    src="images/banner2.png"
                    className="img-fluid"
                    alt="Home slider"
                  />
                </div>
              </div>
              <div className="slider-bar">
                <div className="slider-bar-bx">
                  <div className="slider-bar-content">
                    <div className="slider-bar-icon">
                      <img
                        src="images/painter.png"
                        className="img-fluid"
                        alt="painter"
                      />
                    </div>
                    <div className="slider-bar-text">
                      <h6>Are you an artist, want to register ?</h6>
                      <p>Artist Corner</p>
                    </div>
                  </div>
                  <a href="#" className="btn register">
                    Click to Register{" "}
                    <span className="mdi mdi-arrow-right"></span>
                  </a>
                </div>
                <div className="slider-bar-bx mt-2">
                  <div className="slider-bar-content">
                    <div className="slider-bar-icon">
                      <img
                        src="images/artist-search.png"
                        className="img-fluid"
                        alt="painter"
                      />
                    </div>
                    <div className="slider-bar-text">
                      <h6>Are you looking for an artist ?</h6>
                      <p>Check Artist Repository</p>
                    </div>
                  </div>
                  <a href="#" className="btn artispedia">
                    Check Artistpedia{" "}
                    <span className="mdi mdi-arrow-right"></span>
                  </a>
                </div>
                <div className="slider-bar-bx mt-2">
                  <div className="slider-bar-content">
                    <div className="slider-bar-icon">
                      <img
                        src="images/phone.png"
                        className="img-fluid"
                        alt="painter"
                      />
                    </div>
                    <div className="slider-bar-text">
                      <h6>Do you want to register for upcoming event?</h6>
                      <p>Give us a missed call on:</p>
                      <h5>9560****13</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
