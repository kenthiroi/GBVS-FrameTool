// FINAL 

const general = { char: "Narmaya", health: '10000', prejump: '4F', backdash: '22F' }

// Genji
const genjiCloseL = {
  moveName: 'Close Light (Genji)',
  altName: 'Genji cL',
  damage: '300',
  guard: 'mid',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '2',
  onhit: '6',
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "There is no close version of this normal.\nNegative on block but leads into auto combo at all ranges.\nA quick poke forward with the pommel of Narmaya's blade. This move is slower and covers less range than Kagura 5L."
};
const genjiCloseM = {
  moveName: 'Close Medium (Genji)',
  altName: 'Genji cM',
  damage: '650',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '10',
  onblock: '0',
  onhit: '4',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Slower and less advantageous than Kagura c.M.\nMostly used for punishes where 5H is too slow.\nCombos into Kagura 5M on counterhit.\nA generic starter. It can be used in pressure situations with autocombos, but is poor for staggering."
};
const genjiCloseH = {
  moveName: 'Close Heavy (Genji)',
  altName: 'Genji cH',
  damage: '450, 350',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Less damage than Kagura c.H, but faster.\nClose anti-air, hits farther behind her than Genji 2H.\nHits twice for easy confirms and high enough to catch jumpers.\nIn Genji, this is Narmaya's main combo filler and strongest punish starter, and also an useful frametrap tool that can be made safe or even plus with auto combo or Genji 236H on block."
};

// Kagura
const kaguraCloseL = {
  moveName: 'Close Light (Kagura)',
  altName: 'Kagura cL',
  damage: '300',
  guard: 'mid',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '2',
  onhit: '6',
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "There is no close version of this normal.\nOnly even on block, but leads to auto combo at all ranges.\nDoes not reach full range on first active frame. Plus at full range.\nA stab forward with the actual blade. Narmaya's only 5f normal. It has slightly more range than Genji 5L and is a frame faster."
};
const kaguraCloseM = {
  moveName: 'Close Medium (Kagura)',
  altName: 'Kagura cM',
  damage: '650',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '10',
  onblock: '0',
  onhit: '4',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "General pressure tool.\nCombos from 2L from either stance.\nCH confirms into M buttons and Genji 5H on crouching CH.\nA faster alternative to Kagura 2M that leads into autocombo and is better at catching jumpouts, but can be contested on block."
};
const kaguraCloseH = {
  moveName: 'Close Heavy (Kagura)',
  altName: 'Kagura cH',
  damage: '1100',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Slightly slower than Genji c.H, but higher damage.\nCombos into itself on CH.\nGood at catching jump-outs but not very good as anti-air.\nCan be plus when timed meaty. If the hitstop shows the blade touching the ground, it is plus.\nOne of Narmaya's strongest normals. This move leads to big combos on counterhit and is strong in general pressure situations. This is Narmaya's highest damage starter, so it should be used for punishes whenever possible."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'l'],
  description: "A Granblue autocombo like any other. In Genji, autocombo is a valid pressure option thanks to the threat of 236H. Try to avoid using them in short combos into super, as that'll reduce the damage. 5L c.XX can sometimes be a frame trap, but the timing is tough."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'l', 'l'],
  description: "A Granblue autocombo like any other. In Genji, autocombo is a valid pressure option thanks to the threat of 236H. Try to avoid using them in short combos into super, as that'll reduce the damage. 5L c.XX can sometimes be a frame trap, but the timing is tough."
};

