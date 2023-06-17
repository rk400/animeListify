package com.dra.animelistify.entity;

import java.util.List;
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

    @ManyToOne
    @JoinColumn(name = "anime_id")
    private Anime anime;

    @Enumerated(EnumType.STRING)
    private AnimeStatus status;

    public UserAnime() {
    }

    public UserAnime(User user, Anime anime, AnimeStatus status) {
        this.user = user;
        this.anime = anime;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Anime getAnime() {
        return anime;
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

    public void setAnime(Anime anime) {
        this.anime = anime;
    }

    public void setStatus(AnimeStatus status) {
        this.status = status;
    }

    public String toString() {
        return "User: " + this.user.getName() + "\n" + "Anime: " + this.anime.getTitle() + "\n" + "Status: " + this.status + "\n";
    }
}