package com.bestjobs.bestjobslk.service;

import com.bestjobs.bestjobslk.model.UserDetails;
import com.bestjobs.bestjobslk.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //create user
    public UserDetails create(String userName, String email, String password){
        return userRepository.save(new UserDetails(userName, email, password));
    }

    //retrieve operation
    public List<UserDetails> getAll(){
        return userRepository.findAll();
    }

    public UserDetails getByUserName(String userName){
        return userRepository.findByUserName(userName);
    }

    //update operation
    public UserDetails update(String userName, String email, String password){
        UserDetails p = userRepository.findByUserName(userName);
        p.setEmail(email);
        p.setPassword(password);
        return userRepository.save(p);
    }

    //delete operation
    public void deleteAll(){
        userRepository.deleteAll();
    }

    public void delete(String userName){
        UserDetails p = userRepository.findByUserName(userName);
        userRepository.delete(p);
    }

}