// far normals
// Genji
const genjiFar5M = {
  moveName: 'Far Medium (Genji)',
  altName: 'Genji f5M',
  damage: '600',
  guard: 'mid',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "A fast, long-reaching poke. This is the main button you'll be using in neutral.\nAlso your whiff punish of choice.\nDecent far anti air, but it's no Katalina f.H.\nCombos into SSBA at every range, making it quite deadly when Narmaya has full meter and is at low health.\nA strong, safe poke that should be a mainstay of your poking game. Cancel into 214H or SSBA for a hit confirm into knockdown."
};
const genjiFar5H = {
  moveName: 'Far Heavy (Genji)',
  altName: 'Genji f5H',
  damage: '900',
  guard: 'mid',
  startup: '10',
  active: '5',
  recovery: '20',
  onblock: '-9',
  onhit: '-5',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Powerful, but high recovery poke\nThe big brother of f.M. Slightly slower and slightly more range. Should mainly use it as a preemptive running poke, where the combination of high attack level, fast run speed and long range is difficult to deal with, and leads to easier hit confirms into stronger combos. Try to not whiff it, it isn't hard to whiff punish."
};

// Kagura
const kaguraFar5M = {
  moveName: 'Far Medium (Kagura)',
  altName: 'Kagura f5M',
  damage: '600',
  guard: 'mid',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "OK poke, punish and pressure tool.\nAlso a decent far anti air.\nYour only real poke in Kagura, but inferior to Genji pokes. More useful for counter hit confirms and punishes due to its range and speed."
};
const kaguraFar5H = {
  moveName: 'Far Heavy (Kagura)',
  altName: 'Kagura f5H',
  damage: '1000',
  guard: 'mid',
  startup: '10',
  active: '5',
  recovery: '20',
  onblock: '-9',
  onhit: '-5',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Essentially an highly active wall of hitbox that excels at crushing weaker pokes or mashes. Easy to confirm on hit, but also easy to whiff punish."
};

// Crouch normals
// Genji
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: "Good range 2L that can link into itself as well as c.L and c.M. Really strong pressure tool as it works for low mixup and a frame trap. Can confirm into 214L>214M for knockdown"
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'm'],
  description: "Good poke and common combo tool. +1 on block, making it a decent choice to use post c.M nerf as a pressure tool."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'h'],
  description: "Really strong anti-air with a good hitbox in front and behind Gran, allowing him to beat out opponents jumping behind him. On CH, whiff 214L> 2H> 214M is a good damage combo with great corner carry, but when they're closer to the ground/to you you'll need to go for an alternate route. As of 2.0 Patch the increased start-up and the nerfs to many of Gran's other moves have made many corner combos unreliable at best or impossible to do. Notably corner 2H> 5U is not only harder to go into but can't loop into itself reliably anymore."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'u'],
  description: "Gran's sweep is very fast and very evasive. It goes under a lot more things than even it's animation would suggest. Sets up for a safejump on its own and after combos. As of 2.0 Patch, 2U > SSBA is an increadibly unsafe poke at any point. It still combos into high damage, but with how unsafe SSBA is and ease to Evade it's a High Risk option to go for. 2U by itself have also been nerfed by being less evasive than before, but still works as a strong low profile."
};

// Kagura
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: "Good range 2L that can link into itself as well as c.L and c.M. Really strong pressure tool as it works for low mixup and a frame trap. Can confirm into 214L>214M for knockdown"
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'm'],
  description: "Good poke and common combo tool. +1 on block, making it a decent choice to use post c.M nerf as a pressure tool."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'h'],
  description: "Really strong anti-air with a good hitbox in front and behind Gran, allowing him to beat out opponents jumping behind him. On CH, whiff 214L> 2H> 214M is a good damage combo with great corner carry, but when they're closer to the ground/to you you'll need to go for an alternate route. As of 2.0 Patch the increased start-up and the nerfs to many of Gran's other moves have made many corner combos unreliable at best or impossible to do. Notably corner 2H> 5U is not only harder to go into but can't loop into itself reliably anymore."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'u'],
  description: "Gran's sweep is very fast and very evasive. It goes under a lot more things than even it's animation would suggest. Sets up for a safejump on its own and after combos. As of 2.0 Patch, 2U > SSBA is an increadibly unsafe poke at any point. It still combos into high damage, but with how unsafe SSBA is and ease to Evade it's a High Risk option to go for. 2U by itself have also been nerfed by being less evasive than before, but still works as a strong low profile."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "Gran's fastest air normal. Has active frames from startup until it hits the ground."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Gran's best air-to-air normal. Has a small cross-up hitbox at the very beginning. It's use as a crossup is mostly outshined by j.U, but it's good to know that it's there."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Gran's longest reaching and most damaging jump-in. Hitbox is smaller/further up the closer it is to Gran's body."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Gran's j.U is a ridiculous jump-in and crossup attack. It hits all around him, which makes it by far his best jump in and arguably the best jump-in attack in the game. Use it after safejumps, use it whenever you're in the air. It's just that good. It's only real fault is that it's slower than most air normals, so you will have to use something else to air-to-air."
};

