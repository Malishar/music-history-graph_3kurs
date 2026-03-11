import React, { useRef, useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import FilterPanel from './FilterPanel';
import ConfirmDialog from './ConfirmDialog';
import InfoPanel from './InfoPanel';

const MusicGraphLocal = () => {
  const [images, setImages] = useState({});
  const fgRef = useRef();
  
  //Данные для графа
  const graphData = {
    nodes: [
      // ================= 1960-е (20 групп) =================
      { id: "The Beatles", name: "The Beatles", year: 1960, genre: "Rock", country: "UK", image: "/images/bands/the-beatles.jpg" },
      { id: "The Rolling Stones", name: "The Rolling Stones", year: 1962, genre: "Rock", country: "UK", image: "/images/bands/rolling-stones.jpg" },
      { id: "The Who", name: "The Who", year: 1964, genre: "Rock", country: "UK", image: "/images/bands/the-who.jpg" },
      { id: "The Kinks", name: "The Kinks", year: 1964, genre: "Rock", country: "UK", image: "/images/bands/the-kinks.jpg" },
      { id: "The Doors", name: "The Doors", year: 1965, genre: "Rock", country: "USA", image: "/images/bands/the-doors.jpg" },
      { id: "Pink Floyd", name: "Pink Floyd", year: 1965, genre: "Progressive Rock", country: "UK", image: "/images/bands/pink-floyd.jpg" },
      { id: "The Beach Boys", name: "The Beach Boys", year: 1961, genre: "Surf Rock", country: "USA", image: "/images/bands/the-beach-boys.jpg" },
      { id: "The Velvet Underground", name: "The Velvet Underground", year: 1964, genre: "Art Rock", country: "USA", image: "/images/bands/velvet-underground.jpg" },
      { id: "Cream", name: "Cream", year: 1966, genre: "Blues Rock", country: "UK", image: "/images/bands/cream.jpg" },
      { id: "Jimi Hendrix Experience", name: "Jimi Hendrix Experience", year: 1966, genre: "Psychedelic Rock", country: "USA/UK", image: "/images/bands/jimi-hendrix.jpg" },
      { id: "Led Zeppelin", name: "Led Zeppelin", year: 1968, genre: "Hard Rock", country: "UK", image: "/images/bands/led-zeppelin.jpg" },
      { id: "Deep Purple", name: "Deep Purple", year: 1968, genre: "Hard Rock", country: "UK", image: "/images/bands/deep-purple.jpg" },
      { id: "Black Sabbath", name: "Black Sabbath", year: 1968, genre: "Heavy Metal", country: "UK", image: "/images/bands/black-sabbath.jpg" },
      { id: "The Yardbirds", name: "The Yardbirds", year: 1963, genre: "Blues Rock", country: "UK", image: "/images/bands/the-yardbirds.jpg" },
      { id: "Jefferson Airplane", name: "Jefferson Airplane", year: 1965, genre: "Psychedelic Rock", country: "USA", image: "/images/bands/jefferson-airplane.jpg" },
      { id: "Creedence Clearwater Revival", name: "Creedence Clearwater Revival", year: 1967, genre: "Roots Rock", country: "USA", image: "/images/bands/ccr.jpg" },
      { id: "King Crimson", name: "King Crimson", year: 1968, genre: "Progressive Rock", country: "UK", image: "/images/bands/king-crimson.jpg" },
      { id: "Yes", name: "Yes", year: 1968, genre: "Progressive Rock", country: "UK", image: "/images/bands/yes.jpg" },
      { id: "Genesis", name: "Genesis", year: 1967, genre: "Progressive Rock", country: "UK", image: "/images/bands/genesis.jpg" },
      { id: "The Stooges", name: "The Stooges", year: 1967, genre: "Proto-Punk", country: "USA", image: "/images/bands/the-stooges.jpg" },
      { id: "MC5", name: "MC5", year: 1965, genre: "Proto-Punk", country: "USA", image: "/images/bands/mc5.jpg" },

      // ================= 1970-е (20 групп) =================
      // ТВОИ СТАРЫЕ ГРУППЫ ИЗ 70-х
      { id: "Queen", name: "Queen", year: 1970, genre: "Rock", country: "UK", image: "/images/bands/queen.jpg" },
      { id: "AC/DC", name: "AC/DC", year: 1973, genre: "Hard Rock", country: "Australia", image: "/images/bands/acdc.jpg" },
      { id: "Ramones", name: "Ramones", year: 1974, genre: "Punk Rock", country: "USA", image: "/images/bands/ramones.jpg" },
      { id: "Sex Pistols", name: "Sex Pistols", year: 1975, genre: "Punk Rock", country: "UK", image: "/images/bands/sex-pistols.jpg" },
      { id: "Iron Maiden", name: "Iron Maiden", year: 1975, genre: "Heavy Metal", country: "UK", image: "/images/bands/iron-maiden.jpg" },
      { id: "Aerosmith", name: "Aerosmith", year: 1970, genre: "Hard Rock", country: "USA", image: "/images/bands/aerosmith.jpg" },
      { id: "Kiss", name: "Kiss", year: 1973, genre: "Hard Rock", country: "USA", image: "/images/bands/kiss.jpg" },
      { id: "The Clash", name: "The Clash", year: 1976, genre: "Punk Rock", country: "UK", image: "/images/bands/the-clash.jpg" },
      { id: "Talking Heads", name: "Talking Heads", year: 1975, genre: "New Wave", country: "USA", image: "/images/bands/talking-heads.jpg" },
      { id: "Blondie", name: "Blondie", year: 1974, genre: "New Wave", country: "USA", image: "/images/bands/blondie.jpg" },
      { id: "The Police", name: "The Police", year: 1977, genre: "New Wave", country: "UK", image: "/images/bands/the-police.jpg" },
      { id: "The Cure", name: "The Cure", year: 1976, genre: "Gothic Rock", country: "UK", image: "/images/bands/the-cure.jpg" },
      { id: "Joy Division", name: "Joy Division", year: 1976, genre: "Post-Punk", country: "UK", image: "/images/bands/joy-division.jpg" },
      { id: "Siouxsie and the Banshees", name: "Siouxsie and the Banshees", year: 1976, genre: "Post-Punk", country: "UK", image: "/images/bands/siouxsie.jpg" },
      { id: "Buzzcocks", name: "Buzzcocks", year: 1976, genre: "Punk Rock", country: "UK", image: "/images/bands/buzzcocks.jpg" },
      { id: "The Damned", name: "The Damned", year: 1976, genre: "Punk Rock", country: "UK", image: "/images/bands/the-damned.jpg" },
      { id: "Judas Priest", name: "Judas Priest", year: 1969, genre: "Heavy Metal", country: "UK", image: "/images/bands/judas-priest.jpg" },
      { id: "Motorhead", name: "Motorhead", year: 1975, genre: "Heavy Metal", country: "UK", image: "/images/bands/motorhead.jpg" },
      { id: "Van Halen", name: "Van Halen", year: 1972, genre: "Hard Rock", country: "USA", image: "/images/bands/van-halen.jpg" },
      { id: "Fleetwood Mac", name: "Fleetwood Mac", year: 1967, genre: "Rock", country: "UK/USA", image: "/images/bands/fleetwood-mac.jpg" },
      { id: "Eagles", name: "Eagles", year: 1971, genre: "Rock", country: "USA", image: "/images/bands/eagles.jpg" },

      // ================= 1980-е (20 групп) =================
      { id: "Metallica", name: "Metallica", year: 1981, genre: "Heavy Metal", country: "USA", image: "/images/bands/metallica.jpg" },
      { id: "Guns N' Roses", name: "Guns N' Roses", year: 1985, genre: "Hard Rock", country: "USA", image: "/images/bands/guns-n-roses.jpg" },
      { id: "Red Hot Chili Peppers", name: "Red Hot Chili Peppers", year: 1983, genre: "Funk Rock", country: "USA", image: "/images/bands/rhcp.jpg" },
      { id: "Nirvana", name: "Nirvana", year: 1987, genre: "Grunge", country: "USA", image: "/images/bands/nirvana.jpg" },
      { id: "Radiohead", name: "Radiohead", year: 1985, genre: "Alternative Rock", country: "UK", image: "/images/bands/radiohead.jpg" },
      { id: "U2", name: "U2", year: 1976, genre: "Rock", country: "Ireland", image: "/images/bands/u2.jpg" },
      { id: "R.E.M.", name: "R.E.M.", year: 1980, genre: "Alternative Rock", country: "USA", image: "/images/bands/rem.jpg" },
      { id: "Depeche Mode", name: "Depeche Mode", year: 1980, genre: "Synthpop", country: "UK", image: "/images/bands/depeche-mode.jpg" },
      { id: "New Order", name: "New Order", year: 1980, genre: "Synthpop", country: "UK", image: "/images/bands/new-order.jpg" },
      { id: "The Smiths", name: "The Smiths", year: 1982, genre: "Indie Rock", country: "UK", image: "/images/bands/the-smiths.jpg" },
      { id: "The Stone Roses", name: "The Stone Roses", year: 1983, genre: "Madchester", country: "UK", image: "/images/bands/the-stone-roses.jpg" },
      { id: "Bon Jovi", name: "Bon Jovi", year: 1983, genre: "Hard Rock", country: "USA", image: "/images/bands/bon-jovi.jpg" },
      { id: "Def Leppard", name: "Def Leppard", year: 1977, genre: "Hard Rock", country: "UK", image: "/images/bands/def-leppard.jpg" },
      { id: "Mötley Crüe", name: "Mötley Crüe", year: 1981, genre: "Glam Metal", country: "USA", image: "/images/bands/motley-crue.jpg" },
      { id: "Slayer", name: "Slayer", year: 1981, genre: "Thrash Metal", country: "USA", image: "/images/bands/slayer.jpg" },
      { id: "Megadeth", name: "Megadeth", year: 1983, genre: "Thrash Metal", country: "USA", image: "/images/bands/megadeth.jpg" },
      { id: "Anthrax", name: "Anthrax", year: 1981, genre: "Thrash Metal", country: "USA", image: "/images/bands/anthrax.jpg" },
      { id: "INXS", name: "INXS", year: 1977, genre: "Rock", country: "Australia", image: "/images/bands/inxs.jpg" },
      { id: "Dire Straits", name: "Dire Straits", year: 1977, genre: "Rock", country: "UK", image: "/images/bands/dire-straits.jpg" },

      // ================= 1990-е (20 групп) =================
      { id: "Rammstein", name: "Rammstein", year: 1994, genre: "Industrial Metal", country: "Germany", image: "/images/bands/rammstein.jpg" },
      { id: "System of a Down", name: "System of a Down", year: 1994, genre: "Alternative Metal", country: "USA", image: "/images/bands/soad.jpg" },
      { id: "Linkin Park", name: "Linkin Park", year: 1996, genre: "Nu Metal", country: "USA", image: "/images/bands/linkin-park.jpg" },
      { id: "Pearl Jam", name: "Pearl Jam", year: 1990, genre: "Grunge", country: "USA", image: "/images/bands/pearl-jam.jpg" },
      { id: "Soundgarden", name: "Soundgarden", year: 1984, genre: "Grunge", country: "USA", image: "/images/bands/soundgarden.jpg" },
      { id: "Alice in Chains", name: "Alice in Chains", year: 1987, genre: "Grunge", country: "USA", image: "/images/bands/alice-in-chains.jpg" },
      { id: "Smashing Pumpkins", name: "Smashing Pumpkins", year: 1988, genre: "Alternative Rock", country: "USA", image: "/images/bands/smashing-pumpkins.jpg" },
      { id: "Foo Fighters", name: "Foo Fighters", year: 1994, genre: "Alternative Rock", country: "USA", image: "/images/bands/foo-fighters.jpg" },
      { id: "Green Day", name: "Green Day", year: 1987, genre: "Punk Rock", country: "USA", image: "/images/bands/green-day.jpg" },
      { id: "Blink-182", name: "Blink-182", year: 1992, genre: "Pop Punk", country: "USA", image: "/images/bands/blink-182.jpg" },
      { id: "Oasis", name: "Oasis", year: 1991, genre: "Britpop", country: "UK", image: "/images/bands/oasis.jpg" },
      { id: "Blur", name: "Blur", year: 1988, genre: "Britpop", country: "UK", image: "/images/bands/blur.jpg" },
      { id: "Rage Against the Machine", name: "Rage Against the Machine", year: 1991, genre: "Rap Metal", country: "USA", image: "/images/bands/rage-against-the-machine.jpg" },
      { id: "Korn", name: "Korn", year: 1993, genre: "Nu Metal", country: "USA", image: "/images/bands/korn.jpg" },
      { id: "Limp Bizkit", name: "Limp Bizkit", year: 1994, genre: "Nu Metal", country: "USA", image: "/images/bands/limp-bizkit.jpg" },
      { id: "Slipknot", name: "Slipknot", year: 1995, genre: "Nu Metal", country: "USA", image: "/images/bands/slipknot.jpg" },
      { id: "Deftones", name: "Deftones", year: 1988, genre: "Alternative Metal", country: "USA", image: "/images/bands/deftones.jpg" },
      { id: "Tool", name: "Tool", year: 1990, genre: "Progressive Metal", country: "USA", image: "/images/bands/tool.jpg" },
      { id: "Nine Inch Nails", name: "Nine Inch Nails", year: 1988, genre: "Industrial", country: "USA", image: "/images/bands/nine-inch-nails.jpg" },
      { id: "Marilyn Manson", name: "Marilyn Manson", year: 1989, genre: "Industrial Metal", country: "USA", image: "/images/bands/marilyn-manson.jpg" },
      { id: "The Offspring", name: "The Offspring", year: 1984, genre: "Punk Rock", country: "USA", image: "/images/bands/the-offspring.jpg" },
      { id: "Weezer", name: "Weezer", year: 1992, genre: "Alternative Rock", country: "USA", image: "/images/bands/weezer.jpg" },

       // ================= 2000-е (20 групп) =================
      { id: "The Strokes", name: "The Strokes", year: 2001, genre: "Indie Rock", country: "USA", image: "/images/bands/the-strokes.jpg" },
      { id: "The White Stripes", name: "The White Stripes", year: 1997, genre: "Garage Rock", country: "USA", image: "/images/bands/the-white-stripes.jpg" },
      { id: "The Killers", name: "The Killers", year: 2002, genre: "Indie Rock", country: "USA", image: "/images/bands/the-killers.jpg" },
      { id: "Arcade Fire", name: "Arcade Fire", year: 2003, genre: "Indie Rock", country: "Canada", image: "/images/bands/arcade-fire.jpg" },
      { id: "Franz Ferdinand", name: "Franz Ferdinand", year: 2002, genre: "Post-Punk", country: "UK", image: "/images/bands/franz-ferdinand.jpg" },
      { id: "Interpol", name: "Interpol", year: 1998, genre: "Post-Punk", country: "USA", image: "/images/bands/interpol.jpg" },
      { id: "Yeah Yeah Yeahs", name: "Yeah Yeah Yeahs", year: 2000, genre: "Indie Rock", country: "USA", image: "/images/bands/yeah-yeah-yeahs.jpg" },
      { id: "The Libertines", name: "The Libertines", year: 2001, genre: "Indie Rock", country: "UK", image: "/images/bands/the-libertines.jpg" },
      { id: "Bloc Party", name: "Bloc Party", year: 2003, genre: "Indie Rock", country: "UK", image: "/images/bands/bloc-party.jpg" },
      { id: "The Raconteurs", name: "The Raconteurs", year: 2005, genre: "Rock", country: "USA", image: "/images/bands/the-raconteurs.jpg" },
      { id: "Arctic Monkeys", name: "Arctic Monkeys", year: 2002, genre: "Indie Rock", country: "UK", image: "/images/bands/arctic-monkeys.jpg" },
      { id: "Muse", name: "Muse", year: 1994, genre: "Progressive Rock", country: "UK", image: "/images/bands/muse.jpg" },
      { id: "My Chemical Romance", name: "My Chemical Romance", year: 2001, genre: "Emo", country: "USA", image: "/images/bands/my-chemical-romance.jpg" },
      { id: "Fall Out Boy", name: "Fall Out Boy", year: 2001, genre: "Pop Punk", country: "USA", image: "/images/bands/fall-out-boy.jpg" },
      { id: "Paramore", name: "Paramore", year: 2004, genre: "Pop Punk", country: "USA", image: "/images/bands/paramore.jpg" },
      { id: "Panic! At The Disco", name: "Panic! At The Disco", year: 2004, genre: "Pop Punk", country: "USA", image: "/images/bands/panic-at-the-disco.jpg" },
      { id: "Thirty Seconds to Mars", name: "Thirty Seconds to Mars", year: 1998, genre: "Alternative Rock", country: "USA", image: "/images/bands/thirty-seconds-to-mars.jpg" },
      { id: "Kings of Leon", name: "Kings of Leon", year: 1999, genre: "Rock", country: "USA", image: "/images/bands/kings-of-leon.jpg" },
      { id: "The Black Keys", name: "The Black Keys", year: 2001, genre: "Blues Rock", country: "USA", image: "/images/bands/the-black-keys.jpg" },
      { id: "Queens of the Stone Age", name: "Queens of the Stone Age", year: 1996, genre: "Stoner Rock", country: "USA", image: "/images/bands/queens-of-the-stone-age.jpg" }
    ],


    links: [
      // ========== ВЛИЯНИЕ (influence) ==========
      { source: "The Beatles", target: "Queen", type: "influence" },
      { source: "The Beatles", target: "Nirvana", type: "influence" },
      { source: "The Beatles", target: "Radiohead", type: "influence" },
      { source: "The Beatles", target: "Oasis", type: "influence" },
      { source: "The Beatles", target: "Blur", type: "influence" },
      { source: "The Beatles", target: "The Stone Roses", type: "influence" },
      { source: "The Beatles", target: "The Kinks", type: "influence" },
      { source: "The Beatles", target: "The Beach Boys", type: "influence" },
      { source: "The Beatles", target: "Cream", type: "influence" },
      { source: "The Beatles", target: "The Stooges", type: "influence" },
      { source: "The Beatles", target: "Pink Floyd", type: "influence" },
      
      { source: "The Rolling Stones", target: "The Yardbirds", type: "influence" },
      { source: "The Rolling Stones", target: "Guns N' Roses", type: "influence" },
      { source: "The Rolling Stones", target: "Aerosmith", type: "influence" },
      
      { source: "The Kinks", target: "The Who", type: "influence" },
      { source: "The Kinks", target: "Cream", type: "influence" },
      { source: "The Kinks", target: "The Clash", type: "influence" },
      
      { source: "The Yardbirds", target: "Led Zeppelin", type: "influence" },
      { source: "The Yardbirds", target: "Cream", type: "influence" },

      { source: "The Beach Boys", target: "The Beatles", type: "influence" },
      
      { source: "Cream", target: "Led Zeppelin", type: "influence" },
      { source: "Cream", target: "Deep Purple", type: "influence" },
      { source: "Cream", target: "Black Sabbath", type: "influence" },
      { source: "Cream", target: "Aerosmith", type: "influence" },
      
      { source: "Jimi Hendrix Experience", target: "Cream", type: "influence" },
      { source: "Jimi Hendrix Experience", target: "Led Zeppelin", type: "influence" },
      { source: "Jimi Hendrix Experience", target: "Deep Purple", type: "influence" },
      { source: "Jimi Hendrix Experience", target: "Red Hot Chili Peppers", type: "influence" },

      { source: "The Velvet Underground", target: "The Stooges", type: "influence" },
      { source: "The Velvet Underground", target: "Pink Floyd", type: "influence" },
      { source: "The Velvet Underground", target: "Joy Division", type: "influence" },
      { source: "The Velvet Underground", target: "The Cure", type: "influence" },
      { source: "The Velvet Underground", target: "R.E.M.", type: "influence" },
      
      { source: "The Stooges", target: "MC5", type: "influence" },
      { source: "The Stooges", target: "Ramones", type: "influence" },
      { source: "The Stooges", target: "The Clash", type: "influence" },
      
      { source: "MC5", target: "Ramones", type: "influence" },
      { source: "MC5", target: "The Clash", type: "influence" },
      
      { source: "Pink Floyd", target: "Radiohead", type: "influence" },
      { source: "Pink Floyd", target: "Tool", type: "influence" },
      
      { source: "King Crimson", target: "Tool", type: "influence" },
      { source: "King Crimson", target: "Yes", type: "influence" },
      
      { source: "Yes", target: "Genesis", type: "influence" },
      
      { source: "Led Zeppelin", target: "Black Sabbath", type: "influence" },
      { source: "Led Zeppelin", target: "Aerosmith", type: "influence" },
      { source: "Led Zeppelin", target: "Van Halen", type: "influence" },
      { source: "Led Zeppelin", target: "Guns N' Roses", type: "influence" },
      { source: "Led Zeppelin", target: "Metallica", type: "influence" },

      { source: "Black Sabbath", target: "Iron Maiden", type: "influence" },
      { source: "Black Sabbath", target: "Metallica", type: "influence" },
      { source: "Black Sabbath", target: "Judas Priest", type: "influence" },
      { source: "Black Sabbath", target: "Slayer", type: "influence" },
      { source: "Black Sabbath", target: "Soundgarden", type: "influence" },
      
      { source: "Deep Purple", target: "Led Zeppelin", type: "influence" },
      { source: "Deep Purple", target: "Black Sabbath", type: "influence" },
      { source: "Deep Purple", target: "Judas Priest", type: "influence" },
      
      { source: "Queen", target: "Aerosmith", type: "influence" },
      { source: "Queen", target: "Guns N' Roses", type: "influence" },
      { source: "Queen", target: "Metallica", type: "influence" },
      
      { source: "AC/DC", target: "Guns N' Roses", type: "influence" },
      { source: "AC/DC", target: "Metallica", type: "influence" },
      { source: "AC/DC", target: "Van Halen", type: "influence" },
      { source: "AC/DC", target: "Def Leppard", type: "influence" },
      
      { source: "Aerosmith", target: "Guns N' Roses", type: "influence" },
      { source: "Aerosmith", target: "Mötley Crüe", type: "influence" },
      { source: "Aerosmith", target: "Bon Jovi", type: "influence" },
      
      { source: "Van Halen", target: "Guns N' Roses", type: "influence" },
      { source: "Van Halen", target: "Mötley Crüe", type: "influence" },
      
      { source: "Kiss", target: "Mötley Crüe", type: "influence" },
      
      { source: "Ramones", target: "The Clash", type: "influence" },
      { source: "Ramones", target: "Sex Pistols", type: "influence" },
      { source: "Ramones", target: "Nirvana", type: "influence" },
      { source: "Ramones", target: "Green Day", type: "influence" },
      { source: "Ramones", target: "The Offspring", type: "influence" },
      { source: "Ramones", target: "Blink-182", type: "influence" },
      
      { source: "Sex Pistols", target: "The Clash", type: "influence" },
      { source: "Sex Pistols", target: "Buzzcocks", type: "influence" },
      
      { source: "The Clash", target: "The Police", type: "influence" },
      { source: "The Clash", target: "U2", type: "influence" },
      { source: "The Clash", target: "R.E.M.", type: "influence" },

      { source: "Judas Priest", target: "Iron Maiden", type: "influence" },
      { source: "Judas Priest", target: "Metallica", type: "influence" },

      { source: "Motorhead", target: "Metallica", type: "influence" },
  
      { source: "Iron Maiden", target: "Metallica", type: "influence" },

      { source: "Fleetwood Mac", target: "Eagles", type: "influence" },

      { source: "Slipknot", target: "Korn", type: "influence" },
      { source: "Slipknot", target: "Metallica", type: "influence" },
      { source: "Slipknot", target: "Marilyn Manson", type: "influence" },
      // ========== ОДНА ЭПОХА (same_era) ==========
      // 60-е
      { source: "The Beatles", target: "The Rolling Stones", type: "same_era" },
      { source: "The Beatles", target: "The Kinks", type: "same_era" },
      { source: "The Beatles", target: "The Who", type: "same_era" },
      { source: "The Beatles", target: "The Doors", type: "same_era" },
      { source: "The Beatles", target: "The Beach Boys", type: "same_era" },
      { source: "The Beatles", target: "Pink Floyd", type: "same_era" },
      
      { source: "The Rolling Stones", target: "The Kinks", type: "same_era" },
      { source: "The Rolling Stones", target: "The Who", type: "same_era" },
      { source: "The Rolling Stones", target: "The Yardbirds", type: "same_era" },
      
      { source: "The Who", target: "The Kinks", type: "same_era" },
      { source: "The Who", target: "Cream", type: "same_era" },
      { source: "The Who", target: "The Yardbirds", type: "same_era" },
      { source: "The Who", target: "The Doors", type: "same_era" },
      
      { source: "Pink Floyd", target: "King Crimson", type: "same_era" },
      { source: "Pink Floyd", target: "Yes", type: "same_era" },
      { source: "Pink Floyd", target: "Genesis", type: "same_era" },
      
      { source: "King Crimson", target: "Yes", type: "same_era" },
      { source: "King Crimson", target: "Genesis", type: "same_era" },
      
      { source: "Yes", target: "Genesis", type: "same_era" },
      
      { source: "The Doors", target: "Jefferson Airplane", type: "same_era" },
      
      { source: "Jefferson Airplane", target: "The Doors", type: "same_era" },
      
      { source: "Cream", target: "Jimi Hendrix Experience", type: "same_era" },
      { source: "Cream", target: "Led Zeppelin", type: "same_era" },
      { source: "Cream", target: "Deep Purple", type: "same_era" },
      
      { source: "Jimi Hendrix Experience", target: "Cream", type: "same_era" },
      { source: "Jimi Hendrix Experience", target: "Led Zeppelin", type: "same_era" },
      { source: "Jimi Hendrix Experience", target: "Deep Purple", type: "same_era" },
      
      { source: "Led Zeppelin", target: "Deep Purple", type: "same_era" },
      { source: "Led Zeppelin", target: "Black Sabbath", type: "same_era" },
      { source: "Led Zeppelin", target: "Cream", type: "same_era" },
      
      { source: "Deep Purple", target: "Led Zeppelin", type: "same_era" },
      { source: "Deep Purple", target: "Black Sabbath", type: "same_era" },
      
      { source: "Black Sabbath", target: "Deep Purple", type: "same_era" },
      { source: "Black Sabbath", target: "Led Zeppelin", type: "same_era" },
      
      { source: "The Velvet Underground", target: "The Stooges", type: "same_era" },
      { source: "The Velvet Underground", target: "MC5", type: "same_era" },
      
      { source: "The Stooges", target: "MC5", type: "same_era" },
      { source: "The Stooges", target: "The Velvet Underground", type: "same_era" },
      
      // 70-е
      { source: "Led Zeppelin", target: "Aerosmith", type: "same_era" },
      { source: "Led Zeppelin", target: "Van Halen", type: "same_era" },
      { source: "Led Zeppelin", target: "Queen", type: "same_era" },
      
      { source: "Deep Purple", target: "Judas Priest", type: "same_era" },
      { source: "Deep Purple", target: "Motorhead", type: "same_era" },
      
      { source: "Black Sabbath", target: "Judas Priest", type: "same_era" },
      { source: "Black Sabbath", target: "Motorhead", type: "same_era" },
      { source: "Black Sabbath", target: "Iron Maiden", type: "same_era" },
      
      { source: "Queen", target: "Led Zeppelin", type: "same_era" },
      { source: "Queen", target: "Aerosmith", type: "same_era" },
      { source: "Queen", target: "Kiss", type: "same_era" },
      { source: "Queen", target: "Eagles", type: "same_era" },
      
      { source: "AC/DC", target: "Van Halen", type: "same_era" },
      { source: "AC/DC", target: "Aerosmith", type: "same_era" },
      { source: "AC/DC", target: "Def Leppard", type: "same_era" },
      
      { source: "Aerosmith", target: "Kiss", type: "same_era" },
      { source: "Aerosmith", target: "Van Halen", type: "same_era" },
      { source: "Aerosmith", target: "Queen", type: "same_era" },
      
      { source: "Kiss", target: "Van Halen", type: "same_era" },
      { source: "Kiss", target: "Aerosmith", type: "same_era" },
      
      { source: "Van Halen", target: "Aerosmith", type: "same_era" },
      { source: "Van Halen", target: "Kiss", type: "same_era" },
      { source: "Van Halen", target: "AC/DC", type: "same_era" },
      
      { source: "Ramones", target: "Sex Pistols", type: "same_era" },
      { source: "Ramones", target: "The Clash", type: "same_era" },
      { source: "Ramones", target: "Buzzcocks", type: "same_era" },
      { source: "Ramones", target: "The Damned", type: "same_era" },
      
      { source: "Sex Pistols", target: "The Clash", type: "same_era" },
      { source: "Sex Pistols", target: "Buzzcocks", type: "same_era" },
      { source: "Sex Pistols", target: "The Damned", type: "same_era" },
      
      { source: "The Clash", target: "Buzzcocks", type: "same_era" },
      { source: "The Clash", target: "The Damned", type: "same_era" },
      { source: "The Clash", target: "Sex Pistols", type: "same_era" },
      
      { source: "Joy Division", target: "The Cure", type: "same_era" },
      { source: "Joy Division", target: "Siouxsie and the Banshees", type: "same_era" },
      { source: "Joy Division", target: "The Police", type: "same_era" },
      
      { source: "The Cure", target: "Siouxsie and the Banshees", type: "same_era" },
      { source: "The Cure", target: "Joy Division", type: "same_era" },
      { source: "The Cure", target: "The Police", type: "same_era" },
      
      { source: "Siouxsie and the Banshees", target: "The Cure", type: "same_era" },
      { source: "Siouxsie and the Banshees", target: "Joy Division", type: "same_era" },
      
      { source: "The Police", target: "Talking Heads", type: "same_era" },
      { source: "The Police", target: "Blondie", type: "same_era" },
      
      { source: "Talking Heads", target: "Blondie", type: "same_era" },
      { source: "Talking Heads", target: "The Police", type: "same_era" },
      
      { source: "Blondie", target: "Talking Heads", type: "same_era" },
      { source: "Blondie", target: "The Police", type: "same_era" },
      
      { source: "Judas Priest", target: "Iron Maiden", type: "same_era" },
      { source: "Judas Priest", target: "Motorhead", type: "same_era" },
      
      { source: "Iron Maiden", target: "Judas Priest", type: "same_era" },
      { source: "Iron Maiden", target: "Motorhead", type: "same_era" },
      
      { source: "Motorhead", target: "Judas Priest", type: "same_era" },
      { source: "Motorhead", target: "Iron Maiden", type: "same_era" },
      
      { source: "Fleetwood Mac", target: "Eagles", type: "same_era" },
      
      { source: "Eagles", target: "Fleetwood Mac", type: "same_era" },
            
            
      // 80-е
      { source: "Metallica", target: "Megadeth", type: "same_era" },
      { source: "Metallica", target: "Slayer", type: "same_era" },
      { source: "Metallica", target: "Anthrax", type: "same_era" },
      { source: "Metallica", target: "Guns N' Roses", type: "same_era" },
      
      { source: "Megadeth", target: "Slayer", type: "same_era" },
      { source: "Megadeth", target: "Anthrax", type: "same_era" },
      { source: "Megadeth", target: "Metallica", type: "same_era" },
      
      { source: "Slayer", target: "Anthrax", type: "same_era" },
      { source: "Slayer", target: "Megadeth", type: "same_era" },
      
      { source: "Anthrax", target: "Metallica", type: "same_era" },
      { source: "Anthrax", target: "Megadeth", type: "same_era" },
      { source: "Anthrax", target: "Slayer", type: "same_era" },
      
      { source: "Guns N' Roses", target: "Mötley Crüe", type: "same_era" },
      { source: "Guns N' Roses", target: "Bon Jovi", type: "same_era" },
      { source: "Guns N' Roses", target: "Def Leppard", type: "same_era" },
      
      { source: "Mötley Crüe", target: "Bon Jovi", type: "same_era" },
      { source: "Mötley Crüe", target: "Guns N' Roses", type: "same_era" },
            
      { source: "Bon Jovi", target: "Def Leppard", type: "same_era" },
      { source: "Bon Jovi", target: "Mötley Crüe", type: "same_era" },
      
      { source: "Def Leppard", target: "Bon Jovi", type: "same_era" },
      { source: "Def Leppard", target: "Mötley Crüe", type: "same_era" },
      
      { source: "Red Hot Chili Peppers", target: "Nirvana", type: "same_era" },
      { source: "Red Hot Chili Peppers", target: "Guns N' Roses", type: "same_era" },
      
      { source: "Nirvana", target: "Pearl Jam", type: "same_era" },
      { source: "Nirvana", target: "Soundgarden", type: "same_era" },
      { source: "Nirvana", target: "Alice in Chains", type: "same_era" },
      { source: "Nirvana", target: "Red Hot Chili Peppers", type: "same_era" },
      
      { source: "Radiohead", target: "Nirvana", type: "same_era" },
      { source: "Radiohead", target: "R.E.M.", type: "same_era" },
      
      { source: "U2", target: "R.E.M.", type: "same_era" },
      { source: "U2", target: "The Cure", type: "same_era" },
      
      { source: "R.E.M.", target: "U2", type: "same_era" },
      { source: "R.E.M.", target: "Radiohead", type: "same_era" },
      
      { source: "Depeche Mode", target: "New Order", type: "same_era" },
      
      { source: "The Smiths", target: "The Stone Roses", type: "same_era" },
                        
      // 90-е
      { source: "Nirvana", target: "Pearl Jam", type: "same_era" },
      { source: "Nirvana", target: "Soundgarden", type: "same_era" },
      { source: "Nirvana", target: "Alice in Chains", type: "same_era" },
      
      { source: "Pearl Jam", target: "Soundgarden", type: "same_era" },
      { source: "Pearl Jam", target: "Alice in Chains", type: "same_era" },
      
      { source: "Soundgarden", target: "Alice in Chains", type: "same_era" },
      { source: "Soundgarden", target: "Pearl Jam", type: "same_era" },
      
      { source: "Alice in Chains", target: "Soundgarden", type: "same_era" },
      { source: "Alice in Chains", target: "Pearl Jam", type: "same_era" },
      
      { source: "Smashing Pumpkins", target: "Foo Fighters", type: "same_era" },
      
      { source: "Foo Fighters", target: "Smashing Pumpkins", type: "same_era" },
      
      { source: "Green Day", target: "Blink-182", type: "same_era" },
      { source: "Green Day", target: "The Offspring", type: "same_era" },
      
      { source: "Blink-182", target: "Green Day", type: "same_era" },
      { source: "Blink-182", target: "The Offspring", type: "same_era" },
      
      { source: "The Offspring", target: "Green Day", type: "same_era" },
      { source: "The Offspring", target: "Blink-182", type: "same_era" },
      
      { source: "Oasis", target: "Blur", type: "same_era" },
      { source: "Blur", target: "Oasis", type: "same_era" },
      
      { source: "Rage Against the Machine", target: "System of a Down", type: "same_era" },
      { source: "Rage Against the Machine", target: "Korn", type: "same_era" },
      
      { source: "Korn", target: "Limp Bizkit", type: "same_era" },
      { source: "Korn", target: "Linkin Park", type: "same_era" },
      { source: "Korn", target: "System of a Down", type: "same_era" },
      
      { source: "Slipknot", target: "Korn", type: "same_era" },
      { source: "Slipknot", target: "Limp Bizkit", type: "same_era" },
      { source: "Slipknot", target: "System of a Down", type: "same_era" },
      { source: "Slipknot", target: "Linkin Park", type: "same_era" },
      { source: "Slipknot", target: "Deftones", type: "same_era" },

      { source: "Limp Bizkit", target: "Korn", type: "same_era" },
      { source: "Limp Bizkit", target: "Linkin Park", type: "same_era" },
      
      { source: "System of a Down", target: "Korn", type: "same_era" },
      { source: "System of a Down", target: "Rage Against the Machine", type: "same_era" },
      
      { source: "Linkin Park", target: "Korn", type: "same_era" },
      { source: "Linkin Park", target: "Limp Bizkit", type: "same_era" },
      
      { source: "Tool", target: "Nine Inch Nails", type: "same_era" },
      { source: "Nine Inch Nails", target: "Tool", type: "same_era" },
      { source: "Marilyn Manson", target: "Nine Inch Nails", type: "same_era" },

      // ========== ОДИН ЖАНР (same_genre) ==========
      // Рок
      { source: "The Beatles", target: "The Rolling Stones", type: "same_genre" },
      { source: "The Beatles", target: "The Who", type: "same_genre" },
      { source: "The Beatles", target: "The Kinks", type: "same_genre" },
      { source: "The Rolling Stones", target: "The Who", type: "same_genre" },
      { source: "The Who", target: "The Kinks", type: "same_genre" },
      
      // Прогрессив
      { source: "Pink Floyd", target: "King Crimson", type: "same_genre" },
      { source: "Pink Floyd", target: "Yes", type: "same_genre" },
      { source: "Pink Floyd", target: "Genesis", type: "same_genre" },
      { source: "King Crimson", target: "Yes", type: "same_genre" },
      { source: "King Crimson", target: "Genesis", type: "same_genre" },
      { source: "Yes", target: "Genesis", type: "same_genre" },
      
      // Хард-рок/Метал
      { source: "Led Zeppelin", target: "Deep Purple", type: "same_genre" },
      { source: "Led Zeppelin", target: "Black Sabbath", type: "same_genre" },
      { source: "Led Zeppelin", target: "Aerosmith", type: "same_genre" },
      { source: "Led Zeppelin", target: "Van Halen", type: "same_genre" },
      { source: "Deep Purple", target: "Black Sabbath", type: "same_genre" },
      { source: "Deep Purple", target: "Judas Priest", type: "same_genre" },
      { source: "Deep Purple", target: "Motorhead", type: "same_genre" },
      { source: "Black Sabbath", target: "Judas Priest", type: "same_genre" },
      { source: "Black Sabbath", target: "Motorhead", type: "same_genre" },
      { source: "Black Sabbath", target: "Iron Maiden", type: "same_genre" },
      { source: "Judas Priest", target: "Iron Maiden", type: "same_genre" },
      { source: "Judas Priest", target: "Motorhead", type: "same_genre" },
      { source: "Iron Maiden", target: "Motorhead", type: "same_genre" },
      
      // Трэш-метал
      { source: "Metallica", target: "Megadeth", type: "same_genre" },
      { source: "Metallica", target: "Slayer", type: "same_genre" },
      { source: "Metallica", target: "Anthrax", type: "same_genre" },
      { source: "Megadeth", target: "Slayer", type: "same_genre" },
      { source: "Megadeth", target: "Anthrax", type: "same_genre" },
      { source: "Slayer", target: "Anthrax", type: "same_genre" },
      
      // Панк
      { source: "Ramones", target: "Sex Pistols", type: "same_genre" },
      { source: "Ramones", target: "The Clash", type: "same_genre" },
      { source: "Ramones", target: "Buzzcocks", type: "same_genre" },
      { source: "Ramones", target: "The Damned", type: "same_genre" },
      { source: "Sex Pistols", target: "The Clash", type: "same_genre" },
      { source: "Sex Pistols", target: "Buzzcocks", type: "same_genre" },
      { source: "Sex Pistols", target: "The Damned", type: "same_genre" },
      { source: "The Clash", target: "Buzzcocks", type: "same_genre" },
      { source: "The Clash", target: "The Damned", type: "same_genre" },
      
      // Пост-панк/Нью-вейв
      { source: "Joy Division", target: "The Cure", type: "same_genre" },
      { source: "Joy Division", target: "Siouxsie and the Banshees", type: "same_genre" },
      { source: "The Cure", target: "Siouxsie and the Banshees", type: "same_genre" },
      { source: "Talking Heads", target: "Blondie", type: "same_genre" },
      { source: "The Police", target: "Talking Heads", type: "same_genre" },
      
      // Гранж
      { source: "Nirvana", target: "Pearl Jam", type: "same_genre" },
      { source: "Nirvana", target: "Soundgarden", type: "same_genre" },
      { source: "Nirvana", target: "Alice in Chains", type: "same_genre" },
      { source: "Pearl Jam", target: "Soundgarden", type: "same_genre" },
      { source: "Pearl Jam", target: "Alice in Chains", type: "same_genre" },
      { source: "Soundgarden", target: "Alice in Chains", type: "same_genre" },
      
      // Брит-поп
      { source: "Oasis", target: "Blur", type: "same_genre" },
      { source: "The Smiths", target: "The Stone Roses", type: "same_genre" },
      
      // Ню-метал
      { source: "Korn", target: "Limp Bizkit", type: "same_genre" },
      { source: "Korn", target: "Linkin Park", type: "same_genre" },
      { source: "Limp Bizkit", target: "Linkin Park", type: "same_genre" },
      { source: "System of a Down", target: "Rage Against the Machine", type: "same_genre" },
      { source: "Slipknot", target: "Korn", type: "same_genre" },
      { source: "Slipknot", target: "Limp Bizkit", type: "same_genre" },

      // Индастриал
      { source: "Nine Inch Nails", target: "Marilyn Manson", type: "same_genre" },
      
      // Софт-рок
      { source: "Fleetwood Mac", target: "Eagles", type: "same_genre" },

      // ========== ОБЩИЕ УЧАСТНИКИ (members) ==========
      { source: "The Yardbirds", target: "Led Zeppelin", type: "members" },
      { source: "The Yardbirds", target: "Cream", type: "members" },
      { source: "Joy Division", target: "New Order", type: "members" },
      { source: "Metallica", target: "Megadeth", type: "members" },
      { source: "Nirvana", target: "Foo Fighters", type: "members" },
    ]
  };


  // ========== НАЧАЛО ВСТАВКИ ==========
  const [activeFilters, setActiveFilters] = useState({
    influence: true,
    same_era: true,
    same_genre: true,
    members: true
  });

  const [expandedNode, setExpandedNode] = useState(null);
  const [showOnlyConnected, setShowOnlyConnected] = useState(false);
  const [filteredData, setFilteredData] = useState(graphData);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [clickedGroup, setClickedGroup] = useState(null);
  
  const [infoPanelOpen, setInfoPanelOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  // Функция для фильтрации связей
  const filterLinks = () => {
    return graphData.links.filter(link => activeFilters[link.type]);
  };

  // Функция для раскрытия узла
  const expandNode = (node) => {
    if (expandedNode === node.id) {
      setExpandedNode(null);
      setShowOnlyConnected(false);
      setFilteredData(graphData);
    } else {
      const nodeLinks = graphData.links.filter(link => 
        (link.source === node.id || link.target === node.id) && activeFilters[link.type]
      );
      
      const connectedNodes = new Set([node.id]);
      nodeLinks.forEach(link => {
        connectedNodes.add(link.source);
        connectedNodes.add(link.target);
      });
      
      const filteredNodes = graphData.nodes.filter(n => connectedNodes.has(n.id));
      const filteredLinks = graphData.links.filter(link => 
        (connectedNodes.has(link.source) && connectedNodes.has(link.target)) &&
        activeFilters[link.type]
      );
      
      setExpandedNode(node.id);
      setShowOnlyConnected(true);
      setFilteredData({
        nodes: filteredNodes,
        links: filteredLinks
      });
    }
  };

  // Сброс фильтров
  const resetFilters = () => {
    setActiveFilters({
      influence: true,
      same_era: true,
      same_genre: true,
      members: true
    });
    setExpandedNode(null);
    setShowOnlyConnected(false);
    setFilteredData(graphData);
  };

  // Обновление при изменении фильтров
  useEffect(() => {
    if (!showOnlyConnected) {
      setFilteredData({
        nodes: graphData.nodes,
        links: filterLinks()
      });
    } else if (expandedNode) {
      const nodeLinks = graphData.links.filter(link => 
        (link.source === expandedNode || link.target === expandedNode) && activeFilters[link.type]
      );
      
      const connectedNodes = new Set([expandedNode]);
      nodeLinks.forEach(link => {
        connectedNodes.add(link.source);
        connectedNodes.add(link.target);
      });
      
      const filteredNodes = graphData.nodes.filter(n => connectedNodes.has(n.id));
      const filteredLinks = graphData.links.filter(link => 
        (connectedNodes.has(link.source) && connectedNodes.has(link.target)) &&
        activeFilters[link.type]
      );
      
      setFilteredData({
        nodes: filteredNodes,
        links: filteredLinks
      });
    }
  }, [activeFilters]); 

  // Загружаем изображения при монтировании компонента
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = {};
      const imagePromises = graphData.nodes.map(node => {
        return new Promise((resolve) => {
          if (node.image) {
            const img = new Image();
            img.onload = () => {
              loadedImages[node.id] = img;
              resolve();
            };
            img.onerror = () => {
              console.warn(`Не удалось загрузить: ${node.image}`);
              loadedImages[node.id] = null;
              resolve();
            };
            img.src = node.image;
          } else {
            resolve();
          }
        });
      });

      await Promise.all(imagePromises);
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Функция для отрисовки узлов с изображениями
  const paintNode = (node, ctx, globalScale) => {
    const size = 10;
    const img = images[node.id];

    // Рисуем фон
    ctx.beginPath();
    ctx.arc(node.x, node.y, size + 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fill();

    // Рисуем обводку разного цвета в зависимости от страны
    ctx.lineWidth = 2 / globalScale;
    const countryColors = {
      'UK': '#ff6b6b',
      'USA': '#4ecdc4',
      'Australia': '#45b7d1',
      'Germany': '#ff9ff3'
    };
    ctx.strokeStyle = countryColors[node.country] || '#95a5a6';
    ctx.stroke();

    // Рисуем изображение если оно загружено
    if (img) {
      try {
        const imgSize = size * 1.8;
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(img, node.x - imgSize/2, node.y - imgSize/2, imgSize, imgSize);
        ctx.restore();
      } catch (e) {
        drawFallbackNode(node, ctx, size);
      }
    } else {
      drawFallbackNode(node, ctx, size);
    }

    // Подпись названия группы
    ctx.fillStyle = '#333';
    ctx.font = '7px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(node.name, node.x, node.y + size + 2);
  };

  // Резервный вариант если изображение не загрузилось
  const drawFallbackNode = (node, ctx, size) => {
    const countryColors = {
      'UK': '#ff6b6b',
      'USA': '#4ecdc4', 
      'Australia': '#45b7d1',
      'Germany': '#ff9ff3'
    };
    
    ctx.fillStyle = countryColors[node.country] || '#95a5a6';
    ctx.beginPath();
    ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.font = '5px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node.name.substring(0, 3), node.x, node.y);
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '800px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      background: '#f8f9fa',
      position: 'relative'
    }}>
      <FilterPanel 
        activeFilters={activeFilters}
        onFilterChange={(type, value) => 
          setActiveFilters(prev => ({ ...prev, [type]: value }))
        }
        onReset={resetFilters}
      />
      
      {expandedNode && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'white',
          padding: '8px 15px',
          borderRadius: '5px',
          zIndex: 1000,
          fontSize: '14px',
          border: '2px solid #c41e3a',
          color: '#333',  // чёрный текст
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ color: '#c41e3a' }}></span>
          <span style={{ fontWeight: 'bold' }}>{expandedNode}</span>
          <button 
            onClick={() => {
              setExpandedNode(null);
              setShowOnlyConnected(false);
              setFilteredData(graphData);
            }}
            style={{
              background: '#c41e3a',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Вернуться к графу
          </button>
        </div>
      )}
      
      <ForceGraph2D
        ref={fgRef}
        graphData={filteredData}
        nodeLabel={node => `
           ${node.name}
           ${node.year}
           ${node.country}
           ${node.genre}
        `}
        nodeCanvasObject={paintNode}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI);
          ctx.fill();
        }}
        linkColor={link => {
          const linkColors = {
            'influence': '#ff9ff3',
            'same_era': '#feca57', 
            'same_genre': '#48dbfb',
            'members': '#9b59b6'
          };
          return linkColors[link.type] || '#999';
        }}
        linkWidth={link => {
          if (expandedNode && (link.source === expandedNode || link.target === expandedNode)) {
            return 2;
          }
          return 1;
        }}
        linkCurvature={0.2}
        enableNodeDrag={true}
        onNodeClick={(node) => {
          setClickedGroup(node);
          setDialogOpen(true);
        }}
        onNodeRightClick={(node, event) => {
          event.preventDefault();
          setSelectedGroup(node);
          setInfoPanelOpen(true);
        }}
      />
      <ConfirmDialog 
        isOpen={dialogOpen}
        groupName={clickedGroup?.name}
        onConfirm={() => {
          setDialogOpen(false);
          expandNode(clickedGroup);  // раскрываем группу
        }}
        onCancel={() => {
          setDialogOpen(false);
          setClickedGroup(null);
        }}
      />
      <InfoPanel 
        group={selectedGroup}
        isOpen={infoPanelOpen}
        onClose={() => setInfoPanelOpen(false)}
      />
    </div>
  );
};

export default MusicGraphLocal;
