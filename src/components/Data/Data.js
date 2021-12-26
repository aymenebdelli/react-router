import {v4 as uuidv4} from 'uuid';

const movies=[
  {
    title:'Dune 2021',
    posterUrl: 'https://xl.movieposterdb.com/21_08/2021/1160419/xl_1160419_565d3d10.jpg',
    description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    rating: 5,
    trailer: "https://www.youtube.com/embed/8g18jFHCLXk",
    id: uuidv4()
},
  {
    title:'Spider-Man: No Way Home',
    posterUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    rating: 4,
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
    id: uuidv4()
  },
  {
    title:'Train to Busan',
    posterUrl: 'https://www.wellgousa.com/sites/default/files/styles/key_art_poster/public/2018-05/406x600_38.jpg?itok=Iqb3mvDq',
    description: 'Sok-woo, a father with not much time for his daughter, Soo-ahn, are boarding the KTX, a fast train that shall bring them from Seoul to Busan.',
    rating: 4,
    trailer: "https://www.youtube.com/embed/pyWuHv2-Abk",
    id: uuidv4()
  },
  {
    title:'Eternals',
    posterUrl: 'https://xl.movieposterdb.com/21_09/2021/9032400/xl_9032400_140ce750.jpg',
    description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.',
    rating: 4,
    trailer: "https://www.youtube.com/embed/x_me3xsvDgk",
    id: uuidv4()
  },
  {
    title:'Encanto',
    posterUrl: 'https://xl.movieposterdb.com/21_11/2021/2953050/xl_2953050_5e2681db.jpg?v=2021-11-25%2015:18:43',
    description: 'A young Colombian girl has to face the frustration of being the only member of her family without magical powers.',
    rating: 5,
    trailer: "https://www.youtube.com/embed/CaimKeDcudo",
    id: uuidv4()
  },
  {
    title:'Clifford the Big Red Dog',
    posterUrl: 'https://xl.movieposterdb.com/21_07/2021/2397461/xl_2397461_6ee78405.jpg',
    description: 'A young girl is love for a tiny puppy named Clifford makes the dog grow to an enormous size.',
    rating: 3,
    trailer: "https://www.youtube.com/embed/4zH5iYM4wJo",
    id: uuidv4()
  },
  {
    title:'Nightmare Alley',
    posterUrl: 'https://xl.movieposterdb.com/21_12/2021/7740496/xl_7740496_ce47beb6.jpg',
    description: "Nightmare Alley is a portrait of greed seen through the rise and fall of a carny con man. While Gresham is usually described as a 'popular novelist,' the epithet fails to capture his contemporary notoriety.",
    rating: 4,
    trailer:"https://www.youtube.com/embed/Q81Yf46Oj3s",
    id: uuidv4()
  },
  {
    title:'West Side Story',
    posterUrl: 'https://xl.movieposterdb.com/21_11/2021/3581652/xl_3581652_17ac4830.jpg',
    description: 'An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.',
    rating: 5,
    trailer: "https://www.youtube.com/embed/A5GJLwWiYSg",
    id: uuidv4()
  }
]
export default movies