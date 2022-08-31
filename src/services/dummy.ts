/**
 * ダミーAPIをコールするためのAPIクライアント
 */

import { ApiContext, DummyApiRequestParams, DummyApiResponseData } from 'types'
import { ApiRequestFetcher } from 'utils/communication'

/**
 * APIクライアント
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns レスポンスデータ
 */
const CallDummyApi = async (
	context: ApiContext,
  params: DummyApiRequestParams,
): Promise<DummyApiResponseData> => {
	const address = `${context.apiRootUrl.replace(/\/$/g, '')}/dummy`;
	//console.log(address);
  return await ApiRequestFetcher(
		address,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

// /**
//  * APIクライアント
//  * @param context APIコンテキスト
//  * @param params パラメータ
//  * @returns レスポンスデータ
//  */
// const CallDummyApi = async (
// 	context: ApiContext,
//   params: DummyApiRequestParams,
// ): DummyApiResponseData => {

// 	let data: DummyApiResponseData = {dataNumber: 0, dataString: ""};
// 	// await callDummyApi(context, params)
// 	// 	.then((response) => {
// 	// 		data = response;
// 	// 		//console.log(response);
// 	// 		//console.log(data);
// 	// 	});
// 	// console.log(data);
// 	return data;
// }

export default CallDummyApi
