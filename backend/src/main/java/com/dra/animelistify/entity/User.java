package com.dra.animelistify.entity;

import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class User {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @Column(name = "name", unique = true)
  private String name;

  @Column(name = "email", unique = true) 
  private String email;

  @Column(name = "password")
  private String password;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "user_id") @JsonIgnore
  private List<UserAnime> userAnimes;

  public User() {
  }

  public User(String name, String email, String password) {
    this.name = name;
    this.email = email;
    this.password = password;

  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<UserAnime> getUserAnimes() {
    return userAnimes;
  }

  public void setUserAnimes(List<UserAnime> userAnimes) {
    this.userAnimes = userAnimes;
  }

 public User addAnime(UserAnime anime) {
    userAnimes.add(anime);
    return this;
}

public void removeAnime(UserAnime userAnime) {
    userAnimes.remove(userAnime);
    userAnime.setUser(null);
}

  @Override
  public String toString() {
    return "User [email=" + email + ", id=" + id + ", name=" + name + ", password=" + password + "]";
  }

}