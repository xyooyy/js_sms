function MoodeSMSPlugxin() {

}

MoodeSMSPlugxin.prototype.send_sms = function (success_callback, error_callback, data_array) {
    success_callback.call(null);
};

MoodeSMSPlugxin.prototype.add_valid_receivers = function (success_callback, error_callback, data_array) {
    success_callback.call(null);
};

MoodeSMSPlugxin.prototype.save_end_survey = function (success_callback, error_callback, data_array) {
    var end_surveys_item = localStorage.getItem("end_surveys"), end_surveys_json;
    if (end_surveys_item) {
        end_surveys_json = JSON.parse(end_surveys_item);
    } else {
        end_surveys_json = {
            surveys:[]
        };
    }
    end_surveys_json.surveys = end_surveys_json.surveys.concat(data_array);
    end_surveys_item = JSON.stringify(end_surveys_json);
    localStorage.setItem("end_surveys", end_surveys_item);
    success_callback.call(null);
};

MoodeSMSPlugxin.prototype.query_surveys = function (success_callback, error_callback, data_array) {
    var end_surveys_item = local_storage.getItem("end_surveys"), end_surveys_json;
    if (end_surveys_item) {
        end_surveys_json = JSON.parse(end_surveys_item);
    } else {
        end_surveys_json = {
            surveys:[]
        };
    }
    success_callback.call(null, JSON.stringify(end_surveys_json));
};

MoodeSMSPlugxin.prototype.exec = function (success_callback, error_callback, action, data_array) {
    if (typeof this[action] === 'function') {
        this[action].call(this, success_callback, error_callback, data_array);
    }
};

function MockedCordova() {
    this.plugins_map = {
        "MoodeSMS":new MoodeSMSPlugxin()
    }
}

MockedCordova.prototype.exec = function (success_callback, error_callback, plugin_name, action, data_array) {
    this.plugins_map[plugin_name].exec(success_callback, error_callback, action, data_array);
};