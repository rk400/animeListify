import { Component, OnInit } from '@angular/core';
import { AnimeAPIService } from '../../services/anime-api.service';
import { Anime } from 'src/app/services/anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.sass'],
  providers: [AnimeAPIService]
})
export class AnimeComponent implements OnInit {
  seleccionado : string = '';
  animes : Anime[] = [];
  pageSize : number = 20;
  from : number = 0;
  to : number = 20;
  searchString : string = '';
  layout: string = 'list';

  groupOfAnimes : Anime[][] = [];

  constructor(private animeAPIService: AnimeAPIService) { }

  ngOnInit(): void {
    this.animeAPIService.getAnimesAPI()
      .subscribe(
        (data: any) => {
        this.animes = data.anime;
        console.log("Resultado: ", data);
    },
    (error) => {
      this.animes =  [
          {
            "title": "Fullmetal Alchemist: Brotherhood",
            "title_english": "Fullmetal Alchemist: Brotherhood",
            "mean": 9.11,
            "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "drama",
              "fantasy",
              "military",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1208/94745l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1208/94745.jpg"
            },
            "start_date": "2009-04-05",
            "end_date": "2010-07-04",
            "num_episodes": 64,
            "status": "finished_airing",
            "id": "dcda6a44-fb94-4028-87ac-450b92395446"
          },
          {
            "title": "Bleach: Sennen Kessen-hen",
            "title_english": "Bleach: Thousand-Year Blood War",
            "mean": 9.1,
            "synopsis": "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n\nYhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "fantasy",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1764/126627l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1764/126627.jpg"
            },
            "start_date": "2022-10-11",
            "end_date": "2022-12-27",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "48e7ab57-64be-47f3-92bc-c5bbbaeb6d1b"
          },
          {
            "title": "Steins;Gate",
            "title_english": "Steins;Gate",
            "mean": 9.08,
            "synopsis": "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable \"gadget\" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the \"Phone Microwave\" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the \"time machine,\" attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "psychological",
              "sci-fi",
              "suspense",
              "time travel"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1935/127974l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1935/127974.jpg"
            },
            "start_date": "2011-04-06",
            "end_date": "2011-09-14",
            "num_episodes": 24,
            "status": "finished_airing",
            "id": "77562d42-36ef-4364-b1df-c52cb45773cf"
          },
          {
            "title": "Gintama°",
            "title_english": "Gintama Season 4",
            "mean": 9.07,
            "synopsis": "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/3/72078l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/3/72078.jpg"
            },
            "start_date": "2015-04-08",
            "end_date": "2016-03-30",
            "num_episodes": 51,
            "status": "finished_airing",
            "id": "8495a65a-827d-48e9-a517-9308b220711a"
          },
          {
            "title": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
            "title_english": "Kaguya-sama: Love is War - Ultra Romantic",
            "mean": 9.07,
            "synopsis": "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "comedy",
              "romance",
              "school",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1160/122627l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1160/122627.jpg"
            },
            "start_date": "2022-04-09",
            "end_date": "2022-06-25",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "63fb9253-823e-41ea-87f7-a2180c359154"
          },
          {
            "title": "Shingeki no Kyojin Season 3 Part 2",
            "title_english": "Attack on Titan Season 3 Part 2",
            "mean": 9.06,
            "synopsis": "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "drama",
              "gore",
              "military",
              "shounen",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1517/100633l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1517/100633.jpg"
            },
            "start_date": "2019-04-29",
            "end_date": "2019-07-01",
            "num_episodes": 10,
            "status": "finished_airing",
            "id": "0f5235d5-e6ab-4e36-9be0-bc1184a4dcd7"
          },
          {
            "title": "Gintama: The Final",
            "title_english": "Gintama: The Very Final",
            "mean": 9.05,
            "synopsis": "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "comedy",
              "drama",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1988/113791l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1988/113791.jpg"
            },
            "start_date": "2021-01-08",
            "end_date": "2021-01-08",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "0591127f-8b2f-4199-bd46-cc22aec1eddb"
          },
          {
            "title": "Gintama'",
            "title_english": "Gintama Season 2",
            "mean": 9.04,
            "synopsis": "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/4/50361l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/4/50361.jpg"
            },
            "start_date": "2011-04-04",
            "end_date": "2012-03-26",
            "num_episodes": 51,
            "status": "finished_airing",
            "id": "6d4389cd-52c8-4c89-86ac-b3141c38d301"
          },
          {
            "title": "Hunter x Hunter (2011)",
            "title_english": "Hunter x Hunter",
            "mean": 9.04,
            "synopsis": "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "fantasy",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1337/99013l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1337/99013.jpg"
            },
            "start_date": "2011-10-02",
            "end_date": "2014-09-24",
            "num_episodes": 148,
            "status": "finished_airing",
            "id": "d616f065-13b7-4bb3-bda4-4f7a9366be99"
          },
          {
            "title": "Gintama': Enchousen",
            "title_english": "Gintama: Enchousen",
            "mean": 9.03,
            "synopsis": "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1452/123686l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1452/123686.jpg"
            },
            "start_date": "2012-10-04",
            "end_date": "2013-03-28",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "e44ffa70-15e3-46a7-8ddb-a8c7754e54d1"
          },
          {
            "title": "Ginga Eiyuu Densetsu",
            "title_english": "Legend of the Galactic Heroes",
            "mean": 9.02,
            "synopsis": "The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPA's reserved historian, Yang Wenli.\n\nWhile Reinhard climbs the ranks of the Empire with the aid of his childhood friend, Siegfried Kircheis, he must fight not only the war, but also the remnants of the crumbling Goldenbaum Dynasty in order to free his sister from the Kaiser and unify humanity under one genuine ruler. Meanwhile, on the other side of the galaxy, Yang—a strong supporter of democratic ideals—has to stand firm in his beliefs, despite the struggles of the FPA, and show his pupil, Julian Mintz, that autocracy is not the solution.\n\nAs ideologies clash amidst the war's many casualties, the two strategic masterminds must ask themselves what the real reason behind their battle is.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "drama",
              "military",
              "sci-fi",
              "space"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/13/13225l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/13/13225.jpg"
            },
            "start_date": "1988-01-08",
            "end_date": "1997-03-17",
            "num_episodes": 110,
            "status": "finished_airing",
            "id": "6d062a1e-339c-463f-b9ab-75326aa6d50e"
          },
          {
            "title": "Fruits Basket: The Final",
            "title_english": "Fruits Basket: The Final Season",
            "mean": 9.01,
            "synopsis": "Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment.\n\nTooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "romance",
              "shoujo",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1085/114792l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1085/114792.jpg"
            },
            "start_date": "2021-04-06",
            "end_date": "2021-06-29",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "924817c5-1822-44fa-8b9c-136006b19fa9"
          },
          {
            "title": "Gintama.",
            "title_english": "Gintama Season 5",
            "mean": 8.99,
            "synopsis": "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former teacher.\n\nHitching a ride on Sakamoto's space ship, the Yorozuya and Katsura set out for Rakuyou, Kagura's home planet, where the various factions have gathered and tensions are brewing. Long-held grudges, political infighting, and the Tendoushuu's sinister overarching plan finally culminate into a massive, decisive battle on Rakuyou.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/3/83528l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/3/83528.jpg"
            },
            "start_date": "2017-01-09",
            "end_date": "2017-03-27",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "9a32e350-f071-4582-b31f-cd84fe263955"
          },
          {
            "title": "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
            "title_english": "Kaguya-sama: Love is War - The First Kiss That Never Ends",
            "mean": 8.99,
            "synopsis": "New Kaguya-sama wa Kokurasetai anime.",
            "genres": [
              "comedy",
              "drama",
              "romance",
              "school",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1670/130060l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1670/130060.jpg"
            },
            "start_date": "2022-12-17",
            "end_date": "2022-12-17",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "dd60cba6-59e0-4ef0-8402-091ade2647ba"
          },
          {
            "title": "3-gatsu no Lion 2nd Season",
            "title_english": "March Comes In Like A Lion 2nd Season",
            "mean": 8.94,
            "synopsis": "Now in his second year of high school, Rei Kiriyama continues pushing through his struggles in the professional shogi world as well as his personal life. Surrounded by vibrant personalities at the shogi hall, the school club, and in the local community, his solitary shell slowly begins to crack. Among them are the three Kawamoto sisters—Akari, Hinata, and Momo—who forge an affectionate and familial bond with Rei. Through these ties, he realizes that everyone is burdened by their own emotional hardships and begins learning how to rely on others while supporting them in return. \n\nNonetheless, the life of a professional is not easy. Between tournaments, championships, and title matches, the pressure mounts as Rei advances through the ranks and encounters incredibly skilled opponents. As he manages his relationships with those who have grown close to him, the shogi player continues to search for the reason he plays the game that defines his career.\n\n[Written by MAL Rewrite]",
            "genres": [
              "childcare",
              "drama",
              "iyashikei",
              "seinen",
              "slice of life",
              "strategy game"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/3/88469l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/3/88469.jpg"
            },
            "start_date": "2017-10-14",
            "end_date": "2018-03-31",
            "num_episodes": 22,
            "status": "finished_airing",
            "id": "490b1934-1ade-4e8b-aeff-d8b9c73bc96a"
          },
          {
            "title": "Clannad: After Story",
            "title_english": "Clannad: After Story",
            "mean": 8.94,
            "synopsis": "Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds.\n\nTime also moves on in the Illusionary World. As the plains grow cold with the approach of winter, the Illusionary Girl and the Garbage Doll are presented with a difficult situation that reveals the World's true purpose.\n\nBased on the visual novel by Key and produced by Kyoto Animation, Clannad: After Story is an impactful drama highlighting the importance of family and the struggles of adulthood.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "romance",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1299/110774l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1299/110774.jpg"
            },
            "start_date": "2008-10-03",
            "end_date": "2009-03-27",
            "num_episodes": 24,
            "status": "finished_airing",
            "id": "3ac2f545-fc30-4ff9-ad24-5b1e67425ec5"
          },
          {
            "title": "Gintama",
            "title_english": "Gintama",
            "mean": 8.94,
            "synopsis": "Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan's surrender to powerful aliens known as the \"Amanto,\" those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. \n\nEnter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. \n\nAssisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people's heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/10/73274l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/10/73274.jpg"
            },
            "start_date": "2006-04-04",
            "end_date": "2010-03-25",
            "num_episodes": 201,
            "status": "finished_airing",
            "id": "888a0d2c-3e6d-437e-a693-d4f88f93acd9"
          },
          {
            "title": "Koe no Katachi",
            "title_english": "A Silent Voice",
            "mean": 8.94,
            "synopsis": "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.\n\nNow in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.\n\nKoe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.\n \n[Written by MAL Rewrite]",
            "genres": [
              "award winning",
              "drama",
              "romantic subtext",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1122/96435l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1122/96435.jpg"
            },
            "start_date": "2016-09-17",
            "end_date": "2016-09-17",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "9dcbe453-8e11-413f-9c95-da3f4a8da99f"
          },
          {
            "title": "Bocchi the Rock!",
            "title_english": "Bocchi the Rock!",
            "mean": 8.93,
            "synopsis": "Yearning to make friends and perform live with a band, lonely and socially anxious Hitori \"Bocchi\" Gotou devotes her time to playing the guitar. On a fateful day, Bocchi meets the outgoing drummer Nijika Ijichi, who invites her to join Kessoku Band when their guitarist, Ikuyo Kita, flees before their first show. Soon after, Bocchi meets her final bandmate—the cool bassist Ryou Yamada. \n\nAlthough their first performance together is subpar, the girls feel empowered by their shared love for music, and they are soon rejoined by Kita. Finding happiness in performing, Bocchi and her bandmates put their hearts into improving as musicians while making the most of their fleeting high school days.\n\n[Written by MAL Rewrite]",
            "genres": [
              "cgdct",
              "comedy",
              "music"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1448/127956l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1448/127956.jpg"
            },
            "start_date": "2022-10-09",
            "end_date": "2022-12-25",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "6129154d-7ab0-4d06-8ef5-c598cc7dd1f8"
          },
          {
            "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
            "title_english": "",
            "mean": 8.92,
            "synopsis": "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the \"White Plague\" has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal.\n\nSetting out in the disguise given to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side, he doesn't have to fight alone.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen",
              "time travel"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/10/51723l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/10/51723.jpg"
            },
            "start_date": "2013-07-06",
            "end_date": "2013-07-06",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "2cd575e9-bc16-4cfd-b705-80f95a9331cc"
          },
          {
            "title": "Code Geass: Hangyaku no Lelouch R2",
            "title_english": "Code Geass: Lelouch of the Rebellion R2",
            "mean": 8.91,
            "synopsis": "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt. \n\nLelouch Lamperouge, having lost all memory of his double life, is living peacefully alongside his friends as a high school student at Ashford Academy. His former partner C.C., unable to accept this turn of events, takes it upon herself to remind him of his past purpose, hoping that the mastermind Zero will rise once again to finish what he started, in this thrilling conclusion to the series.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "award winning",
              "drama",
              "mecha",
              "military",
              "sci-fi",
              "super power"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/4/9391l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/4/9391.jpg"
            },
            "start_date": "2008-04-06",
            "end_date": "2008-09-28",
            "num_episodes": 25,
            "status": "finished_airing",
            "id": "61b20b4f-eb58-4bd2-97b0-c3a8ca53cb13"
          },
          {
            "title": "Violet Evergarden Movie",
            "title_english": "Violet Evergarden the Movie",
            "mean": 8.91,
            "synopsis": "Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for \"Auto Memory Dolls.\" Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear.\n\nViolet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, \"I love you,\" may still be alive even after the many years that have passed.\n\n[Written by MAL Rewrite]",
            "genres": [
              "award winning",
              "drama",
              "fantasy"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1825/110716l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1825/110716.jpg"
            },
            "start_date": "2020-09-18",
            "end_date": "2020-09-18",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "00174588-643c-49b5-a488-d1dc48d65365"
          },
          {
            "title": "Owarimonogatari 2nd Season",
            "title_english": "Owarimonogatari Second Season",
            "mean": 8.89,
            "synopsis": "Following an encounter with oddity specialist Izuko Gaen, third-year high school student Koyomi Araragi wakes up in a strange, deserted void only to be greeted by a joyfully familiar face in an alarmingly unfamiliar place.  \n\nAraragi, with the help of his girlfriend Hitagi Senjougahara, maneuvers through the webs of his past and the perplexities of the present in search of answers. However, fate once again delivers him to the eccentric transfer student Ougi Oshino, who brings forth an unexpected proposal that may unearth the very foundation to which he is anchored. As Araragi peels back the layers of mystery surrounding an apparition, he discovers a truth not meant to be revealed.\n\n[Written by MAL Rewrite]",
            "genres": [
              "comedy",
              "mystery",
              "supernatural",
              "vampire"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/6/87322l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/6/87322.jpg"
            },
            "start_date": "2017-08-12",
            "end_date": "2017-08-13",
            "num_episodes": 7,
            "status": "finished_airing",
            "id": "0257eee6-73c8-44f5-b6ec-a7d4e92377e4"
          },
          {
            "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
            "title_english": "Gintama.: Silver Soul Arc - Second Half War",
            "mean": 8.88,
            "synopsis": "Following the temporary retreat of the Altana Liberation Army from the Kabuki District, the state of the war has seemingly improved. However, as the Oniwaban, Shinsengumi, and residents of the district combat the army's remnants, Edo's greatest inventor Gengai Hiraga is abducted. Responsible for causing the enemy's withdrawal by rendering their weapons useless, Gengai's nanomachine virus is now at risk of being shut down.\n\nMeanwhile, a laser capable of obliterating a planet is activated in Earth's orbit on the Liberation Army's mother ship. Another battle ensues when Shinsuke Takasugi and the rest of the Kiheitai arrive on the vessel to stop the weapon from firing. Forced to fight a war on two fronts, the Yorozuya and their allies must prevail on both sides to save Edo and the rest of the world.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1776/96566l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1776/96566.jpg"
            },
            "start_date": "2018-07-09",
            "end_date": "2018-10-08",
            "num_episodes": 14,
            "status": "finished_airing",
            "id": "e696233b-6981-4cc2-b9a6-125e3dfa39da"
          },
          {
            "title": "Monster",
            "title_english": "Monster",
            "mean": 8.86,
            "synopsis": "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.\n\nSo when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director. \n\nNine years later when Dr. Tenma saves the life of a criminal, his past comes back to haunt him—once again, he comes face to face with the monster he operated on. He must now embark on a quest of pursuit to make amends for the havoc spread by the one he saved.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "drama",
              "mystery",
              "psychological",
              "seinen",
              "suspense"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/10/18793l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/10/18793.jpg"
            },
            "start_date": "2004-04-07",
            "end_date": "2005-09-28",
            "num_episodes": 74,
            "status": "finished_airing",
            "id": "d5b32ada-89f3-446d-aa2d-8b5f23a06784"
          },
          {
            "title": "Kimi no Na wa.",
            "title_english": "Your Name.",
            "mean": 8.85,
            "synopsis": "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n\nKimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.\n\n[Written by MAL Rewrite]",
            "genres": [
              "award winning",
              "drama",
              "romantic subtext",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/5/87048l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/5/87048.jpg"
            },
            "start_date": "2016-08-26",
            "end_date": "2016-08-26",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "7a401d6a-f3aa-4e90-a374-b1c2f71748bf"
          },
          {
            "title": "Kimetsu no Yaiba: Yuukaku-hen",
            "title_english": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
            "mean": 8.82,
            "synopsis": "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Pillar, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank demon.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "fantasy",
              "historical",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1908/120036l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1908/120036.jpg"
            },
            "start_date": "2021-12-05",
            "end_date": "2022-02-13",
            "num_episodes": 11,
            "status": "finished_airing",
            "id": "6298a8e4-7289-46e8-b19f-8fe29d2a7b97"
          },
          {
            "title": "Kingdom 3rd Season",
            "title_english": "Kingdom: Season 3",
            "mean": 8.82,
            "synopsis": "Following the successful Sanyou campaign, the Qin army, including 1,000-Man Commander Xin, inches ever closer to fulfilling King Ying Zheng's dream of unifying China. With a major geographical foothold in the state of Wei now under its control, Qin sets its sights eastward toward the remaining warring states.\n\nMeanwhile Li Mu—an unparalleled strategist and the newly appointed prime minister of the state of Zhao—has taken advantage of Zhao's temporary truce with Qin to negotiate with the other states without interruption. Seemingly without warning, Ying Zheng receives news that armies from the states of Chu, Zhao, Wei, Han, Yan, and Qi have crossed into Qin territory. Realizing too late the purpose behind Li Mu's truce with Qin, Zheng quickly gathers his advisors to devise a plan to address the six-state coalition army on their doorstep. For the first time in history, the state of Qin faces complete destruction and must use every resource and strategy at their disposal to prevent themselves from being wiped off the map.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "historical",
              "military",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1443/111830l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1443/111830.jpg"
            },
            "start_date": "2020-04-06",
            "end_date": "2021-10-17",
            "num_episodes": 26,
            "status": "finished_airing",
            "id": "2c670fd9-5b1d-412c-89e4-f9e9e9f88e87"
          },
          {
            "title": "Gintama.: Shirogane no Tamashii-hen",
            "title_english": "Gintama.: Silver Soul Arc",
            "mean": 8.81,
            "synopsis": "After the fierce battle on Rakuyou, the untold past and true goal of the immortal Naraku leader, Utsuro, are finally revealed. By corrupting the Altana reserves of several planets, Utsuro has successfully triggered the intervention of the Tendoshuu’s greatest enemy: the Altana Liberation Army. With Earth as the main battleground in this interplanetary war, Utsuro's master plan to destroy the planet—and himself—is nearly complete. \n\nAn attack on the O-Edo Central Terminal marks the beginning of the final battle to take back the land of the samurai. With the Yorozuya nowhere in sight, the bakufu all but collapsed, and the Shogun missing, the people are left completely helpless as the Liberation Army begins pillaging Edo in the name of freeing them from the Tendoshuu's rule. \n\nCaught in the crossfire between two equally imposing forces, can Gintoki, Kagura, Shinpachi, and the former students of Shouyou Yoshida put aside their differences and unite their allies to protect what they hold dear?\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "gag humor",
              "historical",
              "parody",
              "samurai",
              "sci-fi",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/12/89603l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/12/89603.jpg"
            },
            "start_date": "2018-01-08",
            "end_date": "2018-03-26",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "81ef94ca-a841-4005-85b6-59ffd00e2d7c"
          },
          {
            "title": "Mob Psycho 100 II",
            "title_english": "Mob Psycho 100 II",
            "mean": 8.81,
            "synopsis": "Shigeo \"Mob\" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens.\n\nWhile the workflow remains the same, Mob isn't just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob's supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "super power",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1918/96303l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1918/96303.jpg"
            },
            "start_date": "2019-01-07",
            "end_date": "2019-04-01",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "e44a1445-5f54-4a7a-82b3-68e3551aa481"
          },
          {
            "title": "Shingeki no Kyojin: The Final Season",
            "title_english": "Attack on Titan: The Final Season",
            "mean": 8.81,
            "synopsis": "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.\n\nHaving finally reached the Yeager family basement and learned about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.\n\nIn Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "drama",
              "gore",
              "military",
              "shounen",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1000/110531l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1000/110531.jpg"
            },
            "start_date": "2020-12-07",
            "end_date": "2021-03-29",
            "num_episodes": 16,
            "status": "finished_airing",
            "id": "aaaa274a-35eb-4414-b221-5aa32ed210e6"
          },
          {
            "title": "Kizumonogatari III: Reiketsu-hen",
            "title_english": "Kizumonogatari Part 3: Cold-Blooded",
            "mean": 8.79,
            "synopsis": "After helping revive the legendary vampire Kiss-shot Acerola-orion Heart-under-blade, Koyomi Araragi has become a vampire himself and her servant. Kiss-shot is certain she can turn him back into a human, but only once regaining her full power. \n\nAraragi has hunted down the three vampire hunters that defeated Kiss-shot and retrieved her limbs to return her to full strength. However, now that Araragi has almost accomplished what he’s been fighting for this whole time, he has to consider if this is what he really wants. Once he revives this powerful immortal vampire, there is no telling what she might do, and there would be no way of stopping her.\n\nBut there is more to the story that Araragi doesn’t understand. If a newborn vampire like him could defeat the hunters, how did they overpower Kiss-shot? Can he trust her to turn him back to a human? And how is that even possible in the first place?\n\nAraragi is at his limit but he must come to a decision, and it may not be possible to resolve this situation without doing something he’ll regret…\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "mystery",
              "supernatural",
              "vampire"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1084/112813l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1084/112813.jpg"
            },
            "start_date": "2017-01-06",
            "end_date": "2017-01-06",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "d5d0381b-c52c-46a7-b9f4-7d0988f0dd2b"
          },
          {
            "title": "Sen to Chihiro no Kamikakushi",
            "title_english": "Spirited Away",
            "mean": 8.78,
            "synopsis": "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.\n\nVivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adventure",
              "award winning",
              "mythology",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/6/79597l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/6/79597.jpg"
            },
            "start_date": "2001-07-20",
            "end_date": "2001-07-20",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "63d6d90a-7ab9-4ecc-9647-322ea7742b29"
          },
          {
            "title": "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
            "title_english": "Haikyu!! 3rd Season",
            "mean": 8.78,
            "synopsis": "After the victory against Aoba Jousai High, Karasuno High School, once called “a fallen powerhouse, a crow that can’t fly,” has finally reached the climax of the heated Spring tournament. Now, to advance to nationals, the Karasuno team has to defeat the powerhouse Shiratorizawa Academy. Karasuno’s greatest hurdle is their adversary’s ace, Wakatoshi Ushijima, the number one player in the Miyagi Prefecture, and one of the country’s top three aces.\n\nOnly the strongest team will make it to the national tournament. Since this match is the third-year players’ last chance to qualify for nationals, Karasuno has to use everything they learned during the training camp and prior matches to attain victory. Filled with restlessness and excitement, both teams are determined to come out on top in the third season of Haikyuu!!.\n\n[Written by MAL Rewrite] ",
            "genres": [
              "school",
              "shounen",
              "sports",
              "team sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/7/81992l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/7/81992.jpg"
            },
            "start_date": "2016-10-08",
            "end_date": "2016-12-10",
            "num_episodes": 10,
            "status": "finished_airing",
            "id": "6c7c0ab0-e320-44e1-a45d-633c94de97d9"
          },
          {
            "title": "Vinland Saga Season 2",
            "title_english": "Vinland Saga Season 2",
            "mean": 8.77,
            "synopsis": "After his father's death and the destruction of his village at the hands of English raiders, Einar wishes for a peaceful life with his family on their newly rebuilt farms. However, fate has other plans: his village is invaded once again. Einar watches helplessly as the marauding Danes burn his lands and slaughter his family. The invaders capture Einar and take him back to Denmark as a slave. \n\nEinar clings to his mother's final words to survive. He is purchased by Ketil, a kind slave owner and landlord who promises that Einar can regain his freedom in return for working in the fields. Soon, Einar encounters his new partner in farm cultivation—Thorfinn, a dejected and melancholic slave. As Einar and Thorfinn work together toward their freedom, they are haunted by both sins of the past and the ploys of the present. Yet they carry on, grasping for a glimmer of hope, redemption, and peace in a world that is nothing but unjust and unforgiving.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "drama",
              "gore",
              "historical",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1170/124312l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1170/124312.jpg"
            },
            "start_date": "2023-01-10",
            "end_date": null,
            "num_episodes": 24,
            "status": "currently_airing",
            "id": "8ee4ce00-0a72-49e2-956e-04a19772a770"
          },
          {
            "title": "Monogatari Series: Second Season",
            "title_english": "Monogatari Series: Second Season",
            "mean": 8.77,
            "synopsis": "Apparitions, oddities, and gods continue to manifest around Koyomi Araragi and his close-knit group of friends: Tsubasa Hanekawa, the group's modest genius; Shinobu Oshino, the resident doughnut-loving vampire; athletic deviant Suruga Kanbaru; bite-happy spirit Mayoi Hachikuji; Koyomi's cutesy stalker Nadeko Sengoku; and Hitagi Senjougahara, Koyomi's aloof classmate.\n\nMonogatari Series: Second Season revolves around these individuals and their struggle to overcome the darkness that is rapidly approaching. A new semester has begun and with graduation looming over Koyomi, he must quickly decide the paths he will walk, as well as the relationships and friends that he'll save. But as strange events begin to unfold, Koyomi is nowhere to be found, and a vicious tiger apparition has appeared in his absence. Hanekawa has become its target, and she must fend for herself—or bow to the creature's perspective on the feebleness of humanity.\n\n[Written by MAL Rewrite]",
            "genres": [
              "comedy",
              "mystery",
              "romance",
              "supernatural",
              "vampire"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1807/121534l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1807/121534.jpg"
            },
            "start_date": "2013-07-07",
            "end_date": "2013-12-29",
            "num_episodes": 26,
            "status": "finished_airing",
            "id": "224c7199-723d-44c0-9812-c74a69c0d7dc"
          },
          {
            "title": "Shingeki no Kyojin: The Final Season Part 2",
            "title_english": "Attack on Titan: The Final Season Part 2",
            "mean": 8.77,
            "synopsis": "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.\n\nMeanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos.\n\nElsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their friend's very soul.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "drama",
              "gore",
              "military",
              "shounen",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1948/120625l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1948/120625.jpg"
            },
            "start_date": "2022-01-10",
            "end_date": "2022-04-04",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "87c873f0-dd75-4053-a1dc-c6eac192a399"
          },
          {
            "title": "Shiguang Dailiren",
            "title_english": "Link Click",
            "mean": 8.75,
            "synopsis": "It is said that a picture is worth a thousand words. In this case, it holds an infinite amount of secrets. These are secrets that only Cheng Xiaoshi and Lu Guang are able to find. In a small shop called \"Time Photo Studio,\" the two friends provide a special service: using their extraordinary powers that let them enter photographs, they jump into pictures brought to them by clients in order to grant their wishes. Through the eyes of the photographer, they live through the events surrounding the picture and try to decipher how to solve their client's request.\n\nBut every time they jump into a picture, they take a great risk. One wrong move and they could alter the future of the person who took the picture... and possibly countless other events too. So when the events they are forced to live through in these pictures start to become personal, it will take the utmost strength to push their feelings aside and focus on accomplishing the task they were paid to do.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "drama",
              "supernatural",
              "time travel"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1135/114867l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1135/114867.jpg"
            },
            "start_date": "2021-04-30",
            "end_date": "2021-07-09",
            "num_episodes": 11,
            "status": "finished_airing",
            "id": "3952e3e0-0854-4f43-9070-df2caca00901"
          },
          {
            "title": "Cowboy Bebop",
            "title_english": "Cowboy Bebop",
            "mean": 8.75,
            "synopsis": "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "adult cast",
              "award winning",
              "sci-fi",
              "space"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/4/19644l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/4/19644.jpg"
            },
            "start_date": "1998-04-03",
            "end_date": "1999-04-24",
            "num_episodes": 26,
            "status": "finished_airing",
            "id": "ffd4bdaa-2613-476b-af1f-fee5a87c1d47"
          },
          {
            "title": "Hajime no Ippo",
            "title_english": "Fighting Spirit",
            "mean": 8.75,
            "synopsis": "In his father's absence, teenager Ippo Makunouchi works hard to help his mother run her fishing boat rental business. Ippo's timid nature, his lack of sleep, and the sea smell make him an easy target for relentless bullies who leave him bruised and beaten on a daily basis. Mamoru Takamura, an up-and-coming boxer, rescues Ippo from a violent after-school incident and takes him back to the Kamogawa Boxing Gym for recovery. Takamura and his fellow boxers, Masaru Aoki and Tatsuya Kimura, are stunned by Ippo's powerful punches—a result of strong muscles developed through years serving his physically taxing family business. \n\nFollowing brief training under Takamura, Ippo impresses the other boxers in a practice match against prodigy Ichirou Miyata. He gains a rival in Miyata and a coach in Genji Kamogawa, the gym owner and a former boxer himself. As Ippo takes the first steps in his official boxing career, he faces off against a series of challenging opponents, each more powerful than the last. Victory, loss, and a cycle of dedicated training await Ippo on his journey to achieve greatness. With his tough body and unstoppable fighting spirit, the kind young man seeks to take on the world.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "combat sports",
              "shounen",
              "sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/4/86334l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/4/86334.jpg"
            },
            "start_date": "2000-10-04",
            "end_date": "2002-03-27",
            "num_episodes": 75,
            "status": "finished_airing",
            "id": "3cc87d43-75fd-46fb-9188-ae95e7cd8260"
          },
          {
            "title": "Mob Psycho 100 III",
            "title_english": "Mob Psycho 100 III",
            "mean": 8.74,
            "synopsis": "After foiling a world-threatening plot, Shigeo \"Mob\" Kageyama returns to tackle the more exhausting aspects of his mundane life—starting with filling out his school's nerve-racking career form. Meanwhile, he continues to assist his mentor Arataka Reigen and the office's new recruit, Katsuya Serizawa, in solving paranormal cases of their clients. While continuing his duties, Mob also works on gaining more independence in his esper and human lives, as well as trying to integrate better with the people around him.\n\nHowever, new supernatural and ordinary challenges test Mob’s emotional stability and force him to confront the realities around him. As he strives to continue forward on the path to maturity, Mob must resolve his emotional crises and reassess the naivety he has held on for so long.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "comedy",
              "super power",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1228/125011l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1228/125011.jpg"
            },
            "start_date": "2022-10-06",
            "end_date": "2022-12-22",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "03ec5350-a3f5-4a9b-92d6-8019736a582b"
          },
          {
            "title": "Kingdom 4th Season",
            "title_english": "Kingdom: Season 4",
            "mean": 8.75,
            "synopsis": "Following the conclusion of the large-scale coalition campaign, the entirety of China is in a state of economic recovery. The victor of the battle, the state of Qin, is no different. There, the political parties led by Ying Zheng and Buwei Lü continue their inner conflict. Having played the role of king in the coalition battle, Zheng has the trust of the people—but Lü is far from out of the fight. In 18 months, he plans to interrupt Zheng's coming-of-age ceremony.\n\nMeanwhile, a Zhao army numbering 20,000 troops has set out toward Qin. In the royal court, due to the lack of generals capable of responding to the incoming threat, Lü slyly suggests that Zheng take command. However, Cheng Jiao, Zheng's half-brother, volunteers instead. As they grew to trust each other during the coalition battle, Zheng now accepts Jiao as his replacement.\n\nHowever, the Zhao forces retreat a mere half-day after clashing with Jiao's army. With trouble quickly brewing in the shadows, the internal struggle of Qin is only complicated further. There are only two men Zheng feels he can rely on: Bi, a general who commands 30,000 men; and Xin, the leader of the Fei Xin force.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "historical",
              "military",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1566/122794l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1566/122794.jpg"
            },
            "start_date": "2022-04-10",
            "end_date": "2022-10-02",
            "num_episodes": 26,
            "status": "finished_airing",
            "id": "91acad6f-a1f6-4bee-be70-d45849ee08a3"
          },
          {
            "title": "Mushishi Zoku Shou 2nd Season",
            "title_english": "Mushi-shi: Next Passage Part 2",
            "mean": 8.73,
            "synopsis": "Ghostly, primordial beings known as Mushi continue to cause mysterious changes in the lives of humans. The travelling Mushishi, Ginko, persists in trying to set right the strange and unsettling situations he encounters. Time loops, living shadows, and telepathy are among the overt effects of interference from Mushi, but more subtle symptoms that take years to be noticed also rouse Ginko's concern as he passes from village to village.\n\nThrough circumstance, Ginko has become an arbiter, determining which Mushi are blessings and which are curses. But the lines that he seeks to draw are subjective. Some of his patients would rather exercise their new powers until they are utterly consumed by them; others desperately strive to rid themselves of afflictions which are in fact protecting their lives from devastation. Those who cross paths with Mushi must learn to accept seemingly impossible consequences for their actions, and heal wounds they did not know they had. Otherwise, they risk meeting with fates beyond their comprehension.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "adventure",
              "fantasy",
              "historical",
              "iyashikei",
              "mystery",
              "seinen",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/9/68095l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/9/68095.jpg"
            },
            "start_date": "2014-10-19",
            "end_date": "2014-12-21",
            "num_episodes": 10,
            "status": "finished_airing",
            "id": "f6772010-34e7-437e-bdc8-83d134322003"
          },
          {
            "title": "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen",
            "title_english": "Descending Stories: Showa Genroku Rakugo Shinju",
            "mean": 8.73,
            "synopsis": "Even after having risen to the utmost rank of shin'uchi, Yotarou struggles to find his own identity in the world of rakugo. Caught between his master's teachings and the late Sukeroku's unique style, his performance lacks an important ingredient—ego. And while his popularity packs the theaters, he is but one of the few; rakugo is under threat of being eclipsed.\n\nMeanwhile Yakumo, regarded by many as the last bastion of preserving the popularity of rakugo, struggles to cope with his elderly state. Even though his performances are still stellar, he fears that he is nearing his limits. His doubts grow stronger as an old friend creeps ever closer. Konatsu, for her part, attempts to raise her son as a single mother, which Yotarou is heavily opposed to. Instead, he seeks to persuade her to marry him and in turn raise her son as his own.\n\nIn Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen, the curtains fall on Yotarou and Yakumo's story, tasked with restoring the near-obsolete art form as well as overcoming their internal conflicts.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "drama",
              "historical",
              "josei",
              "love polygon",
              "performing arts"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1493/124765l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1493/124765.jpg"
            },
            "start_date": "2017-01-07",
            "end_date": "2017-03-25",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "b84a86eb-98dc-47f4-8331-14d8495015da"
          },
          {
            "title": "Vinland Saga",
            "title_english": "",
            "mean": 8.73,
            "synopsis": "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, \"You have no enemies, nobody does. There is nobody who it's okay to hurt,\" as he grew, Thorfinn knew that nothing was further from the truth.\n\nThe war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "drama",
              "gore",
              "historical",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1500/103005l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1500/103005.jpg"
            },
            "start_date": "2019-07-08",
            "end_date": "2019-12-30",
            "num_episodes": 24,
            "status": "finished_airing",
            "id": "776a7136-0ba6-4013-8118-d40b95dbf1b0"
          },
          {
            "title": "86 Part 2",
            "title_english": "86 Eighty-Six Part 2",
            "mean": 8.71,
            "synopsis": "The disappearance of the Spearhead Squadron beyond the horizon does little to hide the intensity of the Republic of San Magnolia's endless propaganda. Vladilena Milizé continues to operate as \"Handler One,\" the commander of yet another dehumanized 86th faction's squadron in the continuous war against the Legion.\n\nOn the Western Front, Shinei Nouzen and his squad are quarantined in a military base controlled by the Federal Republic of Giad, formerly known as the Giadian Empire. The newly-established government grants the saved Eighty-Six full citizenship and freedom. Housed by the president Ernst Zimmerman himself, the group meets his adoptive daughter and the last Empress, Augusta Frederica Adel-Adler.\n\nHowever, within the calm of this tender society, Shinei and his team feel that their purpose is on the battlefield. Before long, they are once again in the midst of the Legion's onslaught as a part of the Federacy's Nordlicht Squadron, accompanied by Augusta Frederica. But, as history repeats itself, they realize that no matter the side, death and pain on the front lines are the only comfort they know.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "drama",
              "mecha",
              "military",
              "sci-fi"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1321/117508l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1321/117508.jpg"
            },
            "start_date": "2021-10-03",
            "end_date": "2022-03-19",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "5964da16-2031-4a17-849e-b79c011fd110"
          },
          {
            "title": "Ashita no Joe 2",
            "title_english": "Tomorrow's Joe 2",
            "mean": 8.71,
            "synopsis": "Yabuki Joe is left downhearted and hopeless after a certain tragic event. In attempt to put the past behind him, Joe leaves the gym behind and begins wandering. On his travels he comes across the likes of Wolf Kanagushi and Goromaki Gondo, men who unintentionally fan the dying embers inside him, leading him to putting his wanderings to an end. His return home puts Joe back on the path to boxing, but unknown to himself and his trainer, he now suffers deep-set issues holding him back from fighting. In attempt to quell those issues, Carlos Rivera, a world renowned boxer is invited from Venezuela to help Joe recover.",
            "genres": [
              "combat sports",
              "drama",
              "shounen",
              "sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/3/45028l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/3/45028.jpg"
            },
            "start_date": "1980-10-13",
            "end_date": "1981-08-31",
            "num_episodes": 47,
            "status": "finished_airing",
            "id": "f72fd90b-46a4-4c22-8832-67ac99ef341d"
          },
          {
            "title": "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2",
            "title_english": "Mushoku Tensei: Jobless Reincarnation Part 2",
            "mean": 8.71,
            "synopsis": "After the mysterious mana calamity, Rudeus Greyrat and his fierce student Eris Boreas Greyrat are teleported to the Demon Continent. There, they team up with their newfound companion Ruijerd Supardia—the former leader of the Superd's Warrior group—to form \"Dead End,\" a successful adventurer party. Making a name for themselves, the trio journeys across the continent to make their way back home to Fittoa.\n\nFollowing the advice he received from the faceless god Hitogami, Rudeus saves Kishirika Kishirisu, the Great Emperor of the Demon World, who rewards him by granting him a strange power. Now, as Rudeus masters the powerful ability that offers a number of new opportunities, it might prove to be more than what he bargained for when unexpected dangers threaten to hinder their travels.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "ecchi",
              "fantasy",
              "isekai",
              "reincarnation"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1028/117777l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1028/117777.jpg"
            },
            "start_date": "2021-10-04",
            "end_date": "2021-12-20",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "5386c9ab-0292-4f6a-a3ab-f8ccf9d8dcea"
          },
          {
            "title": "Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen",
            "title_english": "Samurai X: Trust and Betrayal",
            "mean": 8.71,
            "synopsis": "When mankind's savagery surpasses his fear of death, there is little hope for those who wish to live honest lives. Beneath a full moon, a young boy witnesses the murder of the bandits who had enslaved him, and is then christened with a new name by the man who rescued him. This boy is Shinta, now known as Kenshin Himura, and he is destined to become a swordsman. The softness of his heart does not befit the occupation, but his desire to protect the innocent is absolute.\n\nRurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen details the origins of the man who would bear the name of Hitokiri Battousai long before he swore his oath not to kill and before he earned his reputation as an assassin. The young man's heart is divided between justice and corruption, while the fate of a nation rests on his actions.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adult cast",
              "drama",
              "historical",
              "martial arts",
              "romance",
              "samurai",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1391/120839l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1391/120839.jpg"
            },
            "start_date": "1999-02-20",
            "end_date": "1999-09-22",
            "num_episodes": 4,
            "status": "finished_airing",
            "id": "5be41ff3-32b2-4e58-8561-16ec09eb12cd"
          },
          {
            "title": "Mushishi Zoku Shou",
            "title_english": "Mushi-shi: Next Passage Part 1",
            "mean": 8.7,
            "synopsis": "Perceived as strange and feared by man, over time the misshapen ones came to be known as Mushi. Although they harbor no ill intentions towards humans, many suffer from the side effects of their existence and strange nature; exploiting the Mushi without understanding them, even unintentionally, can lead to disaster and strife for any involved. Mushishi Zoku Shou continues the story of Mushishi Ginko on his journey to help the visible world to coexist with the Mushi.\n\nDuring his travels, Ginko discovers various gifted individuals—those cursed by circumstance and those maintaining a fragile symbiosis with the Mushi—inevitably confronting the question of whether humanity, talented and tortured alike, can manage the responsibility of the unseen. Moreover, as a Mushishi, Ginko must learn more about these strange beings and decide if he has the right to interfere with the complex relationships between Mushi and mankind.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "adventure",
              "fantasy",
              "historical",
              "iyashikei",
              "mystery",
              "seinen",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/13/58533l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/13/58533.jpg"
            },
            "start_date": "2014-04-05",
            "end_date": "2014-06-21",
            "num_episodes": 10,
            "status": "finished_airing",
            "id": "8f3bdfb2-d22b-4b42-a4f5-bdf9954949a9"
          },
          {
            "title": "Odd Taxi",
            "title_english": "Odd Taxi",
            "mean": 8.7,
            "synopsis": "Eccentric and blunt, the walrus Hiroshi Odokawa lives a relatively normal life. He drives a taxi for a living, and there he meets several unique individuals: the jobless Taichi Kabasawa who is dead-set on going viral, the mysterious nurse Miho Shirakawa, the struggling comedic duo \"Homo Sapiens,\" and Dobu, a well-known delinquent.\n\nBut Odokawa's simple way of life is about to be turned upside down. The case of a missing girl the police have been tracking leads back to him, and now both the yakuza and a duo of corrupt cops are on his tail.\n\n[Written by MAL Rewrite]",
            "genres": [
              "anthropomorphic",
              "award winning",
              "mystery"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1981/113348l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1981/113348.jpg"
            },
            "start_date": "2021-04-06",
            "end_date": "2021-06-29",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "48ed2b36-c5ab-4862-925d-b5a3ece215ff"
          },
          {
            "title": "Code Geass: Hangyaku no Lelouch",
            "title_english": "Code Geass: Lelouch of the Rebellion",
            "mean": 8.7,
            "synopsis": "In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence.\n\nLelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the \"Power of Kings.\" Realizing the vast potential of his newfound \"power of absolute obedience,\" Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "award winning",
              "drama",
              "mecha",
              "military",
              "school",
              "sci-fi",
              "super power"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/5/50331l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/5/50331.jpg"
            },
            "start_date": "2006-10-06",
            "end_date": "2007-07-29",
            "num_episodes": 25,
            "status": "finished_airing",
            "id": "1790acfc-15d5-431d-ac97-7f1285836c4a"
          },
          {
            "title": "JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3",
            "title_english": "JoJo's Bizarre Adventure: Stone Ocean Part 3",
            "mean": 8.7,
            "synopsis": "After finally escaping the confines of Green Dolphin Street Jail, Jolyne Kuujou—alongside her companions Ermes Costello and Emporio Alniño—pursues the villainous priest Enrico Pucci across the state of Florida. Jolyne's allies, Weather Report and Narciso Anasui, struggle to catch up with her in order to help bring an end to Pucci's plot. As both parties pursue the priest, they must battle against Pucci's band of enemy Stand users.\n\nWhile Jolyne's comrades fight for their lives, Pucci races to the Kennedy Space Center. There he hopes to enact his ultimate goal, one he believes God has entrusted to him. He aims to fulfill the will of the Joestars' blood enemy Dio Brando and—by robbing humanity of free will and making them slaves to fate—to create a world where all humans are blissfully happy.\n\nUnable to rely on the aid of her comatose father Joutarou, Jolyne must weaponize all she has learned in prison to confront Pucci in a climactic battle while the world itself hangs in the balance.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "shounen",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1233/128920l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1233/128920.jpg"
            },
            "start_date": "2022-12-01",
            "end_date": "2022-12-01",
            "num_episodes": 14,
            "status": "finished_airing",
            "id": "676822e1-f8a3-4ff7-8e5e-ef69a8bc889a"
          },
          {
            "title": "Fate/stay night Movie: Heaven's Feel - III. Spring Song",
            "title_english": "Fate/stay night: Heaven's Feel - III. Spring Song",
            "mean": 8.69,
            "synopsis": "The Fifth Holy Grail War in Fuyuki City has reached a turning point in which the lives of all participants are threatened as the hidden enemy finally reveals itself. As Shirou Emiya, Rin Toosaka, and Illyasviel von Einzbern discover the true, corruptive nature of the shadow that has been rampaging throughout the city, they realize just how dire the situation is. In order to protect their beloved ones, the group must hold their own against the seemingly insurmountable enemy force—even if some of those foes were once their allies, or perhaps, something more intimate.\n\nAs the final act of this chaotic war commences, the ideals Shirou believes will soon be challenged by an excruciating dilemma: is it really possible to save a world where everything seems to have gone wrong?\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "fantasy",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1142/112957l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1142/112957.jpg"
            },
            "start_date": "2020-08-15",
            "end_date": "2020-08-15",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "978f7d60-863c-4242-a941-5623c6b3864c"
          },
          {
            "title": "Great Teacher Onizuka",
            "title_english": "Great Teacher Onizuka",
            "mean": 8.69,
            "synopsis": "Twenty-two-year-old Eikichi Onizuka—ex-biker gang leader, conqueror of Shonan, and virgin—has a dream: to become the greatest high school teacher in all of Japan. This isn't because of a passion for teaching, but because he wants a loving teenage wife when he's old and gray. Still, for a perverted, greedy, and lazy delinquent, there is more to Onizuka than meets the eye. So when he lands a job as the homeroom teacher of the Class 3-4 at the prestigious Holy Forest Academy—despite suplexing the Vice Principal—all of his talents are put to the test, as this class is particularly infamous.\n\nDue to their utter contempt for all teachers, the class' students use psychological warfare to mentally break any new homeroom teacher they get, forcing them to quit and leave school. However, Onizuka isn't your average teacher, and he's ready for any challenge in his way.\n\nBullying, suicide, and sexual harassment are just a few of the issues his students face daily. By tackling the roots of their problems, Onizuka supports them with his unpredictable and unconventional methods—even if it means jumping off a building to save a suicidal child. Thanks to his eccentric charm and fun-loving nature, Class 3-4 slowly learns just how enjoyable school can be when you're the pupils of the Great Teacher Onizuka.\n\n[Written by MAL Rewrite]",
            "genres": [
              "comedy",
              "delinquents",
              "drama",
              "school",
              "shounen",
              "workplace"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/13/11460l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/13/11460.jpg"
            },
            "start_date": "1999-06-30",
            "end_date": "2000-09-17",
            "num_episodes": 43,
            "status": "finished_airing",
            "id": "50a59535-72d8-428a-bd73-7bdf78141d25"
          },
          {
            "title": "Made in Abyss: Retsujitsu no Ougonkyou",
            "title_english": "Made in Abyss: The Golden City of the Scorching Sun",
            "mean": 8.68,
            "synopsis": "After surviving the brutal challenges of Idofront, Riko now possesses a White Whistle, allowing her to descend into the Abyss's sixth layer—The Capital of the Unreturned. Alongside Reg and Nanachi, Riko begins to explore the uncharted domain, where the ruins of the promised Golden City are located.\n\nAs the trio starts to adapt to the harsh environment, they soon encounter dangerous creatures and treacherous landscapes. Their expedition leads them to a village inhabited by strange beings known as \"hollows.\" Despite the creeping sense of unease that welcomes them, the three venture onward to uncover the mysteries of the settlement and long-lost legacies of the forgotten adventurers who once descended into the horrors of the unexplored Abyss.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adventure",
              "drama",
              "fantasy",
              "gore",
              "mystery",
              "sci-fi",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1864/122519l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1864/122519.jpg"
            },
            "start_date": "2022-07-06",
            "end_date": "2022-09-28",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "a69fec57-b905-4e56-aacd-d19fda9b0a1b"
          },
          {
            "title": "One Piece",
            "title_english": "One Piece",
            "mean": 8.68,
            "synopsis": "Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n\n[Written by MAL Rewrite] ",
            "genres": [
              "action",
              "adventure",
              "fantasy",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/6/73245l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/6/73245.jpg"
            },
            "start_date": "1999-10-20",
            "end_date": null,
            "num_episodes": 0,
            "status": "currently_airing",
            "id": "62b8e779-db8d-460c-94ee-1fde0240e3f5"
          },
          {
            "title": "Made in Abyss",
            "title_english": "Made in Abyss",
            "mean": 8.67,
            "synopsis": "The Abyss—a gaping chasm stretching down into the depths of the earth, filled with mysterious creatures and relics from a time long past. How did it come to be? What lies at the bottom? Countless brave individuals, known as Divers, have sought to solve these mysteries of the Abyss, fearlessly descending into its darkest realms. The best and bravest of the Divers, the White Whistles, are hailed as legends by those who remain on the surface.\n\nRiko, daughter of the missing White Whistle Lyza the Annihilator, aspires to become like her mother and explore the furthest reaches of the Abyss. However, just a novice Red Whistle herself, she is only permitted to roam its most upper layer. Even so, Riko has a chance encounter with a mysterious robot with the appearance of an ordinary young boy. She comes to name him Reg, and he has no recollection of the events preceding his discovery. Certain that the technology to create Reg must come from deep within the Abyss, the two decide to venture forth into the chasm to recover his memories and see the bottom of the great pit with their own eyes. However, they know not of the harsh reality that is the true existence of the Abyss.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adventure",
              "drama",
              "fantasy",
              "gore",
              "mystery",
              "sci-fi",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/6/86733l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/6/86733.jpg"
            },
            "start_date": "2017-07-07",
            "end_date": "2017-09-29",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "ab91ddee-c5b1-4ff5-a287-a0cacaa9f4b3"
          },
          {
            "title": "Mononoke Hime",
            "title_english": "Princess Mononoke",
            "mean": 8.67,
            "synopsis": "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "award winning",
              "fantasy"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/7/75919l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/7/75919.jpg"
            },
            "start_date": "1997-07-12",
            "end_date": "1997-07-12",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "46027a4a-5ba7-44b8-843e-e7a28430d2a3"
          },
          {
            "title": "Spy x Family",
            "title_english": "",
            "mean": 8.67,
            "synopsis": "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise \"Twilight\" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.\n\nIn the bustling Ostanian city of Berlint, Twilight dons the alias of \"Loid Forger,\" an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. \n\nUnfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as \"Thorn Princess\"—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "award winning",
              "childcare",
              "comedy",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1441/122795l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1441/122795.jpg"
            },
            "start_date": "2022-04-09",
            "end_date": "2022-06-25",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "d1ec3546-d35f-4840-8aac-a83b15c92e51"
          },
          {
            "title": "Violet Evergarden",
            "title_english": "Violet Evergarden",
            "mean": 8.67,
            "synopsis": "The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.\n\nRecovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an \"Auto Memory Doll,\" amanuenses that transcribe people's thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memory Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "fantasy"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1795/95088l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1795/95088.jpg"
            },
            "start_date": "2018-01-11",
            "end_date": "2018-04-05",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "e4b67810-b577-4196-bce1-91a035663032"
          },
          {
            "title": "Mushishi",
            "title_english": "Mushi-Shi",
            "mean": 8.66,
            "synopsis": "\"Mushi\": the most basic forms of life in the world. They exist without any goals or purposes aside from simply \"being.\" They are beyond the shackles of the words \"good\" and \"evil.\" Mushi can exist in countless forms and are capable of mimicking things from the natural world such as plants, diseases, and even phenomena like rainbows.\n\nThis is, however, just a vague definition of these entities that inhabit the vibrant world of Mushishi, as to even call them a form of life would be an oversimplification. Detailed information on Mushi is scarce because the majority of humans are unaware of their existence.\n\nSo what are Mushi and why do they exist? This is the question that a \"Mushishi,\" Ginko, ponders constantly. Mushishi are those who research Mushi in hopes of understanding their place in the world's hierarchy of life.\n\nGinko chases rumors of occurrences that could be tied to Mushi, all for the sake of finding an answer.\n\nIt could, after all, lead to the meaning of life itself.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "adventure",
              "fantasy",
              "historical",
              "iyashikei",
              "mystery",
              "seinen",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/2/73862l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/2/73862.jpg"
            },
            "start_date": "2005-10-23",
            "end_date": "2006-06-19",
            "num_episodes": 26,
            "status": "finished_airing",
            "id": "810711ce-6318-4641-8952-afd5a8315940"
          },
          {
            "title": "Chainsaw Man",
            "title_english": "Chainsaw Man",
            "mean": 8.66,
            "synopsis": "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.\n\nRemarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "fantasy",
              "gore",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1806/126216l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1806/126216.jpg"
            },
            "start_date": "2022-10-12",
            "end_date": "2022-12-28",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "9504efc4-d5eb-4a8e-a687-443507d34f88"
          },
          {
            "title": "Hajime no Ippo: New Challenger",
            "title_english": "Fighting Spirit: New Challenger",
            "mean": 8.66,
            "synopsis": "Japanese Featherweight Champion Ippo Makunouchi has successfully defended and retained his title. Meanwhile, his rival, Ichirou Miyata, has resurfaced in Japan, aiming for his own Featherweight belt in the Oriental Pacific Boxing Federation. When the rest of the world comes knocking, however, will Japan's best fighters rise to the challenge and achieve glory at the top? Or will the small island nation be crushed under the weight of greater entities? This time, champions will become challengers issuing a call to the rest of the world and ready to show off their fighting spirit!\n\n[Written by MAL Rewrite]",
            "genres": [
              "combat sports",
              "shounen",
              "sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/8/56617l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/8/56617.jpg"
            },
            "start_date": "2009-01-07",
            "end_date": "2009-07-01",
            "num_episodes": 26,
            "status": "finished_airing",
            "id": "bf8c013a-7a7f-4837-b1d5-632749e8ead4"
          },
          {
            "title": "Howl no Ugoku Shiro",
            "title_english": "Howl's Moving Castle",
            "mean": 8.66,
            "synopsis": "That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop. \n\nHowever, Sophie's simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste—in a fit of jealousy caused by a past discord with Howl—to put a curse on the maiden, turning her into an old woman.\n\nIn an endeavor to return to normal, Sophie must accompany Howl and a myriad of eccentric companions—ranging from a powerful fire demon to a hopping scarecrow—in his living castle, on a dangerous adventure as a raging war tears their kingdom apart.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adventure",
              "award winning",
              "drama",
              "fantasy",
              "romance"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/5/75810l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/5/75810.jpg"
            },
            "start_date": "2004-11-20",
            "end_date": "2004-11-20",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "b2e64795-bab4-43a4-812e-dbe1d8f8e43d"
          },
          {
            "title": "Jujutsu Kaisen",
            "title_english": "Jujutsu Kaisen",
            "mean": 8.65,
            "synopsis": "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the \"King of Curses.\"\n\nYuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "award winning",
              "fantasy",
              "school",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1171/109222l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1171/109222.jpg"
            },
            "start_date": "2020-10-03",
            "end_date": "2021-03-27",
            "num_episodes": 24,
            "status": "finished_airing",
            "id": "6b730d75-25c0-46b7-8fba-7b30bc9e60e1"
          },
          {
            "title": "Natsume Yuujinchou Shi",
            "title_english": "Natsume's Book of Friends Season 4",
            "mean": 8.65,
            "synopsis": "Takashi Natsume, the timid youkai expert and master of the Book of Friends, continues his journey towards self-understanding and acceptance with the help of friends both new and old. His most important ally is still his gluttonous and sake-loving bodyguard, the arrogant but fiercely protective wolf spirit Madara—or Nyanko-sensei, as Madara is called when in his usual disguise of an unassuming, pudgy cat.\n\nNatsume, while briefly separated from Nyanko-sensei, is ambushed and kidnapped by a strange group of masked, monkey-like youkai, who have spirited him away to their forest as they desperately search for the Book of Friends. Realizing that his \"servant\" has been taken out from right under his nose, Nyanko-sensei enlists the help of Natsume's youkai friends and mounts a rescue operation. However, the forest of the monkey spirits holds many dangerous enemies, including the Matoba Clan, Natsume's old nemesis.\n\nStretching from the formidable hideout of the Matoba to Natsume's own childhood home, Natsume Yuujinchou Shi is a sweeping but familiar return to a world of danger and friendship, where Natsume will finally confront the demons of his own past.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "iyashikei",
              "mythology",
              "shoujo",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/3/37449l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/3/37449.jpg"
            },
            "start_date": "2012-01-03",
            "end_date": "2012-03-27",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "3fbac6b3-554a-4afc-86a6-9bcde46ec657"
          },
          {
            "title": "Shigatsu wa Kimi no Uso",
            "title_english": "Your Lie in April",
            "mean": 8.65,
            "synopsis": "Kousei Arima is a child prodigy known as the \"Human Metronome\" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.\n\nNowadays, Kousei lives a quiet and unassuming life as a junior high school student alongside his friends Tsubaki Sawabe and Ryouta Watari. While struggling to get over his mother's death, he continues to cling to music. His monochrome life turns upside down the day he encounters the eccentric violinist Kaori Miyazono, who thrusts him back into the spotlight as her accompanist. Through a little lie, these two young musicians grow closer together as Kaori tries to fill Kousei's world with color.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "drama",
              "music",
              "romance",
              "school",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/3/67177l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/3/67177.jpg"
            },
            "start_date": "2014-10-10",
            "end_date": "2015-03-20",
            "num_episodes": 22,
            "status": "finished_airing",
            "id": "45b1e73f-22cd-4d58-963e-f23dff70e48c"
          },
          {
            "title": "Haikyuu!! Second Season",
            "title_english": "Haikyu!! 2nd Season",
            "mean": 8.64,
            "synopsis": "Following their participation at the Inter-High, the Karasuno High School volleyball team attempts to refocus their efforts, aiming to conquer the Spring tournament instead. \n\nWhen they receive an invitation from long-standing rival Nekoma High, Karasuno agrees to take part in a large training camp alongside many notable volleyball teams in Tokyo and even some national level players. By playing with some of the toughest teams in Japan, they hope not only to sharpen their skills, but also come up with new attacks that would strengthen them. Moreover, Hinata and Kageyama attempt to devise a more powerful weapon, one that could possibly break the sturdiest of blocks. \n\nFacing what may be their last chance at victory before the senior players graduate, the members of Karasuno's volleyball team must learn to settle their differences and train harder than ever if they hope to overcome formidable opponents old and new—including their archrival Aoba Jousai and its world-class setter Tooru Oikawa.\n\n[Written by MAL Rewrite]",
            "genres": [
              "school",
              "shounen",
              "sports",
              "team sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/9/76662l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/9/76662.jpg"
            },
            "start_date": "2015-10-04",
            "end_date": "2016-03-27",
            "num_episodes": 25,
            "status": "finished_airing",
            "id": "530b4431-ec07-4c86-bc23-8bbe792f8b8d"
          },
          {
            "title": "Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen",
            "title_english": "Kaguya-sama: Love is War Season 2",
            "mean": 8.64,
            "synopsis": "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk.\n\nA long and difficult election that will decide the fate of the new student council awaits, as multiple challengers fight for the coveted title of president.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "comedy",
              "psychological",
              "romantic subtext",
              "school",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1764/106659l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1764/106659.jpg"
            },
            "start_date": "2020-04-11",
            "end_date": "2020-06-27",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "57732007-74a7-4307-ab54-644b2aa22a3c"
          },
          {
            "title": "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
            "title_english": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
            "mean": 8.63,
            "synopsis": "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand.\n\nUnbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. Kimetsu no Yaiba Movie: Mugen Ressha-hen delves into the deepest corners of Tanjirou's mind, putting his resolve and commitment to duty to the test.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "fantasy",
              "historical",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1704/106947l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1704/106947.jpg"
            },
            "start_date": "2020-10-16",
            "end_date": "2020-10-16",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "9d35b0b0-ead4-4ff3-b88e-32c7a4e55396"
          },
          {
            "title": "Made in Abyss Movie 3: Fukaki Tamashii no Reimei",
            "title_english": "Made in Abyss: Dawn of the Deep Soul",
            "mean": 8.63,
            "synopsis": "After bonding over a tragic loss, the long-suffering Nanachi joins Riko and Reg on their journey into the depths of the Abyss. Awaiting the children is the Sea of Corpses—the Abyss's fifth layer, and the deepest level from which a traveler can return without losing their human form.\n\nThe masked sadist Bondrewd stands between the children and the rest of their adventure. Bondrewd's horrific laboratory serves as a final checkpoint for those wishing to traverse deeper into the Abyss, and the sociopathic scientist has no desire to allow Riko's party to pass through at no cost. Deeply scarred by Bondrewd's impact on their childhood, Nanachi is engulfed in turmoil over his resurgence in their life.\n\nBondrewd's only apparent weakness is Prushka, a brash child who claims to be his daughter. Riko, Reg, and Nanachi befriend Prushka and work with the girl to overcome her father's machinations and breach the Abyss's sixth layer.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adventure",
              "drama",
              "fantasy",
              "gore",
              "mystery",
              "sci-fi",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1502/110723l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1502/110723.jpg"
            },
            "start_date": "2020-01-17",
            "end_date": "2020-01-17",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "80d1fb9c-a304-4a91-ac1a-cb4cd543f747"
          },
          {
            "title": "Tengen Toppa Gurren Lagann",
            "title_english": "Gurren Lagann",
            "mean": 8.63,
            "synopsis": "Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann. Using their new weapon, Simon and Kamina fend off a surprise attack from the surface with the help of Yoko Littner, a hot-blooded redhead wielding a massive gun who wanders the world above.\n\nIn the aftermath of the battle, the sky is now in plain view, prompting Simon and Kamina to set off on a journey alongside Yoko to explore the wastelands of the surface. Soon, they join the fight against the \"Beastmen,\" humanoid creatures that terrorize the remnants of humanity in powerful robots called \"Gunmen.\" Although they face some challenges and setbacks, the trio bravely fights these new enemies alongside other survivors to reclaim the surface, while slowly unraveling a galaxy-sized mystery.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "award winning",
              "mecha",
              "sci-fi"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/4/5123l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/4/5123.jpg"
            },
            "start_date": "2007-04-01",
            "end_date": "2007-09-30",
            "num_episodes": 27,
            "status": "finished_airing",
            "id": "85a39d0e-523b-45f0-a7a8-2b1cfa06726e"
          },
          {
            "title": "Mo Dao Zu Shi: Wanjie Pian",
            "title_english": "The Founder of Diabolism Season 3",
            "mean": 8.62,
            "synopsis": "Along an empty road in the rural countryside, Wei Wuxian and Lan Wangji stumble across a stone plaque that reads \"Yi City.\" Still on their quest to unravel the mystery behind the cursed severed arm, they venture into the deserted city to obtain further leads.\n\nHowever, with the appearance of a mysterious new cultivator, the demonic arm investigation leads Wei Wuxian and Lan Wangji to a plot that threatens the cultivation world as they know it. The gravity of the new situation escalates when the two find it involves the chief cultivator of the renowned Lanling Jin Sect—Jin Guangyao.\n\nAs the pair continue to piece together the crucial conspiracies of the cultivation history, their friends and colleagues grow suspicious of their motives. With the world against him, Wei Wuxian must prove he is not the demonic sorcerer people believe him to be to regain their trust and save the cultivation world from the sinister evil lurking within it.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "adventure",
              "drama",
              "fantasy",
              "historical",
              "mystery",
              "mythology",
              "reincarnation"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1634/116782l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1634/116782.jpg"
            },
            "start_date": "2021-08-07",
            "end_date": "2021-10-16",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "da4371ba-d5d5-4505-ae4d-07f05740b921"
          },
          {
            "title": "Natsume Yuujinchou Roku",
            "title_english": "Natsume's Book of Friends Season 6",
            "mean": 8.62,
            "synopsis": "Takashi Natsume has grown accustomed to his encounters with youkai through the Book of Friends, which contains the names of youkai whom his grandmother, Reiko Natsume, has sealed in contracts. These encounters allow Natsume to better understand the youkai, Reiko, and himself. \n\nThe Book of Friends is a powerful tool that can be used to control youkai; it is sought after by both youkai and exorcists alike. Natsume just wants to live out his daily life in peace but is constantly disrupted by these experiences. If he is to end this torment, Natsume must explore more about the book and the world of exorcism, as well as begin to open his heart to those who can help him.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "iyashikei",
              "mythology",
              "shoujo",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/6/84416l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/6/84416.jpg"
            },
            "start_date": "2017-04-12",
            "end_date": "2017-06-21",
            "num_episodes": 11,
            "status": "finished_airing",
            "id": "f18e5f31-fcfd-4710-94aa-d3a5c9220d47"
          },
          {
            "title": "Ping Pong the Animation",
            "title_english": "Ping Pong the Animation",
            "mean": 8.62,
            "synopsis": "Despite being polar opposites, Makoto \"Smile\" Tsukimoto and Yutaka \"Peco\" Hoshino have been best friends since childhood. Although the overly confident Peco strives to be the best ping-pong player in the world, he often skips practice, earning the ire of his fellow teammates on the Katase High School ping-pong team. Meanwhile, Smile—in spite of his innate talent for the sport—cannot help but hold back his full strength when playing against others. Through their mutual love for ping-pong, the two have developed a bond that is seemingly unbreakable.\n\nWhen Peco hears that an ex-national team player from China is coming to Japan, he drags Smile over to rival Tsujido High School to observe them. The subsequent trip leads to a clash between Peco and Kong Wenge, who overwhelmingly defeats the former in one game. Stunned by such a comprehensive loss, Peco finds himself questioning why he plays to begin with. Seeing his potential as a player, Katase's coach begins to train Smile to overcome his hesitation, but he is reluctant to play if it is not for enjoyment.\n\nAs the two struggle to find meaning in the sport, a plethora of stronger players—each with their own internal strifes—await them at the inter-high tournament, where only the very best can persevere. But when these young athletes let their unbridled ambition go unchecked, the hardships they face paint a somber reality as they pursue glory.\n\n[Written by MAL Rewrite]",
            "genres": [
              "award winning",
              "drama",
              "seinen",
              "sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/10/58041l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/10/58041.jpg"
            },
            "start_date": "2014-04-11",
            "end_date": "2014-06-20",
            "num_episodes": 11,
            "status": "finished_airing",
            "id": "2f04e9cc-9a30-4e23-977d-206876e644db"
          },
          {
            "title": "Shingeki no Kyojin Season 3",
            "title_english": "Attack on Titan Season 3",
            "mean": 8.62,
            "synopsis": "Still threatened by the \"Titans\" that rob them of their freedom, mankind remains caged inside the two remaining walls. Efforts to eradicate these monsters continue; however, threats arise not only from the Titans beyond the walls, but from the humans within them as well.\n\nAfter being rescued from the Colossal and Armored Titans, Eren Yaeger devotes himself to improving his Titan form. Krista Lenz struggles to accept the loss of her friend, Captain Levi chooses Eren and his friends to form his new personal squad, and Commander Erwin Smith recovers from his injuries. All seems well for the soldiers, until the government suddenly demands custody of Eren and Krista. The Survey Corps' recent successes have drawn attention, and a familiar face from Levi's past is sent to collect the wanted soldiers. Sought after by the government, Levi and his new squad must evade their adversaries in hopes of keeping Eren and Krista safe.\n\nEren and his fellow soldiers are not only fighting for their survival against the terrifying Titans, but also against the terror of a far more conniving foe: their fellow humans.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "drama",
              "gore",
              "military",
              "shounen",
              "survival"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1173/92110l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1173/92110.jpg"
            },
            "start_date": "2018-07-23",
            "end_date": "2018-10-15",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "63946fcc-57a2-485a-937b-5bcb4c3d23fb"
          },
          {
            "title": "Cyberpunk: Edgerunners",
            "title_english": "",
            "mean": 8.62,
            "synopsis": "Dreams are doomed to die in Night City, a futuristic Californian metropolis. As a teenager living in the city's slums, David Martinez is trying to fulfill his mother's lifelong wish for him to reach the top of Arasaka, the world's leading security corporation. To this end, he attends the prestigious Arasaka Academy while his mother works tirelessly to keep their family afloat.\n\nWhen an incident with a street gang leaves David's life in tatters, he stumbles upon Sandevistan cyberware—a prosthetic that grants its wearer superhuman speed. Fueled by rage, David implants the device in his back, using it to exact revenge on one of his tormentors. This gets him expelled from the academy, shattering his hopes of ever making his mother proud.\n\nAfter witnessing David's newfound abilities, the beautiful data thief Lucyna \"Lucy\" Kushinada offers to team up with him, handing him a ticket to salvation. However, associating with Lucy introduces David to the world of Edgerunners—cyborg criminals who will break any law for money. Edgerunners often lose their lives, if the cyberware does not break their minds first; but in his fight for survival inside a corrupt system, David is ready to risk it all.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "gore",
              "psychological",
              "sci-fi"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1818/126435l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1818/126435.jpg"
            },
            "start_date": "2022-09-13",
            "end_date": "2022-09-13",
            "num_episodes": 10,
            "status": "finished_airing",
            "id": "efe53385-0bc4-46bb-87b0-23253b017f2e"
          },
          {
            "title": "Death Note",
            "title_english": "Death Note",
            "mean": 8.62,
            "synopsis": "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.\n\nFor his own amusement, Ryuk drops his \"Death Note\" into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.\n\nAware of the terrifying godlike power that has fallen into his hands, Light—under the alias \"Kira\"—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "psychological",
              "shounen",
              "supernatural",
              "suspense"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/9/9453l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/9/9453.jpg"
            },
            "start_date": "2006-10-04",
            "end_date": "2007-06-27",
            "num_episodes": 37,
            "status": "finished_airing",
            "id": "046bbbf1-2e62-4099-b7a3-f614d6b8da10"
          },
          {
            "title": "Bungou Stray Dogs 4th Season",
            "title_english": "Bungo Stray Dogs 4",
            "mean": 8.61,
            "synopsis": "Fourth season of Bungou Stray Dogs.",
            "genres": [
              "action",
              "adult cast",
              "mystery",
              "organized crime",
              "seinen",
              "super power",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1263/132759l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1263/132759.jpg"
            },
            "start_date": "2023-01-04",
            "end_date": "2023-03-29",
            "num_episodes": 13,
            "status": "currently_airing",
            "id": "2ff2fccb-2add-461a-8828-4595a5a205d0"
          },
          {
            "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
            "title_english": "Evangelion: 3.0+1.0 Thrice Upon a Time",
            "mean": 8.61,
            "synopsis": "Following NERV's failed attempt to retrieve the Spears of Longinus and carry out the Human Instrumentality Project, the destruction caused by the Fourth Impact has been largely averted. In a state of disarray, Shinji Ikari, Asuka Langley Shikinami, and Rei Ayanami travel to Village 3—a survivor settlement free from Earth's ruination. There, Shinji slowly comes to terms with his past, developing an entirely different life from his days as an Evangelion pilot.\n\nMeanwhile, NERV makes preparations to continue the Instrumentality Project by means of a new Impact. When WILLE's main aerial battleship arrives at the village, Shinji decides to board, believing that he can help by piloting an Evangelion. As new secrets are uncovered and a battle between WILLE and NERV approaches, the future of Earth hangs in the balance. Can Shinji save humanity and the rest of the world one last time?\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "award winning",
              "drama",
              "mecha",
              "psychological",
              "sci-fi",
              "suspense"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1422/113533l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1422/113533.jpg"
            },
            "start_date": "2021-03-08",
            "end_date": "2021-03-08",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "011345c2-9b57-4522-af66-b78911464632"
          },
          {
            "title": "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
            "title_english": "Rascal Does Not Dream of a Dreaming Girl",
            "mean": 8.61,
            "synopsis": "Six months ago, Sakuta Azusagawa had a chance encounter with a bunny girl in a library. Ever since then, he's been blissfully happy with his girlfriend: Mai Sakurajima, that same bunny girl. However, the reappearance of his mysterious first crush, the now-adult Shouko Makinohara, adds a new complication to his relationship with Mai. To make matters worse, he then encounters a middle school Shouko in the hospital, suffering from a grave illness. Mysteriously, his old scars begin throbbing whenever he's near her.\n\nWith Shouko's bizarre situation somehow revolving around him, Sakuta will need to come to terms with his own conflicting feelings, for better or worse. With a girl's life in his hands, just what can he do?\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "romance",
              "school",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1613/102179l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1613/102179.jpg"
            },
            "start_date": "2019-06-15",
            "end_date": "2019-06-15",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "e71edd45-44a1-473b-a183-758ef1a51dbc"
          },
          {
            "title": "Suzumiya Haruhi no Shoushitsu",
            "title_english": "The Disappearance of Haruhi Suzumiya",
            "mean": 8.61,
            "synopsis": "On a cold December day, Kyon arrives at school prepared for another outing with his fellow SOS Brigade members. However, much to his surprise, he discovers that almost everything has changed completely: Haruhi Suzumiya and Itsuki Koizumi are nowhere to be found; Mikuru Asahina does not recognize him at all; Yuki Nagato is a regular human; and Ryouko Asakura has mysteriously returned. Although he is no stranger to the supernatural, Kyon is disturbed by this odd turn of events and decides to investigate on his own.\n\nFinding himself to be the only person that is aware of the previous reality, Kyon is now faced with a difficult choice: to finally live the normal life he has always wanted, or uncover a way to turn back the hands of time and restore his chaotic yet familiar world.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "award winning",
              "mystery",
              "school",
              "sci-fi",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1248/112352l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1248/112352.jpg"
            },
            "start_date": "2010-02-06",
            "end_date": "2010-02-06",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "5b1a4e8c-7e5c-4ebb-854c-48899b36b527"
          },
          {
            "title": "Mushishi Zoku Shou: Suzu no Shizuku",
            "title_english": "",
            "mean": 8.6,
            "synopsis": "On a warm summer day, a boy heard the sound of bells ringing, as if in celebration, in the mountain near his home. Several years later in that same mountain, the mushishi Ginko encounters a strange girl with weeds growing out of her body. Soon after, Ginko coincidentally runs into the now grown-up boy Yoshiro on his way off the mountain. With Yoshiro's help, Ginko soon begins to uncover who this mysterious girl is and what happened to her.\n\nAn adaptation of the last arc in the manga, Mushishi Zoku Shou: Suzu no Shizuku follows Ginko's peculiar journey amidst the occult to unravel the mystery behind the enigmatic girl called Kaya and the mountain that has become her home.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adult cast",
              "adventure",
              "fantasy",
              "historical",
              "iyashikei",
              "mystery",
              "seinen",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/9/72689l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/9/72689.jpg"
            },
            "start_date": "2015-05-16",
            "end_date": "2015-05-16",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "c87cbe60-6a6c-45b8-ad1b-dc7bb56c9aee"
          },
          {
            "title": "Hajime no Ippo: Rising",
            "title_english": "Hajime No Ippo: The Fighting!",
            "mean": 8.59,
            "synopsis": "Japanese Featherweight Champion Makunouchi Ippo has defended his title belt once more with the help of his devastating signature move: the Dempsey Roll. However, new challengers are rising up left and right, claiming to have an answer for the move responsible for crushing his opponents. Will Ippo be able to step up to the challenge, or will the weight of his pride destroy him before he finds out just what it means to be strong? Meanwhile, fellow Kamogawa Gym mate Aoki Masaru is just a hop, skip, and a Frog Punch away from claiming his own belt, ready to take on the Japanese Lightweight Champion!\n\nHajime no Ippo: Rising continues Ippo's quest to become stronger, featuring the same cast of loveable dimwits from Kamogawa Gym, as they put their bodies and hearts on the line to make their way in the harsh world of professional boxing. With a will of iron, Ippo steps into the ring once again.\n\n[Written by MAL Rewrite]",
            "genres": [
              "combat sports",
              "shounen",
              "sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/6/56147l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/6/56147.jpg"
            },
            "start_date": "2013-10-06",
            "end_date": "2014-03-30",
            "num_episodes": 25,
            "status": "finished_airing",
            "id": "192af75b-07c5-4f24-9d16-0f9c38f063d7"
          },
          {
            "title": "JoJo no Kimyou na Bouken Part 5: Ougon no Kaze",
            "title_english": "JoJo's Bizarre Adventure: Golden Wind",
            "mean": 8.58,
            "synopsis": "In the coastal city of Naples, corruption is teeming—the police blatantly conspire with outlaws, drugs run rampant around the youth, and the mafia governs the streets with an iron fist. However, various fateful encounters will soon occur.\n\nEnter Giorno Giovanna, a 15-year-old boy with an eccentric connection to the Joestar family, who makes a living out of part-time jobs and pickpocketing. Furthermore, he is gifted with the unexplained Stand ability to give and create life—growing plants from the ground and turning inanimate objects into live animals, an ability he has dubbed \"Gold Experience.\" Fascinated by the might of local gangsters, Giorno has dreamed of rising up in their ranks and becoming a \"Gang-Star,\" a feat made possible by his encounter with Bruno Bucciarati, a member of the Passione gang with his own sense of justice.\n\nJoJo no Kimyou na Bouken: Ougon no Kaze follows the endeavors of Giorno after joining Bruno's team while working under Passione, fending off other gangsters and secretly plotting to overthrow their mysterious boss.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "organized crime",
              "shounen",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1572/95010l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1572/95010.jpg"
            },
            "start_date": "2018-10-06",
            "end_date": "2019-07-28",
            "num_episodes": 39,
            "status": "finished_airing",
            "id": "939d2b4a-0777-47c9-af6d-d655b15bdd33"
          },
          {
            "title": "Kizumonogatari II: Nekketsu-hen",
            "title_english": "Kizumonogatari Part 2: Hot-Blooded",
            "mean": 8.58,
            "synopsis": "No longer truly human, Koyomi Araragi decides to retrieve Kiss-shot Acerola-orion Heart-under-blade's severed body parts that were stolen by three powerful vampire hunters. Awaiting him are Dramaturgie, a vampire hunter who is a vampire himself; Episode, a half-vampire with the ability to transform into mist; and Guillotinecutter, a human priest who is the most dangerous of them all.\n\nUnbeknownst to Araragi, each minute he spends trying to retrieve Kiss-shot's limbs makes him less of a human and more of a vampire. Will he be able to keep his wish of becoming human once again by the end of his battles?\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "mystery",
              "supernatural",
              "vampire"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1981/112812l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1981/112812.jpg"
            },
            "start_date": "2016-08-19",
            "end_date": "2016-08-19",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "78720144-34f5-4625-97cb-3a430a66e714"
          },
          {
            "title": "Natsume Yuujinchou San",
            "title_english": "Natsume's Book of Friends Season 3",
            "mean": 8.58,
            "synopsis": "Natsume Yuujinchou San follows Takashi Natsume, a boy who is able to see youkai. Natsume and his bodyguard Madara, nicknamed Nyanko-sensei, continue on their quest to release youkai from their contracts in the \"Book of Friends.\"\n\nNatsume comes to terms with his ability to see youkai and stops thinking of it as a curse. As he spends more time with his human and youkai friends, he realizes how much he values them both and decides he doesn't have to choose between the spirit and human worlds to be happy.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "iyashikei",
              "mythology",
              "shoujo",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/8/82394l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/8/82394.jpg"
            },
            "start_date": "2011-07-05",
            "end_date": "2011-09-27",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "79bd6713-82a8-4648-ae11-03e59c8f3238"
          },
          {
            "title": "Ookami Kodomo no Ame to Yuki",
            "title_english": "Wolf Children",
            "mean": 8.58,
            "synopsis": "Hana, a hard-working college student, falls in love with a mysterious man who attends one of her classes though he is not an actual student. As it turns out, he is not truly human either. On a full moon night, he transforms, revealing that he is the last werewolf alive. Despite this, Hana's love remains strong, and the two ultimately decide to start a family.\n\nHana gives birth to two healthy children—Ame, born during rainfall, and Yuki, born during snowfall—both possessing the ability to turn into wolves, a trait inherited from their father. All too soon, however, the sudden death of her lover devastates Hana's life, leaving her to raise a peculiar family completely on her own. The stress of raising her wild-natured children in a densely populated city, all while keeping their identity a secret, culminates in a decision to move to the countryside, where she hopes Ame and Yuki can live a life free from the judgments of society. Wolf Children is the heartwarming story about the challenges of being a single mother in an unforgiving modern world.\n\n[Written by MAL Rewrite]",
            "genres": [
              "award winning",
              "childcare",
              "fantasy",
              "slice of life"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/9/35721l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/9/35721.jpg"
            },
            "start_date": "2012-07-21",
            "end_date": "2012-07-21",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "9ddc4df8-e486-452f-9142-208fa2942486"
          },
          {
            "title": "Natsume Yuujinchou Go",
            "title_english": "Natsume's Book of Friends Season 5",
            "mean": 8.57,
            "synopsis": "Blessed with eyes that are able to perceive the otherwise invisible youkai, Takashi Natsume hides his ability from his newfound family and friends to protect everyone's peaceful daily life. Nonetheless, Natsume never fails to show the same kindness to the benevolent youkai and happily returns their names by using the infamous Book of Friends he inherited from his late grandmother, Reiko.\n\nMeanwhile, the exorcist clan Matoba still wishes for Natsume to join their ranks due to his overwhelming gift. However, Natsume firmly rejects the clan's invitation since not all exorcists are as reasonable as his friend Shuuichi Natori, and many improperly and indiscriminately seal away every youkai in their way. Unsatisfied with Natsume's answer, Seiji Matoba blackmails Natsume into attending a grand gathering of powerful exorcist families. Natsume soon finds himself in the company of dangerous people and youkai alike. But even then, he continues to defy the exorcists' hard-handed methods and believes that peace between both worlds is possible.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "iyashikei",
              "mythology",
              "shoujo",
              "slice of life",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/11/81755l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/11/81755.jpg"
            },
            "start_date": "2016-10-05",
            "end_date": "2016-12-21",
            "num_episodes": 11,
            "status": "finished_airing",
            "id": "e8c57122-50e7-4608-90d3-50402e121e50"
          },
          {
            "title": "Shouwa Genroku Rakugo Shinjuu",
            "title_english": "Showa Genroku Rakugo Shinju",
            "mean": 8.57,
            "synopsis": "Yotarou is a former yakuza member fresh out of prison and fixated on just one thing: rather than return to a life of crime, the young man aspires to take to the stage of rakugo, a traditional Japanese form of comedic storytelling. Inspired during his incarceration by the performance of distinguished practitioner Yakumo Yuurakutei, he sets his mind on meeting the man who changed his life. After hearing Yotarou's desperate appeal for his mentorship, Yakumo is left with no choice but to accept his very first apprentice.\n\nAs he eagerly begins his training, Yotarou meets Konatsu, an abrasive young woman who has been under Yakumo's care ever since her beloved father Sukeroku Yuurakutei, another prolific rakugo performer, passed away. Through her hidden passion, Yotarou is drawn to Sukeroku's unique style of rakugo despite learning under contrasting techniques. Upon seeing this, old memories and feelings return to Yakumo who reminisces about a much earlier time when he made a promise with his greatest rival.\n\nShouwa Genroku Rakugo Shinjuu is a story set in both the past and present, depicting the art of rakugo, the relationships it creates, and the lives and hearts of those dedicated to keeping the unique form of storytelling alive.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "historical",
              "josei",
              "love polygon",
              "performing arts"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1354/124768l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1354/124768.jpg"
            },
            "start_date": "2016-01-09",
            "end_date": "2016-04-02",
            "num_episodes": 13,
            "status": "finished_airing",
            "id": "4cc89289-38eb-4626-9a70-0152043b0bd5"
          },
          {
            "title": "Tengen Toppa Gurren Lagann Movie 2: Lagann-hen",
            "title_english": "Gurren Lagann The Movie: The Lights in the Sky are Stars",
            "mean": 8.57,
            "synopsis": "Humans have enjoyed their lavish, peaceful, and prosperous lives for seven years since the day the almighty Spiral King was defeated—the day they reclaimed their homeland, Earth. However, the boon of this lifestyle leaves them unprepared when an unknown, hostile threat arises due to the ever-growing human population. This calamity is the Anti-Spiral—a fearsome enemy with unparalleled power. \n \nAs the Spiral King's prognosis postulating the destruction of \"The Spiral's World\" begins to come true, the pieces are in place, and Team Dai-Gurren is ready. With his late brother's hope to see a better future for mankind, Simon—along with Nia Teppelin and the rest of the team—is determined to overthrow the mighty Anti-Spiral in order to revive humanity's lost hope.\n\n[Written by MAL Rewrite]\n",
            "genres": [
              "action",
              "mecha",
              "sci-fi",
              "space",
              "super power"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/12/19698l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/12/19698.jpg"
            },
            "start_date": "2009-04-22",
            "end_date": "2009-04-22",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "c1bb7f30-a9cd-4534-9bc1-ad7a9f95bdd5"
          },
          {
            "title": "Yojouhan Shinwa Taikei",
            "title_english": "The Tatami Galaxy",
            "mean": 8.57,
            "synopsis": "One autumn evening at a mysterious ramen stand behind the Shimogamo Shrine, a lonely third-year college student bumps into a man with an eggplant-shaped head who calls himself a god of matrimony. Meeting this man causes the student to reflect upon his past two years at college—two years bitterly spent trying to break up couples on campus with his only friend Ozu, a ghoulish-looking man seemingly set on making his life as miserable as possible. Resolving to make the most out of the rest of his college life, the student attempts to ask out the unsociable but kind-hearted underclassman Akashi, yet fails to follow through, prompting him to regret not living out his college life differently. As soon as this thought passes through his head, however, he is hurtled through time and space to the beginning of his years at college and given another chance to live his life.\n\nSurreal, artistic, and mind-bending, Yojouhan Shinwa Taikei chronicles the misadventures of a young man on a journey to make friends, find love, and experience the rose-colored campus life he always dreamed of.\n\n[Written by MAL Rewrite]",
            "genres": [
              "award winning",
              "comedy",
              "mystery",
              "psychological",
              "romance",
              "time travel"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1633/123689l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1633/123689.jpg"
            },
            "start_date": "2010-04-23",
            "end_date": "2010-07-02",
            "num_episodes": 11,
            "status": "finished_airing",
            "id": "ab92d335-8744-4ec1-81b3-2870c4f9856a"
          },
          {
            "title": "Ousama Ranking",
            "title_english": "Ranking of Kings",
            "mean": 8.56,
            "synopsis": "The people of the kingdom look down on the young Prince Bojji, who can neither hear nor speak. They call him \"The Useless Prince\" while jeering at his supposed foolishness.\n\nHowever, while Bojji may not be physically strong, he is certainly not weak of heart. When a chance encounter with a shadow creature should have left him traumatized, it instead makes him believe that he has found a friend amidst those who only choose to notice his shortcomings. He starts meeting with Kage, the shadow, regularly, to the point where even the otherwise abrasive creature begins to warm up to him.\n\nKage and Bojji's unlikely friendship lays the budding foundations of the prince's journey, one where he intends to conquer his fears and insecurities. Despite the constant ridicule he faces, Bojji resolves to fulfill his desire of becoming the best king he can be.\n\n[Written by MAL Rewrite]",
            "genres": [
              "adventure",
              "fantasy"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1347/117616l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1347/117616.jpg"
            },
            "start_date": "2021-10-15",
            "end_date": "2022-03-25",
            "num_episodes": 23,
            "status": "finished_airing",
            "id": "a6ad8046-10ad-4183-9019-4324f94ba293"
          },
          {
            "title": "Fate/Zero 2nd Season",
            "title_english": "Fate/Zero Season 2",
            "mean": 8.56,
            "synopsis": "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confront an impending threat that could unravel the Grail War and bring about the destruction of Fuyuki City. The uneasy truce soon collapses as Masters demonstrate that they will do anything in their power, no matter how despicable, to win.\n\nSeeds of doubt are sown between Kiritsugu Emiya and Saber, his Servant, as their conflicting ideologies on heroism and chivalry clash. Meanwhile, an ominous bond forms between Kirei Kotomine, who still seeks to find his purpose in life, and one of the remaining Servants. As the countdown to the end of the war reaches zero, the cost of winning begins to blur the line between victory and defeat.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "fantasy",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1522/117645l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1522/117645.jpg"
            },
            "start_date": "2012-04-08",
            "end_date": "2012-06-24",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "68849292-b7f1-4cfa-9eaa-dc8cbcdc6b7e"
          },
          {
            "title": "Fruits Basket 2nd Season",
            "title_english": "",
            "mean": 8.56,
            "synopsis": "A year has passed since Tooru Honda began living in the Souma residence, and she has since created stronger relationships with its inhabitants Shigure, Kyou, and Yuki. She has also grown closer to the rest of the Souma family and has become familiar with their ancestral secret, having helped them with many of their personal issues. The closer Tooru gets, however, the more she begins to realize that their secret holds a darker truth than she first presumed.\n\nSummer is approaching and Tooru is invited to spend her days with the Soumas, mainly Kyou and Yuki. Tooru wishes for an easy-going vacation, but her close relationships with the two boys and the rest of the Soumas may prove to cause trouble. As they grow more intimate, their carefree time together is hindered by older hardships and feelings from the past that begin to resurface. The Eternal Banquet also dawns on the members of the zodiac, and they must tend to their duties alongside the unnerving head of the family, Akito Souma.\n\nWith the banquet approaching and a plethora of feelings to be solved, will Tooru's life with the Soumas remain peaceful, or will she find herself in a situation from which she cannot escape?\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "romance",
              "school",
              "shoujo",
              "supernatural"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1972/111635l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1972/111635.jpg"
            },
            "start_date": "2020-04-07",
            "end_date": "2020-09-22",
            "num_episodes": 25,
            "status": "finished_airing",
            "id": "81df0026-0f50-49b0-bd2e-71a554bd8b14"
          },
          {
            "title": "Karakai Jouzu no Takagi-san Movie",
            "title_english": "Teasing Master Takagi-san: The Movie",
            "mean": 8.56,
            "synopsis": "Takagi and Nishikata's final summer in junior high is about to begin, and it's already off to a heartwarming start! When the pair find an abandoned kitten, they decide to work together and take care of their adorable new companion until they can locate its missing mother.\n\n(Source: Sentai Filmworks)",
            "genres": [
              "iyashikei",
              "romantic subtext",
              "school",
              "shounen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1376/123398l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1376/123398.jpg"
            },
            "start_date": "2022-06-10",
            "end_date": "2022-06-10",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "e9dfd536-9e12-4329-8332-6204d0641055"
          },
          {
            "title": "Kimi no Suizou wo Tabetai",
            "title_english": "I Want To Eat Your Pancreas",
            "mean": 8.56,
            "synopsis": "The aloof protagonist: a bookworm who is deeply detached from the world he resides in. He has no interest in others and is firmly convinced that nobody has any interest in him either. His story begins when he stumbles across a handwritten book, titled Living with Dying. He soon identifies it as a secret diary belonging to his popular, bubbly classmate Sakura Yamauchi. She then confides in him about the pancreatic disease she is suffering from and that her time left is finite. Only her family knows about her terminal illness; not even her best friends are aware. Despite this revelation, he shows zero sympathy for her plight, but caught in the waves of Sakura's persistent buoyancy, he eventually concedes to accompanying her for her remaining days.\n\nAs the pair of polar opposites interact, their connection strengthens, interweaving through their choices made with each passing day. Her apparent nonchalance and unpredictability disrupts the protagonist's impassive flow of life, gradually opening his heart as he discovers and embraces the true meaning of living.\n\n[Written by MAL Rewrite]",
            "genres": [
              "drama",
              "romance",
              "school"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1768/93291l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1768/93291.jpg"
            },
            "start_date": "2018-09-01",
            "end_date": "2018-09-01",
            "num_episodes": 1,
            "status": "finished_airing",
            "id": "6f263205-15fc-4e36-9259-575993c2f269"
          },
          {
            "title": "Haikyuu!! To the Top Part 2",
            "title_english": "Haikyu!! TO THE TOP 2nd-cour",
            "mean": 8.55,
            "synopsis": "Once called a fallen powerhouse and known as \"Flightless Crows,\" Karasuno High School has finally taken flight at nationals. With a comprehensive performance against Tsubakihara Academy in their first match, the team is now facing its toughest opponent yet: the runners-up of the last Spring Tournament, Inarizaki High School. Furthermore, dealing with the formidable twin Miya brothers only makes things more difficult for Karasuno.\n\nAs soon as the match begins, Karasuno is overwhelmed by all the noise and jeers from the supporters of Inarizaki High but rekindles its strength thanks to its own loyal fans. Karasuno also gains some momentum by utilizing an attack centered on Shouyou Hinata, but the eccentric play of Atsumu and Osamu Miya delivers an unexpected blow that leaves their opponent astounded.\n\nThings are bound to get intense as the match progresses between these two teams. Will Karasuno be able to defeat Inarizaki High and overcome the hurdles that threaten its pursuit to the top?\n\n[Written by MAL Rewrite]",
            "genres": [
              "school",
              "shounen",
              "sports",
              "team sports"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1453/106768l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1453/106768.jpg"
            },
            "start_date": "2020-10-03",
            "end_date": "2020-12-19",
            "num_episodes": 12,
            "status": "finished_airing",
            "id": "4613687d-e01e-4408-a9ae-994cd5884fb4"
          },
          {
            "title": "Kenpuu Denki Berserk",
            "title_english": "Berserk",
            "mean": 8.55,
            "synopsis": "Guts, a man who will one day be known as the Black Swordsman, is a young traveling mercenary characterized by the large greatsword he carries. He accepts jobs that offer the most money, but he never stays with one group for long—until he encounters the Band of the Hawk. Ambushed after completing a job, Guts crushes many of its members in combat. Griffith, The Band of the Falcon's leader and founder, takes an interest in Guts and duels him. While the others are no match for Guts, Griffith defeats him in one blow.\n\nIncapacitated and taken into the Band of the Hawk's camp to recover, Guts wakes up two days later. He confronts Griffith, and the two duel yet again, only this time with a condition: Guts will join the Band of the Falcon if he loses. Due to his fresh injuries, Guts loses the fight and is inducted by Griffith.\n\nIn three years' time, Guts has become one of the Band of the Hawk's commanders. On the battlefield, his combat prowess is second only to Griffith as he takes on large groups of enemies all on his own. With Guts' immense strength and Griffith's leadership, the Band of the Hawk dominate every battle they partake in. But something menacing lurks in the shadows, threatening to change Guts' life forever.\n\n[Written by MAL Rewrite]",
            "genres": [
              "action",
              "adventure",
              "drama",
              "fantasy",
              "gore",
              "horror",
              "military",
              "mythology",
              "seinen"
            ],
            "main_picture": {
              "large": "https://api-cdn.myanimelist.net/images/anime/1384/119988l.jpg",
              "medium": "https://api-cdn.myanimelist.net/images/anime/1384/119988.jpg"
            },
            "start_date": "1997-10-08",
            "end_date": "1998-04-01",
            "num_episodes": 25,
            "status": "finished_airing",
            "id": "ec596f4d-3bc7-45c2-83cb-21f18f28543a"
          }
        ];
      console.log("Error: ", error);
    });
  }

  search(event: KeyboardEvent) : void {
    if(event.key === 'Enter')
      this.animeAPIService.searchAnimeAPI(this.searchString)
        .subscribe(
          (data: any[]) => {
            this.animes = data;
            console.log("Resultado: ", data);
          },
          (error) => {
            console.log("Error: ", error);
        });
  }
}
