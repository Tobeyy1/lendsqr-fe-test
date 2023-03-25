import React, { useEffect, useRef } from "react";
import classes from "./FilterModal.module.css";
import FullGreenButton from "./FullGreenButton";
import HollowButton from "./HollowButton";

interface Props {
  usersData: any;
  filterData: (value: any) => void;
  resetFilterHandler: () => void;
  setShowFilterModal: (value: boolean) => void;
}

const FilterModal: React.FC<Props> = ({
  usersData,
  filterData,
  resetFilterHandler,
  setShowFilterModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const orgRef = useRef<HTMLSelectElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      const height = modalRef.current.scrollHeight;
      modalRef.current.style.height = `${height}px`;
    }
  }, []);

  const filterDataHandler = () => {
    filterData({
      organization: orgRef.current?.value,
      userName: userNameRef.current?.value,
      email: emailRef.current?.value,
      date: dateRef.current?.value,
      phoneNumber: phoneNumberRef.current?.value,
      status: statusRef.current?.value,
    });
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.backdrop}
        onClick={() => setShowFilterModal(false)}
      ></div>
      <div className={classes.modal} ref={modalRef}>
        <label htmlFor="Organization" className={classes.label}>
          <p>Organization</p>
          <div className={classes.select__container}>
            <select
              name="Organization"
              title="Organization"
              className={classes.select}
              ref={orgRef}
            >
              <option value="" className={classes.option}>
                Select
              </option>
              {usersData.map((user: any, index: number) => {
                return (
                  <option
                    value={user.orgName}
                    className={classes.option}
                    key={index}
                  >
                    {user.orgName}
                  </option>
                );
              })}
            </select>
          </div>
        </label>
        <label htmlFor="Username" className={classes.label}>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            name="Username"
            className={classes.input}
            ref={userNameRef}
          />
        </label>
        <label htmlFor="Email" className={classes.label}>
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className={classes.input}
            ref={emailRef}
          />
        </label>
        <label htmlFor="Date" className={classes.label}>
          <p>Date</p>
          <input
            type={"date"}
            placeholder="Date"
            name="Date"
            className={classes.input}
            ref={dateRef}
          />
        </label>
        <label htmlFor="Phone Number" className={classes.label}>
          <p>Phone Number</p>
          <input
            type="number"
            placeholder="Phone Number"
            name="Phone Number"
            inputMode="numeric"
            className={classes.input}
            ref={phoneNumberRef}
          />
        </label>
        <label htmlFor="Status" className={classes.label}>
          <p>Status</p>
          <div className={classes.select__container}>
            <select name="Status" className={classes.select} ref={statusRef}>
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
          </div>
        </label>
        <div className={classes.cta__container}>
          <HollowButton
            buttonFunction={() => {
              resetFilterHandler();
            }}
            color={"grey"}
          >
            Reset
          </HollowButton>
          <FullGreenButton
            buttonFunction={() => {
              filterDataHandler();
            }}
          >
            Filter
          </FullGreenButton>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
