import { IUserInformationState, IUserFeedState } from './types';

export interface IUserState {
  isLoading: boolean;
  information: IUserInformationState;
  feed: IUserFeedState;
}

export const initialState: IUserState = {
  isLoading: false,
  information: {
    item: null,
  },
  feed: {
    items: null,
    options: {
      limit: 30,
      pageSize: 4,
      pageNumber: 1,
    },
  },
};

export default initialState;
