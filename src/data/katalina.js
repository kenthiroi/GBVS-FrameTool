// Needs to update descriptions and damage/SAR values 

const general = { char: "Katalina", health: '10000', prejump: '4F', backdash: '22F' }

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
  description: "c.L is as strong as jabs come. At +2 the majority of Katalina's normals will frame trap the opponent afterward. Along with 2L, it has a fast enough recovery so that it will hit meaty and be safe from DPs at the same time. On hit you can link into 2L, c.M or another 5L. It is possible to link into 2M on crouchers."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-1',
  onhit: '+3',
  oncounterhit: '+7',
  clash: '3',
  motion: ['m'],
  description: "Post nerf, Kat's c.M is a filler used to frame trap/confirm off of c.L/2L. It is no longer the pressure tool it once was, it can no longer link into itself and is not plus on block anymore. The changes to proximity detection mean that three hit block strings ending in c.M are no longer possible."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '21',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '+8',
  clash: '5',
  motion: ['h'],
  description: "c.H is very damaging, but unsafe on block. Consequently, its usually used to start punishes or as combo filler. You can use it to frame trap but doing so forces you to either go into autocombo to remain safe or to cancel into 236H."
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
  description: "c.H is very damaging, but unsafe on block. Consequently, its usually used to start punishes or as combo filler. You can use it to frame trap but doing so forces you to either go into autocombo to remain safe or to cancel into 236H."
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
  description: "c.H is very damaging, but unsafe on block. Consequently, its usually used to start punishes or as combo filler. You can use it to frame trap but doing so forces you to either go into autocombo to remain safe or to cancel into 236H."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '6',
  recovery: '10',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+3',
  clash: '2',
  motion: ['l'],
  description: "f.L is mainly used as a fast poke to cover the space in front of you or to hitconfirm when you cannot link into c.M. It has great reach and is one of the most consistent 6f punishes in the game, allowing her to cancel into 214H for huge corner damage or directly into either super midscreen."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "f.M is arguably Katalina's best normal. It has amazing speed and range, which makes it quite difficult to get around. The higher hurtbox means that most characters need to use their slower standing normals as opposed to faster crouching ones in order to whiff punish, making it pretty safe to throw out. It combos into 236M on counter hit."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '4',
  recovery: '23',
  onblock: '-10',
  onhit: '-6',
  oncounterhit: '+2',
  clash: '4',
  motion: ['h'],
  description: "f.H's hitstun, speed, reach and the fact it is a heavy button make it a strong choice for counter poking, even more than f.M in some cases. Since its a heavy button, it will crush anything of a lower strength that it clashes with. It is also a good anti air from farther ranges and is one of our best corner combo starter. It is important to be able to single hit confirm this as a Katalina player."
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
  description: "2L is a low hitting jab that is plus on block. Linking to 2M is possible, but only on a crouching opponent. The range is pretty abysmal."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '5',
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+3',
  clash: '3',
  motion: ['2', 'm'],
  description: "2M has an amazing combination of range, speed and safety. Its speed makes it strong for punishing moves that f.M wouldn't. It confirms into 214H from any range which makes it an incredibly strong whiff punish tool. It also has a hitbox low to the ground, making it great for beating crossovers once opponents are frustrated with neutral."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '23',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "2H is a great anti-air. Cancelling into level 1 or 2 5U 66 gives consistent punishes for non-counter hit AND counter hit anti-airs. On aerial non-counter hit, a well timed delayed 214L / 214M cancel leads to insane damage for only 1 or 2 EX cooldowns."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '8',
  active: '5',
  recovery: '21',
  onblock: '-11',
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "2U is Katalina’s only other low. The range and speed are solid for a move that grants a hard knockdown on hit and access to safejump setups. It’s unsafe on block so be sure to space it well so you can reap the benefit of that hard knockdown if you don’t plan on cancelling into 4G or 236H, or 236L/M at larger distances to make it safe."
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
  description: "This is a standard j.L that is active until you touch the ground. Useful if you want a hitbox covering you as you are falling. Its range is short so make sure you’re going to land on the opponent when you do this."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'High', 
  startup: '6', 
  active: '7', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
  description: "j.M is a good jump in from farther ranges due to its slightly downward angle and reach. It can also be used as an air to air."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "j.H reaches far ahead of Katalina but is mostly a horizontal hitbox. It’s decent to use as part of a neutral jump to control the space in front of you."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'High', 
  startup: '13', 
  active: '12', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
  description: "j.U is Katalina’s most useful jump in. It swings low beneath Katalina, which will beat some late anti air attempts, and it can also crossup. As such, this is the standard move to use when safejumping"
};

