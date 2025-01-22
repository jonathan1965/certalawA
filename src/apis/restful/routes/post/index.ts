/* eslint-disable no-underscore-dangle */
class Post {
  SERVER: any;

  _Auth: any;

  constructor({ RemoteServer, Auth }: any) {
    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async postRoute(endpoint: string, req?: object) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.post(endpoint, req)
      .then((res: { data: any }) => ({ data: res.data || res }))
      .catch((err: { response: { data: any } }) => ({
        error: err.response?.data || err.response || err,
      }));
  }
}
export default Post;
