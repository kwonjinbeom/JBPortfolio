package com.spring.jbPortfolio.detailPage.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
//@Log4j
//@Slf4j
@RequestMapping("/project")
public class detailPageController {

	/*
	 * @Setter(onMethod_ = @Autowired) private ClientPayPageService
	 * clientPayPageService;
	 */
	// 공연상세페이지
	@RequestMapping(value = "/quicketDetailPage", method = RequestMethod.GET)
	public String mainPageStartMove() {
		 
		return "quicketDetailPage";

	}


}
