import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Register from '@/components/Register'

import Home from '@/components/Home'
import Address from '@/components/Address'
import Recharge from '@/components/Recharge'
import Withdrawal from '@/components/Withdrawal'
import Earning from '@/components/Earning'
import Personal from '@/components/Personal'
import Invite from '@/components/Invite'

// 历史记录
// 报单
import RechargeHistory from '@/components/RechargeHistory'
// 提币
import WithdrawalHistory from '@/components/WithdrawalHistory'
// 收益
import EarningHistory from '@/components/EarningHistory'
// 充值
import AddressHistory from '@/components/AddressHistory'

import Team from "@/components/Team"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/register/:id",
      name: "Register",
      component:Register
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path:"/personal",
      name: "Personal",
      component:Personal
    },
    {
      path: "/invite",
      name: "Invite",
      component:Invite
    },
    {
      path: "/team",
      name: "Team",
      component: Team
    },
    // 新增
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/withdrawal',
      name: 'Withdrawal',
      component: Withdrawal
    },
    {
      path: '/earning',
      name: 'Earning',
      component: Earning
    },
    // 记录
    {
      path: '/address/history',
      name: 'AddressHistory',
      component: AddressHistory
    },
    {
      path: '/recharge/history',
      name: 'RechargeHistory',
      component: RechargeHistory
    },
    {
      path: '/withdrawal/history',
      name: 'WithdrawalHistory',
      component: WithdrawalHistory
    },
    {
      path: '/earning/history',
      name: 'EarningHistory',
      component: EarningHistory
    },
  ]
})
