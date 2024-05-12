import { PostTitle } from '../Feed/MyPost/MyPost';
import c from './Activity.module.scss';

export const Activity = (props) => {
	let state = props.store.getState();
	const latestPosts = state.profilePage.posts.slice(0, 3).map(p => <PostTitle type={p.type} />)
	// console.log(props)
	return(
		<div className={c.activity__container}>
			<h3 className={c.activity__title}>Recent activity</h3>
			<div className={c.activity__content}>
			{latestPosts}
			</div>
		</div>
	)
}