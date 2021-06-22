import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetCoords, /* actRemoveCoords */ } from './store/actions/coords-action';
// import {  } from './store/reducers/index';

const App = () => {
	const dispatch = useDispatch()
	const { lat, lon } = useSelector(state => state.coords)
	const onClick = useCallback(e => {
		dispatch(actGetCoords())
	}, [dispatch])
	const onClickRemove = useCallback(e => {
		// dispatch(actRemoveCoords())
	}, [dispatch])

	return (
		<div>
			<div>
				<div>lat: { lat }</div>
				<div>lon: { lon }</div>
			</div>
			<button onClick={ onClick }>좌표요청</button>
			<button onClick={ onClickRemove }>좌표지우기</button>
		</div>
	);
}

export default App;
