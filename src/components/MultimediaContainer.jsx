import '../css/MultimediaContainer.css';

export function MultimediaContainer({ type, src, ...props }) {
	return (
		<div className='MultimediaContainer'>
			{type === 'video' ? (
				<iframe
					width='560'
					height='315'
					src={src}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				></iframe>
			) : (
				<img src={src} {...props} />
			)}
		</div>
	);
}
