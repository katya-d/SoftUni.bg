function songs(arrData) {
  let numberOfSongs = Number(arrData.shift());
  let typeOfTheList = arrData.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 0; i < numberOfSongs; i++) {
    let parts = arrData[i].split("_");

    let songAlbum = parts[0];
    let songName = parts[1];
    let songTime = parts[2];

    let newSong = new Song(songAlbum, songName, songTime);

    if (typeOfTheList === "all") {
      console.log(newSong.name);
    } else if (newSong.typeList === typeOfTheList) {
      console.log(newSong.name);
    }
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
console.log("------");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("------");
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
