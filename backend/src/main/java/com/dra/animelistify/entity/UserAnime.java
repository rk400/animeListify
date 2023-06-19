package com.dra.animelistify.entity;

import java.sql.Date;
import javax.persistence.*;

@Entity
@Table(name = "user_anime")
public class UserAnime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // anime data
    @Column(name = "id_anime")
    private String idAnime;

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

    public UserAnime(User user, String idAnime){
        this.user = user;
        this.idAnime = idAnime;
    }

    public UserAnime(User user, String idAnime, AnimeStatus status, Date startDate, Date endDate, int episodeProgress) {
        this.user = user;
        this.idAnime = idAnime;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.episodeProgress = episodeProgress;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public String getIdAnime() {
        return idAnime;
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
        this.idAnime = idAnime;
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

    public AnimeStatus getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setStatus(AnimeStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "UserAnime{" +
                "id=" + id +
                ", user=" + user +
                ", idAnime='" + idAnime + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", episodeProgress=" + episodeProgress +
                ", status=" + status +
                '}';
    }
}