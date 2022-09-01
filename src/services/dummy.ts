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

export default CallDummyApi
