const myMiddleware = (dispatch) => (next) => (action) => {
	console.log('미들웨어')
	next(action)
}

export { myMiddleware }
