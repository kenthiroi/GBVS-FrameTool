// DESCRIPTIONS DONE
// FRAME DATA UNFINISHED 

const general = { char: "Ladiva", health: '11000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['l'],
  description: "With c.L, f.L, and 2L all being tied for your fastest button at 6f, there will be times where Ladiva can't punish specific moves or contest certain frametraps. To compensate, all of them have fantastic range for Light buttons and high frame advantage letting Ladiva pressure on block with strong blockstrings. They make excellent tick throws into command grab as well.\nCan combo into 2U on crouching opponents, CH link into 2U for knockdown on standing, c.M for damage (but try going for 2U for oki)."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '800',
  guard: 'Mid',
  startup: '7',
  active: '1',
  recovery: '14',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "A fast, special cancelable kick with a large downward hitbox. Has farther range than c.L, letting Ladiva get Auto Combo in situations where c.L doesn't come out. With only 1 active frame, Ladiva will not get any extra frame advantage as a meaty, but thanks to it's speed and good hitbox it can be used as a frame trap and will also hit the opponent out of Cross-Over. On block, it's not the worst but anyone with a 5f Light will be able to beat any move that is not invul and Light Headbutt can be interrupted if canceled into it. EX Headbutt works as a frametrap, however. Against 6f moves, Light and EX Screwdriver will beat them.\nOn CH it's +8 on hit, letting Ladiva link into another c.M, f.M, 2M, or 2U."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '12',
  active: '6',
  recovery: '15',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['h'],
  description: "Slow, but very high damage starter. With a high number of active frames and only being -2 on block, it's suitable as a meaty on the opponents wake-up capable of being up to +3 on block if timed correctly, which can lead into an unmashable M SPD in the corner. It can also frametrap into Light Headbutt with only a 2f gap that can be delayed. c.H will, however, not hit Cross-Over.\nOn CH it's at a extremely high +14 on hit, letting Ladiva link into a second c.H or M lariat vs standing opponents for very high damage. It also lets c.H combo into Medium Headbutt for high meterless damage."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '400',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "Primarily only for hit confirming or combos routes that don't use EX specials. If you have no specials available, Ladiva would rather combo into 2U to set up stronger offense. c.X have enough blockstun to make canceling into EX Headbutt be frametrap, and c.XX have enough to make both Light and EX Headbutt a frametrap.\nAuto Combo can mostly be used for utility purposes. Even if it will lessen the damage by small amounts, using Auto Combo can let you buy time to get specials off cooldown if needed."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '400',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "Primarily only for hit confirming or combos routes that don't use EX specials. If you have no specials available, Ladiva would rather combo into 2U to set up stronger offense. c.X have enough blockstun to make canceling into EX Headbutt be frametrap, and c.XX have enough to make both Light and EX Headbutt a frametrap.\nAuto Combo can mostly be used for utility purposes. Even if it will lessen the damage by small amounts, using Auto Combo can let you buy time to get specials off cooldown if needed."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '8',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '2',
  motion: ['l'],
  description: "A fairly long range Light with high + frames. At 6f, it's a valuable tool to check the opponent in neutral, during their pressure, and confirming into 2U vs crouchers gets your offense started. Unlike c.L and 2L, f.L is a lvl 2 normal, which gives it frame advantage on CH and lets it crush other lvl 1 moves. Can be used as a hit confirm into 236236H\nOn CH it's +8 on hit, letting Ladiva link into a f.M, 2M, and 2U even at max range. It can also combo into Light and EX Lariat on CH."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+6',
  clash: '4',
  motion: ['m'],
  description: "A decently fast, long range Medium. One of Ladiva's best normals for poking and whiff punishing. Combos into Light and EX Lariat at any range, as well as EX Headbutt but not on max range. Does not hit Cross-Over.\nWhile not as strong as other more notorious mid range moves, such as Katalina's f.M, it's still a staple and strong move in neutral. What Ladiva truly lacks are specials that are suitable to be canceled into, however. All Lariats can be ducked and won't combo on crouching hit, making them all very punishable, and only EX Headbutt has the range, speed, and frame advantage to make it a strong special to cancel into. Even tho it may not combo on hit at max range, it's still a frametrap if canceled into on block. However, as expected, that means you forgo using Headbutt for a while.\nAs a whiff punish, it's very strong but do make sure you don't cancel into Lariat in case you catch them crouching."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1100',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '8',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['h'],
  description: "Long range but high damage poke with high active frames. Due to slow speed and high hitbox, it's a difficult move to use in neutral and almost impossible to whiff punish with. However, due to it's forward momentum it will almost always combo into Light Headbutt or frame trap into it. Overall, it has more limited uses compared to her other normals.\nIf you manage to land a CH you can link into c.L or c.M (spacing withstanding) for some intense corner carry."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "A good range Light with the same frame advantage as c.L and f.L.\nc.L sees use as a hit confirm and tick throw normal, altho in both aspects it's less effective than the other options. It can only link into itself and other Light normals, and because it's a lvl 1 attack it gains no additional frame advantage on CH.\nHowever due to being a crouching normal you will always get this normal no matter the range giving you some stability in that frame advantage, and it will let you whiff punish or stuff certain moves that Ladiva's other Lights will not hit due to it's lower hitbox. It also hits cross-over 2L."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Low',
  startup: '8',
  active: '5',
  recovery: '12',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['2', 'm'],
  description: "A long range low hitting Medium. Complements f.M in neutral by hitting low and can whiff punish certain attacks and hitboxes that f.M can't hit, at the cost of having slightly shorter range and more whiff recovery.\n2M and f.M are very similar with having same speed, damage, can combo into the same specials, and attack level. Both share similar uses in neutral with small differences to make them cover different angles. 2M is safer on block and hit, and is one of the few moves Ladiva has that can hit Cross-Over. It's also the best option Ladiva has of hitting moves low to the ground, such as Ferry's 2M that f.M can't hit.\nTogether with f.M makes up the bread and butter of Ladiva's neutral and poking game.\nCounter hitting this vs a crouching opponent enables you to combo into 2U."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '600, 500',
  guard: 'Mid',
  startup: '11',
  active: '2,2',
  recovery: '23',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '-4',
  clash: '4',
  motion: ['2', 'h'],
  description: "Two hits\nOn anti-air counter hit, can do 214M from first hit\nDespite the animation, does not launch on grounded hit, but will lift airborne opponents a bit.\nLow profile, can go under some ground attack with high hitbox like her 214X.\nWill force the opponent to stand up on hit"
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '900',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '28',
  onblock: '-19',
  onhit: 'HKD (+36)',
  oncounterhit: 'HKD (+44)',
  clash: '4',
  motion: ['2', 'u'],
  description: "A very fast good range sweep. Ladiva does a dropkick that actually leaves her airborne, meaning on clash she can cancel into air moves.\nAn essential move for Ladiva. Being able to combo into sweep is a valuable tool to have, and is a good start for Ladiva's offense. She can also safe-jump 11f DPs such as Charlotta Holy Ladder and Ferry's DP if you jump immediately after 2U and if it's a counter-hit then you can safe-jump even those 9f DPs. hitting 2U at max range also nets a safejump vs 9f DPs.2U is also a valuable whiff punish as well, and due to it's speed and good range it's very adept at that."
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '500', 
  guard: 'High', 
  startup: '5', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['l'],
  description: "Fastest air normal and the normal with the shortest range. Unlike some other j.L normals it is not active for the entire duration of the jump. Can cross-up.\nj.L sees use the most when you intentionally don't want the opponent to stay in hitstun for long, leaving them open for a regular throw or Screwdriver earlier than what they might expect. It's short range and active frames works to its advantage at times when you intentionally want a jump-in normal to whiff, again leaving the opponent open for a grab or simply want to bait their Anti-Air.\nUnsuitable for air-to-airs however, due to it's aforementioned poor range and it's downward facing hitbox."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '700', 
  guard: 'High', 
  startup: '7', 
  active: '10', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
  description: "A jumping Medium with a very deep hitbox. Has the longest Vertical reach of all Ladiva's jumping normals letting it hit earlier than expected, and also hit Cross-Over where other air normals will whiff.\nClever use of this normal can let Ladiva beat out anti-airs that would normally beat her other jumping normals. In safe-jumps, it also acts as her only jumping normal that can hit wake-up Cross-Over, further reducing their defensive options against her oki."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '900', 
  guard: 'High', 
  startup: '11', 
  active: '8', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '4',
  motion: ['h'],
  description: "Air normal with the longest horizontal reach. Highest damage air normal. Have no cross-up hitbox.\nAs the longest reaching air normal, it acts as Ladiva's best long range jump-in. It's lack of cross-up hitbox works to it's advantage by letting Ladiva fake a cross-up and immediately go for a grab."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'High', 
  startup: '12', 
  active: '16', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '4',
  motion: ['u'],
  description: "The Grappler body splash. Has shorter horizontal reach than j.M. Very strong cross-up hitbox.\nAn essential normal for many reasons. The opposite in function to j.H, this normal is a powerful cross-up and is the normal to condition the opponent to block to make j.L and j.H work as grab mixups. Due to it's poor horizontal reach, it can be used to fake out the opponent believing that you are going for a j.H but instead land and go for something else."
};

