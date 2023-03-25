import React, { useState } from "react";
import classes from "./Table.module.css";
import ICON from "../assets/icons/tableIcon.svg";
import TableRow from "./TableRow";

interface Props {
  showFilterModal: boolean | undefined;
  setShowFilterModal: (value: boolean) => void;
  filteredUsersData: Array<object>;
}

const Table: React.FC<Props> = ({
  showFilterModal,
  setShowFilterModal,
  filteredUsersData,
}) => {
  const getUserStatus = (createdAt: string, lastActiveDate: string) => {
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
  };

  return (
    <table className={classes.table}>
      <thead onClick={() => setShowFilterModal(!showFilterModal)}>
        <tr>
          <th className={classes.organization}>
            <div>
              <span>ORGANIZATION</span> <img src={ICON} alt="" />
            </div>
          </th>
          <th className={classes.username}>
            <div>
              <span>USERNAME</span> <img src={ICON} alt="" />
            </div>
          </th>
          <th className={classes.email}>
            <div>
              <span>EMAIL</span> <img src={ICON} alt="" />
            </div>
          </th>
          <th className={classes.phone__number}>
            <div>
              <span>PHONE NUMBER</span> <img src={ICON} alt="" />
            </div>
          </th>
          <th className={classes.date}>
            <div>
              <span>DATE JOINED</span> <img src={ICON} alt="" />
            </div>
          </th>
          <th className={classes.status}>
            <div>
              <span>STATUS</span> <img src={ICON} alt="" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredUsersData.map((user: any, index: number) => (
          <TableRow
            organization={user.orgName}
            userName={user.userName}
            email={user.email}
            status={getUserStatus(user.createdAt, user.lastActiveDate)}
            key={user.id}
            id={user.id}
            phoneNumber={user.phoneNumber}
            dateJoined={user.createdAt}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
