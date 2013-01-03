describe("Native Access", function(){

	var success_callback, error_callback, is_success_callback_called
	
	beforeEach(function(){
		success_callback = function(){
			is_success_callback_called = true
		};
		error_callback=function(){
			is_success_callback_called = false
		};
	})

	it("should call success callback when send sms", function(){
		var message = 'y'
		native_accessor.send_sms(success_callback, error_callback, message)
		expect(is_success_callback_called).toBe(true)
	});

	it("should pass message to message processor when receive a message", function(){
		var message = "去不去吃饭？\n是回复Y，否回复N"
		spyOn(native_accessor, 'process_message')
		native_accessor.receive_message(message)
		expect(native_accessor.process_message).toHaveBeenCalledWith(message)
	});

});