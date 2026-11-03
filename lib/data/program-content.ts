import type {
  CelebrationOfLifeProfile,
  FavouriteSong,
  Hymn,
  MemoryPhoto,
  OfficiatingMinister,
  ServiceItem,
  TributeItem,
} from "@/lib/types/liturgy";

export const memorialIdentity = {
  fullName: "Bayo Emmanuel Adebimpe",
  displayName: "Pa Bayo Emmanuel Adebimpe",
  birthDate: "7 January 1951",
  birthDateISO: "1951-01-07",
  entryIntoGloryDate: "20 August 2026",
  entryIntoGloryDateISO: "2026-08-20",
  burialDate: "6 November 2026",
  burialDateISO: "2026-11-06",
  churchName: "Iwo Road Baptist Church",
  churchLocation: "Iwo Road, Ibadan, Oyo State, Nigeria",
  ministerInCharge: "Rev Dr Adeoba Kolawole",
  churchSecretary: "Dn. Oluwaseun Adegoke",
  choirDirector: "Bro Ayodele Adeleye",
};

export const biographyParagraphs: string[] = [
  "Pa Bayo Emmanuel Adebimpe was born on the 7th of January, 1951, into a faithful family rooted in integrity, Christian virtues, and moral honor. From his earliest days, young Bayo was characterized by a calm disposition, an inquisitive intellect, and an exceptional sense of responsibility. Growing up under disciplined parental guidance, he absorbed timeless lessons of truthfulness, respect for elders, and the value of hard work—foundational principles that would illuminate every chapter of his life.",
  "His educational journey was marked by diligence and a steadfast pursuit of excellence. Approaching his studies with zeal, he developed practical wisdom and professional competence that served him across decades of active service. In his career, Pa Adebimpe distinguished himself as an upright, dependable, and conscientious administrator whose word was his bond. Colleagues, partners, and associates held him in highest regard for his punctuality, fairness, and uncompromising ethical standards.",
  "Central to Pa Bayo Emmanuel Adebimpe's life was a vibrant, personal walk with Jesus Christ. Having embraced the Lord in his youth and walked faithfully within the Baptist denomination, he made the Holy Scriptures his compass and the house of God his sanctuary. His faith was active and practical: he was a fervent student of the Word, an ardent intercessor, and a passionate lover of sacred hymns, often singing praises in quiet moments of family life and personal meditation.",
  "His service at Iwo Road Baptist Church, Ibadan, stood as a radiant testament to his devotion to the Kingdom of God. Over decades of committed membership, Pa Adebimpe was a trusted pillar in the congregation, an active member of the Men's Missionary Union (MMU), and an unwavering supporter of church evangelism and development initiatives. He revered God's ministers, encouraged the choir and youth ministries, and was regularly sought after for his sound, peaceful, and balanced counsel in matters of church life.",
  "As a devoted husband, father, and family patriarch, Pa Adebimpe exemplified self-sacrificing love and spiritual leadership. His home was a haven of prayer, warmth, hospitality, and joy. Alongside his beloved wife, he raised his children in the nurture and admonition of the Lord, instilling in them the virtues of humility, academic diligence, contentment, and faith. He led regular morning and evening family devotions, ensuring that Christ remained the undisputed cornerstone of his home.",
  "Beyond the walls of his church and home, Pa Adebimpe's generosity touched countless lives throughout his community. He possessed a rare sensitivity to the needs of others, quietly paying school fees, supporting widows, sheltering relatives, and encouraging struggling artisans without seeking acclaim. Many will remember him as the dependable uncle, the peacemaking elder, and the compassionate neighbor who never hesitated to lift others up.",
  "In his golden years, Pa Adebimpe remained radiant in spirit, joyful in fellowship, and unshaken in hope. Though physical vigor mellowed with age, his spiritual perception grew ever sharper. His conversations were permeated with thanksgiving to the Almighty, blessings for the next generation, and testimonies of God's sustaining grace through over seven and a half decades of life.",
  "On the 20th of August, 2026, having fought the good fight, completed his earthly race, and kept the faith, Pa Bayo Emmanuel Adebimpe peacefully transitioned to be with his Lord and Savior. While his departure leaves a sacred void, we do not mourn like those without hope; we celebrate a life of purpose, honor, and enduring faith. Sleep on, beloved father and elder; good night, until we meet on the resurrection morning.",
];

