export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  hobbies: string[];
  work: string;
  phone: string;
}

export type SelectOptions =
  | "name"
  | "surname"
  | "age"
  | "hobbies"
  | "work"
  | "phone";

export const selectOptions: SelectOptions[] = [
  "name",
  "surname",
  "age",
  "hobbies",
  "work",
  "phone",
];

export const changeInputValue = (
  value: string,
  userData: IUser,
  usersData: IUser[],
  choosenSelect: SelectOptions
): IUser => {
  const newUserData = {
    ...userData,
    [choosenSelect]: choosenSelect === "hobbies" ? value.split(",") : value,
  };

  const newUsersData = usersData.map((user) => {
    if (user.id !== userData.id) return user;

    return newUserData;
  });

  localStorage.setItem("UsersData", JSON.stringify(newUsersData));

  return newUserData;
};

export const changeSelect = (value: string): SelectOptions => {
  return value === "name" ||
    value === "surname" ||
    value === "age" ||
    value === "hobbies" ||
    value === "work" ||
    value === "phone"
    ? value
    : "name";
};

export const changeUserData = (userData: IUser): void => {
  fetch(`https://63e27036ad0093bf29cff6e6.mockapi.io/Data/${userData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const resetData = (usersData: IUser[]): void => {
  localStorage.setItem("UsersData", JSON.stringify(usersData));
};

export const deleteCard = (userData: IUser, usersData: IUser[]): IUser[] => {
  const deleteCard: boolean = window.confirm(
    "Вы уверены, что хотите удалить публикацию?"
  );

  if (!deleteCard) return usersData;

  fetch(`https://63e27036ad0093bf29cff6e6.mockapi.io/Data/${userData.id}`, {
    method: "DELETE",
  });

  const newUsersData = usersData.filter((user) => user.id !== userData.id);

  localStorage.setItem("UsersData", JSON.stringify(newUsersData));

  return newUsersData;
};
