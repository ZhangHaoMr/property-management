import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/layout/layout.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/dashboard.vue")
      },
      {
        path: "/sysUserList",
        name: "sysUserList",
        component: () =>
          import("@/views/layout/system/sysUserList/sysUserList.vue")
      },
      {
        path: "/sysRoleList",
        name: "sysRoleList",
        component: () =>
          import("@/views/layout/system/sysRoleList/sysRoleList.vue")
      },
      {
        path: "/sysMenuList",
        name: "sysMenuList",
        component: () =>
          import("@/views/layout/system/sysMenuList/sysMenuList.vue")
      },
      {
        path: "/houseBuilding",
        name: "houseBuilding",
        component: () =>
          import("@/views/layout/sysHouse/houseBuilding/houseBuilding.vue")
      },
      {
        path: "/houseUnit",
        name: "houseUnit",
        component: () =>
          import("@/views/layout/sysHouse/houseUnit/houseUnit.vue")
      },
      {
        path: "/sysHouseList",
        name: "sysHouseList",
        component: () =>
          import("@/views/layout/sysHouse/sysHouseList/sysHouseList.vue")
      },
      {
        path: "/parkList",
        name: "parkList",
        component: () => import("@/views/layout/sysPark/parkList/parkList.vue")
      },
      {
        path: "/liveUser",
        name: "liveUser",
        component: () => import("@/views/layout/live/liveUser/liveUser.vue")
      },
      {
        path: "/feePower",
        name: "feePower",
        component: () => import("@/views/layout/fee/feePower/feePower.vue")
      },
      {
        path: "/feeWater",
        name: "feeWater",
        component: () => import("@/views/layout/fee/feeWater/feeWater.vue")
      },
      {
        path: "/feePark",
        name: "feePark",
        component: () => import("@/views/layout/fee/feePark/feePark.vue")
      },
      {
        path: "/userComplaintList",
        name: "userComplaintList",
        component: () =>
          import(
            "@/views/layout/userComplaint/userComplaintList/userComplaintList.vue"
          )
      },
      {
        path: "/myUserComplaint",
        name: "myUserComplaint",
        component: () =>
          import(
            "@/views/layout/userComplaint/myUserComplaint/myUserComplaint.vue"
          )
      },
      {
        path: "/myPowerFee",
        name: "myPowerFee",
        component: () =>
          import("@/views/layout/feeList/myPowerFee/myPowerFee.vue")
      },
      {
        path: "/myWaterFee",
        name: "myWaterFee",
        component: () =>
          import("@/views/layout/feeList/myWaterFee/myWaterFee.vue")
      },
      {
        path: "/myParkFee",
        name: "myParkFee",
        component: () =>
          import("@/views/layout/feeList/myParkFee/myParkFee.vue")
      },
      {
        path: "/repairList",
        name: "repairList",
        component: () =>
          import("@/views/layout/repairModel/repairList/repairList.vue")
      },
      {
        path: "/myRepair",
        name: "myRepair",
        component: () =>
          import("@/views/layout/repairModel/myRepair/myRepair.vue")
      },
      {
        path: "/noticeList",
        name: "myParkFee",
        component: () =>
          import("@/views/layout/notice/noticeList/noticeList.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