export const ministers: OfficiatingMinister[] = [
  {
    id: "minister-1",
    name: "Rev Dr. S.A Adekunle",
    ecclesiasticalTitle: "Former President",
    church: "Ibadan Baptist Conference",
    confirmed: true,
  },
  {
    id: "minister-2",
    name: "Rev Dr Adeoba Kolawole",
    ecclesiasticalTitle: "Minister in Charge / Pastor",
    church: "Iwo Road Baptist Church, Ibadan",
    confirmed: true,
  },
  {
    id: "minister-3",
    name: "Rev Dr. B.A Adegboyega",
    ecclesiasticalTitle: "Pastor",
    church: "Agboye Baptist Church, Oyo",
    confirmed: true,
  },
  {
    id: "minister-4",
    name: "Rev Solomon Ojo",
    ecclesiasticalTitle: "Pastor",
    church: "Abundant Mercy Baptist Church, Ibadan",
    confirmed: true,
  },
  {
    id: "minister-5",
    name: "Pastor Oluwamitide Olanrewaju",
    ecclesiasticalTitle: "Pastor",
    church: "Iwo Road Baptist Church, Ibadan",
    confirmed: true,
  },
  {
    id: "minister-6",
    name: "Dn. Layiwade Thomas",
    ecclesiasticalTitle: "Deacon",
    church: "Iwo Road Baptist Church, Ibadan",
    confirmed: true,
  },
  {
    id: "minister-7",
    name: "Dns. Victoria Adekanjo",
    ecclesiasticalTitle: "Deaconess",
    church: "Iwo Road Baptist Church, Ibadan",
    confirmed: true,
  },
  {
    id: "minister-8",
    name: "Dn. Oluwaseun Adegoke",
    ecclesiasticalTitle: "Church Secretary / Deacon",
    church: "Iwo Road Baptist Church, Ibadan",
    confirmed: true,
  },
  {
    id: "minister-9",
    name: "Bro Ayodele Adeleye",
    ecclesiasticalTitle: "Choir Director / Music Minister",
    church: "Iwo Road Baptist Church, Ibadan",
    confirmed: true,
  },
];

