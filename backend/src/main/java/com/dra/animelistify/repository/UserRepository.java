package com.dra.animelistify.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dra.animelistify.entity.User;

public interface UserRepository extends CrudRepository<User, Long>{
    User findByName(String name);
    boolean existsByName(String name);
    List<User> findAll();
}
