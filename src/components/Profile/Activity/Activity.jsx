import c from './Activity.module.scss';

export const Activity = () => {
	return(
		<div className={c.activity__container}>
			<h3 className={c.activity__title}>Recent activity</h3>
			<div className={c.activity__content}>
				<div className={c.activity__item}>
					<div className={c.activity__post}>
						<span>Кот Вареникович</span> posted a new comment
					</div>
					<div className={c.activity__time}>
						16 hours <span>ago</span>
					</div>
				</div>
				<div className={c.activity__item}>
					<div className={c.activity__post}>
						<span>Кот Вареникович</span> posted a new comment
					</div>
					<div className={c.activity__time}>
						16 hours <span>ago</span>
					</div>
				</div>
				<div className={c.activity__item}>
					<div className={c.activity__post}>
						<span>Кот Вареникович</span> posted a new comment
					</div>
					<div className={c.activity__time}>
						16 hours <span>ago</span>
					</div>
				</div>
			</div>
		</div>
	)
}