export const hymns: Hymn[] = [
  {
    id: "processional",
    hymnNumber: "BH 556 / YBH 125",
    titleEnglish: "Jesus Lives! Thy Terrors Now",
    titleYoruba: "Jésù Yè; Títí Ayé (Orin Àkọwọlé àti Àkàrọ̀)",
    anchoredBy: "Music Director (Bro Ayodele Adeleye)",
    totalVerses: 5,
    hasChorus: false,
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "Jesus lives! thy terrors now",
          "Can, O Death, no more appall us;",
          "Jesus lives! by this we know",
          "Thou, O Grave, canst not enthrall us.",
          "Hallelujah!",
        ],
        yorubaLines: [
          "JÉSU yè; títí ayé",
          "Ẹ̀rù ikú kò bà ni mọ́;",
          "Jésù yè; nítorí náà",
          "Isà òkú kò n'ípa mọ́.",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "Jesus lives! henceforth is death",
          "But the gate of Life immortal;",
          "This shall calm our trembling breath,",
          "When we pass its gloomy portal.",
          "Hallelujah!",
        ],
        yorubaLines: [
          "Jésù yè; lát' òní lọ",
          "Ikú jẹ́ ọ̀nà sí ìyè;",
          "Èyí y'ó jẹ́ 'tùnú wa",
          "'Gbàt' àkókò ikú bá dé.",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "Jesus lives! for us He died;",
          "Then alone to Jesus living,",
          "Pure in heart may we abide,",
          "Glory to our Savior giving.",
          "Hallelujah!",
        ],
        yorubaLines: [
          "Jésù yè; fún wa l'Ó kú;",
          "Ǹjẹ́ Tirẹ̀ ni a ó máa ṣe;",
          "A ó f'ọkàn funfun sìn,",
          "A ó f'ògo f'Olùgbàlà.",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "Jesus lives! our hearts know well",
          "Naught from us His love shall sever;",
          "Life, nor death, nor powers of hell",
          "Tear us from His keeping ever.",
          "Hallelujah!",
        ],
        yorubaLines: [
          "Jésù yè; èyí dájú,",
          "Ikú àt' ipá òkùnkùn",
          "Kì y'ó lè yà ni kúrò",
          "Nínú ìfẹ́ ńlá ti Jésù.",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 5,
        englishLines: [
          "Jesus lives! to Him the Throne",
          "Over all the world is given;",
          "We, in spirit with Him one,",
          "Rest and reign with Him in heaven.",
          "Hallelujah!",
        ],
        yorubaLines: [
          "Jésù yè; gbogbo 'jọba",
          "L'ọ̀run, l'áyé, di Tirẹ̀;",
          "Ẹ jẹ́ kí a máa tẹ̀lé",
          "Kí a lè jọba pẹ̀lú Rẹ̀.",
          "Allélúyà!",
        ],
      },
    ],
  },
  {
    id: "victory",
    hymnNumber: "BH 107 / YBH 123",
    titleEnglish: "The Strife Is O'er, the Battle Done",
    titleYoruba: "Ìjà Dópin Ogun Sí Tán (Orin Ìṣẹ́gun)",
    anchoredBy: "Music Director (Bro Ayodele Adeleye)",
    totalVerses: 5,
    hasChorus: false,
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "The strife is o'er, the battle done;",
          "The victory of life is won;",
          "The song of triumph has begun.",
          "Alleluia!",
        ],
        yorubaLines: [
          "Ìjà dópin ogun sì tán,",
          "Olùgbàlà jagun mọ́lú;",
          "Orin ayọ̀ l'a ó máa kọ,",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "The powers of death have done their worst,",
          "But Christ their legions has dispersed.",
          "Let shouts of holy joy outburst.",
          "Alleluia!",
        ],
        yorubaLines: [
          "Gbogbo ipá n'ikú ti lò,",
          "Ṣùgbọ́n Kristi f'ogun rẹ̀;",
          "Ayé! Ẹ hó ìho ayọ̀,",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "The three sad days are quickly sped;",
          "He rises glorious from the dead.",
          "All glory to our risen Head.",
          "Alleluia!",
        ],
        yorubaLines: [
          "Ọjọ́ mẹ́ta náà ti kọjá,",
          "Ó jíǹde kúrò nínú òkú;",
          "Ẹ f'ògo fún Olúwa wa,",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "He closed the yawning gates of hell;",
          "The bars from heaven's high portals fell.",
          "Let hymns of praise His triumph tell.",
          "Alleluia!",
        ],
        yorubaLines: [
          "Ó d'ẹwọ̀n ọ̀run àpáàdì,",
          "Ó ṣílẹ̀kùn ọ̀run sílẹ̀;",
          "Ẹ kọrin yin ìṣẹ́gun Rẹ̀,",
          "Allélúyà!",
        ],
      },
      {
        verseNumber: 5,
        englishLines: [
          "Lord, by the stripes which wounded Thee,",
          "From death's dread sting Thy servants free,",
          "That we may live and sing to Thee.",
          "Alleluia!",
        ],
        yorubaLines: [
          "Jésù, nípa ìyà t'Ó jẹ,",
          "Gbà wá lọ́wọ́ oró ikú,",
          "K'á lè yè, k'á sì máa yìn Ọ́,",
          "Allélúyà!",
        ],
      },
    ],
  },
  {
    id: "aspiration",
    hymnNumber: "Hymn 668",
    titleEnglish: "As I Journey Through the Land, Singing as I Go",
    titleYoruba: "Nínú Ìrìn Àjò Mi Bẹ́ẹ̀ Ni Mo Ń Kọrin (Orin Ìdániyàn)",
    anchoredBy: "Music Director (Bro Ayodele Adeleye)",
    totalVerses: 4,
    hasChorus: true,
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "As I journey through the land, singing as I go,",
          "Pointing souls to Calvary—to the crimson flow,",
          "Many arrows pierce my soul from without, within;",
          "But my Lord leads me on, through Him I must win.",
        ],
        yorubaLines: [
          "Nínú ìrìn àjò mi bẹ́ẹ̀ ni mo ń kọrin,",
          "Mo ń tọ́ka sí Kálfárì s'íbi ẹ̀jẹ̀ náà,",
          "Ìdánwò lóde nínú l'ọ̀tá gbé dìde,",
          "Jésù l'Ó ń tọ́ mi lọ, ìṣẹ́gun dájú.",
        ],
        englishChorus: [
          "Oh, I want to see Him, look upon His face,",
          "There to sing forever of His saving grace;",
          "On the streets of glory let me lift my voice,",
          "Cares all past, home at last, ever to rejoice.",
        ],
        yorubaChorus: [
          "A! mo ń fẹ́ rí Jésù, kí ń máa w' ojú Rẹ̀,",
          "Kí ń máa kọrin títí, nípa oore Rẹ̀;",
          "Ní ìlú ògo ni kí ń gb'óhùn sókè,",
          "Pé mo bọ́, ìjà tán, mo dé ilé mi.",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "When in service for my Lord dark may be the night,",
          "But I’ll cling more close to Him, He will give me light;",
          "Satan’s snares may vex my soul, turn my thoughts aside;",
          "But my Lord goes ahead, leads whate’er betide.",
        ],
        yorubaLines: [
          "Nínú iṣẹ́ ìsìn mi, b'ókùnkùn bá ṣú,",
          "Un ó túbọ̀ súnmọ́ Jésù y'Ó tan ìmọ́lẹ̀;",
          "Èṣù lè gb'ogun ti mí kí ń lè sá padà,",
          "Jésù l'Ó ń tọ́ mi lọ, kò s'éwu fún mi.",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "When in valleys low I look toward the mountain height,",
          "And behold my Savior there, leading in the fight,",
          "With a tender hand outstretched toward the valley low,",
          "Guiding me, I can see, as I onward go.",
        ],
        yorubaLines: [
          "Bí mo tilẹ̀ bọ́ sínú àfonífojì,",
          "Ìmọ́lẹ̀ ìtọ́ni Rẹ̀ y'ó mọ́lẹ̀ sí mi;",
          "Y'ó na ọwọ́ Rẹ̀ sí mi, y'Ó gbé mi sókè,",
          "Un ó máa tẹ̀síwájú b'Ó ti ń tọ́ mi lọ.",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "When before me billows rise from the mighty deep,",
          "Then my Lord directs my bark; He doth safely keep,",
          "And He leads me gently on through this world below;",
          "He’s a real Friend to me, oh, I love Him so.",
        ],
        yorubaLines: [
          "Nígbàtí ìgbì ayé yìí bá ń yí lù mí,",
          "Mo ní àbò t'ó dájú lábẹ́ apá Rẹ̀;",
          "Y'Ó máa f'ọwọ́ Rẹ̀ tọ́ mi títí dé òpin,",
          "Ọ̀rẹ́ òdodo ni, A! mo ti fẹ́ràn Rẹ̀ tó!",
        ],
      },
    ],
  },
  {
    id: "recessional",
    hymnNumber: "YBH 603",
    titleEnglish: "Savior, Like a Shepherd Lead Us",
    titleYoruba: "Jésù B'Olúṣọ́ Má Sin Wa (Orin Àkọjáde)",
    anchoredBy: "Music Director (Bro Ayodele Adeleye)",
    totalVerses: 4,
    hasChorus: true,
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "Savior, like a shepherd lead us,",
          "Much we need Thy tender care;",
          "In Thy pleasant pastures feed us,",
          "For our use Thy folds prepare:",
        ],
        yorubaLines: [
          "Jésù b'Olúṣọ́ máa sìn wá,",
          "A ń fẹ́ ìkẹ́ Rẹ púpọ̀;",
          "F'oúnjẹ dídára Rẹ bọ́ wa,",
          "Tún àgbò Rẹ ṣe fún wa:",
        ],
        englishChorus: [
          "Blessed Jesus, blessed Jesus,",
          "Thou hast bought us, Thine we are;",
          "Blessed Jesus, blessed Jesus,",
          "Thou hast bought us, Thine we are.",
        ],
        yorubaChorus: [
          "Olùgbàlà! Olùgbàlà!",
          "O rà wá, Tirẹ̀ l'a ṣe;",
          "Olùgbàlà! Olùgbàlà!",
          "O rà wá, Tirẹ̀ l'a ṣe.",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "We are Thine, do Thou befriend us,",
          "Be the guardian of our way;",
          "Keep Thy flock, from sin defend us,",
          "Seek us when we go astray:",
        ],
        yorubaLines: [
          "Tirẹ̀ ni wá, fi wá s'ọ̀rẹ́,",
          "Má ṣe amọ̀nà fún wa;",
          "Gbà àgbò Rẹ nínú ẹ̀ṣẹ̀,",
          "Wá wa tí a bá ṣákó:",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "Thou hast promised to receive us,",
          "Poor and sinful though we be;",
          "Thou hast mercy to relieve us,",
          "Grace to cleanse, and pow'r to free:",
        ],
        yorubaLines: [
          "Ó ṣèlérí láti gbà wá,",
          "Pẹ̀l' ẹ̀ṣẹ̀ àt' àìní wa;",
          "Ó l'áàánú láti fi wò wá,",
          "Ipá láti dá wa ńdè:",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "Early let us seek Thy favor,",
          "Early let us do Thy will;",
          "Blessed Lord and only Savior,",
          "With Thy love our bosoms fill:",
        ],
        yorubaLines: [
          "Jẹ́ k'á tètè w'ójú rere Rẹ,",
          "K'á ṣe 'fẹ́ Rẹ ní kùtù;",
          "Olúwa àt' Olùgbàlà,",
          "F'ìfẹ́ Rẹ kún àyà wa:",
        ],
      },
    ],
  },
  {
    id: "graveside",
    hymnNumber: "BH 561 / YBH 510",
    titleEnglish: "The Christian's Goodnight",
    titleYoruba: "Má Sùn Lọ, Olùfẹ́; Sá Má Simi (Orin ní Ìtẹ́)",
    anchoredBy: "Music Director (Bro Ayodele Adeleye)",
    totalVerses: 7,
    hasChorus: false,
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "Sleep on, beloved, sleep, and take thy rest;",
          "Lay down thy head upon thy Saviour's breast;",
          "We love thee well, but Jesus loves thee best—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Má sùn lọ, olùfẹ́; sá má simi,",
          "F'orí rẹ lé àyà Olùgbàlà;",
          "A fẹ́ ọ, ṣùgbọ́n Jésù fẹ́ ọ jù—",
          "Ó di òwúrọ̀ o!",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "Calm is thy slumber as an infant's sleep;",
          "But thou shalt wake no more to toil and weep:",
          "Thine is a perfect rest, secure and deep—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Oorun rẹ dùn bí oorun ọmọdé,",
          "B'ó sì jí ẹkún kò sí fún ọ mọ́,",
          "Ìsimi t'ó dájú n'ìsimi rẹ—",
          "Ó di òwúrọ̀ o!",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "Until the shadows from this earth are cast,",
          "Until He gathers in His sheaves at last,",
          "Until the twilight gloom be overpast—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Títí òkùnkùn ayé y'ó fi tán,",
          "Títí a ó fi kó ìkórè wọ 'lé;",
          "Títí ojúmọ́ ayé yíò fi lá—",
          "Ó di òwúrọ̀ o!",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "Until the Easter glory lights the skies,",
          "Until the dead in Jesus shall arise,",
          "And He shall come, but not in lowly guise—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Títí oòrùn àjíǹde y'ó fi yọ,",
          "Tí àwọn òkú Jésù y'ó dìde;",
          "Tí Òun y'ó dé nínú ọlá ńlá Rẹ̀—",
          "Ó di òwúrọ̀ o!",
        ],
      },
      {
        verseNumber: 5,
        englishLines: [
          "Until a white robe and a crown of gold,",
          "Thy joyful eyes, redeemed of God, behold,",
          "Where heaven's uncounted splendors all unfold—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Títí ẹwà ọ̀run y'ó jẹ́ tìrẹ,",
          "Tí ìwọ ó máa tàn nínú ògo,",
          "Tí Olúwa y'ó fi dé ọ l'adé—",
          "Ó di òwúrọ̀ o!",
        ],
      },
      {
        verseNumber: 6,
        englishLines: [
          "Only good-night, beloved, not farewell;",
          "A little while and we with thee shall dwell,",
          "In that bright home where parting cannot tell—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Ó d'òwúrọ̀ sá ni, olùfẹ́ mi,",
          "A tún fẹ́rẹ̀ rí 'ra ná n'íbi tí",
          "Ìpínyà àti ìtúká kò sí—",
          "Ó di òwúrọ̀ o!",
        ],
      },
      {
        verseNumber: 7,
        englishLines: [
          "Until we meet before the throne of grace,",
          "Clad in the garments of His righteousness,",
          "And see our Savior glorious face to face—",
          "Good-night! Good-night! Good-night!",
        ],
        yorubaLines: [
          "Tít' a ó fi pàdé níwájú ìtẹ́,",
          "Nín' aṣọ ìgúnwà àwọn Tirẹ̀,",
          "Títí a ó fi ríran kedere—",
          "Ó di òwúrọ̀ o!",
        ],
      },
    ],
  },
  {
    id: "at-home",
    hymnNumber: "BH 295 / YBH 599",
    titleEnglish: "Abide With Me",
    titleYoruba: "Wá Bá Mi Gbé! Alẹ́ Fẹ́rẹ̀ Lẹ́ Tán (Orin Ìrètí Nílé)",
    anchoredBy: "Family & Congregation",
    totalVerses: 5,
    hasChorus: false,
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "Abide with me: fast falls the eventide;",
          "The darkness deepens; Lord, with me abide.",
          "When other helpers fail and comforts flee,",
          "Help of the helpless, O abide with me.",
        ],
        yorubaLines: [
          "WÁ bá mi gbé! alẹ́ fẹ́rẹ̀ lẹ́ tán,",
          "Òkùnkùn ńṣú; Olúwa bá mi gbé,",
          "Bí olùrànlọ́wọ́ míràn bá yẹ̀,",
          "Ìrànwọ́ aláìní, wá bá mi gbé.",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "Swift to its close ebbs out life's little day;",
          "Earth's joys grow dim, its glories pass away.",
          "Change and decay in all around I see.",
          "O Thou who changest not, abide with me.",
        ],
        yorubaLines: [
          "Ọjọ́ ayé mi ńsáré lọ s'ópin,",
          "Ayọ̀ ayé ńkú, ògo rẹ̀ ńwọ 'mi;",
          "Àyídà àt' ìbàjẹ́ ni mo ńrí;",
"'Wọ tí kì í yípadà, wá, bá mi gbé.",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "I need Thy presence every passing hour.",
          "What but Thy grace can foil the tempter's power?",
          "Who like Thyself my guide and strength can be?",
          "Through cloud and sunshine, O abide with me.",
        ],
        yorubaLines: [
          "Mo ńfẹ́ Ọ rí ní wákàtí gbogbo;",
          "Kí l'ó lè ṣẹ́gun èṣù b'ọ́rẹ́ Rẹ?",
          "Ta l'ó lè ṣe amọ̀nà mi bí Rẹ?",
          "N'nú 'bànújẹ́ àt' ayọ̀, bá mi gbé.",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "I fear no foe with Thee at hand to bless,",
          "Ills have no weight, and tears no bitterness.",
          "Where is death's sting? Where, grave, thy victory?",
          "I triumph still, if Thou abide with me.",
        ],
        yorubaLines: [
          "Pẹ̀lú 'bùkún Rẹ, ẹ̀rù kò bà mí;",
          "Ibi kò wúwo, ẹkún kò korò;",
          "Oró ikú dà? Ìṣẹ́gun isà dà?",
          "N ó ṣẹ́gun síbẹ̀, b'Íwọ bá mi gbé.",
        ],
      },
      {
        verseNumber: 5,
        englishLines: [
          "Hold Thou Thy cross before my closing eyes.",
          "Shine through the gloom and point me to the skies.",
          "Heaven's morning breaks and earth's vain shadows flee;",
          "In life, in death, O Lord, abide with me.",
        ],
        yorubaLines: [
          "Kí ń r'ọ̀rọ̀ Rẹ ní wákàtí ikú,",
          "Ṣe 'mọ́lẹ̀ mi, sì tọ́ka sí ọ̀run;",
          "B'ayé ti kọjá, k'ilẹ̀ ọ̀run mọ́,",
          "Ní yíyè, ní kíkú, wá bá mi gbé.",
        ],
      },
    ],
  },
];

