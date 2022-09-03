// #region API Response
/**
 * レスポンスコード
 * @enum {number}
 */
export enum ResponseCode{
	OK = 200,
	NG = 401,
}
// #endregion API Response

// #region API Error code
/** 
 * API エラーコード
*/
export enum ErrorCode{
  Success = 0,
	Error = 1,
}

/** 
 * API エラーサブコード
*/
export enum ErrorSubCode{
  None = 0,
  Error = 1,
  NotFoundUserData = 2,
}

/**
 * API実行結果格納クラス
 */
export class Result{
  // エラーコード
  public Code: ErrorCode;
  // サブコード
  public SubCode: ErrorSubCode;
  // コンストラクタ
  public constructor() {
    this.Code = ErrorCode.Success;
    this.SubCode = ErrorSubCode.None;
  }
}
// #endregion API Error code

// #region API Request Param
// #endregion API Request Param