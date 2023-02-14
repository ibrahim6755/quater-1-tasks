const placesToVisit: string[] = ['Turkey', 'Paris', 'England', 'Canada', 'New York'];

console.log('Original order:', placesToVisit);

console.log('Alphabetical order:', [...placesToVisit].sort());

console.log('Still in original order:', placesToVisit);

console.log('Reverse alphabetical order:', [...placesToVisit].sort().reverse());

console.log('Still in original order:', placesToVisit);

placesToVisit.reverse();

console.log('Reversed order:', placesToVisit);

console.log('Back to original order:', placesToVisit);

placesToVisit.sort();

console.log('Sorted in alphabetical order:', placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));

console.log('Sorted in reverse alphabetical order:', placesToVisit);
