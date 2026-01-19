import { seedFromString } from "./rng";
import { normalizeWords } from "./words";

export type ThemeCategory =
  | "education"
  | "holiday"
  | "animals"
  | "nature"
  | "audience"
  | "difficulty"
  | "lifestyle";

export type ThemeAudience = "kids" | "adults" | "seniors" | null;

export type ThemeDifficulty = "easy" | "medium" | "hard";

export type ThemedPageConfig = {
  slug: string;
  name: string;
  title: string;
  description: string;
  gridSize: number;
  allowDiagonal: boolean;
  allowBackwards: boolean;
  words: string[];
  intro: string[];
  whoThisFor: string[];
  siblingSlugs: string[];
  // New SEO metadata fields
  category: ThemeCategory;
  audience: ThemeAudience;
  tags: string[];
  difficultyDefault: ThemeDifficulty;
};

type ThemedPageRaw = Omit<ThemedPageConfig, "words"> & {
  words: string[];
};

const RAW_THEMED_PAGES: ThemedPageRaw[] = [
  // ============================================
  // EXISTING THEMES (Updated with new metadata)
  // ============================================
  {
    slug: "animals",
    name: "Animals",
    title: "Animal Word Search Puzzles",
    description:
      "Play animal word search puzzles free online. The grids mix pets, zoo animals, and wildlife vocabulary for fast play or printable worksheets.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "lion", "tiger", "elephant", "giraffe", "zebra", "otter",
      "panda", "koala", "dolphin", "penguin", "rabbit", "whale", "hawk",
    ],
    intro: [
      "Play animal word search puzzles with friendly pets and curious wildlife right in your browser.",
      "Generate a new grid instantly or print a worksheet for classrooms, clubs, or animal lovers looking for a quick, themed challenge.",
    ],
    whoThisFor: [
      "Parents planning pet or wildlife activities",
      "Classroom centers covering animals and habitats",
      "Zoo volunteers and after-school clubs",
    ],
    siblingSlugs: ["kids", "nature", "food"],
    category: "animals",
    audience: null,
    tags: ["wildlife", "pets", "zoo", "nature"],
    difficultyDefault: "medium",
  },
  {
    slug: "kids",
    name: "Kids",
    title: "Kids Word Search Puzzles",
    description:
      "Easy-to-read kids word searches with bright words, short grids, and beginner-friendly directions. Play online or print for storytime and classrooms.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "ball", "story", "smile", "learn", "friend", "crayon",
      "play", "music", "giggle", "jump", "share", "color", "teddy", "lunch",
    ],
    intro: [
      "Kids word search puzzles keep the letters large and the vocabulary simple so children stay engaged from start to finish.",
      "Instantly refresh the grid, print a worksheet, or send the link to classmates for a quick, joyful activity.",
    ],
    whoThisFor: [
      "Elementary teachers prepping literacy or center rotations",
      "Parents who need a calm, screen-based activity",
      "Daycare staff and homeschool families looking for structured play",
    ],
    siblingSlugs: ["kindergarten", "easy", "colors"],
    category: "education",
    audience: "kids",
    tags: ["children", "simple", "beginner", "classroom"],
    difficultyDefault: "easy",
  },
  {
    slug: "holidays",
    name: "Holidays",
    title: "Holiday Word Search Puzzles",
    description:
      "Celebrate the season with holiday word search puzzles that highlight traditions, parties, and seasonal words. Suitable for classrooms, parties, and family time.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "holiday", "celebrate", "family", "lights", "cheer", "gift",
      "snowman", "reindeer", "tradition", "parade", "ornament", "travel", "candy", "joy",
    ],
    intro: [
      "Holiday word search puzzles keep seasonal words front and center so every game feels timely and festive.",
      "Use the generator to refresh the board, print a worksheet for the next party, or share the page as a cheerful activity for friends and students.",
    ],
    whoThisFor: [
      "Party hosts crafting low-prep games",
      "Teachers planning seasonal lessons",
      "Families who want themed puzzles for the holidays",
    ],
    siblingSlugs: ["christmas", "halloween", "thanksgiving"],
    category: "holiday",
    audience: null,
    tags: ["seasonal", "celebration", "festive", "party"],
    difficultyDefault: "medium",
  },
  {
    slug: "easy",
    name: "Easy",
    title: "Easy Word Search Puzzles",
    description:
      "Easy word search puzzles with a smaller grid, straight lines, and shorter words for beginners or anyone who wants a relaxing round.",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "puzzle", "calm", "focus", "letters", "grid", "word",
      "play", "happy", "relax", "rest", "smile", "learn",
    ],
    intro: [
      "Easy word searches are slow-paced puzzles with generous spacing and simple words.",
      "Perfect for seniors, new players, or anyone who prefers a low-pressure session before jumping into more challenging themes.",
    ],
    whoThisFor: [
      "Seniors and retirement communities",
      "New or returning players who want a gentle entry point",
      "ESL learners and reading groups that need short vocab",
    ],
    siblingSlugs: ["kids", "large-print", "relaxing"],
    category: "difficulty",
    audience: null,
    tags: ["beginner", "simple", "relaxing", "accessible"],
    difficultyDefault: "easy",
  },
  {
    slug: "large-print",
    name: "Large Print",
    title: "Large Print Word Search Puzzles",
    description:
      "Large print word searches with spacious grids and bold letters for better readability. Print, share, or play online with high-contrast text.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "large", "print", "letters", "bold", "clear", "easy",
      "calm", "comfort", "slow", "steady", "focus", "bright",
    ],
    intro: [
      "Large print word search puzzles boost readability with generous spacing and crisp letters.",
      "They are ideal for care centers, therapy groups, or any player who wants a roomy grid that feels comfortable on the eyes.",
    ],
    whoThisFor: [
      "Vision-impaired players and seniors",
      "Caregivers and activity directors at senior centers",
      "Clubs that want accessible group puzzles",
    ],
    siblingSlugs: ["easy", "seniors", "relaxing"],
    category: "audience",
    audience: "seniors",
    tags: ["accessible", "vision", "senior", "readable"],
    difficultyDefault: "easy",
  },

  // ============================================
  // TIER 1: EDUCATION THEMES
  // ============================================
  {
    slug: "kindergarten",
    name: "Kindergarten",
    title: "Kindergarten Word Search Puzzles",
    description:
      "Free kindergarten word search puzzles with simple 3-5 letter words. Perfect for early readers learning to recognize letters and basic vocabulary.",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "cat", "dog", "sun", "mom", "dad", "red",
      "blue", "one", "two", "big", "run", "hop",
    ],
    intro: [
      "Kindergarten word searches use short, familiar words that young learners can recognize and find with confidence.",
      "Print these puzzles for circle time, send home for practice, or let little ones play right on the screen.",
    ],
    whoThisFor: [
      "Kindergarten teachers building literacy centers",
      "Parents supporting early reading at home",
      "Preschool programs introducing letter recognition",
    ],
    siblingSlugs: ["kids", "first-grade", "colors"],
    category: "education",
    audience: "kids",
    tags: ["preschool", "early-reader", "simple", "classroom"],
    difficultyDefault: "easy",
  },
  {
    slug: "first-grade",
    name: "First Grade",
    title: "First Grade Word Search Puzzles",
    description:
      "First grade word search puzzles featuring sight words and beginner vocabulary. Free online play and printable worksheets for classroom use.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "the", "and", "said", "have", "come", "some",
      "what", "when", "there", "your", "were", "about",
    ],
    intro: [
      "First grade word searches focus on sight words that students encounter every day in reading and writing.",
      "Use these puzzles as morning work, literacy stations, or take-home practice sheets.",
    ],
    whoThisFor: [
      "First grade teachers reinforcing sight words",
      "Parents supplementing reading instruction",
      "Tutors working with early elementary students",
    ],
    siblingSlugs: ["kindergarten", "second-grade", "spelling"],
    category: "education",
    audience: "kids",
    tags: ["sight-words", "elementary", "classroom", "reading"],
    difficultyDefault: "easy",
  },
  {
    slug: "second-grade",
    name: "Second Grade",
    title: "Second Grade Word Search Puzzles",
    description:
      "Second grade word search puzzles with grade-appropriate vocabulary. Free printable and online puzzles for classroom activities and homework.",
    gridSize: 12,
    allowDiagonal: true,
    allowBackwards: false,
    words: [
      "because", "friend", "people", "please", "school", "should",
      "always", "before", "around", "together", "thought", "through",
    ],
    intro: [
      "Second grade word searches introduce longer words and diagonal directions to build searching skills.",
      "Great for independent work time, homework packets, or enrichment activities.",
    ],
    whoThisFor: [
      "Second grade teachers creating vocabulary practice",
      "Homeschool families teaching spelling",
      "After-school programs needing engaging activities",
    ],
    siblingSlugs: ["first-grade", "spelling", "vocabulary"],
    category: "education",
    audience: "kids",
    tags: ["elementary", "vocabulary", "classroom", "homework"],
    difficultyDefault: "easy",
  },
  {
    slug: "spelling",
    name: "Spelling",
    title: "Spelling Word Search Puzzles",
    description:
      "Spelling word search puzzles to practice commonly misspelled words. Free online and printable puzzles for students of all ages.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "receive", "believe", "separate", "necessary", "occurrence", "accommodate",
      "definitely", "occasionally", "environment", "beginning", "immediately", "conscience",
    ],
    intro: [
      "Spelling word searches turn tricky words into a fun game, helping students visualize correct letter patterns.",
      "Use these puzzles before spelling tests or as enrichment for confident spellers.",
    ],
    whoThisFor: [
      "Teachers preparing students for spelling bees",
      "Parents helping with homework",
      "Students who want extra spelling practice",
    ],
    siblingSlugs: ["vocabulary", "second-grade", "hard"],
    category: "education",
    audience: null,
    tags: ["spelling-bee", "vocabulary", "practice", "learning"],
    difficultyDefault: "medium",
  },
  {
    slug: "vocabulary",
    name: "Vocabulary",
    title: "Vocabulary Word Search Puzzles",
    description:
      "Build vocabulary with word search puzzles featuring SAT prep words, academic terms, and advanced vocabulary. Free to play online or print.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "benevolent", "pragmatic", "eloquent", "resilient", "meticulous", "ambiguous",
      "profound", "arbitrary", "coherent", "diligent", "empirical", "fallacy",
    ],
    intro: [
      "Vocabulary word searches expose players to advanced words in a low-stakes, engaging format.",
      "Ideal for SAT prep, ESL learners, or anyone who loves expanding their word knowledge.",
    ],
    whoThisFor: [
      "High school students preparing for standardized tests",
      "ESL learners building English vocabulary",
      "Word enthusiasts who enjoy learning new terms",
    ],
    siblingSlugs: ["spelling", "hard", "brain-games"],
    category: "education",
    audience: "adults",
    tags: ["SAT", "academic", "advanced", "learning"],
    difficultyDefault: "hard",
  },

  // ============================================
  // TIER 2: HOLIDAY THEMES
  // ============================================
  {
    slug: "christmas",
    name: "Christmas",
    title: "Christmas Word Search Puzzles",
    description:
      "Free Christmas word search puzzles with festive holiday vocabulary. Play online or print worksheets for classrooms, parties, and family fun.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "snowman", "sleigh", "carol", "gingerbread", "stocking", "evergreen",
      "candle", "reindeer", "northpole", "jingle", "ornament", "mistletoe",
    ],
    intro: [
      "Christmas word searches bring the magic of the season into every puzzle, with words from carols, traditions, and winter fun.",
      "Perfect for holiday parties, classroom celebrations, or quiet moments by the fire.",
    ],
    whoThisFor: [
      "Teachers planning December activities",
      "Party hosts needing quick holiday games",
      "Families looking for screen-free fun",
    ],
    siblingSlugs: ["holidays", "thanksgiving", "easter"],
    category: "holiday",
    audience: null,
    tags: ["winter", "festive", "december", "seasonal"],
    difficultyDefault: "medium",
  },
  {
    slug: "halloween",
    name: "Halloween",
    title: "Halloween Word Search Puzzles",
    description:
      "Spooky Halloween word search puzzles with monsters, costumes, and trick-or-treat vocabulary. Free online play and printable worksheets.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "witch", "ghost", "vampire", "pumpkin", "skeleton", "spider",
      "costume", "haunted", "monster", "zombie", "candy", "lantern",
    ],
    intro: [
      "Halloween word searches are packed with spooky vocabulary that makes October puzzles extra fun.",
      "Use them for classroom parties, trick-or-treat downtime, or family game nights.",
    ],
    whoThisFor: [
      "Teachers decorating October lesson plans",
      "Parents hosting Halloween parties",
      "Kids who love all things spooky",
    ],
    siblingSlugs: ["holidays", "christmas", "thanksgiving"],
    category: "holiday",
    audience: null,
    tags: ["spooky", "october", "scary", "seasonal"],
    difficultyDefault: "medium",
  },
  {
    slug: "thanksgiving",
    name: "Thanksgiving",
    title: "Thanksgiving Word Search Puzzles",
    description:
      "Thanksgiving word search puzzles celebrating gratitude, harvest, and family gatherings. Free to play online or print for the dinner table.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "turkey", "grateful", "harvest", "pilgrim", "cornucopia", "feast",
      "autumn", "pumpkin", "thankful", "family", "blessing", "gather",
    ],
    intro: [
      "Thanksgiving word searches celebrate the season of gratitude with words about food, family, and fall traditions.",
      "Print puzzles for the kids' table or play together while the turkey roasts.",
    ],
    whoThisFor: [
      "Families hosting Thanksgiving dinner",
      "Teachers preparing November lessons",
      "Anyone who loves autumn vocabulary",
    ],
    siblingSlugs: ["holidays", "halloween", "christmas"],
    category: "holiday",
    audience: null,
    tags: ["autumn", "november", "gratitude", "seasonal"],
    difficultyDefault: "medium",
  },
  {
    slug: "valentines-day",
    name: "Valentine's Day",
    title: "Valentine's Day Word Search Puzzles",
    description:
      "Valentine's Day word search puzzles with love, friendship, and heart-themed vocabulary. Free printable worksheets and online play.",
    gridSize: 12,
    allowDiagonal: true,
    allowBackwards: false,
    words: [
      "heart", "love", "friend", "candy", "roses", "cupid",
      "sweet", "card", "hug", "kiss", "pink", "romance",
    ],
    intro: [
      "Valentine's Day word searches spread love with vocabulary about friendship, hearts, and sweet treats.",
      "Perfect for classroom exchanges, party activities, or a quiet puzzle with someone special.",
    ],
    whoThisFor: [
      "Teachers planning February activities",
      "Parents hosting Valentine parties",
      "Couples looking for cute puzzles together",
    ],
    siblingSlugs: ["holidays", "easter", "kids"],
    category: "holiday",
    audience: null,
    tags: ["february", "love", "friendship", "seasonal"],
    difficultyDefault: "easy",
  },
  {
    slug: "easter",
    name: "Easter",
    title: "Easter Word Search Puzzles",
    description:
      "Easter word search puzzles with spring, bunnies, and celebration vocabulary. Free online play and printable worksheets for all ages.",
    gridSize: 12,
    allowDiagonal: true,
    allowBackwards: false,
    words: [
      "bunny", "eggs", "spring", "basket", "chick", "tulip",
      "bloom", "hunt", "pastel", "jelly", "garden", "sunday",
    ],
    intro: [
      "Easter word searches hop into spring with words about bunnies, eggs, and blooming gardens.",
      "Great for egg hunt breaks, Sunday school activities, or springtime classroom fun.",
    ],
    whoThisFor: [
      "Families celebrating Easter",
      "Sunday school teachers",
      "Spring party planners",
    ],
    siblingSlugs: ["holidays", "valentines-day", "nature"],
    category: "holiday",
    audience: null,
    tags: ["spring", "april", "celebration", "seasonal"],
    difficultyDefault: "easy",
  },

  // ============================================
  // TIER 3: EVERGREEN FUN THEMES
  // ============================================
  {
    slug: "food",
    name: "Food",
    title: "Food Word Search Puzzles",
    description:
      "Delicious food word search puzzles featuring cooking, ingredients, and cuisine vocabulary. Free to play online or print for classroom fun.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "pasta", "pizza", "salad", "bread", "cheese", "soup",
      "spice", "noodle", "tomato", "baker", "recipe", "kitchen",
    ],
    intro: [
      "Food word searches serve up tasty vocabulary from kitchens, restaurants, and cuisines around the world.",
      "Perfect for cooking classes, nutrition lessons, or anyone who loves food-themed puzzles.",
    ],
    whoThisFor: [
      "Culinary arts teachers",
      "Home economics classrooms",
      "Food lovers who enjoy word games",
    ],
    siblingSlugs: ["animals", "nature", "holidays"],
    category: "lifestyle",
    audience: null,
    tags: ["cooking", "cuisine", "kitchen", "tasty"],
    difficultyDefault: "medium",
  },
  {
    slug: "sports",
    name: "Sports",
    title: "Sports Word Search Puzzles",
    description:
      "Sports word search puzzles featuring athletics, games, and competition vocabulary. Free online play and printable worksheets.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "soccer", "basketball", "baseball", "football", "tennis", "golf",
      "hockey", "swimming", "runner", "stadium", "coach", "trophy",
    ],
    intro: [
      "Sports word searches score big with vocabulary from fields, courts, and arenas around the world.",
      "Great for PE classes, sports camps, or fans who love game-day puzzles.",
    ],
    whoThisFor: [
      "Physical education teachers",
      "Sports camp counselors",
      "Athletes and sports fans",
    ],
    siblingSlugs: ["hard", "brain-games", "animals"],
    category: "lifestyle",
    audience: null,
    tags: ["athletics", "games", "competition", "active"],
    difficultyDefault: "medium",
  },
  {
    slug: "nature",
    name: "Nature",
    title: "Nature Word Search Puzzles",
    description:
      "Nature word search puzzles with outdoor, environment, and wildlife vocabulary. Free to play online or print for science class.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "forest", "mountain", "river", "ocean", "meadow", "canyon",
      "desert", "glacier", "valley", "sunrise", "weather", "season",
    ],
    intro: [
      "Nature word searches connect you to the outdoors with vocabulary about landscapes, weather, and ecosystems.",
      "Perfect for science classes, outdoor education, or nature enthusiasts.",
    ],
    whoThisFor: [
      "Science teachers covering ecosystems",
      "Outdoor education programs",
      "Nature lovers and hikers",
    ],
    siblingSlugs: ["animals", "easter", "relaxing"],
    category: "nature",
    audience: null,
    tags: ["outdoors", "environment", "ecology", "earth"],
    difficultyDefault: "medium",
  },
  {
    slug: "colors",
    name: "Colors",
    title: "Colors Word Search Puzzles",
    description:
      "Colors word search puzzles for young learners featuring primary, secondary, and rainbow vocabulary. Free printable and online play.",
    gridSize: 10,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "red", "blue", "green", "yellow", "orange", "purple",
      "pink", "brown", "black", "white", "gray", "rainbow",
    ],
    intro: [
      "Colors word searches help young learners recognize and spell color names in a fun, interactive way.",
      "Great for art class, preschool, or any activity where colors take center stage.",
    ],
    whoThisFor: [
      "Preschool and kindergarten teachers",
      "Art instructors",
      "Parents teaching colors at home",
    ],
    siblingSlugs: ["kindergarten", "kids", "easy"],
    category: "education",
    audience: "kids",
    tags: ["art", "preschool", "simple", "rainbow"],
    difficultyDefault: "easy",
  },

  // ============================================
  // TIER 4: AUDIENCE-SPECIFIC THEMES
  // ============================================
  {
    slug: "seniors",
    name: "Seniors",
    title: "Word Search Puzzles for Seniors",
    description:
      "Word search puzzles designed for seniors with large letters, simple vocabulary, and relaxing gameplay. Free online and printable.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "garden", "family", "music", "sunset", "peace", "memory",
      "wisdom", "gentle", "story", "comfort", "friend", "nature",
    ],
    intro: [
      "Word searches for seniors feature large, readable letters and calming vocabulary for a relaxing puzzle experience.",
      "Ideal for care facilities, senior centers, or quiet time at home.",
    ],
    whoThisFor: [
      "Senior center activity directors",
      "Caregivers planning cognitive activities",
      "Seniors who enjoy daily puzzles",
    ],
    siblingSlugs: ["large-print", "easy", "relaxing"],
    category: "audience",
    audience: "seniors",
    tags: ["accessible", "calm", "memory", "gentle"],
    difficultyDefault: "easy",
  },
  {
    slug: "hard",
    name: "Hard",
    title: "Hard Word Search Puzzles",
    description:
      "Challenging hard word search puzzles with large grids, long words, and diagonal/backwards directions. Test your skills free online.",
    gridSize: 18,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "accomplishment", "extraordinary", "sophisticated", "enthusiastic", "determination", "consciousness",
      "philosophical", "unprecedented", "approximately", "infrastructure", "comprehensive", "revolutionary",
    ],
    intro: [
      "Hard word searches push your skills with oversized grids, lengthy words, and every direction enabled.",
      "Perfect for puzzle veterans who want a real challenge.",
    ],
    whoThisFor: [
      "Experienced puzzle solvers",
      "Competitive word search fans",
      "Anyone who wants to test their limits",
    ],
    siblingSlugs: ["vocabulary", "brain-games", "spelling"],
    category: "difficulty",
    audience: "adults",
    tags: ["challenging", "expert", "advanced", "competitive"],
    difficultyDefault: "hard",
  },
  {
    slug: "brain-games",
    name: "Brain Games",
    title: "Brain Games Word Search Puzzles",
    description:
      "Brain games word search puzzles for cognitive exercise and mental fitness. Keep your mind sharp with free online puzzles.",
    gridSize: 14,
    allowDiagonal: true,
    allowBackwards: true,
    words: [
      "memory", "focus", "logic", "puzzle", "thinking", "pattern",
      "problem", "solution", "challenge", "mental", "cognitive", "exercise",
    ],
    intro: [
      "Brain games word searches combine fun with mental exercise, keeping your mind active and engaged.",
      "Perfect for daily cognitive workouts or anyone who believes puzzles keep the brain young.",
    ],
    whoThisFor: [
      "Adults seeking cognitive exercise",
      "Seniors maintaining mental fitness",
      "Anyone who enjoys brain training",
    ],
    siblingSlugs: ["hard", "vocabulary", "seniors"],
    category: "audience",
    audience: "adults",
    tags: ["cognitive", "mental", "fitness", "training"],
    difficultyDefault: "medium",
  },
  {
    slug: "relaxing",
    name: "Relaxing",
    title: "Relaxing Word Search Puzzles",
    description:
      "Relaxing word search puzzles with calming vocabulary and gentle gameplay. Unwind with free online puzzles or printable worksheets.",
    gridSize: 12,
    allowDiagonal: false,
    allowBackwards: false,
    words: [
      "calm", "peace", "gentle", "quiet", "serene", "tranquil",
      "breeze", "sunset", "harmony", "comfort", "soothe", "rest",
    ],
    intro: [
      "Relaxing word searches offer a peaceful escape with calming words and easy-going gameplay.",
      "Perfect for winding down, stress relief, or a quiet moment before bed.",
    ],
    whoThisFor: [
      "Anyone needing stress relief",
      "People who enjoy mindful activities",
      "Those seeking screen time that calms",
    ],
    siblingSlugs: ["easy", "seniors", "nature"],
    category: "lifestyle",
    audience: null,
    tags: ["calm", "peaceful", "stress-relief", "mindful"],
    difficultyDefault: "easy",
  },
];

export const THEMED_PAGES = RAW_THEMED_PAGES.map((page) => ({
  ...page,
  words: normalizeWords(page.words, page.gridSize),
}));

export function getThemedPageBySlug(slug: string) {
  return THEMED_PAGES.find((page) => page.slug === slug);
}

export function getThemedPageSeed(slug: string) {
  return seedFromString(`themed-page-${slug}`);
}

export function getThemedPageSlugs() {
  return THEMED_PAGES.map((page) => page.slug);
}

export function getRelatedThemes(slug: string, limit: number = 6) {
  const current = getThemedPageBySlug(slug);
  if (!current) return [];

  // First, use sibling slugs
  const related = current.siblingSlugs
    .map(getThemedPageBySlug)
    .filter((t): t is ThemedPageConfig => t !== undefined);

  // If not enough, add themes from same category
  if (related.length < limit) {
    const sameCategory = THEMED_PAGES.filter(
      (t) => t.category === current.category && t.slug !== slug && !current.siblingSlugs.includes(t.slug)
    );
    related.push(...sameCategory.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}
