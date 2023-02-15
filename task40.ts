function make_album(artist: string, album: string): {[key: string]: any} {
    const album_dict: {[key: string]: any} = {
      "artist": artist,
      "album": album,
    };
  
    return album_dict;
  }
  const album1 = make_album("Coldplay", "X&Y");
  console.log(album1);
  
  const album2 = make_album("Ed Sheeran", "÷ (Divide)");
  console.log(album2);
  
  const album3 = make_album("Justin Biber", "Despacito");
  console.log(album3);
    