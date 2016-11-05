/*
	一、getClass(classname)   获取指定类名元素
		classname   指定要获取元素的classname
		思路:
		1、判断浏览器是否支持，若支持，使用原生函数，不支持，进行下一步；
	 	  document.getElementsByClassName
		2、获取所有的元素；
		3、元素的类名是否等于指定类名，若符合条件，则放在一个数组中；
		4、返回数组。
*/
	function getClass(classname){
		if(document.getElementsByClassName){
			return document.getElementsByClassName(classname);
		}
		else{
			var all=document.getElementsByTagName("*");
			var arr=[];
			for(var i=0;i<all.length;i++){
				if(all[i].className==classname){
					arr.push(all[i]);
				}
			}
		}
		return arr;
	}

/*
	二、getParent(classname,range)   获得名为range的classname类名元素
*/
	function getParent(classname,range){
		range=range||document;
		// alert(classname);
		if(document.getElementsByClassName){
		// alert(range);
			return range.getElementsByClassName(classname);
		}
		else{
			var all=range.getElementsByTagName("*");
			var arr=[];
			for(var i=0;i<all.length;i++){
				//当前元素的className是否包含传入的classname
				if(check(all[i].className,classname)){
					arr.push(all[i]);
				}
			}return arr;
		}	
	}
		//当前元素的className是否包含传入的classname
function check(classstr,classname){
	var arr=classstr.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
		return false;
}

/*  三、使用$符号进行元素的选择
	思路：
	1、初始化参数range
	2、把name去空
	3、判断第一个字符
	4、获取元素
	用法：
	$(".one") 获取指定的类名的元素
	$("#one") 获得指定ID名的元素
	$("div")  获得指定标签名的元素

	trim():用来去空    //有兼容性问题 ，用正则解决   //以后讲
		eg: var str="  abc";
			alert(str.trim().length);
	判断range
	1、range=range||document
	2、range=range===undefined?document:range
	3、range=range?range:document
*/
function $(name,range){
	range=range||document;
	// name=name.trim();    ////ie6中不支持
	if(name.charAt(0)=="#"){
		return range.getElementById(name.substring(1));
	}else	if(name.charAt(0)=="."){
		return getParent(name.substring(1),range);
	}else  if(/^[a-z][a-z1-6]{0,8}$/.test(name)){
		return range.getElementsByTagName(name);
	}
}

/*
	getContent(obj,value)
	//获取或设置obj中的内容
	考虑兼容性

*/
 function getContent(obj,value){
 	if(value){
 		if(obj.innerText){
 			obj.innerText=value;
 		}else{
 			obj.TextContent=value;
 		}
 	}else{
 		if(obj.innerText){
 			return obj.innerText;
 		}else{
 			return obj.TextContent;
 		}
 	}
 }


 /************获取属性
	getStyle(obj,attr)    获取指定元素的样式
	obj  指定对象
	attr 样式属性
1、判断浏览器是否支持；
2、返回属性值
 *****************/
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
	if(parent.contains){
		return parent.contains(child) && parent!=child;
	}else{
		return (parent.compareDocumentPosition(child)===20);
	}
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
	if(getEvent(e).type=="mouseover"){
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	}else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
	}
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
	if(overfun){
		obj.onmouseover=function  (e) {
			if(checkHover(e,obj)){
				overfun.call(obj,[e]);
			}
		}
	}
	if(outfun){
		obj.onmouseout=function  (e) {
			if(checkHover(e,obj)){
				outfun.call(obj,[e]);
			}
		}
	}
}
function getEvent (e) {
	return e||window.event;
}






