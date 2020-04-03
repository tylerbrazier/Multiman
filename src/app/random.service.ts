import { Injectable } from '@angular/core';
import { Character } from './character';
import { DomElementSchemaRegistry } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class RandomService {
  DoctorMario;
  uDoctorMario;
  Mario;
  uMario;
  Luigi;
  uLuigi;
  Bowser;
  uBowser;
  Peach;
  uPeach;
  Yoshi;
  uYoshi;
  DonkeyKong;
  uDonkeyKong;
  CaptainFalcon;
  uCaptainFalcon;
  Ganondorf;
  uGanondorf;
  Falco;
  uFalco;
  Fox;
  uFox;
  Ness;
  uNess;
  IceClimbers;
  uIceClimbers;
  Kirby;
  uKirby;
  Samus;
  uSamus;
  Zelda;
  uZelda;
  YoungLink;
  uYoungLink;
  Pichu;
  uPichu;
  Link;
  uLink;
  Pikachu;
  uPikachu;
  Jigglypuff;
  uJigglypuff;
  Mewtwo;
  uMewtwo;
  MrGNW;
  uGNW;
  Marth;
  uMarth;
  Roy;
  uRoy;
  Sheik;
  uSheik;

  DarkSamus;
  Daisy;
  Lucina;
  Chrom;
  MetaKnight;
  Pit;
  DarkPit;
  ZeroSuitSamus;
  Wario;
  Snake;
  Ike;
  PokemonTrainer;
  DiddyKong;
  Lucas;
  Sonic;
  KingDedede;
  Olimar;
  Lucario;
  ROB;
  ToonLink;
  Wolf;
  Villager;
  MegaMan;
  WiiFitTrainer;
  RosalinaLuma;
  LittleMac;
  Greninja;
  Paultena;
  PacMan;
  Robin;
  Shulk;
  BowserJr;
  DuckHunt;
  Ryu;
  Ken;
  Cloud;
  Corrin;
  Bayonetta;
  Inkling;
  Ridley;
  Simon;
  Richter;
  KingKRool;
  Isabelle;
  Incineroar;
  MiiBrawler;
  MiiSwordfighter;
  MiiGunner;
  PiranhaPlant;
  Joker;
  Banjo;
  Hero;
  Terry;
  Byleth;
  Palutena;

  pmWario
  pmMario
  pmLuigi
  pmPeach
  pmBowser
  pmYoshi
  pmDonkeyKong
  pmDiddyKong
  pmCaptainFalcon
  pmWolf
  pmFox
  pmFalco
  pmIceClimbers
  pmZelda
  pmSheik
  pmLink
  pmToonLink
  pmGanondorf
  pmMewtwo
  pmLucario
  pmPikachu
  pmJigglypuff
  pmSquirtle
  pmIvysaur
  pmCharizard
  pmSamus
  pmZeroSuitSamus
  pmLucas
  pmNess
  pmPit
  pmKirby
  pmMetaKnight
  pmDedede
  pmIke
  pmMarth
  pmRoy
  pmOlimar
  pmROB
  pmGNW
  pmSnake
  pmSonic
  constructor() { //start of melee characters

    this.pmWario = new Character("Wario", 1, "./assets/pmIcons/1.png")
    this.pmMario = new Character("Mario", 2, "./assets/pmIcons/2.png")
    this.pmLuigi = new Character("Luigi", 3, "./assets/pmIcons/3.png")
    this.pmPeach = new Character("Peach", 4, "./assets/pmIcons/4.png")
    this.pmBowser = new Character("Bowser", 5, "./assets/pmIcons/5.png")
    this.pmYoshi = new Character("Yoshi", 6, "./assets/pmIcons/6.png")
    this.pmDonkeyKong = new Character("Donkey Kong", 7, "./assets/pmIcons/7.png")
    this.pmDiddyKong = new Character("Diddy Kong", 8, "./assets/pmIcons/8.png")
    this.pmCaptainFalcon = new Character("Captain Falcon", 9, "./assets/pmIcons/9.png")
    this.pmWolf = new Character("Wolf", 10, "./assets/pmIcons/10.png")
    this.pmFox = new Character("Fox", 11, "./assets/pmIcons/11.png")
    this.pmFalco = new Character("Falco", 12, "./assets/pmIcons/12.png")
    this.pmIceClimbers = new Character("Ice Climbers", 13, "./assets/pmIcons/13.png")
    this.pmZelda = new Character("Zelda", 14, "./assets/pmIcons/14.png")
    this.pmSheik = new Character("Sheik", 15, "./assets/pmIcons/15.png")
    this.pmLink = new Character("Link", 16, "./assets/pmIcons/16.png")
    this.pmToonLink = new Character("Toon Link", 17, "./assets/pmIcons/17.png")
    this.pmGanondorf = new Character("Ganondorf", 18, "./assets/pmIcons/18.png")
    this.pmMewtwo = new Character("Mewtwo", 19, "./assets/pmIcons/19.png")
    this.pmLucario = new Character("Lucario", 20, "./assets/pmIcons/20.png")
    this.pmPikachu = new Character("Pikachu", 21, "./assets/pmIcons/21.png")
    this.pmJigglypuff = new Character("Jigglypuff", 22, "./assets/pmIcons/22.png")
    this.pmSquirtle = new Character("Squirtle", 23, "./assets/pmIcons/23.png")
    this.pmIvysaur = new Character("Ivysaur", 24, "./assets/pmIcons/24.png")
    this.pmCharizard = new Character("Charizard", 25, "./assets/pmIcons/25.png")
    this.pmSamus = new Character("Samus", 26, "./assets/pmIcons/26.png")
    this.pmZeroSuitSamus = new Character("Zero Suit Samus", 27, "./assets/pmIcons/27.png")
    this.pmLucas = new Character("Lucas", 28, "./assets/pmIcons/28.png")
    this.pmNess = new Character("Ness", 29, "./assets/pmIcons/29.png")
    this.pmPit = new Character("Pit", 30, "./assets/pmIcons/30.png")
    this.pmKirby = new Character("Kirby", 31, "./assets/pmIcons/31.png")
    this.pmMetaKnight = new Character("Meta Knight", 32, "./assets/pmIcons/32.png")
    this.pmDedede = new Character("Dedede", 33, "./assets/pmIcons/33.png")
    this.pmIke = new Character("Ike", 34, "./assets/pmIcons/34.png")
    this.pmMarth = new Character("Marth", 35, "./assets/pmIcons/35.png")
    this.pmRoy = new Character("Roy", 36, "./assets/pmIcons/36.png")
    this.pmOlimar = new Character("Olimar", 37, "./assets/pmIcons/37.png")
    this.pmROB = new Character("ROB", 38, "./assets/pmIcons/38.png")
    this.pmGNW = new Character("GNW", 39, "./assets/pmIcons/39.png")
    this.pmSnake = new Character("Snake", 40, "./assets/pmIcons/40.png")
    this.pmSonic = new Character("Sonic", 41, "./assets/pmIcons/41.png")





    this.DoctorMario = new Character("Dr. Mario", 0, "./assets/meleeIcons/1.png");
    this.Mario = new Character("Mario", 1, "./assets/meleeIcons/2.png");
    this.Luigi = new Character("Luigi", 2, "./assets/meleeIcons/3.png");
    this.Bowser = new Character("Bowser", 3, "./assets/meleeIcons/4.png");
    this.Peach = new Character("Peach", 4, "./assets/meleeIcons/5.png");
    this.Yoshi = new Character("Yoshi", 5, "./assets/meleeIcons/6.png");
    this.DonkeyKong = new Character("Donkey Kong", 6, "./assets/meleeIcons/7.png");
    this.CaptainFalcon = new Character("Captain Falcon", 7, "./assets/meleeIcons/8.png");
    this.Ganondorf = new Character("Ganondorf", 8, "./assets/meleeIcons/9.png");
    this.Falco = new Character("Falco", 9, "./assets/meleeIcons/10.png");
    this.Fox = new Character("Fox", 10, "./assets/meleeIcons/11.png");
    this.Ness = new Character("Ness", 11, "./assets/meleeIcons/12.png");
    this.IceClimbers = new Character("Ice Climbers", 12, "./assets/meleeIcons/13.png");
    this.Kirby = new Character("Kirby", 13, "./assets/meleeIcons/14.png");
    this.Samus = new Character("Samus", 14, "./assets/meleeIcons/15.png");
    this.Zelda = new Character("Zelda", 15, "./assets/meleeIcons/16.png");
    this.Link = new Character("Link", 16, "./assets/meleeIcons/17.png");
    this.YoungLink = new Character("Young Link", 17, "./assets/meleeIcons/18.png");
    this.Pichu = new Character("Pichu", 18, "./assets/meleeIcons/19.png");
    this.Pikachu = new Character("Pikachu", 19, "./assets/meleeIcons/20.png");
    this.Jigglypuff = new Character("Jigglypuff", 20, "./assets/meleeIcons/21.png");
    this.Mewtwo = new Character("Mewtwo", 21, "./assets/meleeIcons/22.png");
    this.MrGNW = new Character("Mr. GNW", 22, "./assets/meleeIcons/23.png");
    this.Marth = new Character("Marth", 23, "./assets/meleeIcons/24.png");
    this.Roy = new Character("Roy", 24, "./assets/meleeIcons/25.png");
    this.Sheik = new Character("Sheik", 25, "./assets/meleeIcons/26.png");

    //end of melee characters
    //start of ultimate 2:22 am

    this.uMario = new Character("Mario", 99, "./assets/ultimateIcons/1.jpeg"); //not 25 because i fucked up earlier
    this.uDonkeyKong = new Character("Donkey Kong", 100, "./assets/ultimateIcons/2.jpeg");
    this.uLink = new Character("Link", 27, "./assets/ultimateIcons/3.jpeg");
    this.uSamus = new Character("Samus", 28, "./assets/ultimateIcons/4.jpeg");
    this.DarkSamus = new Character("Dark Samus", 29, "./assets/ultimateIcons/5.jpeg");
    this.uYoshi = new Character("Yoshi", 30, "./assets/ultimateIcons/6.jpeg");
    this.uKirby = new Character("Kirby", 31, "./assets/ultimateIcons/7.jpeg");
    this.uFox = new Character("Fox", 32, "./assets/ultimateIcons/8.jpeg");
    this.uPikachu = new Character("Pikachu", 33, "./assets/ultimateIcons/9.jpeg");
    this.uLuigi = new Character("Luigi", 34, "./assets/ultimateIcons/10.jpeg");
    this.uNess = new Character("Ness", 35, "./assets/ultimateIcons/11.jpeg");
    this.uCaptainFalcon = new Character("Captain Falcon", 36, "./assets/ultimateIcons/12.jpeg");
    this.uJigglypuff = new Character("Jigglypuff", 37, "./assets/ultimateIcons/13.jpeg");
    this.uPeach = new Character("Peach", 38, "./assets/ultimateIcons/14.jpeg");
    this.Daisy = new Character("Daisy", 39, "./assets/ultimateIcons/15.jpeg");
    this.uBowser = new Character("Bowser", 40, "./assets/ultimateIcons/16.jpeg");
    this.uIceClimbers = new Character("Ice Climbers", 41, "./assets/ultimateIcons/17.jpeg");
    this.uSheik = new Character("Sheik", 42, "./assets/ultimateIcons/18.jpeg");
    this.uZelda = new Character("Zelda", 43, "./assets/ultimateIcons/19.jpeg");
    this.uDoctorMario = new Character("Dr. Mario", 44, "./assets/ultimateIcons/20.jpeg");
    this.uPichu = new Character("Pichu", 45, "./assets/ultimateIcons/21.jpeg");
    this.uFalco = new Character("Falco", 46, "./assets/ultimateIcons/22.jpeg");
    this.uMarth = new Character("Marth", 47, "./assets/ultimateIcons/23.jpeg");
    this.Lucina = new Character("Lucina", 48, "./assets/ultimateIcons/24.jpeg");
    this.uYoungLink = new Character("Young Link", 49, "./assets/ultimateIcons/25.jpeg");
    this.uGanondorf = new Character("Ganondorf", 50, "./assets/ultimateIcons/26.jpeg");
    this.uMewtwo = new Character("Mewtwo", 51, "./assets/ultimateIcons/27.jpeg");
    this.uRoy = new Character("Roy", 52, "./assets/ultimateIcons/28.jpeg");
    this.Chrom = new Character("Chrom", 53, "./assets/ultimateIcons/29.jpeg");
    this.uGNW = new Character("GNW", 54, "./assets/ultimateIcons/30.jpeg");
    this.MetaKnight = new Character("Meta Knight", 55, "./assets/ultimateIcons/31.jpeg");
    this.Pit = new Character("Pit", 56, "./assets/ultimateIcons/32.jpeg");
    this.DarkPit = new Character("Dark Pit", 57, "./assets/ultimateIcons/33.jpeg");
    this.ZeroSuitSamus = new Character("Zero Suit Samus", 58, "./assets/ultimateIcons/34.jpeg");
    this.Wario = new Character("Wario", 59, "./assets/ultimateIcons/35.jpeg");
    this.Snake = new Character("Snake", 60, "./assets/ultimateIcons/36.jpeg");


    this.Ike = new Character("Ike", 61, "./assets/ultimateIcons/37.jpeg");
    this.PokemonTrainer = new Character("Pokemon Trainer", 62, "./assets/ultimateIcons/38.jpeg");
    this.DiddyKong = new Character("Diddy Kong", 63, "./assets/ultimateIcons/39.jpeg");
    this.Lucas = new Character("Lucas", 64, "./assets/ultimateIcons/40.jpeg");
    this.Sonic = new Character("Sonic", 65, "./assets/ultimateIcons/41.jpeg");
    this.KingDedede = new Character("King Dedede", 66, "./assets/ultimateIcons/42.jpeg");
    this.Olimar = new Character("Olimar", 67, "./assets/ultimateIcons/43.jpeg");
    this.Lucario = new Character("Lucario", 68, "./assets/ultimateIcons/44.jpeg");
    this.ROB = new Character("R.O.B", 69, "./assets/ultimateIcons/45.jpeg");
    this.ToonLink = new Character("Toon Link", 70, "./assets/ultimateIcons/46.jpeg");
    this.Wolf = new Character("Wolf", 71, "./assets/ultimateIcons/47.jpeg");
    this.Villager = new Character("Villager", 72, "./assets/ultimateIcons/48.jpeg");
    this.MegaMan = new Character("Mega Man", 73, "./assets/ultimateIcons/49.jpeg");
    this.WiiFitTrainer = new Character("Wii Fit Trainer", 74, "./assets/ultimateIcons/50.jpeg");
    this.RosalinaLuma = new Character("Rosalina", 75, "./assets/ultimateIcons/51.jpeg");
    this.LittleMac = new Character("Little Mac", 76, "./assets/ultimateIcons/52.jpeg");
    this.Greninja = new Character("Greninja", 77, "./assets/ultimateIcons/53.jpeg");
    this.Palutena = new Character("Palutena", 78, "./assets/ultimateIcons/54.jpeg");
    this.PacMan = new Character("Pac-Man", 79, "./assets/ultimateIcons/55.jpeg");
    this.Robin = new Character("Robin", 80, "./assets/ultimateIcons/56.jpeg");
    this.Shulk = new Character("Shulk", 81, "./assets/ultimateIcons/57.jpeg");
    this.BowserJr = new Character("Bowser Jr.", 82, "./assets/ultimateIcons/58.jpeg");
    this.DuckHunt = new Character("Duck Hunt", 83, "./assets/ultimateIcons/59.jpeg");
    this.Ryu = new Character("Ryu", 84, "./assets/ultimateIcons/60.jpeg");
    this.Ken = new Character("Ken", 85, "./assets/ultimateIcons/61.jpeg");
    this.Cloud = new Character("Cloud", 86, "./assets/ultimateIcons/62.jpeg");
    this.Corrin = new Character("Corrin", 87, "./assets/ultimateIcons/63.jpeg");
    this.Bayonetta = new Character("Bayonetta", 88, "./assets/ultimateIcons/64.jpeg");
    this.Inkling = new Character("Inkling", 89, "./assets/ultimateIcons/65.jpeg");
    this.Ridley = new Character("Ridley", 90, "./assets/ultimateIcons/66.jpeg");
    this.Simon = new Character("Simon", 91, "./assets/ultimateIcons/67.jpeg");
    this.Richter = new Character("Richter", 92, "./assets/ultimateIcons/68.jpeg");
    this.KingKRool = new Character("King K. Rool", 93, "./assets/ultimateIcons/69.jpeg");
    this.Isabelle = new Character("Isabelle", 94, "./assets/ultimateIcons/70.jpeg");
    this.Incineroar = new Character("Incineroar", 95, "./assets/ultimateIcons/71.jpeg");
    this.MiiBrawler = new Character("Mii Brawler", 96, "./assets/ultimateIcons/76.jpeg");
    this.MiiSwordfighter = new Character("Mii Swordfighter", 97, "./assets/ultimateIcons/77.jpeg");
    this.MiiGunner = new Character("Mii Gunner", 98, "./assets/ultimateIcons/78.jpeg");
    this.PiranhaPlant = new Character("Piranha Plant", 101, "./assets/ultimateIcons/72.jpeg")
    this.Joker = new Character("Joker", 102, "./assets/ultimateIcons/73.jpeg")
    this.Banjo = new Character("Banjo", 103, "./assets/ultimateIcons/75.jpeg")
    this.Hero = new Character("Hero", 104, "./assets/ultimateIcons/74.jpeg")
    this.Terry = new Character("Terry", 105, "./assets/ultimateIcons/79.jpeg")
    this.Byleth = new Character("Byleth", 106, "./assets/ultimateIcons/80.jpeg")

    //end of ultimate 2:47am

    //its 2:56am a different night, no regrets tho that monster was taste

  }
  getPMChars() {
    var z = [this.pmBowser, this.pmWario, this.pmMario, this.pmLuigi, this.pmPeach, this.pmYoshi, this.pmDonkeyKong, this.pmDiddyKong, this.pmCaptainFalcon, this.pmWolf, this.pmFox, this.pmFalco, this.pmIceClimbers, this.pmZelda,
    this.pmSheik, this.pmLink, this.pmToonLink, this.pmGanondorf, this.pmMewtwo, this.pmLucario, this.pmPikachu, this.pmJigglypuff, this.pmSquirtle, this.pmIvysaur, this.pmCharizard, this.pmSamus, this.pmZeroSuitSamus, this.pmLucas
      , this.pmNess, this.pmPit, this.pmKirby, this.pmMetaKnight, this.pmDedede, this.pmIke, this.pmMarth, this.pmRoy, this.pmOlimar, this.pmROB, this.pmGNW, this.pmSnake, this.pmSonic]
    return z;
  }
  getMeleeChars() {
    var x = [this.DoctorMario, this.Mario, this.Luigi, this.Bowser, this.Peach, this.Yoshi, this.DonkeyKong, this.CaptainFalcon, this.Ganondorf, this.Falco, this.Fox, this.Ness, this.IceClimbers, this.Kirby,
    this.Samus, this.Zelda, this.Link, this.YoungLink, this.Pichu, this.Pikachu, this.Jigglypuff, this.Mewtwo, this.MrGNW, this.Marth, this.Roy, this.Sheik];
    return x;
  }
  getUltimateChars() {
    var y = [this.uMario, this.uDonkeyKong, this.uLink, this.uSamus, this.DarkSamus, this.uYoshi, this.uKirby, this.uFox, this.uPikachu, this.uLuigi, this.uNess, this.uCaptainFalcon, this.uJigglypuff,
    this.uPeach, this.Daisy, this.uBowser, this.uIceClimbers, this.uSheik, this.uZelda, this.uDoctorMario, this.uPichu, this.uFalco, this.uMarth, this.Lucina, this.uYoungLink, this.uGanondorf,
    this.uMewtwo, this.uRoy, this.Chrom, this.uGNW, this.MetaKnight, this.Pit, this.DarkPit, this.ZeroSuitSamus, this.Wario, this.Snake, this.Ike, this.PokemonTrainer, this.DiddyKong,
    this.Lucas, this.Sonic, this.KingDedede, this.Olimar, this.Lucario, this.ROB, this.ToonLink, this.Wolf, this.Villager, this.MegaMan, this.WiiFitTrainer, this.RosalinaLuma, this.LittleMac,
    this.Greninja, this.Palutena, this.PacMan, this.Robin, this.Shulk, this.BowserJr, this.DuckHunt, this.Ryu, this.Ken, this.Cloud, this.Corrin, this.Bayonetta, this.Inkling,
    this.Ridley, this.Simon, this.Richter, this.KingKRool, this.Isabelle, this.Incineroar, this.MiiBrawler, this.MiiSwordfighter, this.MiiGunner
      , this.PiranhaPlant, this.Joker, this.Hero, this.Banjo, this.Terry, this.Byleth
    ]
    return y;
  }
  /**
   * returns the melee character count (26 including sheik and no additional chars)
   */
  getMeleeCharCount() {
    var n = Array.from(Array(27).keys()) //has to be +1 cuz keys starts at 0
    n.shift()
    return n
  }
  /**
   * returns ultimate character count (80 as of byleth)
   */
  getUltimateCharCount() {
    var n = Array.from(Array(81).keys()) //has to be +1 cuz keys starts at 0
    n.shift()
    return n
  }
  /**
   * returns PM char count (41 as of now, p+ just came out and dont konw if it changed)
   */
  getPMcharCount() {
    var n = Array.from(Array(42).keys()) //has to be +1 cuz keys starts at 0
    n.shift()
    return n
  }
  /**
   * Give it ultimate melee or pm and itll return players
  */
  getPlayerCount(game:string){
    if(game.toLocaleLowerCase() == "melee" || game.toLocaleLowerCase() == "pm")
      return [1,2,3,4]
    else if(game.toLocaleLowerCase() == "ultimate") return [1,2,3,4,5,6,7,8]
  }

}
