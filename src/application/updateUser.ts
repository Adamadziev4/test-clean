import { changeInputValue, IUser, SelectOptions } from "../domain/userCard";
import { deleteUser } from "../services/api";
import { updateUsersLC } from "../services/operationsLC";

export const updateInputValue = (
  value: string,
  userData: IUser,
  usersData: IUser[],
  choosenSelect: SelectOptions
) => {
  const { newUserData, newUsersData } = changeInputValue(
    value,
    userData,
    usersData,
    choosenSelect
  );

  updateUsersLC(newUsersData);

  return newUserData;
};

export const deleteCard = (userData: IUser, usersData: IUser[]): IUser[] => {
  const deleteCard: boolean = window.confirm(
    "Вы уверены, что хотите удалить публикацию?"
  );

  if (!deleteCard) return usersData;

  deleteUser(userData.id);

  const newUsersData = usersData.filter((user) => user.id !== userData.id);

  updateUsersLC(newUsersData);

  return newUsersData;
};
