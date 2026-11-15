// SAMPLE DATA for the design mocks only. Dates, runtimes, story order and streaming availability are
// from memory plus one web check (2026-11-15) and are NOT verified. The real build pulls availability per
// country from TMDB's watch-provider data (JustWatch) and needs a checked order.
// Array order = story (in-universe) order. kind: film | series | special | short | anim
// e: 1 essential, 2 recommended, 3 optional. pc: post-credit scenes. c: two colours for the generated key art.
window.TITLES = [
  { id: "catfa", t: "Captain America: The First Avenger", k: "film", d: "2011-07-22", y: 1943, ph: 1, m: 124, e: 1, pc: 1, c: ["#3b5b8c", "#c9a66b"], hook: "A skinny kid from Brooklyn volunteers for an experiment and ends up in the ice." },
  { id: "cm", t: "Captain Marvel", k: "film", d: "2019-03-08", y: 1995, ph: 3, m: 123, e: 2, pc: 2, c: ["#1f3a7a", "#e2a33a"], hook: "A Kree soldier crash-lands in 1995 and finds out who she was." },
  { id: "im", t: "Iron Man", k: "film", d: "2008-05-02", y: 2008, ph: 1, m: 126, e: 1, pc: 1, c: ["#9e1b1b", "#e8b33d"], hook: "A weapons dealer builds a suit in a cave. Everything starts here." },
  { id: "im2", t: "Iron Man 2", k: "film", d: "2010-05-07", y: 2010, ph: 1, m: 124, e: 3, pc: 1, c: ["#7d1b1b", "#b9b9c0"], hook: "Tony is dying from the thing keeping him alive." },
  { id: "hulk", t: "The Incredible Hulk", k: "film", d: "2008-06-13", y: 2010, ph: 1, m: 112, e: 3, pc: 1, c: ["#2f5d2a", "#8fbf4a"], w: "rent", hook: "Bruce Banner on the run. Later films barely mention it." },
  { id: "thor", t: "Thor", k: "film", d: "2011-05-06", y: 2010, ph: 1, m: 115, e: 2, pc: 1, c: ["#3d4f7a", "#d9c27a"], hook: "A god loses his hammer in New Mexico." },
  { id: "avg", t: "The Avengers", k: "film", d: "2012-05-04", y: 2012, ph: 1, m: 143, e: 1, pc: 2, c: ["#2a3550", "#d64b2a"], hook: "Six heroes, one city, one alien army." },
  { id: "tdw", t: "Thor: The Dark World", k: "film", d: "2013-11-08", y: 2013, ph: 2, m: 112, e: 3, pc: 2, c: ["#2b2633", "#b0412e"], hook: "Introduces the Reality Stone. Watch it for that." },
  { id: "im3", t: "Iron Man 3", k: "film", d: "2013-05-03", y: 2013, ph: 2, m: 130, e: 2, pc: 1, c: ["#8a2d14", "#f0c14a"], hook: "Tony after New York: no sleep, too many suits." },
  { id: "tws", t: "Captain America: The Winter Soldier", k: "film", d: "2014-04-04", y: 2014, ph: 2, m: 136, e: 1, pc: 2, c: ["#283447", "#9aa7b8"], hook: "S.H.I.E.L.D. is not what it seems." },
  { id: "gotg", t: "Guardians of the Galaxy", k: "film", d: "2014-08-01", y: 2014, ph: 2, m: 121, e: 1, pc: 1, c: ["#3a1f5c", "#f08a3c"], hook: "Five misfits and an orb everyone wants." },
  { id: "gotg2", t: "Guardians of the Galaxy Vol. 2", k: "film", d: "2017-05-05", y: 2014, ph: 3, m: 136, e: 2, pc: 5, c: ["#5a2a6e", "#ff9fb3"], hook: "Peter meets his father. Five post-credit scenes." },
  { id: "groot", t: "I Am Groot", k: "short", d: "2022-08-10", y: 2014, ph: 4, m: 20, ep: 5, e: 3, pc: 0, c: ["#3c5a2a", "#c3d36b"], hook: "Tiny Groot shorts. Pure fun, skip freely." },
  { id: "aou", t: "Avengers: Age of Ultron", k: "film", d: "2015-05-01", y: 2015, ph: 2, m: 141, e: 1, pc: 1, c: ["#3c3f46", "#c23a2b"], hook: "Tony builds a peacekeeper. It disagrees." },
  { id: "am", t: "Ant-Man", k: "film", d: "2015-07-17", y: 2015, ph: 2, m: 117, e: 2, pc: 2, c: ["#5b1e1e", "#bfbfbf"], hook: "A thief shrinks. The quantum realm opens." },
  { id: "cw", t: "Captain America: Civil War", k: "film", d: "2016-05-06", y: 2016, ph: 3, m: 147, e: 1, pc: 2, c: ["#2c3a55", "#a83232"], hook: "The Avengers split over who gets to control them." },
  { id: "bw", t: "Black Widow", k: "film", d: "2021-07-09", y: 2016, ph: 4, m: 134, e: 2, pc: 1, c: ["#1d1d22", "#c8313a"], hook: "Natasha on the run, and the family she left." },
  { id: "bp", t: "Black Panther", k: "film", d: "2018-02-16", y: 2016, ph: 3, m: 134, e: 1, pc: 2, c: ["#24133a", "#9b6cd6"], hook: "A new king, and a cousin with a claim." },
  { id: "hc", t: "Spider-Man: Homecoming", k: "film", d: "2017-07-07", y: 2016, ph: 3, m: 133, e: 2, pc: 2, c: ["#b3202a", "#2a4fa8"], w: "sony", hook: "Peter wants to be an Avenger. He has homework." },
  { id: "ds", t: "Doctor Strange", k: "film", d: "2016-11-04", y: 2016, ph: 3, m: 115, e: 2, pc: 2, c: ["#2a2a5c", "#e07b28"], hook: "A surgeon loses his hands and finds magic." },
  { id: "rag", t: "Thor: Ragnarok", k: "film", d: "2017-11-03", y: 2017, ph: 3, m: 130, e: 1, pc: 2, c: ["#4a1f6e", "#ffb02e"], hook: "Asgard ends. Thor gets a haircut and a comedy." },
  { id: "amw", t: "Ant-Man and the Wasp", k: "film", d: "2018-07-06", y: 2018, ph: 3, m: 118, e: 3, pc: 2, c: ["#5b1e1e", "#e2c14a"], hook: "Its mid-credit scene matters more than the film." },
  { id: "iw", t: "Avengers: Infinity War", k: "film", d: "2018-04-27", y: 2018, ph: 3, m: 149, e: 1, pc: 1, c: ["#3b2a52", "#d9a23a"], hook: "Thanos comes for the stones. Half of everyone goes." },
  { id: "eg", t: "Avengers: Endgame", k: "film", d: "2019-04-26", y: 2023, ph: 3, m: 181, e: 1, pc: 0, c: ["#2a1d3d", "#c9a23e"], hook: "Five years later. One more try." },
  { id: "loki1", t: "Loki — Season 1", k: "series", d: "2021-06-09", y: 2012, ph: 4, m: 300, ep: 6, e: 1, pc: 0, c: ["#1f4a3a", "#d8b44a"], hook: "The TVA catches a variant. The multiverse begins here." },
  { id: "wif1", t: "What If...? — Season 1", k: "anim", d: "2021-08-11", y: 2023, ph: 4, m: 300, ep: 9, e: 3, pc: 0, c: ["#3b2a1d", "#f2c45a"], hook: "Animated alternate takes. Optional, but sets up Multiverse of Madness." },
  { id: "wv", t: "WandaVision", k: "series", d: "2021-01-15", y: 2023, ph: 4, m: 350, ep: 9, e: 1, pc: 0, c: ["#c23a6b", "#f2d0a4"], hook: "A sitcom suburb that is not a sitcom." },
  { id: "sc", t: "Shang-Chi and the Legend of the Ten Rings", k: "film", d: "2021-09-03", y: 2024, ph: 4, m: 132, e: 2, pc: 2, c: ["#7a1a1a", "#e8b04a"], hook: "A valet in San Francisco, and a father with ten rings." },
  { id: "fws", t: "The Falcon and the Winter Soldier", k: "series", d: "2021-03-19", y: 2024, ph: 4, m: 300, ep: 6, e: 1, pc: 0, c: ["#23324a", "#c9ced6"], hook: "Who carries the shield now?" },
  { id: "ffh", t: "Spider-Man: Far From Home", k: "film", d: "2019-07-02", y: 2024, ph: 3, m: 129, e: 2, pc: 2, c: ["#2a4fa8", "#b3202a"], w: "sony", hook: "School trip to Europe. Ends with the worst reveal." },
  { id: "eter", t: "Eternals", k: "film", d: "2021-11-05", y: 2024, ph: 4, m: 156, e: 3, pc: 2, c: ["#5a3a1a", "#f0d27a"], hook: "Ten immortals who were here all along." },
  { id: "nwh", t: "Spider-Man: No Way Home", k: "film", d: "2021-12-17", y: 2024, ph: 4, m: 148, e: 1, pc: 2, c: ["#b3202a", "#1d2a55"], w: "sony", hook: "Everyone knows who Peter is. A spell goes wrong." },
  { id: "mom", t: "Doctor Strange in the Multiverse of Madness", k: "film", d: "2022-05-06", y: 2024, ph: 4, m: 126, e: 2, pc: 2, c: ["#3b1a5a", "#e85a8a"], hook: "Strange chases a girl who jumps universes." },
  { id: "hawk", t: "Hawkeye", k: "series", d: "2021-11-24", y: 2024, ph: 4, m: 290, ep: 6, e: 2, pc: 0, c: ["#4a2a6a", "#f0a030"], hook: "Clint wants Christmas off. Kate Bishop has other plans." },
  { id: "mk", t: "Moon Knight", k: "series", d: "2022-03-30", y: 2025, ph: 4, m: 280, ep: 6, e: 3, pc: 0, c: ["#2a2a2e", "#e8e2d0"], hook: "A gift-shop clerk wakes up in someone else's life." },
  { id: "wf", t: "Black Panther: Wakanda Forever", k: "film", d: "2022-11-11", y: 2025, ph: 4, m: 161, e: 2, pc: 1, c: ["#1a2a4a", "#6ab0c8"], hook: "Wakanda grieves while an ocean kingdom rises." },
  { id: "echo", t: "Echo", k: "series", d: "2024-01-09", y: 2025, ph: 5, m: 210, ep: 5, e: 3, pc: 0, c: ["#3a2418", "#d97a3a"], hook: "Maya Lopez goes home, with Kingpin behind her." },
  { id: "she", t: "She-Hulk: Attorney at Law", k: "series", d: "2022-08-18", y: 2025, ph: 4, m: 300, ep: 9, e: 3, pc: 0, c: ["#3c6a2a", "#e88ab0"], hook: "A lawyer who is also seven feet tall and green." },
  { id: "msm", t: "Ms. Marvel", k: "series", d: "2022-06-08", y: 2025, ph: 4, m: 270, ep: 6, e: 2, pc: 0, c: ["#2a4a8a", "#f04a5a"], hook: "A Jersey City teen with a bangle and big dreams." },
  { id: "tlt", t: "Thor: Love and Thunder", k: "film", d: "2022-07-08", y: 2025, ph: 4, m: 119, e: 3, pc: 2, c: ["#5a2a8a", "#ff6ab0"], hook: "Jane picks up the hammer. Gorr kills gods." },
  { id: "wbn", t: "Werewolf by Night", k: "special", d: "2022-10-07", y: 2025, ph: 4, m: 53, e: 3, pc: 0, c: ["#1a1a1a", "#c8c8c8"], hook: "A black-and-white monster hunt. One evening." },
  { id: "hol", t: "The Guardians of the Galaxy Holiday Special", k: "special", d: "2022-11-25", y: 2025, ph: 4, m: 44, e: 3, pc: 0, c: ["#1f5a3a", "#e8463a"], hook: "They kidnap Kevin Bacon for Peter's Christmas." },
  { id: "quant", t: "Ant-Man and the Wasp: Quantumania", k: "film", d: "2023-02-17", y: 2025, ph: 5, m: 125, e: 3, pc: 2, c: ["#2a1a4a", "#4ac8e8"], hook: "Down into the quantum realm. Meet Kang." },
  { id: "gotg3", t: "Guardians of the Galaxy Vol. 3", k: "film", d: "2023-05-05", y: 2026, ph: 5, m: 150, e: 2, pc: 2, c: ["#3a1a5a", "#ff8a3a"], hook: "Rocket's story. Bring tissues." },
  { id: "si", t: "Secret Invasion", k: "series", d: "2023-06-21", y: 2025, ph: 5, m: 270, ep: 6, e: 3, pc: 0, c: ["#1f3a2a", "#9ac86a"], hook: "Fury comes back to a planet full of Skrulls." },
  { id: "marv", t: "The Marvels", k: "film", d: "2023-11-10", y: 2026, ph: 5, m: 105, e: 3, pc: 1, c: ["#1f2a6a", "#f0c03a"], hook: "Three heroes swap places every time they use their powers." },
  { id: "loki2", t: "Loki — Season 2", k: "series", d: "2023-10-05", y: 2012, ph: 5, m: 300, ep: 6, e: 2, pc: 0, c: ["#1f4a3a", "#e8c45a"], hook: "The TVA is falling apart, and so is time." },
  { id: "dw", t: "Deadpool & Wolverine", k: "film", d: "2024-07-26", y: 2024, ph: 5, m: 128, e: 2, pc: 1, c: ["#8a1a1a", "#f0c82a"], hook: "The Fox universe gets a farewell, loudly." },
  { id: "agatha", t: "Agatha All Along", k: "series", d: "2024-09-18", y: 2026, ph: 5, m: 330, ep: 9, e: 3, pc: 0, c: ["#3a1a4a", "#8ac85a"], hook: "Agatha walks the Witches' Road." },
  { id: "dd1", t: "Daredevil: Born Again — Season 1", k: "series", d: "2025-03-04", y: 2026, ph: 5, m: 430, ep: 9, e: 2, pc: 0, c: ["#5a0f12", "#1a1a1a"], hook: "Matt Murdock and Wilson Fisk, mayor of New York." },
  { id: "bnw", t: "Captain America: Brave New World", k: "film", d: "2025-02-14", y: 2027, ph: 5, m: 118, e: 2, pc: 1, c: ["#2a3a5a", "#d63a3a"], hook: "Sam Wilson's first film with the shield." },
  { id: "tbolts", t: "Thunderbolts*", k: "film", d: "2025-05-02", y: 2027, ph: 5, m: 127, e: 1, pc: 2, c: ["#2a2a2a", "#e8e0c8"], hook: "Rejects and assassins forced into a team." },
  { id: "iron", t: "Ironheart", k: "series", d: "2025-06-24", y: 2027, ph: 5, m: 260, ep: 6, e: 3, pc: 0, c: ["#6a1a1a", "#f0a03a"], hook: "Riri Williams builds a suit, and makes a deal." },
  { id: "ff", t: "The Fantastic Four: First Steps", k: "film", d: "2025-07-25", y: 1964, ph: 6, m: 115, e: 1, pc: 2, c: ["#1a4a8a", "#f0e0b0"], hook: "Another Earth, retro future, a family of four." },
  { id: "wm", t: "Wonder Man", k: "series", d: "2026-01-27", y: 2027, ph: 6, m: 270, ep: 8, e: 3, pc: 0, c: ["#4a1a3a", "#f0c03a"], hook: "An actor with powers chasing a superhero role." },
  { id: "dd2", t: "Daredevil: Born Again — Season 2", k: "series", d: "2026-03-04", y: 2027, ph: 6, m: 420, ep: 8, e: 2, pc: 0, c: ["#5a0f12", "#2a2a2a"], hook: "Fisk's city, and the people fighting it." },
  { id: "bnd", t: "Spider-Man: Brand New Day", k: "film", d: "2026-07-31", y: 2027, ph: 6, m: 135, e: 1, pc: 2, c: ["#c0202a", "#1a1a2a"], w: "sony", hook: "Peter, alone and forgotten, starts over." },
  { id: "vq", t: "VisionQuest", k: "series", d: "2026-10-14", y: 2027, ph: 6, m: 300, ep: 8, e: 2, pc: 0, c: ["#1a3a3a", "#e0e8e8"], hook: "White Vision looks for who he used to be." },
  { id: "doom", t: "Avengers: Doomsday", k: "film", d: "2026-12-18", y: 2027, ph: 6, m: 150, e: 1, pc: 0, c: ["#1a2a1a", "#7ac85a"], soon: true, hook: "Out December 18. This is where the order is heading." },
];

