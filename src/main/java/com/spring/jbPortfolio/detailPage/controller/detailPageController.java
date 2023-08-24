package com.spring.jbPortfolio.detailPage.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/project")
public class detailPageController {

	// 공연상세페이지
	@RequestMapping(value = "/quicketDetailPage", method = RequestMethod.GET)
	public String mainPageStartMove() {
		 
		return "quicketDetailPage";

	}
	// 퀵켓 - 1번 페이지
	@RequestMapping(value = "/quicketDetailPage-1", method = RequestMethod.GET)
	public String quicketDetailPage1() {
		
		return "quicketDetailPage-1";
		
	}
	// 퀵켓 - 2번 페이지
	@RequestMapping(value = "/quicketDetailPage-2", method = RequestMethod.GET)
	public String quicketDetailPage2() {
		
		return "quicketDetailPage-2";
		
	}
	// 퀵켓 - 3번 페이지
	@RequestMapping(value = "/quicketDetailPage-3", method = RequestMethod.GET)
	public String quicketDetailPage3() {
		
		return "quicketDetailPage-3";
		
	}
	// 퀵켓 - 4번 페이지
	@RequestMapping(value = "/quicketDetailPage-4", method = RequestMethod.GET)
	public String quicketDetailPage4() {
		
		return "quicketDetailPage-4";
		
	}
	// 퀵켓 - 5번 페이지
	@RequestMapping(value = "/quicketDetailPage-5", method = RequestMethod.GET)
	public String quicketDetailPage5() {
		
		return "quicketDetailPage-5";
		
	}
	// 퀵켓 - 6번 페이지
	@RequestMapping(value = "/quicketDetailPage-6", method = RequestMethod.GET)
	public String quicketDetailPage6() {
		
		return "quicketDetailPage-6";
		
	}
	// 퀵켓 - 7번 페이지
	@RequestMapping(value = "/quicketDetailPage-7", method = RequestMethod.GET)
	public String quicketDetailPage7() {
		
		return "quicketDetailPage-7";
		
	}
	// 퀵켓 - 7번 페이지
	@RequestMapping(value = "/quicketDetailPage-8", method = RequestMethod.GET)
	public String quicketDetailPage8() {
		
		return "quicketDetailPage-8";
		
	}
	// 퀵켓 - 7번 페이지
	@RequestMapping(value = "/quicketDetailPage-9", method = RequestMethod.GET)
	public String quicketDetailPage9() {
		
		return "quicketDetailPage-9";
		
	}
	// 퀵켓 - 7번 페이지
	@RequestMapping(value = "/quicketDetailPage-10", method = RequestMethod.GET)
	public String quicketDetailPage10() {
		
		return "quicketDetailPage-10";
		
	}


}
