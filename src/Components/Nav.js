import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline, IoIosMenu } from "react-icons/io";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navigation">
      {showNav ? (
        <div className="navigation__navbar">
          <ul className="navigation__navlist">
            <li className="navigation__item">
              <IoMdCloseCircleOutline
                className="navigation__closer"
                onClick={() => setShowNav(false)}
              />
            </li>
            <li className="navigation__item">
              <Link
                className="navigation__links"
                to="/"
                onClick={() => setShowNav(false)}
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className="navigation__links"
                to="/vid"
                onClick={() => setShowNav(false)}
              >
                Vid
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className="navigation__links"
                to="/cal"
                onClick={() => setShowNav(false)}
              >
                Cal
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div onClick={() => setShowNav(true)}>
          <IoIosMenu className="navigation__opener" />
        </div>
      )}
    </div>
  );
};

export default Nav;
