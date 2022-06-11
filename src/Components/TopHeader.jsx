import React, { useState } from "react";
import logo from "../assets/dodologo.jpg";

const TopHeader = () => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseOver = () => {
    setIsHovering(true);
  };
  const onMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div className="top-header-wrapper">
        <div className="minor-wrapper">
          <div className="top-header-text">
            <div className="d-flex gap-5">
              <div className="logo d-flex">
                <img src={logo} alt="dodo-pizza" className="fapizza" />
                <div className="logo-text pt-0">
                  <h2>dodo pizza</h2>
                  <h6 style={{ fontSize: "13px" }}>
                    yest to, chto nas obedinayet
                  </h6>
                </div>
              </div>

              <div className="top-header-text-wrapper d-block">
                <div className="d-flex">
                  <h5>Доставка пиццы </h5>
                  <h5>
                    <span className="text-warning px-1">Ташкент</span>
                  </h5>
                </div>
                <div
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className="d-flex start"
                >
                  <h6>46 мин</h6>
                  <h6 className="dot px-2">.</h6>
                  <h6>4.22</h6>
                  <i className="fa-solid fa-star text-warning"></i>

                  {isHovering && (
                    <div className="maindiv d-block mt-5">
                      <div className="maindiv2 container-fluid py-2 px-1">
                        <div className="d-flex">
                          <div className="pe-5">
                            <h5 className="text-light">46 минут</h5>
                            <p
                              style={{ marginTop: "-7px" }}
                              className="text-light "
                            >
                              среднее время доставки
                            </p>
                            <p style={{ width: "10.5rem", marginTop: "-10px" }}>
                              если не успеем за 60 минут и получим сертификат на
                              большую пицу
                            </p>
                          </div>
                          <div>
                            <h5 className="text-warning">
                              4.22{" "}
                              <span>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-secondary"></i>
                              </span>
                            </h5>
                            <p
                              style={{ marginTop: "-7px" }}
                              className="text-light"
                            >
                              279 оценок
                            </p>
                            <p style={{ marginTop: "-10px" }}>
                              оценить заказ мойно в мобильном приложении
                            </p>
                          </div>
                        </div>
                        <p style={{ marginTop: "-12px" }}>
                          данные за последние 7 дней в вашем городе
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="top-header-phone-number d-block">
                <h6>998712077729</h6>
                <h6 className="text-secondary">Звонок бесплатный</h6>
              </div>
            </div>
            <div className="top-header-text-wrapper2 d-flex justify-content-evenly">
              <div className="svg">
                <svg>
                  <path
                    className="coin p-0"
                    d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z"
                    fill="#000"
                  />
                </svg>
                <h6>Додокоины</h6>
              </div>
              <div>
                <button className=" voyti">войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