// unique action
const throw5U = { 
  moveName: 'Love Grapple', 
  altName: '5U', 
  damage: '1000', 
  guard: 'Throw', 
  startup: '34-40', 
  active: '3', 
  recovery: '32', 
  onblock: 'HKD (+52)', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Ladiva charges forward before performing a command grab on the opponent. Very slow to start.\nDespite the similarities in concept to the classic Running Bear Grab, Ladiva will not grab until the end of the animation.\nCan do a follow-up toss that Ladiva can perform after connecting Love Grapple. M sends the opponent forward, H sends the opponent upward.\nNote that using the M version in or near the corner will actually cause a side-switch, as the opponent will bounce off the wall and then through Ladiva. Pressing nothing or using the H followup will keep the opponent on the same side."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: '+3',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Leaves the opponent standing, right in your face, with you at the advantage. Exactly what you want.\nLvl 0 character knowledge check.\nForms a guessing game between a jab, a low, or another throw."  
};

const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+54)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: "Leads to a superjump safejump if your in the corner, or a dash in meaty(not reversal safe) midscreen. Do 214L into 2L for a safejab anywhere on the screen"
};

const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
};

const uOverhead = { 
  moveName: 'Overhead', 
  altName: 'UOH', 
  damage: '1000', 
  guard: 'High', 
  startup: '26 (OD:24)', 
  active: '6', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'h'],
  description: "Move can hit very high in the air which can be good if opponent is scared of command grabs and the move is air unblockable."
};


