$(function(){


	var aa=jQuery.noConflict();
    // // aa(function() {
    aa("img").lazyload({
        threshold:300,
        event:'scroll',
        effect:'fadeIn',
    });
	   
	 	var lunbo=$('#banner-a');
	 	var lefta=$('.lunbo-left')[0];
	 	var righta=$('.lunbo-right')[0];
	 	
        var obj=$('.banner-aa')[0];
	 	var box=$('.img-lis')[0];
	 	
	 	var widtha=parseInt(getStyle($('.img-lis')[0],"width"));
        // console.log(width)
	 	var q=setInterval(move,1800)
	 	function move(){
	 		    animate(obj,{left:-widtha},1000,function(){
	 			var imgfirst=getFirst(obj);
	 			// console.log(imgfirst);
	 			obj.appendChild(imgfirst)
	 			obj.style.left=0+"px";
	 		})

	 	}
        lunbo.onmouseover=function(){
        	clearInterval(q)
        }
        lunbo.onmouseout=function(){
        	q=setInterval(move,1800)
	    }
        righta.onclick=function(){
        	move()
        }
        lefta.onclick=function(){
        	var last=getLast(obj);
        	// 框最后一张图
		 	var first=getFirst(obj);
		 	// 获得第一张图
		 	insertBefore(last,first);
		 	//     插入的对象 之前的对象           最后一张放到第一张的位置
		 	obj.style.left=-widtha+'px';

		 	animate(obj,{left:0},900)
        } 








    var imgs=getClass('pic');
	var list=getClass('circle-li');
	var box=document.getElementById('banner');
	var width=parseInt(getStyle(banner,"width"));
	var Left=getClass('bannerleft')[0];
	var right=getClass('bannerright')[0];
	var now=0;//当前第一张
	var next=0;//第二张
	var flag=true;
	var t=setInterval(fun,1500);//时间函数
	function fun(){
		next=now+1;//下一张=当前第一张+1
		if(next>=imgs.length){//当大于图片的长度时，再返回第一张；
			next=0;
		}
		imgs[next].style.left=width+'px';//让下一张在当前的图片后等待
		
		animate(imgs[now],{left:-width},300);//让当前图片向左移出当前位置
		animate(imgs[next],{left:0},300);//让下一张图片移到当前位置
		list[now].style.background='#ccc';//让当前图片所对应的小点变回默认色
		list[next].style.background='red';//下一张就是默认的小点的颜色
		now=next;
	}

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(fun,1500)
	}
	right.onclick=function(){
		fun();
	}
	Left.onclick=function(){
		next=now-1;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-width+'px';
		animate(imgs[now],{left:width},300);
		animate(imgs[next],{left:0},300);
		list[now].style.background='#ccc';
		list[next].style.background='red';
		now=next;
	}
	for(i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onclick=function(){
			if(this.index>now){
				imgs[this.index].style.left=width+'px';
				animate(imgs[now],{left:-width},300);
			}else if(this.index<now){
				imgs[this.index].style.left=-width+'px';
				animate(imgs[now],{left:width},300);
			}
			animate(imgs[this.index],{left:0},300);
			list[now].style.background='#ccc';
			list[this.index].style.background='red';
			now=this.index;
		}
	}
    





    
// 顶部导航
var boxa=$(".duowenzi-a")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".duowenzi-a-b")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#ccc"
			var ewma=$(".duowenzi-a-b")[0]
			ewma.style.display="none"
		}
var boxa=$(".duowenzi-b")[0]
	
		boxa.onmouseover=function(){

			this.style.background="#fff"
			var ewma=$(".duowenzi-b-a")[0]
			// console.dir(ewma)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			this.style.background="#ccc"
			var ewma=$(".duowenzi-b-a")[0]
			ewma.style.display="none"
		}


// banner上导航
  	var box=$(".daohang-yidong-aa")[0]
    // for(var i=0;i<=box.length;i++){
		box.onmouseover=function(){
			// this.style.background="#fff"
			var ewm=$(".daohang-yidong-a")[0]
			// console.dir(ewm)
			ewm.style.display="block"
		}
		box.onmouseout=function(){
			// this.style.background=""
			var ewm=$(".daohang-yidong-a")[0]
			ewm.style.display="none"
		}



  	var boxa=$(".daohang-yidong-bb")[0]
    // for(var a=0;a<=box.length;a++){
		boxa.onmouseover=function(){
			// this.style.background="#fff"
			var ewma=$(".daohang-yidong-b")[0]
			// console.dir(ewm)
			ewma.style.display="block"
		}
		boxa.onmouseout=function(){
			// this.style.background=""
			var ewma=$(".daohang-yidong-b")[0]
			ewma.style.display="none"
		}

  	var boxb=$(".daohang-yidong-cc")[0]
    // for(var a=0;a<=box.length;a++){
		boxb.onmouseover=function(){
			// this.style.background="#fff"
			var ewmb=$(".daohang-yidong-c")[0]
			// console.dir(ewm)
			ewmb.style.display="block"
		}
		boxb.onmouseout=function(){
			// this.style.background=""
			var ewmb=$(".daohang-yidong-c")[0]
			ewmb.style.display="none"
		}

  	var boxc=$(".daohang-yidong-dd")[0]
    // for(var a=0;a<=box.length;a++){
		boxc.onmouseover=function(){
			// this.style.background="#fff"
			var ewmc=$(".daohang-yidong-d")[0]
			// console.dir(ewm)
			ewmc.style.display="block"
		}
		boxc.onmouseout=function(){
			// this.style.background=""
			var ewmc=$(".daohang-yidong-d")[0]
			ewmc.style.display="none"
		}

var aa=getClass('kf-a')[0];
var bb=getClass('kf-b')[0];
var cc=getClass('kf-c')[0];
  function fixed(small){
  	hover(small,function(){
  		animate(small,{right:130},300,Tween.Quad.easeOut)
  	},function(){
  		animate(small,{right:80},300,Tween.Quad.easeOut)

  	})
  }
  fixed(aa)
  fixed(bb)
  fixed(cc)

  	


  



	
	// var lis=$('.daohang-yidong-aa')
	// for(var j=0;j<lis.length;j++){
	// 	if(j==0){
	// 		continue;
	// 	}
	// 	hover(lis[j],function(){
	// 		var widthtwo=this.offsetWidth;
	// 		this.style.background='#ccc'
	// 		var ul=$('.hidden',this)[0]
	// 		var length=$('li',ul).length;
	// 		var ulWidth=length*widthtwo
	// 		animate(ul,{width:ulWidth},500)
	// 	},function(){
	// 		var that=this;
	// 		var ul=$('.hidden',this)[0]
	// 		animate(ul,{width:0},500)
	// 		that.style.background='#fff'
	// 	})
	// }

	// var boxb=$(".daohang-yidong-bb")[1]

	// 	boxb.onmouseover=function(){
	// 		// this.style.background="#fff"
	// 		var ewmb=$(".daohang-yidong-b")[1]
	// 		// console.dir(ewm)
	// 		ewmb.style.display="block"
	// 	}
	// 	boxb.onmouseout=function(){
	// 		// this.style.background=""
	// 		var ewmb=$(".daohang-yidong-b")[1]
	// 		ewmb.style.display="none"
	// 	}	






})
