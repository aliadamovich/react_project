import { MyPost } from './MyPost/MyPost';
import c from './Feed.module.scss';

export const Feed = () => {
	return (
		<div className={c.posts}>
			<MyPost message="Хозяйка не дает кушоц..." time="14 hours, 36 minutes" number="3"/>
			<MyPost message="Обожрался шерсти...Блевал" time="1 day" number="19"/>
		</div>
	)
}