// FINAL 

const general = { char: "Beelzebub", health: '10000', prejump: '4F', backdash: '26F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'All',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['l'],
  description: "Average c.L, good for pressure.\nVery solid jab, plus on block, combos into itself, 2L, and also c.M on crouchers. c.L > walk throw and c.L > walk c.L are strong options on block."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'All',
  startup: '6',
  active: '3',
  recovery: '12',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "Very short reach horizontally and vertically.\nBetter starter than c.L but worse frame advantage makes it a rather underwhelming pressure tool. Combos into c.L on crouchers."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '800,200x2',
  guard: 'All',
  startup: '10',
  active: '6',
  recovery: '19',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
  description: "One of Bubs' best combo starters.\nHigh damage juggle filler.\nMostly used for punishes and combos. Decent frame advantage but worse than c.L or even c.M."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '200, 150',
  guard: 'All',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "If delayed, can frame trap from c.L.\nMoves you forward a good bit allowing for better combo options usually.\nOnly -2 while other XXs are -3.\nXX(2) > 214M is a frame trap.\nIt's an autocombo. c.XX is notable for being one frame better on block than average, but other than that it's pretty standard."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '350',
  guard: 'All',
  startup: '9',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "If delayed, can frame trap from c.L.\nMoves you forward a good bit allowing for better combo options usually.\nOnly -2 while other XXs are -3.\nXX(2) > 214M is a frame trap.\nIt's an autocombo. c.XX is notable for being one frame better on block than average, but other than that it's pretty standard."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'All',
  startup: '6',
  active: '5',
  recovery: '12',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+2',
  clash: '2',
  motion: ['l'],
  description: "Bubs' only light normal that combos into 214L.\nHas trouble reaching crouchers, making it a bad poke overall."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'All',
  startup: '7',
  active: '1,3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '-2',
  clash: '3',
  motion: ['m'],
  description: "Fast startup for its range.\nPretty much as good as it looks.\nSolid poke from further ranges. Always combos into 214H. Combos into 214L if you're close enough and at any range on crouchers."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'All',
  startup: '9',
  active: '4',
  recovery: '22',
  onblock: '-9',
  onhit: '-5',
  oncounterhit: '+3',
  clash: '4',
  motion: ['h'],
  description: "Good long-range anti-air.\nVery good reward on counter hit thanks to 22H.\nSlow startup and somewhat short hitbox against grounded opponents make it a bad poke and whiff punish tool. Has 3 points it can hit. point blank 10 frame startup, midrange 12 frame startup, and the most common range it will be hit or blocked will be 14 frame startup. because of this more often than not it will be -12 on block and -8 on hit"
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Low',
  startup: '5',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['2', 'l'],
  description: "Decent reach for a 2L.\nStrong pressure and confirm tool.\n2L > 2L, 2L > c.L and 2L > 2M are frame traps. 2L > 2M and 2L > c.M combo on crouchers, making it a good confirm if you're not in range for c.L anymore."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'All',
  startup: '6',
  active: '5',
  recovery: '13',
  onblock: '-3',
  onhit: 'KD',
  oncounterhit: 'KD(+6)',
  clash: '2',
  motion: ['2', 'm'],
  description: "Great range for the startup.\nLots of active frames and disjointed towards the later parts of the move.\nGreat poke, but slightly lower range than f.M. Ending a blockstring with 2M leaves you safe and in a good position to special cancel. Always combos into 214H. Combos into 214L if you're close enough and at any range on crouchers."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'All',
  startup: '11',
  active: '6[3,3]',
  recovery: '23',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "Hits in the back too.\nVery vertical but poor horizontal reach, the latter being better covered by f.H.\nBubs' primary anti-air with a massive hitbox, combos into 22L/H on counter hit, and without counter hit at very low heights. Used to combo into 22L/H during corner juggles."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '10',
  active: '6',
  recovery: '20',
  onblock: '-11',
  onhit: 'HKD(+44)',
  oncounterhit: 'HKD(+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Sets up for a safejump: on a grounded opponent 2U > regular jump forward + button/ during juggles 2U > super jump forward + button."
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '400', 
  guard: 'High', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['l'],
  description: "Active until landing.\nUseful during air-to-air scrambles.\nShrinks Bubs' hurtbox pretty well."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'High', 
  startup: '7', 
  active: '6[2,4]', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Does not cross up.\nVery good horizontal reach and active frames, making it your go-to air-to-air poke."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '400, 200x2', 
  guard: 'High', 
  startup: '9', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "3-hit air normal. Once a hit has been blocked, the remaining hits can be blocked low.\nBetter than j.M as a long range jjump-in.\nEasy to confirm into j.214H thanks to the multi hit."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['u'],
  description: "Still good as an air-to-air sometimes.\nBy far Bubs' best jump-in. Somewhat awkward horizontal reach but amazing vertical reach and active frames, making it extremely hard to anti-air. Won't be plus if used at the very crest of its range, requiring a cancel into j.214X to keep being plus."
};

