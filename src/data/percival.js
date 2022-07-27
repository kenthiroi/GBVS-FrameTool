// FINAL 

const general = { char: "Percival", health: '10000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'Mid',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['l'],
  description: "This is where the party starts. The damage this move leads to isn't much, but being +2 on block is good enough to merit its use in combination with its speed.",
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '3',
  recovery: '12',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "This move is Percival's pressure normal out of c.L range. It's really good vs. Charlotta, as it completely shuts down her Noble Strategy. /b Also a good button to anti air opponents when in proximity range."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '15',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['h'],
  description: "This is where the damage starts. On counterhit Percival is +14; you can link it into another c.H OR f.H when not close enough. If you don't get a counterhit, you still get a beefy combo in the corner and above-average damage midscreen. Its long active frames lend it to being a decent meaty, in theory the maximum frame advantage is +3 on block and +7 on hit, enough for a c.M."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '350',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "It's an autocombo. Useful midscreen as combo filler and sometimes useful in the corner to gain height in EX Platzen combos."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '350',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "It's an autocombo. Useful midscreen as combo filler and sometimes useful in the corner to gain height in EX Platzen combos."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+1',
  clash: '2',
  motion: ['l'],
  description: "This move is a lot better than it looks. It's very fast and very long compared to most other f.L attacks. It has enough hitstun to combo into Zerreissen with stocks, which makes it very good as a whiff punish tool."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '9',
  active: '5',
  recovery: '16',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "This is it. This is the button. It's fast, scooches Percival forwards, special cancels, and it has massive range. It's an excellent whiff punish and combo tool midscreen. Using this move in the corner alongside Anzünden is very tricky to get out of, and it is a cornerstone of his corner pressure."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1100',
  guard: 'Mid',
  startup: '12',
  active: '6',
  recovery: '26',
  onblock: '-15',
  onhit: '-11',
  oncounterhit: '-3',
  clash: '4',
  motion: ['h'],
  description: "Percy's f.H is by far his biggest button, as it hits nearly 3/4 of the screen. This button is ridiculous, but it has some downsides to complement its massive range, primarily its hurtbox. The hurtbox is active before the hitbox is, leading to some weird-looking interactions where he gets hit by a button a screen away. It's not just when the move starts up, either. The hurtbox lingers far after it looks like it would be over, allowing for easy whiff punishes by most of the cast. To counteract these weaknesses, all you have to do is make sure it doesn't whiff. If it gets blocked, you can cancel into Dodge (4G), Light Träumerei, or any version of Anzünden to stay safe."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "Percival's primary close-range pressure tool. It's plus on block and hits low, what more could you ask for?"
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '5',
  recovery: '13',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Percival's 2M is good on its own, but its main purpose is to act as a complement to f.M. It hits lower where f.M would whiff at the cost of less range, but f.M > 2M can catch people trying to punish f.M at a distance."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '5 [2, 3]',
  recovery: '24',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "While it is a decent anti-air, it's a really slow one that's also cursed with a bad hurtbox. Where it really shines is in combos, as it allows 236L > 2H to loop on an airborne opponent in the corner. If you land it as a counter hit AA, canceling into 214L or 214M allows you to pick what side you want to end up on and still get a combo."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD(+43)',
  oncounterhit: 'HKD(+47)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Universal sweep. Decent range and speed though nothing impressive. Can be special cancelled, provides a way to safely charge up stocks with Träumerei. Also sets up for a safe jump. One of the main ways to continue a combo after Heavy Anzünden in the corner or Schneiden(with stock). His sweep got buffed in the v1.21 patch, which decreased its recovery. Its now -10 on block instead of -15, making it much safer to throw out. It then got nerfed in the v2.01 patch, which increased its recovery but not to its original state. It's now -12 on block instead of -10."
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
  description: "Active until landing. Easy safejump tool and Percy's fastest air normal. Can be used as a last-minute jump-in, but j.M is better all around."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Can cross up. This is your main jump in as it has decent hitstun, blockstun, and it can cross up. It doesn't have great horizontal range in front of Percival, but j.H fills that niche nicely."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '10', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "Really good at catching people using far buttons to AA. The big jump in. Not useful for much outside that. Notable as Percival's longest-range air-to-air attack. Patch 1.2 improved the startup of this move, making it better as an air-to-air."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '12', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['u'],
  description: "Not an overhead, can be blocked while crouching. But can be useful for changing jump in timing and baiting out a 2H. Other than that, it's minus on block and gets you a knockdown on hit."
};

