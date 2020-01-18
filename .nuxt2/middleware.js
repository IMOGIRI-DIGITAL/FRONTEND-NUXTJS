const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['payment'] = require('../middleware/payment.js')
middleware['payment'] = middleware['payment'].default || middleware['payment']

middleware['postRequestHandler'] = require('../middleware/postRequestHandler.js')
middleware['postRequestHandler'] = middleware['postRequestHandler'].default || middleware['postRequestHandler']

export default middleware
