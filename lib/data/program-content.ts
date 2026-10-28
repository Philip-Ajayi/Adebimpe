import type {
    BilingualHymnVerse,
    CelebrationOfLifeProfile,
    FavouriteSong,
    Hymn,
    MemoryPhoto,
    OfficiatingMinister,
    ServiceItem,
    TributeItem,
  } from "@/lib/types/liturgy";
  
  /**
   * Memorial identity.
   *
   * The name appears in one place so it can be corrected site-wide.
   * Confirm the spelling before publication.
   */
  export const memorialIdentity = {
    fullName: "Adebime Akande Lawal",
    displayName: "Adebimpe",
    birthDate: "13 January 1929",
    birthDateISO: "1929-01-13",
    entryIntoGloryDate: "21 September 2026",
    entryIntoGloryDateISO: "2026-09-21",
    burialDate: "5 November 2026",
    burialDateISO: "2026-11-05",
  };
  
  /**
   * These are original placeholder lines created for the prototype.
   * Replace them with the approved Yoruba and English hymn text.
   */
  function createHymn(
    id: string,
    titleEnglish: string,
    titleYoruba: string,
    anchoredBy: string,
    stanzaCount: number,
    linesPerVerse: number,
    hasChorus: boolean,
    englishThemes: string[],
    yorubaThemes: string[],
  ): Hymn {
    const englishChorus = [
      "We rest in the promise of God's unfailing love.",
      "His mercy will hold us through every passing day.",
      "Our hope is alive in the light of His presence.",
      "Forever we praise Him, our refuge and our stay.",
    ];
  
    const yorubaChorus = [
      "A gbẹ́kẹ̀ lé ìfẹ́ Ọlọ́run wa.",
      "Àánú Rẹ̀ yóò tọ́ wa lójú ọ̀nà.",
      "Ìrètí wa wà nínú ìmọ́lẹ̀ Rẹ̀.",
      "A ó máa yin Ọ́ títí láé.",
    ];
  
    const verses: BilingualHymnVerse[] = Array.from(
      { length: stanzaCount },
      (_, verseIndex) => {
        const englishTheme =
          englishThemes[verseIndex % englishThemes.length];
  
        const yorubaTheme =
          yorubaThemes[verseIndex % yorubaThemes.length];
  
        const englishLines = Array.from(
          { length: linesPerVerse },
          (_, lineIndex) => {
            const englishPatterns = [
              `O Lord, ${englishTheme.toLowerCase()},`,
              "Your faithful hand has led us on;",
              "Through years of joy and seasons of trial,",
              "Your gracious light has been our dawn.",
              "We gather now in grateful worship.",
            ];
  
            return englishPatterns[lineIndex % englishPatterns.length];
          },
        );
  
        const yorubaLines = Array.from(
          { length: linesPerVerse },
          (_, lineIndex) => {
            const yorubaPatterns = [
              `Olúwa, ${yorubaTheme},`,
              "Ọwọ́ Rẹ ti tọ́ wa lọ́nà;",
              "Nínú ayọ̀ àti ìpèníjà,",
              "Ìmọ́lẹ̀ Rẹ ń tan sí wa.",
              "A péjọ láti fi ọpẹ́ fún Ọ.",
            ];
  
            return yorubaPatterns[lineIndex % yorubaPatterns.length];
          },
        );
  
        return {
          verseNumber: verseIndex + 1,
          englishLines,
          yorubaLines,
          ...(hasChorus
            ? {
                englishChorus: [...englishChorus],
                yorubaChorus: [...yorubaChorus],
              }
            : {}),
        };
      },
    );
  
    return {
      id,
      titleEnglish,
      titleYoruba,
      anchoredBy,
      totalVerses: stanzaCount,
      linesPerVerse,
      hasChorus,
      isConfirmed: false,
      verses,
    };
  }
  
  export const hymns: Hymn[] = [
    createHymn(
      "processional",
      "We Enter in Thanksgiving",
      "A Wọlé Pẹ̀lú Ọpẹ́",
      "Music Director",
      4,
      5,
      true,
      [
        "You gather us in mercy",
        "Your promises are faithful",
        "Your peace sustains our hearts",
        "Your light outlives the darkness",
      ],
      [
        "O kó wa jọ nínú àánú",
        "Ọ̀rọ̀ Rẹ dúró ṣinṣin",
        "Àlàáfíà Rẹ ń fún wa lókun",
      ],
    ),
    createHymn(
      "victory",
      "Victory Belongs to the Lord",
      "Ìṣẹ́gun Jẹ́ Ti Olúwa",
      "Music Director",
      5,
      4,
      false,
      [
        "The risen Lord has conquered",
        "His truth remains unshaken",
        "The grave cannot defeat us",
        "His kingdom stands forever",
        "His love will never fail us",
      ],
      [
        "Olúwa ti ṣẹ́gun",
        "Òtítọ́ Rẹ dúró ṣinṣin",
        "Ibojì kò lè borí wa",
        "Ìjọba Rẹ wà títí láé",
        "Ìfẹ́ Rẹ kì í kùnà",
      ],
    ),
    createHymn(
      "aspiration",
      "Guide Us to the Morning",
      "Darí Wa Sí Òwúrọ̀",
      "Music Director",
      4,
      4,
      true,
      [
        "Teach us to walk in wisdom",
        "Keep every heart in kindness",
        "Make faith our daily anchor",
        "Lead us to life eternal",
      ],
      [
        "Kọ́ wa láti rìn nínú ọgbọ́n",
        "Jẹ́ kí inú wa kún fún rere",
        "Jẹ́ kí ìgbàgbọ́ wa dúró ṣinṣin",
        "Darí wa sí ìyè àìnípẹ̀kun",
      ],
    ),
    createHymn(
      "recessional",
      "Go Forth in Peace",
      "Ẹ Máa Lọ Ní Àlàáfíà",
      "Music Director",
      4,
      4,
      true,
      [
        "Go forth with hope before you",
        "Carry the love God gave you",
        "Let peace remain among you",
        "Until we meet in glory",
      ],
      [
        "Ẹ máa lọ pẹ̀lú ìrètí",
        "Ẹ gbé ìfẹ́ Ọlọ́run lọ",
        "Ẹ jẹ́ kí àlàáfíà wà",
        "Títí a ó fi pàdé ní ògo",
      ],
    ),
    createHymn(
      "graveside",
      "Our Hope Beyond the Grave",
      "Ìrètí Wa Lẹ́yìn Ibojì",
      "Music Director",
      7,
      4,
      false,
      [
        "The Lord is our eternal refuge",
        "His word will never perish",
        "He holds us in our sorrow",
        "His love is everlasting",
        "We trust His wise compassion",
        "He keeps the souls who love Him",
        "Our hope rests in His promise",
      ],
      [
        "Olúwa ni ibi ìsádi wa",
        "Ọ̀rọ̀ Rẹ kì í ṣègbé",
        "Ó ń gbé wa nínú ìbànújẹ́",
        "Ìfẹ́ Rẹ wà títí láé",
        "A gbẹ́kẹ̀ lé àánú Rẹ",
        "Ó ń pa àwọn tirẹ̀ mọ́",
        "Ìrètí wa wà nínú ìlérí Rẹ",
      ],
    ),
    createHymn(
      "at-home",
      "A Song of Peace at Home",
      "Orin Àlàáfíà Nílé",
      "Family",
      3,
      4,
      false,
      [
        "Let love unite this family",
        "Let grace renew our spirits",
        "May peace remain among us",
      ],
      [
        "Jẹ́ kí ìfẹ́ so ìdílé yìí pọ̀",
        "Jẹ́ kí oore-ọ̀fẹ́ tún wa ṣe",
        "Jẹ́ kí àlàáfíà wà láàárín wa",
      ],
    ),
  ];
  
  /**
   * Favourite songs are intentionally examples.
   * Replace titles and lyrics with the family's actual selections.
   */
  export const favouriteSongs: FavouriteSong[] = [
    {
      id: "family-favourite-01",
      title: "The Lord Has Been Good to Me",
      language: "bilingual",
      note: "Original demonstration lyrics. Family confirmation required.",
      isConfirmed: false,
      verses: [
        {
          verseNumber: 1,
          englishLines: [
            "The Lord has kept me through the years.",
            "His hand has held me through my fears.",
            "His goodness follows where I go.",
            "His love is more than words can show.",
          ],
          yorubaLines: [
            "Olúwa ti pa mí mọ́ ní ọdún wọ̀nyí.",
            "Ọwọ́ Rẹ ti gbé mi nínú ìbẹ̀rù.",
            "Oore Rẹ ń tọ̀ mí lẹ́yìn ní gbogbo ibi.",
            "Ìfẹ́ Rẹ tóbi ju ọ̀rọ̀ lọ.",
          ],
        },
        {
          verseNumber: 2,
          englishLines: [
            "In every season, God was near.",
            "His quiet voice would calm my fear.",
            "I thank Him for the life He gave.",
            "His faithful love is strong to save.",
          ],
          yorubaLines: [
            "Ní gbogbo ìgbà, Ọlọ́run sún mọ́ mi.",
            "Ohùn Rẹ ń mú ìbẹ̀rù mi rọ̀.",
            "Mo dúpẹ́ fún ẹ̀mí tí Ó fún mi.",
            "Ìfẹ́ Rẹ lè gbà wá là.",
          ],
        },
      ],
    },
    {
      id: "family-favourite-02",
      title: "Family Selection to Be Confirmed",
      language: "bilingual",
      note: "Replace with the actual favourite song, approved lyrics and language.",
      isConfirmed: false,
      verses: [
        {
          verseNumber: 1,
          englishLines: [
            "[Approved English line 1]",
            "[Approved English line 2]",
            "[Approved English line 3]",
            "[Approved English line 4]",
          ],
          yorubaLines: [
            "[Laini Yorùbá tí a fọwọ́ sí 1]",
            "[Laini Yorùbá tí a fọwọ́ sí 2]",
            "[Laini Yorùbá tí a fọwọ́ sí 3]",
            "[Laini Yorùbá tí a fọwọ́ sí 4]",
          ],
        },
      ],
    },
  ];
  
  export const ministers: OfficiatingMinister[] = Array.from(
    { length: 9 },
    (_, index) => ({
      id: `minister-${index + 1}`,
      name: `Minister ${String(index + 1).padStart(2, "0")} — To be confirmed`,
      ecclesiasticalTitle: "Title to be confirmed",
      church: "Church or institution to be confirmed",
      confirmed: false,
    }),
  );
  
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
    isConfirmed: false,
    ...options,
  });
  
  export const servicePartOne: ServiceItem[] = [
    service("processional", "01", "hymn", "Processional Hymn", "Music Director", {
      hymnId: "processional",
    }),
    service("call-to-worship", "02", "call_to_worship", "Call to Worship", "To be confirmed"),
    service("victory", "03", "hymn", "Hymn of Victory", "Music Director", {
      hymnId: "victory",
    }),
    service("praise-prayer", "04", "prayer", "Prayer of Praise, Thanksgiving and Invocation", "To be confirmed"),
    service("aspiration", "05", "hymn", "Hymn of Aspiration", "Music Director", {
      hymnId: "aspiration",
    }),
    service("biography", "06", "biography", "Biography of the Deceased", "To be confirmed"),
    service("favourite-songs", "07", "favourite_songs", "The Deceased's Favourite Songs", "The Family"),
    service("goodnight", "08", "goodnight_bid", "We Bid Our Member Goodnight", "To be confirmed"),
    service("scripture", "09", "scripture", "Scripture Reading", "To be confirmed"),
    service("choir", "10", "choir", "Choir Ministration", "The Choir"),
    service("family-prayer", "11", "prayer", "Special Prayer for the Family", "To be confirmed"),
    service("church-prayer", "12", "prayer", "Special Prayer for the Church", "To be confirmed"),
    service("thanksgiving", "13", "thanksgiving", "Thanksgiving", "To be confirmed"),
    service("recognition", "14", "recognition", "Greetings and Recognition", "To be confirmed"),
    service("appreciation", "15", "appreciation", "Words of Appreciation", "To be confirmed"),
    service("closing-prayer", "16", "benediction", "Closing Prayer and Benediction", "To be confirmed"),
    service("recessional", "17", "hymn", "Recessional Hymn", "Music Director", {
      hymnId: "recessional",
    }),
  ];
  
  export const servicePartTwo: ServiceItem[] = [
    service("grave-hymn", "01", "hymn", "Hymn at the Grave", "Music Director", {
      hymnId: "graveside",
    }),
    service("grave-prayer", "02", "prayer", "Prayer", "To be confirmed"),
    service("interment", "03", "interment", "Interment", "To be confirmed"),
    service("grave-benediction", "04", "benediction", "Prayer and Benediction", "To be confirmed"),
  ];
  
  export const servicePartThree: ServiceItem[] = [
    service("home-hymn", "01", "hymn", "Hymn at Home", "Family", {
      hymnId: "at-home",
    }),
    service("joint-scripture", "02", "scripture", "Joint Scripture Reading", "Family"),
    service("home-benediction", "03", "benediction", "Prayer and Benediction", "To be confirmed"),
  ];
  
  export const tributes: TributeItem[] = [
    {
      id: "tribute-family",
      authorName: "The Family",
      relationship: "Family tribute",
      bodyText:
        "We give thanks for a life that brought generations together. We remember the kindness, lessons and shared moments that remain part of our family story. This space is reserved for the family's approved tribute.",
      date: "5 November 2026",
      isMock: true,
    },
    {
      id: "tribute-church",
      authorName: "The Church",
      relationship: "Church tribute",
      bodyText:
        "We remember with gratitude a life connected to faith, fellowship and community. The church's official words of tribute will appear here after approval.",
      date: "5 November 2026",
      isMock: true,
    },
    {
      id: "tribute-friends",
      authorName: "Friends and Loved Ones",
      relationship: "Friends",
      bodyText:
        "The memories we carry are a lasting part of the love we shared. This is a sample tribute card for the memorial preview, awaiting a real message from family or friends.",
      date: "5 November 2026",
      isMock: true,
    },
  ];
  
  export const memories: MemoryPhoto[] = [
    {
      id: "memory-01",
      src: "/images/memorial/celebration-portrait.jpg",
      alt: "Portrait selected for the celebration of life",
      caption: "A life remembered with love",
      featured: true,
    },
    {
      id: "memory-02",
      src: "/images/memorial/memory-01.jpg",
      alt: "Family memory photograph",
      caption: "Precious family moments",
    },
    {
      id: "memory-03",
      src: "/images/memorial/memory-02.jpg",
      alt: "Photograph from the family archive",
      caption: "A story told in photographs",
    },
    {
      id: "memory-04",
      src: "/images/memorial/memory-03.jpg",
      alt: "Another cherished memory",
      caption: "Together through the years",
    },
    {
      id: "memory-05",
      src: "/images/memorial/memory-04.jpg",
      alt: "Family and loved ones",
      caption: "The people who made life beautiful",
    },
    {
      id: "memory-06",
      src: "/images/memorial/memory-05.jpg",
      alt: "A treasured moment",
      caption: "Held close in our hearts",
    },
    {
      id: "memory-07",
      src: "/images/memorial/memory-06.jpg",
      alt: "A further photograph from the archive",
      caption: "A legacy of love",
    },
  ];
  
  export const memorial: CelebrationOfLifeProfile = {
    ...memorialIdentity,
    heroPortraitUrl: "/images/memorial/celebration-portrait.jpg",
    closingPortraitUrl: "/images/memorial/closing-portrait.jpg",
    familyThankYouMessage:
      "With grateful hearts, the family thanks everyone who has prayed with us, stood beside us, shared memories and offered kindness during this time. Your presence and love mean more than words can express. May God bless you and keep you in peace.",
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
  