import user from './model.user';
import utility from './model.utility';
import waitlist from './model.waitlist';

export const _user = user;
export const _utility = utility;
export const _waitlist = waitlist;

const models = {
  _user,
  _utility,
  _waitlist,
};

export default models;
