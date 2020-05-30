import { Effect, Reducer } from 'umi';
import {
  queryProductList,
  updateProductList,
  addProductList,
  deleteProductList
} from './service';

import { Data } from './data.d';

export interface StateType {
  prolist: Data[];
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    proFetch: Effect;
    proEdit: Effect;
    ProSubmit: Effect;
    ProDelete: Effect
  };
  reducers: {
    queryList: Reducer<StateType>;
    appendList: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'listActivityList',

  state: {
    prolist: []
  },

  effects: {
    *proFetch({ payload }, { call, put }) {
      const response = yield call(queryProductList, payload);
      yield put({
        type: 'queryList',
        payload: response ? response.data : [],
      });
    },
    *proEdit({ payload }, { call, put }) {
      yield call(updateProductList, payload); // post
      const response = yield call(queryProductList, {});
      yield put({
        type: 'queryList',
        payload: response ? response.data : [],
      });
    },
    *ProSubmit({ payload }, { call, put }) {
      yield call(addProductList, payload); // post
      const response = yield call(queryProductList, {});
      yield put({
        type: 'queryList',
        payload: response ? response.data : [],
      });
    },
    *ProDelete({ payload }, { call, put }) {
      yield call(deleteProductList, payload); // post
      const response = yield call(queryProductList, {});
      yield put({
        type: 'queryList',
        payload: response ? response.data : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        prolist: action.payload,
      };
    },
    appendList(state = { prolist: [] }, action) {
      return {
        ...state,
        prolist: state.prolist.concat(action.payload),
      };
    },
  },
};

export default Model;