export const favouriteSongs: FavouriteSong[] = [
  {
    id: "family-favourite-01",
    title: "Hold the Fort",
    titleYoruba: "HÁ! Ẹgbẹ́ Mi, Ẹ W’ Àsíá",
    language: "bilingual",
    note: "Hymn of encouragement and resolute Christian faith.",
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "Ho! my comrades, see the signal",
          "Waving in the sky!",
          "Reinforcements now appearing,",
          "Victory is nigh!",
          "“Hold the fort, for I am coming,”",
          "Jesus signals still;",
          "Wave the answer back to heaven,",
          "“By Thy grace we will.”",
        ],
        yorubaLines: [
          "HÁ! ẹgbẹ́ mi, ẹ w’ àsíá",
          "Bí ti ńfẹ́ lélẹ̀,",
          "Ogun Jésù fẹ́ẹ́ dé ná,",
          "A fẹ́rẹ̀ ṣẹ́gun!",
          "“D’ odi mú, èmi fẹ́rẹ̀ dé,”",
          "Bẹ́ẹ̀ni Jésù ńwí,",
          "Rán 'dáhùn padà s’ ọ̀run pé,",
          "Àwa ó dìmú.",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "See the mighty host advancing,",
          "Satan leading on;",
          "Mighty men around us falling,",
          "Courage almost gone!",
          "“Hold the fort, for I am coming,”",
          "Jesus signals still;",
          "Wave the answer back to heaven,",
          "“By Thy grace we will.”",
        ],
        yorubaLines: [
          "Wò ọ̀pọ̀ ogun tí ńbọ̀wá,",
          "Èṣù ńkó wọn bọ̀,",
          "Àwọn alágbára ńsubú,",
          "A fẹ́ dàmú tán.",
          "“D’ odi mú, èmi fẹ́rẹ̀ dé,”",
          "Bẹ́ẹ̀ni Jésù ńwí,",
          "Rán 'dáhùn padà s’ ọ̀run pé,",
          "Àwa ó dìmú.",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "See the glorious banner waving!",
          "Hear the trumpet blow!",
          "In our Leader's Name we triumph",
          "Over every foe!",
          "“Hold the fort, for I am coming,”",
          "Jesus signals still;",
          "Wave the answer back to heaven,",
          "“By Thy grace we will.”",
        ],
        yorubaLines: [
          "Wò àsíá Jésù tí ńfẹ́,",
          "Gbọ́ ohùn ìpè;",
          "A ó ṣẹ́gun gbogbo ọ̀tá,",
          "Ní orúkọ Rẹ̀.",
          "“D’ odi mú, èmi fẹ́rẹ̀ dé,”",
          "Bẹ́ẹ̀ni Jésù ńwí,",
          "Rán 'dáhùn padà s’ ọ̀run pé,",
          "Àwa ó dìmú.",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "Fierce and long the battle rages,",
          "Help is quickly near;",
          "Onward comes our Great Commander,",
          "Cheer, my comrades, cheer!",
          "“Hold the fort, for I am coming,”",
          "Jesus signals still;",
          "Wave the answer back to heaven,",
          "“By Thy grace we will.”",
        ],
        yorubaLines: [
          "Ogun gbóná gírígìrì,",
          "Ìrànwọ́ wá ńbọ̀;",
          "Balógun wá ńbọ̀ wá tètè,",
          "Ẹgbẹ́, tújúká.",
          "“D’ odi mú, èmi fẹ́rẹ̀ dé,”",
          "Bẹ́ẹ̀ni Jésù ńwí,",
          "Rán 'dáhùn padà s’ ọ̀run pé,",
          "Àwa ó dìmú.",
        ],
      },
    ],
  },
  {
    id: "family-favourite-02",
    title: "My Hope Is Built on Nothing Less",
    titleYoruba: "Ìgbàgbọ́ Mi Dúró L'órí (YBH 256)",
    language: "bilingual",
    note: "Hymn of unwavering trust on the solid Rock of Jesus Christ.",
    isConfirmed: true,
    verses: [
      {
        verseNumber: 1,
        englishLines: [
          "My hope is built on nothing less",
          "Than Jesus’ blood and righteousness;",
          "I dare not trust the sweetest frame,",
          "But wholly lean on Jesus’ Name.",
          "On Christ, the solid Rock, I stand;",
          "All other ground is sinking sand.",
        ],
        yorubaLines: [
          "Ìgbàgbọ́ mi dúró l'órí,",
          "Ẹ̀jẹ̀ àt' òdodo Jésù;",
          "N kò jẹ́ gbẹ́kẹ̀lé ohun kan,",
          "Lẹ́yìn orúkọ ńlá Jésù;",
          "Mo dúró lé Krist' Àpáta,",
          "Ilẹ̀ míràn, ìyànrìn ni.",
        ],
      },
      {
        verseNumber: 2,
        englishLines: [
          "When darkness veils His lovely face,",
          "I rest on His unchanging grace;",
          "In every high and stormy gale,",
          "My anchor holds within the veil.",
          "On Christ, the solid Rock, I stand;",
          "All other ground is sinking sand.",
        ],
        yorubaLines: [
          "B'ìrìn-àjò mi tilẹ̀ gùn,",
          "Oore-ọ̀fẹ́ Rẹ̀ kò yípadà;",
          "B'ó ti wù k'ìjì náà le tó,",
          "Ìdákọ̀rò mi kò ní yẹ̀;",
          "Mo dúró lé Krist' Àpáta,",
          "Ilẹ̀ míràn, ìyànrìn ni.",
        ],
      },
      {
        verseNumber: 3,
        englishLines: [
          "His oath, His covenant, His blood,",
          "Support me in the whelming flood;",
          "When all around my soul gives way,",
          "He then is all my hope and stay.",
          "On Christ, the solid Rock, I stand;",
          "All other ground is sinking sand.",
        ],
        yorubaLines: [
          "Májẹ̀mú àti ẹ̀jẹ̀ Rẹ̀,",
          "L'èm' ó rọ̀ mọ́ b'ìkúnmi dé;",
          "'Gbàtí ohun ayé bọ́ tán,",
          "Ó jẹ́ ìrètí ńlá fún mi;",
          "Mo dúró lé Krist' Àpáta,",
          "Ilẹ̀ míràn, ìyànrìn ni.",
        ],
      },
      {
        verseNumber: 4,
        englishLines: [
          "When He shall come with trumpet sound,",
          "Oh, may I then in Him be found;",
          "Dressed in His righteousness alone,",
          "Faultless to stand before the throne.",
          "On Christ, the solid Rock, I stand;",
          "All other ground is sinking sand.",
        ],
        yorubaLines: [
          "'Gbàt' ìpè kẹ́yìn bá sì dún,",
          "A! ḿbá lè wà l'ọ́dọ̀ Jésù,",
          "Kí ń wọ òdodo Rẹ̀ nìkan,",
          "Kí ń dúró níwájú ìtẹ́;",
          "Mo dúró lé Krist' Àpáta,",
          "Ilẹ̀ míràn, ìyànrìn ni.",
        ],
      },
    ],
  },
];

