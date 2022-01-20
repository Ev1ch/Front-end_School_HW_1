import { IUser } from 'types/user';
import { IFeed } from 'types/feed';
import { callApi } from 'helpers';
import { ApiRoutes } from 'common';

class UsersService {
  public static async getUser({ nick }: { nick: string }): Promise<IUser> {
    const response = await callApi<IUser>({
      endpoint: ApiRoutes.USER.INFO(nick),
    });

    return response;
  }

  public static async getUserFeed({
    limit,
    nick,
  }: {
    limit: number;
    nick: string;
  }): Promise<IFeed> {
    const response = await callApi<IFeed>({
      endpoint: ApiRoutes.USER.FEED(nick),
      query: { limit },
    });

    return response;
  }
}

export default UsersService;
