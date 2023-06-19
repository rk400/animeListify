package com.dra.animelistify.service;

import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.dra.animelistify.entity.User;
import com.dra.animelistify.entity.UserAnime;
import com.dra.animelistify.repository.UserRepository;
import com.dra.animelistify.repository.UserAnimeRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final UserAnimeRepository userAnimeRepository;

    public UserService(UserRepository userRepository , UserAnimeRepository userAnimeRepository) {
        this.userRepository = userRepository;
        this.userAnimeRepository = userAnimeRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public void addAnime(Long userId, String idAnime) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            user.addAnime(idAnime);
            userRepository.save(user);
        }
    }

    public void deleteAnime(Long userId, String idAnime) {
        User user = userRepository.findById(userId).orElse(null);
        UserAnime anime = userAnimeRepository.findByIdAnime(idAnime);
        if (user != null) {
            user.removeAnime(anime);
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