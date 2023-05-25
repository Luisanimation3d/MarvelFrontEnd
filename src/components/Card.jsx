import '../css/Card.css';

export const Card = ({ name, image, comicsCount, moviesCount, ...props }) => {
	return (
		<div className='cardItem' {...props}>
			<div className='nameCharacter'>
				<h3>{name}</h3>
			</div>
			<div className='imageContainer'>
				<img src={image} alt='some' />
			</div>
			<div className='infoContainer'>
				<div className='info'>
					Comics: <span>{comicsCount}</span>
				</div>
				<div className='info'>
					Películas: <span>{moviesCount}</span>
				</div>
			</div>
		</div>
	);
};
