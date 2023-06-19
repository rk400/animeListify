package com.dra.animelistify.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dra.animelistify.entity.UserAnime;

public interface UserAnimeRepository extends CrudRepository<UserAnime, Long>{
    UserAnime findByIdAnime(String idAnime);
    UserAnime findByUserId(Long userId);
    boolean existsByIdAnime(String idAnime);
    List<UserAnime> findAll();
}
