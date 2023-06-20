package com.dra.animelistify.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class UserAnimeId implements Serializable {
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "id_anime") private String idAnime;

    public UserAnimeId() {
    }

    public UserAnimeId(User user, String idAnime) {
        this.user = user;
        this.idAnime = idAnime;
    }
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getIdAnime() {
        return idAnime;
    }

    public void setIdAnime(String idAnime) {
        this.idAnime = idAnime;
    }
}
