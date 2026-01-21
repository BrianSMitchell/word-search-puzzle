export type TaggedWord = {
  w: string; // word
  t: string[]; // tags/themes
};

export function getWordsByTags(tags: string[]): string[] {
  if (tags.includes("all")) {
    return WORD_POOL.map((w) => w.w);
  }
  return WORD_POOL.filter((w) => w.t.some((tag) => tags.includes(tag))).map((w) => w.w);
}

export const WORD_POOL: TaggedWord[] = [
  {
    "w": "ABILITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABOUT",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "ABOVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABROAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABSENCE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "ABSOLUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABSORB",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABSTRACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ABUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACADEMIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCEPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCIDENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCOMMODATE",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "ACCOMPANY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCOMPLISHMENT",
    "t": [
      "hard"
    ]
  },
  {
    "w": "ACCOUNT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCURATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACCUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACHIEVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACID",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACQUIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACROSS",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "ACTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACTIVE",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "ACTIVITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACTOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "ACTUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADAPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADDITION",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADDRESS",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "ADEQUATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADJUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADMIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADOPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADULT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADVANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADVENTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADVICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ADVISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AFFAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "AFFECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "AFFORD",
    "t": [
      "common"
    ]
  },
  {
    "w": "AFRAID",
    "t": [
      "common"
    ]
  },
  {
    "w": "AFTER",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "AGAIN",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "AGAINST",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "AGENCY",
    "t": [
      "common"
    ]
  },
  {
    "w": "AGENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "AGGRESSIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AGREE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AGRICULTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AHEAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "AIMS",
    "t": [
      "common"
    ]
  },
  {
    "w": "AIRCRAFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "AIRLINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AIRPORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALARM",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALBUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALCOHOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALLIGATOR",
    "t": [
      "animals"
    ]
  },
  {
    "w": "ALMOST",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "ALONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALREADY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALTERNATIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALTHOUGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "ALWAYS",
    "t": [
      "common",
      "first-grade",
      "second-grade"
    ]
  },
  {
    "w": "AM",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "AMAZING",
    "t": [
      "common"
    ]
  },
  {
    "w": "AMBER",
    "t": [
      "colors"
    ]
  },
  {
    "w": "AMBIGUOUS",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "AMBITION",
    "t": [
      "common"
    ]
  },
  {
    "w": "AMONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "AMOUNT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANALYZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANCIENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "AND",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "ANGEL",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "ANGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANGLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANIMAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANNIVERSARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANNOUNCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANNUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANOTHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANSWER",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "ANTELOPE",
    "t": [
      "animals"
    ]
  },
  {
    "w": "ANXIETY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ANY",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "ANYWAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "APART",
    "t": [
      "common"
    ]
  },
  {
    "w": "APOLOGY",
    "t": [
      "common"
    ]
  },
  {
    "w": "APOSTLE",
    "t": [
      "bible"
    ]
  },
  {
    "w": "APPARENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPLE",
    "t": [
      "common",
      "kids",
      "food"
    ]
  },
  {
    "w": "APPLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPOINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPRECIATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPROACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPROPRIATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPROVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "APPROXIMATELY",
    "t": [
      "hard"
    ]
  },
  {
    "w": "ARBITRARY",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "ARCHITECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARCHITECTURE",
    "t": [
      "hard"
    ]
  },
  {
    "w": "AREA",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARGUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARMED",
    "t": [
      "common"
    ]
  },
  {
    "w": "AROUND",
    "t": [
      "common",
      "first-grade",
      "second-grade"
    ]
  },
  {
    "w": "ARRANGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARRAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARREST",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARRIVAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARRIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARTICLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ARTIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASK",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "ASPECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASSIGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASSIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASSOCIATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASSUME",
    "t": [
      "common"
    ]
  },
  {
    "w": "ASSURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AT",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "ATMOSPHERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATOM",
    "t": [
      "science"
    ]
  },
  {
    "w": "ATTACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATTACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATTEMPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATTEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATTENTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATTITUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ATTRACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "AUDIENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AUTHOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "AUTOMATIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "AUTUMN",
    "t": [
      "holidays",
      "second-grade",
      "thanksgiving"
    ]
  },
  {
    "w": "AVAILABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AVERAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AVOID",
    "t": [
      "common"
    ]
  },
  {
    "w": "AWAIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "AWAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AWARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "AWARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "AWFUL",
    "t": [
      "common"
    ]
  },
  {
    "w": "AWKWARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "AZURE",
    "t": [
      "colors"
    ]
  },
  {
    "w": "BABOON",
    "t": [
      "animals"
    ]
  },
  {
    "w": "BACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "BACKGROUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BACON",
    "t": [
      "common"
    ]
  },
  {
    "w": "BACTERIA",
    "t": [
      "common"
    ]
  },
  {
    "w": "BADGER",
    "t": [
      "animals"
    ]
  },
  {
    "w": "BADLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BAGGAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BAKER",
    "t": [
      "food"
    ]
  },
  {
    "w": "BAKING",
    "t": [
      "christmas",
      "seniors"
    ]
  },
  {
    "w": "BALANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BALL",
    "t": [
      "kids"
    ]
  },
  {
    "w": "BALLOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "BANANA",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "BANK",
    "t": [
      "common"
    ]
  },
  {
    "w": "BARGAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "BARREL",
    "t": [
      "common"
    ]
  },
  {
    "w": "BASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BASEBALL",
    "t": [
      "sports"
    ]
  },
  {
    "w": "BASIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "BASIS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BASKET",
    "t": [
      "common",
      "easter"
    ]
  },
  {
    "w": "BASKETBALL",
    "t": [
      "sports"
    ]
  },
  {
    "w": "BAT",
    "t": [
      "kindergarten",
      "halloween"
    ]
  },
  {
    "w": "BATTERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BATTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BE",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "BEACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEANS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEAUTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEAVER",
    "t": [
      "animals"
    ]
  },
  {
    "w": "BECAUSE",
    "t": [
      "common",
      "first-grade",
      "second-grade"
    ]
  },
  {
    "w": "BECOME",
    "t": [
      "common"
    ]
  },
  {
    "w": "BED",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "BEDROOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEE",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "BEEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEEN",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "BEFORE",
    "t": [
      "common",
      "first-grade",
      "second-grade"
    ]
  },
  {
    "w": "BEGIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEGINNING",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "BEHALF",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEHAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEHIND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEIGE",
    "t": [
      "colors"
    ]
  },
  {
    "w": "BELIEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "BELIEVE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "BELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "BELLS",
    "t": [
      "holidays"
    ]
  },
  {
    "w": "BELONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "BELOW",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "BENEATH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BENEFIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "BENEVOLENT",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "BESIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BEST",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "BETTER",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "BETWEEN",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "BEYOND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BICYCLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BIDS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BIG",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "BILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "BIOLOGY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BIRD",
    "t": [
      "common"
    ]
  },
  {
    "w": "BIRTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BISCUIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "BISHOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "BISON",
    "t": [
      "animals"
    ]
  },
  {
    "w": "BITTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLACK",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "BLADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLANKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLESSING",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "BLIND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLOOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLOOM",
    "t": [
      "common",
      "easter"
    ]
  },
  {
    "w": "BLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "BLUE",
    "t": [
      "common",
      "kindergarten",
      "colors"
    ]
  },
  {
    "w": "BOARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "BODY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOLD",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "BOMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BONUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOOK",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "BOOST",
    "t": [
      "common"
    ]
  },
  {
    "w": "BORDER",
    "t": [
      "common",
      "geography"
    ]
  },
  {
    "w": "BORED",
    "t": [
      "common"
    ]
  },
  {
    "w": "BORROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOSS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOTH",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "BOTHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOTTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOTTOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOUNCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOWL",
    "t": [
      "common"
    ]
  },
  {
    "w": "BOX",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "BRAIN",
    "t": [
      "common",
      "brain-games",
      "homepage"
    ]
  },
  {
    "w": "BRAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRANCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BREAD",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "BREAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "BREAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "BREATH",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "BREED",
    "t": [
      "common"
    ]
  },
  {
    "w": "BREEZE",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "BRICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRIDGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRIEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRIGHT",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "BRILLIANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRING",
    "t": [
      "common"
    ]
  },
  {
    "w": "BROAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "BROKEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "BRONZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BROOM",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "BROTHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "BROWN",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "BRUSH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUBBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUCKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUDGET",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUILD",
    "t": [
      "common"
    ]
  },
  {
    "w": "BULLET",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUNCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUNNY",
    "t": [
      "easter"
    ]
  },
  {
    "w": "BURDEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUREAU",
    "t": [
      "common"
    ]
  },
  {
    "w": "BURGER",
    "t": [
      "food"
    ]
  },
  {
    "w": "BURN",
    "t": [
      "common"
    ]
  },
  {
    "w": "BURST",
    "t": [
      "common"
    ]
  },
  {
    "w": "BURY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUS",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "BUSH",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUSINESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUSY",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUTTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUTTON",
    "t": [
      "common"
    ]
  },
  {
    "w": "BUY",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "BUYER",
    "t": [
      "common"
    ]
  },
  {
    "w": "BY",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "CABINET",
    "t": [
      "common"
    ]
  },
  {
    "w": "CABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAKE",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "CALCULATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CALENDAR",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "CALL",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "CALM",
    "t": [
      "common",
      "easy",
      "large-print",
      "relaxing"
    ]
  },
  {
    "w": "CAMEL",
    "t": [
      "animals"
    ]
  },
  {
    "w": "CAMERA",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAMPAIGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAMPUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CANAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CANCEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CANCER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CANDIDATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CANDLE",
    "t": [
      "common",
      "christmas"
    ]
  },
  {
    "w": "CANDY",
    "t": [
      "common",
      "holidays",
      "halloween",
      "valentines-day"
    ]
  },
  {
    "w": "CANVAS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CANYON",
    "t": [
      "nature"
    ]
  },
  {
    "w": "CAP",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "CAPABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAPACITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAPITAL",
    "t": [
      "common",
      "geography"
    ]
  },
  {
    "w": "CAPTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAPTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAR",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "CARBON",
    "t": [
      "common"
    ]
  },
  {
    "w": "CARD",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "CARDS",
    "t": [
      "holidays",
      "seniors"
    ]
  },
  {
    "w": "CARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAREER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAREFUL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CARGO",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAROL",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "CARPET",
    "t": [
      "common"
    ]
  },
  {
    "w": "CARROT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CARRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "CASTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CASUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAT",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "CATALOG",
    "t": [
      "common"
    ]
  },
  {
    "w": "CATCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "CATEGORY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CATTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAULDRON",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "CAUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAUTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "CAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CEASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CEILING",
    "t": [
      "common"
    ]
  },
  {
    "w": "CELEBRATE",
    "t": [
      "common",
      "holidays"
    ]
  },
  {
    "w": "CELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CEMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CENTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CENTRAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CENTURY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CEREMONY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CERTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHAIRMAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHALLENGE",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "CHAMBER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHAMPION",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHANGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHANNEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHAPTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHARACTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHARGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHARITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHART",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHATTING",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHEAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHECK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHEEK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHEER",
    "t": [
      "common",
      "holidays"
    ]
  },
  {
    "w": "CHEESE",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "CHEETAH",
    "t": [
      "animals"
    ]
  },
  {
    "w": "CHEMICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHERRY",
    "t": [
      "food"
    ]
  },
  {
    "w": "CHEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHICK",
    "t": [
      "easter"
    ]
  },
  {
    "w": "CHICKEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHIEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHILD",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHIMNEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHIMPANZEE",
    "t": [
      "animals"
    ]
  },
  {
    "w": "CHIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHOCOLATE",
    "t": [
      "valentines-day",
      "easter"
    ]
  },
  {
    "w": "CHOICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHOIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHOOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHRONIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "CHURCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "CIGAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "CIRCLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CIRCUIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CITY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "CIVIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLAIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLASS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLASSIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLASSROOM",
    "t": [
      "printable"
    ]
  },
  {
    "w": "CLAUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLEAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLEAR",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "CLERK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLEVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLIENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLIFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLIMATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLIMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLINIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLOSET",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLOTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLOUD",
    "t": [
      "common",
      "kids",
      "nature"
    ]
  },
  {
    "w": "CLUB",
    "t": [
      "common"
    ]
  },
  {
    "w": "CLUE",
    "t": [
      "common",
      "homepage"
    ]
  },
  {
    "w": "COACH",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "COAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "COAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "COAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COBWEB",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "CODE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COFFEE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COGNITIVE",
    "t": [
      "brain-games"
    ]
  },
  {
    "w": "COHERENT",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "COIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "COLD",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "COLLAPSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COLLAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "COLLECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COLLEGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COLONY",
    "t": [
      "common"
    ]
  },
  {
    "w": "COLOR",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "COLUMN",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMBAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMBINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COME",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "COMEDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMFORT",
    "t": [
      "common",
      "large-print",
      "seniors",
      "relaxing"
    ]
  },
  {
    "w": "COMMAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMMERCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMMITTEE",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "COMMON",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMMUNICATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMMUNITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPANY",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPASS",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPETE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPLAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPLETE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPLEX",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPONENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPOUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPREHENSIVE",
    "t": [
      "hard"
    ]
  },
  {
    "w": "COMPRISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COMPUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCEDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCEIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCENTRATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCEPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCERN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCERT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCLUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONCRETE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONDITION",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONDUCT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFIDENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFIRM",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFLICT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONFUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONGRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONNECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONQUER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSCIENCE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "CONSCIOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSCIOUSNESS",
    "t": [
      "hard"
    ]
  },
  {
    "w": "CONSENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSIDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSOLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSTANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSTITUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSTRUCT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSULT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONSUME",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTEMPORARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTEXT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTINENT",
    "t": [
      "geography"
    ]
  },
  {
    "w": "CONTINUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTRACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTRARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTRAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTRIBUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONTROL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CONVINCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COOK",
    "t": [
      "common"
    ]
  },
  {
    "w": "COOKIES",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "COOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "COOPERATION",
    "t": [
      "common"
    ]
  },
  {
    "w": "COPPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "COPY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CORK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CORNER",
    "t": [
      "common"
    ]
  },
  {
    "w": "CORNUCOPIA",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "CORRECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CORRESPOND",
    "t": [
      "common"
    ]
  },
  {
    "w": "CORRUPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COSMOS",
    "t": [
      "common"
    ]
  },
  {
    "w": "COST",
    "t": [
      "common"
    ]
  },
  {
    "w": "COSTUME",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "COTTON",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUNCIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUNSEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUNT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUNTRY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "COUNTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUPLE",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "COURAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COURSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "COURT",
    "t": [
      "common"
    ]
  },
  {
    "w": "COUSIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "COVENANT",
    "t": [
      "bible"
    ]
  },
  {
    "w": "COVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "COYOTE",
    "t": [
      "animals"
    ]
  },
  {
    "w": "CRACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRAFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRANBERRY",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "CRASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRAWL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRAYON",
    "t": [
      "kids"
    ]
  },
  {
    "w": "CRAZY",
    "t": [
      "common"
    ]
  },
  {
    "w": "CREAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "CREATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CREATURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CREDIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CREEP",
    "t": [
      "common"
    ]
  },
  {
    "w": "CREW",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRIMSON",
    "t": [
      "colors"
    ]
  },
  {
    "w": "CRISIS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRITIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRITICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CROP",
    "t": [
      "common"
    ]
  },
  {
    "w": "CROSS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CROWD",
    "t": [
      "common"
    ]
  },
  {
    "w": "CROWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRUEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRUISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRUSH",
    "t": [
      "common"
    ]
  },
  {
    "w": "CRYSTAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CULTURAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "CULTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CUP",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "CUPBOARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "CUPID",
    "t": [
      "valentines-day"
    ]
  },
  {
    "w": "CURIOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "CURRENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "CURTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "CURVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "CUSHION",
    "t": [
      "common"
    ]
  },
  {
    "w": "CUSTOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "CYCLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DAD",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "DAFFODIL",
    "t": [
      "easter"
    ]
  },
  {
    "w": "DAILY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DAIRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DAMAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DANCE",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "DANGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "DARING",
    "t": [
      "common"
    ]
  },
  {
    "w": "DARK",
    "t": [
      "common"
    ]
  },
  {
    "w": "DARLING",
    "t": [
      "common"
    ]
  },
  {
    "w": "DASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "DATA",
    "t": [
      "common"
    ]
  },
  {
    "w": "DATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DAUGHTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "DAWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEADLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEAF",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEAR",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "DEATH",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEBATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEBT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECLARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECLINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECOR",
    "t": [
      "holidays"
    ]
  },
  {
    "w": "DECORATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DECREASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEDICATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEEP",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEER",
    "t": [
      "animals"
    ]
  },
  {
    "w": "DEFEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEFECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEFENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEFEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEFINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEFINITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEFINITELY",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "DEGREE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DELAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DELICATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DELIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DELIVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEMAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEMOCRACY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEMONSTRATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DENIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DENSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEPART",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEPEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEPOSIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEPRESSED",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEPTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEPUTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DERIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESCEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESCRIBE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESERT",
    "t": [
      "common",
      "nature",
      "geography"
    ]
  },
  {
    "w": "DESERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESIGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESK",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESPAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESPERATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESPITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESTINATION",
    "t": [
      "common"
    ]
  },
  {
    "w": "DESTROY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DETAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DETECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DETERMINATION",
    "t": [
      "hard"
    ]
  },
  {
    "w": "DETERMINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEVELOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEVICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DEVOTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIAGRAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIALOGUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIAMOND",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DICTATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DICTIONARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIFFER",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIGEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIGITAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIGNITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DILIGENT",
    "t": [
      "common",
      "vocabulary"
    ]
  },
  {
    "w": "DINNER",
    "t": [
      "common",
      "thanksgiving"
    ]
  },
  {
    "w": "DIPLO",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIRECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIRTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISAGREE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISASTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISC",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISCHARGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISCIPLE",
    "t": [
      "bible"
    ]
  },
  {
    "w": "DISCIPLINE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "DISCLOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISCO",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISCOUNT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISCOVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISCUSS",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISEASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISGRACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISGUISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISMISS",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISPLAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISPUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTINCT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTRACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTRIBUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTRICT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DISTURB",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIVIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIVINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIVISION",
    "t": [
      "common"
    ]
  },
  {
    "w": "DIVORCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DO",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "DOCTOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOCUMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOCUMENTATION",
    "t": [
      "hard"
    ]
  },
  {
    "w": "DOES",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "DOG",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "DOLLAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOLPHIN",
    "t": [
      "animals"
    ]
  },
  {
    "w": "DOMAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOMESTIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOMINATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DONATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DONKEY",
    "t": [
      "animals"
    ]
  },
  {
    "w": "DONUT",
    "t": [
      "food"
    ]
  },
  {
    "w": "DOOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOUBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOUBT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DOZEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRAFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRAG",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRAMA",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "DREAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "DREAM",
    "t": [
      "common",
      "kids",
      "relaxing"
    ]
  },
  {
    "w": "DRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRIFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRINK",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "DROP",
    "t": [
      "common"
    ]
  },
  {
    "w": "DROWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRUG",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "DRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DUCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "DULL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DUMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "DUMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "DURING",
    "t": [
      "second-grade"
    ]
  },
  {
    "w": "DUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "DUTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "DWELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "DYNAMIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "EACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "EAGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "EAGLE",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "EARLY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "EARN",
    "t": [
      "common"
    ]
  },
  {
    "w": "EARTH",
    "t": [
      "common",
      "second-grade",
      "nature"
    ]
  },
  {
    "w": "EASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "EASTERN",
    "t": [
      "common"
    ]
  },
  {
    "w": "EASY",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "EAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ECHO",
    "t": [
      "common"
    ]
  },
  {
    "w": "ECOLOGY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ECONOMIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "ECONOMY",
    "t": [
      "common"
    ]
  },
  {
    "w": "EDGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EDIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EDITION",
    "t": [
      "common"
    ]
  },
  {
    "w": "EDITOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "EDUCATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EERIE",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "EFFECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EFFICIENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EFFORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EGG",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "EGGS",
    "t": [
      "easter"
    ]
  },
  {
    "w": "EITHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELABORATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELASTIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELECTRIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELEGANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELEMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELEPHANT",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "ELEVATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELIMINATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELLIPSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELOQUENT",
    "t": [
      "common",
      "vocabulary"
    ]
  },
  {
    "w": "ELSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELUSIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ELVES",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "EMBARK",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMBASSY",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMBRACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMERGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMERGENCY",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMISSION",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMOTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMPHASIS",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMPIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMPIRICAL",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "EMPLOY",
    "t": [
      "common"
    ]
  },
  {
    "w": "EMPTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENCLOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENCOUNTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENCOURAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENDING",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENDURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENERGY",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "ENFORCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENGAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENGINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENJOY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENLARGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENORMOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENOUGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENROLL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENSURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTERPRISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTERTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTHUSIASM",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTHUSIASTIC",
    "t": [
      "hard"
    ]
  },
  {
    "w": "ENTIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTRANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENTRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENVELOPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ENVIRONMENT",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "EPIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "EPISODE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EQUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "EQUATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EQUIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "ERASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ERROR",
    "t": [
      "common"
    ]
  },
  {
    "w": "ERUPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESCAPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESCORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESSAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESSENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESTABLISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESTATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ESTIMATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ETERNAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ETHICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "EURO",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVALUATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVENING",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVERGREEN",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "EVERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVIDENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVIDENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "EVOLVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXAMINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXAMPLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCEPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCHANGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCLUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXCUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXECUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXERCISE",
    "t": [
      "brain-games"
    ]
  },
  {
    "w": "EXHAUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXHIBIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXOTIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPEDITION",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPENSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPERIENCE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "EXPERIMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPERT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPLAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPLOSION",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXPRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTERIOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTERNAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTRA",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTRACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "EXTRAORDINARY",
    "t": [
      "hard"
    ]
  },
  {
    "w": "EXTREME",
    "t": [
      "common"
    ]
  },
  {
    "w": "EYEBROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "FABRIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACILITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACTOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACTORY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FACULTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAILURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAIRLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAITH",
    "t": [
      "common",
      "bible"
    ]
  },
  {
    "w": "FALCON",
    "t": [
      "animals"
    ]
  },
  {
    "w": "FALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FALLACY",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "FALSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAMILIAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAMILY",
    "t": [
      "common",
      "holidays",
      "second-grade",
      "thanksgiving",
      "seniors"
    ]
  },
  {
    "w": "FAMOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAN",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "FANCY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FARM",
    "t": [
      "common"
    ]
  },
  {
    "w": "FASHION",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAST",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "FATAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FATIGUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAULT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FAVOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEAST",
    "t": [
      "common",
      "holidays",
      "thanksgiving"
    ]
  },
  {
    "w": "FEATURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEDERAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FELLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "FELONY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEMALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FERRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FETCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FEVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIBER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FICTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIELD",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIERCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIGURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FILTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FINAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FINANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIND",
    "t": [
      "common",
      "homepage"
    ]
  },
  {
    "w": "FINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FINGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FINISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIRM",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIRST",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "FISCAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "FITNESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "FIXED",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLAG",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLAMINGO",
    "t": [
      "animals"
    ]
  },
  {
    "w": "FLASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLAVOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLEET",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLESH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLOAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLOOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLOOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLOUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLOW",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "FLOWER",
    "t": [
      "common",
      "kids",
      "nature"
    ]
  },
  {
    "w": "FLOWERS",
    "t": [
      "valentines-day"
    ]
  },
  {
    "w": "FLUID",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLUSH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOCUS",
    "t": [
      "common",
      "easy",
      "large-print",
      "brain-games",
      "homepage"
    ]
  },
  {
    "w": "FOG",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOLD",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOLK",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOLLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOND",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOOTBALL",
    "t": [
      "sports"
    ]
  },
  {
    "w": "FORCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORECAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOREGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOREST",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "FOREVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORGET",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORGIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORK",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORMAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORMAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORMER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORMULA",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORTUNE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FORWARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOSSIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOSTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOUND",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "FOUNTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "FOX",
    "t": [
      "animals"
    ]
  },
  {
    "w": "FRAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "FRANK",
    "t": [
      "common"
    ]
  },
  {
    "w": "FRAUD",
    "t": [
      "common"
    ]
  },
  {
    "w": "FREE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FREELY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FREEZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FREQUENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FRESH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FRIEND",
    "t": [
      "common",
      "kids",
      "second-grade",
      "valentines-day",
      "seniors"
    ]
  },
  {
    "w": "FRIGHT",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "FROG",
    "t": [
      "common"
    ]
  },
  {
    "w": "FRONT",
    "t": [
      "common"
    ]
  },
  {
    "w": "FROST",
    "t": [
      "common"
    ]
  },
  {
    "w": "FROWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "FRUIT",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "FUEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FULL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FULLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FUN",
    "t": [
      "holidays",
      "kindergarten",
      "homepage"
    ]
  },
  {
    "w": "FUNCTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "FUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "FUNERAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "FUNNY",
    "t": [
      "common"
    ]
  },
  {
    "w": "FURIOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "FURNISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "FURNITURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "FURTHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "FUTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GADGET",
    "t": [
      "common"
    ]
  },
  {
    "w": "GAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "GALAXY",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "GALLERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "GALLON",
    "t": [
      "common"
    ]
  },
  {
    "w": "GAMBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GAME",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "GAMES",
    "t": [
      "holidays"
    ]
  },
  {
    "w": "GANG",
    "t": [
      "common"
    ]
  },
  {
    "w": "GAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "GARAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GARDEN",
    "t": [
      "common",
      "easter",
      "seniors"
    ]
  },
  {
    "w": "GARMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "GASOLINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GATHER",
    "t": [
      "common",
      "holidays",
      "thanksgiving"
    ]
  },
  {
    "w": "GAUGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GAVE",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "GAZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENERAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENERATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENERIC",
    "t": [
      "common",
      "vocabulary"
    ]
  },
  {
    "w": "GENEROUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENIUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "GENTLE",
    "t": [
      "common",
      "seniors",
      "relaxing"
    ]
  },
  {
    "w": "GENUINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GEOGRAPHY",
    "t": [
      "common"
    ]
  },
  {
    "w": "GESTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GET",
    "t": [
      "common"
    ]
  },
  {
    "w": "GHOST",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "GHOUL",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "GIANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "GIFT",
    "t": [
      "common",
      "holidays",
      "valentines-day"
    ]
  },
  {
    "w": "GIGGLE",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "GINGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "GINGERBREAD",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "GIRAFFE",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "GIRL",
    "t": [
      "common"
    ]
  },
  {
    "w": "GIVING",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "GLACIER",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "GLAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLASS",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLIMPSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLOBAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLOBE",
    "t": [
      "common",
      "geography"
    ]
  },
  {
    "w": "GLORY",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLOSSY",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLOVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "GLUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GO",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "GOAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "GOAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "GOES",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "GOLD",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "GOLDEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "GOLF",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "GOOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "GOOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GORILLA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "GOSPEL",
    "t": [
      "common",
      "bible"
    ]
  },
  {
    "w": "GOSSIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "GOVERN",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRACE",
    "t": [
      "common",
      "bible"
    ]
  },
  {
    "w": "GRADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRADUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRAMMAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRAPE",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "GRAPH",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRASP",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRASS",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "GRATEFUL",
    "t": [
      "common",
      "spelling",
      "thanksgiving"
    ]
  },
  {
    "w": "GRAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRAVITY",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "GRAY",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "GREAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "GREED",
    "t": [
      "common"
    ]
  },
  {
    "w": "GREEN",
    "t": [
      "common",
      "first-grade",
      "easter",
      "colors"
    ]
  },
  {
    "w": "GREET",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRID",
    "t": [
      "common",
      "easy",
      "homepage"
    ]
  },
  {
    "w": "GRIEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "GRIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "GROCER",
    "t": [
      "common"
    ]
  },
  {
    "w": "GROSS",
    "t": [
      "common"
    ]
  },
  {
    "w": "GROUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "GROUP",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "GROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "GROWTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUARANTEE",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "GUARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUILT",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUITAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "GULF",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUN",
    "t": [
      "common"
    ]
  },
  {
    "w": "GUY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HABIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HABITAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HALF",
    "t": [
      "common"
    ]
  },
  {
    "w": "HALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HALT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAMMER",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "HANDLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HANDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HANG",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAPPEN",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "HAPPY",
    "t": [
      "common",
      "kids",
      "easy"
    ]
  },
  {
    "w": "HARBOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "HARDLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HARM",
    "t": [
      "common"
    ]
  },
  {
    "w": "HARMONY",
    "t": [
      "relaxing"
    ]
  },
  {
    "w": "HARVEST",
    "t": [
      "common",
      "thanksgiving"
    ]
  },
  {
    "w": "HASTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAT",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "HATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAUL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAUNT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HAUNTED",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "HAVE",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "HAWK",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "HAZARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "HE",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "HEAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEALTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEART",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "HEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEAVEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEAVY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HECTIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEDGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HEIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HELICOPTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "HELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HELLO",
    "t": [
      "common"
    ]
  },
  {
    "w": "HELMET",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "HELP",
    "t": [
      "common"
    ]
  },
  {
    "w": "HENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HERB",
    "t": [
      "common"
    ]
  },
  {
    "w": "HERD",
    "t": [
      "common"
    ]
  },
  {
    "w": "HERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HERITAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HERO",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIGHLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIGHWAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIPPO",
    "t": [
      "common"
    ]
  },
  {
    "w": "HIPPOPOTAMUS",
    "t": [
      "animals"
    ]
  },
  {
    "w": "HIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HISTORY",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "HIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOBBY",
    "t": [
      "common",
      "seniors"
    ]
  },
  {
    "w": "HOCKEY",
    "t": [
      "sports"
    ]
  },
  {
    "w": "HOLD",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOLIDAY",
    "t": [
      "common",
      "holidays",
      "christmas"
    ]
  },
  {
    "w": "HOLLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOLLY",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "HOLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOME",
    "t": [
      "common"
    ]
  },
  {
    "w": "HONEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "HONEY",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "HONOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOOK",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOP",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "HOPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HORIZON",
    "t": [
      "common"
    ]
  },
  {
    "w": "HORN",
    "t": [
      "common"
    ]
  },
  {
    "w": "HORROR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HORSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOSPITAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOST",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOTEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOUSE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "HOVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "HOWEVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "HUG",
    "t": [
      "valentines-day"
    ]
  },
  {
    "w": "HUGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HUMAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "HUMBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "HUMOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "HUNGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "HUNT",
    "t": [
      "common",
      "easter",
      "homepage"
    ]
  },
  {
    "w": "HURL",
    "t": [
      "common"
    ]
  },
  {
    "w": "HURRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "HURT",
    "t": [
      "common"
    ]
  },
  {
    "w": "HYBRID",
    "t": [
      "common"
    ]
  },
  {
    "w": "HYENA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "HYPOTHETICAL",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "ICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IDEA",
    "t": [
      "common"
    ]
  },
  {
    "w": "IDEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "IDENTIFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "IDLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IDOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "IF",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "IGNITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IGNORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IGUANA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "IMAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMAGINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMMEDIATELY",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "IMPACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPATIENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPROVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IMPULSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IN",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "INCIDENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INCLUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INCOME",
    "t": [
      "common"
    ]
  },
  {
    "w": "INCREASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INDEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "INDEX",
    "t": [
      "common"
    ]
  },
  {
    "w": "INDICATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INDIGO",
    "t": [
      "colors"
    ]
  },
  {
    "w": "INDOOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "INDUSTRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "INFANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INFECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INFER",
    "t": [
      "common"
    ]
  },
  {
    "w": "INFERENCE",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "INFLATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INFORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "INFRASTRUCTURE",
    "t": [
      "hard"
    ]
  },
  {
    "w": "INITIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "INJECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INJURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INK",
    "t": [
      "common"
    ]
  },
  {
    "w": "INNATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INNER",
    "t": [
      "common"
    ]
  },
  {
    "w": "INNOCENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INPUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INQUIRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSANE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSERT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSIDE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "INSIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSPECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSPIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTEAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTINCT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTITUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTRUCT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSTRUMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSULT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INSURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTEGRATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTELLECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTENSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTEREST",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERIOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERNAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERPRET",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERRUPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERVAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTERVIEW",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTIMATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTO",
    "t": [
      "common"
    ]
  },
  {
    "w": "INTRUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INVADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INVALID",
    "t": [
      "common"
    ]
  },
  {
    "w": "INVENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "INVEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "INVITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "INVOLVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IRON",
    "t": [
      "common"
    ]
  },
  {
    "w": "IS",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "ISLAND",
    "t": [
      "common",
      "geography"
    ]
  },
  {
    "w": "ISOLATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ISSUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "IT",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "ITEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "ITS",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "JACKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "JAGUAR",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "JAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "JAM",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "JAR",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "JAVELIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "JAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "JAZZ",
    "t": [
      "common"
    ]
  },
  {
    "w": "JEALOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "JEANS",
    "t": [
      "common"
    ]
  },
  {
    "w": "JELLY",
    "t": [
      "common",
      "easter"
    ]
  },
  {
    "w": "JERSEY",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "JET",
    "t": [
      "common"
    ]
  },
  {
    "w": "JEWEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "JINGLE",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "JOB",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOCKEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOURNAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOURNEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "JOY",
    "t": [
      "common",
      "holidays"
    ]
  },
  {
    "w": "JUDGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "JUDICIOUS",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "JUICE",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "JUMP",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "JUNGLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "JUNIOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "JUROR",
    "t": [
      "common"
    ]
  },
  {
    "w": "JUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "JUSTICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "KANGAROO",
    "t": [
      "animals"
    ]
  },
  {
    "w": "KEEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "KEEP",
    "t": [
      "common"
    ]
  },
  {
    "w": "KERNEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "KETTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "KEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "KICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "KIDNAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "KIDNEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "KILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "KILO",
    "t": [
      "common"
    ]
  },
  {
    "w": "KIND",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "KINDNESS",
    "t": [
      "seniors"
    ]
  },
  {
    "w": "KINETIC",
    "t": [
      "common",
      "vocabulary"
    ]
  },
  {
    "w": "KING",
    "t": [
      "common"
    ]
  },
  {
    "w": "KISS",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "KITCHEN",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "KITE",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "KITTEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "KNIFE",
    "t": [
      "common"
    ]
  },
  {
    "w": "KNITTING",
    "t": [
      "seniors"
    ]
  },
  {
    "w": "KNOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "KNOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "KNOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "KNOWLEDGE",
    "t": [
      "brain-games"
    ]
  },
  {
    "w": "KOALA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "LAB",
    "t": [
      "science"
    ]
  },
  {
    "w": "LABEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LABOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "LACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LADDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LADY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "LANE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LANGUAGE",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "LANTERN",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "LAPTOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "LARGE",
    "t": [
      "common",
      "large-print",
      "second-grade"
    ]
  },
  {
    "w": "LARVA",
    "t": [
      "common"
    ]
  },
  {
    "w": "LASER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "LATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LATELY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LATER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LATITUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAUGH",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "LAUNCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAUNDRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAWYER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAYER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LAYOUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAF",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAGUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEARN",
    "t": [
      "common",
      "kids",
      "easy",
      "second-grade"
    ]
  },
  {
    "w": "LEASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEATHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LECTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEDGER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEGACY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEGAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEGEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEMON",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "LEMUR",
    "t": [
      "animals"
    ]
  },
  {
    "w": "LEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "LENGTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "LENS",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEOPARD",
    "t": [
      "animals"
    ]
  },
  {
    "w": "LESSON",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "LETHAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LETTER",
    "t": [
      "common",
      "homepage"
    ]
  },
  {
    "w": "LETTERS",
    "t": [
      "easy",
      "large-print"
    ]
  },
  {
    "w": "LEVEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LEXICON",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIBERAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIBRARY",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "LICENSE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "LICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LID",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIFE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIGHT",
    "t": [
      "common",
      "second-grade",
      "relaxing"
    ]
  },
  {
    "w": "LIGHTS",
    "t": [
      "holidays"
    ]
  },
  {
    "w": "LIKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LILY",
    "t": [
      "easter"
    ]
  },
  {
    "w": "LIMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "LINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LINK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LION",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "LIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIQUID",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "LISTEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "LITER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LITTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "LIZARD",
    "t": [
      "animals"
    ]
  },
  {
    "w": "LLAMA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "LOAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOBBY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOCAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOCATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOG",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "LOGIC",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "LOGO",
    "t": [
      "common"
    ]
  },
  {
    "w": "LONELY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOOK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LORD",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOSS",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOUD",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOVE",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "LOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "LOYAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUCID",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "LUCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUCKY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUGGAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUNCH",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "LUNG",
    "t": [
      "common"
    ]
  },
  {
    "w": "LURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "LUXURY",
    "t": [
      "common"
    ]
  },
  {
    "w": "LYRICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MACHINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MADAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "MADE",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "MAGIC",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "MAGNET",
    "t": [
      "common"
    ]
  },
  {
    "w": "MAID",
    "t": [
      "common"
    ]
  },
  {
    "w": "MAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "MAINTENANCE",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "MAJOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "MAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MALICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MALLEABLE",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "MAMMAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MANAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MANDATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MANGO",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "MANNER",
    "t": [
      "common"
    ]
  },
  {
    "w": "MANUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MANY",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "MAP",
    "t": [
      "common",
      "kindergarten",
      "geography"
    ]
  },
  {
    "w": "MARCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "MARGIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "MARINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MARKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "MARRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "MASK",
    "t": [
      "common"
    ]
  },
  {
    "w": "MASS",
    "t": [
      "common"
    ]
  },
  {
    "w": "MASTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "MATCH",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "MATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MATERIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MATH",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "MATHEMATICAL",
    "t": [
      "hard"
    ]
  },
  {
    "w": "MATTER",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "MAXIMUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "MAYOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "ME",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "MEADOW",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "MEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEASURE",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "MEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MECHANIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEDAL",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "MEDIA",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEDICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEDIUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEERKAT",
    "t": [
      "animals"
    ]
  },
  {
    "w": "MEET",
    "t": [
      "common"
    ]
  },
  {
    "w": "MELODY",
    "t": [
      "common"
    ]
  },
  {
    "w": "MELON",
    "t": [
      "common"
    ]
  },
  {
    "w": "MELT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEMBER",
    "t": [
      "common"
    ]
  },
  {
    "w": "MEMORY",
    "t": [
      "common",
      "seniors",
      "brain-games"
    ]
  },
  {
    "w": "MENTAL",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "MENTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "MENU",
    "t": [
      "common"
    ]
  },
  {
    "w": "MERCY",
    "t": [
      "common",
      "bible"
    ]
  },
  {
    "w": "MERGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MERIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MERRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "MESH",
    "t": [
      "common"
    ]
  },
  {
    "w": "MESSAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "METAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "METER",
    "t": [
      "common"
    ]
  },
  {
    "w": "METHOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "METICULOUS",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "METRIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "MICRO",
    "t": [
      "common"
    ]
  },
  {
    "w": "MIDDLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MILD",
    "t": [
      "common"
    ]
  },
  {
    "w": "MILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MILK",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "MILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MIND",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINERAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINIMUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINISTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MINUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MIRACLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MIRROR",
    "t": [
      "common"
    ]
  },
  {
    "w": "MISS",
    "t": [
      "common"
    ]
  },
  {
    "w": "MISSILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MISSION",
    "t": [
      "common"
    ]
  },
  {
    "w": "MISTAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MISTLETOE",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "MIX",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOBILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MODEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MODEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "MODERN",
    "t": [
      "common"
    ]
  },
  {
    "w": "MODIFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "MODULE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOLD",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOM",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "MOMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MONEY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "MONITOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "MONKEY",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "MONSTER",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "MONTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOON",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOOSE",
    "t": [
      "animals"
    ]
  },
  {
    "w": "MORAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MORNING",
    "t": [
      "common"
    ]
  },
  {
    "w": "MORTAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOST",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOTEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOTHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOTIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOTOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOUNT",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOUNTAIN",
    "t": [
      "second-grade",
      "nature",
      "geography"
    ]
  },
  {
    "w": "MOUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOUTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MOVIE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUDDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUG",
    "t": [
      "common"
    ]
  },
  {
    "w": "MULE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MULTI",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUMMY",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "MURAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MURDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUSCLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUSEUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUSIC",
    "t": [
      "common",
      "kids",
      "seniors"
    ]
  },
  {
    "w": "MUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "MUTUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "MY",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "MYSTERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "NAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NAKED",
    "t": [
      "common"
    ]
  },
  {
    "w": "NAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "NANNY",
    "t": [
      "common"
    ]
  },
  {
    "w": "NARROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "NARWHAL",
    "t": [
      "animals"
    ]
  },
  {
    "w": "NASTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "NATION",
    "t": [
      "common"
    ]
  },
  {
    "w": "NATIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NATURE",
    "t": [
      "common",
      "nature",
      "seniors",
      "science"
    ]
  },
  {
    "w": "NAUSEA",
    "t": [
      "common"
    ]
  },
  {
    "w": "NAVAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEBULOUS",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "NECESSARY",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "NECK",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEGATIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEGLECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEITHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "NERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "NET",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "NETWORK",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEUTRAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEVER",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "NEWLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEWS",
    "t": [
      "common"
    ]
  },
  {
    "w": "NEXT",
    "t": [
      "common"
    ]
  },
  {
    "w": "NICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NICKEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NIGHT",
    "t": [
      "common",
      "kids",
      "second-grade"
    ]
  },
  {
    "w": "NIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NO",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "NOBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOBODY",
    "t": [
      "common"
    ]
  },
  {
    "w": "NODE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOMINAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NONSTOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOODLE",
    "t": [
      "food"
    ]
  },
  {
    "w": "NOON",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "NORMAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NORTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "NORTHPOLE",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "NOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOTHING",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOTICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOTICEABLE",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "NOUN",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOVEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NOWHERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NUCLEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "NUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NUGGET",
    "t": [
      "common"
    ]
  },
  {
    "w": "NULL",
    "t": [
      "common"
    ]
  },
  {
    "w": "NUMBER",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "NURSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "NUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "NYLON",
    "t": [
      "common"
    ]
  },
  {
    "w": "OAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "OAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "OATH",
    "t": [
      "common"
    ]
  },
  {
    "w": "OBEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "OBJECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "OBLIGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OBSCURE",
    "t": [
      "common",
      "vocabulary"
    ]
  },
  {
    "w": "OBSERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OBTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "OBVIOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "OCCASION",
    "t": [
      "common"
    ]
  },
  {
    "w": "OCCASIONALLY",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "OCCURRENCE",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "OCEAN",
    "t": [
      "common",
      "kids",
      "nature",
      "relaxing",
      "geography"
    ]
  },
  {
    "w": "OCTAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OCTOPUS",
    "t": [
      "animals"
    ]
  },
  {
    "w": "ODD",
    "t": [
      "common"
    ]
  },
  {
    "w": "OF",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "OFF",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "OFFEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "OFFICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OFFICER",
    "t": [
      "common"
    ]
  },
  {
    "w": "OFTEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "OIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "OLD",
    "t": [
      "common"
    ]
  },
  {
    "w": "OLIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OMELET",
    "t": [
      "common"
    ]
  },
  {
    "w": "ON",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "ONCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ONE",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "ONLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ONSET",
    "t": [
      "common"
    ]
  },
  {
    "w": "ONTO",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPERA",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPERATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPINION",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPIUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPTIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "OPTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "OR",
    "t": [
      "kindergarten",
      "first-grade"
    ]
  },
  {
    "w": "ORAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORANGE",
    "t": [
      "common",
      "food",
      "colors"
    ]
  },
  {
    "w": "ORBIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORCHARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORGAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORIGIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "ORNAMENT",
    "t": [
      "common",
      "holidays",
      "christmas"
    ]
  },
  {
    "w": "OSTRICH",
    "t": [
      "animals"
    ]
  },
  {
    "w": "OTHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "OTTER",
    "t": [
      "animals"
    ]
  },
  {
    "w": "OUGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "OUNCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "OUTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "OVAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "OVEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "OVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "OWE",
    "t": [
      "common"
    ]
  },
  {
    "w": "OWL",
    "t": [
      "common",
      "kindergarten",
      "halloween"
    ]
  },
  {
    "w": "OWNER",
    "t": [
      "common"
    ]
  },
  {
    "w": "OXYGEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "OYSTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PACKAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "PALACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PALM",
    "t": [
      "common"
    ]
  },
  {
    "w": "PANDA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "PANEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PANIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "PANTHER",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "PAPER",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "PARABLES",
    "t": [
      "bible"
    ]
  },
  {
    "w": "PARADE",
    "t": [
      "common",
      "holidays",
      "easter"
    ]
  },
  {
    "w": "PARCEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PARDON",
    "t": [
      "common"
    ]
  },
  {
    "w": "PARENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PARK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PARROT",
    "t": [
      "animals"
    ]
  },
  {
    "w": "PART",
    "t": [
      "common"
    ]
  },
  {
    "w": "PARTISAN",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "PARTNER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PARTY",
    "t": [
      "common",
      "holidays"
    ]
  },
  {
    "w": "PASS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "PASTA",
    "t": [
      "food"
    ]
  },
  {
    "w": "PASTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PASTEL",
    "t": [
      "easter"
    ]
  },
  {
    "w": "PATCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PATH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PATIENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PATROL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PATTERN",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "PAUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAVEMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "PAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEACE",
    "t": [
      "common",
      "holidays",
      "seniors",
      "relaxing"
    ]
  },
  {
    "w": "PEACH",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "PEACOCK",
    "t": [
      "animals"
    ]
  },
  {
    "w": "PEAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEARL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEASANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEBBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PECK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEDAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEN",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "PENAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PENCIL",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "PENDING",
    "t": [
      "common"
    ]
  },
  {
    "w": "PENGUIN",
    "t": [
      "animals"
    ]
  },
  {
    "w": "PENNY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PEOPLE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "PEPPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERFECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERFORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERIOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERSON",
    "t": [
      "common"
    ]
  },
  {
    "w": "PERSPECTIVE",
    "t": [
      "hard"
    ]
  },
  {
    "w": "PETAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PETROL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PHASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PHILOSOPHICAL",
    "t": [
      "hard"
    ]
  },
  {
    "w": "PHONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PHOTO",
    "t": [
      "common"
    ]
  },
  {
    "w": "PHRASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PHYSIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIANO",
    "t": [
      "common"
    ]
  },
  {
    "w": "PICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PICNIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "PICTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIE",
    "t": [
      "common",
      "kindergarten",
      "thanksgiving"
    ]
  },
  {
    "w": "PIECE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIG",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "PIGEON",
    "t": [
      "common"
    ]
  },
  {
    "w": "PILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PILGRIM",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "PILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PILOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "PINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PINK",
    "t": [
      "common",
      "valentines-day",
      "colors"
    ]
  },
  {
    "w": "PINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIRACY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIRATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PISTOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PITCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PIZZA",
    "t": [
      "food"
    ]
  },
  {
    "w": "PLACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLANE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLANET",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "PLANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLASTIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLATFORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLATYPUS",
    "t": [
      "animals"
    ]
  },
  {
    "w": "PLAY",
    "t": [
      "common",
      "kids",
      "easy",
      "homepage"
    ]
  },
  {
    "w": "PLAYER",
    "t": [
      "sports"
    ]
  },
  {
    "w": "PLEASANT",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "PLEASE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "PLOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLUG",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "PLUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "POCKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "POEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "POET",
    "t": [
      "common"
    ]
  },
  {
    "w": "POINT",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "POISON",
    "t": [
      "common"
    ]
  },
  {
    "w": "POLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "POLICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "POLISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "POLITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "POLITICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "POLL",
    "t": [
      "common"
    ]
  },
  {
    "w": "POMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "POND",
    "t": [
      "common"
    ]
  },
  {
    "w": "POOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "POOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "POP",
    "t": [
      "common"
    ]
  },
  {
    "w": "POPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "POPPY",
    "t": [
      "common"
    ]
  },
  {
    "w": "POPULAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "PORCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PORCUPINE",
    "t": [
      "animals"
    ]
  },
  {
    "w": "PORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PORK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PORTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PORTRAIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "POSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "POSITION",
    "t": [
      "common"
    ]
  },
  {
    "w": "POSITIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "POSSESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "POST",
    "t": [
      "common"
    ]
  },
  {
    "w": "POT",
    "t": [
      "common"
    ]
  },
  {
    "w": "POTATO",
    "t": [
      "common"
    ]
  },
  {
    "w": "POTENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "POTION",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "POUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "POUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "POWDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "POWER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRACTICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRACTICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRAGMATIC",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "PRAISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRECEDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREDICT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREFACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREFER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREFIX",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREGNA",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREGNANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRELIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREMIER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREP",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRESENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRESENTS",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "PRESERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRESTIGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRESUME",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRETTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREVENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREVIEW",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREVIOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PREY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRIEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRIMARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRINCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRINCESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRINCIPAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRINCIPLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRINT",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "PRIOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRISON",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRIVATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRIZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROBABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROBE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROBLEM",
    "t": [
      "common",
      "second-grade",
      "brain-games"
    ]
  },
  {
    "w": "PROCEDURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROCESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRODUCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRODUCT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROFESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROFESSIO",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROFILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROFIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROFOUND",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "PROGRAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROGRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROJECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROLONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROMISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROMPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRONOUN",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRONUNCIATION",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "PROOF",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROPERTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROPHET",
    "t": [
      "common",
      "bible"
    ]
  },
  {
    "w": "PROPORTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROSECUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROSPECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROSPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROTECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROTEIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROTEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROUD",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROVIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROVINCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROVOKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PROXY",
    "t": [
      "common"
    ]
  },
  {
    "w": "PRUDENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PSALM",
    "t": [
      "bible"
    ]
  },
  {
    "w": "PSYCHO",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUBLIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUBLISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUDDING",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUERILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "PULL",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "PULSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUMPKIN",
    "t": [
      "halloween",
      "thanksgiving"
    ]
  },
  {
    "w": "PUNCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUNISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUPIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUPPET",
    "t": [
      "common"
    ]
  },
  {
    "w": "PURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PURGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PURPLE",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "PURSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PURSUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUSH",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "PUZZLE",
    "t": [
      "common",
      "easy",
      "brain-games",
      "homepage"
    ]
  },
  {
    "w": "QUAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUALITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUANDARY",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "QUANTITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUARRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUARTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUARTZ",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUEEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUESTION",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "QUEUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUIET",
    "t": [
      "common",
      "kids",
      "seniors",
      "relaxing"
    ]
  },
  {
    "w": "QUILT",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUIVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUOKKA",
    "t": [
      "animals"
    ]
  },
  {
    "w": "QUOTA",
    "t": [
      "common"
    ]
  },
  {
    "w": "QUOTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RABBIT",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "RACCOON",
    "t": [
      "animals"
    ]
  },
  {
    "w": "RACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RACIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RACKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "RADAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "RADIATION",
    "t": [
      "common"
    ]
  },
  {
    "w": "RADICAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RADIO",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAID",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAIN",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "RAINBOW",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "RAISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RALLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "RANGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RANK",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAPID",
    "t": [
      "common"
    ]
  },
  {
    "w": "RARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "RATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RATHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "RATIFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "RATIO",
    "t": [
      "common"
    ]
  },
  {
    "w": "RATIONAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "RAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "REACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "REACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "READ",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "READER",
    "t": [
      "common"
    ]
  },
  {
    "w": "READILY",
    "t": [
      "common"
    ]
  },
  {
    "w": "READING",
    "t": [
      "seniors",
      "printable"
    ]
  },
  {
    "w": "READY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "REAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "REALISM",
    "t": [
      "common"
    ]
  },
  {
    "w": "REALIZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REALLY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "REAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "REASON",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "REBATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REBE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECEIPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECEIVE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "RECENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECEPTIO",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECIPE",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "RECKON",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECOGNIZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECOIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECORD",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECOVER",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECREATI",
    "t": [
      "common"
    ]
  },
  {
    "w": "RECRUIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RED",
    "t": [
      "common",
      "kindergarten",
      "colors"
    ]
  },
  {
    "w": "REDEEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "REDERIC",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "REDUCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REED",
    "t": [
      "common"
    ]
  },
  {
    "w": "REEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFER",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFLECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFRAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFRESH",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFUGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "REFUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REGARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "REGIME",
    "t": [
      "common"
    ]
  },
  {
    "w": "REGION",
    "t": [
      "common"
    ]
  },
  {
    "w": "REGISTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "REGRET",
    "t": [
      "common"
    ]
  },
  {
    "w": "REGULAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "REIGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "REINDEER",
    "t": [
      "holidays",
      "christmas"
    ]
  },
  {
    "w": "REJECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REJOICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELAX",
    "t": [
      "common",
      "easy",
      "homepage"
    ]
  },
  {
    "w": "RELEASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELEVANT",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "RELIABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELIEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELIEVO",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELIGION",
    "t": [
      "common"
    ]
  },
  {
    "w": "RELY",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMARK",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMEDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMEMBER",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMIND",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMOV",
    "t": [
      "common"
    ]
  },
  {
    "w": "REMOVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RENDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "RENEW",
    "t": [
      "common"
    ]
  },
  {
    "w": "RENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPLACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPRESEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPRODUC",
    "t": [
      "common"
    ]
  },
  {
    "w": "REPUBLIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "REQUEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "REQUIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESCUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESEARC",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESEARCH",
    "t": [
      "science"
    ]
  },
  {
    "w": "RESERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESHAPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESIGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESILIENT",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "RESIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESOLVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESOURCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESPECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESPIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESPOND",
    "t": [
      "common"
    ]
  },
  {
    "w": "REST",
    "t": [
      "common",
      "easy",
      "relaxing"
    ]
  },
  {
    "w": "RESTAURA",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESTAURANT",
    "t": [
      "spelling"
    ]
  },
  {
    "w": "RESTORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESTRIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESULT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RESUME",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETRAC",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETREAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RETURN",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVENGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVENUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVERSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVIEW",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVOLT",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVOLU",
    "t": [
      "common"
    ]
  },
  {
    "w": "REVOLUTIONARY",
    "t": [
      "hard"
    ]
  },
  {
    "w": "REWARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "RHINO",
    "t": [
      "animals"
    ]
  },
  {
    "w": "RHYTHM",
    "t": [
      "common"
    ]
  },
  {
    "w": "RICE",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "RICH",
    "t": [
      "common"
    ]
  },
  {
    "w": "RID",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIFLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIGHT",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "RIGID",
    "t": [
      "common"
    ]
  },
  {
    "w": "RING",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RISK",
    "t": [
      "common"
    ]
  },
  {
    "w": "RITUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIVAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RIVER",
    "t": [
      "common",
      "kids",
      "nature",
      "geography"
    ]
  },
  {
    "w": "ROAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROBBERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROBOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROCKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROD",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROLL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROMANCE",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "ROOF",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROSES",
    "t": [
      "valentines-day"
    ]
  },
  {
    "w": "ROT",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROUGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROUSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROUTINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "ROYAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUBBER",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUBBISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUG",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "RUIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "RULE",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUMOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUN",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "RUNNER",
    "t": [
      "sports"
    ]
  },
  {
    "w": "RURAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUSH",
    "t": [
      "common"
    ]
  },
  {
    "w": "RUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "SACRED",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "SADDLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAFE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAID",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "SAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAINT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SALAD",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "SALARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SALOON",
    "t": [
      "common"
    ]
  },
  {
    "w": "SALT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SALUTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAMPLE",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "SAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "SANDAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SANE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SANTACLAUS",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "SARTOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SATAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SATIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SATIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SATISFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAUCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAUSAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAVAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAVIOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCARCELY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCARF",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCENE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCHEDULE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCHEME",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCHOLAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCHOOL",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "SCIENCE",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "SCOPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCORN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCORPION",
    "t": [
      "animals"
    ]
  },
  {
    "w": "SCOUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCOUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCRAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCRATCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCREAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCREEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCREW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCRIPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCROLL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SCRUB",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEA",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEARCH",
    "t": [
      "common",
      "homepage"
    ]
  },
  {
    "w": "SEASON",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "SEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SECONDARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SECRET",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "SECTION",
    "t": [
      "common"
    ]
  },
  {
    "w": "SECURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEEK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEGMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEIZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SELDOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SELECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SELF",
    "t": [
      "common"
    ]
  },
  {
    "w": "SELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "SENSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SENSITIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SENTENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEPARATE",
    "t": [
      "common",
      "spelling"
    ]
  },
  {
    "w": "SEQUENCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERENE",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "SERIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERIES",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERIOUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERMON",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERVANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SERVICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SESSION",
    "t": [
      "common"
    ]
  },
  {
    "w": "SETTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEVEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEVERAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEVERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SEXUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHADOW",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "SHAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHALLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHAPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHARE",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "SHARING",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "SHARK",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "SHARP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHATTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHED",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHEEP",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "SHEET",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHELTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHIELD",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHIFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHIRT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOO",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOULD",
    "t": [
      "second-grade"
    ]
  },
  {
    "w": "SHOUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHOWER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHRIMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHRINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHRINK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SHY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIEGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIGN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIGNAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIGNIFICANT",
    "t": [
      "hard"
    ]
  },
  {
    "w": "SIGNIFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SILENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SILK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SILLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SILVER",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "SIMILAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIMPLE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "SINCERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SING",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "SINGLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SINK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIREN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SISTER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIT",
    "t": [
      "kindergarten",
      "first-grade"
    ]
  },
  {
    "w": "SITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SITUATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SIZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKELETON",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "SKETCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKILL",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "SKIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKIRT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SKY",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "SLAB",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLANG",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLEEP",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "SLEEVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLEIGH",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "SLENDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLOTH",
    "t": [
      "animals"
    ]
  },
  {
    "w": "SLOW",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "SLUM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SMALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SMART",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "SMASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SMELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SMILE",
    "t": [
      "common",
      "kids",
      "easy"
    ]
  },
  {
    "w": "SMOKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SMOOTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SNAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SNAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SNEEZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SNIFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "SNOW",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "SNOWMAN",
    "t": [
      "holidays",
      "christmas"
    ]
  },
  {
    "w": "SO",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "SOAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOB",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOCCER",
    "t": [
      "sports"
    ]
  },
  {
    "w": "SOCIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOCIETY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SODA",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOFA",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOFT",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "SOIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLD",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLEMN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLID",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLO",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOLUTION",
    "t": [
      "brain-games"
    ]
  },
  {
    "w": "SOLVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOME",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "SONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "SONGS",
    "t": [
      "holidays"
    ]
  },
  {
    "w": "SOON",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOOTHE",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "SOPHISTICATED",
    "t": [
      "hard"
    ]
  },
  {
    "w": "SORROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SORRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOUL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOUND",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "SOUP",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "SOUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOURCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOUTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SOVEREI",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPACE",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "SPADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPARK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPEAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPECIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPECIES",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPECIFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPEED",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPHERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPICE",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "SPIDER",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "SPILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPIRIT",
    "t": [
      "common",
      "holidays"
    ]
  },
  {
    "w": "SPIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPITE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPLASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPLIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPOIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPOKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPONGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPONSOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPOOKY",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "SPOON",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPOT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPOUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPRAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPREAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPRING",
    "t": [
      "common",
      "holidays",
      "second-grade",
      "easter"
    ]
  },
  {
    "w": "SPUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SPY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SQUARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SQUASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SQUEAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "SQUEEZE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SQUIRREL",
    "t": [
      "animals"
    ]
  },
  {
    "w": "STABLE",
    "t": [
      "common",
      "christmas"
    ]
  },
  {
    "w": "STACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "STADIUM",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "STAFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAR",
    "t": [
      "common",
      "christmas"
    ]
  },
  {
    "w": "STARE",
    "t": [
      "common"
    ]
  },
  {
    "w": "START",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "STARVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STATE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "STATION",
    "t": [
      "common"
    ]
  },
  {
    "w": "STATUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "STAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEADY",
    "t": [
      "common",
      "large-print"
    ]
  },
  {
    "w": "STEAK",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "STEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEEP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEER",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STEREO",
    "t": [
      "common"
    ]
  },
  {
    "w": "STICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "STIFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "STILL",
    "t": [
      "common",
      "relaxing"
    ]
  },
  {
    "w": "STIMULA",
    "t": [
      "common"
    ]
  },
  {
    "w": "STING",
    "t": [
      "common"
    ]
  },
  {
    "w": "STIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "STOCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "STOCKING",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "STONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STOOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STORAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STORE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "STORY",
    "t": [
      "common",
      "kids",
      "seniors"
    ]
  },
  {
    "w": "STOUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "STOVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRAIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRAND",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRANGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRATEGY",
    "t": [
      "brain-games"
    ]
  },
  {
    "w": "STRATEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRAW",
    "t": [
      "common"
    ]
  },
  {
    "w": "STREAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "STREAM",
    "t": [
      "common"
    ]
  },
  {
    "w": "STREET",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "STRENGTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRETCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRICT",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRIKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRING",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRIPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STROKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRUC",
    "t": [
      "common"
    ]
  },
  {
    "w": "STRUGGLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STUBBORN",
    "t": [
      "common"
    ]
  },
  {
    "w": "STUDENT",
    "t": [
      "common",
      "printable"
    ]
  },
  {
    "w": "STUDIO",
    "t": [
      "common"
    ]
  },
  {
    "w": "STUDY",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "STUFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "STUFFING",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "STUMBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "STUMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "STUN",
    "t": [
      "common"
    ]
  },
  {
    "w": "STURDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "STYLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBDUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBJECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBJECTIVE",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "SUBMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBSET",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBSIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBSIDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBSTANCE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBTLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUBURB",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUCCESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUDDEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUFFER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUFFICIE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUGAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUGGEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUICIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SULPHUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUMMAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUMMER",
    "t": [
      "common",
      "holidays",
      "second-grade"
    ]
  },
  {
    "w": "SUMMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUN",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "SUNDAY",
    "t": [
      "common",
      "easter"
    ]
  },
  {
    "w": "SUNLIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUNNY",
    "t": [
      "kids"
    ]
  },
  {
    "w": "SUNRISE",
    "t": [
      "nature"
    ]
  },
  {
    "w": "SUNSET",
    "t": [
      "common",
      "seniors",
      "relaxing"
    ]
  },
  {
    "w": "SUNSHINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPERB",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPPLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPPORT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPPOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUPREME",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURFACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURGERY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURNAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURPASS",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURPLUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURPRISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURRENDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURROUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURVEY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SURVIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUSPECT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUSPEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "SUSTAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWALLOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWAMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWEEP",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWEET",
    "t": [
      "common",
      "valentines-day"
    ]
  },
  {
    "w": "SWELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWIFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWIMMING",
    "t": [
      "sports"
    ]
  },
  {
    "w": "SWING",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWITCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "SWORD",
    "t": [
      "common"
    ]
  },
  {
    "w": "SYMBOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "SYMPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "SYSTEM",
    "t": [
      "common"
    ]
  },
  {
    "w": "TABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TABLET",
    "t": [
      "common"
    ]
  },
  {
    "w": "TACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TACKLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAG",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "TAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAILOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TALE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TALENT",
    "t": [
      "common",
      "brain-games"
    ]
  },
  {
    "w": "TALK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAME",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TANGIBLE",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "TANGLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TANK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TARGET",
    "t": [
      "common"
    ]
  },
  {
    "w": "TARIFF",
    "t": [
      "common"
    ]
  },
  {
    "w": "TASK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TASTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAUGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAX",
    "t": [
      "common"
    ]
  },
  {
    "w": "TAXI",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEA",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEACH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEACHER",
    "t": [
      "printable"
    ]
  },
  {
    "w": "TEAL",
    "t": [
      "colors"
    ]
  },
  {
    "w": "TEAM",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "TEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEASE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TECH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEDDY",
    "t": [
      "common",
      "kids"
    ]
  },
  {
    "w": "TEETH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TELL",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "TEMPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEMPLE",
    "t": [
      "common",
      "bible"
    ]
  },
  {
    "w": "TEMPT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEN",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "TEND",
    "t": [
      "common"
    ]
  },
  {
    "w": "TENDRIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TENNIS",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "TENSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TERM",
    "t": [
      "common"
    ]
  },
  {
    "w": "TERRAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TERROR",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "TEXT",
    "t": [
      "common"
    ]
  },
  {
    "w": "THAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "THANK",
    "t": [
      "common"
    ]
  },
  {
    "w": "THANKFUL",
    "t": [
      "thanksgiving"
    ]
  },
  {
    "w": "THAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "THE",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "THEATER",
    "t": [
      "common"
    ]
  },
  {
    "w": "THEIR",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "THEORY",
    "t": [
      "common",
      "science"
    ]
  },
  {
    "w": "THERE",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "THESE",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "THICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "THIEF",
    "t": [
      "common"
    ]
  },
  {
    "w": "THIGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "THIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "THING",
    "t": [
      "common"
    ]
  },
  {
    "w": "THINK",
    "t": [
      "common"
    ]
  },
  {
    "w": "THINKING",
    "t": [
      "brain-games"
    ]
  },
  {
    "w": "THIRD",
    "t": [
      "common"
    ]
  },
  {
    "w": "THIRST",
    "t": [
      "common"
    ]
  },
  {
    "w": "THIRTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "THIS",
    "t": [
      "common"
    ]
  },
  {
    "w": "THORN",
    "t": [
      "common"
    ]
  },
  {
    "w": "THOSE",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "THOUGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "THOUGHT",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "THREAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "THREAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "THREE",
    "t": [
      "common"
    ]
  },
  {
    "w": "THRIFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "THRILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "THRIVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "THROAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "THRONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "THRONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "THROUGH",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "THROW",
    "t": [
      "common"
    ]
  },
  {
    "w": "THRUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "THUMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "THUNDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "THUS",
    "t": [
      "common"
    ]
  },
  {
    "w": "TICKET",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIGER",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "TIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TILT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIMBER",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIME",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIMID",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TINY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "TIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TISSUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TITLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TO",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "TOAST",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "TOBACCO",
    "t": [
      "common"
    ]
  },
  {
    "w": "TODAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOGETHER",
    "t": [
      "common",
      "second-grade",
      "thanksgiving"
    ]
  },
  {
    "w": "TOIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOKEN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOLERAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOLL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOMATO",
    "t": [
      "common",
      "food"
    ]
  },
  {
    "w": "TOMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "TONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TONGUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TONIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOOTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOPIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "TORCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TORMENT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOSS",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOTAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOUCAN",
    "t": [
      "animals"
    ]
  },
  {
    "w": "TOUCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOUGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOUR",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOWARD",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "TOWEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOWER",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOXIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "TOY",
    "t": [
      "common",
      "kindergarten"
    ]
  },
  {
    "w": "TRACE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRACK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRACT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRADE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRADITION",
    "t": [
      "holidays"
    ]
  },
  {
    "w": "TRAGEDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRAIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRAIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRAMP",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRANQUIL",
    "t": [
      "relaxing"
    ]
  },
  {
    "w": "TRANS",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRANSFORMATION",
    "t": [
      "hard"
    ]
  },
  {
    "w": "TRAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRASH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRAVEL",
    "t": [
      "common",
      "holidays",
      "seniors",
      "geography"
    ]
  },
  {
    "w": "TRAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TREAD",
    "t": [
      "common"
    ]
  },
  {
    "w": "TREASON",
    "t": [
      "common"
    ]
  },
  {
    "w": "TREASURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TREAT",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "TREATS",
    "t": [
      "easter"
    ]
  },
  {
    "w": "TREE",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "TREMBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRENCH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TREND",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRIAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRIBE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRICK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRIFLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRIUMPH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TROOP",
    "t": [
      "common"
    ]
  },
  {
    "w": "TROPHY",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "TROPIC",
    "t": [
      "common"
    ]
  },
  {
    "w": "TROUBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRUCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRUMPET",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRUNK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRUST",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRUTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "TRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUB",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "TUBE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUCK",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUESDAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUFT",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUG",
    "t": [
      "common"
    ]
  },
  {
    "w": "TULIP",
    "t": [
      "common",
      "easter"
    ]
  },
  {
    "w": "TUMBLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUMOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUNE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TUNNEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TURBINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TURKEY",
    "t": [
      "common",
      "thanksgiving"
    ]
  },
  {
    "w": "TURN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TURTLE",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "TWELVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TWENTY",
    "t": [
      "common"
    ]
  },
  {
    "w": "TWIG",
    "t": [
      "common"
    ]
  },
  {
    "w": "TWILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "TWIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "TWIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "TWO",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "TYPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "TYRANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "UGLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "ULTRA",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNABLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNCLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNEQUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNFAIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNIFORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNION",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNIQUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNIVERSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNIVERSITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNKNOWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNLESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "UNPRECEDENTED",
    "t": [
      "hard"
    ]
  },
  {
    "w": "UNTENABLE",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "UNTIL",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "UP",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "UPON",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "UPPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "UPSET",
    "t": [
      "common"
    ]
  },
  {
    "w": "URBAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "URGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "US",
    "t": [
      "kindergarten",
      "first-grade"
    ]
  },
  {
    "w": "USAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "USE",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "USER",
    "t": [
      "common"
    ]
  },
  {
    "w": "USUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "UTILITY",
    "t": [
      "common"
    ]
  },
  {
    "w": "UTMOST",
    "t": [
      "common"
    ]
  },
  {
    "w": "VACANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "VACATION",
    "t": [
      "common"
    ]
  },
  {
    "w": "VAGUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VAIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "VALENTINE",
    "t": [
      "valentines-day"
    ]
  },
  {
    "w": "VALLEY",
    "t": [
      "common",
      "nature",
      "geography"
    ]
  },
  {
    "w": "VALOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "VALUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VALVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VAMPIRE",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "VANILLA",
    "t": [
      "common"
    ]
  },
  {
    "w": "VANISH",
    "t": [
      "common"
    ]
  },
  {
    "w": "VAPOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "VARIETY",
    "t": [
      "common"
    ]
  },
  {
    "w": "VAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "VAULT",
    "t": [
      "common"
    ]
  },
  {
    "w": "VEGETA",
    "t": [
      "common"
    ]
  },
  {
    "w": "VEGGIE",
    "t": [
      "food"
    ]
  },
  {
    "w": "VEHICLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VEIL",
    "t": [
      "common"
    ]
  },
  {
    "w": "VEIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "VELVET",
    "t": [
      "common"
    ]
  },
  {
    "w": "VENDOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "VENOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "VENTURE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VERB",
    "t": [
      "common"
    ]
  },
  {
    "w": "VERDICT",
    "t": [
      "common"
    ]
  },
  {
    "w": "VERGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VERIFY",
    "t": [
      "common"
    ]
  },
  {
    "w": "VERSION",
    "t": [
      "common"
    ]
  },
  {
    "w": "VERY",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "VESSEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "VEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIABLE",
    "t": [
      "common",
      "vocabulary"
    ]
  },
  {
    "w": "VIBRATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VICTIM",
    "t": [
      "common"
    ]
  },
  {
    "w": "VICTORY",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "VIDEO",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIEW",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIGOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "VILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VILLA",
    "t": [
      "common"
    ]
  },
  {
    "w": "VINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIOLATE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIOLET",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "VIRGIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIRTUE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VISION",
    "t": [
      "common"
    ]
  },
  {
    "w": "VISIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "VISUAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "VITAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "VIVID",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOCAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOICE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOLCANO",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOLUME",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOMIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOWEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "VOYAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "VULTURE",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "WAGE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WAGON",
    "t": [
      "common"
    ]
  },
  {
    "w": "WAIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "WAIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WAKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WALK",
    "t": [
      "common"
    ]
  },
  {
    "w": "WALL",
    "t": [
      "common"
    ]
  },
  {
    "w": "WALNUT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WALRUS",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "WANDER",
    "t": [
      "common"
    ]
  },
  {
    "w": "WANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WARM",
    "t": [
      "common"
    ]
  },
  {
    "w": "WARMTH",
    "t": [
      "seniors"
    ]
  },
  {
    "w": "WARN",
    "t": [
      "common"
    ]
  },
  {
    "w": "WARRANT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WARRIOR",
    "t": [
      "common"
    ]
  },
  {
    "w": "WARY",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "WASH",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "WASTE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WATCH",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "WATER",
    "t": [
      "common",
      "kids",
      "second-grade"
    ]
  },
  {
    "w": "WAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WAX",
    "t": [
      "common"
    ]
  },
  {
    "w": "WE",
    "t": [
      "kindergarten"
    ]
  },
  {
    "w": "WEAK",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEALTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEAPON",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEARY",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEATHER",
    "t": [
      "common",
      "second-grade",
      "nature"
    ]
  },
  {
    "w": "WEAVE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEDDING",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEEK",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEEPLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEIGH",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WEIR",
    "t": [
      "common"
    ]
  },
  {
    "w": "WELCOME",
    "t": [
      "common"
    ]
  },
  {
    "w": "WELD",
    "t": [
      "common"
    ]
  },
  {
    "w": "WELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "WERE",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "WEST",
    "t": [
      "common"
    ]
  },
  {
    "w": "WET",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHALE",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "WHAT",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "WHEAT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHEEL",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHEN",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "WHERE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHETHER",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHICH",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "WHILE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHIRL",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHISPER",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHISTLE",
    "t": [
      "common",
      "sports"
    ]
  },
  {
    "w": "WHITE",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "WHOLE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHOLLY",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHOM",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHOSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WHY",
    "t": [
      "first-grade"
    ]
  },
  {
    "w": "WICKED",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIDE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIDOW",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIDTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIFE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WILD",
    "t": [
      "common"
    ]
  },
  {
    "w": "WILL",
    "t": [
      "common"
    ]
  },
  {
    "w": "WILLING",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIN",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIND",
    "t": [
      "common",
      "nature"
    ]
  },
  {
    "w": "WINDOW",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "WINDY",
    "t": [
      "common"
    ]
  },
  {
    "w": "WINE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WING",
    "t": [
      "common"
    ]
  },
  {
    "w": "WINK",
    "t": [
      "common"
    ]
  },
  {
    "w": "WINNER",
    "t": [
      "common"
    ]
  },
  {
    "w": "WINTER",
    "t": [
      "common",
      "holidays",
      "second-grade"
    ]
  },
  {
    "w": "WIPE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIRE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WISDOM",
    "t": [
      "common",
      "seniors",
      "bible"
    ]
  },
  {
    "w": "WISE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WISH",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "WIT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WITCH",
    "t": [
      "common",
      "halloween"
    ]
  },
  {
    "w": "WITH",
    "t": [
      "common"
    ]
  },
  {
    "w": "WITNESS",
    "t": [
      "common"
    ]
  },
  {
    "w": "WIZARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "WOLF",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "WOMAN",
    "t": [
      "common"
    ]
  },
  {
    "w": "WOMB",
    "t": [
      "common"
    ]
  },
  {
    "w": "WONDER",
    "t": [
      "common",
      "christmas"
    ]
  },
  {
    "w": "WOOD",
    "t": [
      "common"
    ]
  },
  {
    "w": "WOOL",
    "t": [
      "common"
    ]
  },
  {
    "w": "WORD",
    "t": [
      "common",
      "easy"
    ]
  },
  {
    "w": "WORK",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "WORKSHEET",
    "t": [
      "printable"
    ]
  },
  {
    "w": "WORKSHOP",
    "t": [
      "christmas"
    ]
  },
  {
    "w": "WORLD",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "WORM",
    "t": [
      "common"
    ]
  },
  {
    "w": "WORRY",
    "t": [
      "common"
    ]
  },
  {
    "w": "WORSE",
    "t": [
      "common"
    ]
  },
  {
    "w": "WORSHIP",
    "t": [
      "common"
    ]
  },
  {
    "w": "WORTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "WOULD",
    "t": [
      "common"
    ]
  },
  {
    "w": "WOUND",
    "t": [
      "common"
    ]
  },
  {
    "w": "WRAP",
    "t": [
      "common"
    ]
  },
  {
    "w": "WRATH",
    "t": [
      "common"
    ]
  },
  {
    "w": "WREATH",
    "t": [
      "common",
      "christmas"
    ]
  },
  {
    "w": "WRECK",
    "t": [
      "common"
    ]
  },
  {
    "w": "WRIGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "WRIST",
    "t": [
      "common"
    ]
  },
  {
    "w": "WRITE",
    "t": [
      "common",
      "second-grade"
    ]
  },
  {
    "w": "WRONG",
    "t": [
      "common"
    ]
  },
  {
    "w": "WROUGHT",
    "t": [
      "common"
    ]
  },
  {
    "w": "YARD",
    "t": [
      "common"
    ]
  },
  {
    "w": "YARN",
    "t": [
      "common"
    ]
  },
  {
    "w": "YAWN",
    "t": [
      "common"
    ]
  },
  {
    "w": "YEAR",
    "t": [
      "common"
    ]
  },
  {
    "w": "YEAST",
    "t": [
      "common"
    ]
  },
  {
    "w": "YELL",
    "t": [
      "common"
    ]
  },
  {
    "w": "YELLOW",
    "t": [
      "common",
      "colors"
    ]
  },
  {
    "w": "YESTERDAY",
    "t": [
      "common"
    ]
  },
  {
    "w": "YIELD",
    "t": [
      "common"
    ]
  },
  {
    "w": "YOKE",
    "t": [
      "common"
    ]
  },
  {
    "w": "YOUNG",
    "t": [
      "common"
    ]
  },
  {
    "w": "YOUR",
    "t": [
      "common",
      "first-grade"
    ]
  },
  {
    "w": "YOUTH",
    "t": [
      "common"
    ]
  },
  {
    "w": "ZEAL",
    "t": [
      "common"
    ]
  },
  {
    "w": "ZEALOUS",
    "t": [
      "vocabulary"
    ]
  },
  {
    "w": "ZEBRA",
    "t": [
      "common",
      "animals"
    ]
  },
  {
    "w": "ZERO",
    "t": [
      "common"
    ]
  },
  {
    "w": "ZOMBIE",
    "t": [
      "halloween"
    ]
  },
  {
    "w": "ZONE",
    "t": [
      "common"
    ]
  },
  {
    "w": "ZOO",
    "t": [
      "common"
    ]
  }
];
