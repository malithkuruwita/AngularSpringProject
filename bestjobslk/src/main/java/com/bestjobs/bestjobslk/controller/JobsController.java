package com.bestjobs.bestjobslk.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/hello")
public class JobsController {

    @GetMapping
    public String hello(){
        return "Hellow World";
    }


}