// unique action
const shieldU = { 
  moveName: 'Light Wall (Charge)', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '12-58', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv1U = { 
  moveName: 'Light Wall Lv0 (Hit)', 
  altName: '5U Lv0', 
  damage: '700', 
  guard: 'Mid', 
  startup: '9', 
  active: '6', 
  recovery: '24', 
  onblock: '-15', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv2U = { 
  moveName: 'Light Wall Lv1 (Hit)', 
  altName: '5U Lv1', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '9', 
  active: '6', 
  recovery: '24', 
  onblock: '-13', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv3U = { 
  moveName: 'Light Wall Lv2 (Hit)', 
  altName: '5U Lv2', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '9', 
  active: '6', 
  recovery: '24', 
  onblock: '-11', 
  onhit: 'HKD (+72)',
  oncounterhit: 'HKD (+74)',
  clash: '5',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv4U = { 
  moveName: 'Light Wall Lv0 (Dash)', 
  altName: '5U LV0 -> 66', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '19 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', '6', '6'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv5U = { 
  moveName: 'Light Wall Lv0 (Backdash)', 
  altName: '5U Lv0 -> 44', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '22 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', '4', '4'],
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
  onhit: 'HKD (+53)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw knocks opponent far away, but untech time is long enough so you can run in for a meaty or jump in. Great for driving your opponent towards the corner. \nBack throw switches sides. Useful if you want to stick close to your opponent after as you will recover closer up than if you were to forward throw. \nBetween buttons such as c.L, 2L, c.M, and 2M, throw is a particularly strong mix-up option for Gran as it offers many tick throw opportunities. Gran's ability to convert the opponent's whiffed throw techs into enormous damage also serves to make his throw mix up game all the more scary."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+35)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw knocks opponent far away, but untech time is long enough so you can run in for a meaty or jump in. Great for driving your opponent towards the corner. \nBack throw switches sides. Useful if you want to stick close to your opponent after as you will recover closer up than if you were to forward throw. \nBetween buttons such as c.L, 2L, c.M, and 2M, throw is a particularly strong mix-up option for Gran as it offers many tick throw opportunities. Gran's ability to convert the opponent's whiffed throw techs into enormous damage also serves to make his throw mix up game all the more scary."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+45)',
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
  active: '5', 
  recovery: '18', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'u'],
  description: "Same use as most overheads, checking for low blocks and getting counter hits on late buttons or throws. Gran gets really good reward off of CH Overhead in the corner due to his explosive corner damage, enough to end the round from half health with all specials and super. As of 2.0 Patch Gran can get a stronger Midscreen combo thanks to the changes to H Reginleiv, allowing for follow-ups and better damage."
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

// fireballs
const lFireball = { 
  moveName: 'L Frozen Blade', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '-9', 
  onhit: '-5',
  oncounterhit: '-3',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Standard fireball. \nTravels fairly fast and across the screen. Serves as a safe ender for his block strings and pokes."
};
const mFireball = { 
  moveName: 'M Frozen Blade', 
  altName: '236M', 
  damage: '800', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '-9', 
  onhit: '-5',
  oncounterhit: '-3',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Gran slashes upward before shooting out a projectile. \nFirst slash cancels out projectiles. \nUseful to turn projectile wars more in your favor as you can cancel out incoming projectiles with the upward slash before throwing out a projectile of your own. Also is helpful in throwing off your opponent\'s timing when trying to dodge 236L. Serves as a better blockstring ender than 236L, and as of the 2.0 Patch there\'s no Gap in-between the two hits."
};
const hFireball = { 
  moveName: 'H Frozen Blade', 
  altName: '236H', 
  damage: '350x3', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '48 (Entire move)', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "3-hit fireball. \nHard knockdown on airhit. \nA grown man 3-hit fireball. As of the 2.0 Patch H Reginleiv does NOT knockdown, but instead leaves them standing. Depending on distance and the state of the opponent, it allows for combos afterwards. At least +7 on hit, allowing for follow-ups even midscreen provided that the opponent is close enough to be hit. Primarily a combo and pressure tool, as it has lost a lot of its neutral prowess due to the nerf. Worth throwing out when applying pressure in the corner, however. H Reginleiv can also frame trap from cXX, albeit in a rather tight window."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Emerald Sword', 
  altName: '623L', 
  damage: '500-1000', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2(2)6', 
  recovery: '30', 
  onblock: '-23', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Invincible reversal. \nAir unblockable during the early active frames. Technically the least unsafe on block and can be difficult to punish at far ranges due to the pushback and shorter recovery than the other versions, but don't count on it. As of 2.0 Patch L version is slower and has increased Recovery, making it much easier punish."
};
const mUppercut = { 
  moveName: 'M Emerald Sword', 
  altName: '623M', 
  damage: '800, 500', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2(2)12', 
  recovery: '34', 
  onblock: '-27', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Also an invincible reversal. \nStandard non-H combo ender for damage. Also air unblockable during the early active frames."
};
const hUppercut = { 
  moveName: 'H Emerald Sword', 
  altName: '623H', 
  damage: '800, 150x4~5', 
  guard: 'Mid', 
  startup: '9', 
  active: '2(1)2x6', 
  recovery: '35', 
  onblock: '-28', 
  onhit: 'HKD (+53)',
  oncounterhit: 'HKD (+48)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Oops, all reversals. \nDouble the uppercuts. Hard knockdown. There is a small gap in-between the two strikes. The entire first strike is air unblockable, however invincibility wears off before the second strike."
};

// rekka
const lRekka = { 
  moveName: 'L Enchanted Lands', 
  altName: '214L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '16', 
  active: '6', 
  recovery: '21', 
  onblock: '-10', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Has a follow-up version of 214M that knocks down. \nGran dashes forward with a slash. Safest version of 214X at point blank. Can cancel into 214M on hit or block. On hit, 214L > 214M serves as his standard meterless combo ender. On block can be used to test your opponent's willingness to mash after 214L lest they risk a Counter Hit 214M. As of 2.0 Patch follow-up causes no Wall Bounce on Counter Hit, only knocks down."
};
const mRekka = { 
  moveName: 'M Enchanted Lands', 
  altName: '214M', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '21', 
  active: '6', 
  recovery: '21', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Does not knock down. \nGran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};
const hRekka = { 
  moveName: 'H Enchanted Lands', 
  altName: '214H', 
  damage: '1200[1800]', 
  guard: 'Mid', 
  startup: '16->75', 
  active: '6', 
  recovery: '21', 
  onblock: '+4~-8', 
  onhit: 'HKD (+50)',
  oncounterhit: 'HKD (+54)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Wallbounces in the corner. \nGran's primary juggle starter. \nSimilar to 214M, but Gran dashes forward faster. Cannot be canceled into from 214L. Causes a wall bounce in the corner on hit regardless of counter hit, allowing for additional follow ups. Exercise caution as depending on the opponent's height when used, it can cause them to fall behind Gran after the wall bounce, possibly causing a side switch with yourself in the corner."
};

// skybound art
const sba = { 
  moveName: 'Blades of Frost', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '13', 
  active: '	3(15)6(24)9', 
  recovery: '24', 
  onblock: '-10', 
  onhit: 'HKD (T:+47, S:+37)',
  oncounterhit: 'HKD (T:+47, S:+37)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Metered advancing invulnerable move. Deals big damage but has a short reach. Try using it when you're close to your opponent."
};
const ssba = { 
  moveName: 'Realm of Ice', 
  altName: '236236U', 
  damage: '3500-4475', 
  guard: 'Mid', 
  startup: '12',
  active: '6(12)3,3,3,3,3,6', 
  recovery: '55', 
  onblock: '-54', 
  onhit: 'HKD (T:+45, S:+35)',
  oncounterhit: 'HKD (T:+45, S:+35)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Gran charges and throws out an invulnerable projectile move. It can travel across the screen, however if used at point blank it will be followed by a massive blast by the summoned Proto Bahamut. Deals a lot of chip damage on block which can setup for a chip kill afterwards. After 2.0 Patch, extremely unsafe to the point where Vaseraga gets a free f.H for punish."
};


export const katInfo = [
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
  backThrow,
  airThrow,
  uOverhead,
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lFireball,
  mFireball,
  hFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  sba,
  ssba
]