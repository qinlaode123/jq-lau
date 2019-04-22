# jq-lau
jQuery多语言切换

#线上展示效果：http://jqlau.sjfaze.com/

在jq-lau.js中：
```js
var language={
//中文内容
	zh:{
		yan:'jq多语言', 
		haha:'语言',
		youyou:'切换',
	},
 //英文内容
	en:{
		yan:'jq duo yu yan',
		haha:'language',
		youyou:'switch',
	}
  ```
在index.html中：     
```html 
 <!--添加自定义data-lau属性：属性名为在jq-lau.js定义好的language的 haha-->
  <h1 data-lau="haha">语言</h1> 
 <!--添加自定义data-lau属性：属性名为在jq-lau.js定义好的language的 youyou-->
  <span data-lau='youyou'>切换</span> 
```

