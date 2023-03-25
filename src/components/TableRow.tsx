import React, { useState, useRef, useEffect } from "react";
import classes from "./TableRow.module.css";
import DOTS from "../assets/icons/threeDots.svg";
import VIEW from "../assets/icons/view.svg";
import BLACKLIST from "../assets/icons/blacklistUser.svg";
import ACTIVATE from "../assets/icons/activateUser.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  status: string;
  organization: string;
  userName: string;
  email: string;
  id: string;
  phoneNumber: string;
  dateJoined: string;
}

const TableRow: React.FC<Props> = ({
  status,
  organization,
  email,
  userName,
  id,
  phoneNumber,
  dateJoined,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleDocumentMouseDown = () => {
    if (modalRef.current) {
      setShowOptions(false);
    }
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    // Remove all non-numeric and non-period characters from the string
    const cleaned = phoneNumber.replace(/[^\d.-]/g, "");

    // If the resulting string is not a valid phone number, return it as is
    if (cleaned.length !== 10) {
      return phoneNumber;
    }

    // Replace any periods with hyphens
    const formatted = cleaned.replace(/\./g, "-");

    // Split the string into its three parts
    const areaCode = formatted.slice(0, 3);
    const firstThree = formatted.slice(3, 6);
    const lastFour = formatted.slice(6);

    // Return the formatted phone number
    return `(${areaCode}) ${firstThree}-${lastFour}`;
  };

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour < 12 ? "AM" : "PM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${month} ${day}, ${year} ${formattedHour}:${formattedMinute} ${ampm}`;
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleDocumentMouseDown);

  //   return () => {
  //     document.removeEventListener("mousedown", handleDocumentMouseDown);
  //   };
  // }, []);

  return (
    <tr className={classes.table__row}>
      <td>{organization}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{formatPhoneNumber(phoneNumber)}</td>
      <td>{formatDateString(dateJoined)}</td>
      <td>
        {status === "inactive" && (
          <span className={classes.inactive}>Inactive</span>
        )}
        {status === "active" && <span className={classes.active}>Active</span>}
        {status === "pending" && (
          <span className={classes.pending}>Pending</span>
        )}
        {status === "blacklisted" && (
          <span className={classes.blacklisted}>Blacklisted</span>
        )}
      </td>
      <td>
        <div
          className={classes.three__dots}
          onClick={() => {
            setShowOptions(true);
            modalRef.current?.focus();
          }}
        >
          <img src={DOTS} alt="" />
          {showOptions && (
            <div className={classes.modal} ref={modalRef} tabIndex={0}>
              <button
                type="button"
                className={classes.modal__item}
                onClick={() => navigate(`/dashboard/users/${id}`)}
              >
                <img src={VIEW} alt="View Icon" />
                <span>View Details</span>
              </button>
              {status !== "blacklisted" ? (
                <button type="button" className={classes.modal__item}>
                  <img src={BLACKLIST} alt="BlackList Icon" />
                  <span>Blacklist User</span>
                </button>
              ) : (
                <button type="button" className={classes.modal__item}>
                  <img src={ACTIVATE} alt="Activate Icon" />
                  <span>Activate User</span>
                </button>
              )}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
