import React, { useEffect, useState } from "react";
import GeneralContent from "../components/GeneralContent";
import HollowButton from "../components/HollowButton";
import classes from "./UserDetails.module.css";
import AVATAR from "../assets/icons/avatar.svg";
import BACKARROW from "../assets/icons/backArrow.svg";
import FULLSTAR from "../assets/icons/fullStar.svg";
import HOLLOWSTAR from "../assets/icons/hollowStar.svg";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

interface UserProfile {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
}

const UserDetails = () => {
  const [currentContent, setCurrentContent] =
    useState<string>("generalContent");
  const [usersData, setUsersData] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { userID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userID}/`
        );
        const data = await response.json();
        console.log(data);
        setUsersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userID]);

  const getUserStatus = (
    createdAt: string | undefined,
    lastActiveDate: string | undefined
  ) => {
    if (createdAt !== undefined && lastActiveDate !== undefined) {
      const now = new Date();
      const created = new Date(createdAt);
      const lastActive = new Date(lastActiveDate);
      const inactiveDuration = now.getTime() - created.getTime();
      const inactiveDays = inactiveDuration / (1000 * 3600 * 24);
      const activeDuration = now.getTime() - lastActive.getTime();
      const activeDays = activeDuration / (1000 * 3600 * 24);

      if (activeDays <= 30 && lastActiveDate !== createdAt) {
        return "active";
      } else if (inactiveDays <= 30 && activeDays > 30) {
        return "pending";
      } else if (inactiveDays > 30) {
        return "blacklisted";
      } else {
        return "inactive";
      }
    }
  };

  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {!isLoading && error && (
        <div className={classes.error__container}>
          <h2>Something Went Wrong</h2>
        </div>
      )}
      {!isLoading && !error && (
        <div className={classes.container}>
          <Link to="/dashboard/users" className={classes.back}>
            <img src={BACKARROW} alt="" />
            <span>Back to Users</span>
          </Link>
          <div className={classes.content}>
            <header className={classes.header}>
              <h1>User Details</h1>
              <div className={classes.header__cta__container}>
                {getUserStatus(
                  usersData?.createdAt,
                  usersData?.lastActiveDate
                ) !== "blacklisted" ? (
                  <HollowButton color={"red"} buttonFunction={() => {}}>
                    BLACKLIST USER
                  </HollowButton>
                ) : (
                  <HollowButton color={"green"} buttonFunction={() => {}}>
                    ACTIVATE USER
                  </HollowButton>
                )}
              </div>
            </header>
            <section className={classes.profile__and__nav}>
              <div className={classes.profile}>
                <section className={classes.name__and__image}>
                  <img src={usersData?.profile.avatar} alt="User" />
                  <div>
                    <span
                      className={classes.name}
                    >{`${usersData?.profile.firstName} ${usersData?.profile.lastName}`}</span>
                    <span>{usersData?.accountNumber}</span>
                  </div>
                </section>
                <section className={classes.tier}>
                  <span>User's Tier</span>
                  <div>
                    <img src={FULLSTAR} alt="" />
                    <img src={HOLLOWSTAR} alt="" />
                    <img src={HOLLOWSTAR} alt="" />
                  </div>
                </section>
                <section className={classes.amount__and__bank__details}>
                  <span className={classes.amount}>
                    N{usersData?.education.monthlyIncome[1]}
                  </span>
                  <span className={classes.bank__details}>
                    Not Specified/Not Specified
                  </span>
                </section>
              </div>
              <nav className={classes.nav}>
                <ul className={classes.link__list}>
                  <li
                    className={`${classes.list__item} ${
                      currentContent === "generalContent"
                        ? classes.active__list__item
                        : ""
                    }`}
                    onClick={() => setCurrentContent("generalContent")}
                  >
                    <button type="button">General Details</button>
                  </li>
                  <li
                    className={`${classes.list__item} ${
                      currentContent === "documents"
                        ? classes.active__list__item
                        : ""
                    }`}
                    onClick={() => setCurrentContent("documents")}
                  >
                    <button type="button">Documents</button>
                  </li>
                  <li
                    className={`${classes.list__item} ${
                      currentContent === "bankDetails"
                        ? classes.active__list__item
                        : ""
                    }`}
                    onClick={() => setCurrentContent("bankDetails")}
                  >
                    <button type="button">Bank Details</button>
                  </li>
                  <li
                    className={`${classes.list__item} ${
                      currentContent === "loans"
                        ? classes.active__list__item
                        : ""
                    }`}
                    onClick={() => setCurrentContent("loans")}
                  >
                    <button type="button">Loans</button>
                  </li>
                  <li
                    className={`${classes.list__item} ${
                      currentContent === "savings"
                        ? classes.active__list__item
                        : ""
                    }`}
                    onClick={() => setCurrentContent("savings")}
                  >
                    <button type="button">Savings</button>
                  </li>
                  <li
                    className={`${classes.list__item} ${
                      currentContent === "appAndSystem"
                        ? classes.active__list__item
                        : ""
                    }`}
                    onClick={() => setCurrentContent("appAndSystem")}
                  >
                    <button type="button">App and System</button>
                  </li>
                </ul>
              </nav>
            </section>
            <section className={classes.content}>
              {currentContent === "generalContent" ? (
                <GeneralContent usersData={usersData} />
              ) : (
                <div>This Page "{currentContent}" is Currently Unavailable</div>
              )}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
