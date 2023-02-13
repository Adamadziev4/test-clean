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
) => {
  const newUserData = {
    ...userData,
    [choosenSelect]: choosenSelect === "hobbies" ? value.split(",") : value,
  };

  const newUsersData = usersData.map((user) => {
    if (user.id !== userData.id) return user;

    return newUserData;
  });

  return { newUserData, newUsersData };
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
