// DESCRIPTIONS DONE
// FRAME DATA UNFINISHED 

const general = { char: "Charlotta", health: '10000', prejump: '4F', backdash: '22F' }

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
  oncounterhit: '+8',
  clash: '-',
  motion: ['l'],
  description: "Strong pressure option that both frame-traps with and combos into itself, 2L, f.L, and c.M."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '16',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['m'],
  description: "Self-advancing normal that is often used to continue pressure because it has a large activation range, is as fast as her other fastest normals besides c.L, and catches rolls and often jumps."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'mid',
  startup: '9',
  active: '6',
  recovery: '15',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['h'],
  description: "Situational use as an anti-air, otherwise useful as her highest damage grounded punish starter."
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
  description: ""
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
  description: ""
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+1',
  clash: '2',
  motion: ['l'],
  description: "Can be used to confirm 2L hitting someone low when it pushes you out of range of another 2L as it combos into [4]6H. Also valuable as a crouch confirm combo option after 214M."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'mid',
  startup: '7',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "Useful for maintaining pressure and forcing respect after 214M on the opponent's block. Also very valuable as combo filler when linked into from 214H. Can now be comboed into from 2L on crouching opponents."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'mid',
  startup: '24',
  active: '6',
  recovery: '18',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+11',
  clash: '5',
  motion: ['h'],
  description: "Has larger range than it looks because it moves Charlotta forward. It's useful for counter-poking particularly because it has a higher Attack Level than most other f.Hs in the game with the exception of Vaseraga's, meaning it crushes them outright instead of clashing."
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
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "2L is Charlotta's traditional low option. It has a decent amount of range for a 2L. Links into f.L on standing hit and f.M on crouching hit."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'mid',
  startup: '9',
  active: '5',
  recovery: '12',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['2', 'm'],
  description: "2M sees a lot of use in pressure, since it is a self-advancing normal that is very safe on block while only having one more frame of startup than f.M has."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'mid',
  startup: '14⇒26',
  active: '6',
  recovery: '21',
  onblock: '-10',
  onhit: '-6',
  oncounterhit: '+2',
  clash: '4',
  motion: ['2', 'h'],
  description: "2H is decent for catching extended buttons when f.H is too slow. Does more damage and moves Charlotta forward slightly when charged."
};
const n2HCharged = {
  moveName: 'Crouch Heavy (Hold)',
  altName: '2[H]',
  damage: '1000',
  guard: 'mid',
  startup: '27',
  active: '6',
  recovery: '21',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '+8',
  clash: '5',
  motion: ['2', 'h'],
  description: "2H is decent for catching extended buttons when f.H is too slow. Does more damage and moves Charlotta forward slightly when charged."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'mid',
  startup: '9',
  active: '6',
  recovery: '18',
  onblock: '-9',
  onhit: 'HKD (+46)',
  oncounterhit: 'HKD (+50)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Self-advancing sweep. Gives you a hard knockdown but you can't link into it without a counterhit or a launch."
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
  clash: '2',
  motion: ['l'],
  description: "Can very occasionally hit cross-up."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'high', 
  startup: '6', 
  active: '3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Charlotta's established cross-up jump normal."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'high', 
  startup: '8', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "Can occasionally hit cross-up."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'high', 
  startup: '6', 
  active: '3(4)3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
  description: "Slashes diagonally above Charlotta, making this a useful air-to-air tool. This can hit standing opponents (tall opponents can even be hit by both hits), but it will whiff against all crouchers."
};

