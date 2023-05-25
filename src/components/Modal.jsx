import { MdClose } from 'react-icons/md';
import { getURL } from '../getURL';
import { useFetch } from '../useFetch';
import {ComicsContainer} from './ComicsContainer'
import { ComicCard } from './ComicCard';
import '../css/Modal.css';

export function Modal({ infoCharacter, setToggleModal }) {
	const { id, name } = infoCharacter;
	const { url } = getURL(null, null, `/${id}/comics`);
	const { data, loading, error } = useFetch(url);
	console.log(data);
	// console.log(data[0]?.comics?.items[0]?.resourceURI+parameters)
	return (
		<>
			{loading ? (
				<h1 className='messageText loading'>Loading...</h1>
			) : error ? (
				<h1 className='messageText error'>{error}</h1>
			) : (
				<div className='modal'>
					<header>
						<h3>{name}</h3>
					</header>
					<button
						className='closeButton'
						onClick={(e) => setToggleModal(false)}
					>
						<MdClose />
					</button>
					<div className='modalContent'>
						<h4>Comics</h4>
						<ComicsContainer>
							{data?.map((item) => {
								return (
									<ComicCard
										key={item.id}
										name={item.title}
										resourceURI={
											item.thumbnail.path + '.' + item.thumbnail.extension
										}
									/>
								);
							})}
						</ComicsContainer>
					</div>
				</div>
			)}
		</>
	);
}
