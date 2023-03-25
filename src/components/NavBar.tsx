import React, { useState } from "react";
import classes from "./NavBar.module.css";
import LOGO from "../assets/logoAndName.svg";
import {
  auditLogs,
  dashboard,
  decision,
  fees,
  guarantors,
  karma,
  loanRequests,
  loans,
  logout,
  organization,
  preferences,
  reports,
  savings,
  savingsProducts,
  serviceAccount,
  services,
  settingsFees,
  settlements,
  transactions,
  users,
  whiteList,
} from "../assets/icons/NavBar";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div
      className={`${classes.container} ${showNavBar && classes.show__navbar}`}
    >
      <div
        className={`${classes.nav__bar__toggler} ${
          showNavBar && classes.toggler__active
        }`}
        onClick={() => setShowNavBar(!showNavBar)}
      >
        <div className={classes.high__bar}></div>
        <div className={classes.mid__bar}></div>
        <div className={classes.low__bar}></div>
      </div>
      <section className={classes.logo__container}>
        <img src={LOGO} alt="Logo" />
      </section>
      <nav className={classes.nav}>
        <div className={classes.select__container}>
          <img src={organization} alt="Icon" />
          <select name="Switch Organization" title="Select Organization">
            <option value="Switch organization">Switch Organization</option>
          </select>
        </div>

        <div className={classes.dashboard}>
          <img src={dashboard} alt="Icon" />
          <span className={classes.text}>Dashboard</span>
        </div>
        <p className={classes.section__header}>CUSTOMERS</p>
        <ul className={classes.link__list}>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/users"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={users} alt="Icon" />
              <span className={classes.text}>Users</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={guarantors} alt="Icon" />
              <span className={classes.text}>Guarantors</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={loans} alt="Icon" />

              <span className={classes.text}>Loans</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={decision} alt="Icon" />

              <span className={classes.text}>Decision Models</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={savings} alt="Icon" />

              <span className={classes.text}>Savings</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={loanRequests} alt="Icon" />

              <span className={classes.text}>Loan Requests</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={whiteList} alt="Icon" />

              <span className={classes.text}>Whitelist</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={karma} alt="Icon" />

              <span className={classes.text}>Karma</span>
            </NavLink>
          </li>
        </ul>
        <p className={classes.section__header}>BUSINESSES</p>
        <ul className={classes.link__list}>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={organization} alt="Icon" />
              <span className={classes.text}>Organisation</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={loanRequests} alt="Icon" />
              <span className={classes.text}>Loan Products</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={savingsProducts} alt="Icon" />
              <span className={classes.text}>Savings Products</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={fees} alt="Icon" />
              <span className={classes.text}>Fees and charges</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={transactions} alt="Icon" />
              <span className={classes.text}>Transactions</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={services} alt="Icon" />
              <span className={classes.text}>Services</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={serviceAccount} alt="Icon" />
              <span className={classes.text}>Service Account</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={settlements} alt="Icon" />
              <span className={classes.text}>Settlements</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={reports} alt="Icon" />
              <span className={classes.text}>Reports</span>
            </NavLink>
          </li>
        </ul>
        <p className={classes.section__header}>SETTINGS</p>
        <ul className={classes.link__list}>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={preferences} alt="Icon" />
              <span className={classes.text}>Preferences</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={settingsFees} alt="Icon" />
              <span className={classes.text}>Fees ans Pricing</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list__item} `}
            onClick={() => setShowNavBar(false)}
          >
            <NavLink
              to="/dashboard/"
              className={(navData) =>
                navData.isActive ? classes.active__list__item : ""
              }
            >
              <img src={auditLogs} alt="Icon" />
              <span className={classes.text}>Audit Logs</span>
            </NavLink>
          </li>
        </ul>
        <section className={classes.logout__container}>
          <button
            type="button"
            className={classes.logout}
            onClick={() => navigate("/")}
          >
            <img src={logout} alt="Logout" />
            <span>Logout</span>
          </button>
          <span className={classes.version}>v1.2.0</span>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