// unique action
const parry5U = { 
  moveName: 'Königsschild', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '6', 
  active: '18', 
  recovery: 'Whiff: 17, On-hit: 25', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "5U has two parts, the Parry and the Counter:\nParry: Parries all moves on frames 6-23 except for throws and (Super) Skybound Arts, and reduces the incoming damage by 50%. The damage is affected by Guts, but is not considered chip damage so if you don't have enough HP to take the attack you will still die. Even if the Counter does not come out on a successful parry, Charlotta is still invulnerable for the rest of the duration and +39 as the opponent is staggered.\nCounter: If the opponent is close enough when their move is parried, a Counter slash automatically activates for damage, a side switch, and a hard knockdown. If the opponent had a normal move parried, they cannot cancel it with anything to retaliate.\n5U is a fairly reliable anti-air option, as it will trigger even against jump normals from far above you. However, its horizontal activation range is poor. Regardless, the move can still be used to counter fireballs, as they will activate the Counter If you're close enough."  
};
const parryHit5U = { 
  moveName: 'Königsschild (Attack)', 
  altName: '5U', 
  damage: '1000', 
  guard: 'mid', 
  startup: '0', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'Ground: HKD(+39), Air: HKD(+37)',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "5U has two parts, the Parry and the Counter:\nParry: Parries all moves on frames 6-23 except for throws and (Super) Skybound Arts, and reduces the incoming damage by 50%. The damage is affected by Guts, but is not considered chip damage so if you don't have enough HP to take the attack you will still die. Even if the Counter does not come out on a successful parry, Charlotta is still invulnerable for the rest of the duration and +39 as the opponent is staggered.\nCounter: If the opponent is close enough when their move is parried, a Counter slash automatically activates for damage, a side switch, and a hard knockdown. If the opponent had a normal move parried, they cannot cancel it with anything to retaliate.\n5U is a fairly reliable anti-air option, as it will trigger even against jump normals from far above you. However, its horizontal activation range is poor. Regardless, the move can still be used to counter fireballs, as they will activate the Counter If you're close enough."  
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+47)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+43)',
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
  active: '3', 
  recovery: '20', 
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
const lBall = { 
  moveName: 'L Shining Onslaught', 
  altName: '[4]6L', 
  damage: '800', 
  guard: 'all', 
  startup: '11', 
  active: '16', 
  recovery: '8', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '2',
  motion: ['4', '6', 'l', 'or', '6', 'a'],
  description: "Advancing move. Performs a rolling attack which causes a knockback animation if the move is hit or blocked. Very fast on whiff which can let her sneak in.\nShortest travel distance and safe on block.\nLeaves standing on hit."
};
const mBall = { 
  moveName: 'M Shining Onslaught', 
  altName: '[4]6M', 
  damage: '800', 
  guard: 'mid, all', 
  startup: '15', 
  active: '16', 
  recovery: '8', 
  onblock: '-10', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['4', '6', 'm', 'or', '6', 'a', 'm'],
  description: "Advancing move. Performs a rolling attack which causes a knockback animation if the move is hit or blocked. Very fast on whiff which can let her sneak in.\nLonger travel distance.\nKnocks down on hit, and wallbounces on counterhit.\nIn exchange, it's punishable on block but can be hard to punish on block if spaced properly."
};
const hBall = { 
  moveName: 'H Shining Onslaught', 
  altName: '46H', 
  damage: '1000', 
  guard: 'all', 
  startup: '11', 
  active: '16', 
  recovery: '8', 
  onblock: '-4', 
  onhit: 'HKD (+54, +60 in the corner)',
  oncounterhit: 'HKD (+58, +64 in the corner)',
  clash: '3',
  motion: ['4', '6', 'h', 'or', '6', 'a', 'h'],
  description: "Advancing move. Performs a rolling attack which causes a knockback animation if the move is hit or blocked. Very fast on whiff which can let her sneak in.\nBest of both worlds.\nSame range/damage as M, but now with faster startup than L and safe on block. Wallbounces, allowing for combo extensions."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Holy Ladder', 
  altName: '28L', 
  damage: '700, 300', 
  guard: 'mid, all', 
  startup: '11', 
  active: '4(12)7', 
  recovery: '23', 
  onblock: '-11', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '8', 'l', 'or', 'a'],
  description: "Invincible reversal. \nAir unblockable during the early active frames. Technically the least unsafe on block and can be difficult to punish at far ranges due to the pushback and shorter recovery than the other versions, but don't count on it. As of 2.0 Patch L version is slower and has increased Recovery, making it much easier punish."
};
const mUppercut = { 
  moveName: 'M Holy Ladder', 
  altName: '28M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '11', 
  active: '8(16)11', 
  recovery: '23', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '8', 'm', 'or', 'm', 'a'],
  description: "Also an invincible reversal. \nStandard non-H combo ender for damage. Also air unblockable during the early active frames."
};
const hUppercut = { 
  moveName: 'H Holy Ladder', 
  altName: '28H', 
  damage: '950~1400', 
  guard: 'mid, all', 
  startup: '11', 
  active: '1x8(12)9', 
  recovery: '23', 
  onblock: '-9', 
  onhit: 'HKD (+39)',
  oncounterhit: 'HKD (+38)',
  clash: '-',
  motion: ['2', '8', 'h', 'or', 'h', 'a'],
  description: "Oops, all reversals. \nDouble the uppercuts. Hard knockdown. There is a small gap in-between the two strikes. The entire first strike is air unblockable, however invincibility wears off before the second strike."
};

