package com.dra.animelistify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileWriter;
import java.util.*;

import com.dra.animelistify.dto.TopAnimeDataDto;
import com.dra.animelistify.service.TopAnimeService;
import com.google.gson.Gson;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/topanime")
public class TopAnimeDataController {
    @Autowired
    private TopAnimeService topAnimeService;

    @GetMapping("data")
    public ResponseEntity<List<TopAnimeDataDto>> getTopAnimeData() {
        Gson gson = new Gson();
        try {
            FileWriter writer = new FileWriter("topanime.json");
            gson.toJson(topAnimeService.retrieveTopAnime(), writer);
            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<List<TopAnimeDataDto>>(topAnimeService.retrieveTopAnime(), HttpStatus.OK);
    }
}
