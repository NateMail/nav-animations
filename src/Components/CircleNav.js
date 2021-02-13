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
  const [open, setOpen] = useState("_start");

  return (
    <div className="circle_nav">
      {open === "_open" ? (
        <div className="circle_nav__navbar">
          <div onClick={() => setOpen("_closed")}>
            <IoIosCloseCircleOutline className={"circle_nav__closer" + open} />

            <div className="circle_nav__scale">
              <Link to="/" className="circle_nav__links">
                <IoIosHome
                  className={"circle_nav__icon circle_nav__home" + open}
                />
              </Link>
            </div>

            <div className="circle_nav__scale">
              <Link to="/vid" className="circle_nav__links">
                <IoIosTv
                  className={"circle_nav__icon circle_nav__vid" + open}
                />
              </Link>
            </div>

            <div className="circle_nav__scale">
              <Link to="/cal" className="circle_nav__links">
                <IoIosCalendar
                  className={"circle_nav__icon circle_nav__cal" + open}
                />
              </Link>
            </div>

            <div className="circle_nav__scale">
              <Link to="/register" className="circle_nav__links">
                <IoMdPerson
                  className={"circle_nav__icon circle_nav__reg" + open}
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div onClick={() => setOpen("_open")}>
            <IoIosMenu className={"circle_nav__opener" + open} />
          </div>
          <div className="circle_nav__scale">
            <Link to="/" className="circle_nav__links">
              <IoIosHome
                className={"circle_nav__icon circle_nav__home" + open}
              />
            </Link>
          </div>
          <div className="circle_nav__scale">
            <Link to="/vid" className="circle_nav__links">
              <IoIosTv className={"circle_nav__icon circle_nav__vid" + open} />
            </Link>
          </div>
          <div className="circle_nav__scale">
            <Link to="/cal" className="circle_nav__links">
              <IoIosCalendar
                className={"circle_nav__icon circle_nav__cal" + open}
              />
            </Link>
          </div>

          <div className="circle_nav__scale">
            <Link to="/register" className="circle_nav__links">
              <IoMdPerson
                className={"circle_nav__icon circle_nav__reg" + open}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CircleNav;
