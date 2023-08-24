$(function(){
	/* 메뉴 선택 시 스크롤 이동 */
	let Home = $("#home").offset().top;
	let Me = $("#Me").offset().top;
	let Skills = $("#Certificate").offset().top;
	let Certificate = $("#Skills").offset().top;
	let Projects = $("#Projects").offset().top;
	let navClickArray = [Home, Me, Certificate, Skills, Projects];
	const navLi = $("#headerNav ul li"); /* nav > ul > li query */
	
    /*그 외 프로젝트 화살표 클릭 이벤트*/
     let etcProjectArrow1 = $("#etcProjectStartLine").offset().top;
     let etcProjectArrow2 = $("#P1").offset().top;
     let etcProjectArrow3 = $("#P2").offset().top;
     let etcProjectArrow4 = $("#P3").offset().top;
     let etcProjectArrow5 = $("#P4").offset().top;
     let etcArray = [etcProjectArrow1,etcProjectArrow2,etcProjectArrow3,etcProjectArrow4,etcProjectArrow5];
	/*그 외 프로젝트 화살표 클릭 이벤트 끝 */
	
	$(navLi[0]).click(function(){
	    window.scrollTo({left:0, top:navClickArray[0], behavior:"smooth"})
	})
	
	$(navLi[1]).click(function(){
	    window.scrollTo({left:0, top:navClickArray[1], behavior:"smooth"});
	})
	$(navLi[2]).click(function(){
	    window.scrollTo({left:0, top:navClickArray[2], behavior:"smooth"})
	})
	$(navLi[3]).click(function(){
	    window.scrollTo({left:0, top:navClickArray[3], behavior:"smooth"})
	})
	$(navLi[4]).click(function(){
	    window.scrollTo({left:0, top:navClickArray[4], behavior:"smooth"})
	})
	/* 메뉴 선택 시 스크롤 이동 끝*/
	/* 스크롤 상단 시 스크롤 숨기기 및 편하게 스크롤 */
	const body = document.querySelector("body"); /* body query */
	body.classList.add('scroll_hidden');
	body.classList.add('scroll_hidden::-webkit-scrollbar');
	/*logo, 아래 화살표, home 버튼 클릭 시 기본 이벤트*/
	$(".logo").click(function(){
		 window.scrollTo({left:0, top:navClickArray[0], behavior:"smooth"})
	})
	$("#homeImage").click(function(){
		 window.scrollTo({left:0, top:navClickArray[0], behavior:"smooth"})
	})
	if(($(window).scrollTop() >= 0) && ($(window).scrollTop() < navClickArray[1]-15)){
		 $("#downArrowImage").click(function(){
			 window.scrollTo({left:0, top:navClickArray[1], behavior:"smooth"})
		})
    }
     /*logo, 아래 화살표, home 클릭 시 기본 이벤트 끝*/
         
	$("body").addClass('scroll_hidden');
	$("body").addClass('scroll_x_hidden');
	$("body").addClass('scroll_hidden::-webkit-scrollbar');/*메인화면 스크롤바 숨기기*/
	$(window).scroll(function(){
	    let scrollHeight = $(this).scrollTop();
	    if((scrollHeight >= navClickArray[0]+300) && (scrollHeight < navClickArray[2]-15)){
				$("#clickHelp").show();
			}else{
				$("#clickHelp").hide();
			}
	    if(scrollHeight != 0){
	        $("body").removeClass('scroll_hidden');
	        $("body").removeClass('scroll_hidden::-webkit-scrollbar');
	        $("header").addClass('header0px');
	        $("#headerNav ul li").addClass('header0pxNavLi');
	        $("#headerBox").addClass('header0pxBox');
	        $(".logo").addClass('header0pxLogo');
			$("#logoMain").hide();
	        $("#logoSub").show();
	        $("#downArrowImage").addClass('header0pxDownArrowImage');
	        if((scrollHeight >= navClickArray[4]-10)){
				$("#downArrowImage2").addClass('header0pxDownArrowImage');
	        	$("#downArrowImage3").show();
			}else{
				$("#downArrowImage3").hide();
				$("#downArrowImage2").removeClass('header0pxDownArrowImage');
	        	$("#downArrowImage2").show();
			}
	        $("#homeImage").addClass('header0pxHomeImage');
	    }else{
	        $("body").addClass('scroll_hidden');
	        $("body").addClass('scroll_hidden::-webkit-scrollbar');
	        $("header").removeClass('header0px');
	        $("#headerNav ul li").removeClass('header0pxNavLi');
	        $("#headerBox").removeClass('header0pxBox');
	        $(".logo").removeClass('header0pxLogo');
	        $("#logoSub").hide();
	        $("#logoMain").show();
	        $("#downArrowImage").removeClass('header0pxDownArrowImage');
	        $("#downArrowImage2").addClass('header0pxDownArrowImage');
	        $("#homeImage").removeClass('header0pxHomeImage');
	    }
	    /* 스크롤 시 nav바 색상 변경 */
	    if(scrollHeight == 0){
			 $("#downArrowImage").click(function(){
				 window.scrollTo({left:0, top:navClickArray[1], behavior:"smooth"})
			})
             for(let i = 0; i < navLi.length; i++){
				 $(navLi[i]).css("color","#5C5C5C");
		    	}
		    	$(navLi[0]).css("color","#84A8A2");
         }
         else if((scrollHeight >= 1) && (scrollHeight < navClickArray[1]-15)){
			 $("#downArrowImage2").click(function(){
				 window.scrollTo({left:0, top:navClickArray[1], behavior:"smooth"})
			})
             for(let i = 0; i < navLi.length; i++){
				 $(navLi[i]).css("color","#5C5C5C");
		    	}
		    	$(navLi[0]).css("color","#8BC0FF");
         }else if((scrollHeight >= navClickArray[1]-10) && (scrollHeight < navClickArray[2]-15)){
			 $("#downArrowImage2").click(function(){
				 window.scrollTo({left:0, top:navClickArray[2], behavior:"smooth"})
			})
             for(let i = 0; i < navLi.length; i++){
				 $(navLi[i]).css("color","#5C5C5C");
		    	}
		    	$(navLi[1]).css("color","#8BC0FF");
         }else if((scrollHeight >= navClickArray[2]-10) && (scrollHeight < navClickArray[3]-15)){
			 $("#downArrowImage2").click(function(){
				 window.scrollTo({left:0, top:navClickArray[3], behavior:"smooth"})
			})
			 for(let i = 0; i < navLi.length; i++){
				 $(navLi[i]).css("color","#5C5C5C");
		    	}
		    	$(navLi[2]).css("color","#8BC0FF");
         }else if((scrollHeight >= navClickArray[3]-10) && (scrollHeight < navClickArray[4]-15)){
			 $("#downArrowImage2").click(function(){
				 window.scrollTo({left:0, top:navClickArray[4], behavior:"smooth"})
			})
			 for(let i = 0; i < navLi.length; i++){
				 $(navLi[i]).css("color","#5C5C5C");
		    	}
		    	$(navLi[3]).css("color","#8BC0FF");
         }else if((scrollHeight >= navClickArray[4]-10) && (scrollHeight < etcArray[0]-10)){
			  $("#downArrowImage3").click(function(){
			 window.scrollTo({left:0, top:etcArray[0], behavior:"smooth"})
			})
			 for(let i = 0; i < navLi.length; i++){
				 $(navLi[i]).css("color","#5C5C5C");
		    	}
		    	$(navLi[4]).css("color","#8BC0FF");
		    	/* 스크롤 시 nav바 색상 변경 끝 */
         }else if((scrollHeight >= etcArray[0]-10) && (scrollHeight < etcArray[1]-15)){
			 $("#downArrowImage3").click(function(){
				 window.scrollTo({left:0, top:etcArray[1], behavior:"smooth"})
			})
	     }else if((scrollHeight >= etcArray[1]-10) && (scrollHeight < etcArray[2]-15)){
			 $("#downArrowImage3").click(function(){
				 window.scrollTo({left:0, top:etcArray[2], behavior:"smooth"})
			})
	     }else if((scrollHeight >= etcArray[2]-10) && (scrollHeight < etcArray[3]-15)){
			 $("#downArrowImage3").click(function(){
				 window.scrollTo({left:0, top:etcArray[3], behavior:"smooth"})
			})
	     }else if((scrollHeight >= etcArray[3]-10) && (scrollHeight < etcArray[4]-15)){
			 $("#downArrowImage3").click(function(){
				 window.scrollTo({left:0, top:etcArray[4], behavior:"smooth"})
			})
	     }else if((scrollHeight >= etcArray[4]-10)){
			 $("#downArrowImage3").click(function(){
				 window.scrollTo({left:0, top:navClickArray[4], behavior:"smooth"})
			})
	     }
         
     

	})
	
	/* nav 밑줄 애니메이션 및 스크롤 이동 */
	/* 밑줄 */
	const navUl = document.querySelector("nav > ul");
	navUl.addEventListener("mouseover",function(){
	    for(let i = 0; i < navLi.length; i++){
	        /* 밑줄 */
	        navLi[i].addEventListener("mouseover",function(){
	            this.style.borderBottom ="1px solid #5C5C5C";
	            this.style.paddingBottom ="3px";
	            this.style.transitionDuration = "0";
	        })
	        navLi[i].addEventListener("mouseout",function(){
	            this.style.borderBottom ="";
	        })
	    }
	})
	$("#quicketDetailBtn").click(function(){
		window.open("/project/quicketDetailPage");
	})
	
	/* Certificate*/
	
	/* 증빙자료 모달창 */
	$(".CertificateBtn").click(function(){
		$(this).next().fadeIn();
		
	})
	$(".CertificateModal").click(function(){
		$(".CertificateModal").fadeOut();
	})
	
	/* Certificate 끝 */
	/* project4 사진 크게보기 모달창*/
	$("#p4_modalBtn").click(function(){
		$(this).next().fadeIn();
	})
	$("#modalCancelBtn").click(function(){
		$("#p4ModalPic").fadeOut();
	})
	/* project4 사진 크게보기 모달창 끝*/
})