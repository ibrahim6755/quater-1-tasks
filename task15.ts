// Define the original guest list
let guestList = ["Haroon", "Feroz", "faisal"];

// Print a message stating the guest who can't make it
console.log(`${guestList[2]} can't make it to dinner.`);

// Replace the second guest with a new invitee
guestList[1] = "Ahad";

// Print invitation messages to each remaining guest
for (let guest of guestList) {
  console.log(`Dear ${guest},\nYou are cordially invited to a dinner party at my home this weekend. I look forward to your company.\nSincerely,`);
}
