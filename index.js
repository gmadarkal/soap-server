var http = require('http');
var soap = require('soap');

var myService = {
	PaymentService: {
		PaymentPort: {
			InitiatePayment: function(args) {
				console.log(args);
				const probability = Math.random();
				console.log(probability);
				if (probability < 0.9) {
					return {
						result: true
					};
				}
				return {
					result: false
				};
			},
		}
	}
};

var xml = require('fs').readFileSync('g_payment.wsdl', 'utf8');
server = http.createServer(function(request,response) {
	response.end("404: Not Found: " + request.url);
});

server.listen(8000);
soap.listen(server, '/paymentservice', myService, xml, function(){
    console.log('server initialized');
});