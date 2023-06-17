package com.dra.animelistify.entity;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "animes")
public class Anime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String image;
    private String rating;
    private Date startDate;
    private Date endDate;
    private int episodes;
    private int episodeProgress;

    // Otros campos y métodos getters/setters
    
    @OneToMany(mappedBy = "anime", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserAnime> userAnimes;

    public Anime() {
    }

    public Anime(String title, String image, String rating, Date startDate, Date endDate, int episodes, int episodeProgress) {
        this.title = title;
        this.image = image;
        this.rating = rating;
        this.startDate = startDate;
        this.endDate = endDate;
        this.episodes = episodes;
        this.episodeProgress = episodeProgress;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public String getRating() {
        return rating;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public int getEpisodes() {
        return episodes;
    }

    public int getEpisodeProgress() {
        return episodeProgress;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setEpisodes(int episodes) {
        this.episodes = episodes;
    }

    public void setEpisodeProgress(int episodeProgress) {
        this.episodeProgress = episodeProgress;
    }

    public List<UserAnime> getUserAnimes() {
        return userAnimes;
    }

    public void setUserAnimes(List<UserAnime> userAnimes) {
        this.userAnimes = userAnimes;
    }

    public User getUser() {
        return userAnimes.get(0).getUser();
    }

    public void setUser(User user) {
        this.userAnimes.get(0).setUser(user);
    } 

    @Override
    public String toString() {
        return "Anime{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", image='" + image + '\'' +
                ", rating='" + rating + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", episodes=" + episodes +
                ", episodeProgress=" + episodeProgress +
                ", userAnimes=" + userAnimes +
                '}';
    }
}
