import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmZlNjU4NDE2Y2FkMDRlMzk4YWY3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDY5NzU1NywiZXhwIjoxNjQ0OTU2NzU3fQ.nCkKOGHWsTAQiAw4vnd8_6T9qQlyn9SyrsfJgQIfGYM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
