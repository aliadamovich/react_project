import c from './Posts.module.scss';

export const Posts = () => {
	return (
		<div className={`${c.posts} ${c.container}`}>
			<div>Photos</div>
			<div>wall</div>
			<div>activity</div>
		</div>
	)
}