// Other Marvel universes, shown as optional branches beside the main line.
window.BRANCHES = [
  { id: "defenders", name: "Netflix Defenders", join: "dd1", items: [
    { t: "Daredevil — Seasons 1–3", k: "series", d: "2015-04-10", ep: 39, m: 2100, c: ["#5a0f12", "#1a1a1a"] },
    { t: "Jessica Jones — Seasons 1–3", k: "series", d: "2015-11-20", ep: 39, m: 2000, c: ["#2a2a4a", "#a8a8c8"] },
    { t: "The Punisher — Seasons 1–2", k: "series", d: "2017-11-17", ep: 26, m: 1400, c: ["#1a1a1a", "#e8e8e8"] },
  ]},
  { id: "xmen", name: "X-Men (Fox)", join: "dw", items: [
    { t: "X-Men", k: "film", d: "2000-07-14", m: 104, c: ["#1a2a4a", "#e8c43a"], w: "jh" },
    { t: "X-Men: Days of Future Past", k: "film", d: "2014-05-23", m: 132, c: ["#2a2a3a", "#c8a03a"], w: "jh" },
    { t: "Logan", k: "film", d: "2017-03-03", m: 137, c: ["#4a3a2a", "#c8b08a"], w: "jh" },
  ]},
  { id: "verse", name: "Spider-Verse", join: "nwh", items: [
    { t: "Spider-Man: Into the Spider-Verse", k: "anim", d: "2018-12-14", m: 117, c: ["#2a1a5a", "#ff3a6a"], w: "sony" },
    { t: "Spider-Man: Across the Spider-Verse", k: "anim", d: "2023-06-02", m: 140, c: ["#1a3a6a", "#ff7a3a"], w: "sony" },
  ]},
];

