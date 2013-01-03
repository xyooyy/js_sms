var native_accessor = {

		process_message:function(message){

		},

		send_sms:function(success_callback, error_callback, message){
			success_callback.call(null)
		},

		receive_message:function(message){
			if(typeof this.process_message === 'function'){
				this.process_message(message)	
			}
		}

}