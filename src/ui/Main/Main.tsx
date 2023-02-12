import React from "react";
import { Card } from "../Card";
import { getUsersData } from "../../services/api";
import { IUser } from "../../domain/userCard";
import { getUsersLC, updateUsersLC } from "../../services/operationsLC";

import styles from "./Main.module.css";

export const Main: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const getDataAndSave = () => {
    getUsersData().then((data) => {
      updateUsersLC(data);

      const usersData = getUsersLC();
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
