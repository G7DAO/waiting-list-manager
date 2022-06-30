import waitlist from './api.waitlist';
import user from './api.users';

export const _waitlist = waitlist;
export const _user = user;

const models = {
  _waitlist,
  _user,
};

export default models;