//Tactical moves

const tacticalRush = {
  moveName: 'Rush (Normal)',
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '68 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'm', 'h'],
  description: '',
}

const tacticalRushCancel = {
  moveName: 'Rush (Cancel)',
  damage: '-', 
  guard: '-', 
  startup: '8', 
  active: '15', 
  recovery: '20', 
  onblock: '+4', 
  onhit: 'KD (+22)',
  oncounterhit: 'KD (+22)',
  clash: '-',
  motion: ['6', 'm', 'h'],
  description: 'Strike invulnerable on frame 1-22.',
}

const tacticalShift = {
  moveName: 'Back Shift',
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'm', 'h'],
  description: 'Invincible on frame 1-15.',
}

const overdriveActivation = {
  moveName: 'Overdrive',
  damage: '-', 
  guard: 'Unblockable', 
  startup: '26', 
  active: '3', 
  recovery: '33', 
  onblock: '+19', 
  onhit: 'KD (+19)',
  oncounterhit: 'KD (+19)',
  clash: '-',
  motion: ['m', 'h'],
  description: 'Invincible on frame 1-28, counterhit state on frame 29-61.'
}

// SPDs
const lSPD = { 
  moveName: 'L Jewel Resort Screwdriver', 
  altName: '360L', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '6', 
  active: '3', 
  recovery: '38', 
  onblock: '-', 
  onhit: 'HKD (+46)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'l', 'or', 'a'],
  description: "Command grab. Has a farther grab distance and does more damage than Ladiva's regular grab. Using the shortcut input will reduce the damage for all versions by 500. (Note; None of Ladiva's SPDs are throw invuln).\nL version is faster, has less range, and does less damage.\nTaunt follow-ups with L or M on hit, sacrificing some advantage. Working the crowd enables her next SPD to do more damage (200 more on true input and 100 for simple.) Taunts also enable mindgames on wakeup. Doing taunts on an L SPD leaves you minus but sets up a perfect timing for a supergrab. L taunt on M SPD sets up a perfect H meaty. M taunt on M SPD gives you time for a 2m framekill in the corner."
};
const mSPD = { 
  moveName: 'M Jewel Resort Screwdriver', 
  altName: '360M', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '9', 
  active: '3', 
  recovery: '38', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'm', 'or', 'a', 'm'],
  description: "Command grab. Has a farther grab distance and does more damage than Ladiva's regular grab. Using the shortcut input will reduce the damage for all versions by 500. (Note; None of Ladiva's SPDs are throw invuln).\nM version is slower, has more range, and does more damage.\nTaunt follow-ups with L or M on hit, sacrificing some advantage. Working the crowd enables her next SPD to do more damage (200 more on true input and 100 for simple.) Taunts also enable mindgames on wakeup. Doing taunts on an L SPD leaves you minus but sets up a perfect timing for a supergrab. L taunt on M SPD sets up a perfect H meaty. M taunt on M SPD gives you time for a 2m framekill in the corner."
};
const hSPD = { 
  moveName: 'H Jewel Resort Screwdriver', 
  altName: '360H', 
  damage: '3000', 
  guard: 'Throw', 
  startup: '6', 
  active: '3', 
  recovery: '38', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'h', 'or', 'a', 'h'],
  description: "Command grab. Has a farther grab distance and does more damage than Ladiva's regular grab. Using the shortcut input will reduce the damage for all versions by 500. (Note; None of Ladiva's SPDs are throw invuln).\nSimilar reach and startup to the L version, but does the most damage.\nYou can follow up with a immediate foward jump for a safejump with the L version, and whiffed 5L into forward jump for a safejump with the M and H version"
};

