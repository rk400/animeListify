package com.dra.animelistify.controller;

import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.dra.animelistify.entity.User;
import com.dra.animelistify.entity.UserAnime;
import com.dra.animelistify.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> crearUsuario(@RequestBody User user) {
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUser(@PathVariable Long userId) {
        User user = userService.getUser(userId);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{userId}/animes")
    public ResponseEntity<UserAnime> addAnime(
            @PathVariable Long userId,
            @RequestBody String idAnime) {
        User user = userService.getUser(userId);
        if (user != null) {
            try {
                UserAnime ua = user.addAnime(idAnime);
                userService.saveUser(user); // Guardar el usuario actualizado con el nuevo favorito
                return new ResponseEntity<>(ua, HttpStatus.CREATED);
            } catch (InvalidDataAccessApiUsageException e) {
                // Se devuelve 202 porque el anime ya estaba en la lista
                return new ResponseEntity<>(HttpStatus.ACCEPTED);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("{userId}/animes/{animeId}")
    public ResponseEntity<?> deleteAnime(
            @PathVariable Long userId,
            @PathVariable Long animeId) {
        User user = userService.getUser(userId);
        if (user != null) {
            List<UserAnime> animes = user.getUserAnimes();
            UserAnime animeToRemove = null;
            for (UserAnime anime : animes) {
                if (anime.getIdAnime().equals(animeId)) {
                    animeToRemove = anime;
                    break;
                }
            }
            if (animeToRemove != null) {
                user.removeAnime(animeToRemove);
                userService.saveUser(user);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{userId}/animes/{idAnime}")
    public ResponseEntity<?> updateAnime(
            @PathVariable Long userId,
            @PathVariable Long idAnime,
            @RequestBody UserAnime updatedAnime) {
        User user = userService.getUser(userId);
        if (user != null) {
            List<UserAnime> animes = user.getUserAnimes();
            UserAnime animeToUpdate = null;
            for (UserAnime anime : animes) {
                if (anime.getIdAnime().equals(idAnime)) {
                    animeToUpdate = anime;
                    break;
                }
            }
            if (animeToUpdate != null) {
                animeToUpdate.setStatus(updatedAnime.getStatus());
                animeToUpdate.setStartDate(updatedAnime.getStartDate());
                animeToUpdate.setEndDate(updatedAnime.getEndDate());
                animeToUpdate.setRating(updatedAnime.getRating());
                animeToUpdate.setEpisodeProgress(updatedAnime.getEpisodeProgress());
                userService.saveUser(user);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{userId}/animes")
    public ResponseEntity<List<UserAnime>> getAnimesByUser(@PathVariable Long userId) {
        User user = userService.getUser(userId);
        if (user != null) {
            List<UserAnime> userAnimes = user.getUserAnimes();
            return new ResponseEntity<>(userAnimes, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<User> searchByName(@PathVariable String name) {
        User user = userService.searchByName(name);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{iduser}")
    public ResponseEntity<?> updateUser(@PathVariable("iduser") Long iduser, @RequestBody User updatedUser) {
        User user = userService.getUser(iduser);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());

        User savedUser = userService.UpdateUser(user);
        return ResponseEntity.ok(savedUser);
    }

}