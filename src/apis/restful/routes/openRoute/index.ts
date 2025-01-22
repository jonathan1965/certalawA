/* eslint-disable no-underscore-dangle */
class Open {
  Server: any;

  _Auth: any;

  constructor({ RemoteServer, Auth }: any) {
    this.Server = RemoteServer.instance;
    this._Auth = Auth;
  }

  async getRoute(endpoint: string, req?: object) {
    return this.Server.get(endpoint, req)
      .then((res: { data: any }) => ({ data: res.data || res }))
      .catch((err: { response: { data: any } }) => ({
        error: err.response?.data || err.response || err,
      }));
  }

  async postRoute(endpoint: string, req?: object) {
    return this.Server.post(endpoint, req)
      .then((res: { data: any }) => ({ data: res.data || res }))
      .catch((err: { response: { data: any } }) => ({
        error: err.response?.data || err.response || err,
      }));
  }
}

export default Open;