const lAirSPD = { 
  moveName: 'L Leg Drop of Adoration', 
  altName: 'j360L', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+46)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'or', 'a'],
  description: "Midair command grab. Has a farther grab range and does more damage than Ladiva's regular air grab.\nUsing the shortcut input will reduce the damage for all versions by 500."
};
const mAirSPD = { 
  moveName: 'M Leg Drop of Adoration', 
  altName: 'j360M', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '9', 
  active: '3', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+56)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'm', 'or', 'a', 'm'],
  description: "Midair command grab. Has a farther grab range and does more damage than Ladiva's regular air grab.\nUsing the shortcut input will reduce the damage for all versions by 500."
};
const hAirSPD = { 
  moveName: 'H Leg Drop of Adoration', 
  altName: 'j360H', 
  damage: '3000', 
  guard: 'Throw', 
  startup: '4', 
  active: '3', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', 'h', 'or', 'a', 'h'],
  description: "Midair command grab. Has a farther grab range and does more damage than Ladiva's regular air grab.\nUsing the shortcut input will reduce the damage for all versions by 500."
};

// ground airthrow
const lAirThrow = { 
  moveName: 'L Devoted Body Slam', 
  altName: '623L', 
  damage: '1500',
  guard: 'Throw', 
  startup: '7', 
  active: '5', 
  recovery: '22', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Ladiva's antiair command grab. Will not work on opponents on the ground, but can be used against an opponent in hitstun who is in the air. Too short to anti-air usually, but can catch jump outs in pressure or work as a combo ender. Using 623L can score combo pickups that 623H cannot."
};
const mAirThrow = { 
  moveName: 'M Devoted Body Slam', 
  altName: '623M', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '12', 
  active: '5', 
  recovery: '22', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Ladiva's antiair command grab. Will not work on opponents on the ground, but can be used against an opponent in hitstun who is in the air. Too short to anti-air usually, but can catch jump outs in pressure or work as a combo ender. Using 623L can score combo pickups that 623H cannot."
};
const hAirThrow = { 
  moveName: 'H Devoted Body Slam', 
  altName: '623H', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '10', 
  active: '5', 
  recovery: '22', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Ladiva's antiair command grab. Will not work on opponents on the ground, but can be used against an opponent in hitstun who is in the air. Too short to anti-air usually, but can catch jump outs in pressure or work as a combo ender. Using 623L can score combo pickups that 623H cannot."
};

