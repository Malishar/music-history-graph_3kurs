// Данные по группам для панели информации
export const bandsData = {
  // ================= 1960-е =================
  "The Beatles": {
    albums: [
      { 
        name: "Abbey Road", 
        year: 1969, 
        cover: "/images/albums/beatles/abbey-road.jpg",
        tracks: [
          "Come Together", "Something", "Maxwell's Silver Hammer", 
          "Oh! Darling", "Octopus's Garden", "I Want You (She's So Heavy)",
          "Here Comes the Sun", "Because", "You Never Give Me Your Money",
          "Sun King", "Mean Mr. Mustard", "Polythene Pam",
          "She Came In Through the Bathroom Window", "Golden Slumbers",
          "Carry That Weight", "The End", "Her Majesty"
        ]
      },
      { 
        name: "Sgt. Pepper's Lonely Hearts Club Band", 
        year: 1967, 
        cover: "/images/albums/beatles/sgt-pepper.jpg",
        tracks: [
          "Sgt. Pepper's Lonely Hearts Club Band", "With a Little Help from My Friends",
          "Lucy in the Sky with Diamonds", "Getting Better", "Fixing a Hole",
          "She's Leaving Home", "Being for the Benefit of Mr. Kite!",
          "Within You Without You", "When I'm Sixty-Four", "Lovely Rita",
          "Good Morning Good Morning", "Sgt. Pepper's Lonely Hearts Club Band (Reprise)",
          "A Day in the Life"
        ]
      },
      { 
        name: "Revolver", 
        year: 1966, 
        cover: "/images/albums/beatles/revolver.jpg",
        tracks: [
          "Taxman", "Eleanor Rigby", "I'm Only Sleeping", "Love You To",
          "Here, There and Everywhere", "Yellow Submarine", "She Said She Said",
          "Good Day Sunshine", "And Your Bird Can Sing", "For No One",
          "Doctor Robert", "I Want to Tell You", "Got to Get You into My Life",
          "Tomorrow Never Knows"
        ]
      }
    ],
    members: [
      { name: "John Lennon", role: "вокал, гитара", years: "1960-1970", current: false },
      { name: "Paul McCartney", role: "вокал, бас", years: "1960-1970", current: false },
      { name: "George Harrison", role: "гитара", years: "1960-1970", current: false },
      { name: "Ringo Starr", role: "ударные", years: "1962-1970", current: false },
      { name: "Pete Best", role: "ударные", years: "1960-1962", current: false },
      { name: "Stuart Sutcliffe", role: "бас", years: "1960-1961", current: false }
    ],
    bio: "Легендарная британская рок-группа из Ливерпуля, основанная в 1960 году. Самая успешная группа в истории музыки, оказавшая огромное влияние на развитие рок-культуры."
  },

  "The Rolling Stones": {
    albums: [
      { 
        name: "Sticky Fingers", 
        year: 1971, 
        cover: "/images/albums/rolling-stones/sticky-fingers.jpg",
        tracks: [
          "Brown Sugar", "Sway", "Wild Horses", "Can't You Hear Me Knocking",
          "You Gotta Move", "Bitch", "I Got the Blues", "Sister Morphine",
          "Dead Flowers", "Moonlight Mile"
        ]
      },
      { 
        name: "Exile on Main St.", 
        year: 1972, 
        cover: "/images/albums/rolling-stones/exile.jpg",
        tracks: [
          "Rocks Off", "Rip This Joint", "Shake Your Hips", "Casino Boogie",
          "Tumbling Dice", "Sweet Virginia", "Torn and Frayed", "Sweet Black Angel",
          "Loving Cup", "Happy", "Turd on the Run", "Ventilator Blues",
          "I Just Want to See His Face", "Let It Loose", "All Down the Line",
          "Stop Breaking Down", "Shine a Light", "Soul Survivor"
        ]
      }
    ],
    members: [
      { name: "Mick Jagger", role: "вокал", years: "1962-наст.", current: true },
      { name: "Keith Richards", role: "гитара", years: "1962-наст.", current: true },
      { name: "Ronnie Wood", role: "гитара", years: "1975-наст.", current: true },
      { name: "Charlie Watts", role: "ударные", years: "1963-2021", current: false },
      { name: "Bill Wyman", role: "бас", years: "1962-1993", current: false },
      { name: "Brian Jones", role: "гитара", years: "1962-1969", current: false },
      { name: "Mick Taylor", role: "гитара", years: "1969-1974", current: false }
    ],
    bio: "Британская рок-группа, образованная в 1962 году. Одна из самых успешных и влиятельных групп в истории рок-музыки, соперничавшая с The Beatles за звание лучшей группы мира."
  },

  "Pink Floyd": {
    albums: [
      { 
        name: "The Dark Side of the Moon", 
        year: 1973, 
        cover: "/images/albums/pink-floyd/dark-side.jpg",
        tracks: [
          "Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky",
          "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"
        ]
      },
      { 
        name: "The Wall", 
        year: 1979, 
        cover: "/images/albums/pink-floyd/the-wall.jpg",
        tracks: [
          "In the Flesh?", "The Thin Ice", "Another Brick in the Wall (Part 1)",
          "The Happiest Days of Our Lives", "Another Brick in the Wall (Part 2)",
          "Mother", "Goodbye Blue Sky", "Empty Spaces", "Young Lust",
          "One of My Turns", "Don't Leave Me Now", "Another Brick in the Wall (Part 3)",
          "Goodbye Cruel World", "Hey You", "Is There Anybody Out There?",
          "Nobody Home", "Vera", "Bring the Boys Back Home", "Comfortably Numb",
          "The Show Must Go On", "In the Flesh", "Run Like Hell", "Waiting for the Worms",
          "Stop", "The Trial", "Outside the Wall"
        ]
      }
    ],
    members: [
      { name: "Roger Waters", role: "бас, вокал", years: "1965-1985, 2005", current: false },
      { name: "David Gilmour", role: "гитара, вокал", years: "1967-1995, 2005", current: false },
      { name: "Nick Mason", role: "ударные", years: "1965-1995, 2005", current: false },
      { name: "Richard Wright", role: "клавиши", years: "1965-1979, 1987-1995, 2005", current: false },
      { name: "Syd Barrett", role: "гитара, вокал", years: "1965-1968", current: false }
    ],
    bio: "Британская прогрессив-рок группа, известная своими концептуальными альбомами, философскими текстами и уникальными звуковыми экспериментами."
  },

  // ================= 1970-е =================
  "Queen": {
    albums: [
      { 
        name: "A Night at the Opera", 
        year: 1975, 
        cover: "/images/albums/queen/night-at-the-opera.jpg",
        tracks: [
          "Death on Two Legs", "Lazing on a Sunday Afternoon", "I'm in Love with My Car",
          "You're My Best Friend", "'39", "Sweet Lady", "Seaside Rendezvous",
          "The Prophet's Song", "Love of My Life", "Good Company",
          "Bohemian Rhapsody", "God Save the Queen"
        ]
      },
      { 
        name: "News of the World", 
        year: 1977, 
        cover: "/images/albums/queen/news-of-the-world.jpg",
        tracks: [
          "We Will Rock You", "We Are the Champions", "Sheer Heart Attack",
          "All Dead, All Dead", "Spread Your Wings", "Fight from the Inside",
          "Get Down, Make Love", "Sleeping on the Sidewalk", "Who Needs You",
          "It's Late", "My Melancholy Blues"
        ]
      }
    ],
    members: [
      { name: "Freddie Mercury", role: "вокал", years: "1970-1991", current: false },
      { name: "Brian May", role: "гитара", years: "1970-наст.", current: true },
      { name: "Roger Taylor", role: "ударные", years: "1970-наст.", current: true },
      { name: "John Deacon", role: "бас", years: "1971-1997", current: false }
    ],
    bio: "Британская рок-группа, одна из самых успешных в истории. Известна уникальным стилем, смешивающим рок, оперу и поп-музыку."
  },

  "Led Zeppelin": {
    albums: [
      { 
        name: "Led Zeppelin IV", 
        year: 1971, 
        cover: "/images/albums/led-zeppelin/iv.jpg",
        tracks: [
          "Black Dog", "Rock and Roll", "The Battle of Evermore", "Stairway to Heaven",
          "Misty Mountain Hop", "Four Sticks", "Going to California", "When the Levee Breaks"
        ]
      },
      { 
        name: "Physical Graffiti", 
        year: 1975, 
        cover: "/images/albums/led-zeppelin/physical-graffiti.jpg",
        tracks: [
          "Custard Pie", "The Rover", "In My Time of Dying", "Houses of the Holy",
          "Trampled Under Foot", "Kashmir", "In the Light", "Bron-Yr-Aur",
          "Down by the Seaside", "Ten Years Gone", "Night Flight", "The Wanton Song",
          "Boogie with Stu", "Black Country Woman", "Sick Again"
        ]
      }
    ],
    members: [
      { name: "Jimmy Page", role: "гитара", years: "1968-1980", current: false },
      { name: "Robert Plant", role: "вокал", years: "1968-1980", current: false },
      { name: "John Paul Jones", role: "бас", years: "1968-1980", current: false },
      { name: "John Bonham", role: "ударные", years: "1968-1980", current: false }
    ],
    bio: "Британская рок-группа, одна из самых влиятельных в истории хард-рока. Их мощный блюзовый звук и фолковые влияния создали уникальный стиль."
  },

  "AC/DC": {
    albums: [
      { 
        name: "Back in Black", 
        year: 1980, 
        cover: "/images/albums/acdc/back-in-black.jpg",
        tracks: [
          "Hells Bells", "Shoot to Thrill", "What Do You Do for Money Honey",
          "Givin the Dog a Bone", "Let Me Put My Love Into You", "Back in Black",
          "You Shook Me All Night Long", "Have a Drink on Me", "Shake a Leg",
          "Rock and Roll Ain't Noise Pollution"
        ]
      },
      { 
        name: "Highway to Hell", 
        year: 1979, 
        cover: "/images/albums/acdc/highway-to-hell.jpg",
        tracks: [
          "Highway to Hell", "Girls Got Rhythm", "Walk All Over You",
          "Touch Too Much", "Beating Around the Bush", "Shot Down in Flames",
          "Get It Hot", "If You Want Blood (You've Got It)", "Love Hungry Man",
          "Night Prowler"
        ]
      }
    ],
    members: [
      { name: "Angus Young", role: "гитара", years: "1973-наст.", current: true },
      { name: "Brian Johnson", role: "вокал", years: "1980-2016, 2018-наст.", current: true },
      { name: "Bon Scott", role: "вокал", years: "1974-1980", current: false },
      { name: "Malcolm Young", role: "гитара", years: "1973-2014", current: false },
      { name: "Cliff Williams", role: "бас", years: "1977-2016, 2018-наст.", current: true },
      { name: "Phil Rudd", role: "ударные", years: "1975-1983, 1994-2015, 2018-наст.", current: true }
    ],
    bio: "Австралийская хард-рок группа, известная своими энергичными концертами и простыми, но мощными риффами. Back in Black - один из самых продаваемых альбомов в истории."
  },

  // ================= 1980-е =================
  "Metallica": {
    albums: [
      { 
        name: "Ride the Lightning", 
        year: 1984, 
        cover: "/images/albums/metallica/ride-the-lightning.jpg",
        tracks: [
          "Fight Fire with Fire", "Ride the Lightning", "For Whom the Bell Tolls",
          "Fade to Black", "Trapped Under Ice", "Escape", "Creeping Death",
          "The Call of Ktulu"
        ]
      },
      { 
        name: "Master of Puppets", 
        year: 1986, 
        cover: "/images/albums/metallica/master-of-puppets.jpg",
        tracks: [
          "Battery", "Master of Puppets", "The Thing That Should Not Be",
          "Welcome Home (Sanitarium)", "Disposable Heroes", "Leper Messiah",
          "Orion", "Damage, Inc."
        ]
      },
      { 
        name: "Metallica (Black Album)", 
        year: 1991, 
        cover: "/images/albums/metallica/black-album.jpg",
        tracks: [
          "Enter Sandman", "Sad but True", "Holier Than Thou", "The Unforgiven",
          "Wherever I May Roam", "Don't Tread on Me", "Through the Never",
          "Nothing Else Matters", "Of Wolf and Man", "The God That Failed",
          "My Friend of Misery", "The Struggle Within"
        ]
      }
    ],
    members: [
      { name: "James Hetfield", role: "вокал, гитара", years: "1981-наст.", current: true, image: "/images/members/metallica/james-hetfield.jpg" },
      { name: "Lars Ulrich", role: "ударные", years: "1981-наст.", current: true, image: "/images/members/metallica/lars-ulrich.jpg" },
      { name: "Kirk Hammett", role: "гитара", years: "1983-наст.", current: true, image: "/images/members/metallica/kirk-hammett.jpg" },
      { name: "Robert Trujillo", role: "бас", years: "2003-наст.", current: true, image: "/images/members/metallica/robert-trujillo.jpg" },
      { name: "Cliff Burton", role: "бас", years: "1982-1986", current: false, image: "/images/members/metallica/cliff-burton.jpg" },
      { name: "Jason Newsted", role: "бас", years: "1986-2001", current: false, image: "/images/members/metallica/jason-newsted.jpg" },
      { name: "Dave Mustaine", role: "гитара", years: "1981-1983", current: false, image: "/images/members/metallica/dave-mustaine.jpg" }
    ],
    bio: "Американская метал-группа, одна из 'большой четвёрки' трэш-метала. Считается одной из самых коммерчески успешных и влиятельных метал-групп в истории."
  },

  "Guns N' Roses": {
    albums: [
      { 
        name: "Appetite for Destruction", 
        year: 1987, 
        cover: "/images/albums/guns-n-roses/appetite.jpg",
        tracks: [
          "Welcome to the Jungle", "It's So Easy", "Nightrain", "Out ta Get Me",
          "Mr. Brownstone", "Paradise City", "My Michelle", "Think About You",
          "Sweet Child o' Mine", "You're Crazy", "Anything Goes", "Rocket Queen"
        ]
      },
      { 
        name: "Use Your Illusion I", 
        year: 1991, 
        cover: "/images/albums/guns-n-roses/illusion1.jpg",
        tracks: [
          "Right Next Door to Hell", "Dust N' Bones", "Live and Let Die",
          "Don't Cry (Original)", "Perfect Crime", "You Ain't the First",
          "Bad Obsession", "Back off Bitch", "Double Talkin' Jive",
          "November Rain", "The Garden", "Garden of Eden", "Don't Damn Me",
          "Bad Apples", "Dead Horse", "Coma"
        ]
      }
    ],
    members: [
      { name: "Axl Rose", role: "вокал", years: "1985-наст.", current: true },
      { name: "Slash", role: "гитара", years: "1985-1996, 2016-наст.", current: true },
      { name: "Duff McKagan", role: "бас", years: "1985-1997, 2016-наст.", current: true },
      { name: "Izzy Stradlin", role: "гитара", years: "1985-1991", current: false },
      { name: "Steven Adler", role: "ударные", years: "1985-1990", current: false },
      { name: "Matt Sorum", role: "ударные", years: "1990-1997", current: false }
    ],
    bio: "Американская хард-рок группа, ставшая одной из самых успешных групп конца 80-х - начала 90-х. Их дебютный альбом Appetite for Destruction - самый продаваемый дебютный альбом в истории."
  },

  // ================= 1990-е =================
  "Nirvana": {
    albums: [
      { 
        name: "Nevermind", 
        year: 1991, 
        cover: "/images/albums/nirvana/nevermind.jpg",
        tracks: [
          "Smells Like Teen Spirit", "In Bloom", "Come as You Are", "Breed",
          "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act",
          "Stay Away", "On a Plain", "Something in the Way", "Endless, Nameless"
        ]
      },
      { 
        name: "In Utero", 
        year: 1993, 
        cover: "/images/albums/nirvana/in-utero.jpg",
        tracks: [
          "Serve the Servants", "Scentless Apprentice", "Heart-Shaped Box",
          "Rape Me", "Frances Farmer Will Have Her Revenge on Seattle", "Dumb",
          "Very Ape", "Milk It", "Pennyroyal Tea", "Radio Friendly Unit Shifter",
          "tourette's", "All Apologies"
        ]
      }
    ],
    members: [
      { name: "Kurt Cobain", role: "вокал, гитара", years: "1987-1994", current: false },
      { name: "Krist Novoselic", role: "бас", years: "1987-1994", current: false },
      { name: "Dave Grohl", role: "ударные", years: "1990-1994", current: false },
      { name: "Chad Channing", role: "ударные", years: "1988-1990", current: false },
      { name: "Aaron Burckhard", role: "ударные", years: "1987-1988", current: false }
    ],
    bio: "Американская гранж-группа, ставшая голосом поколения 90-х. Их альбом Nevermind произвёл революцию в музыке, выведя альтернативный рок в мейнстрим."
  },

  "Radiohead": {
    albums: [
      { 
        name: "OK Computer", 
        year: 1997, 
        cover: "/images/albums/radiohead/ok-computer.jpg",
        tracks: [
          "Airbag", "Paranoid Android", "Subterranean Homesick Alien",
          "Exit Music (For a Film)", "Let Down", "Karma Police", "Fitter Happier",
          "Electioneering", "Climbing Up the Walls", "No Surprises",
          "Lucky", "The Tourist"
        ]
      },
      { 
        name: "Kid A", 
        year: 2000, 
        cover: "/images/albums/radiohead/kid-a.jpg",
        tracks: [
          "Everything in Its Right Place", "Kid A", "The National Anthem",
          "How to Disappear Completely", "Treefingers", "Optimistic",
          "In Limbo", "Idioteque", "Morning Bell", "Motion Picture Soundtrack"
        ]
      }
    ],
    members: [
      { name: "Thom Yorke", role: "вокал", years: "1985-наст.", current: true },
      { name: "Jonny Greenwood", role: "гитара", years: "1985-наст.", current: true },
      { name: "Colin Greenwood", role: "бас", years: "1985-наст.", current: true },
      { name: "Ed O'Brien", role: "гитара", years: "1985-наст.", current: true },
      { name: "Philip Selway", role: "ударные", years: "1985-наст.", current: true }
    ],
    bio: "Британская альтернативная рок-группа, известная своими экспериментами со звуком и глубокими текстами. OK Computer считается одним из величайших альбомов всех времён."
  },

  "Rammstein": {
    albums: [
      { 
        name: "Mutter", 
        year: 2001, 
        cover: "/images/albums/rammstein/mutter.jpg",
        tracks: [
          "Mein Herz brennt", "Links 2-3-4", "Sonne", "Ich will",
          "Feuer frei!", "Mutter", "Spieluhr", "Zwitter", "Rein raus",
          "Adios", "Nebel"
        ]
      },
      { 
        name: "Sehnsucht", 
        year: 1997, 
        cover: "/images/albums/rammstein/sehnsucht.jpg",
        tracks: [
          "Sehnsucht", "Engel", "Tier", "Bestrafe mich", "Du hast",
          "Bück dich", "Spiel mit mir", "Klavier", "Alter Mann", "Eifersucht",
          "Küss mich (Fellfrosch)"
        ]
      }
    ],
    members: [
      { name: "Till Lindemann", role: "вокал", years: "1994-наст.", current: true },
      { name: "Richard Kruspe", role: "гитара", years: "1994-наст.", current: true },
      { name: "Paul Landers", role: "гитара", years: "1994-наст.", current: true },
      { name: "Oliver Riedel", role: "бас", years: "1994-наст.", current: true },
      { name: "Christoph Schneider", role: "ударные", years: "1994-наст.", current: true },
      { name: "Christian Lorenz", role: "клавиши", years: "1994-наст.", current: true }
    ],
    bio: "Немецкая индастриал-метал группа, известная своими театральными выступлениями, тяжёлым звуком и текстами на немецком языке. Одна из самых успешных неанглоязычных групп в мире."
  },

  "System of a Down": {
    albums: [
      { 
        name: "System of a Down", 
        year: 1998, 
        cover: "/images/albums/soad/self-titled.jpg",
        tracks: [
          "Suite-Pee", "Know", "Sugar", "Suggestions", "Spiders",
          "DDevil", "Soil", "War?", "Mind", "Peephole", "CUBErt", "Darts", "P.L.U.C.K."
        ]
      },
      { 
        name: "Toxicity", 
        year: 2001, 
        cover: "/images/albums/soad/toxicity.jpg",
        tracks: [
          "Prison Song", "Needles", "Deer Dance", "Jet Pilot", "X",
          "Chop Suey!", "Bounce", "Forest", "ATWA", "Science",
          "Shimmy", "Toxicity", "Psycho", "Aerials"
        ]
      },
      { 
        name: "Steal This Album!", 
        year: 2002, 
        cover: "/images/albums/soad/steal-this-album.jpg",
        tracks: [
          "Chic 'n' Stu", "Innervision", "Bubbles", "Boom!", "Nüguns",
          "A.D.D. (American Dream Denial)", "Mr. Jack", "I-E-A-I-A-I-O", 
          "36", "Pictures", "Highway Song", "Fuck the System"
        ]
      },
      { 
        name: "Mezmerize", 
        year: 2005, 
        cover: "/images/albums/soad/mezmerize.jpg",
        tracks: [
          "Soldier Side - Intro", "B.Y.O.B.", "Revenga", "Cigaro",
          "Radio/Video", "This Cocaine Makes Me Feel Like I'm on This Song",
          "Violent Pornography", "Question!", "Sad Statue", "Old School Hollywood",
          "Lost in Hollywood"
        ]
      },
      { 
        name: "Hypnotize", 
        year: 2005, 
        cover: "/images/albums/soad/hypnotize.jpg",
        tracks: [
          "Attack", "Dreaming", "Kill Rock 'n Roll", "Hypnotize", "Stealing Society",
          "Tentative", "U-Fig", "Holy Mountains", "Vicinity of Obscenity", 
          "She's Like Heroin", "Lonely Day", "Soldier Side"
        ]
      },
      { 
        name: "Genocidal Humanoidz / Protect the Land", 
        year: 2020, 
        cover: "/images/albums/soad/genocidal-humanoidz.jpg",
        tracks: [
          "Protect the Land", "Genocidal Humanoidz"
        ]
      }
    ],
    members: [
      { name: "Serj Tankian", role: "вокал, клавиши", years: "1994-2006, 2010-наст.", current: true, image: "/images/members/soad/serj-tankian.jpg" },
      { name: "Daron Malakian", role: "гитара, вокал", years: "1994-2006, 2010-наст.", current: true, image: "/images/members/soad/daron-malakian.jpg" },
      { name: "Shavo Odadjian", role: "бас", years: "1994-2006, 2010-наст.", current: true, image: "/images/members/soad/shavo-odadjian.jpg" },
      { name: "John Dolmayan", role: "ударные", years: "1997-2006, 2010-наст.", current: true, image: "/images/members/soad/john-dolmayan.jpg" }
    ],
    bio: "Американская альтернативная метал-группа армянского происхождения, образованная в 1994 году в Лос-Анджелесе. Известна своей эклектичной музыкой, сочетающей метал, панк, прогрессив и ближневосточные мотивы, а также политическими текстами, затрагивающими темы войны, геноцида и социальной несправедливости. Дебютный альбом System of a Down (1998) привлёк внимание андеграунда, но настоящая слава пришла с Toxicity (2001) и хитом Chop Suey!. В 2020 году группа выпустила первый за 15 лет новый материал — синглы Protect the Land и Genocidal Humanoidz, посвящённые конфликту в Нагорном Карабахе. System of a Down считается одной из самых инновационных и влиятельных групп своего поколения."
  },

  "Blur": {
    albums: [
      { 
        name: "Parklife", 
        year: 1994, 
        cover: "/images/albums/blur/parklife.jpg",
        tracks: [
          "Girls & Boys", "Tracy Jacks", "End of a Century", "Parklife",
          "Bank Holiday", "Badhead", "The Debt Collector", "Far Out",
          "To the End", "London Loves", "Trouble in the Message Centre",
          "Clover Over Dover", "Magic America", "Jubilee", "This Is a Low",
          "Lot 105"
        ]
      },
      { 
        name: "The Great Escape", 
        year: 1995, 
        cover: "/images/albums/blur/the-great-escape.jpg",
        tracks: [
          "Stereotypes", "Country House", "Best Days", "Charmless Man",
          "Fade Away", "Top Man", "The Universal", "Mr. Robinson's Quango",
          "He Thought of Cars", "It Could Be You", "Ernold Same", "Globe Alone",
          "Dan Abnormal", "Entertain Me", "Yuko and Hiro", "One Born Every Minute"
        ]
      },
      { 
        name: "Blur", 
        year: 1997, 
        cover: "/images/albums/blur/blur.jpg",
        tracks: [
          "Beetlebum", "Song 2", "Country Sad Ballad Man", "M.O.R.",
          "On Your Own", "Theme from Retro", "You're So Great", "Death of a Party",
          "Chinese Bombs", "I'm Just a Killer for Your Love", "Look Inside America",
          "Strange News from Another Star", "Movin' On", "Essex Dogs"
        ]
      },
      { 
        name: "13", 
        year: 1999, 
        cover: "/images/albums/blur/13.jpg",
        tracks: [
          "Tender", "Bugman", "Coffee & TV", "Swamp Song", "1992",
          "B.L.U.R.E.M.I.", "Battle", "Mellow Song", "Trailerpark", "Caramel",
          "Trimm Trabb", "No Distance Left to Run", "Optigan 1"
        ]
      },
      { 
        name: "Think Tank", 
        year: 2003, 
        cover: "/images/albums/blur/think-tank.jpg",
        tracks: [
          "Ambulance", "Out of Time", "Crazy Beat", "Good Song", "On the Way to the Club",
          "Brothers and Sisters", "Caravan", "We've Got a File on You", "Moroccan Peoples Revolutionary Bowls Club",
          "Sweet Song", "Jets", "Gene by Gene", "Battery in Your Leg"
        ]
      },
      { 
        name: "The Magic Whip", 
        year: 2015, 
        cover: "/images/albums/blur/the-magic-whip.jpg",
        tracks: [
          "Lonesome Street", "New World Towers", "Go Out", "Ice Cream Man",
          "Thought I Was a Spaceman", "I Broadcast", "My Terracotta Heart",
          "There Are Too Many of Us", "Ghost Ship", "Pyongyang", "Ong Ong",
          "Mirrorball"
        ]
      }
    ],
    members: [
      { name: "Damon Albarn", role: "вокал, клавиши", years: "1988-наст.", current: true, image: "/images/members/blur/damon-albarn.jpg" },
      { name: "Graham Coxon", role: "гитара", years: "1988-2002, 2009-наст.", current: true, image: "/images/members/blur/graham-coxon.jpg" },
      { name: "Alex James", role: "бас", years: "1988-наст.", current: true, image: "/images/members/blur/alex-james.jpg" },
      { name: "Dave Rowntree", role: "ударные", years: "1988-наст.", current: true, image: "/images/members/blur/dave-rowntree.jpg" }
    ],
    bio: "Британская рок-группа, основанная в 1988 году в Лондоне. Вместе с Oasis были лидерами брит-поп движения 90-х. Их альбом Parklife (1994) стал определяющим для эпохи. Группа известна своим эклектичным стилем, меняющимся от брит-попа до альтернативного рока и экспериментальной электроники. Хит Song 2 (1997) стал одним из самых узнаваемых рок-гимнов. После распада в 2003 году участники занялись сольными проектами (Damon Albarn — Gorillaz), но воссоединились в 2009 и продолжают выступать и записываться."
  },

  "Deftones": {
    albums: [
      { 
        name: "Adrenaline", 
        year: 1995, 
        cover: "/images/albums/deftones/adrenaline.jpg",
        tracks: [
          "Bored", "Minus Blindfold", "One Weak", "Nosebleed", "Lifter",
          "Root", "7 Words", "Birthmark", "Engine No. 9", "Fireal", "Fist"
        ]
      },
      { 
        name: "Around the Fur", 
        year: 1997, 
        cover: "/images/albums/deftones/around-the-fur.jpg",
        tracks: [
          "My Own Summer (Shove It)", "Lhabia", "Mascara", "Around the Fur",
          "Rickets", "Be Quiet and Drive (Far Away)", "Lotion", "Dai the Flu",
          "Headup", "MX"
        ]
      },
      { 
        name: "White Pony", 
        year: 2000, 
        cover: "/images/albums/deftones/white-pony.jpg",
        tracks: [
          "Feiticeira", "Digital Bath", "Elite", "Rx Queen", "Street Carp",
          "Teenager", "Knife Prty", "Korea", "Passenger", "Change (In the House of Flies)",
          "Pink Maggit"
        ]
      },
      { 
        name: "Deftones", 
        year: 2003, 
        cover: "/images/albums/deftones/deftones.jpg",
        tracks: [
          "Hexagram", "Needles and Pins", "Minerva", "Good Morning Beautiful",
          "Deathblow", "When Girls Telephone Boys", "Battle-axe", "Lucky You",
          "Bloody Cape", "Anniversary of an Uninteresting Event", "Moana"
        ]
      },
      { 
        name: "Saturday Night Wrist", 
        year: 2006, 
        cover: "/images/albums/deftones/saturday-night-wrist.jpg",
        tracks: [
          "Hole in the Earth", "Rapture", "Beware", "Cherry Waves", "Mein",
          "U,U,D,D,L,R,L,R,A,B,Select,Start", "Xerces", "Rats!Rats!Rats!",
          "Pink Cellphone", "Combat", "Kimdracula", "Rivière"
        ]
      },
      { 
        name: "Diamond Eyes", 
        year: 2010, 
        cover: "/images/albums/deftones/diamond-eyes.jpg",
        tracks: [
          "Diamond Eyes", "Royal", "CMND/CTRL", "You've Seen the Butcher",
          "Beauty School", "Prince", "Rocket Skates", "Sextape", "Risk",
          "976-EVIL", "This Place Is Death"
        ]
      },
      { 
        name: "Koi No Yokan", 
        year: 2012, 
        cover: "/images/albums/deftones/koi-no-yokan.jpg",
        tracks: [
          "Swerve City", "Romantic Dreams", "Leathers", "Poltergeist",
          "Entombed", "Graphic Nature", "Tempest", "Gauze", "Rosemary",
          "Goon Squad", "What Happened to You?"
        ]
      },
      { 
        name: "Gore", 
        year: 2016, 
        cover: "/images/albums/deftones/gore.jpg",
        tracks: [
          "Prayers/Triangles", "Acid Hologram", "Doomed User", "Geometric Headdress",
          "Hearts/Wires", "Pittura Infamante", "Xenon", "(L)MIRL", "Gore",
          "Phantom Bride", "Rubicon"
        ]
      },
      { 
        name: "Ohms", 
        year: 2020, 
        cover: "/images/albums/deftones/ohms.jpg",
        tracks: [
          "Genesis", "Ceremony", "Urantia", "Error", "The Spell of Mathematics",
          "Pompeji", "This Link Is Dead", "Radiant City", "Headless", "Ohms"
        ]
      },
      { 
        name: "Private Music", 
        year: 2025, 
        cover: "/images/albums/deftones/private-music.jpg",
        tracks: [
          "my mind is a mountain", "locked club", "ecdysis", "infinite source", "souvenir",
          "cXz", "i think about you all the time", "milk of the madonna", "cut hands", "~metal dream", " departing the body"
        ]
      }
    ],
    members: [
      { name: "Chino Moreno", role: "вокал, гитара", years: "1988-наст.", current: true, image: "/images/members/deftones/chino-moreno.jpg" },
      { name: "Stephen Carpenter", role: "гитара", years: "1988-наст.", current: true, image: "/images/members/deftones/stephen-carpenter.jpg" },
      { name: "Abe Cunningham", role: "ударные", years: "1988-наст.", current: true, image: "/images/members/deftones/abe-cunningham.jpg" },
      { name: "Frank Delgado", role: "клавиши, семплы", years: "1999-наст.", current: true, image: "/images/members/deftones/frank-delgado.jpg" },
      { name: "Sergio Vega", role: "бас", years: "2009-2021", current: false, image: "/images/members/deftones/sergio-vega.jpg" },
      { name: "Chi Cheng", role: "бас", years: "1988-2008", current: false, image: "/images/members/deftones/chi-cheng.jpg" }
    ],
    bio: "Американская альтернативная метал-группа, образованная в 1988 году в Сакраменто, Калифорния. Deftones считаются одной из самых инновационных и влиятельных групп в жанре ню-метал и альтернативный метал, сочетая агрессивные гитарные риффы с атмосферным, экспериментальным звучанием и эмоциональным вокалом Чино Морено. Их третий альбом White Pony (2000) считается шедевром и классикой жанра. Группа пережила трагедию в 2008 году, когда басист Чи Ченг попал в автокатастрофу и впал в кому (умер в 2013). Несмотря на это, Deftones продолжают выпускать музыку, сохраняя верность своему уникальному звучанию. Альбомы Diamond Eyes (2010) и Koi No Yokan (2012) получили высокие оценки критиков. Группа известна своими экспериментами, смешивая метал, шугейз, дрим-поп и пост-рок."
  }, 

  "Korn": {
    albums: [
      { 
        name: "Korn", 
        year: 1994, 
        cover: "/images/albums/korn/korn.jpg",
        tracks: [
          "Blind", "Ball Tongue", "Need To", "Clown", "Divine", "Faget",
          "Shoots and Ladders", "Predictable", "Fake", "Lies", "Helmet in the Bush"
        ]
      },
      { 
        name: "Life Is Peachy", 
        year: 1996, 
        cover: "/images/albums/korn/life-is-peachy.jpg",
        tracks: [
          "Twist", "Chi", "Lost", "Swallow", "Porno Creep", "Good God",
          "Mr. Rogers", "K@#Ø%!", "No Place to Hide", "Wicked", "A.D.I.D.A.S.",
          "Lowrider", "Ass Itch", "Kill You"
        ]
      },
      { 
        name: "Follow the Leader", 
        year: 1998, 
        cover: "/images/albums/korn/follow-the-leader.jpg",
        tracks: [
          "It's On!", "Freak on a Leash", "Got the Life", "Dead Bodies Everywhere",
          "Children of the Korn", "B.B.K.", "Pretty", "All in the Family",
          "Reclaim My Place", "Justin", "Seed", "Cameltosis", "My Gift to You"
        ]
      },
      { 
        name: "Issues", 
        year: 1999, 
        cover: "/images/albums/korn/issues.jpg",
        tracks: [
          "Dead", "Falling Away from Me", "Trash", "4 U", "Beg for Me",
          "Make Me Bad", "It's Gonna Go Away", "Wake Up", "Am I Going Crazy",
          "Hey Daddy", "Somebody Someone", "No Way", "Let's Get This Party Started",
          "Wish You Could Be Me"
        ]
      },
      { 
        name: "Untouchables", 
        year: 2002, 
        cover: "/images/albums/korn/untouchables.jpg",
        tracks: [
          "Here to Stay", "Make Believe", "Blame", "Hollow Life", "Bottled Up Inside",
          "Thoughtless", "Hating", "One More Time", "Alive", "No One's There",
          "Wake Up Hate", "I'm Hiding", "No Way"
        ]
      },
      { 
        name: "Take a Look in the Mirror", 
        year: 2003, 
        cover: "/images/albums/korn/take-a-look-in-the-mirror.jpg",
        tracks: [
          "Right Now", "Break Some Off", "Counting on Me", "Here It Comes Again",
          "Deep Inside", "Did My Time", "Everything I've Known", "Play Me",
          "Alive", "Let's Do This Now", "I'm Done", "Y'All Want a Single", "When Will This End"
        ]
      },
      { 
        name: "See You on the Other Side", 
        year: 2005, 
        cover: "/images/albums/korn/see-you-on-the-other-side.jpg",
        tracks: [
          "Twisted Transistor", "Politics", "Hypocrites", "Souvenir", "10 or a 2-Way",
          "Throw Me Away", "Love Song", "Open Up", "Coming Undone", "Getting Off",
          "Liar", "For No One", "Seen It All", "Tearjerker"
        ]
      },
      { 
        name: "Untitled", 
        year: 2007, 
        cover: "/images/albums/korn/untitled.jpg",
        tracks: [
          "Intro", "Starting Over", "Bitch We Got a Problem", "Evolution", "Hold On",
          "Kiss", "Do What They Say", "Ever Be", "Love and Luxury", "Innocent Bystander",
          "Killing", "Hushabye", "I Will Protect You"
        ]
      },
      { 
        name: "Korn III: Remember Who You Are", 
        year: 2010, 
        cover: "/images/albums/korn/korn-iii.jpg",
        tracks: [
          "Uber-time", "Oildale (Leave Me Alone)", "Pop a Pill", "Fear Is a Place to Live",
          "Move On", "Lead the Parade", "Let the Guilt Go", "The Past", "Never Around",
          "Are You Ready to Live?", "Holding All These Lies"
        ]
      },
      { 
        name: "The Path of Totality", 
        year: 2011, 
        cover: "/images/albums/korn/the-path-of-totality.jpg",
        tracks: [
          "Chaos Lives in Everything", "Kill Mercy Within", "My Wall", "Narcissistic Cannibal",
          "Illuminati", "Burn the Obedient", "Sanctuary", "Let's Go", "Get Up!",
          "Way Too Far", "Bleeding Out", "Fuels the Comedy"
        ]
      },
      { 
        name: "The Paradigm Shift", 
        year: 2013, 
        cover: "/images/albums/korn/the-paradigm-shift.jpg",
        tracks: [
          "Prey for Me", "Love & Meth", "What We Do", "Spike in My Veins",
          "Mass Hysteria", "Paranoid and Aroused", "Never Never", "Punishment Time",
          "Lullaby for a Sadist", "Victimized", "It's All Wrong", "Wish I Wasn't Born Today",
          "Tell Me What You Want"
        ]
      },
      { 
        name: "The Serenity of Suffering", 
        year: 2016, 
        cover: "/images/albums/korn/the-serenity-of-suffering.jpg",
        tracks: [
          "Insane", "Rotting in Vain", "Black Is the Soul", "The Hating",
          "A Different World", "Take Me", "Everything Falls Apart", "Die Yet Another Night",
          "When You're Not There", "Next in Line", "Please Come for Me", "Baby"
        ]
      },
      { 
        name: "The Nothing", 
        year: 2019, 
        cover: "/images/albums/korn/the-nothing.jpg",
        tracks: [
          "The End Begins", "Cold", "You'll Never Find Me", "The Darkness Is Revealing",
          "Idiosyncrasy", "The Seduction of Indulgence", "Finally Free", "Can You Hear Me",
          "The Ringmaster", "Gravity of Discomposure", "H@rd3r", "This Loss", "Surrender to Failure"
        ]
      },
      { 
        name: "Requiem", 
        year: 2022, 
        cover: "/images/albums/korn/requiem.jpg",
        tracks: [
          "Forgotten", "Let the Dark Do the Rest", "Start the Healing", "Lost in the Grandeur",
          "Disconnect", "Hopeless and Beaten", "Penance to Sorrow", "My Confession", "Worst Is on Its Way"
        ]
      }
    ],
    members: [
      { name: "Jonathan Davis", role: "вокал, волынка", years: "1993-наст.", current: true, image: "/images/members/korn/jonathan-davis.jpg" },
      { name: "James 'Munky' Shaffer", role: "гитара", years: "1993-наст.", current: true, image: "/images/members/korn/munky-shaffer.jpg" },
      { name: "Brian 'Head' Welch", role: "гитара", years: "1993-2005, 2013-наст.", current: true, image: "/images/members/korn/head-welch.jpg" },
      { name: "Reginald 'Fieldy' Arvizu", role: "бас", years: "1993-2021", current: false, image: "/images/members/korn/fieldy-arvizu.jpg" },
      { name: "David Silveria", role: "ударные", years: "1993-2006", current: false, image: "/images/members/korn/david-silveria.jpg" },
      { name: "Ray Luzier", role: "ударные", years: "2007-наст.", current: true, image: "/images/members/korn/ray-luzier.jpg" }
    ],
    bio: "Американская ню-метал группа, образованная в 1993 году в Бейкерсфилде, Калифорния. Korn считаются пионерами и одной из самых влиятельных групп в жанре ню-метал, сочетая тяжелые гитарные риффы с эмоциональным вокалом Джонатана Дэвиса, использующего как агрессивный скриминг, так и мелодичное пение. Их дебютный альбом Korn (1994) считается основополагающим для жанра. Альбомы Follow the Leader (1998) и Issues (1999) принесли группе мировую известность. Korn известны мрачными, личными текстами, затрагивающими темы депрессии, насилия и одиночества. Группа пережила уходы участников, включая временный уход гитариста Брайана 'Head' Уэлча в 2005 году (вернулся в 2013) и басиста Филди в 2021. Несмотря на это, Korn продолжают оставаться активными и влиятельными, выпустив в 2022 году альбом Requiem."
  },
  "Slipknot": {
    albums: [
      { 
        name: "Slipknot", 
        year: 1999, 
        cover: "/images/albums/slipknot/slipknot.jpg",
        tracks: [
          "742617000027", "(sic)", "Eyeless", "Wait and Bleed", "Spit It Out",
          "Tattered & Torn", "Frail Limb Nursery", "Purity", "Liberate", "Prosthetics",
          "No Life", "Diluted", "Only One", "Scissors", "Eeyore"
        ]
      },
      { 
        name: "Iowa", 
        year: 2001, 
        cover: "/images/albums/slipknot/iowa.jpg",
        tracks: [
          "(515)", "People = Shit", "Disasterpiece", "My Plague", "Everything Ends",
          "The Heretic Anthem", "Gently", "Left Behind", "The Shape", "I Am Hated",
          "Skin Ticket", "New Abortion", "Metabolic", "Iowa"
        ]
      },
      { 
        name: "Vol. 3: (The Subliminal Verses)", 
        year: 2004, 
        cover: "/images/albums/slipknot/vol3.jpg",
        tracks: [
          "Prelude 3.0", "The Blister Exists", "Three Nil", "Duality", "Opium of the People",
          "Circle", "Welcome", "Vermilion", "Pulse of the Maggots", "Before I Forget",
          "Vermilion Pt. 2", "The Nameless", "The Virus of Life", "Danger - Keep Away"
        ]
      },
      { 
        name: "All Hope Is Gone", 
        year: 2008, 
        cover: "/images/albums/slipknot/all-hope-is-gone.jpg",
        tracks: [
          ".execute.", "Gematria (The Killing Name)", "Sulfur", "Psychosocial", "Dead Memories",
          "Vendetta", "Butcher's Hook", "Gehenna", "This Cold Black", "Wherein Lies Continue",
          "Snuff", "All Hope Is Gone", "Child of Burning Time", "Vermilion (Terry Date Mix)", "'Til We Die"
        ]
      },
      { 
        name: ".5: The Gray Chapter", 
        year: 2014, 
        cover: "/images/albums/slipknot/gray-chapter.jpg",
        tracks: [
          "XIX", "Sarcastrophe", "AOV", "The Devil in I", "Killpop", "Skeptic",
          "Lech", "Goodbye", "Nomadic", "The One That Kills the Least", "Custer",
          "Be Prepared for Hell", "The Negative One", "If Rain Is What You Want", "Override", "The Burden"
        ]
      },
      { 
        name: "We Are Not Your Kind", 
        year: 2019, 
        cover: "/images/albums/slipknot/we-are-not-your-kind.jpg",
        tracks: [
          "Insert Coin", "Unsainted", "Birth of the Cruel", "Death Because of Death",
          "Nero Forte", "Critical Darling", "A Liar's Funeral", "Red Flag", "What's Next",
          "Spiders", "Orphan", "My Pain", "Not Long for This World", "Solway Firth"
        ]
      },
      { 
        name: "The End, So Far", 
        year: 2022, 
        cover: "/images/albums/slipknot/the-end-so-far.jpg",
        tracks: [
          "Adderall", "The Dying Song (Time to Sing)", "The Chapeltown Rag", "Yen", "Hivemind",
          "Warranty", "Medicine for the Dead", "Acidic", "Heirloom", "H377", "De Sade", "Finale"
        ]
      }
    ],
    members: [
      { name: "Corey Taylor", role: "вокал", years: "1997-наст.", current: true, image: "/images/members/slipknot/corey-taylor.jpg" },
      { name: "Shawn 'Clown' Crahan", role: "перкуссия", years: "1995-наст.", current: true, image: "/images/members/slipknot/clown-crahan.jpg" },
      { name: "Mick Thomson", role: "гитара", years: "1996-наст.", current: true, image: "/images/members/slipknot/mick-thomson.jpg" },
      { name: "Jim Root", role: "гитара", years: "1999-наст.", current: true, image: "/images/members/slipknot/jim-root.jpg" },
      { name: "Sid Wilson", role: "диджей", years: "1998-наст.", current: true, image: "/images/members/slipknot/sid-wilson.jpg" },
      { name: "Jay Weinberg", role: "ударные", years: "2014-2023", current: false, image: "/images/members/slipknot/jay-weinberg.jpg" },
      { name: "Eloy Casagrande", role: "ударные", years: "2024-наст.", current: true, image: "/images/members/slipknot/eloy-casagrande.jpg" },
      { name: "Alessandro Venturella", role: "бас", years: "2014-наст.", current: true, image: "/images/members/slipknot/alessandro-venturella.jpg" },
      { name: "Michael Pfaff", role: "перкуссия", years: "2019-наст.", current: true, image: "/images/members/slipknot/michael-pfaff.jpg" },
      { name: "Paul Gray", role: "бас", years: "1995-2010", current: false, image: "/images/members/slipknot/paul-gray.jpg" },
      { name: "Joey Jordison", role: "ударные", years: "1995-2013", current: false, image: "/images/members/slipknot/joey-jordison.jpg" },
      { name: "Chris Fehn", role: "перкуссия", years: "1997-2019", current: false, image: "/images/members/slipknot/chris-fehn.jpg" },
      { name: "Greg Welts", role: "перкуссия", years: "1997-1998", current: false, image: "/images/members/slipknot/greg-welts.jpg" },
      { name: "Josh Brainard", role: "гитара", years: "1995-1999", current: false, image: "/images/members/slipknot/josh-brainard.jpg" },
      { name: "Brandon Darner", role: "перкуссия", years: "1998-1999", current: false, image: "/images/members/slipknot/brandon-darner.jpg" },
      { name: "Craig Jones", role: "сэмплы", years: "1996-2023", current: false, image: "/images/members/slipknot/craig-jones.jpg" }
    ],
    bio: "Американская ню-метал группа из Де-Мойна, Айова, образованная в 1995 году. Известны своим агрессивным звучанием, энергичными выступлениями и уникальным имиджем — все участники носят маски и комбинезоны, которые меняются с каждым альбомом. Slipknot считаются одной из самых важных групп в жанре ню-метал наряду с Korn и Deftones. Их дебютный альбом Slipknot (1999) стал платиновым, а второй альбом Iowa (2001) считается одним из самых тяжёлых в дискографии. Группа пережила трагические потери: в 2010 году умер басист Пол Грей, в 2021 — барабанщик Джои Джордисон. Несмотря на многочисленные изменения в составе, Slipknot продолжают оставаться активными и выпускать музыку, сохраняя верность своему уникальному стилю. Группа известна хитами Wait and Bleed, Duality, Psychosocial, Before I Forget и The Devil in I. В 2024 году барабанщик Джей Вайнберг покинул группу, его заменил Элой Касагранде."
  },
  "Black Sabbath": {
    albums: [
      { 
        name: "Black Sabbath", 
        year: 1970, 
        cover: "/images/albums/black-sabbath/black-sabbath.jpg",
        tracks: [
          "Black Sabbath", "The Wizard", "Behind the Wall of Sleep", "N.I.B.",
          "Evil Woman", "Sleeping Village", "Warning", "Wicked World"
        ]
      },
      { 
        name: "Paranoid", 
        year: 1970, 
        cover: "/images/albums/black-sabbath/paranoid.jpg",
        tracks: [
          "War Pigs", "Paranoid", "Planet Caravan", "Iron Man", "Electric Funeral",
          "Hand of Doom", "Rat Salad", "Fairies Wear Boots"
        ]
      },
      { 
        name: "Master of Reality", 
        year: 1971, 
        cover: "/images/albums/black-sabbath/master-of-reality.jpg",
        tracks: [
          "Sweet Leaf", "After Forever", "Embryo", "Children of the Grave",
          "Orchid", "Lord of This World", "Solitude", "Into the Void"
        ]
      },
      { 
        name: "Vol. 4", 
        year: 1972, 
        cover: "/images/albums/black-sabbath/vol4.jpg",
        tracks: [
          "Wheels of Confusion", "Tomorrow's Dream", "Changes", "FX", "Supernaut",
          "Snowblind", "Cornucopia", "Laguna Sunrise", "St. Vitus Dance", "Under the Sun"
        ]
      },
      { 
        name: "Sabbath Bloody Sabbath", 
        year: 1973, 
        cover: "/images/albums/black-sabbath/sabbath-bloody-sabbath.jpg",
        tracks: [
          "Sabbath Bloody Sabbath", "A National Acrobat", "Fluff", "Sabbra Cadabra",
          "Killing Yourself to Live", "Who Are You", "Looking for Today", "Spiral Architect"
        ]
      },
      { 
        name: "Sabotage", 
        year: 1975, 
        cover: "/images/albums/black-sabbath/sabotage.jpg",
        tracks: [
          "Hole in the Sky", "Don't Start (Too Late)", "Symptom of the Universe",
          "Megalomania", "The Thrill of It All", "Supertzar", "Am I Going Insane (Radio)",
          "The Writ"
        ]
      },
      { 
        name: "Technical Ecstasy", 
        year: 1976, 
        cover: "/images/albums/black-sabbath/technical-ecstasy.jpg",
        tracks: [
          "Back Street Kids", "You Won't Change Me", "It's Alright", "Gypsy",
          "All Moving Parts (Stand Still)", "Rock 'n' Roll Doctor", "She's Gone", "Dirty Women"
        ]
      },
      { 
        name: "Never Say Die!", 
        year: 1978, 
        cover: "/images/albums/black-sabbath/never-say-die.jpg",
        tracks: [
          "Never Say Die", "Johnny Blade", "Junior's Eyes", "A Hard Road",
          "Shock Wave", "Air Dance", "Over to You", "Breakout", "Swinging the Chain"
        ]
      },
      { 
        name: "Heaven and Hell", 
        year: 1980, 
        cover: "/images/albums/black-sabbath/heaven-and-hell.jpg",
        tracks: [
          "Neon Knights", "Children of the Sea", "Lady Evil", "Heaven and Hell",
          "Wishing Well", "Die Young", "Walk Away", "Lonely Is the Word"
        ]
      },
      { 
        name: "Mob Rules", 
        year: 1981, 
        cover: "/images/albums/black-sabbath/mob-rules.jpg",
        tracks: [
          "Turn Up the Night", "Voodoo", "The Sign of the Southern Cross",
          "E5150", "The Mob Rules", "Country Girl", "Slipping Away", "Falling Off the Edge of the World",
          "Over and Over"
        ]
      },
      { 
        name: "Born Again", 
        year: 1983, 
        cover: "/images/albums/black-sabbath/born-again.jpg",
        tracks: [
          "Trashed", "Stonehenge", "Disturbing the Priest", "The Dark", "Zero the Hero",
          "Digital Bitch", "Born Again", "Hot Line", "Keep It Warm"
        ]
      },
      { 
        name: "Seventh Star", 
        year: 1986, 
        cover: "/images/albums/black-sabbath/seventh-star.jpg",
        tracks: [
          "In for the Kill", "No Stranger to Love", "Turn to Stone", "Sphinx (The Guardian)",
          "Seventh Star", "Danger Zone", "Heart Like a Wheel", "Angry Heart", "In Memory..."
        ]
      },
      { 
        name: "The Eternal Idol", 
        year: 1987, 
        cover: "/images/albums/black-sabbath/the-eternal-idol.jpg",
        tracks: [
          "The Shining", "Ancient Warrior", "Hard Life to Love", "Glory Ride",
          "Born to Lose", "Nightmare", "Scarlet Pimpernel", "Lost Forever", "Eternal Idol"
        ]
      },
      { 
        name: "Headless Cross", 
        year: 1989, 
        cover: "/images/albums/black-sabbath/headless-cross.jpg",
        tracks: [
          "The Gates of Hell", "Headless Cross", "Devil & Daughter", "When Death Calls",
          "Kill in the Spirit World", "Call of the Wild", "Black Moon", "Nightwing"
        ]
      },
      { 
        name: "Tyr", 
        year: 1990, 
        cover: "/images/albums/black-sabbath/tyr.jpg",
        tracks: [
          "Anno Mundi", "The Law Maker", "Jerusalem", "The Sabbath Stones",
          "The Battle of Tyr", "Odin's Court", "Valhalla", "Feels Good to Me", "Heaven in Black"
        ]
      },
      { 
        name: "Dehumanizer", 
        year: 1992, 
        cover: "/images/albums/black-sabbath/dehumanizer.jpg",
        tracks: [
          "Computer God", "After All (The Dead)", "TV Crimes", "Letters from Earth",
          "Master of Insanity", "Time Machine", "Sins of the Father", "Too Late",
          "I", "Buried Alive"
        ]
      },
      { 
        name: "Cross Purposes", 
        year: 1994, 
        cover: "/images/albums/black-sabbath/cross-purposes.jpg",
        tracks: [
          "I Witness", "Cross of Thorns", "Psychophobia", "Virtual Death",
          "Immaculate Deception", "Dying for Love", "Back to Eden", "The Hand That Rocks the Cradle",
          "Cardinal Sin", "Evil Eye", "What's the Use"
        ]
      },
      { 
        name: "Forbidden", 
        year: 1995, 
        cover: "/images/albums/black-sabbath/forbidden.jpg",
        tracks: [
          "The Illusion of Power", "Get a Grip", "Can't Get Close Enough", "Shaking Off the Chains",
          "I Won't Cry for You", "Guilty as Hell", "Sick and Tired", "Rusty Angels",
          "Forbidden", "Kiss of Death"
        ]
      },
      { 
        name: "13", 
        year: 2013, 
        cover: "/images/albums/black-sabbath/13.jpg",
        tracks: [
          "End of the Beginning", "God Is Dead?", "Loner", "Zeitgeist", "Age of Reason",
          "Live Forever", "Damaged Soul", "Dear Father", "Methademic", "Peace of Mind",
          "Pariah", "Naïveté in Black"
        ]
      }
    ],
    members: [
      { name: "Ozzy Osbourne", role: "вокал", years: "1968-1977, 1978-1979, 1985, 1997-2017", current: false, image: "/images/members/black-sabbath/ozzy-osbourne.jpg" },
      { name: "Tony Iommi", role: "гитара", years: "1968-2017", current: false, image: "/images/members/black-sabbath/tony-iommi.jpg" },
      { name: "Geezer Butler", role: "бас", years: "1968-1984, 1991-1994, 1997-2017", current: false, image: "/images/members/black-sabbath/geezer-butler.jpg" },
      { name: "Bill Ward", role: "ударные", years: "1968-1980, 1983, 1984, 1994, 1997-2012", current: false, image: "/images/members/black-sabbath/bill-ward.jpg" },
      { name: "Ronnie James Dio", role: "вокал", years: "1979-1982, 1991-1992", current: false, image: "/images/members/black-sabbath/ronnie-james-dio.jpg" },
      { name: "Vinny Appice", role: "ударные", years: "1980-1982, 1991-1992", current: false, image: "/images/members/black-sabbath/vinny-appice.jpg" },
      { name: "Ian Gillan", role: "вокал", years: "1982-1983", current: false, image: "/images/members/black-sabbath/ian-gillan.jpg" },
      { name: "Glenn Hughes", role: "вокал", years: "1985-1986", current: false, image: "/images/members/black-sabbath/glenn-hughes.jpg" },
      { name: "Ray Gillen", role: "вокал", years: "1986-1987", current: false, image: "/images/members/black-sabbath/ray-gillen.jpg" },
      { name: "Tony Martin", role: "вокал", years: "1987-1991, 1993-1995", current: false, image: "/images/members/black-sabbath/tony-martin.jpg" },
      { name: "Cozy Powell", role: "ударные", years: "1988-1991, 1994-1995", current: false, image: "/images/members/black-sabbath/cozy-powell.jpg" },
      { name: "Bobby Rondinelli", role: "ударные", years: "1993-1994", current: false, image: "/images/members/black-sabbath/bobby-rondinelli.jpg" }
    ],
    bio: "Британская рок-группа, образованная в 1968 году в Бирмингеме. Считается одной из первых и самых влиятельных групп в жанре хеви-метал. Их мрачное, тяжёлое звучание, навеянное ужастиками и оккультной тематикой, заложило основы для развития металла. Классический состав: Оззи Осборн (вокал), Тони Айомми (гитара), Гизер Батлер (бас) и Билл Уорд (ударные) записали такие культовые альбомы, как Paranoid (1970), Master of Reality (1971) и Sabbath Bloody Sabbath (1973). После ухода Оззи в 1979 году, группа продолжила с вокалистом Ронни Джеймсом Дио, записав альбомы Heaven and Hell (1980) и Mob Rules (1981). За свою историю Black Sabbath пережили множество изменений состава, но оставались активными до 2017 года, когда провели прощальный тур The End. Тони Айомми оставался единственным постоянным участником на протяжении всей истории группы. Black Sabbath продали более 70 миллионов альбомов по всему миру и были введены в Зал славы рок-н-ролла в 2006 году."
  },
  "AC/DC": {
    albums: [
      { 
        name: "High Voltage", 
        year: 1975, 
        cover: "/images/albums/acdc/high-voltage.jpg",
        tracks: [
          "Baby, Please Don't Go", "She's Got Balls", "Little Lover", "Stick Around",
          "Soul Stripper", "You Ain't Got a Hold on Me", "Love Song", "Show Business"
        ]
      },
      { 
        name: "T.N.T.", 
        year: 1975, 
        cover: "/images/albums/acdc/tnt.jpg",
        tracks: [
          "It's a Long Way to the Top (If You Wanna Rock 'n' Roll)", "Rock 'n' Roll Singer",
          "The Jack", "Live Wire", "T.N.T.", "Rocker", "Can I Sit Next to You Girl",
          "High Voltage", "School Days"
        ]
      },
      { 
        name: "High Voltage (International)", 
        year: 1976, 
        cover: "/images/albums/acdc/high-voltage-int.jpg",
        tracks: [
          "It's a Long Way to the Top (If You Wanna Rock 'n' Roll)", "Rock 'n' Roll Singer",
          "The Jack", "Live Wire", "T.N.T.", "Can I Sit Next to You Girl", "Little Lover",
          "She's Got Balls", "High Voltage"
        ]
      },
      { 
        name: "Dirty Deeds Done Dirt Cheap", 
        year: 1976, 
        cover: "/images/albums/acdc/dirty-deeds.jpg",
        tracks: [
          "Dirty Deeds Done Dirt Cheap", "Love at First Feel", "Big Balls",
          "Rocker", "Problem Child", "There's Gonna Be Some Rockin'", "Ain't No Fun (Waiting Round to Be a Millionaire)",
          "Ride On", "Squealer"
        ]
      },
      { 
        name: "Let There Be Rock", 
        year: 1977, 
        cover: "/images/albums/acdc/let-there-be-rock.jpg",
        tracks: [
          "Go Down", "Dog Eat Dog", "Let There Be Rock", "Bad Boy Boogie",
          "Overdose", "Crabsody in Blue", "Hell Ain't a Bad Place to Be", "Whole Lotta Rosie"
        ]
      },
      { 
        name: "Powerage", 
        year: 1978, 
        cover: "/images/albums/acdc/powerage.jpg",
        tracks: [
          "Rock 'n' Roll Damnation", "Down Payment Blues", "Gimme a Bullet",
          "Riff Raff", "Sin City", "What's Next to the Moon", "Gone Shootin'", "Up to My Neck in You",
          "Kicked in the Teeth"
        ]
      },
      { 
        name: "If You Want Blood You've Got It", 
        year: 1978, 
        cover: "/images/albums/acdc/if-you-want-blood.jpg",
        tracks: [
          "Riff Raff", "Hell Ain't a Bad Place to Be", "Bad Boy Boogie", "The Jack",
          "Problem Child", "Whole Lotta Rosie", "Rock 'n' Roll Damnation", "High Voltage",
          "Let There Be Rock", "Rocker"
        ]
      },
      { 
        name: "Highway to Hell", 
        year: 1979, 
        cover: "/images/albums/acdc/highway-to-hell.jpg",
        tracks: [
          "Highway to Hell", "Girls Got Rhythm", "Walk All Over You", "Touch Too Much",
          "Beating Around the Bush", "Shot Down in Flames", "Get It Hot", "If You Want Blood (You've Got It)",
          "Love Hungry Man", "Night Prowler"
        ]
      },
      { 
        name: "Back in Black", 
        year: 1980, 
        cover: "/images/albums/acdc/back-in-black.jpg",
        tracks: [
          "Hells Bells", "Shoot to Thrill", "What Do You Do for Money Honey", "Givin the Dog a Bone",
          "Let Me Put My Love Into You", "Back in Black", "You Shook Me All Night Long",
          "Have a Drink on Me", "Shake a Leg", "Rock and Roll Ain't Noise Pollution"
        ]
      },
      { 
        name: "For Those About to Rock We Salute You", 
        year: 1981, 
        cover: "/images/albums/acdc/for-those-about-to-rock.jpg",
        tracks: [
          "For Those About to Rock (We Salute You)", "I Put the Finger on You", "Let's Get It Up",
          "Inject the Venom", "Snowballed", "Evil Walks", "C.O.D.", "Breaking the Rules",
          "Night of the Long Knives", "Spellbound"
        ]
      },
      { 
        name: "Flick of the Switch", 
        year: 1983, 
        cover: "/images/albums/acdc/flick-of-the-switch.jpg",
        tracks: [
          "Rising Power", "This House Is on Fire", "Flick of the Switch", "Nervous Shakedown",
          "Landslide", "Guns for Hire", "Deep in the Hole", "Bedlam in Belgium", "Badlands", "Brain Shake"
        ]
      },
      { 
        name: "Fly on the Wall", 
        year: 1985, 
        cover: "/images/albums/acdc/fly-on-the-wall.jpg",
        tracks: [
          "Fly on the Wall", "Shake Your Foundations", "First Blood", "Danger",
          "Sink the Pink", "Playing with Girls", "Stand Up", "Hell or High Water", "Back in Business", "Send for the Man"
        ]
      },
      { 
        name: "Who Made Who", 
        year: 1986, 
        cover: "/images/albums/acdc/who-made-who.jpg",
        tracks: [
          "Who Made Who", "You Shook Me All Night Long", "Shake Your Foundations",
          "Hells Bells", "For Those About to Rock (We Salute You)", "Ride On",
          "Sink the Pink", "Back in Black", "Fly on the Wall"
        ]
      },
      { 
        name: "Blow Up Your Video", 
        year: 1988, 
        cover: "/images/albums/acdc/blow-up-your-video.jpg",
        tracks: [
          "Heatseeker", "That's the Way I Wanna Rock 'n' Roll", "Meanstreak", "Go Zone",
          "Kissin' Dynamite", "Nick of Time", "Some Sin for Nuthin'", "Ruff Stuff",
          "Two's Up", "This Means War"
        ]
      },
      { 
        name: "The Razors Edge", 
        year: 1990, 
        cover: "/images/albums/acdc/the-razors-edge.jpg",
        tracks: [
          "Thunderstruck", "Fire Your Guns", "Moneytalks", "The Razors Edge", "Mistress for Christmas",
          "Rock Your Heart Out", "Are You Ready", "Got You by the Balls", "Shot of Love",
          "Let's Make It", "Goodbye & Good Riddance to Bad Luck", "If You Dare"
        ]
      },
      { 
        name: "Ballbreaker", 
        year: 1995, 
        cover: "/images/albums/acdc/ballbreaker.jpg",
        tracks: [
          "Hard as a Rock", "Cover You in Oil", "The Furor", "Boogie Man", "The Honey Roll",
          "Burnin' Alive", "Hail Caesar", "Love Bomb", "Caught with Your Pants Down",
          "Whiskey on the Rocks", "Ballbreaker"
        ]
      },
      { 
        name: "Stiff Upper Lip", 
        year: 2000, 
        cover: "/images/albums/acdc/stiff-upper-lip.jpg",
        tracks: [
          "Stiff Upper Lip", "Meltdown", "House of Jazz", "Hold Me Back", "Safe in New York City",
          "Can't Stand Still", "Can't Stop Rock 'n' Roll", "Satellite Blues", "Damned",
          "Come and Get It", "All Screwed Up", "Give It Up"
        ]
      },
      { 
        name: "Black Ice", 
        year: 2008, 
        cover: "/images/albums/acdc/black-ice.jpg",
        tracks: [
          "Rock 'n' Roll Train", "Skies on Fire", "Big Jack", "Anything Goes", "War Machine",
          "Smash 'n' Grab", "Spoilin' for a Fight", "Wheels", "Decibel", "Stormy May Day",
          "She Likes Rock 'n' Roll", "Money Made", "Rock 'n' Roll Dream", "Rocking All the Way", "Black Ice"
        ]
      },
      { 
        name: "Rock or Bust", 
        year: 2014, 
        cover: "/images/albums/acdc/rock-or-bust.jpg",
        tracks: [
          "Rock or Bust", "Play Ball", "Rock the Blues Away", "Miss Adventure", "Dogs of War",
          "Got Some Rock & Roll Thunder", "Hard Times", "Baptism by Fire", "Rock the House",
          "Sweet Candy", "Emission Control"
        ]
      },
      { 
        name: "Power Up", 
        year: 2020, 
        cover: "/images/albums/acdc/power-up.jpg",
        tracks: [
          "Realize", "Rejection", "Shot in the Dark", "Through the Mists of Time",
          "Kick You When You're Down", "Witch's Spell", "Demon Fire", "Wild Reputation",
          "No Man's Land", "Systems Down", "Money Shot", "Code Red"
        ]
      }
    ],
    members: [
      { name: "Angus Young", role: "гитара", years: "1973-наст.", current: true, image: "/images/members/acdc/angus-young.jpg" },
      { name: "Brian Johnson", role: "вокал", years: "1980-2016, 2018-наст.", current: true, image: "/images/members/acdc/brian-johnson.jpg" },
      { name: "Phil Rudd", role: "ударные", years: "1975-1983, 1994-2015, 2018-наст.", current: true, image: "/images/members/acdc/phil-rudd.jpg" },
      { name: "Cliff Williams", role: "бас", years: "1977-2016, 2018-наст.", current: true, image: "/images/members/acdc/cliff-williams.jpg" },
      { name: "Stevie Young", role: "гитара", years: "2014-наст.", current: true, image: "/images/members/acdc/stevie-young.jpg" },
      { name: "Bon Scott", role: "вокал", years: "1974-1980", current: false, image: "/images/members/acdc/bon-scott.jpg" },
      { name: "Malcolm Young", role: "гитара", years: "1973-2014", current: false, image: "/images/members/acdc/malcolm-young.jpg" },
      { name: "Dave Evans", role: "вокал", years: "1973-1974", current: false, image: "/images/members/acdc/dave-evans.jpg" },
      { name: "Mark Evans", role: "бас", years: "1975-1977", current: false, image: "/images/members/acdc/mark-evans.jpg" },
      { name: "Simon Wright", role: "ударные", years: "1983-1989", current: false, image: "/images/members/acdc/simon-wright.jpg" },
      { name: "Chris Slade", role: "ударные", years: "1989-1994, 2015-2016", current: false, image: "/images/members/acdc/chris-slade.jpg" },
      { name: "Axl Rose", role: "вокал (тур)", years: "2016", current: false, image: "/images/members/acdc/axl-rose.jpg" }
    ],
    bio: "Австралийская хард-рок группа, образованная в 1973 году в Сиднее братьями Малкольмом и Ангусом Янгами. AC/DC считаются пионерами хард-рока и одной из самых успешных рок-групп в истории. Их музыка характеризуется простыми, мощными гитарными риффами и энергичными выступлениями, особенно с харизматичным Ангусом Янгом в школьной форме. С вокалистом Боном Скоттом группа записала такие классические альбомы, как Highway to Hell (1979). После трагической смерти Скотта в 1980 году, группа продолжила с Брайаном Джонсоном и выпустила Back in Black (1980) — один из самых продаваемых альбомов в истории (более 50 миллионов копий). Группа известна хитами Highway to Hell, Back in Black, You Shook Me All Night Long, Thunderstruck и Hells Bells. AC/DC продали более 200 миллионов альбомов по всему миру, были введены в Зал славы рок-н-ролла в 2003 году. Несмотря на смерть Малкольма Янга в 2017 и уходы участников, группа продолжает выступать и выпускать музыку, оставаясь верными своему уникальному звучанию."
  },
  "Tool": {
    albums: [
      { 
        name: "Opiate", 
        year: 1992, 
        cover: "/images/albums/tool/opiate.jpg",
        tracks: [
          "Sweat", "Hush", "Part of Me", "Cold and Ugly", "Jerk-Off", "Opiate"
        ]
      },
      { 
        name: "Undertow", 
        year: 1993, 
        cover: "/images/albums/tool/undertow.jpg",
        tracks: [
          "Intolerance", "Prison Sex", "Sober", "Bottom", "Crawl Away", "Swamp Song",
          "Undertow", "4°", "Flood", "Disgustipated"
        ]
      },
      { 
        name: "Ænima", 
        year: 1996, 
        cover: "/images/albums/tool/aenima.jpg",
        tracks: [
          "Stinkfist", "Eulogy", "H.", "Useful Idiot", "Forty Six & 2", "Message to Harry Manback",
          "Hooker with a Penis", "Intermission", "Jimmy", "Die Eier von Satan", "Pushit",
          "Cesaro Summability", "Ænema", "(-) Ions", "Third Eye"
        ]
      },
      { 
        name: "Salival", 
        year: 2000, 
        cover: "/images/albums/tool/salival.jpg",
        tracks: [
          "Third Eye (Live)", "Part of Me (Live)", "Pushit (Live)", "Message to Harry Manback II",
          "You Lied (Live)", "Merkaba (Live)", "No Quarter (Live)", "L.A.M.C."
        ]
      },
      { 
        name: "Lateralus", 
        year: 2001, 
        cover: "/images/albums/tool/lateralus.jpg",
        tracks: [
          "The Grudge", "Eon Blue Apocalypse", "The Patient", "Mantra", "Schism",
          "Parabol", "Parabola", "Ticks & Leeches", "Lateralus", "Disposition",
          "Reflection", "Triad", "Faaip de Oiad"
        ]
      },
      { 
        name: "10,000 Days", 
        year: 2006, 
        cover: "/images/albums/tool/10000-days.jpg",
        tracks: [
          "Vicarious", "Jambi", "Wings for Marie (Pt 1)", "10,000 Days (Wings Pt 2)",
          "The Pot", "Lipan Conjuring", "Lost Keys (Blame Hofmann)", "Rosetta Stoned",
          "Intension", "Right in Two", "Viginti Tres"
        ]
      },
      { 
        name: "Fear Inoculum", 
        year: 2019, 
        cover: "/images/albums/tool/fear-inoculum.jpg",
        tracks: [
          "Fear Inoculum", "Pneuma", "Litanie contre la Peur", "Invincible", "Legion Inoculant",
          "Descending", "Culling Voices", "Chocolate Chip Trip", "7empest", "Mockingbeat"
        ]
      }
    ],
    members: [
      { name: "Maynard James Keenan", role: "вокал", years: "1990-наст.", current: true, image: "/images/members/tool/maynard-james-keenan.jpg" },
      { name: "Adam Jones", role: "гитара", years: "1990-наст.", current: true, image: "/images/members/tool/adam-jones.jpg" },
      { name: "Justin Chancellor", role: "бас", years: "1995-наст.", current: true, image: "/images/members/tool/justin-chancellor.jpg" },
      { name: "Danny Carey", role: "ударные", years: "1990-наст.", current: true, image: "/images/members/tool/danny-carey.jpg" },
      { name: "Paul D'Amour", role: "бас", years: "1990-1995", current: false, image: "/images/members/tool/paul-damour.jpg" }
    ],
    bio: "Американская прогрессив-метал группа, образованная в 1990 году в Лос-Анджелесе. Tool известны своим сложным, математическим подходом к музыке, нестандартными размерами, глубокими философскими текстами и визуально впечатляющими концертами с использованием проекций и скульптур. Группа выпускает альбомы крайне редко (в среднем раз в 5-10 лет), но каждый из них становится событием в мире прогрессивного металла. Их музыка сочетает тяжёлые гитарные риффы, сложные ритмические структуры ударных Дэнни Кэри и задумчивый, иногда загадочный вокал Мейнарда Джеймса Кинана. Альбомы Ænima (1996), Lateralus (2001) и 10,000 Days (2006) считаются шедеврами жанра. После 13-летнего перерыва группа выпустила Fear Inoculum (2019), который также получил высокие оценки критиков. Tool выиграли несколько премий Грэмми и имеют преданных поклонников по всему миру, ценящих их интеллектуальный и бескомпромиссный подход к музыке. Мейнард также известен по своим другим проектам: A Perfect Circle и Puscifer."
  }
};