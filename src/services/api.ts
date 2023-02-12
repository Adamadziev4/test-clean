import { IUser } from "../domain/userCard";

export const getUsersData = async () => {
  const res = await fetch("https://63e27036ad0093bf29cff6e6.mockapi.io/Data");
  const json: IUser[] = await res.json();

  const data = json.map((userData) => {
    return {
      ...userData,
      id: Number(userData.id),
    };
  });

  return data;
};

export const deleteUser = async (id: number) => {
  fetch(`https://63e27036ad0093bf29cff6e6.mockapi.io/Data/${id}`, {
    method: "DELETE",
  });
};

export const updateUser = async (userData: IUser) => {
  fetch(`https://63e27036ad0093bf29cff6e6.mockapi.io/Data/${userData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