// unique action
const teleport = { 
  moveName: 'Shadowstep', 
  altName: '5U Teleport', 
  damage: '-', 
  guard: '-', 
  startup: '12', 
  active: '13', 
  recovery: '11', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Invul starts at frame 12 and ends on frame 28.\nBubs does a teleport forwards. The distance traveled is fixed, but it's fast enough to be plus after landing a throw or an EX move. A good escape tool out of the corner when properly spaced. Can be punished when reappearing by 5L auto-combo if opponent is at its travelled distance."
};

const groundThrow = { 
  moveName: 'Forward Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+44), +24 after delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "You can run after both throws and meaty the opponent with a 2L.\nForward throw > 5U leaves you at an advantage right next to the opponent at the cost of a sideswitch. Forward throw also leads into a safejump with regular jump + button in the corner."
};

const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+38), 24 after delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "You can run after both throws and meaty the opponent with a 2L.\nBack throw has less frame advantage than forward throw so you can't safejump after that one."
};

const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '6F after landing', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Fast air-to-air leading to a very solid knockdown which lets you dash in and meaty."
};

const uOverhead = { 
  moveName: 'Overhead', 
  altName: 'UOH', 
  damage: '1000', 
  guard: 'High', 
  startup: '26', 
  active: '6', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'u'],
  description: "Dodges low hitboxes very well.\nGood reach.\nPositive if blocked late enough into the active frames.\nOne of the better universal overheads. Extremely high reward on counter hit with c.H. Also useful to counter hit opponents anticipating a throw thanks to its airborne property. You can even combo into it after 22H."
};

// fireballs
const lFireballLvl1 = { 
  moveName: 'L Black Flies Lvl 1', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '18', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 1 feather.\nCan be charged to make it hit twice."
};

const lFireballLvl2 = { 
  moveName: 'L Black Flies Lvl 2', 
  altName: '236L', 
  damage: '800, 100', 
  guard: 'All', 
  startup: '18', 
  active: '18', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 1 feather.\nCan be charged to make it hit twice."
};

const mFireballLvl1 = { 
  moveName: 'M Black Flies Lvl 1', 
  altName: '236M', 
  damage: '900, 100', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 7 feathers stacked vertically dealing 2 hits.\nCan partially charge for 3 hits and fully charge for 5 hits."
};

const mFireballLvl2 = { 
  moveName: 'M Black Flies Lvl 2', 
  altName: '236M', 
  damage: '900, 100x2', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 7 feathers stacked vertically dealing 2 hits.\nCan partially charge for 3 hits and fully charge for 5 hits."
};

const mFireballLvl3 = { 
  moveName: 'M Black Flies Lvl 3', 
  altName: '236M', 
  damage: '900, 100x4', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 7 feathers stacked vertically dealing 2 hits.\nCan partially charge for 3 hits and fully charge for 5 hits."
};

const hFireballLvl1 = { 
  moveName: 'H Black Flies Lvl 1', 
  altName: '236H', 
  damage: '500x2, 100', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '55', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 1 feather dealing 1 hit then 7 feathers stacked vertically dealing 2 hits.\nCan partially charge for 5 hits, and fully charge for 8 hits."
};

const hFireballLvl2 = { 
  moveName: 'H Black Flies Lvl 2', 
  altName: '236H', 
  damage: '500, 100x2, 500, 100x2', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '55', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 1 feather dealing 1 hit then 7 feathers stacked vertically dealing 2 hits.\nCan partially charge for 5 hits, and fully charge for 8 hits."
};