// unique action
const n5U = { 
  moveName: 'X-Seele', 
  altName: '5U', 
  damage: '0', 
  guard: 'Throw', 
  startup: '14', 
  active: '3', 
  recovery: '41', 
  onblock: '-', 
  onhit: '+12',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+49)',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "A faster but less rewarding version of 5U. Leaves the opponent pretty far away from Percival, which can be good or bad depending on the matchup. Backthrow switches sides and keep the opponent close to Percival, and allows for a meaty Macht anywhere. Forward throw in the corner allows for a safejump by super jumping immediately afterwards. Alternatively, if you want stocks you can 22M midscreen and 22L > c.H in the corner for a meaty as well."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+32)',
  motion: ['4', 'l', 'm', 'or','4', 'l', 'u'],
  description: "A faster but less rewarding version of 5U. Leaves the opponent pretty far away from Percival, which can be good or bad depending on the matchup. Backthrow switches sides and keep the opponent close to Percival, and allows for a meaty Macht anywhere. Forward throw in the corner allows for a safejump by super jumping immediately afterwards. Alternatively, if you want stocks you can 22M midscreen and 22L > c.H in the corner for a meaty as well."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+36)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "This move isn't seen very much as 2H CH AA combos typically deal far more damage. It's a good tool to have, but Percy has stronger ones."
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
  description: "Percival's Universal Overhead has less range than it looks with how his sword bends, but by no means does that make it bad. Percival has a lot of ways to set up a meaty UOH, most of which involve a combo with H Platzen. \nFrames 4-40 throw invulnerable. \nFrames 11-39 considered airborne. \nForces crouch on hit."
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


//stock charges
const lStockCharge = {
  moveName: 'L Träumerei',
  altName: 'L Stock charge',
  damage: '400',
  guard: 'Mid',
  startup: '11',
  active: '14',
  recovery: '12',
  onblock: '-13',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Percival's most important move. Stores orbs that enhance M and H versions of skills. L stores one orb, M stores 3, and H stores 5. The number of orbs stored will be displayed under Percival's HP bar. These have hitbox directly above him that can be used to juggle opponents mid-combo. The L version is also a good move to cancel into off a f.H. Completes charge on frame 25."
}

const mStockCharge = {
  moveName: 'M Träumerei',
  altName: 'M Stock charge',
  damage: '400',
  guard: 'Mid',
  startup: '11',
  active: '28',
  recovery: '12',
  onblock: '-27',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'm', 'or', '2', 'm', 'a'],
  description: "Percival's most important move. Stores orbs that enhance M and H versions of skills. L stores one orb, M stores 3, and H stores 5. The number of orbs stored will be displayed under Percival's HP bar. These have hitbox directly above him that can be used to juggle opponents mid-combo. The L version is also a good move to cancel into off a f.H.. Completes charge on frame 39."
}

const hStockCharge = {
  moveName: 'H Träumerei',
  altName: 'H Stock charge',
  damage: '400',
  guard: 'Mid',
  startup: '11',
  active: '38',
  recovery: '12',
  onblock: '-37',
  onhit: 'KD (+34)',
  oncounterhit: 'KD (+36)',
  clash: '2',
  motion: ['2', '2', 'h', 'or', '2', 'h', 'a'],
  description: "Percival's most important move. Stores orbs that enhance M and H versions of skills. L stores one orb, M stores 3, and H stores 5. The number of orbs stored will be displayed under Percival's HP bar. These have hitbox directly above him that can be used to juggle opponents mid-combo. The L version is also a good move to cancel into off a f.H.. Completes charge on frame 49."
}