const service = (
  id: string,
  order: string,
  type: ServiceItem["type"],
  title: string,
  anchor: string,
  options: Partial<ServiceItem> = {},
): ServiceItem => ({
  id,
  order,
  type,
  title,
  anchor,
  isConfirmed: true,
  ...options,
});

export const servicePartOne: ServiceItem[] = [
  service(
    "processional",
    "01",
    "hymn",
    "Processional Hymn & Recitation: BH 556 / YBH 125",
    "Bro Ayodele Adeleye (Choir Director)",
    {
      titleYoruba: "Orin Àkọwọlé àti Àkàrọ̀",
      hymnId: "processional",
    },
  ),
  service(
    "call-to-worship",
    "02",
    "call_to_worship",
    "Call to Worship & Consecration",
    "Rev Dr Adeoba Kolawole",
    {
      titleYoruba: "Ìpè sí Ìsìn àti Ìyàsímímọ́",
    },
  ),
  service(
    "victory",
    "03",
    "hymn",
    "Hymn of Victory: BH 107 / YBH 123",
    "Bro Ayodele Adeleye (Choir Director)",
    {
      titleYoruba: "Orin Ìṣẹ́gun",
      hymnId: "victory",
    },
  ),
  service(
    "praise-prayer",
    "04",
    "prayer",
    "Prayer of Praise, Thanksgiving and Invocation",
    "Pastor Oluwamitide Olanrewaju",
    {
      titleYoruba: "Àdúrà Ìyìn, Ọpẹ́ àti Ìpèṣọ̀kalẹ̀",
    },
  ),
  service(
    "aspiration",
    "05",
    "hymn",
    "Hymn of Aspiration: Hymn 668",
    "Bro Ayodele Adeleye (Choir Director)",
    {
      titleYoruba: "Orin Ìdániyàn",
      hymnId: "aspiration",
    },
  ),
  service(
    "biography",
    "06",
    "biography",
    "The Deceased Biography",
    "Family Representative",
    {
      titleYoruba: "Ìtàn Ìgbésí Ayé Olóògbé",
    },
  ),
  service(
    "favourite-songs",
    "07",
    "favourite_songs",
    "The Deceased's Favourite Songs",
    "The Family",
    {
      titleYoruba: "Àwọn Orin tí Olóògbé Fẹ́ràn",
    },
  ),
  service(
    "goodnight",
    "08",
    "goodnight_bid",
    "We Bid Our Member Goodnight",
    "Church Community",
    {
      titleYoruba: "A ń Dàgbére fún Ọmọ Ẹgbẹ́ Wa pé Ó di Òwúrọ̀",
    },
  ),
  service(
    "scripture",
    "09",
    "scripture",
    "Scripture Reading",
    "Dn. Layiwade Thomas",
    {
      titleYoruba: "Bíbélì Kíkà",
    },
  ),
  service(
    "choir",
    "10",
    "choir",
    "Choir Ministration",
    "Sanctuary Choir",
    {
      titleYoruba: "Iṣẹ́ Ìránṣẹ́ Orin",
    },
  ),
  service(
    "message",
    "11",
    "message",
    "The Message / Sermon",
    "Rev Dr. S.A Adekunle",
    {
      titleYoruba: "Iṣẹ́ Ìránṣẹ́ Ọ̀rọ̀ Náà",
    },
  ),
  service(
    "family-prayer",
    "12",
    "prayer",
    "Special Prayer for the Family",
    "Rev Dr. B.A Adegboyega",
    {
      titleYoruba: "Àdúrà Pàtàkì fún Ìdílé",
    },
  ),
  service(
    "church-prayer",
    "13",
    "prayer",
    "Special Prayer for the Church",
    "Rev Solomon Ojo",
    {
      titleYoruba: "Àdúrà Pàtàkì fún Ìjọ Ọlọ́run",
    },
  ),
  service(
    "thanksgiving",
    "14",
    "thanksgiving",
    "Thanksgiving",
    "Officiating Ministers",
    {
      titleYoruba: "Ọpẹ́ àti Ìdúpẹ́",
    },
  ),
  service(
    "recognition",
    "15",
    "recognition",
    "Greetings and Recognition",
    "Dn. Oluwaseun Adegoke (Church Secretary)",
    {
      titleYoruba: "Ìkíni àti Ìdánimọ̀",
    },
  ),
  service(
    "appreciation",
    "16",
    "appreciation",
    "Words of Appreciation",
    "Family Representative",
    {
      titleYoruba: "Ọ̀rọ̀ Ìmọyì àti Ìdúpẹ́",
    },
  ),
  service(
    "closing-prayer",
    "17",
    "benediction",
    "Closing Prayer and Benediction",
    "Rev Dr Adeoba Kolawole",
    {
      titleYoruba: "Àdúrà Ìparí àti Oore-Ọ̀fẹ́",
    },
  ),
  service(
    "recessional",
    "18",
    "hymn",
    "Recessional Hymn: YBH 603",
    "Bro Ayodele Adeleye (Choir Director)",
    {
      titleYoruba: "Orin Àkọjáde",
      hymnId: "recessional",
    },
  ),
];

