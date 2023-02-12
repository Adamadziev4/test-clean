import { IUser } from "../domain/userCard";

export const getUsersLC = () => {
  const usersDataJson = localStorage.getItem("UsersData");
  const usersData: IUser[] =
    usersDataJson !== null && JSON.parse(usersDataJson);

  return usersData;
};

export const updateUsersLC = (data: IUser[]) => {
  localStorage.setItem("UsersData", JSON.stringify(data));
};
