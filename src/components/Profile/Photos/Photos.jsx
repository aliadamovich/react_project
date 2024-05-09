import c from './Photos.module.scss';


export const Photos = (props) => {
	console.log(props)
	const photoArray = props.photoGreed.map(greed => <PhotoGreed src={greed.photo}/>)
	return (
		<div className={c.photos__container}>
			<h3 className={c.photos__title}>My photos</h3>
			<div className={c.photos__grid}>
				{photoArray}
			</div>
		</div>
	)
}

const PhotoGreed = (props) => {
	return(
		<div className={c.photos__item}>
			<img src={props.src} alt="photo grid" />
		</div>
	)
}