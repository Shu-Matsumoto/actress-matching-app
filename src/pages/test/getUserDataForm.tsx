import { ApiContext } from 'types'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as UserTypes from 'types/userTypes';
import * as Api from '../../utils/api'

export default function App() {
	const { register, handleSubmit, formState: { errors }, } = useForm<{id: number}>()
	const onSubmit: SubmitHandler<{id: number}> = (data) => {
		//console.log(data);
    const apiContext: ApiContext = {
      apiRootUrl: process.env.SELF_API_URL || 'http://localhost:3000/api',
    }
		Api.GetActorProfile(apiContext, data.id)
			.then(result => {
				console.log(result);
			})
	}

	return (
		<>
			<a href="/">戻る</a>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('id', { required: true })} placeholder="ID" />
				{errors.id && <div>IDを入力してください</div>}
				<input type="submit" />
			</form>
		</>
	)
}