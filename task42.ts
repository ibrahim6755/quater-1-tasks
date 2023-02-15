function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  const magician_names = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
  
  make_great(magician_names);
  
  show_magicians(magician_names);
  