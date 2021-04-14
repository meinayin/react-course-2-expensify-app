const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name:publisherName = 'Self-Pulished' } = book.publisher

console.log(publisherName);

const item = ['Coffee', '$2.0', '$2.50', '$3.0'];
const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price}.`);