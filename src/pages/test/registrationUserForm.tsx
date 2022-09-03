import { ApiContext } from 'types'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as UserTypes from 'types/userTypes';
import * as Api from '../../utils/api'

export default function App() {
	const { register, handleSubmit, formState: { errors }, } = useForm<UserTypes.UserData>()
	const onSubmit: SubmitHandler<UserTypes.UserData> = (data) => {
		//console.log(data)
		// ダミーAPI呼び出し
    const apiContext: ApiContext = {
      apiRootUrl: process.env.SELF_API_URL || 'http://localhost:3000/api',
    }
		Api.RegistrationUser(apiContext, data)
			.then(result => {
				console.log(result);
			})
	}
	return (
		<>
			<a href="/">戻る</a>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('Name', { required: true })} placeholder="名前" />
				{errors.Name && <div>名前を入力してください</div>}
				<input {...register('Password', { required: true })} placeholder="名字" />
				{errors.Password && <div>パスワードを入力してください</div>}
				<select {...register('Type', { required: true })}>
					<option value="">選択...</option>
					<option value="0">女優</option>
					<option value="1">メーカー</option>
				</select>
				{errors.Type && <div>ユーザタイプを選択してください</div>}
				<select {...register('IsAdmin', { required: true })}>
					<option value="">選択...</option>
					<option value="0">なし</option>
					<option value="1">あり</option>
				</select>
				{errors.IsAdmin && <div>管理者権限を選択してください</div>}
				<select {...register('IsDeleted', { required: true })}>
					<option value="">選択...</option>
					<option value="0">なし</option>
					<option value="1">削除</option>
				</select>
				{errors.IsDeleted && <div>ユーザ削除状態を選択してください</div>}
				<input type="submit" />
			</form>
		</>
	)
}