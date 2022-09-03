import type { ApiContext } from 'types'
import * as UserTypes from 'types/userTypes';
import * as Data from './data'
import { ErrorCodeTranslator } from './errorCodeTranslator';

/**
 * APIリクエストタイプ
 */
export enum ApiRequestType{
  GET,
  POST,
}

// APIリクエストを行うfetch関数のラッパーメソッド
/**
 * @param resource 送信先パス
 * @param init 初期化オプション
 */
export const ApiRequestFetcher = async (
  resource: RequestInfo,
  type: ApiRequestType,
  params: any,
): Promise<any> => {
  let init: RequestInit = {
      method: (type == ApiRequestType.GET) ? 'GET':'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }
  const res = await fetch(resource, init)

  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました',
    )

    throw error
  }

  return res.json()
}

/**
 * ユーザ登録API（新規追加）
 * @param context APIコンテキスト
 * @param params 登録するユーザ情報
 * @returns 新規追加した商品
 */
export const RegistrationUser = async (
  context: ApiContext,
  params : UserTypes.UserData,
): Promise<{ result: UserTypes.AppResult, userData: UserTypes.UserData }> => {
  const address = `${context.apiRootUrl.replace(/\/$/g, '')}/users/registration`;
  console.log("API Start:[/users/registration]");
  const apiResult: { result: Data.Result, data: UserTypes.UserData } =
    await ApiRequestFetcher(address, ApiRequestType.POST, params);
  console.log("API End:[/users/registration]");
  return {
    result: ErrorCodeTranslator.ToAppResult(apiResult.result),
    userData: apiResult.data
  };
}

/**
 * ログイン
 * @param context 
 * @param params 
 * @returns 
 */
export const Login = async (
  context: ApiContext,
  params : UserTypes.LoginParams,
): Promise<{ result: UserTypes.AppResult, userData: UserTypes.UserData }> => {
  const address = `${context.apiRootUrl.replace(/\/$/g, '')}/auth/login`;
  console.log("API Start:[/auth/login]");
  const apiResult: { result: Data.Result, data: UserTypes.UserData } =
    await ApiRequestFetcher(address, ApiRequestType.POST, params);
  console.log("API End:[/auth/login]");
  return {
    result: ErrorCodeTranslator.ToAppResult(apiResult.result),
    userData: apiResult.data
  };
}

/**
 * 女優プロフィール取得
 * @param context 
 * @param params 
 * @returns 
 */
export const GetActorProfile = async (
  context: ApiContext,
  params : number,
): Promise<{ result: UserTypes.AppResult, data: UserTypes.ActorData} > => {
  const address = `${context.apiRootUrl.replace(/\/$/g, '')}/users/getActorProfile`;
  console.log("API Start:[/users/getActorProfile]");
  const apiResult: { result: Data.Result, data: UserTypes.ActorData } =
    await ApiRequestFetcher(address, ApiRequestType.POST, params);
  console.log("API End:[/users/getActorProfile]");
  return {
    result: ErrorCodeTranslator.ToAppResult(apiResult.result),
    data: apiResult.data,
  };
}

/**
 * 女優プロフィール更新
 * @param context 
 * @param params 
 * @returns 
 */
export const UpdateActorProfile = async (
  context: ApiContext,
  params : number,
): Promise<UserTypes.AppResult> => {
  const address = `${context.apiRootUrl.replace(/\/$/g, '')}/users/registration`;
  console.log("API Start:[/users/registration]");
  const apiResult = await ApiRequestFetcher(address, ApiRequestType.POST, params);
  console.log("API End:[/users/registration]");
  return ErrorCodeTranslator.ToAppResult(apiResult);
}

/**
 * 女優リスト取得
 * @param context 
 * @param params 
 * @returns 
 */
export const GetActorsList = async (
  context: ApiContext,
  params : UserTypes.UserData,
): Promise<UserTypes.AppResult> => {
  const address = `${context.apiRootUrl.replace(/\/$/g, '')}/users/registration`;
  console.log("API Start:[/users/registration]");
  const apiResult = await ApiRequestFetcher(address, ApiRequestType.POST, params);
  console.log("API End:[/users/registration]");
  return ErrorCodeTranslator.ToAppResult(apiResult);
}

/**
 * 女優検索
 * @param context 
 * @param params 
 * @returns 
 */
export const SearchActors = async (
  context: ApiContext,
  params : UserTypes.UserData,
): Promise<UserTypes.AppResult> => {
  const address = `${context.apiRootUrl.replace(/\/$/g, '')}/users/registration`;
  console.log("API Start:[/users/registration]");
  const apiResult = await ApiRequestFetcher(address, ApiRequestType.POST, params);
  console.log("API End:[/users/registration]");
  return ErrorCodeTranslator.ToAppResult(apiResult);
}


