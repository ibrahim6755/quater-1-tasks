function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
  }
  
  const magician_names = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
  
  const great_magicians = make_great([...magician_names]);
  show_magicians(magician_names);
  show_magicians(great_magicians);
  