export const servicePartTwo: ServiceItem[] = [
  service(
    "grave-hymn",
    "01",
    "hymn",
    "Hymn at the Grave: BH 561 / YBH 510",
    "Bro Ayodele Adeleye (Choir Director)",
    {
      titleYoruba: "Orin ní Ìtẹ́",
      hymnId: "graveside",
    },
  ),
  service(
    "grave-prayer",
    "02",
    "prayer",
    "Prayer",
    "Rev Dr. B.A Adegboyega",
    {
      titleYoruba: "Àdúrà",
    },
  ),
  service(
    "interment",
    "03",
    "interment",
    "Interment & Committal",
    "Rev Dr Adeoba Kolawole",
    {
      titleYoruba: "Ìsìnkú",
    },
  ),
  service(
    "grave-benediction",
    "04",
    "benediction",
    "Prayer and Benediction",
    "Rev Dr. S.A Adekunle",
    {
      titleYoruba: "Àdúrà àti Oore-Ọ̀fẹ́",
    },
  ),
];

export const servicePartThree: ServiceItem[] = [
  service(
    "home-hymn",
    "01",
    "hymn",
    "Hymn of Hope: BH 295 / YBH 599",
    "Family & Congregation",
    {
      titleYoruba: "Orin Ìrètí ní Ilé",
      hymnId: "at-home",
    },
  ),
  service(
    "joint-scripture",
    "02",
    "scripture",
    "Joint Scripture Reading",
    "Family & Congregation",
    {
      titleYoruba: "Bíbélì Àjùmọ̀kà",
    },
  ),
  service(
    "home-benediction",
    "03",
    "benediction",
    "Prayer and Benediction",
    "Rev Dr Adeoba Kolawole",
    {
      titleYoruba: "Àdúrà àti Oore-Ọ̀fẹ́",
    },
  ),
];