const hFireballLvl3 = { 
  moveName: 'H Black Flies Lvl 3', 
  altName: '236H', 
  damage: '500, 100x2, 500, 100x4', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '55', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Beelzebub's projectile. All versions can be charged and made plus, making it a cornerstone in Bubs' ground pressure game. Having access to plus frames at a distance also helps his poking game, as he can continue pressure with M buttons and f.H while fishing for counterhits.\nFires 1 feather dealing 1 hit then 7 feathers stacked vertically dealing 2 hits.\nCan partially charge for 5 hits, and fully charge for 8 hits."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Langelaan Field', 
  altName: '623L', 
  damage: '1000',
  guard: 'All', 
  startup: '9', 
  active: '6', 
  recovery: '33', 
  onblock: '-23', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Bubs' invincible reversal. Hits all around him but doesn't have much horizontal range in front of him. Has poor speed, smaller hitbox than visual, and very punishable. The field can hit opponents jumping over him, and if it does, it throws the opponent over and in front of him.\nFastest non-EX version."
};
const mUppercut = { 
  moveName: 'M Langelaan Field', 
  altName: '623M', 
  damage: '1000', 
  guard: 'All', 
  startup: '9', 
  active: '2, 3x4, 4', 
  recovery: '34', 
  onblock: '-30', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Bubs' invincible reversal. Hits all around him but doesn't have much horizontal range in front of him. Has poor speed, smaller hitbox than visual, and very punishable. The field can hit opponents jumping over him, and if it does, it throws the opponent over and in front of him.\nDelayed, which has its own upsides and downsides."
};
const hUppercut = { 
  moveName: 'H Langelaan Field', 
  altName: '623H', 
  damage: '1200', 
  guard: 'All', 
  startup: '9', 
  active: '2, 3x5', 
  recovery: '35', 
  onblock: '-30', 
  onhit: 'HKD (+38)',
  oncounterhit: 'HKD (+38)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Bubs' invincible reversal. Hits all around him but doesn't have much horizontal range in front of him. Has poor speed, smaller hitbox than visual, and very punishable. The field can hit opponents jumping over him, and if it does, it throws the opponent over and in front of him.\nAs fast as the L version.\nAir unblockable, which makes it a guaranteed anti-air depending on the opponent's character. Can lead to a corner safejump if you hit the opponent high enough with it."
};

// rekka
const lRekka = { 
  moveName: 'L Chaoscalibur', 
  altName: '214L', 
  damage: '200x2, 600', 
  guard: 'All', 
  startup: '14', 
  active: '4', 
  recovery: '17', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '0',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Bubs' combo filler special. Good to space with and provides a knockdown anywhere.\nHits mid.\nBasic combo ender.\nHits in front of Bubs, great for ending combos and controlling space, chips a surprising amount of health and a good pressure ender since it is safe. Can be rolled through if the opponent is far enough. as well if you 5U after and they backtech or don't tech you are plus."
};

const mRekka = { 
  moveName: 'M Chaoscalibur', 
  altName: '214M', 
  damage: '250, 300, 700', 
  guard: 'Low', 
  startup: '22', 
  active: '6', 
  recovery: '15', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+2',
  clash: '5',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Bubs' combo filler special. Good to space with and provides a knockdown anywhere.\nHits low.\nWall bounces on counterhit.\nA frame trap to be respected thanks to its wallbounce. Safe on block."
};

const hRekka = { 
  moveName: 'H Chaoscalibur', 
  altName: '214H', 
  damage: '200x6', 
  guard: 'Low*3, Mid*3', 
  startup: '16', 
  active: '4', 
  recovery: '15', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+2',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Bubs' combo filler special. Good to space with and provides a knockdown anywhere.\nFastest version.\nHits low.\nWall bounces on hit.\nSafe on block and a combo extender to boot. Bear in mind that using this will also make your divekick go into cooldown."
};

const lVacuum = {
  moveName: "L Wings Bestowed",
  altName: '22L',
  damage: '100',
  guard: '-',
  startup: '16',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "GRAVITY ORB. Pulls grounded opponents towards Bubs, and plus if spaced. Active frames also destroy projectiles, but has to be used preemptively because of its slow startup. Also pulls in aerial opponents in hitstun, so it's good for juggles. This move goes on cooldown for non-EX and EX moves for a period of time as well even if you use the technical inputs. Has about an 5 second cooldown for regular, non-EX input and a 12 second cooldown for EX.\nHits right in front of Bubs and pull from about 1/3 of the screen.\nHas to hit a little late to be plus."
}

const mVacuum = {
  moveName: "M Wings Bestowed",
  altName: '22M',
  damage: '100',
  guard: '-',
  startup: '23',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'm', 'a'],
  description: "GRAVITY ORB. Pulls grounded opponents towards Bubs, and plus if spaced. Active frames also destroy projectiles, but has to be used preemptively because of its slow startup. Also pulls in aerial opponents in hitstun, so it's good for juggles. This move goes on cooldown for non-EX and EX moves for a period of time as well even if you use the technical inputs. Has about an 5 second cooldown for regular, non-EX input and a 12 second cooldown for EX.\nPulls from about 2/3 of the screen.\nHas to hit a little late to be plus."
}

