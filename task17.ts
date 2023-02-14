
let guestList = ["Haroon ", "Feroz", "faisal", "Hadi"];


console.log("Unfortunately, we can only invite two people for dinner.");


while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, there's no space for you at the dinner anymore.`);
}


for (let guest of guestList) {
    console.log(`Dear ${guest},\nYou are still cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely`);
}

guestList.pop();
guestList.pop();

console.log(guestList);
