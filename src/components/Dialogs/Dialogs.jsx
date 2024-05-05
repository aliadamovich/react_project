import { DialogItem } from './DialogItem/DialogItem';
import c from './Dialogs.module.scss';
import { users } from '../../index';
import { messages } from '../../index';
import { Messages } from './Messages/Messages';

export const Dialogs = (props) => {
	
	const dialogsArray = users.map(d => <DialogItem name={d.name} id={d.id} nickname={d.username} />)
	const messagesArray = messages.map(m => <Messages text= {m.name}/>)
	return (
		<div className={c.container}>
			<div className={c.content}>
				<div className={c.search}>Search</div>
				<div className={c.body}>
					<div className={c.body__dialogs}>

						{dialogsArray}
						
					</div>
					<div className={c.body__messages}>
						{messagesArray}
					</div>
				</div>
			</div>
		</div>
	)
}