// fireballs
const lFireball = { 
  moveName: 'L Anzünden', 
  altName: '236L', 
  damage: '900→800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  motion: ['236', 'l', 'or', 'a'],
  description: "Percival swings his sword and launches a projectile that travels along the ground. The slow speed and way it travels along the ground makes this a really hard move to dodge, and if there's any amount of distance between you and your opponent, it will be meaty enough to be plus. Since it has slower startup and Percival's hurtbox extends below and in front of him, it is prone to end up trading with other normals such as f.M. \nTravels to about f.H range and stops fizzles out. \nDoesn't take a stock."
};
const mFireball = { 
  moveName: 'M Anzünden', 
  altName: '236M', 
  damage: '900→800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Percival swings his sword and launches a projectile that travels along the ground. The slow speed and way it travels along the ground makes this a really hard move to dodge, and if there's any amount of distance between you and your opponent, it will be meaty enough to be plus. Since it has slower startup and Percival's hurtbox extends below and in front of him, it is prone to end up trading with other normals such as f.M. \nTravels farther than the L version, and travels fullscreen with a stock. \nTakes a stock when one is available."
};
const hFireball = { 
  moveName: 'H Anzünden', 
  altName: '236H', 
  damage: '350×2+400→300×2+400', 
  guard: 'All', 
  startup: '19', 
  active: '-', 
  recovery: '-', 
  onblock: '0', 
  onhit: '+4',
  oncounterhit: '+4',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "3-hit fireball. \nHard knockdown on airhit. \nA grown man 3-hit fireball. As of the 2.0 Patch H Reginleiv does NOT knockdown, but instead leaves them standing. Depending on distance and the state of the opponent, it allows for combos afterwards. At least +7 on hit, allowing for follow-ups even midscreen provided that the opponent is close enough to be hit. Primarily a combo and pressure tool, as it has lost a lot of its neutral prowess due to the nerf. Worth throwing out when applying pressure in the corner, however. H Reginleiv can also frame trap from cXX, albeit in a rather tight window."
};

//add powerup versions to this list and create a toggle for it like VT in FAT

// dragon punches
const lUppercut = { 
  moveName: 'L Platzen', 
  altName: '623L', 
  damage: '700, 400', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2(2)6', 
  recovery: '37', 
  onblock: '-26', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Performs a rising attack that cannot be blocked by midair foes immediately after start-up. M/H version advances Percival forward before rising. Rises higher and deals increased damage with a Träumerei orb but also makes the move more unsafe on block.",
};
const mUppercut = { 
  moveName: 'M Platzen', 
  altName: '623M', 
  damage: '300,700,400', 
  guard: 'Mid*2, All', 
  startup: '11', 
  active: '5(2)2(2)6', 
  recovery: '37', 
  onblock: '-24', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Performs a rising attack that cannot be blocked by midair foes immediately after start-up. M/H version advances Percival forward before rising. Rises higher and deals increased damage with a Träumerei orb but also makes the move more unsafe on block.",
};
const hUppercut = { 
  moveName: 'H Platzen', 
  altName: '623H', 
  damage: '300,600,200×3',
  guard: 'Mid', 
  startup: '9', 
  active: '8(2)2(2)6,3,3', 
  recovery: '40', 
  onblock: '-33', 
  onhit: 'HKD (+55)',
  oncounterhit: 'HKD (+56)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Performs a rising attack that cannot be blocked by midair foes immediately after start-up. M/H version advances Percival forward before rising. Rises higher and deals increased damage with a Träumerei orb but also makes the move more unsafe on block.",
};

// rekka
const cmdDash = { 
  moveName: 'Lords Strike', 
  altName: '214X', 
  damage: '-', 
  guard: '-', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Gran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};

// Split these 3 into 3 different subsections (L cmd dash, M cmd dash, H cmd dash.)
const llRekka = { 
  moveName: 'Schneiden', 
  altName: '214L -> L', 
  damage: '800', 
  guard: 'Low', 
  startup: '7', 
  active: '3', 
  recovery: '20', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['l'],
  description: "Performs a low slash attack during Lord's Strike. When enhanced with a Träumerei orb, it'll cause knockdown upon connecting."
};
const lmRekka = { 
  moveName: 'Macht',
  altName: '214L -> M',
  damage: '1400', 
  guard: 'Mid', 
  startup: '20', 
  active: '6', 
  recovery: '21', 
  onblock: '+2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['m'],
  description: "Performs a downward slash attack during Lord's Strike. Very good frame advantage, so Percival can start his shenanigans before the opponent recovers even on block, with a guess between throw/5U and mashing. When enhanced with a Träumerei orb, causes an unrecoverable knockdown."
};
const lhRekka = { 
  moveName: 'Zerreissen', 
  altName: '214L -> H', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '10', 
  active: '3', 
  recovery: '52', 
  onblock: '-16', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['h'],
  description: "Performs a piercing attack during Lord's Strike. When enhanced with a Träumerei orb, it'll cause more damage if it connects at close range, as indicated by a zoom-in effect. This is the move you want to combo into when you hit a far normal."
};

