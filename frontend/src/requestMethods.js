import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmZlNjU4NDE2Y2FkMDRlMzk4YWY3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDY4NzA4NiwiZXhwIjoxNjQ0OTQ2Mjg2fQ.nOij_4bMq8Kp-1t1O4nTlm17Rr-bMa1U3FLYds7Tpa4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
