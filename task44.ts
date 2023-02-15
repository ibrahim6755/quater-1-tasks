function make_sandwich(...items:string[]){
    console.log("Making a sandwich with the following items:");
    for(const item of items){
        console.log("-" + item);
    }
    console.log("Enjoy your sandwich!\n");

}
make_sandwich("ham","cheese","lettuce","mayonaaise");
make_sandwich("turkey","bacon","avocado");
make_sandwich("peanut butter","jelly");