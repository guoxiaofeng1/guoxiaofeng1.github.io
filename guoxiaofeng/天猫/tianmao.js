/*
* @Author: Nancy
* @Date:   2017-05-31 09:08:59
* @Last Modified by:   Nancy
* @Last Modified time: 2017-06-26 14:45:11
*/

'use strict';
window.onload=function(){
	let BNlist=document.querySelectorAll('.BN-first>li');
	let BNlisth=document.querySelectorAll('.BN-last');
	console.log(BNlisth);
	BNlist.forEach(function(value,index){
		value.onmouseover=function(){
			for(let i=0;i<BNlist.length;i++){
				BNlisth[i].style.display='none';
			}
			BNlisth[index].style.display='block';
		}
		value.onmouseout=function(){
			for(let i=0;i<BNlist.length;i++){
				BNlisth[i].style.display='none';
			}
		}
	})

	let banner=document.querySelector('.banner-tu')
	let bannerli=document.querySelectorAll('.banner-tu>a');
	let bangunlunli=document.querySelectorAll('.banner-gunlun1');
	let t=setInterval(bannerchange, 5000);
	let n=0;
	function bannerchange(){
		n++;
		if(n>=bannerli.length){
			n=0;
		}
		for(let i=0;i<bannerli.length;i++){
			bannerli[i].classList.remove('banner-tu1');
			bangunlunli[i].classList.remove('banner-gunlun2');
		}
		bannerli[n].classList.add('banner-tu1');
		bangunlunli[n].classList.add('banner-gunlun2');
	}
	banner.onmousemove=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(bannerchange, 2000);
	}

	bangunlunli.forEach(function(value,index){
		value.onmousemove=function(){
			for(let i=0;i<bannerli.length;i++){
				bannerli[i].classList.remove('banner-tu1');
				bangunlunli[i].classList.remove('banner-gunlun2');
			}
			bannerli[index].classList.add('banner-tu1');
			bangunlunli[index].classList.add('banner-gunlun2');
			n=index;
		}
	})

	let muitop=document.querySelector('.mui-top');
	muitop.onclick=function(){
		animate(document.body,{scrollTop:0}, 500);
	}

	let nav=document.querySelector('nav');
	let navlist=document.querySelectorAll(".navlist");
	let navzli=document.querySelectorAll('.navli');
	let now;
	let dbTop=document.querySelector('.dbTop');
	let flag=true;
	let flag2=false;
	window.onscroll=function(){
		let sObj=document.body.scrollTop==0?document.documentElement:document.body;
		let sTop=sObj.scrollTop;
		navzli.forEach(function(value,index){
			let arr=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#000'];
			if(sTop>=navzli[0].offsetTop-800){
				nav.style.display='block';
				if(flag){
					flag=false;
					animate(dbTop,{height:50}, 500,function(){
						flag2=true;
					});
				}
				
			}
			if(sTop<navzli[0].offsetTop-800){
				nav.style.display='none';
				if(flag2){
					flag2=false;
					animate(dbTop,{height:0}, 500,function(){
						flag=true;
					})
				}
				
			}
			if(sTop>=value.offsetTop-300){
				for(let i=0;i<navlist.length;i++){
					navlist[i].style.backgroundColor='#626262';
				}
				navlist[index].style.backgroundColor=arr[index];
				now=index;
			}
		})
		navlist.forEach(function(value,index){
			value.onclick=function(){
				animate(document.body,{scrollTop:navzli[index].offsetTop}, 500);
			}

			value.onmouseover=function(){
				let arr=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#000'];
					navlist[index].style.backgroundColor=arr[index];
			}

			value.onmouseout=function(){
				if(index!=now){
					navlist[index].style.backgroundColor='#626262';
				}
			}
		})
	}

	
	let navlast=document.querySelector('.navlast');
	navlast.onclick=function(){
		animate(document.body,{scrollTop:0}, 500);
	}


// 视频
	let nsdts=document.querySelectorAll('.NS-datu>img');
	let nsxts=document.querySelectorAll('.NB-items1');
	nsxts.forEach(function(value,index){
		value.onmouseover=function(){
			for(let i=0;i<nsxts.length;i++){
				nsdts[i].style.display='none';
			}
			nsdts[index].style.display='block';
		}
	})

	let nsul=document.querySelector('.NS-left3-2>ul');
	let nsli=document.querySelectorAll('.NS-left3-2>ul>li');
	let nst=setInterval(nsmove,2000);
	function nsmove(){
		let firsttop=parseInt(getComputedStyle(nsul,null).marginTop);
		// console.log()
		if(firsttop==0){
			nsul.style.marginTop=-40+'px';
		}
		if(firsttop==-40){
			nsul.style.marginTop=0;
		}
		
	}
}