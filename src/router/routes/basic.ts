import type { AppRouteRecordRaw } from "/@/router/types";
import { REDIRECT_NAME, LAYOUT, EXCEPTION_COMPONENT } from "/@/router/constant";

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: "ErrorPage",
  component: LAYOUT,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true
  },
  children: [
    {
      path: "/:path(.*)*",
      name: "ErrorPage",
      component: EXCEPTION_COMPONENT,
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true
      }
    }
  ]
};

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: "/redirect",
  name: REDIRECT_NAME,
  component: LAYOUT,
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: REDIRECT_NAME,
      component: () => import("/@/views/pages/redirect/index.vue"),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true
      }
    }
  ]
};

export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
  path: "/error-log",
  name: "ErrorLog",
  component: LAYOUT,
  meta: {
    title: "ErrorLog",
    hideBreadcrumb: true
  },
  children: [
    {
      path: "list",
      name: "ErrorLogList",
      component: () => import("/@/views/pages/error-log/index.vue"),
      meta: {
        title: "错误日志列表",
        hideBreadcrumb: true
      }
    }
  ]
};
