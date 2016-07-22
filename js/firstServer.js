"use strict";
	angular.module('myApp',[])
		.service('$getJsonp1',function(){
			function setScript(url){
				var script = document.createElement('script');
				script.setAttribute('type','text/javascript');
				console.log(url);
				script.src = url;
				document.getElementsByTagName('body')[0].appendChild(script);
				return this;
			};
			function setUrl(url,_key,_value){
				_key = encodeURIComponent(_key);
				_value = encodeURIComponent(_value);
				var i = 0;
				url.replace(/(\?)/g,function(all){
					i++;
				});
				if(i == 0){

					url = url+'?'+_key + '=' + _value;
				}else{
					url = url + '&' + _key + '=' + _value;
				};
				return url;
			};

			return {
				setScript : setScript,
				setUrl : setUrl
			};
		});