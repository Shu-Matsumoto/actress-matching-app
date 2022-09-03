/**
 * Prismaを使用したDBアクセスライブラリ
 */

import { PrismaClient, User, ActorProfile, PlayCondition1 } from '@prisma/client'
import * as UserTypes from '../../types/userTypes'
import * as Api from '../api'

// DBアクセス時のエラーコード
export enum DBAccessCode{
	Success = 0,
	Error = 1,
}

export class DBAccessor{	
	// #region Fields
	// prisma
	private static prisma: PrismaClient = new PrismaClient();
	// #endregion Fields
	
	// #region Public methods
	public static async CreateUser(user: UserTypes.UserData): Promise<DBAccessCode> {
		let result = DBAccessCode.Success;
		let userId = 0;
		// ユーザ追加
		await DBAccessor.createUser(user)
			.then(createdUser => {
				console.log(createdUser);
				userId = createdUser.id;
			})
			.catch(error => {
				console.log(error);
				result = DBAccessCode.Error;
			})
		
		// プロフィールとプレイ条件追加(追加するユーザのタイプが女優のときだけ追加)
		if (result == DBAccessCode.Success && user.Type == UserTypes.UserType.Actor) {
			await Promise.all([
				DBAccessor.createActorProfile(userId, new UserTypes.ActorProfileData()),
				DBAccessor.createPlayCondition1(userId, new UserTypes.PlayCondition1Data()),
			]).catch(error => {
				console.log(error);
				result = DBAccessCode.Error;
			});
		}
		
		return result;
	}
	/**
	 * ユーザ認証
	 */
	public static async AuthUser(user: UserTypes.LoginParams):
		Promise<{ result: DBAccessCode, pass: boolean, userData: UserTypes.UserData }> {
		let result = DBAccessCode.Success;
		let pass = true;
		const matchUser = await DBAccessor.prisma.user.findFirst({
			where: {
				AND: {
					name: user.Name,
					password: user.Password,
				}
			},
		})
		//console.log(user);
		//console.log(matchUser);

		// 一致ユーザのチェック
		if (matchUser == null) {
			console.log("Auth fail.");
			pass = false;
		}
		else {
			console.log("Auth pass.");
		}
		const userData = new UserTypes.UserData();
		userData.SetData(matchUser);
		return {
			result: result,
			pass: pass,
			userData: userData,
		};
	}
	/**
	 * 女優プロフィール取得
	 */
	public static async GetActorProfile(id: number)
		:Promise<{ result: DBAccessCode, userFind: boolean, data: UserTypes.ActorData }> {
		let result = DBAccessCode.Success;
		let userFind = true;
		let data = new UserTypes.ActorData();
		const matchUser = await DBAccessor.prisma.user.findFirst({
			where: {
				id: id,
			},
			include: {
				profile: true,
				playCondition1: true,
			},
		});

		// 一致ユーザのチェック
		if (matchUser == null) {
			console.log("User with the specified number does not exist.");
			userFind = false;
		}
		else {
			data.User.SetData(matchUser);
			data.Profile.SetData(matchUser.profile);
			data.PlayCondition1.SetData(matchUser.playCondition1);
		}

		return { result: result, userFind: userFind, data: data };
}

	/**
	 * 女優プロフィール更新
	 */
	public static async UpdateActorProfile(id: number): Promise<DBAccessCode> {
		let result = DBAccessCode.Success;
		return result;
	}

	/**
	 * 女優リスト取得
	 */
	public static async GetActorsList(id: number): Promise<DBAccessCode> {
		let result = DBAccessCode.Success;
		return result;
	}

	/**
	 * 女優検索
	 */
	public static async SearchActors(id: number): Promise<DBAccessCode> {
		let result = DBAccessCode.Success;
		return result;
	}
	// #endregion Public methods

	// #region Private methods
	// create user(Private method)
	private static async createUser(user: UserTypes.UserData): Promise<User>{
		const createdUser = await DBAccessor.prisma.user.create({
			data: {
				name: user.Name,
				password: user.Password,
				open: user.Open ? 1 : 0,
				type: Number(user.Type),
				is_admin: user.IsAdmin ? 1 : 0,
				is_deleted: user.IsDeleted ? 1 : 0,
			}
		})
		return createdUser;
	}
	// create actor profile
	private static async createActorProfile(userId: number, profile: UserTypes.ActorProfileData): Promise<ActorProfile>{
		const createdProfile = await DBAccessor.prisma.actorProfile.create({
			data: {
				userId: userId,
  			actress_name: profile.ActressName,
  			real_name: profile.RealName,
  			birthday: profile.Birthday,
  			blood_type: Number(profile.BloodType),
  			height: profile.Height,
  			weight: profile.Weight,
  			clothes_size: Number(profile.ClothesSize),
  			shoes_size: profile.ShoesSize,
  			breast_size: Number(profile.BreastSize),
  			breast_top: profile.BreastTopSize,
  			breast_under: profile.BreastUnderSize,
  			waist_size: profile.WaistSize,
  			hip_size: profile.HipSize,
			},
		})
		return createdProfile;
	}
	// create actor profile
	private static async createPlayCondition1(userId: number, condition: UserTypes.PlayCondition1Data): Promise<PlayCondition1>{
		const createdCondition = await DBAccessor.prisma.playCondition1.create({
			data: {
				userId: userId,
				honban: condition.Honban ? 1 : 0,
				gomunashi: condition.Gomunashi ? 1 : 0,
				nakadashi: condition.Nakadashi ? 1 : 0,
				ferachio: condition.Ferachio ? 1 : 0,
				iramachio: condition.Iramachio ? 1 : 0,
			},
		})
		return createdCondition;
	}
	// #endregion Private methods

	
}


