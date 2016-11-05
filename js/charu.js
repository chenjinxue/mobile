
	// var a=document.createElement("div")
	// var c=document.createElement("div")
	// a.style.cssText="width:200px;height:300px;background:green;display:inline=block;"
	// c.style.cssText="width:200px;height:300px;background:black;display:inline=block;"
	// document.body.appendChild(a);
	// document.body.appendChild(c);
	// var b=document.getElementsByTagName("div")[3]
	// var d=document.getElementsByTagName("p")[0]
	// // a.setAttributeNode("aa");
	// var aa=document.createAttribute("aa");
	// aa.nodeValue="one";
	// a.setAttributeNode(aa);
	// console.log(a)
	// console.log(d.nodeType)
	// console.log(d.nodeName)
	// console.log(a);
	// b.appendChild(a);
	// document.body.insertBefore(c,d);
	// var e=c.nextSibling;
	// console.log(e)



// 	function getNext(obj){
// 	var next=obj.nextSibling;
// 	if(next==null){
// 		return false;
// 	}
//  		while(next.nodeType!=1){//除非为元素 否则继续next
		 
// 			next=next.nextSibling;
// 			if(next==null){
// 				return false;
// 			}
//  	}
	 
// 	return next;
// }

//     document.body.insertBefore(c,getNext(b))


// 	function getUp(obj){
// 	var UP=obj.previousSibling;
// 	if(UP==null){
// 		return false;
// 	}
//  		while(UP.nodeType!=1){//除非为元素 否则继续next
		 
// 			UP=UP.previousSibling;
// 			if(UP==null){
// 				return false;
// 			}
//  	}
	 
// 	return UP;
// }
    
    // document.body.insertBefore(c,getUp(d))
    
    function getprvbious(obj){
	var previous=obj.previousSibling;
	if(prvbious==null){
		return false;
	}
}
//  		while(!(previous.nodeType==3||(childs[i].nodeTpye==1||(childs[i].nodeTpye==3&& childs[i].nodeValue.replace(/^\s*|\s*$/g,""))))
//  		          {//除非为元素 否则继续next
		
// 			previous=previous.previousSibling;
// 			if(previous==null){
// 				return false;
// 			}
//  	}
	 
// 	return previous;
// }
//     // console.log(d.nodeType)
//     document.body.insertBefore(c,getprvbious(b))
// }



// insertBefore(newobj,obj,type)
// 将newobj插入到obj后面
// newobj  要插入的元素
// obj     插入的位置
// type   类型
//    true  元素节点
//    false 元素节点和有意义的文本

//    1.获取obj的下一个兄弟元素next
//    2.获取obj的父元素parent
//    3.next false 
//      parent.appendChild（newobj）
//    4.parent.insertBefore(newobj,next) 


function getChilds(parent,type){
	 var type=type||"a";
     var childs=parent.childNodes;
     //所有儿子
     var arr=[];
;     for(var i=0;i<childs.length;i++){
	if(type=="a"){
		if(childs[i].nodeType==1){
            arr.push(childs[i]);
     	}
	}
	else if(type=="b"){//元素+文本
          if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
            arr.push(childs[i]);
     	}
	}
     	
     }return arr;
}

	function getNext(obj,type){
	var type=type==undefined?true:type;	
	var next=obj.nextSibling;
	if (type=true) {
	if(next==null){
		return false;
	}
 		while(next.nodeType!=1){
		 
			next=next.nextSibling;
			if(next==null){
				return false;
			}
 	}
	 }else if (type=false) {
	 	if(next==null){
		return false;
	}
 		while(!(next.nodeTpye==1||(next.nodeTpye==3&& next.nodeValue.replace(/^\s*|\s*$/g,"")))){
		       
			next=next.nextSibling;
			if(next==null){
				return false;
			}
 	}
	 }
    return next;
}


	function getUp(obj,type){
	var type=type==undefined?true:type;	
	var up=obj.previousSibling;
	if (type=true) {
	if(up==null){
		return false;
	}
 		while(up.nodeType!=1){
		 
			up=up.previousSibling;
			if(up==null){
				return false;
			}
 	}
	 }else if (type=false) {
	 	if(up==null){
		return false;
	}
 		while(!(up.nodeType==1||(up.nodeType==3&& up.nodeValue.replace(/^\s*|\s*$/g,"")))){
		 
			up=up.previousSibling;
			if(up==null){
				return false;
			}
 	}
	 }
    return up;
}




	function insertAfter(newobj,obj,type){
	var next=getNext(obj,type);
	var parent=obj.parentNode;
	if(next){
		parent.insertBefore(newobj,next)
	} else{
		parent.appendChild(newobj)
 			}
 		};

  



function insertBefore(obj,beforeobj){
      var before=beforeobj;
      var parent=beforeobj.parentNode;
   parent.insertBefore(obj,before)
}


function insertAfter(obj,afterobj){
	var parent=afterobj.parentNode;
	var next=getNext(afterobj,"yes");
	if (!next) {
         parent.appendChild(obj);
	}else {
		parent.insertBefore(obj,next);
	}
}
function getFirst(parent){
	return getChilds(parent)[0];
}