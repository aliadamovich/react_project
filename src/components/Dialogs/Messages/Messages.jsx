import c from './Messages.module.scss';

export const Messages = (props) => {
	return(
		<div className={c.body__message}>
			<div className={c.message__who}>
				<div className={c.message__avatar}>
					<img src="https://www.shutterstock.com/image-photo/funny-british-shorthair-cat-portrait-600nw-2097266809.jpg" alt="avatar" />
				</div>
				<div className={c.message__name}>c</div>
			</div>
			<div className={c.message__text}>{props.text}</div>
		</div>
	)
}