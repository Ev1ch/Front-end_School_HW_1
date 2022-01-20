import { ITikTuk } from 'types/tiktuk';
import { callApi } from 'helpers';
import { ApiRoutes } from 'common';

class TikTuksService {
  public static async getMany({
    limit,
  }: {
    limit: number;
  }): Promise<ITikTuk[]> {
    const response = await callApi<ITikTuk[]>({
      endpoint: ApiRoutes.FEED,
      query: { limit },
    });

    return response;
  }
}

export default TikTuksService;
