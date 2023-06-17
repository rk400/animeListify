package com.dra.animelistify.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dra.animelistify.entity.Anime;

public interface AnimeRepository extends CrudRepository<Anime, Long>{
    Anime findByTitle(String title);
    boolean existsByTitle(String title);
    List<Anime> findAll();
}
