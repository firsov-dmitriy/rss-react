import axios from 'axios';
// import { Dispatch } from 'react';
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { CardAction, CardActionTypes, CardState } from '../types/card';
// import { dataChatacters, dataFetch } from '../types/types';

// export default class serviceMorty {
//   async getDataCharacters(url: string) {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Fetch error chatacters');
//     }
//     return await response.json();
//   }
//   async getCharacter(name: string) {
//     for (let i = 0; i < 3; i++) {
//       const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
//       if (!response.ok) {
//         throw new Error('Fetch error chatacters');
//       }
//       return await response.json();
//     }
//   }
//   getCard(page = 1, name = '', status = '') {
//     return async (dispatch: Dispatch<CardAction> | ThunkDispatch<CardState, void, CardAction>) => {
//       try {
//         dispatch({ type: CardActionTypes.FETCH_CARD });

//         const response = await axios.get<dataFetch>(
//           `https://rickandmortyapi.com/api/character/${name !== '' ? '?name=' + name : ''}${
//             status !== '' ? '&status=' + status : ''
//           }`,
//           {
//             params: { page: page },
//           }
//         );

//         dispatch({ type: CardActionTypes.FETCH_CARD_SUCCESS, payload: response.data.results });
//         dispatch({ type: CardActionTypes.SET_CARD_LIMIT, payload: response.data.info.pages });
//       } catch (e) {
//         dispatch({ type: CardActionTypes.FETCH_CARD_ERROR, payload: 'Error fetch data' });
//       }
//     };
//   }
//   setCardPage(page: number): CardAction {
//     return { type: CardActionTypes.SET_CARD_PAGE, payload: page };
//   }
// }
