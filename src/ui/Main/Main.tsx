import React from "react";
import { Card } from "../Card";
import { getUsersData } from "../../services/api";

import { IUser } from "../../types";

import styles from "./Main.module.css";

export const Main: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const getDataAndSave = () => {
    getUsersData().then((data) => {
      localStorage.setItem("UsersData", JSON.stringify(data));

      const usersDataJson = localStorage.getItem("UsersData");
      const usersData: IUser[] =
        usersDataJson !== null && JSON.parse(usersDataJson);

      setUsers(usersData);
    });
  };

  React.useEffect(() => {
    getDataAndSave();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.getDataBtn} onClick={() => getDataAndSave()}>
        <button>Получить новые данные</button>
      </div>
      <div className={styles.usersCards}>
        {users &&
          users.map((userData, i) => (
            <Card
              key={i}
              userData={userData}
              usersData={users}
              setUsers={setUsers}
            />
          ))}
      </div>
    </div>
  );
};
