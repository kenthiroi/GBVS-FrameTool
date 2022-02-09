// FINAL 

const general = { char: "Yuel", health: '10000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'mid',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  motion: ['l'],
  description: "Pretty standard c.L. Used for pressure and tick throws. Has multiple strong linking options as well."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '10',
  onblock: '0',
  onhit: '4',
  motion: ['m'],
  description: "Unsure as to if it hits on both sides of Yuel.\nHas a very far activation range, which can be advantageous but can occasionally be a detriment when you want f.M instead.\nDespite being -2 on block rather than 0 like most c.Ms, has some use in pressure due to it's somewhat absurd activation range. Links naturally from c.L and 2L as well."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  motion: ['h'],
  description: "3-hit normal. All hits are cancelable into autocombo or specials.\nLike c.M, also has a somewhat far and strange activation range.\nYuel's c.H does a bit less damage than average but is pretty strong for pressure due to its speed and high hitstun. It is the only way to frametrap into H Foxflame and the only way to combo into H Foxflame on a grounded opponent, though they must be crouching. The speed and far activation range make it pretty strong in punish situations where some characters can only use medium or even only light normals."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '350',
  guard: 'mid',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-3',
  onhit: '1',
  motion: ['l', 'l'],
  description: "Pretty standard GBVS autocombo. The final hit can frametrap into L Foxflame."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '350',
  guard: 'mid',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-5',
  onhit: '-1',
  motion: ['l', 'l', 'l'],
  description: "Pretty standard GBVS autocombo. The final hit can frametrap into L Foxflame."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-3',
  onhit: '1',
  motion: ['l'],
  description: "A bit stubby, but it's a plus on block, and a standing low. Excellent for pressure and safely buffers into her L Starlit Sky. Can also notably link into 2M on counter hit or f.M on crouching counter hit."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'mid',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  motion: ['m'],
  description: "This is an amazing button and easily a candidate for one of the best f.Ms in the game.\n9 Frames on startup, Generally very unsafe if not canceled, but can be made safe by doing 236L.\nIt's 2 hits, with both hits being cancelable, making it very easy to hit confirm into options such as M Starry Sky, or either of her Skybound Arts.\nIt moves Yuel pretty far forward, making it excellent for whiff punishing.\nGenerally unreliable as a poking tool as it leaves you minus on block in your opponent's face, and punishable if uncancelled."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'mid',
  startup: '10',
  active: '5',
  recovery: '20',
  onblock: '-9',
  onhit: '-5',
  motion: ['h'],
  description: "A somewhat strange normal, but not entirely without purpose. Yuel retracts her hurtbox slightly and sticks out a very active, heavy priority hitbox, so it is decent as an anticipatory counterpoke to stuff weaker normals or forward movement. Can kind of be used as an AA but the hitbox got lowered and it is now not as useful for that. Combined with how far forward f5m reaches it can be tough to be ready to whiff punish this button."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '2',
  onhit: '6',
  motion: ['2', 'l'],
  description: "Standard Granblue 2L. Has all of the same linking options and similar frame data to c.L, but hits low and has more range. 2L > f.L is generally a good string for a basic frametrap or punish starter."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'mid',
  startup: '7',
  active: '5',
  recovery: '9',
  onblock: '1',
  onhit: '5',
  motion: ['2', 'm'],
  description: "Frame traps from f.L and even combos on counter hit.\nThe crouching complement to f.M. While it doesn't sport some of that normal's better qualities, its speed and deceptive range make it strong for neutral and punishing in its own right. Good to use as a supplement if people are trying to hit you out of f.M with crouching buttons."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'mid',
  startup: '10',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  motion: ['2', 'h'],
  description: "Good hitbox even though the animation can look strange. Since its 2 hits, the counter hit property does not transfer from hit 1 to hit 2. Counter hit combos need the first hit to be cancelled. For example via 5U into Yugetsu. Regardless, non-counterhit 2H (both hits) combos into 22H. This means Yuel does not need a counterhit to do a damaging anti air combo."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'mid',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD',
  motion: ['2', 'u'],
  description: "Special cancellable\nYuel's highest range low outside of stance, pretty solid at beating people walking around thanks to Yuel's speed."
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '400', 
  guard: 'high', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['l'],
  description: "Active until landing.\nYuel's biggest air normal in terms of the X axis, making it her go-to air-to-air normal. Since it's Yuel's only non multi hit aerial it's the only one with a chance of comboing on counter hit off an air to air."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'high', 
  startup: '6', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['m'],
  description: "Only the first hit is an overhead.\nCan be crushed by lights though it's a rare occurance."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'high', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['h'],
  description: "Unique for a j.H, it can hit crossup.\nBoth hits are overheads.\nCan be crushed by lights though it's a rare occurance."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'high', 
  startup: '12', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Hits multiple times on the way down.\nCan pass behind opponent during the roll but will not need to be blocked crossup.\nNot a high.\nRecovery frame count starts when Yuel touches the ground.\nMOSTLY safe and plus on hit. Sometimes the very last hit can miss due to spacing making her punishable. Anti-air bait that beats regularly timed 2Hs but not DPs. Does not knock down, but is safe on block and plus on hit."
};

