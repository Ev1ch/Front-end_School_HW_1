import { IFeedTikTuk } from 'types/feed';
import { IUser } from 'types/user';

export interface IUserInformationState {
  item: IUser | null;
}

export interface IUserFeedState {
  items: IFeedTikTuk[] | null;
  options: {
    limit: number;
    pageSize: number;
    pageNumber: number;
  };
}
