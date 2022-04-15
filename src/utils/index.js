import { ROLES, STATUS } from "../const";

export const checkAccessNews = (status, role) => {
  if (status === STATUS.CHECK && role === ROLES.GUEST) {
    return false;
  }
  return true;
};