// unique action
const stance = {
  moveName: 'Third Dance',
  altName: '5U Stance',
  damage: '-',
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Stance changes all of Yuel's normals and movement options. She retains access to her throws, though they perform an auto-dash before performing the throw (see Throw section).\nIf struck while in stance, Yuel does an automatic counter (Eye of the Sparrow).\nCounters mids (referred to in game as highs).\nLoses to projectiles despite projectiles being classified as mids.\nLoses to lows, overheads, and throws.\nYuel cannot block during stance, but can perform Evade. She cannot perform Cross Over.\nYuel cannot walk forwards nor backwards during stance.\nYuel cannot run during stance. Run and backdash are replaced with a unique forward and backwards hop.\nBeats standard reversals such as DP\ns and strike-supers, but will not protect against projectile based supers such as GBVS Gran Icon.png Gran's Catastrophe. This can be used to encourage enemies to mash low attacks and allow you to structure frame traps with her stance buttons."
}
const lv1U = { 
  moveName: 'Power Raise Lv1', 
  altName: '5ULv1', 
  damage: '1000', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv2U = { 
  moveName: 'Power Raise Lv2', 
  altName: '5ULv2', 
  damage: '1200', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv3U = { 
  moveName: 'Power Raise Lv3', 
  altName: '5ULv3', 
  damage: '1400', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv4U = { 
  moveName: 'Power Raise Lv4', 
  altName: '5ULv4', 
  damage: '1600', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv5U = { 
  moveName: 'Power Raise Lv5', 
  altName: '5ULv5', 
  damage: '2000', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Standard throw. Third Dance version performs an automatic stance hop forward before performing the throw, making sure you're always close to the opponent first. This increases the startup significantly, however.\nForward throw allows for a DP-safe meaty low in the corner: LM~U > td.5M (whiff) > td.2M\nAlternatively, you can set up a safejump with microwalk jump j.H\nYou can press 5U during the throw animation and enter/leave stance."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
};

const uOverhead = { 
  moveName: 'Overhead', 
  altName: 'UOH', 
  damage: '1000', 
  guard: 'high', 
  startup: '26', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '1',
  motion: ['m', 'u'],
  description: ""
};

// fireballs
const lFireball = { 
  moveName: 'L Starlit Sky', 
  altName: '236L', 
  damage: '900', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Pressing U will transition Yuel into Third Dance during recovery.\nAn advancing special that trades priority and velocity for safety. Due to 236L's and 236H's extremely quick startups, they won't leave a gap when cancelled into from M or H normals on block unless they are delay cancelled and spaced at the tip of f5m.\nFast startup and safe on block.\nSince M knocks down on hit, people might get counterhit after 236L on hit as they tried to tech.\nL Starlit Sky is a safe way to transition into stance offense, as Yuel is +1 on hit."
};
const mFireball = { 
  moveName: 'M Starlit Sky', 
  altName: '236M', 
  damage: '1100', 
  guard: 'mid, all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Pressing U will transition Yuel into Third Dance during recovery.\nAn advancing special that trades priority and velocity for safety. Due to 236L's and 236H's extremely quick startups, they won't leave a gap when cancelled into from M or H normals on block unless they are delay cancelled and spaced at the tip of f5m.\nSlow startup and unsafe on block.\nSoft knockdown\n236M frame traps from almost any normal, but is easily punishable on block."
};
const hFireball = { 
  moveName: 'H Starlit Sky', 
  altName: '236H', 
  damage: '1100', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Pressing U will transition Yuel into Third Dance during recovery.\nAn advancing special that trades priority and velocity for safety. Due to 236L's and 236H's extremely quick startups, they won't leave a gap when cancelled into from M or H normals on block unless they are delay cancelled and spaced at the tip of f5m.\nBest of both worlds.\nWallbounces in the corner.\nYuel's main juggle starter."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Rising Sword', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Invincible reversal. \nAir unblockable during the early active frames. Technically the least unsafe on block and can be difficult to punish at far ranges due to the pushback and shorter recovery than the other versions, but don't count on it. As of 2.0 Patch L version is slower and has increased Recovery, making it much easier punish."
};
const mUppercut = { 
  moveName: 'M Rising Sword', 
  altName: '623M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Also an invincible reversal. \nStandard non-H combo ender for damage. Also air unblockable during the early active frames."
};
const hUppercut = { 
  moveName: 'H Rising Sword', 
  altName: '623H', 
  damage: '950~1400', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Oops, all reversals. \nDouble the uppercuts. Hard knockdown. There is a small gap in-between the two strikes. The entire first strike is air unblockable, however invincibility wears off before the second strike."
};

// rekka
const lRekka = { 
  moveName: 'L Overdrive Surge', 
  altName: '214L', 
  damage: '700', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Has a follow-up version of 214M that knocks down. \nGran dashes forward with a slash. Safest version of 214X at point blank. Can cancel into 214M on hit or block. On hit, 214L > 214M serves as his standard meterless combo ender. On block can be used to test your opponent's willingness to mash after 214L lest they risk a Counter Hit 214M. As of 2.0 Patch follow-up causes no Wall Bounce on Counter Hit, only knocks down."
};
const followupRekka = { 
  moveName: 'M Overdrive Surge(follow up)', 
  altName: '214L -> 214M', 
  damage: '500', 
  guard: 'mid', 
  startup: '-', 
  active: '13', 
  recovery: '29', 
  onblock: '-10', 
  onhit: 'KD',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Gran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};
const mRekka = { 
  moveName: 'M Overdrive Surge', 
  altName: '214M', 
  damage: '1200', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Does not knock down. \nGran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};
const hRekka = { 
  moveName: 'H Overdrive Surge', 
  altName: '214H', 
  damage: '1200', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Wallbounces in the corner. \nGran's primary juggle starter. \nSimilar to 214M, but Gran dashes forward faster. Cannot be canceled into from 214L. Causes a wall bounce in the corner on hit regardless of counter hit, allowing for additional follow ups. Exercise caution as depending on the opponent's height when used, it can cause them to fall behind Gran after the wall bounce, possibly causing a side switch with yourself in the corner."
};

// skybound art
const sba = { 
  moveName: 'Tempest Blade', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Metered advancing invulnerable move. Deals big damage but has a short reach. Try using it when you're close to your opponent."
};
const ssba = { 
  moveName: 'Catastrophe', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'all', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Gran charges and throws out an invulnerable projectile move. It can travel across the screen, however if used at point blank it will be followed by a massive blast by the summoned Proto Bahamut. Deals a lot of chip damage on block which can setup for a chip kill afterwards. After 2.0 Patch, extremely unsafe to the point where Vaseraga gets a free f.H for punish."
};


export const yuelInfo = [
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
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  groundThrow,
  airThrow,
  uOverhead,
  lFireball,
  mFireball,
  hFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  followupRekka,
  mRekka,
  hRekka,
  sba,
  ssba
]