// FINAL 

const general = { char: "Seox", health: '10000', prejump: '4F', backdash: '22F' }

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
  description: "Seox's fastest normal.\nBasic, +2 on block c.L. Useful for abare due to its speed as well as pressure due to its frame advantage. Seox can use two of these in a row and still be in range for a 2L, making his pressure a bit scarier than average."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '12',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "Great frametrap button, but frametraps after are difficult.\nLinks into c.L on crouching.\nLinks into c.H on counterhit.\nThe Granblue c.M. Useful as a frame trap from lights as its more rewarding on counterhit."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700, 300',
  guard: 'Mid',
  startup: '8',
  active: '2,4',
  recovery: '18',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
  description: "Combos into 236M.\nHigh hitstun c.H that allows for combos not possible from Seox's autocombo without a crouch confirm. Quite safe on block and makes for a high damage combo starter. Any L button into c.H will frame trap 6-frame buttons, but keep in mind that it will leave you minus."
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
  description: "Mostly relegated to combo and blockstring filler. Seox can effectively frametrap from these with 236M, which in turn can make them useful as pressure reset points once respect is established."
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
  description: "Mostly relegated to combo and blockstring filler. Seox can effectively frametrap from these with 236M, which in turn can make them useful as pressure reset points once respect is established."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '4',
  recovery: '12',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+3',
  clash: '2',
  motion: ['l'],
  description: "Mostly a punish tool for quick-recovering moves as Seox's plus on block lights have comparable range. Using three 2Ls will leave Seox out of range."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['m'],
  description: "Seox's longest poke. Cancel into rekkas for pressure and combos."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '21',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '+5',
  clash: '4',
  motion: ['h'],
  description: "Same startup as f.M.\nComparable startup and range to f.M but with higher damage, clash level, and recovery. Excellent as a whiff punish tool as its higher hitstun gives more time to confirm."
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
  description: "Excellent pressure tool.\nSeox can fit three of these in a row and still be in range for another frame trap with f.M or 2M. Links into c.M on standing opponents and 2M on crouching opponents."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '3',
  recovery: '14',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['2', 'm'],
  description: "One frame faster than f.M at the cost of a little reach. Great frame advantage for a 2M normal and quite difficult to whiff punish."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '5',
  recovery: '24',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "Seox's main anti-air.\nConverts into good damage on AA CH and decent damage on normal AA connect."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '8',
  active: '3',
  recovery: '23',
  onblock: '-11',
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Fast, but too slow to use as a crouch confirm.\nPrimarily a combo tool due to its long recovery and high disadvantage on block. One frame slower than 2M and the same speed as f.M and f.H gives it a lot of competition as a poke."
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
  description: "Active until landing.\nGreat horizontal reach."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '6', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Seox's crossup normal.\nInstant j.M can hit taller standing characters like Katalina and Percival. Other than that, use this when it's hard to tell what side Seox will land on."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '8', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "Seox's primary jump-in.\nj.H has the most downwards reach of all of Seox's air normals and has decent horizontal range too, making it a great jump-in button for fireball punishes."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'Mid', 
  startup: '24', 
  active: '-', 
  recovery: '11 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['u'],
  description: "Can be advantageous if it hits an opponent's foot area.\nPretty slow but serves its purpose of throwing off anti-air timings. Leads to a combo if it connects late on a crouching opponent. Part of what makes Seox's approach so good."
};

