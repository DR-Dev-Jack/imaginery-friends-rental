const form = document.querySelector('form');
    const results = document.querySelector('#results');

    const imaginaryFriends = [
  {
    name: 'hans the hell',
    ageRange: 'any',
    hobbies: ['murdering']
  },
  {
    name: 'Rascal the raccoon',
    ageRange: 'any',
    hobbies: ['stealing']
  },
  {
    name: 'Rocky the rocker',
    ageRange: 'any',
    hobbies: ['music']
  },
  {
    name: 'remy the rabbit',
    ageRange: 'any',
    hobbies: ['sporting']
  },
  {
    name: 'Muffin the old sleepy cat',
    ageRange: 'any',
    hobbies: ['sleeping']
  },
  {
    name: 'Jasper the dragon',
    ageRange: 'any',
    hobbies: ['gaming']
  },
  {
    name: 'Gizmo the robot',
    ageRange: 'any',
    hobbies: ['coding']
  },
  {
    name: 'Wink the owl',
    ageRange: 'any',
    hobbies: ['reading']
  },
  {
    name: 'Gigi the giraffe',
    ageRange: 'any',
    hobbies: ['watching tv']
  },
  {
    name: 'Dolly the doll',
    ageRange: 'any',
    hobbies: ['scare']
  },
  {
    name: 'Max the bear',
    ageRange: 'any',
    hobbies: ['hiking']
  },
  {
    name: 'Buddy the dog',
    ageRange: 'any',
    hobbies: ['fetch']
  },
  {
    name: 'Luna the wolf',
    ageRange: 'any',
    hobbies: ['hunting']
  },
  {
    name: 'Sasha the snake',
    ageRange: 'any',
    hobbies: ['yoga']
  },
  {
    name: 'Finn the fish',
    ageRange: 'any',
    hobbies: ['swimming']
  },
  {
    name: 'Ziggy the zebra',
    ageRange: 'any',
    hobbies: ['painting']
  },
  {
    name: 'Pogo the kangaroo',
    ageRange: 'any',
    hobbies: ['jumping']
  },
  {
    name: 'Charlie the cheetah',
    ageRange: 'any',
    hobbies: ['running']
  },
  {
    name: 'Nina the lemur',
    ageRange: 'any',
    hobbies: ['climbing']
  },
  {
    name: 'Toby the tiger',
    ageRange: 'any',
    hobbies: ['meditation']
  },
  {
    name: 'Mia the monkey',
    ageRange: 'any',
    hobbies: ['gymnastics']
  },
  {
    name: 'Luke the lion',
    ageRange: 'any',
    hobbies: ['weightlifting']
  },
  {
    name: 'Sam the seal',
    ageRange: 'any',
    hobbies: ['surfing']
  },
  {
    name: 'Kobe the kangaroo',
    ageRange: 'any',
    hobbies: ['basketball']
  },
  {
    name: 'Tina the turtle',
    ageRange: 'any',
    hobbies: ['swimming']
  },
  {
    name: 'Eli the elephant',
    ageRange: 'any',
    hobbies: ['football']
  },
  {
    name: 'Gus the gorilla',
    ageRange: 'any',
    hobbies: ['rock climbing']
  },
  {
    name: 'Riley the rhino',
    ageRange: 'any',
    hobbies: ['rugby']
  },
  {
    name: 'Leo the leopard',
    ageRange: 'any',
    hobbies: ['tennis']
  },
  {
    name: 'Zoe the zebra',
    ageRange: 'any',
    hobbies: ['equestrian']
  },
  {
    name: 'Jack the jaguar',
    ageRange: 'any',
    hobbies: ['hockey']
  },
  {
    name: 'Mike the moose',
    ageRange: 'any',
    hobbies: ['ice-skating']
  },
  {
    name: 'Sara the squirrel',
    ageRange: 'any',
    hobbies: ['skateboarding']
  },
  {
    name: 'Derek the deer',
    ageRange: 'any',
    hobbies: ['snowboarding']
  },
  {
    name: 'Lola the lioness',
    ageRange: 'any',
    hobbies: ['volleyball']
  },
  {
    name: 'Pascal the penguin',
    ageRange: 'any',
    hobbies: ['ice hockey']
  },
  {
    name: 'Tyson the tiger',
    ageRange: 'any',
    hobbies: ['boxing']
  },
  {
    name: 'Oscar the otter',
    ageRange: 'any',
    hobbies: ['kayaking']
  },
  {
    name: 'Nate the nightingale',
    ageRange: 'any',
    hobbies: ['golf']
  },
  {
    name: 'Randy the raccoon',
    ageRange: 'any',
    hobbies: ['wrestling']
  },
  {
    name: 'Sparkles the unicorn',
    ageRange: ['< 10'],
    hobbies: 'none specified'
  },
  {
    name: 'Bubbles the dolphin',
    ageRange: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    hobbies: 'none specified'
  },
  {
    name: 'Zazzles the zebra',
    ageRange: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    hobbies: 'none specified'
  },
  {
    name: 'Luna the moon',
    ageRange: ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
    hobbies: 'none specified'
  },
  {
    name: 'Ginger the kitten',
    ageRange: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50'],
    hobbies: 'none specified'
  },
  {
    name: 'Wally the whale',
    ageRange: ['51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
    hobbies: 'none specified'
  },
  {
    name: 'Coco the parrot',
    ageRange: ['61', '62', '63', '64', '65', '66', '67', '68', '69', '70'],
    hobbies: 'none specified'
  },
  {
    name: 'Jingle the reindeer',
    ageRange: ['71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
    hobbies: 'none specified'
  },
  {
    name: 'Bella the bear',
    ageRange: ['81', '82', '83', '84', '85', '86', '87', '88', '89', '90'],
    hobbies: 'none specified'
  },
  {
    name: 'Puddles the frog',
    ageRange: ['> 90'],
    hobbies: 'none specified'
  }
    ];

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // prevent the page from refreshing
      // Get the values from the form inputs
      const name = form.elements.name.value;
      const age = form.elements.age.value;
      const hobbies = form.elements.hobbies.value;
      // Use the values to find a matching imaginary friend
      const matchingFriend = imaginaryFriends.find((friend) => {
        // check if the age is within the range and if the hobbies match
        return (friend.ageRange === 'any' || friend.ageRange.includes(age)) && (friend.hobbies === 'none specified' || friend.hobbies.includes(hobbies));
      });
      // Display the matching friend in the results section
      if (matchingFriend) {
        results.innerHTML = `Your imaginary friend is: ${matchingFriend.name}`;
      } else {
        results.innerHTML = 'Sorry, no matching imaginary friend was found.';
      }
    });