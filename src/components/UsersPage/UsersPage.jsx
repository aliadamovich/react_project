import c from './UsersPage.module.scss';
import { UsersContainer } from './UsersContainer';
import { Search } from '../Search/Search';
import React from 'react';

export const UsersPage = () => {
	return(
		<div className={c.users}>
			<div className={c.users__container}>
				<div className={c.users__content}>

					<Search />
					<div className={c.users__cards}>
						<UsersContainer />
					</div>

					<div className={c.sideblock}>
				</div>

				</div>
			</div>
		</div>
	)
}

