import { Role } from "./role";

export const Users = [
  {
    email: "admin@gmail.com",
    password: "123",
    role: Role.Admin,
  },
  {
    email: "UserWhoCanOnlySeeMovie@gmail.com",
    password: "1234",
    role: Role.UserWhoCanOnlySeeMovie,
  },
  {
    email: "UserWhoCanOnlySeeTvSeries@gmail.com",
    password: "12345",
    role: Role.UserWhoCanOnlySeeTvSeries,
  },
];