const lFlip = { 
  moveName: 'L Noble Strategy', 
  altName: '22L', 
  damage: '-', 
  guard: '-', 
  startup: '26', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['22', 'l', 'or', '2', 'a'],
  description: "Movement and pressure tool. Can be followed up by various additional actions.\nJumps upwards at a sharp arc that does not cross-up in most cases."
};
const mFlip = { 
  moveName: 'M Noble Strategy', 
  altName: '22M',
  damage: '-', 
  guard: '-', 
  startup: '26', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['22', 'm', 'or', '2', 'a', 'm'],
  description: "Movement and pressure tool. Can be followed up by various additional actions.\nJumps lower but farther in order to cross-up."
};
const hFlip = { 
  moveName: 'H Noble Strategy', 
  altName: '22H',
  damage: '-', 
  guard: '-', 
  startup: '26', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['22', 'h', 'or', '2', 'a', 'h'],
  description: "Movement and pressure tool. Can be followed up by various additional actions.\nJumps much faster and at same height as M version.\nGreat for closing distance or extending pressure, but is very vulnerable to anti-airs."
};

const lFlipSweep = {
  moveName: 'L With Surest Strike!',
  altName: '22L ⇒ No Input', 
  damage: '1200', 
  guard: 'Low', 
  startup: '56', 
  active: '13', 
  recovery: '10', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['22', 'l', 'or', '2', 'a'],
  description: "22H into this move allows for a combo afterwards.\nLow-hitting slash follow up. Extremely long active frames, working as a meaty off of 2U where it is plus on block."
}
const mFlipSweep = {
  moveName: 'With Surest Strike!',
  altName: '22M ⇒ No Input', 
  damage: '1200', 
  guard: 'Low', 
  startup: '49', 
  active: '13', 
  recovery: '10', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['22', 'l', 'or', '2', 'a'],
  description: "22H into this move allows for a combo afterwards.\nLow-hitting slash follow up. Extremely long active frames, working as a meaty off of 2U where it is plus on block."
}
const hFlipSweep = {
  moveName: 'With Surest Strike!',
  altName: '22H ⇒ No Input', 
  damage: '1200', 
  guard: 'Low', 
  startup: '45', 
  active: '13', 
  recovery: '10', 
  onblock: '-4', 
  onhit: 'HKD (+60)',
  oncounterhit: 'HKD (+64)',
  clash: '5',
  motion: ['22', 'l', 'or', '2', 'a'],
  description: "22H into this move allows for a combo afterwards.\nLow-hitting slash follow up. Extremely long active frames, working as a meaty off of 2U where it is plus on block."
}

