import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetCoords } from './store/actions/coords-action'; // 비동기 액션
import { actGetDaily } from './store/actions/daily-action'; 	// 비동기 액션
import coordsReducer from './store/reducers/coords-reducer'; 	// sync 액션

const App = () => {
	const dispatch = useDispatch()
	
	const { lat, lon } = useSelector(state => state.coords)
	const { data: daily } = useSelector(state => state.daily)

	const onClick = useCallback(e => {
		dispatch(actGetCoords('data'))
	}, [dispatch])
	
	const onClickRemove = useCallback(e => {
		dispatch(coordsReducer.actions.actRemoveCoords())
	}, [dispatch])

	const onDailyClick = useCallback(e => {
		dispatch(actGetDaily())
	}, [dispatch])

	return (
		<div>
			<div>
				<div>lat: { lat }</div>
				<div>lon: { lon }</div>
			</div>
			<button onClick={ onClick }>좌표요청</button>
			<button onClick={ onClickRemove }>좌표지우기</button>
			<hr />
			<div>
				Temp: { daily ? daily.main.temp : '' }도
			</div>
			<button onClick={ onDailyClick }>날씨요청</button>
		</div>
	);
}

export default App;
