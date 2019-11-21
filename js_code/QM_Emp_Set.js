var app = new Vue({
    el: '#app',
    data: {
        file_type_sel: '',
		file_type_list: [],
    },
	methods: {
		axios_post: function(url, param) {
			return axios({
			  method: 'post',
			  url: axios_request.base_url + url,
			  data: param
			});
		},
		// 查詢文件類型list
		query_file_type_list: function() {
			var _self = this;
			var url = "AuditorSet/queryFileTypeList.x";
			var param = {};
			_self.axios_post(url, param).then(function(response) {
				var result = response.data;
				if(result.code == "1") {
					_self.file_type_list = result.t;
					if(_self.file_type_list.length != 0) {
						_self.file_type_sel = _self.file_type_list[0].doc_type_name;
					}
				} else {
					alert(result.msg);
				}
			});
		}
	},
	created: function() {
		var _self = this;
		_self.query_file_type_list();
	}
});