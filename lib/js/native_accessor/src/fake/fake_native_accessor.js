function receive_message(string){
	var _native_accessor = native_accessor, message
	_native_accessor.process_message = process_message
	message = string;
	_native_accessor.receive_message(message)
}