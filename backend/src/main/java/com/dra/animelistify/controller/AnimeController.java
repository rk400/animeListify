package com.dra.animelistify.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

import java.util.List;

import com.dra.animelistify.entity.Anime;
import com.dra.animelistify.service.AnimeService;

@RestController
@RequestMapping("/animes")
public class AnimeController {
    public final AnimeService animeService;

    public AnimeController(AnimeService animeService) {
        this.animeService = animeService;
    }

    @GetMapping
    public ResponseEntity<List<Anime>> getAnimes() {
        List<Anime> animes = animeService.getAnimes();
        return new ResponseEntity<>(animes, HttpStatus.OK);
    }
}