// unique action
const lv1U = { 
  moveName: 'Demon Step', 
  altName: '5U', 
  damage: '800', 
  guard: 'Mid', 
  startup: '27', 
  active: '25', 
  recovery: '24 (Whiff: 10)', 
  onblock: '+1', 
  onhit: '+5',
  oncounterhit: '+7',
  clash: '-',
  motion: ['u'],
  description: "Seox sends out a shadow clone of himself as a projectile. Unlike other projectiles in the game, this projectile can be attacked and will disappear if hit. Holding the button will make Seox teleport to wherever the fireball connects, but will also make him take damage if the fireball is hit by an attack. The held version combos into c.L."
};
const lv2U = { 
  moveName: 'New Perspective', 
  altName: '5[U]', 
  damage: '800', 
  guard: 'Mid', 
  startup: '27', 
  active: '25', 
  recovery: '23 (Whiff: 6)', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+8',
  clash: '-',
  motion: ['u'],
  description: "Seox sends out a shadow clone of himself as a projectile. Unlike other projectiles in the game, this projectile can be attacked and will disappear if hit. Holding the button will make Seox teleport to wherever the fireball connects, but will also make him take damage if the fireball is hit by an attack. The held version combos into c.L."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+37)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "",
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+29)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: "",
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
  startup: '26', 
  active: '6', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'u'],
  description: ""
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
const lRekka = { 
  moveName: 'L Six-Claw Execution', 
  altName: '236L', 
  damage: '400', 
  guard: 'Mid', 
  startup: '13', 
  active: '2(4)2', 
  recovery: '25', 
  onblock: '-14', 
  onhit: '-10',
  oncounterhit: '-10',
  clash: '2',
  motion: ['236', 'l', 'or', 'a'],
  description: "Seox's main special move, a rekka that leads into different follow-ups. Each starter can turn into a myriad of frame traps and pressure resets and is his main pressure and combo tool. Think carefully about when you should spend the EX version.\nHits twice with a blue trail.\nSeox's main combo ender and pressure extender. Combos from pretty much anything. Leads to the 6M follow-up on crouching opponents, which gives Seox more combo options."
};
const mRekka = { 
  moveName: 'M Six-Claw Execution', 
  altName: '236M', 
  damage: '600', 
  guard: 'Mid', 
  startup: '21', 
  active: '2', 
  recovery: '23', 
  onblock: '-10', 
  onhit: '-6',
  oncounterhit: '-2',
  clash: '4',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Seox's main special move, a rekka that leads into different follow-ups. Each starter can turn into a myriad of frame traps and pressure resets and is his main pressure and combo tool. Think carefully about when you should spend the EX version.\nHits once with a red trail.\nSituational combo extender and frametrap tool. Combos from autocombo on crouching opponents and c.H always. Always combos into the 6M follow-up."
};
const hRekka = { 
  moveName: 'H Six-Claw Execution', 
  altName: '236H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '16', 
  active: '2(1)2(1)2(1)2', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '0',
  clash: '4',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Seox's main special move, a rekka that leads into different follow-ups. Each starter can turn into a myriad of frame traps and pressure resets and is his main pressure and combo tool. Think carefully about when you should spend the EX version.\nYellow effect makes it easy to distinguish.\nCombos from anything and always leads to the 6M follow-up for good damage. Be careful using this as you lose Seox's main combo and pressure tool."
};
const lRekkaKick = {
  moveName: 'L Archdemon Kick', 
  altName: '236X -> 6L', 
  damage: '300', 
  guard: 'Mid', 
  startup: '9', 
  active: '5,2', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '0',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const mRekkaKick = {
  moveName: 'M Archdemon Kick', 
  altName: '236X -> 6M', 
  damage: '300', 
  guard: 'Mid', 
  startup: '16->14', 
  active: '5,2', 
  recovery: '20', 
  onblock: '-7', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const hRekkaKick = {
  moveName: 'H Archdemon Kick', 
  altName: '236X -> 6H', 
  damage: '300', 
  guard: 'Mid', 
  startup: '16->12', 
  active: '5,2', 
  recovery: '20', 
  onblock: '-7', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const lRekkaEnder = {
  moveName: 'L Wolf\'s Howl', 
  altName: '236X -> 4L', 
  damage: '600', 
  guard: 'Mid', 
  startup: '9', 
  active: '5', 
  recovery: '22', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version combos from anything.\nM version combos from M Archdemon kick.\nM version wallbounces on counterhit.\nA thrusting attack that sends the opponent flying. L version is your standard ground combo ender. M version works as a frametrap and another potential crouch confirm point. Going for a frametrap with the M version is very dangerous but leads to excellent damage in the corner."
};
const mRekkaEnder = {
  moveName: 'M Wolf\'s Howl',  
  altName: '236X -> 4M', 
  damage: '1100', 
  guard: 'Mid', 
  startup: '21', 
  active: '5', 
  recovery: '22', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version combos from anything.\nM version combos from M Archdemon kick.\nM version wallbounces on counterhit.\nA thrusting attack that sends the opponent flying. L version is your standard ground combo ender. M version works as a frametrap and another potential crouch confirm point. Going for a frametrap with the M version is very dangerous but leads to excellent damage in the corner."
};
const hRekkaEnder = {
  moveName: 'H Wolf\'s Howl',  
  altName: '236X -> 4H', 
  damage: '1100', 
  guard: 'Mid', 
  startup: '21', 
  active: '5', 
  recovery: '22', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version combos from anything.\nM version combos from M Archdemon kick.\nM version wallbounces on counterhit.\nA thrusting attack that sends the opponent flying. L version is your standard ground combo ender. M version works as a frametrap and another potential crouch confirm point. Going for a frametrap with the M version is very dangerous but leads to excellent damage in the corner."
};
const lRekkaOverhead = {
  moveName: 'L Snake Bite',  
  altName: '236X -> 8L', 
  damage: '800', 
  guard: 'Mid', 
  startup: '23', 
  active: '3', 
  recovery: '13', 
  onblock: '+1', 
  onhit: '+5',
  oncounterhit: '+9',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version has a blue trail and is a little faster. Links into c.L.\nM version has a red trail and links into c.M.\nSeox's pressure reset option from Six-Claw Execution. Always plus on block and ground bounces from 236H allowing for extended combos. Gives a closer knockdown than M Wolf's Howl on opponents launched from M Archdemon Kick at the cost of damage."
}
const mRekkaOverhead = {
  moveName: 'M Snake Bite',  
  altName: '236X -> 8M', 
  damage: '900', 
  guard: 'Mid', 
  startup: '30', 
  active: '3', 
  recovery: '12', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+10',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version has a blue trail and is a little faster. Links into c.L.\nM version has a red trail and links into c.M.\nSeox's pressure reset option from Six-Claw Execution. Always plus on block and ground bounces from 236H allowing for extended combos. Gives a closer knockdown than M Wolf's Howl on opponents launched from M Archdemon Kick at the cost of damage."
}
const hRekkaOverhead = {
  moveName: 'H Snake Bite',  
  altName: '236X -> 8H', 
  damage: '900', 
  guard: 'Mid', 
  startup: '30', 
  active: '3', 
  recovery: '12', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+10',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version has a blue trail and is a little faster. Links into c.L.\nM version has a red trail and links into c.M.\nSeox's pressure reset option from Six-Claw Execution. Always plus on block and ground bounces from 236H allowing for extended combos. Gives a closer knockdown than M Wolf's Howl on opponents launched from M Archdemon Kick at the cost of damage."
}
const rekkaTeleport6 = {
  moveName: 'Shadow Trace (Forward)',  
  altName: '236X -> 6U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '23', 
  onblock: '-12', 
  onhit: '-8',
  oncounterhit: '-8',
  clash: '-',
  motion: ['6', 'u'],
  description: "Command dash, can phase through opponents.\nA movement option off of Six-Claw Execution. Seox can dash forward or backward based on input. The backdash version is useful for gaining space and is generally quite safe. The forward version is great for sneaking in a pressure reset on an opponent respecting a potential frame trap or looking for Snake Bite."
}
const rekkaTeleport4 = {
  moveName: 'Shadow Trace (Back)',  
  altName: '236X -> 4U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30', 
  onblock: '-19', 
  onhit: '-15',
  oncounterhit: '-15',
  clash: '-',
  motion: ['4', 'u'],
  description: "Command dash, can phase through opponents.\nA movement option off of Six-Claw Execution. Seox can dash forward or backward based on input. The backdash version is useful for gaining space and is generally quite safe. The forward version is great for sneaking in a pressure reset on an opponent respecting a potential frame trap or looking for Snake Bite."
}


// dragon punches
const lParry = { 
  moveName: 'L Thunderflash', 
  altName: '623L', 
  damage: '1000', 
  guard: '-', 
  startup: '4', 
  active: '20 (Armor)', 
  recovery: '13', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Seox goes into a counter stance. All strikes can be parried and counterattack against. If you hold the button while parrying an attack, Seox will reposition himself depending on the version.\n\nL version moves forward if held.\nM version moves up if held.\nNot instant but useful to get around predictable things in neutral like fireballs."
};
const mParry = { 
  moveName: 'M Thunderflash', 
  altName: '623M', 
  damage: '1000', 
  guard: '-', 
  startup: '4', 
  active: '20 (Armor)', 
  recovery: '13', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Seox goes into a counter stance. All strikes can be parried and counterattack against. If you hold the button while parrying an attack, Seox will reposition himself depending on the version.\n\nL version moves forward if held.\nM version moves up if held.\nNot instant but useful to get around predictable things in neutral like fireballs."
};
const hParry = { 
  moveName: 'H Thunderflash', 
  altName: '623H', 
  damage: '1000', 
  guard: '-', 
  startup: '1', 
  active: '18 (Armor)', 
  recovery: '14', 
  onblock: '-8', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Seox goes into a counter stance. All strikes can be parried and counterattack against. If you hold the button while parrying an attack, Seox will reposition himself depending on the version.\nMoves forward if held.\nActive from frame 1, but shorter active time than non-EX versions.\nSeox's counter reversal. Vulnerable to throws but beats safejumps and has the added benefit of also being a movement tool."
};

// rekka
const lCrossSlash = { 
  moveName: 'L Gate of Demons', 
  altName: '214L', 
  damage: '700', 
  guard: 'All', 
  startup: '34', 
  active: '29 (Fireball)', 
  recovery: '58', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+2',
  clash: '-',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Fires a projectile.\nHard to zone with as the projectile moves downwards. Useful as a meaty after a tech flipout or as a way to secure a certain part of the screen."
};
const mCrossSlash = { 
  moveName: 'M Gate of Demons', 
  altName: '214M', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '29', 
  active: '5', 
  recovery: '14', 
  onblock: '-1', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Claw dive.\nSeox's best meterless combo out of AA 2H."
};
const hCrossSlash = { 
  moveName: 'H Gate of Demons', 
  altName: '214H', 
  damage: '1200', 
  guard: 'All', 
  startup: '21', 
  active: '3(4),32 (Fireball)', 
  recovery: '20', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '+7',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Two-hit projectile like 214L.\nCombo extender from c.H.\nPlus on block and allows for combo and pressure extensions."
};
const lAirCrossSlash = { 
  moveName: 'L Gate of Demons (Air)', 
  altName: 'j214L', 
  damage: '800', 
  guard: 'All', 
  startup: '9', 
  active: '5', 
  recovery: '4 (On landing)', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Claw strike, bounces back on hit/block."
};
const mAirCrossSlash = { 
  moveName: 'M Gate of Demons (Air)', 
  altName: 'j214M', 
  damage: '800', 
  guard: 'All', 
  startup: '15', 
  active: '12', 
  recovery: '13 (On landing)', 
  onblock: '-1', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Claw strike, bounces forward on hit/block.\nRetains air options upon connect, allowing for a followup.\nOpens up combo extensions in the air."
};
const hAirCrossSlash = { 
  moveName: 'H Gate of Demons (Air)', 
  altName: 'j214H', 
  damage: '1200', 
  guard: 'All', 
  startup: '9', 
  active: '3(4)Fireball', 
  recovery: '4 (On landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Air fireball.\nJust as useful as the ground version. Using it in combos is more difficult but it's a lot more applicable in neutral."
};

const lWalljump = {
  moveName: 'L Empty Hand', 
  altName: '[2]8L', 
  damage: '1000', 
  guard: 'All', 
  startup: '36', 
  active: '8', 
  recovery: '14', 
  onblock: '-3 ⇒ +4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '8', 'l', 'or', '2', 'a'],
  description: "Seox's walldive attack. Has projectile invulnerability can be used to read and punish fireballs. Framedata on block varies depending on the height it hits the opponent. The lower it hits the more plus it becomes.\nDives at a sharp, downwards angle.\nMostly useful as a fakeout to make your opponent whiff an AA."
};
const mWalljump = {
  moveName: 'M Empty Hand', 
  altName: '[2]8M', 
  damage: '1000', 
  guard: 'All', 
  startup: '36', 
  active: '10', 
  recovery: '14', 
  onblock: '-5 ⇒ +4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '8', 'm', 'or', '2', 'a', 'm'],
  description: "Seox's walldive attack. Has projectile invulnerability can be used to read and punish fireballs. Framedata on block varies depending on the height it hits the opponent. The lower it hits the more plus it becomes.\nDives and travels about halfscreen.\nThis is the best non-EX version to go over fireballs in neutral, but its speed and input makes this difficult to do on reaction."
};
const hWalljump = {
  moveName: 'H Empty Hand', 
  altName: '[2]8H', 
  damage: '1000', 
  guard: 'All', 
  startup: '32', 
  active: '7 ⇒ 13', 
  recovery: '14', 
  onblock: '-2 ⇒ +4', 
  onhit: 'HKD (+53)',
  oncounterhit: 'HKD (+57)',
  clash: '3',
  motion: ['2', '8', 'h', 'or', '2', 'a', 'h'],
  description: "Seox's walldive attack. Has projectile invulnerability can be used to read and punish fireballs. Framedata on block varies depending on the height it hits the opponent. The lower it hits the more plus it becomes.\nDives to opponent.\nCan be held.\nCan lead to a combo if it counterhits but is quite spacing-dependant."
}

// skybound art
const sba = { 
  moveName: 'Void Claws: Terminus', 
  altName: '236236H', 
  damage: '3500', 
  guard: 'Mid', 
  startup: '13', 
  active: '3,6', 
  recovery: '41', 
  onblock: '-27', 
  onhit: 'HKD (S:+44, T:+34)',
  oncounterhit: 'HKD (S:+44, T:+34)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "A claw strike with invulnerability. If it hits close, Seox will follow up with a series of cinematic attacks. The range of this super is short compared to other thrust supers and the range that will activate his cinematic is even smaller, around f.M range."
};
const installSba = { 
  moveName: 'Six-Ruin\'s Enlightenment', 
  altName: '214214H', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '22', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
  description: "Seox creates two shadow clones who will mimic his actions and attack with him. While the Skybound Art is active, Seox's attacks will hit multiple times."
};
const ssba = { 
  moveName: 'Catastrophe', 
  altName: '236236U', 
  damage: '4500', 
  guard: 'Mid', 
  startup: '14', 
  active: '3,6', 
  recovery: '40', 
  onblock: '-30', 
  onhit: 'HKD (S:+30, T:+40)',
  oncounterhit: 'HKD (S:+30, T:+40)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "An advancing attack will invulnerability. On a close hit, Seox brings out the shadow clones and unleashes a cinematic beatdown."
};


export const sixInfo = [
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
  groundThrow,
  backThrow,
  airThrow,
  uOverhead,
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lParry,
  mParry,
  hParry,
  lRekka,
  mRekka,
  hRekka,
  lRekkaKick,
  mRekkaKick,
  hRekkaKick,
  lRekkaOverhead,
  mRekkaOverhead,
  hRekkaOverhead,
  lRekkaEnder,
  mRekkaEnder,
  hRekkaEnder,
  rekkaTeleport4,
  rekkaTeleport6,
  lWalljump,
  mWalljump,
  hWalljump,
  lCrossSlash,
  mCrossSlash,
  hCrossSlash,
  lAirCrossSlash,
  mAirCrossSlash,
  hAirCrossSlash,
  sba,
  installSba,
  ssba
]