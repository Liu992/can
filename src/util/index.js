import axios from "axios";

let utils = {};
/* 登录 */
utils.signin = (data) => {
    return axios.post("/api/signin", data)
    .then(res => {
        return res.data
    })
}

/* 获取个人信息  */
utils.getProfile = () => {
    return axios.get("/api/user/profile")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err)
    })
}

/* 获取报单列表 及其 usdt估值  */
utils.getRechargeList = (page) => {
    return axios.post('/api/user/recharge/list', {
        page: page,
        size: 5
    })
    .then(res => {
        return res.data
    })
}
/* 提交报单 */
utils.sendRecharge = (number) => {
    return axios.post("/api/user/recharge", {
      amount: number
    })
    .then(res => {
        return res.data
    })
}   

/* 提币 */
utils.sendWithdraw = (amount, address) => {
    return axios.post("/api/user/withdraw", {
        amount: amount,
        address: address
    })
    .then(res => {
        return res.data
    })
}
/* 获取收益记录 */
utils.getEarningHistory = (page) => {
    return axios.post("/api/user/earning/list", {
      page: page,
      size: 5
    })
    .then(res => {
        return res.data
    })
}

/* 获取充值记录 */
utils.getAddressHistory = (page) => {
    return axios.post("/api/user/transfer/list", {
      page: page,
      size: 5
    })
    .then(res => {
        return res.data
    })
}

/* 注册 */
utils.register = (data) => {
    return axios.post("/api/signup", data)
    .then(res => {
        return res.data
    })
}   
export default utils;