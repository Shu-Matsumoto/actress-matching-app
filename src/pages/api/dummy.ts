/**
 * APIルートテスト用のダミーAPI
 */
import type { NextApiRequest, NextApiResponse } from 'next'
import { DummyApiRequestParams, DummyApiResponseData } from 'types'

/**
 * レスポンスコード
 * @enum {number}
 */
enum ResponseCode{
	OK = 200,
	NG = 401,
}

/**
 * APIコール時のハンドラ関数
 * @param req APIリクエスト
 * @param res APIレスポンス
 * ====ハンドラで実現できる処理の例=====
 * 	－フォームに入力された値が POST されたときにサーバーサイドで DB に保存する
 *  －3rd パーティ製の Web API の呼び出しを中継する
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DummyApiResponseData>,
) {
	//console.log("recieve request!");
	//console.log(req.body);
	res.status(ResponseCode.OK).json({
		dataNumber: req.body['dataNumber'],
		dataString: "abcd",
	})
}