// unique action
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw knocks opponent far away, but untech time is long enough so you can run in for a meaty or jump in. Great for driving your opponent towards the corner. \nBack throw switches sides. Useful if you want to stick close to your opponent after as you will recover closer up than if you were to forward throw. \nBetween buttons such as c.L, 2L, c.M, and 2M, throw is a particularly strong mix-up option for Gran as it offers many tick throw opportunities. Gran's ability to convert the opponent's whiffed throw techs into enormous damage also serves to make his throw mix up game all the more scary."
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
  motion: ['m', 'u'],
  description: "Same use as most overheads, checking for low blocks and getting counter hits on late buttons or throws. Gran gets really good reward off of CH Overhead in the corner due to his explosive corner damage, enough to end the round from half health with all specials and super. As of 2.0 Patch Gran can get a stronger Midscreen combo thanks to the changes to H Reginleiv, allowing for follow-ups and better damage."
};

// fireballs
const lFireball = { 
  moveName: 'L Reginleiv', 
  altName: '236L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Standard fireball. \nTravels fairly fast and across the screen. Serves as a safe ender for his block strings and pokes."
};
const mFireball = { 
  moveName: 'M Reginleiv', 
  altName: '236M', 
  damage: '400, 800', 
  guard: 'mid, all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Gran slashes upward before shooting out a projectile. \nFirst slash cancels out projectiles. \nUseful to turn projectile wars more in your favor as you can cancel out incoming projectiles with the upward slash before throwing out a projectile of your own. Also is helpful in throwing off your opponent\'s timing when trying to dodge 236L. Serves as a better blockstring ender than 236L, and as of the 2.0 Patch there\'s no Gap in-between the two hits."
};
const hFireball = { 
  moveName: 'H Reginleiv', 
  altName: '236H', 
  damage: '350 x 3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "3-hit fireball. \nHard knockdown on airhit. \nA grown man 3-hit fireball. As of the 2.0 Patch H Reginleiv does NOT knockdown, but instead leaves them standing. Depending on distance and the state of the opponent, it allows for combos afterwards. At least +7 on hit, allowing for follow-ups even midscreen provided that the opponent is close enough to be hit. Primarily a combo and pressure tool, as it has lost a lot of its neutral prowess due to the nerf. Worth throwing out when applying pressure in the corner, however. H Reginleiv can also frame trap from cXX, albeit in a rather tight window."
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Gran charges and throws out an invulnerable projectile move. It can travel across the screen, however if used at point blank it will be followed by a massive blast by the summoned Proto Bahamut. Deals a lot of chip damage on block which can setup for a chip kill afterwards. After 2.0 Patch, extremely unsafe to the point where Vaseraga gets a free f.H for punish."
};


export const narmayaInfo = [
  general,
  genjiCloseL,
  genjiCloseM,
  genjiCloseH,
  kaguraCloseL,
  kaguraCloseM,
  kaguraCloseH,
  auto1,
  auto2,
  genjiFar5M,
  genjiFar5H,
  kaguraFar5M,
  kaguraFar5H,
  genji2L,
  genji2M,
  genji2H,
  genji2U,
  kagura2L,
  kagura2M,
  kagura2H,
  kagura2U,
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