export const tributes: TributeItem[] = [
  {
    id: "tribute-family",
    authorName: "The Family",
    relationship: "Family Tribute",
    bodyText:
      "We give thanks to Almighty God for the exemplary, sacrificial, and godly life of our beloved patriarch, Pa Bayo Emmanuel Adebimpe. You were our beacon of strength, wisdom, and unconditional love. The godly foundation and enduring values you instilled in us will forever guide our paths. Sleep peacefully in the bosom of your Maker until we meet to part no more.",
    date: "6 November 2026",
    isMock: false,
  },
  {
    id: "tribute-church",
    authorName: "Iwo Road Baptist Church",
    relationship: "Church Family Tribute",
    bodyText:
      "Pa Bayo Emmanuel Adebimpe was an esteemed elder, a committed church worker, and an ardent lover of Christ. His dedication to fellowship, his passion for sacred hymns, and his peaceful countenance enriched our church community. We give God the glory for his faithful stewardship and pray that God comforts his beloved family and church family.",
    date: "6 November 2026",
    isMock: false,
  },
  {
    id: "tribute-friends",
    authorName: "Friends and Well-Wishers",
    relationship: "Friends & Community",
    bodyText:
      "A true friend, a dependable brother, and a peacemaker in the community. Baba's warm smile, generous spirit, and upright character left an indelible footprint in our hearts. His legacy of kindness and integrity will remain an inspiration for generations.",
    date: "6 November 2026",
    isMock: false,
  },
];

