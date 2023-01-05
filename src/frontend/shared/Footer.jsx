import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="FooterLinks">
          <div className="container">
            <div className="flex">
              <div className="inline-flex items-center w-2/3">
                <img src="images/cqw.png" alt="CQW" />
                <img src="images/xhtml.png" alt="Xhtml" />
                <img src="images/w3css.png" alt="Xhtml" />
              </div>
              <div className="w-2/3 social-icon">
                <a href="javascript:void(0)">
                  <span className="mdi mdi-facebook"></span>
                </a>
                <a href="javascript:void(0)">
                  <span className="mdi mdi-twitter"></span>
                </a>
                <a href="javascript:void(0)">
                  <span className="mdi mdi-youtube"></span>
                </a>
                <a href="javascript:void(0)">
                  <span className="mdi mdi-share-variant"></span>
                </a>
              </div>
              <div className="w-2/3 justify-end flex">
                <img src="images/translate.jpg" alt="translate" />
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 co-sm-12 col-md-12 col-lg-9 footer-top-wrapper ">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Tenders</a>
                  </li>
                  <li>
                    <a href="#">RTI</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Archives</a>
                  </li>
                  <li>
                    <a href="#">Copyright Policy</a>
                  </li>
                  <li>
                    <a href="#">Hyperlinking Policy</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Statement</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
                <p>
                  Copyright © 2022. All rights reserved © Government of NCT of
                  Delhi
                </p>
              </div>
              <div className="col-12 co-sm-12 col-md-12 col-lg-3 text-right">
                <p>Page last updated on: 24/05/2022</p>
                <p>Visitors:n 1153853</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
