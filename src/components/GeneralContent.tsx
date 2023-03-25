import React from "react";
import classes from "./GeneralContent.module.css";

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

interface Props {
  usersData: UserProfile | null;
}

const GeneralContent: React.FC<Props> = ({ usersData }) => {
  return (
    <div className={classes.container}>
      {/* //////// SECTION //////////////// */}
      <section className={classes.section}>
        <header className={classes.header}>
          <h2>Personal Information</h2>
        </header>
        <div>
          <div className={classes.details}>
            <span className={classes.key}>FULL NAME</span>
            <span
              className={classes.value}
            >{`${usersData?.profile.firstName} ${usersData?.profile.lastName}`}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>PHONE NUMBER</span>
            <span className={classes.value}>{usersData?.phoneNumber}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Email Address</span>
            <span className={classes.value}>{usersData?.email}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>BVN</span>
            <span className={classes.value}>{usersData?.profile.bvn}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>GENDER</span>
            <span className={classes.value}>{usersData?.profile.gender}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>MARITAL STATUS</span>
            <span className={classes.value}>Not Specified</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Children</span>
            <span className={classes.value}>Not Specified</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Type of residence</span>
            <span className={classes.value}>Not Specified</span>
          </div>
        </div>
      </section>
      {/* //////// SECTION //////////////// */}
      <section className={classes.section}>
        <header className={classes.header}>
          <h2>Education and Employment</h2>
        </header>
        <div>
          <div className={classes.details}>
            <span className={classes.key}>level of education</span>
            <span className={classes.value}>{usersData?.education.level}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>employment status</span>
            <span className={classes.value}>
              {usersData?.education.employmentStatus}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>sector of employment</span>
            <span className={classes.value}>{usersData?.education.sector}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Duration of employment</span>
            <span className={classes.value}>
              {usersData?.education.duration}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>office email</span>
            <span className={classes.value}>
              {usersData?.education.officeEmail}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Monthly income</span>
            <span className={classes.value}>
              {usersData?.education.monthlyIncome[1]} -{" "}
              {usersData?.education.monthlyIncome[0]}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>loan repayment</span>
            <span className={classes.value}>
              {usersData?.education.loanRepayment}
            </span>
          </div>
        </div>
      </section>
      {/* //////// SECTION //////////////// */}
      <section className={classes.section}>
        <header className={classes.header}>
          <h2>Socials</h2>
        </header>
        <div>
          <div className={classes.details}>
            <span className={classes.key}>Twitter</span>
            <span className={classes.value}>{usersData?.socials.twitter}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Facebook</span>
            <span className={classes.value}>{usersData?.socials.facebook}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Instagram</span>
            <span className={classes.value}>
              {usersData?.socials.instagram}
            </span>
          </div>
        </div>
      </section>
      {/* //////// SECTION //////////////// */}
      <section className={classes.section}>
        <header className={classes.header}>
          <h2>Guarantor</h2>
        </header>
        <div>
          <div className={classes.details}>
            <span className={classes.key}>FULL NAME</span>
            <span className={classes.value}>
              {usersData?.guarantor.firstName} {usersData?.guarantor.lastName}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>PHONE NUMBER</span>
            <span className={classes.value}>
              {usersData?.guarantor.phoneNumber}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Email Address</span>
            <span className={classes.value}>{"Not Specified"}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Relationship</span>
            <span className={classes.value}>Not Specified</span>
          </div>
        </div>
      </section>
      {/* //////// SECTION //////////////// */}
      {/* <section className={classes.section}>
        <div>
          <div className={classes.details}>
            <span className={classes.key}>FULL NAME</span>
            <span className={classes.value}>
              {usersData?.guarantor.firstName} {usersData?.guarantor.lastName}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>PHONE NUMBER</span>
            <span className={classes.value}>
              {usersData?.guarantor.phoneNumber}
            </span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Email Address</span>
            <span className={classes.value}>{"Not Specified"}</span>
          </div>
          <div className={classes.details}>
            <span className={classes.key}>Relationship</span>
            <span className={classes.value}>Not Specified</span>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GeneralContent;
