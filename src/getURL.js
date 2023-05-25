import { PUBLIC_KEY, PRIVATE_KEY } from './keys';
import { MD5 } from 'crypto-js';

export function getURL(offset, limit, stringParameters) {
	const timestamp = new Date().getTime().toString();
	const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();

	const url = stringParameters
		? `https://gateway.marvel.com/v1/public/characters/${stringParameters}?apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`
		: `https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`;
	return {
		url
	};
}