const lFlipDive = {
  moveName: "L With Flying Nobility!",
  altName: '22L ⇒ L', 
  damage: '800', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '6', 
  onblock: '-2 ⇒ +5', 
  onhit: '0 ⇒ +7',
  oncounterhit: '+2 ⇒ +9',
  clash: '2',
  motion: ['22', 'l', 'l', 'or', '2', 'a', 'l'],
  description: "Can be used as a crossup, but does not have a crossup hitbox.\nAir dive follow up. Used to both combo on a deep hit and continue pressure on a block. Not an overhead, but recovers quickly, so the lower to the ground you are when making contact with an opponent the more plus you are on block.",
}
const mFlipDive = {
  moveName: "With Flying Nobility!",
  altName: '22M ⇒ L', 
  damage: '800', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '6', 
  onblock: '+1 ⇒ +6', 
  onhit: '+3 ⇒ +8',
  oncounterhit: '+5 ⇒ +10',
  clash: '2',
  motion: ['22', 'l', 'l', 'or', '2', 'a', 'l'],
  description: "Can be used as a crossup, but does not have a crossup hitbox.\nAir dive follow up. Used to both combo on a deep hit and continue pressure on a block. Not an overhead, but recovers quickly, so the lower to the ground you are when making contact with an opponent the more plus you are on block.",
}
const hFlipDive = {
  moveName: "With Flying Nobility!",
  altName: '22H ⇒ L', 
  damage: '800', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '6', 
  onblock: '+3 ⇒ +8', 
  onhit: '+5 ⇒ +10',
  oncounterhit: '+7 ⇒ +12',
  clash: '2',
  motion: ['22', 'l', 'l', 'or', '2', 'a', 'l'],
  description: "Can be used as a crossup, but does not have a crossup hitbox.\nAir dive follow up. Used to both combo on a deep hit and continue pressure on a block. Not an overhead, but recovers quickly, so the lower to the ground you are when making contact with an opponent the more plus you are on block.",
}

const lFlipSlam = {
  moveName: "L With Purest Bravery",
  altName: '22L ⇒ M', 
  damage: '1200', 
  guard: 'High', 
  startup: '16', 
  active: '-', 
  recovery: '16', 
  onblock: '-5 ⇒ -1', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['22', 'l', 'm', 'or', '2', 'a', 'm'],
  description: "22H into this move makes it +1 on block\nAir overhead slash attack followup. Stalls momentum for a bit in the air, which can bait out short-reaching anti-airs.",
}
const mFlipSlam = {
  moveName: "M With Purest Bravery",
  altName: '22M ⇒ M', 
  damage: '1200', 
  guard: 'High', 
  startup: '16', 
  active: '-', 
  recovery: '16', 
  onblock: '-3 ⇒ 0', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['22', 'l', 'm', 'or', '2', 'a', 'm'],
  description: "22H into this move makes it +1 on block\nAir overhead slash attack followup. Stalls momentum for a bit in the air, which can bait out short-reaching anti-airs.",
}
const hFlipSlam = {
  moveName: "H With Purest Bravery",
  altName: '22H ⇒ M', 
  damage: '1200', 
  guard: 'High', 
  startup: '16', 
  active: '-', 
  recovery: '16', 
  onblock: '+1 ⇒ +4', 
  onhit: 'HKD (+35 ⇒ +38)',
  oncounterhit: 'HKD (+39 ⇒ +42)',
  clash: '5',
  motion: ['22', 'l', 'm', 'or', '2', 'a', 'm'],
  description: "22H into this move makes it +1 on block\nAir overhead slash attack followup. Stalls momentum for a bit in the air, which can bait out short-reaching anti-airs.",
}

