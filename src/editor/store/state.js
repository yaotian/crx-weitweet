export default {
  master: {
    text: '',
    // selected photo
    photo: {},
    // slave boxes being controlled
    isSlavery: true,
    isRequestingSlavery: false
  },
  twitter: {
    text: '',
    textLength: 140,
    photo: {},
    fullname: '',
    username: '',
    avatar: '',
    accessToken: '',
    accessSecret: '',
    // success, error, loading
    boxState: '',
    errMsg: null
  },
  weibo: {
    text: '',
    textLength: 140,
    photo: {},
    fullname: '',
    username: '',
    avatar: '',
    uid: '',
    accessToken: '',
    // success, error, loading
    boxState: '',
    errMsg: null
  }
}
