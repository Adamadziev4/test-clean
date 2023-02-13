import React from "react";
import { Card } from "../Card";
import { getUsersData } from "../../services/api";
import { IUser } from "../../domain/userCard";
import { getUsersLC, updateUsersLC } from "../../services/operationsLC";

import styles from "./Main.module.css";
import { getDataAndSave } from "../../application/updateUser";

export const Main: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    getDataAndSave().then((data) => setUsers(data));
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={styles.getDataBtn}
        onClick={() => getDataAndSave().then((data) => setUsers(data))}
      >
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