// headbutt
const lHeadbutt = {
  moveName: 'L Headbutt of Love', 
  altName: '236L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '18', 
  active: '3', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+3',
  oncounterhit: '+7',
  clash: '3',
  motion: ['236', 'l', 'or', '6', 'a'],
  description: "This attack has the ability to negate projectiles. Rewards you with 15% meter (2% for using headbutt and then 13% for hitting the fireball) (spot dodging is almost always preferred though). The M version is plus on block and gives a combo on hit, making it something the opponent has to look out for as plus frames are very scary against Ladiva. The H version groundbounces and can lead to combo extensions.\nMinus on block.\nLadiva's only non-EX standing combo ender."
};
const mHeadbutt = {
  moveName: 'M Headbutt of Love', 
  altName: '236M', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '28', 
  active: '6', 
  recovery: '11', 
  onblock: '+2', 
  onhit: '+7',
  oncounterhit: '+11',
  clash: '5',
  motion: ['236', 'm', 'or', '6', 'm', 'a'],
  description: "This attack has the ability to negate projectiles. Rewards you with 15% meter (2% for using headbutt and then 13% for hitting the fireball) (spot dodging is almost always preferred though). The M version is plus on block and gives a combo on hit, making it something the opponent has to look out for as plus frames are very scary against Ladiva. The H version groundbounces and can lead to combo extensions.\nPlus on block.\nPressure reset tool. Leaves you plus on block right next to your opponent, exactly what you want."
};
const hHeadbutt = {
  moveName: 'H Headbutt of Love', 
  altName: '236H', 
  damage: '500', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '11', 
  onblock: '+2', 
  onhit: '+12',
  oncounterhit: '+16',
  clash: '5',
  motion: ['236', 'h', 'or', '6', 'h', 'a'],
  description: "This attack has the ability to negate projectiles. Rewards you with 15% meter (2% for using headbutt and then 13% for hitting the fireball) (spot dodging is almost always preferred though). The M version is plus on block and gives a combo on hit, making it something the opponent has to look out for as plus frames are very scary against Ladiva. The H version groundbounces and can lead to combo extensions.\nCan be followed up twice with 6H\nVery plus on hit for the first two headbutts, but progressively less plus on block."
};
const hHeadbutt2 = {
  moveName: 'H Headbutt of Love (2nd hit)', 
  altName: '236H > 6H', 
  damage: '700', 
  guard: 'Mid', 
  startup: '17', 
  active: '6', 
  recovery: '13', 
  onblock: '0', 
  onhit: '+10',
  oncounterhit: '+14',
  clash: '5',
  motion: ['236', 'h', '6', 'h', 'or', '6', 'h', 'a', '6', 'h'],
  description: "This attack has the ability to negate projectiles. Rewards you with 15% meter (2% for using headbutt and then 13% for hitting the fireball) (spot dodging is almost always preferred though). The M version is plus on block and gives a combo on hit, making it something the opponent has to look out for as plus frames are very scary against Ladiva. The H version groundbounces and can lead to combo extensions.\nCan be followed up twice with 6H\nVery plus on hit for the first two headbutts, but progressively less plus on block."
};
const hHeadbutt3 = {
  moveName: 'H Headbutt of Love (3rd hit)', 
  altName: '236H > 6H > 6H', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '17', 
  active: '6', 
  recovery: '15', 
  onblock: '-2', 
  onhit: 'HKD (+32)',
  oncounterhit: 'HKD (+36)',
  clash: '5',
  motion: ['236', 'h', '6', 'h', '6', 'h', 'or', '6', 'h', 'a', '6', 'h', '6', 'h'],
  description: "This attack has the ability to negate projectiles. Rewards you with 15% meter (2% for using headbutt and then 13% for hitting the fireball) (spot dodging is almost always preferred though). The M version is plus on block and gives a combo on hit, making it something the opponent has to look out for as plus frames are very scary against Ladiva. The H version groundbounces and can lead to combo extensions.\nCan be followed up twice with 6H\nVery plus on hit for the first two headbutts, but progressively less plus on block."
};

