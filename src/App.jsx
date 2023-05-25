import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFetch } from './useFetch';
import { getURL } from './getURL';
import { Card } from './components/card';
import { CardsContainer } from './components/CardsContainer';
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import './css/App.css';
import { Header } from './components/Header';
import { FirstSection } from './components/FirstSection';
import { PeliculasProducidas } from './components/PeliculasProducidas';
import { MultimediaContainer } from './components/MultimediaContainer';
import { ModalContainer } from './components/ModalContainer';
import { Modal } from './components/Modal';

export function App() {
	const [page, setPage] = useState(1);
	const offset = (page - 1) * 5;
	const {url} = getURL(offset, 5, null);
	const { data, loading, error, setDataUrl } = useFetch(url);
	const [infoCharacter,setinfoCharacter] = useState(0)
	const [toggleModal, setToggleModal] = useState(false)
	useEffect(() => {
		setDataUrl(url);
	}, [page]);
	return (
		<div className='container'>
			<Header />
			<FirstSection className='firstSection'>
				<PeliculasProducidas producidas={400} meta={500} />
				<MultimediaContainer
					type='video'
					src='https://www.youtube.com/embed/u80gfKQpAUA'
				/>
				<MultimediaContainer
					type='image'
					src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
				/>
			</FirstSection>
			<CardsContainer className='cardContainer'>
				{loading ? (
					<h1 className='messageText loading'>Loading...</h1>
				) : error ? (
					<h1 className='messageText error'>{error}</h1>
				) : (
					data.map((item) => {
						return (
							<Card
								onClick={(e) => {
									setinfoCharacter({id:item.id,name:item.name})
									setToggleModal(true)
								}}
								key={item.id}
								name={item.name}
								image={item.thumbnail.path + '.' + item.thumbnail.extension}
								comicsCount={item.comics.available}
								moviesCount={item.series.available}
							/>
						);
					})
				)}
			</CardsContainer>
			<div className='paginationContainer'>
				<button
					onClick={(e) => page > 1 && setPage(page - 1)}
					className={page == 1 ? 'disableButton' : ''}
				>
					<MdArrowBackIosNew />
				</button>
				<span className='paginationNumbers'>{page} / 5</span>
				<button
					onClick={(e) => page < 5 && setPage(page + 1)}
					className={page == 5 ? 'disableButton' : ''}
				>
					<MdOutlineArrowForwardIos />
				</button>
			</div>
			{
				toggleModal && createPortal(
					<ModalContainer><Modal infoCharacter={infoCharacter} setToggleModal={setToggleModal}/></ModalContainer>,
					document.getElementById('modal')
				)
			}
		</div>
	);
}
