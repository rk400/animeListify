package com.dra.animelistify.service;

import java.util.List;

import com.dra.animelistify.entity.Anime;
import com.dra.animelistify.repository.AnimeRepository;

import org.springframework.stereotype.Service;

@Service
public class AnimeService {
    private final AnimeRepository animeRepository;

    public AnimeService(AnimeRepository animeRepository) {
        this.animeRepository = animeRepository;
    }

    public List<Anime> getAnimes() {
        return animeRepository.findAll();
    }
}
