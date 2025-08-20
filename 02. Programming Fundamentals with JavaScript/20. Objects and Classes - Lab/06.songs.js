function songs(input) {
    let numberOfSongs = Number(input.shift());

    let songsList;

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

        returnType() {
            return `${type}`;
        }

         returnName() {
            return `${name}`;
        }

         returnTime() {
            return `${time}`;
        }
    }

    let typeListName = input[input.length - 1];

    for(let i = 0; i < numberOfSongs; i++) {
        let data = input[i].split('_');
    
        type = data[0];
        name = data[1];
        time = data[2];

        let typeList = new Song(type);
        songsList = new Song(name);
        let timeList = new Song(time);

        if(typeListName === 'all') {
            console.log(typeList.returnName());
        }else if(typeListName === typeList.returnType()) {
            console.log(typeList.returnName());
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
