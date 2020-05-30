import { ApplyPluginsType, dynamic } from 'C:/Users/yud.dong/Desktop/new-product-actvity-admin/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/user/login'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/layouts/SecurityLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/welcome",
            "name": "welcome",
            "icon": "FileOutlined",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "path": "/admin",
            "name": "admin",
            "icon": "crown",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/Admin'), loading: require('@/components/PageLoading/index').default}),
            "authority": [
              "admin"
            ],
            "routes": [
              {
                "path": "/admin/sub-page",
                "name": "sub-page",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
                "authority": [
                  "admin"
                ],
                "exact": true
              }
            ]
          },
          {
            "name": "最新活动",
            "icon": "CalendarOutlined",
            "path": "/ListActivityList",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListActivityList' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/ListActivityList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "最新banner",
            "icon": "ProfileOutlined",
            "path": "/ListBannerList",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListBannerList' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/ListBannerList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "最新解决方案",
            "icon": "LikeOutlined",
            "path": "/ListSolutionList",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListSolutionList' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/ListSolutionList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/yud.dong/Desktop/new-product-actvity-admin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
