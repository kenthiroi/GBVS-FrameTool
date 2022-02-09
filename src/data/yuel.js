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
  oncounterhit: '1',
  clash: '1',
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
  recovery: '14',
  onblock: '-2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "Unsure as to if it hits on both sides of Yuel.\nHas a very far activation range, which can be advantageous but can occasionally be a detriment when you want f.M instead.\nDespite being -2 on block rather than 0 like most c.Ms, has some use in pressure due to it's somewhat absurd activation range. Links naturally from c.L and 2L as well."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'mid',
  startup: '8',
  active: '2,2,2',
  recovery: '21',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '0',
  clash: '5',
  motion: ['h'],
  description: "3-hit normal. All hits are cancelable into autocombo or specials.\nLike c.M, also has a somewhat far and strange activation range.\nYuel's c.H does a bit less damage than average but is pretty strong for pressure due to its speed and high hitstun. It is the only way to frametrap into H Foxflame and the only way to combo into H Foxflame on a grounded opponent, though they must be crouching. The speed and far activation range make it pretty strong in punish situations where some characters can only use medium or even only light normals."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '350',
  guard: 'mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "Pretty standard GBVS autocombo. The final hit can frametrap into L Foxflame."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '350',
  guard: 'mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
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
  recovery: '9',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+7',
  clash: '2',
  motion: ['l'],
  description: "A bit stubby, but it's a plus on block, and a standing low. Excellent for pressure and safely buffers into her L Starlit Sky. Can also notably link into 2M on counter hit or f.M on crouching counter hit."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'mid',
  startup: '9',
  active: '3,1',
  recovery: '21',
  onblock: '-8',
  onhit: '-3',
  oncounterhit: '-3',
  clash: '3',
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
  moveName: 'L Hien: Homuragaeshi', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Pressing U will transition Yuel into Third Dance during landing\nYuel's invincible reversal. Its multiple hits make it shine in certain situations such as against Vaseraga's Soul Forge, but it has a tendency to whiff against deep jump-ins.\nGo-to reversal due to speed and not costing resources.\n623L is the least damaging version and gives the worst okizeme on hit. However, due to its low cost and quick startup, you'll see it frequently used as a reversal."  
};
const mUppercut = { 
  moveName: 'M Hien: Homuragaeshi', 
  altName: '623M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Pressing U will transition Yuel into Third Dance during landing\nYuel's invincible reversal. Its multiple hits make it shine in certain situations such as against Vaseraga's Soul Forge, but it has a tendency to whiff against deep jump-ins.\nBetter as a combo ender than a reversal.\n623M is slower and more damaging. Useful as a combo ender as it does more damage and gives better okizeme than 236M, in exchange for less corner carry. You'll however rarely see this as a reversal."  
};
const hUppercut = { 
  moveName: 'H Hien: Homuragaeshi', 
  altName: '623H', 
  damage: '950~1400', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Pressing U will transition Yuel into Third Dance during landing\nYuel's invincible reversal. Its multiple hits make it shine in certain situations such as against Vaseraga's Soul Forge, but it has a tendency to whiff against deep jump-ins.\nInvincible reversal.\nBuilds a ton of meter on hit.\nHard knockdown on hit.\n623H is the most damaging version and gives the best okizeme, giving Yuel enough time to dash up and do a crossup j.H safejump. Sometimes used as a combo ender and sometimes as a reversal." 
};

// rekka
const lRekka = { 
  moveName: 'L Hanaarashi', 
  altName: '214L', 
  damage: '700', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};
const mRekka = { 
  moveName: 'M Hanaarashi', 
  altName: '214M', 
  damage: '1200', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};
const hRekka = { 
  moveName: 'H Hanaarashi', 
  altName: '214H', 
  damage: '1200', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};

//
const lFlame = {
  description: "Pressing U will transition Yuel to Third Dance during the recovery.\nLots of active frames, making it good as a meaty against characters without meterless reversals.\n22L will frame trap from full autocombo, but it's only +5 on counter hit and will put you just outside of c.L's activation range, meaning your reward for hitting it on a standing opponent is minimal, and you'll lose your turn if it's blocked. It also frame traps from 2H(1), which does leave you close enough for a c.L combo, but only at point blank range."
};
const mFlame = {
  description: "Pressing U will transition Yuel to Third Dance during the recovery.\nLots of active frames, making it good as a meaty against characters without meterless reversals.\n22M is the slowest but most advantageous version. It will never frame trap, but because Yuel moves forward during its startup, it can be used as a disrespectful pressure extension once your opponent starts respecting your actual frame traps. If your opponent somehow gets hit by this, you can follow up with a c.H combo."
};
const hFlame = {
  description: "Pressing U will transition Yuel to Third Dance during the recovery.\nLots of active frames, making it good as a meaty against characters without meterless reversals.\n22H frame traps from c.H and grants a c.H combo on CH. If your opponent doesn't mash, you can continue pressure due to it being advantageous on block. In addition, it will always combo from an air hit of 2H, making it useful for anti-air combos and certain punishes."
};

// skybound art
const sba = { 
  moveName: 'Crimson Dance: Rinnen-aratame', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Minimum damage: 800\nSimple input (236S) damage: 3000\nSimple input minimum damage: 450\nLoses invincibility after the startup but regains it on hit when the cinematic animation begins to play"
};
const ssba = { 
  moveName: 'Sapphire Dance: Gentiana', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'all', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Vacuums even on whiff, but the cinematic will only play if the opponent is drawn in and hit during the first few moments of the animation. The long animation will catch attempted Evades."
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
  mRekka,
  hRekka,
  lFlame,
  mFlame,
  hFlame,
  sba,
  ssba
]