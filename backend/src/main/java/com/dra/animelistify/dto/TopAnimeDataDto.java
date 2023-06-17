package com.dra.animelistify.dto;

public class TopAnimeDataDto {
    public String title;
    public String image;
    public String rating;
    public String url;

    public TopAnimeDataDto(String title, String image, String rating, String url) {
        this.title = title;
        this.image = image;
        this.rating = rating;
        this.url = url;
    }

    public TopAnimeDataDto() {
        this.title = "";
        this.image = "";
        this.rating = "---";
        this.url = "";
    }

    public String toString() {
        return "Title: " + this.title + "\n" + "Image: " + this.image + "\n" + "Rating: " + this.rating + "\n" + "Url: " + this.url + "\n";
    }
}
