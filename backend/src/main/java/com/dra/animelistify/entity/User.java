package com.dra.animelistify.entity;

import java.util.Iterator;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @Column(name = "name")
  private String name;

  @Column(name = "email")
  private String email;

  @Column(name = "password")
  private String password;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
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

 public void addAnime(String idAnime) {
    UserAnime userAnime = new UserAnime(this ,idAnime);
    userAnimes.add(userAnime);
    userAnime.setUser(this);
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