window.onload=function(){
	var it=$(".it");
	var hidden=$(".xxk");
	var head=$(".denglu1")
	var hidden1=$(".dlydsc")
	var head1=$(".denglu2")
	var hidden2=$(".dlydsc1")


	for(var i=0;i<it.length;i++){
		it[i].index=i;
		it[i].onmouseover=function(){
			hidden[this.index].style.display="block";
		}
		it[i].onmouseout=function(){
			hidden[this.index].style.display="none";
		}
	}	
	for(var i=0;i<head.length;i++){	
		head[i].index1=i;
		head[i].onmouseover=function(){
			hidden1[this.index1].style.display="block";
		}
		head[i].onmouseout=function(){
			hidden1[this.index1].style.display="none";
		}
	}
	for(var i=0;i<head1.length;i++){	
		head1[i].index2=i;
		head1[i].onmouseover=function(){
			hidden2[this.index2].style.display="block";
		}
		head1[i].onmouseout=function(){
			hidden2[this.index2].style.display="none";
		}
	}


	var imgs=$("a",$(".crv")[0]);
	var lis=$("li",$(".bens")[0]);
	var mw=parseInt("740")
   
	/*页面状态初始化*/
	imgs[0].style.zIndex=10;
	lis[0].className="hot";
   /*获取当前图片下标*/
    var now=0;next=0
	var t=setInterval(move,2000);
	for(i=0;i<imgs.length;i++){
		if (i==0) {continue};
		imgs[i].style.left=mw+"px";
	}
	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		imgs[next].style.left=mw+"px";
		animate(imgs[now],{left:-mw});
		animate(imgs[next],{left:0},function(){flag=true});
		lis[now].className="white";
		lis[next].className="hot";
		now=next;
		}
	// 	imgs[now].style.zIndex=10;
	// 	lis[now].className="hot";
	// }//自动轮播

 for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		if(now>this.index){
			imgs[this.index].style.left=-mw+"px";
			animate(imgs[now],{left:mw});
			animate(imgs[this.index],{left:0});
		}else if(now<this.index){
			imgs[this.index].style.left=mw+"px";
			animate(imgs[now],{left:-mw});
			animate(imgs[this.index],{left:0});
		}else {
			return;
		}
		lis[now].className="white";
		lis[this.index].className="hot";
		now=this.index;
		next=this.index;//从选取处继续
	}
}
  //选项卡转换
  for(var i=0;i<imgs.length;i++){
    imgs[i].onmouseover=function(){
 	clearInterval(t);
   }
     imgs[i].onmouseout=function(){
 	t=setInterval(move,2000);
   }
}//鼠标移入暂停 移除恢复


  var  btnr=$(".zhuazir")[0];
   var  btnl=$(".zhuazil")[0];
  btnr.onclick=function(){

  	move();
  }
  btnl.onclick=function(){
		now--;
		if(now<0){
			now=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=5;
			lis[i].className="";
		}
		imgs[now].style.zIndex=10;
		lis[now].className="hot";
	  }//左右爪子
     var flag=true;
	 btnr.onclick=function(){
        if (flag) {
        	move();
        	flag=false;
        }
	 }

	  btnl.onclick=function(){
	  	if (flag) {
		next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-mw+"px";
		animate(imgs[now],{left:mw});
		animate(imgs[next],{left:0},function(){flag=true});
		lis[now].className="white";
		lis[next].className="hot";
		now=next;
	    flag=false;}
}

	for(var i=0;i<imgs.length;i++){
    btnl.onmouseover=function(){
 	clearInterval(t);
   }
     btnl.onmouseout=function(){
 	t=setInterval(move,2000);
   }
  }



    var xus=$(".xu")[0];
	var as=$("img",xus);
	var images=$(".xu")[0];
    var leftbtn=$("#lunbo0");
	var rightbtn=$("#lunbo1");
	var aw=parseInt("280");
	var b=setInterval(move1,2000)
    function  move1(){
	animate(images,{left:-280},600,function(){
      var first=getFirst(images);
      images.appendChild(first);
	  images.style.left="0px";
	  flag=true;
	})
  }
      //移入移出
	images.onmouseover=function(){
        clearInterval(b);
   }
    images.onmouseout=function(){
        b=setInterval(move1,2000)
   }
			//左右点击
         var flag=true;
         leftbtn.onclick=function(){
		 if(flag){
		  flag=false;
		  moveL();}
								   
          }
          rightbtn.onclick=function(){
          if(flag){
			   flag=false;
		     move1();}
		     
               } 
     function moveL(){
       var first=getfistChild(rool);
       var last=getlastChild(rool);
       rool.insertBefore(last,first);
       rool.style.left=-aw+"px";
       animate(rool,{left:0},function(){flag=true});
          }


         
          $(document).ready(function(){
           console.log($("img.lazy").length)
          	$("img.lazy").lazyload({
    			// threshold : 200
                });
          })
}






