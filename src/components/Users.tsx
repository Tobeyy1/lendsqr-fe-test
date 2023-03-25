import React, { useEffect, useState } from "react";
import classes from "./Users.module.css";
import {
  usersImg,
  activeUsersImg,
  usersWithLoansImg,
  usersWithSavingsImg,
  prevButton,
  nextButton,
} from "../assets/icons/Users";
import Table from "./Table";
import FilterModal from "./FilterModal";
import { Route, Routes } from "react-router-dom";
import UserDetails from "../pages/UserDetails";
import LoadingSpinner from "./LoadingSpinner";

interface UserProfile {
  createdAt?: string;
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

const Users = () => {
  const [usersData, setUsersData] = useState<UserProfile[]>([]);
  const [filteredUsersData, setFilteredUsersData] =
    useState<UserProfile[]>(usersData);
  const [showFilterModal, setShowFilterModal] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayedUsersPerPage, setDisplayedUsersPerPage] = useState<any>(100);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const startIndex = (currentPage - 1) * displayedUsersPerPage;
  const endIndex = startIndex + displayedUsersPerPage;

  // const handleDocumentMouseDown = () => {
  //   if (showFilterModal) {
  //     setShowFilterModal(false);
  //   }
  // };

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedCount = Number(event.target.value);
    setDisplayedUsersPerPage(selectedCount);
    setCurrentPage(1);
  };

  const usersWithLoansHandler = () => {
    const usersLoans = usersData.map((user: any) => {
      return user.education.loanRepayment;
    });
    return usersLoans.length;
  };

  const filterData = (data: any) => {
    console.log("DATA: ", data.organization);
    let filteredData: UserProfile[] = [];

    if (data.organization !== "") {
      filteredData = usersData.filter(
        (user: any) => user.orgName === data.organization
      );
    }
    if (data.userName) {
      filteredData = usersData.filter((user: any) =>
        user.userName.toLowerCase().includes(data.userName.toLowerCase())
      );
    }
    if (data.email) {
      filteredData = usersData.filter((user: any) =>
        user.email.toLowerCase().includes(data.email.toLowerCase())
      );
    }
    if (data.date) {
      console.log(data.date);

      filteredData = usersData.filter((user: any) =>
        user.createdAt.includes(data.date)
      );
    }
    if (data.phoneNumber) {
      filteredData = usersData.filter((user: any) =>
        user.phoneNumber.includes(data.phoneNumber)
      );
    }
    if (data.status) {
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

      filteredData = usersData.filter(
        (user: any) =>
          getUserStatus(user.createdAt, user.lastActiveDate) === data.status
      );
    }
    console.log(filteredData);
    if (
      data.organization !== "" ||
      data.userName !== "" ||
      data.email !== "" ||
      data.date !== "" ||
      data.phoneNumber !== "" ||
      data.status !== ""
    ) {
      setFilteredUsersData(filteredData);
      setShowFilterModal(false);
    }
  };

  const resetFilterHandler = () => {
    setFilteredUsersData(usersData);
    setShowFilterModal(false);
  };

  const activeUsersHandler = () => {
    const theFunction = (createdAt: string, lastActiveDate: string) => {
      const now = new Date();
      const lastActive = new Date(lastActiveDate);
      const activeDuration = now.getTime() - lastActive.getTime();
      const activeDays = activeDuration / (1000 * 3600 * 24);

      if (activeDays <= 30 && lastActiveDate !== createdAt) {
        return "active";
      }
    };
    const activeUsers = usersData.map((user: any) => {
      const status = theFunction(user.createdAt, user.lastActiveDate);
      if (status === "active") {
        return "active";
      }
    });
    const filteredArr = activeUsers.filter((item) => item !== undefined);
    return filteredArr.length;
  };

  const pagninationHandler = () => {
    const totalPages = Math.ceil(
      filteredUsersData.length / displayedUsersPerPage
    );
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          type="button"
          key={i}
          className={`${currentPage === i ? classes.active : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    if (pageButtons.length - currentPage < 5) {
      return pageButtons.slice(currentPage - 1, pageButtons.length);
    }
    if (pageButtons.length - currentPage >= 5) {
      const newArray = [
        pageButtons[currentPage - 1],
        pageButtons[currentPage],
        <span>...</span>,
        pageButtons[pageButtons.length - 2],
        pageButtons[pageButtons.length - 1],
      ];
      return newArray;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const data = await response.json();
        // console.log(data);

        localStorage.setItem("users", JSON.stringify(data));
        setUsersData(data);
        setFilteredUsersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setIsLoading(false);
      }
    };

    let usersData: UserProfile[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    if (usersData.length > 0) {
      setUsersData(usersData);
      setFilteredUsersData(usersData);
      console.log("Local Storage", usersData);
      setIsLoading(false);
    }
    if (usersData.length === 0) {
      fetchData();
    }
  }, []);

  const userPageContent = () => {
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
            <header className={classes.header}>
              <h1>Users</h1>
            </header>
            <div className={classes.modal__container}>
              <section className={classes.modal}>
                <img src={usersImg} alt="Icon" />
                <span>USERS</span>
                <span>{usersData.length} </span>
              </section>
              <section className={classes.modal}>
                <img src={activeUsersImg} alt="Icon" />
                <span>ACTIVE USERS</span>
                <span>{activeUsersHandler()}</span>
              </section>
              <section className={classes.modal}>
                <img src={usersWithLoansImg} alt="Icon" />
                <span>USERS WITH LOANS</span>
                <span>
                  {usersWithLoansHandler()
                    ? usersWithLoansHandler()
                    : "Loading"}
                </span>
              </section>
              <section className={classes.modal}>
                <img src={usersWithSavingsImg} alt="Icon" />
                <span>USERS WITH SAVINGS</span>
                <span>102,453</span>
              </section>
            </div>
            <div className={classes.table__container}>
              {showFilterModal && (
                <FilterModal
                  usersData={usersData}
                  filterData={filterData}
                  resetFilterHandler={resetFilterHandler}
                  setShowFilterModal={setShowFilterModal}
                />
              )}
              <div className={classes.table__content}>
                <Table
                  showFilterModal={showFilterModal}
                  setShowFilterModal={setShowFilterModal}
                  filteredUsersData={filteredUsersData.slice(
                    startIndex,
                    endIndex
                  )}
                />
              </div>
            </div>
            <div className={classes.pagination__container}>
              <section className={classes.item__count}>
                <p>
                  Showing{" "}
                  <span>
                    <select
                      // name="Item Count"
                      title="Item Count"
                      // ref={displayedItemsCountRef}
                      value={displayedUsersPerPage}
                      onChange={selectHandler}
                    >
                      <option value={filteredUsersData.length}>
                        {filteredUsersData.length}
                      </option>
                      <option value={Math.round(filteredUsersData.length / 2)}>
                        {Math.round(filteredUsersData.length / 2)}
                      </option>
                      <option value={Math.round(filteredUsersData.length / 3)}>
                        {Math.round(filteredUsersData.length / 3)}
                      </option>
                      <option value={Math.round(filteredUsersData.length / 4)}>
                        {Math.round(filteredUsersData.length / 4)}
                      </option>
                      <option value={Math.round(filteredUsersData.length / 10)}>
                        {Math.round(filteredUsersData.length / 10)}
                      </option>
                    </select>
                  </span>{" "}
                  out of {filteredUsersData.length}
                </p>
              </section>
              <section className={classes.pagination}>
                <img
                  src={prevButton}
                  alt="Arrow Left"
                  className={classes.pagination__arrow}
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage((prev) => prev - 1);
                    }
                  }}
                />
                {pagninationHandler()}
                <img
                  src={nextButton}
                  alt="Arrow Right"
                  className={classes.pagination__arrow}
                  onClick={() => {
                    const totalPages = Math.ceil(
                      filteredUsersData.length / displayedUsersPerPage
                    );
                    if (currentPage < totalPages) {
                      setCurrentPage((prev) => prev + 1);
                    }
                  }}
                />
              </section>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={userPageContent()} />
        <Route path=":userID" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default Users;
