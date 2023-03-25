import React from "react";
import classes from "./DashboardTopBar.module.css";
import USER from "../assets/userImage.svg";
import SEARCH from "../assets/icons/search.svg";
import BELL from "../assets/icons/bell.svg";
import ARROWDOWN from "../assets/icons/arrowDown.svg";
import FullGreenButton from "./FullGreenButton";

const DashboardTopBar = () => {
  return (
    <div className={classes.container}>
      <section className={classes.search__container}>
        <div>
          <input
            type="text"
            className={classes.input}
            placeholder="Search for Anything"
          />
          <FullGreenButton buttonFunction={() => {}}>
            <img src={SEARCH} alt="Search Icon" />
          </FullGreenButton>
        </div>
      </section>
      <section className={classes.others}>
        <a href="#">Docs</a>
        <span>
          <img src={BELL} alt="Bell Icon" />
        </span>
        <div className={classes.user__container}>
          <img src={USER} alt="User Profile" />
          <span>
            Adedeji <img src={ARROWDOWN} alt="Arrow Down Icon" />
          </span>
        </div>
      </section>
    </div>
  );
};

export default DashboardTopBar;
