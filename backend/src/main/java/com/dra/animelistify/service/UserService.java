package com.dra.animelistify.service;

import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.dra.animelistify.entity.User;
import com.dra.animelistify.entity.UserAnime;
import com.dra.animelistify.entity.Anime;
import com.dra.animelistify.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public void addAnime(Long userId, UserAnime anime) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            user.addAnime(anime);
            userRepository.save(user);
        }
    }
    
    public List<UserAnime> getAnimeByUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null); 
        if (user != null) {
            return null;
        } else {
            return Collections.emptyList(); 
        }
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User UpdateUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    public User searchByName(String name) {
        return userRepository.findByName(name);
    }
}