package com.dra.animelistify.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dra.animelistify.entity.UserAnime;

public interface UserAnimeRepository extends CrudRepository<UserAnime, Long>{
    UserAnime findById(String id);
    boolean existsById(String id);
    List<UserAnime> findAll();
}