const lFlipThrow = {
  moveName: "L With Sweetest Skills!",
  altName: '22L ⇒ H', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '8', 
  recovery: '22 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+65 ⇒ +68)',
  oncounterhit: '-',
  clash: '-',
  motion: ['22', 'l', 'h', 'or', '2', 'a', 'h'],
  description: "Air command grab follow up. Whiffs on crouching opponents. Landing this off 22H in the corner allows for extremely damaging corner combos.",
}
const mFlipThrow = {
  moveName: "M With Sweetest Skills!",
  altName: '22M ⇒ H', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '8', 
  recovery: '22 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+65 ⇒ +68)',
  oncounterhit: '-',
  clash: '-',
  motion: ['22', 'l', 'h', 'or', '2', 'a', 'h'],
  description: "Air command grab follow up. Whiffs on crouching opponents. Landing this off 22H in the corner allows for extremely damaging corner combos.",
}
const hFlipThrow = {
  moveName: "H With Sweetest Skills!",
  altName: '22H ⇒ H', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '8', 
  recovery: '22 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+66 ⇒ +67)',
  oncounterhit: '-',
  clash: '-',
  motion: ['22', 'l', 'h', 'or', '2', 'a', 'h'],
  description: "Air command grab follow up. Whiffs on crouching opponents. Landing this off 22H in the corner allows for extremely damaging corner combos.",
}

// rekka
const lRekka = { 
  moveName: 'L Sword of Lumiel', 
  altName: '214L', 
  damage: '700', 
  guard: 'mid', 
  startup: '7', 
  active: '2(8)2(8)2', 
  recovery: '15', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Unleashes consecutive slashes while moving forward slightly. Safe on block and keeps you close to your opponent.\nHits 3 times.\nSlightly minus on block.\nLeaves Charlotta fairly close to the opponent, oftentimes close enough to perform c.M."
};
const mRekka = { 
  moveName: 'M Sword of Lumiel', 
  altName: '214M', 
  damage: '1200', 
  guard: 'mid', 
  startup: '18', 
  active: '2(8)2(8)2*→(8?)2?(8?)2?', 
  recovery: 'Hit: 12, Whiff: 8', 
  onblock: '+1', 
  onhit: '+5',
  oncounterhit: '+5',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Unleashes consecutive slashes while moving forward slightly. Safe on block and keeps you close to your opponent.\nHits 5 times.\nPlus on block.\nCan be interrupted due to its longer startup and leaves Charlotta much further away from the opponent. Links to f.L on crouching hit for combo extensions."
};
const hRekka = { 
  moveName: 'H Sword of Lumiel', 
  altName: '214H', 
  damage: '1200', 
  guard: 'mid', 
  startup: '13', 
  active: '2(8)2(8)2(8)2(8)2	', 
  recovery: '9', 
  onblock: '+4', 
  onhit: '+8',
  oncounterhit: '+8',
  clash: '3',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Unleashes consecutive slashes while moving forward slightly. Safe on block and keeps you close to your opponent.\nHits 5 times.\nMore plus than the M version.\nEven more plus on block than the M version. Links to f.M on hit for combo extensions and 2U on crouching hit for hard knockdown."
};



// skybound art
const sba = { 
  moveName: 'Brilliant Moon', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'All', 
  startup: '13', 
  active: '2x10', 
  recovery: '14', 
  onblock: '-20', 
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+43)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Charlotta winds up and launches herself forward with a multi-hit attack that deals more damage the closer it hits. Invulnerable on startup, so useful for punishing fireballs and other whiffed moves on reaction."
};
const ssba = { 
  moveName: 'Noble Execution', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '11', 
  active: '11(10)17[2,3,12]', 
  recovery: '20', 
  onblock: '-18', 
  onhit: 'HKD (T:+49, S:+39)',
  oncounterhit: 'HKD (T:+49, S:+39)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Invulnerable. Perform an upward slash followed by a powerful downward swing. Damage will be enhanced when connected from the first strike. The upwards swing actually reaches the top of the screen, so it can be used as an anti-air. It will always trigger the full-damage cinematic when it lands this way."
};


export const charlottaInfo = [
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
  parry5U,
  parryHit5U,
  groundThrow,
  backThrow,
  airThrow,
  uOverhead,
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lBall,
  mBall,
  hBall,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lFlip,
  mFlip,
  hFlip,
  lFlipSlam,
  mFlipSlam,
  hFlipSlam,
  lFlipDive,
  mFlipDive,
  hFlipDive,
  lFlipSweep,
  mFlipSweep,
  hFlipSweep,
  lFlipThrow,
  mFlipThrow,
  hFlipThrow,
  sba,
  ssba
]
