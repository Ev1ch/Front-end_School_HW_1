const ApiRoutes = {
  FEED: '/trending/feed',
  USER: {
    INFO: (nick: string): string => `/user/info/${nick}`,
    FEED: (nick: string): string => `/user/feed/${nick}`,
  },
};

export default ApiRoutes;