// rekka
const lRekka = { 
  moveName: 'L Elegant Lariat', 
  altName: '214L', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '21', 
  onblock: '+5', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "An advancing lariat that has the ability to guard crush an opponent who is stand-guarding. Has higher damage and faster startup if done while in the middle of a run. All versions whiff against crouching opponents who are not currently doing an attack.\nIf the M or H version lands, you can link into either 2U or 2M xx SBA when mid-screen, or go into your extended corner combos."
};
const mRekka = { 
  moveName: 'M Elegant Lariat', 
  altName: '214M', 
  damage: '1500', 
  guard: 'Mid', 
  startup: '34', 
  active: '6', 
  recovery: '18', 
  onblock: '+6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a', 'm'],
  description: "An advancing lariat that has the ability to guard crush an opponent who is stand-guarding. Has higher damage and faster startup if done while in the middle of a run. All versions whiff against crouching opponents who are not currently doing an attack.\nIf the M or H version lands, you can link into either 2U or 2M xx SBA when mid-screen, or go into your extended corner combos."
};
const hRekka = { 
  moveName: 'H Elegant Lariat', 
  altName: '214H', 
  damage: '1300', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '21', 
  onblock: '+5', 
  onhit: 'HKD (+62)',
  onhit: 'HKD (+66)',
  clash: '4',
  motion: ['214', 'h', 'or', '4', 'a', 'h'],
  description: "An advancing lariat that has the ability to guard crush an opponent who is stand-guarding. Has higher damage and faster startup if done while in the middle of a run. All versions whiff against crouching opponents who are not currently doing an attack.\nIf the M or H version lands, you can link into either 2U or 2M xx SBA when mid-screen, or go into your extended corner combos."
};

// skybound art
const sba = { 
  moveName: 'Maximum Love Bomb (Strike)', 
  altName: '236236H', 
  damage: '3300-3600', 
  guard: 'Mid', 
  startup: '15', 
  active: '6', 
  recovery: '24', 
  onblock: '-11', 
  onhit: 'HKD (+18)',
  oncounterhit: 'HKD (+18)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "",
};
const throwsba = { 
  moveName: 'Maximum Love Bomb (Throw)', 
  altName: '214214H', 
  damage: '4000', 
  guard: 'Throw', 
  startup: '9', 
  active: '2', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+18)',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
  description: "Frame 0 grab post super flash. Range is more than L SPD but less than M SPD.\nIf done with the shortcut motion, it will do 3000 instead of 4000.\nAlso, technical input give you a better oki (opponent wake up closer to you).",
};
const ssba = { 
  moveName: 'The Shape of Love', 
  altName: '720U', 
  damage: '5000', 
  guard: 'Throw', 
  startup: '9', 
  active: '2', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+17)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '6', '8', '4', '2', '6', '8', '4', 'u', 'or', '236', 'a', 'u'],
  description: "Ladiva press the opponent down on the floor, slowly reducing their HP.\nThis one grab farther than her SBA, slightly further than her M SPD's range.\nThis will grab opponents who are blocking, in grounded hitstun, or are being juggled close to the ground.\nIf done with shortcut motion, the super will do 4000 damage instead of 5000.\nAlso, technical input give you a better oki (opponent wake up closer to you)."
};


export const fastivaInfo = [
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
  throw5U,
  groundThrow,
  backThrow,
  airThrow,
  uOverhead,
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lSPD,
  mSPD,
  hSPD,
  lAirSPD,
  mAirSPD,
  hAirSPD,
  lAirThrow,
  mAirThrow,
  hAirThrow,
  lHeadbutt,
  mHeadbutt,
  hHeadbutt,
  hHeadbutt2,
  hHeadbutt3,
  lRekka,
  mRekka,
  hRekka,
  throwsba,
  sba,
  ssba
]