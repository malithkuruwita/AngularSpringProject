package com.bestjobs.bestjobslk.controller;

import com.bestjobs.bestjobslk.model.UserDetails;
import com.bestjobs.bestjobslk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping("/api/create")
    public String create(@RequestParam String userName, @RequestParam String email, @RequestParam String password){
        UserDetails p = userService.create(userName, email, password);
        return p.toString();
    }

    @RequestMapping("/api/get")
    public UserDetails getUser(@RequestParam String userName){
        return userService.getByUserName(userName);
    }

    @RequestMapping("/api/getAll")
    public List<UserDetails> getAll(){
        return userService.getAll();
    }

    @RequestMapping("/api/update")
    public String update(@RequestParam String userName, @RequestParam String email, @RequestParam String password){
        UserDetails p = userService.update(userName, email, password);
        return p.toString();
    }

    @RequestMapping("/api/delete")
    public String delete(@RequestParam String userName){
        userService.delete(userName);
        return "Deleted "+userName;
    }

    @RequestMapping("/api/deleteAll")
    public String deleteAll(){
        userService.deleteAll();
        return "Deleted all records";
    }




}
