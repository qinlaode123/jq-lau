(function(){
	//设置语言
	var language={
	zh:{
		yan:'jq多语言',
		haha:'语言',
		youyou:'切换',
	},
	en:{
		yan:'jq duo yu yan',
		haha:'language',
		youyou:'switch',
	}

}
//获取当前语言
//
// var lang=getstore('lang');
//    console.log(lang)
//    if(lang===null){
//     lang='zh-CN'
//    }
//console.log($('select').val());
var lang=$('select').val();
console.log(lang)
$('select').click(function(){

	 lang=$('select').val();
	 //location.reload();
	console.log(lang)
	$('[data-lau]').each(function(e){
		console.log(lang)
		var name=$(this).data('lau')

		
		if(lang=='zh'){
			
			$(this).text(language.zh[name])
		}else{
			
			$(this).text(language.en[name])
		}
	});
})


   //把语言赋值上去
	
	
})();

