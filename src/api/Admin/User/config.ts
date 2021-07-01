import { modulePrefix } from "../config";
const prefix = `${modulePrefix}/user`;

const api = {
  info: `${prefix}/info`, // GET
  information: `${prefix}/information`, // GET
  editDetail: `${prefix}/edit/detail` // POST
};

export { api };
