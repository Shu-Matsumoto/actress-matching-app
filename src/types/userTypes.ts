/** 
 * エラーコード
*/
export enum AppErrorCode{
  Success = 0,
	Error = 1,
}

/** 
 * エラーサブコード
*/
export enum AppErrorSubCode{
  None = 0,
	Error = 1,
}

/**
 * 処理実行結果格納クラス
 */
export class AppResult{
  // エラーコード
  public Code: AppErrorCode;
  // サブコード
  public SubCode: AppErrorSubCode;
  // コンストラクタ
  constructor() {
    this.Code = AppErrorCode.Success;
    this.SubCode = AppErrorSubCode.None;
  }
}

// #region Data from Backside
/**
 * ユーザータイプ
 */
export enum UserType {
  // 女優
  Actor,
  // メーカー
  Marker,
}
/**
 * 血液型
 */
export enum BloodType {
  A = 0,
  B = 1,
  O = 2,
  AB = 3,
}
/**
 * 洋服サイズ
 */
export enum ClothesSizeType {
  SS = 0,
  S = 1,
  M = 2,
  L = 3,
  L2 = 4,
  L3 = 5,
  L4 = 6,
  L5 = 7,
  L6 = 8,
  L7 = 9,
  L8 = 10,
  L9 = 11,
  L10 = 12,
}
/**
 * バストサイズ
 */
export enum BreastSizeType {
  A = 0,
  B = 1,
  C = 2,
  D = 3,
  E = 4,
  F = 5,
  G = 6,
  H = 7,
  I = 8,
  J = 9,
  K = 10,
  L = 11,
  M = 12,
  N = 13,
}
/** 
 * ユーザデータ
*/
export class UserData {
  // ID
  public Id: number = 0;
  // Name
  public Name: string = "";
  // Password
  public Password: string = "";
  // 公開フラグ
  public Open: boolean = false;
  // ユーザータイプ
  public Type: UserType = UserType.Actor;
  // 管理者
  public IsAdmin: boolean = false;
  // 削除フラグ
  public IsDeleted: boolean = false;
}
/**
 * ログインリクエストパラメータ
 */
export class LoginParams {
  // ユーザー名
  public Name: string = "";
  // パスワード
  public Password: string = "";
}
/**
 * 女優プロフィールデータ
 */
export class ActorProfileData {
  // 女優名
  public ActressName: string = "ジーズ花子";
  // 本名
  public RealName: string = "アカデミー桜"
  // 誕生日
  public Birthday: Date = new Date(1900,1,1);
  // 血液型
  public BloodType: BloodType = BloodType.A;
  // 身長(cm)
  public Height: number = 150
  // 体重(kg)
  public Weight: number = 40;
  // 服サイズ
  public ClothesSize: ClothesSizeType = ClothesSizeType.S;
  // 靴サイズ(cm)
  public ShoesSize: number = 22;
  // バストサイズ(cm)
  public BreastSize: BreastSizeType = BreastSizeType.A;
  // バストトップサイズ(cm)
  public BreastTopSize: number = 80;
  // バストアンダーサイズ(cm)
  public BreastUnderSize: number = 75;
  // ウェストサイズ(cm)
  public WaistSize: number = 60;
  // ヒップサイズ(cm)
  public HipSize: number = 80;
}
/**
 * プレイ条件１
 */
export class PlayCondition1Data {
  // 本番
  public Honban: boolean = false;
  // ゴムなし
  public Gomunashi: boolean = false;
  // 中だし
  public Nakadashi: boolean = false;
  // フェラチオ
  public Ferachio: boolean = false;
  // イラマチオ
  public Iramachio: boolean = false;
}

/**
 * 女優ユーザーデータ
 */
export class ActorData {
  // ユーザーデータ
  public User: UserData = new UserData();
  // プロフィールデータ
  public Profile: ActorProfileData = new ActorProfileData();
  // プレイ条件１
  public PlayCondition1: PlayCondition1Data = new PlayCondition1Data();
}
// #endregion Data from Backside