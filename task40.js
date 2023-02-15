function make_album(artist, album) {
    var album_dict = {
        "artist": artist,
        "album": album
    };
    return album_dict;
}
var album1 = make_album("Coldplay", "X&Y");
console.log(album1);
var album2 = make_album("Ed Sheeran", "÷ (Divide)");
console.log(album2);
var album3 = make_album("Justin Biber", "Despacito");
console.log(album3);
