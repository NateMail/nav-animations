import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoIosMenu,
  IoIosHome,
  IoIosTv,
  IoIosCalendar,
  IoMdPerson,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const CircleNav = () => {
  const [open, setOpen] = useState("false");

  return (
    <div className="circle_nav">
      {open ? (
        <div className="circle_nav__navbar">
          <div onClick={() => setOpen(false)}>
            <IoIosCloseCircleOutline className="circle_nav__closer" />

            <div className="circle_nav__scale">
              <Link to="/" className="circle_nav__links">
                <IoIosHome className="circle_nav__icon circle_nav__home" />
              </Link>
            </div>

            <div className="circle_nav__scale">
              <Link to="/vid" className="circle_nav__links">
                <IoIosTv className="circle_nav__icon circle_nav__vid" />
              </Link>
            </div>

            <div className="circle_nav__scale">
              <Link to="/cal" className="circle_nav__links">
                <IoIosCalendar className="circle_nav__icon circle_nav__cal" />
              </Link>
            </div>

            <div className="circle_nav__scale">
              <Link to="/register" className="circle_nav__links">
                <IoMdPerson className="circle_nav__icon circle_nav__reg" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={() => setOpen(true)}>
          <IoIosMenu className="circle_nav__opener" />
        </div>
      )}
    </div>
  );
};

export default CircleNav;
