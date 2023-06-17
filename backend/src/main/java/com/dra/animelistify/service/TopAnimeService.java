package com.dra.animelistify.service;

import com.dra.animelistify.dto.TopAnimeDataDto;

import org.apache.commons.lang3.StringUtils;

import java.io.Console;
import java.util.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.select.Elements;

import org.springframework.stereotype.Component;

@Component("topAnimeService")
public class TopAnimeService {
    public List<TopAnimeDataDto> retrieveTopAnime() {
        List<TopAnimeDataDto> topAnime = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://www.filmaffinity.com/es/ranking.php?rn=ranking_anime&chv=0").get();
            Elements animes = webPage.getElementsByClass("poster-list-grid listview");

            for (Element anime : animes) {
                Elements title = anime.getElementsByClass("mc-title");
                Elements url = anime.getElementsByClass("mc-title");
                Elements rating = anime.getElementsByClass("avg-rating");
                Elements img = anime.getElementsByClass("mc-poster");

                for (int i = 0; i < title.size(); i++) {
                    String titulo = !title.isEmpty() ? StringUtils.stripAccents(title.get(i).text()) : "----";
                    String imagen = !img.isEmpty() ? img.get(i).getElementsByTag("img").attr("src") : "----";
                    String enlace = !url.isEmpty() ? StringUtils.stripAccents(url.get(i).getElementsByTag("a").attr("href")) : "----";
                    String puntuacion = !rating.isEmpty() ? rating.get(i).text() : "----";
                    TopAnimeDataDto aux = new TopAnimeDataDto(titulo, imagen, puntuacion, enlace);
                    topAnime.add(aux);
                }
            }

            return topAnime;
        } catch (Exception e) {
            System.out.println(e);
        }

        return null;
    }
}
