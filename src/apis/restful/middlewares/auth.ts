/* eslint-disable no-param-reassign */
import Secure from 'system/helpers/secureLs';

export const customHeader = (
  httpInstance: {
    defaults: {
      headers: {
        common: {
          Authorization: string;
          ContentType: string;
          lang: any;
        };
      };
    };
  },
  token = Secure.getToken(),
) => {
  const { i18nextLng } = localStorage;

  httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  httpInstance.defaults.headers.common.ContentType =
    'multipart/form-data';
  httpInstance.defaults.headers.common.lang = i18nextLng || 'en';
};

export const deliveryHeader = (
  httpInstance: {
    defaults: {
      headers: {
        common: {
          Authorization: string;
          ContentType: string;
          lang: any;
        };
      };
    };
  },
  token: any,
) => {
  const { i18nextLng } = localStorage;

  httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  httpInstance.defaults.headers.common.ContentType =
    'multipart/form-data';
  httpInstance.defaults.headers.common.lang = i18nextLng || 'en';
};

export const userPayload = (req: {
  sender?: any;
  recipient?: any;
  userType?: any;
}) => {
  const thirdUser = req.sender.id;
  const appThird = req.recipient.id;
  const { userType } = req;

  return { appThird, thirdUser, userType };
};
