package com.dra.animelistify.entity;

import java.sql.Date;
import javax.persistence.*;

@Entity
@Table(name = "user_anime")
public class UserAnime {
    @EmbeddedId
    private UserAnimeId id;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "rating")
    private double rating;

    @Column(name = "episode_progress")
    private int episodeProgress;

    @Enumerated(EnumType.STRING)
    private AnimeStatus status;

    public UserAnime() {
    }

    public UserAnime(User user, String idAnime) {
        this.id = new UserAnimeId(user, idAnime);
    }

    public UserAnime(User user, String idAnime, AnimeStatus status, Date startDate, Date endDate, int episodeProgress) {
        this.id = new UserAnimeId(user, idAnime);
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.episodeProgress = episodeProgress;
    }

    public String getIdAnime() {
        return id.getIdAnime();
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public double getRating() {
        return rating;
    }

    public int getEpisodeProgress() {
        return episodeProgress;
    }

    public void setIdAnime(String idAnime) {
        id.setIdAnime(idAnime);
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate= endDate;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setEpisodeProgress(int episodeProgress) {
        this.episodeProgress = episodeProgress;
    }

    public UserAnimeId getId() {
        return id;
    }

    public void setId(UserAnimeId id) {
        this.id = id;
    }

    public User getUser() {
        return id.getUser();
    }

    public void setUser(User user) {
        id.setUser(user);
    }

    public AnimeStatus getStatus() {
        return status;
    }

    public void setStatus(AnimeStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "UserAnime{" +
                ", user=" + id.getUser() +
                ", idAnime='" + id.getIdAnime() + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", episodeProgress=" + episodeProgress +
                ", status=" + status +
                '}';
    }
}