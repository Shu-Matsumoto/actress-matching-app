// APIリクエストを行うfetch関数のラッパーメソッド
/**
 * @param resource 送信先パス
 * @param init 初期化オプション
 */
export const ApiRequestFetcher = async (
  resource: RequestInfo,
	init?: RequestInit,
): Promise<any> => {
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