window.PROVIDERS = {
  IN: { jh: "JioHotstar", sony: "Netflix", rent: "Rent · Prime Video" },
  US: { jh: "Disney+", sony: "Netflix", rent: "Rent · Apple TV" },
  UK: { jh: "Disney+", sony: "Netflix", rent: "Rent · Prime Video" },
};

window.MW = {
  where: (x, region = "IN") => window.PROVIDERS[region][x.w || "jh"],
  hours: (m) => (m >= 60 ? `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, "0")}m` : `${m}m`),
  year: (x) => x.d.slice(0, 4),
  kindLabel: { film: "Film", series: "Series", special: "Special", short: "Shorts", anim: "Animated" },
  essLabel: { 1: "Essential", 2: "Recommended", 3: "Optional" },
  release: () => [...window.TITLES].sort((a, b) => a.d.localeCompare(b.d)),
  story: () => [...window.TITLES],
};

// SAMPLE DATA for the mocks: who appears where, written from memory, NOT verified (cameos are partial,
// Avengers: Doomsday is from the announced cast as I remember it). The real build needs a checked cast list.
// A thread can pass to a successor (shield, mantle): `pass` names who carries it from that title on.
window.HEROES = [
  { id: "ironman", name: "Iron Man", short: "IM", col: "#ff5a4e", t: ["im", "im2", "avg", "im3", "aou", "cw", "hc", "iw", "eg"] },
  { id: "cap", name: "Captain America", short: "CA", col: "#4f8dff", t: ["catfa", "avg", "tws", "aou", "cw", "iw", "eg", "fws", "bnw", "doom"], pass: { fws: "Sam Wilson takes the shield" } },
  { id: "thor", name: "Thor", short: "TH", col: "#ffd166", t: ["thor", "avg", "tdw", "aou", "rag", "iw", "eg", "tlt", "doom"] },
  { id: "hulk", name: "Hulk", short: "HK", col: "#57d27a", t: ["hulk", "avg", "aou", "rag", "iw", "eg", "she"] },
  { id: "widow", name: "Black Widow", short: "BW", col: "#e8e6e1", t: ["im2", "avg", "tws", "aou", "cw", "bw", "iw", "eg", "hawk", "tbolts", "doom"], pass: { hawk: "Yelena Belova carries it on" } },
  { id: "spidey", name: "Spider-Man", short: "SM", col: "#ff6fb1", t: ["cw", "hc", "iw", "eg", "ffh", "nwh", "bnd"] },
  { id: "panther", name: "Black Panther", short: "BP", col: "#a98bff", t: ["cw", "bp", "iw", "eg", "wf", "doom"], pass: { wf: "Shuri takes the mantle" } },
  { id: "wanda", name: "Scarlet Witch", short: "SW", col: "#ff8f3d", t: ["aou", "cw", "iw", "eg", "wv", "mom"] },
  { id: "strange", name: "Doctor Strange", short: "DS", col: "#3fd0c9", t: ["ds", "rag", "iw", "eg", "nwh", "mom"] },
  { id: "loki", name: "Loki", short: "LK", col: "#b5e35a", t: ["thor", "avg", "tdw", "rag", "iw", "eg", "loki1", "loki2", "doom"] },
];

