/* global SockJS, Stomp */

export function socketFactory() {
	return {
		buildSocket: function(url) {
			var socket = new SockJS(url);
			var stompClient = Stomp.over(socket);
			return {
				connect: function(callback, errorCallback) {
					stompClient.connect({}, callback, errorCallback);
				},
				listen: function(url, headers, callback) {
					stompClient.subscribe(url, headers, callback);
				},
				send: function(url, headers, callback) {
					stompClient.send(url, headers, callback);
				}
			}
		}
	};
}
