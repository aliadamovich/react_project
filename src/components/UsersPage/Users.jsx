import c from './Users.module.scss';
import axios from 'axios';
import userPhoto from './../images/user.png';
import React from 'react';
import { Loader } from '../common/Loader/Loader';

export class Users extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
		.then(resp => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(resp.data.items);
			this.props.getUsersQuantity(resp.data.totalCount)
		})
	}

	onLoadClick() {
		this.props.loadMoreUsers();
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
			.then(resp => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(resp.data.items);
			})
	}
	render() {
		// let pages = [];
		// let pagesQ = Math.ceil(this.props.totalUsers / this.props.usersOnPage);

		// for (let i = 1; i <= pagesQ; i++) {
		// 	pages.push(i)
			
		// }
		return (
			<div className={c.users__wrap}>
				{ this.props.isFetching ? <Loader /> : null}
				<div className={c.users__body}>
	
					{
	
						this.props.users.map(u => <div className={`${c.users__card} ${c.card}`} key={u.id}>
							<div className={c.card__image}>
								<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
							</div>
							<div className={c.card__name}>{u.name}</div>
							<div className={c.card__location}>
								<span className={c.card__city}>{'u.location.city'}, </span>
								<span className={c.card__country}>{'u.location.country'}</span>
							</div>
							<div className={c.card__status}>{u.status}</div>
							<button onClick={() => { this.props.toggleFollow(u.id) }}
								className={u.followed ? c.followedBtn : c.unfollowedBtn}>
								{u.followed ? 'Unfollow' : 'Follow'}
							</button>
						</div>)

					}
				</div>
				<button onClick={() => { this.onLoadClick() }} className={c.users__load}>Load more</button>
			</div>
		)
	}
}