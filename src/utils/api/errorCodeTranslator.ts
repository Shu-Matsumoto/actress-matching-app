import { AppResult, AppErrorCode, AppErrorSubCode } from "types/userTypes";
import { Result, ErrorCode, ErrorSubCode } from "./data";

/**
 * API実行時のエラーコードをAPP次元のエラーコードへ変換するクラス
 */
export class ErrorCodeTranslator{

	/**
	 * API実行時のエラーコードをAPP次元のコードへ変換
	 * @param code API実行時のエラーコード
	 * @returns APP次元のコード
	 */
	public static ToAppResult(code: Result): AppResult {
		let result = new AppResult();

		// エラー変換
		if (code.Code != ErrorCode.Success) {
			result.Code = AppErrorCode.Error;
			result.SubCode = AppErrorSubCode.Error;
		}
		return result;
	}

}