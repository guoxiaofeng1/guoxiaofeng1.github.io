/*
* @Author: 13040
* @Date:   2017-05-26 18:48:56
* @Last Modified by:   13040
* @Last Modified time: 2017-07-31 08:52:22
*/

'use strict';
window.onload=function(){
	let boxs=document.querySelectorAll('.maxbox');
	 //通过.querySelector获取页面中的box//
	let box   =document.querySelector('.box');
	//通过.querySelector获取页面中的img对象中所有的li元素//
	let imgs  =document.querySelectorAll('.img li');
	console.log(1)
	//通过.querySelector获取页面中的circle对象中所有的li元素//
	let circles =document.querySelectorAll('.circle li');
	//通过.querySelector获取页面中的right元素//
	let right =document.querySelector('.right');
	//通过.querySelector获取页面中的left元素// 
	let left  =document.querySelector('.left');
	let flag=true;
	// 设置开关
	// 自己循环开始
	let n=0;
	//设置移动，时间2秒//
	let t=setInterval(move,2000);
    //设置默认的移动方式right。//
	    function move(way='r') { 
	        if(way=='r'){
	            n++;
	            //当n大于等于第四张图片时，n返回第一张图片//
	            if(n>=imgs.length){
	                n=0;
	            };
	        //移动方式向左//
	        }else if(way=='l'){
	            n--;
	            //当n小于0时返回第一张//
	            if(n<0){
	                n=imgs.length-1;
	            };
	        };
	        //循环清除图片与轮播点上的被选中的效果//
	        for(let i=0;i<imgs.length;i++){
	            imgs[i].classList.remove('active');
	            circles[i].classList.remove('active') ;
	        };
	        //当轮播与图片移到n时添加选中效果//
	        imgs[n].classList.add('active') ;
	        circles[n].classList.add('active') ;
	    }
	// 自己循环结束
	// 选项卡开始
	// 给图片遍历加入开关
	    imgs.forEach(function(value){
	    	                        // 事件结束时执行函数
	    	value.addEventListener("transitionend",function(){
	    		flag=true;
	    	})
	    })
	// 给轮播点进行遍历
	    circles.forEach(function (value,index) {
	    	//给每个子元素设置点击监听//
	        value.onclick=function () {
	        	//循环清除被选中的效果//
	            for(let j=0;j<circles.length;j++){
	                imgs[j].classList.remove('active');
	                circles[j].classList.remove('active');
	            };
	            //点击选中元素添加选中效果//
	            this.classList.add('active') ;
	            imgs[index].classList.add('active') ;
	            n=index;
	        };
	    });
	// 选项卡结束
	// 设置按钮监听向右移动
	    right.onclick=function () {
	        if(flag){
	        	flag=false;
	        	move();
	        }
	    };
	    // 设置按钮监听向左移动
	    left.onclick=function () {
	        if(flag){
	        	flag=false;
	        	move('l');
	        }
	    };
	    //鼠标移入box时停止移动的时间
	    box.onmouseover=function(){
	        clearInterval(t);
	    };
	    //鼠标移出box时2s移动一次
	    box.onmouseout=function () {
	        t=setInterval(move,2000);
	    };
		boxs.forEach(function(value){
	        xuanxiang(value);
		});
	function xuanxiang(par){
		let types=par.querySelectorAll('.dp-R > a');
			// console.log(1)
		let pics=par.querySelectorAll('.dprbox .dplistr');
		
		types.forEach(function(value,index){

	    	//给types里面的每个value元素设置监听效果//
	        value.onmouseover=function(){
	             console.log(2)
	        	//循环清除之前选中的效果//
	        	for(let i=0;i<types.length;i++){
	        		types[i].classList.remove('active');

	        		pics[i].classList.remove('active');
	        	};
	        	//给每个value值设置监听效果//
	        	this.classList.add('active');
	        	//给每张图片设置对应的监听效果//
	        	pics[index].classList.add('active');
	        }; 
	    });
	};
	// 购物车
	let shop=document.querySelector(".gwc");
	let shops=document.querySelector(".active01");

	shop.onmouseover=function(){
		animate(shops,{height:100},300);
		shops.style.boxShadow="0 0 10px #ccc";
	}
	shop.onmouseout=function(){
		animate(shops,{height:0},300);
	}
	// 手机选项卡
	let mians=document.querySelector('.sjxxks');
	let mian=document.querySelectorAll('.sjxxks .mian');
	let sjxx=document.querySelectorAll('.liebiao .active02')
	console.log(sjxx)
	sjxx.forEach(function(value,index){
		value.onmouseover=function(){
			
			for(let a=0; a<mian.length;a++){
				mian[a].classList.remove('actives');
			}
			mian[index].classList.add('actives');
			animate(mians,{height:234},300)
			mians.classList.add('sjxxks-1');
		}
		value.onmouseout=function(){
			animate(mians,{height:0},300);

		}
	})
		mian.forEach(function(value,index){
			value.onmouseover=function(){
				animate(mians,{height:234},300);
		}
			value.onmouseout=function(){
				animate(mians,{height:0},300);
			}

		})
		mians.onmouseover=function(){
			animate(mians,{height:234},300);
		}
		mians.onmouseout=function(){
			animate(mians,{height:0},300);

		}
		// banner左侧选项卡
		let xuanxs=document.querySelectorAll('aside li');
		// console.log(xuanxs)
		let xuanxkks=document.querySelectorAll('aside div');
		// console.log(xuanxkks)
		xuanxs.forEach(function(value,index){
		value.onmousemove=function(){
			for(let a=0;a<xuanxs.length;a++){
				xuanxkks[a].classList.remove('xianshi');
			}
			xuanxkks[index].classList.add("xianshi");
		}
		value.onmouseout=function(){
			for(let b=0;b<xuanxs.length;b++){
				xuanxkks[b].classList.remove('xianshi');
			}
		}
	    })
		// 明星单品 
		let big=document.querySelector('.mxdpbox');
		function move1 (parent){
			let bigs=parent;
			let width=parseInt(getComputedStyle(bigs,null).width);
			let bigbox=parent.querySelector('.mxdpboxs');
			let time=setInterval(move2, 5000);
			let flag=true;
			function move2(){
				if(flag==true){
					animate(bigbox,{left:-width},600,function(){
					let first=bigbox.firstElementChild;
					first.style.left='-100%';	
					return  flag=false;
					});
				}else if(flag==false){
					animate(bigbox,{left:0},600,function(){
					return flag=true;
					});
				}	
			}
			let  zuo=document.querySelector('.btnleft');
			let  you=document.querySelector('.btnright');
			zuo.onclick=function(){
				animate(bigbox,{left:-width},600,)
			}
			you.onclick=function(){
				animate(bigbox,{left:0},600,)
			}
	}
	move1(big)
	// 为你推荐
	let tubig=document.querySelector('.wntjbox');
	let tuboxs=tubig.firstElementChild;
	console.log(tuboxs)
	let width1=parseInt(getComputedStyle(tubig,null).width);
	let leftone=document.querySelector('.btnleft2');
	let rightone=document.querySelector('.btnright2');
	let tiall=document.querySelectorAll('.wntjlist');
	let nn=0;
	function movb(){
			nn++
		if(nn>=tiall.length-1){
			nn=tiall.length-1;
		}
		animate(tuboxs,{left:-width1*nn},500,)	
	}
	rightone.onclick=movb;
	console.log(1)
	leftone.onclick=function(){
		console.log(2)
		if(nn==0){
			return;
		}
		nn--;
		if(nn<0){
			nn=0
		}
		animate(tuboxs,{left:-width1*nn},500,)
	}



	// 内容	
	function lun (parents){
		let tushu=parents.querySelector('.tushu');
		let width2=parseInt(getComputedStyle(tushu,null).width);
		let tusu=tushu.firstElementChild;
		let lefttwo=parents.querySelector('.neiron-jiantou');
		let righttwo=parents.querySelector('.neiron-jiantou1');
		let suall=parents.querySelectorAll('.tusu .shum');
		let diand=parents.querySelectorAll('.neiron-dian .neiron-dian2')
		let no=0;
		lefttwo.onclick=movb;
		function movd(){
				no++
			if(no>=suall.length-1){
				no=suall.length-1;
			}
			animate(tusu,{left:-width2*no},500,)
			for(let n=0;n<diand.length;n++){
					diand[n].classList.remove('neiron-dian1');
				}
				diand[no].classList.add('neiron-dian1');	
		}
		righttwo.onclick=movd;
		lefttwo.onclick=function(){
			if(no==0){
				return;
			}
			no--;
			if(no<0){
				no=0
			}
			animate(tusu,{left:-width2*no},500,)
			for(let n=0;n<diand.length;n++){
					diand[n].classList.remove('neiron-dian1');
				}
				diand[no].classList.add('neiron-dian1');
		}
		diand.forEach(function(value,index){
			value.onclick=function(){
				for(let n=0;n<diand.length;n++){
					diand[n].classList.remove('neiron-dian1');
				}
				diand[index].classList.add('neiron-dian1');
				animate(tusu,{left:-width2*index},500,);
			}
			
		})
	}
	let neiron=document.querySelectorAll('.neiron-tu .neiron-left')
	neiron.forEach(function(value,index){
		lun(value);	
	});
};