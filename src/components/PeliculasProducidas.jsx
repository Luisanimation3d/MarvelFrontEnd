import { ProgressBar, ProgressBarContainer } from './ProgressBar';
import '../css/PeliculasProducidas.css';

export function PeliculasProducidas({ producidas = 250, meta = 500 }) {
	return (
		<div className='peliculasProducidasContainer'>
			<h3>Progreso de películas producidas</h3>
			<div className='progressContainer'>
				<span className='metaPeliculas'>
					{meta} Peliulas Meta de Producción
				</span>
				<div className='containtBar'>
					<ProgressBarContainer className='progressBarContainer'>
						<ProgressBar
							meta={meta}
							producidas={producidas}
							className='progressBar'
						/>
					</ProgressBarContainer>
					<span
						className='producidas'
						style={{
							marginLeft: `${(producidas / meta) * 100 - 10}%`,
							transition: 'all 2s ease-in-out',
							color: '#25aebd',
							wordWrap: 'break-word',
							display: 'block',
							width: '25%',
							marginTop: '10px',
						}}
					>
						{producidas} Peliulas Producidas
					</span>
				</div>
			</div>
		</div>
	);
}
