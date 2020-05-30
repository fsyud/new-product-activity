import request from 'umi-request';
import getApi from '@/utils/api'
import { BasicListProductData } from './data.d';

interface ParamsType extends Partial<BasicListProductData> {
  count?: number;
}

export async function queryProductList(params: BasicListProductData) {
  return request(getApi('GetallAct'), {
    params,
  })
}

export async function updateProductList(params: ParamsType) {
  return request(getApi('UpdateAct'), {
    method: 'POST',
    data: params
  });
}

export async function addProductList(params: ParamsType) {
  return request(getApi('AddAct'), {
    method: 'POST',
    data: params
  });
}


export async function deleteProductList(params: ParamsType) {
  return request(getApi('DelAct'), {
    method: 'POST',
    data: params
  });
}

export async function removeFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'update',
    },
  });
}
