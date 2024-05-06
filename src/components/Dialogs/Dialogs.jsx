import { PostCreate } from '../Profile/Feed/Feed';
import { DialogItem } from './DialogItem/DialogItem';
import c from './Dialogs.module.scss';
import { Messages } from './Messages/Messages';


export const Dialogs = (props) => {

	const dialogsArray = props.dUsers
	.map((d, index) => <DialogItem name={d.name} id={d.id} nickname={d.username} photos={props.dPhotos[index]} />)
	
	const messagesArray = props.dMessages.map(m => <Messages text={m.name} photos={props.dPhotos[0]} />)
	
	return (
		<div className={c.container}>
			<div className={c.content}>
				<div className={c.search}>
					<input type="text" name="" id="" placeholder='Search'/>
					<div className={c.search__icon}>
						<svg version="1.1"  
						viewBox="0 0 129 129" 
						enable-background="new 0 0 129 129">
							<g>
							<path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
							</g>
						</svg>
					</div>
				</div>
				<div className={c.body}>
					<div className={c.body__dialogs}>

						{dialogsArray}
					</div>
					<div className={c.body__messages}>
						{messagesArray}
						<PostCreate holder="Type message..." buttonText="Send" />
					</div>
				</div>
			</div>
		</div>
	)
}

