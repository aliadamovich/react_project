import c from './Users.module.scss';
import React from 'react';

export const Users = (props) => {
	// debugger;
	// function onBtnClick(userId) {
	// 	console.log(userId)
	// 	props.toggleFollow(userId);
	// }
	return (
		<div className={c.users__body}>
			{

				props.users.map(u => <div className={`${c.users__card} ${c.card}`} key={u.id}>
					<div className={c.card__image}>
						<img src={u.photoUrl} alt="" />
					</div>
					<div className={c.card__name}>{u.name}</div>
					<div className={c.card__location}>
						<span className={c.card__city}>{u.location.city}, </span>
						<span className={c.card__country}>{u.location.country}</span>
					</div>
					<div className={c.card__status}>{u.status}</div>
					<button onClick={() => { props.toggleFollow(u.id) }}>
						{u.isFollowed ? 'Follow' : 'Unfollow'}
					</button>
				</div>)

			}
		</div>
	)
}