// medium cmd dash
const mlRekka = { 
  moveName: 'M Schneiden', 
  altName: '214M -> L', 
  damage: '800', 
  guard: 'Low', 
  startup: '7', 
  active: '3', 
  recovery: '20', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['l'],
  description: "Performs a low slash attack during Lord's Strike. When enhanced with a Träumerei orb, it'll cause knockdown upon connecting."
};
const mmRekka = { 
  moveName: 'M Macht',
  altName: '214M -> M',
  damage: '1400', 
  guard: 'Mid', 
  startup: '20', 
  active: '6', 
  recovery: '21', 
  onblock: '+2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['m'],
  description: "Performs a downward slash attack during Lord's Strike. Very good frame advantage, so Percival can start his shenanigans before the opponent recovers even on block, with a guess between throw/5U and mashing. When enhanced with a Träumerei orb, causes an unrecoverable knockdown."
};
const mhRekka = { 
  moveName: 'M Zerreissen', 
  altName: '214M -> H', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '10', 
  active: '3', 
  recovery: '52', 
  onblock: '-16', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['h'],
  description: "Performs a piercing attack during Lord's Strike. When enhanced with a Träumerei orb, it'll cause more damage if it connects at close range, as indicated by a zoom-in effect. This is the move you want to combo into when you hit a far normal."
};

// heavy cmd dash
const hlRekka = { 
  moveName: 'H Schneiden', 
  altName: '214H -> L', 
  damage: '850', 
  guard: 'Low', 
  startup: '7', 
  active: '3', 
  recovery: '20', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['l'],
  description: "Performs a low slash attack during Lord's Strike. When enhanced with a Träumerei orb, it'll cause knockdown upon connecting."
};
const hmRekka = { 
  moveName: 'H Macht',
  altName: '214H -> M',
  damage: '1400', 
  guard: 'Mid', 
  startup: '20', 
  active: '6', 
  recovery: '21', 
  onblock: '+2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['m'],
  description: "Performs a downward slash attack during Lord's Strike. Very good frame advantage, so Percival can start his shenanigans before the opponent recovers even on block, with a guess between throw/5U and mashing. When enhanced with a Träumerei orb, causes an unrecoverable knockdown."
};
const hhRekka = { 
  moveName: 'H Zerreissen', 
  altName: '214H -> H', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '10', 
  active: '3', 
  recovery: '52', 
  onblock: '-16', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['h'],
  description: "Performs a piercing attack during Lord's Strike. When enhanced with a Träumerei orb, it'll cause more damage if it connects at close range, as indicated by a zoom-in effect. This is the move you want to combo into when you hit a far normal."
};

// skybound art
const sba = { 
  moveName: 'Lohenwolf', 
  altName: '236236H', 
  damage: '2600-3600', 
  guard: 'Mid [Unblockable]', 
  startup: '6+7~147', 
  active: '6', 
  recovery: '30(Whiff), 44(Blocked)', 
  onblock: '-18', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Performs a powerful advancing attack that can be charged by holding down the button. If fully charged, this skill becomes unblockable. Since it covers a long range, it can be used as both a combo finished or a counter from afar. However, it will not hit at full-screen. The simple input version of this super makes the cinematic trigger smaller, but this typically doesn't matter when confirming out of a poke. \nMin Damage: Technical 900→650, Simple 540→390"
};
const ssba = { 
  moveName: 'Feuerrote Krone', 
  altName: '236236U', 
  damage: '2900-3800', 
  guard: 'Mid, All', 
  startup: '16', 
  active: '9x10,1→(5)5', 
  recovery: '51', 
  onblock: '-18', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Unleashes a spiral of flames from the hilt of Percival's sword that deals additional hits when holding down the button. If this skill connects at close range, Percival will perform an enhanced version for increased damage. This move can be hard to combo into from midscreen juggles because of the flame spiral causing them to fall out. This leads to it being very unsafe as the opponent will typically tech through the fireball itself. \nThis super can be charged, which increases the hits of the initial tornado from a minimum 6 hits to a maximum of 12 hits. When charged for 6-11 hits, the final hit will do 1900 but when fully charged to 12 hits, the final hit will do 2000.\nWhen not at close range, the final swing will fire a bigger version of Anzünden that travels full screen. In certain situations in the corner, you can combo off this when setup properly.\nMin Damage: Technical 950→580[1160→760], Simple 760→580[960→760]"
};


export const percivalInfo = [
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
  n5U,
  groundThrow,
  airThrow,
  uOverhead,
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lStockCharge,
  mStockCharge,
  hStockCharge,
  lFireball,
  mFireball,
  hFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  cmdDash,
  llRekka,
  lmRekka,
  lhRekka,
  mlRekka,
  mmRekka,
  mhRekka,
  hlRekka,
  hmRekka,
  hhRekka,
  sba,
  ssba
]