const hVacuum = {
  moveName: "H Wings Bestowed",
  altName: '22H',
  damage: '100',
  guard: '-',
  startup: '13',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'h', 'a'],
  description: "GRAVITY ORB. Pulls grounded opponents towards Bubs, and plus if spaced. Active frames also destroy projectiles, but has to be used preemptively because of its slow startup. Also pulls in aerial opponents in hitstun, so it's good for juggles. This move goes on cooldown for non-EX and EX moves for a period of time as well even if you use the technical inputs. Has about an 5 second cooldown for regular, non-EX input and a 12 second cooldown for EX.\nSame speed as L version and same range as the M version.\nAlways plus on block.\nBe aware that if the grounded opponent happens to have any hitbox active, they can hit you with it as you reel them in. Overall a bad special to throw out, but can turn the tides as a hard callout. Mainly used in combos."
}

const lDivekick = {
  moveName: 'L Unisonic',
  altName: 'j214L',
  damage: '700',
  guard: '-',
  startup: '15',
  active: '6 -> 7',
  recovery: '11',
  onblock: '+1 -> +2',
  onhit: '+2 -> +3',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', 'a'],
  description: 'Mid-hitting divekick. Cooldown is also tied to ground 214X.\nHas to be spaced to leave Bubs at advantage.\nSomewhat fast but reactable, has to be blocked at knee level to be plus.'
}

const mDivekick = {
  moveName: 'M Unisonic',
  altName: 'j214M',
  damage: '700',
  guard: '-',
  startup: '15',
  active: '6 -> 10',
  recovery: '11',
  onblock: '+2 -> +3',
  onhit: '+3 -> +4',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', 'm', 'a'],
  description: 'Mid-hitting divekick. Cooldown is also tied to ground 214X.\nMuch slower than the L version.\nMuch easier to make plus.\nMostly used to bait 2H anti-airs.'
}

const hDivekick = {
  moveName: 'H Unisonic',
  altName: 'j214H',
  damage: '700',
  guard: '-',
  startup: '15',
  active: '6 -> 10',
  recovery: '11',
  onblock: '+1 -> +2',
  onhit: '+2 -> +3',
  oncounterhit: 'HKD(+55)',
  clash: '3',
  motion: ['214', 'h', 'or', 'h', 'a'],
  description: 'Mid-hitting divekick. Cooldown is also tied to ground 214X.\nAlmost always plus.\nVery fast.\nVery solid neutral and combo tool used for whiff punishing and skipping neutral in general. On hit, this dive is automatically Followed with a launching wing slice which can combo into 236236H for big damage in the corner. Can help push opponents into the corner from mid-field.'
}

// skybound art
const sba = { 
  moveName: 'Black Spear', 
  altName: '236236H', 
  damage: '2000-2500', 
  guard: 'All', 
  startup: '11', 
  active: '7', 
  recovery: '32', 
  onblock: '-', 
  onhit: 'HKD (T:+43, S:+33)',
  oncounterhit: 'HKD (T:+43, S:+33)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Can be held for increased damage at close range.\nLeads into okizeme in the corner.\nCan anti-air and catch a jumping opponent, in range of the super being held."
};

const cmdGrabSba = { 
  moveName: 'Anthem', 
  altName: '236236H', 
  damage: '2500-3000', 
  guard: 'All', 
  startup: '13', 
  active: '7', 
  recovery: '32', 
  onblock: '-', 
  onhit: 'HKD (T:+43, S:+33)',
  oncounterhit: 'HKD (T:+43, S:+33)',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
  description: "Command grab super which happens 0 frames post super flash, meaning the opponent cannot jump it on reaction.\nOpponent is absorbed and then carried across the screen.\nBest done after safejumps and dash 2L/c.L.\nInvulnerable and can be used as a very short range reversal the opponent cannot escape post super flash.\nCan be used on your wake-up if opponent is right next to you, is risky."
};

const ssba = { 
  moveName: 'Chaos Legion', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'Throw/All', 
  startup: '13', 
  active: '2,2', 
  recovery: '100', 
  onblock: '-32', 
  onhit: 'HKD (T: +41, S: +31)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Summons forth pillars of thorns from the ground in a linear fashion, starting from close to Bubs and reaching until the end of the screen.\nHits the entire height of the stage.\nSlow and can be dodged, making it a bad reversal.\nOn cinematic hit, leads into okizeme."
};


export const bubzInfo = [
  general,
  closeL,
  closeM,
  closeH,
  auto1,
  auto2,
  far5L,
  far5M,
  far5H,
  n2L,
  n2M,
  n2H,
  n2U,
  jL,
  jM,
  jH,
  jU,
  teleport,
  groundThrow,
  backThrow,
  airThrow,
  uOverhead,
  lFireballLvl1,
  lFireballLvl2,
  mFireballLvl1,
  mFireballLvl2,
  mFireballLvl3,
  hFireballLvl1,
  hFireballLvl2,
  hFireballLvl3,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lVacuum,
  mVacuum,
  hVacuum,
  lDivekick,
  mDivekick,
  hDivekick,
  sba,
  cmdGrabSba,
  ssba
]