export const memories: MemoryPhoto[] = [
  {
    id: "memory-portrait",
    src: "/images/memorial/celebration-portrait.jpeg",
    alt: "Celebration of Pa Bayo Emmanuel Adebimpe",
    caption: "A life remembered with love and faith",
    featured: true,
  },
  ...Array.from({ length: 26 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return {
      id: `memory-${num}`,
      src: `/images/memorial/memory-${num}.jpeg`,
      alt: `Cherished memory ${num}`,
      caption: `Cherished memory ${num}`,
    };
  }),
];

export const memorial: CelebrationOfLifeProfile = {
  ...memorialIdentity,
  heroPortraitUrl: "/images/memorial/celebration-portrait.jpeg",
  closingPortraitUrl: "/images/memorial/closing-portrait.jpeg",
  biographyParagraphs,
  familyThankYouMessage:
    "With grateful hearts, the Adebimpe family expresses our deepest gratitude to the leadership and congregation of Iwo Road Baptist Church, the officiating ministers, and all friends, colleagues, and well-wishers who stood by us in prayers, visits, and support during the celebration of life of our beloved patriarch, Pa Bayo Emmanuel Adebimpe. May the Almighty God replenish you abundantly and keep your households in His divine peace.",
  ministers,
  servicePartOne,
  servicePartTwo,
  servicePartThree,
  tributes,
  memories,
};

export function getHymn(id: string): Hymn | undefined {
  return hymns.find((hymn) => hymn.id === id);
}