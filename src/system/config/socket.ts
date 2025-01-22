import { io } from 'socket.io-client';
import Constants from 'apis/utils/constants';

const socket = io(`${Constants.Keys.DEFAULT_API}`);

export const usersSocket = io(`${Constants.Keys.DEFAULT_API}/users`);

export const adminsSocket = io(
  `${Constants.Keys.DEFAULT_API}/admins`,
);

export const doctorsSocket = io(
  `${Constants.Keys.DEFAULT_API}/doctors`,
);

export default socket;
