package com.bestjobs.bestjobslk.repository;

import com.bestjobs.bestjobslk.model.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<UserDetails, String> {
    public UserDetails findByUserName(String userName);
    public List<UserDetails> findByEmail(String email);
}
