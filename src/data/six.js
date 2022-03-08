// FINAL 

const general = { char: "Seox", health: '10000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'mid',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '2',
  onhit: '6',
  motion: ['l'],
  description: "Seox's fastest normal.\nBasic, +2 on block c.L. Useful for abare due to its speed as well as pressure due to its frame advantage. Seox can use two of these in a row and still be in range for a 2L, making his pressure a bit scarier than average."
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
  description: "Great frametrap button, but frametraps after are difficult.\nLinks into c.L on crouching.\nLinks into c.H on counterhit.\nThe Granblue c.M. Useful as a frame trap from lights as its more rewarding on counterhit."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700, 300',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  motion: ['h'],
  description: "Combos into 236M.\nHigh hitstun c.H that allows for combos not possible from Seox's autocombo without a crouch confirm. Quite safe on block and makes for a high damage combo starter. Any L button into c.H will frame trap 6-frame buttons, but keep in mind that it will leave you minus."
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
  description: "Mostly relegated to combo and blockstring filler. Seox can effectively frametrap from these with 236M, which in turn can make them useful as pressure reset points once respect is established."
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
  description: "Mostly relegated to combo and blockstring filler. Seox can effectively frametrap from these with 236M, which in turn can make them useful as pressure reset points once respect is established."
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
  description: "Mostly a punish tool for quick-recovering moves as Seox's plus on block lights have comparable range. Using three 2Ls will leave Seox out of range."
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
  description: "Seox's longest poke. Cancel into rekkas for pressure and combos."
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
  onblock: '2',
  onhit: '6',
  motion: ['2', 'l'],
  description: "Excellent pressure tool.\nSeox can fit three of these in a row and still be in range for another frame trap with f.M or 2M. Links into c.M on standing opponents and 2M on crouching opponents."
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
  description: "One frame faster than f.M at the cost of a little reach. Great frame advantage for a 2M normal and quite difficult to whiff punish."
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
  description: "Seox's main anti-air.\nConverts into good damage on AA CH and decent damage on normal AA connect."
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
  onhit: 'HKD',
  motion: ['2', 'u'],
  description: "Fast, but too slow to use as a crouch confirm.\nPrimarily a combo tool due to its long recovery and high disadvantage on block. One frame slower than 2M and the same speed as f.M and f.H gives it a lot of competition as a poke."
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
  description: "Active until landing.\nGreat horizontal reach."
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
  description: "Seox's crossup normal.\nInstant j.M can hit taller standing characters like Katalina and Percival. Other than that, use this when it's hard to tell what side Seox will land on."
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
  description: "Seox's primary jump-in.\nj.H has the most downwards reach of all of Seox's air normals and has decent horizontal range too, making it a great jump-in button for fireball punishes."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'Mid', 
  startup: '12', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Can be advantageous if it hits an opponent's foot area.\nPretty slow but serves its purpose of throwing off anti-air timings. Leads to a combo if it connects late on a crouching opponent. Part of what makes Seox's approach so good."
};

// unique action
const lv1U = { 
  moveName: 'Demon Step', 
  altName: '5U', 
  damage: '800', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "Seox sends out a shadow clone of himself as a projectile. Unlike other projectiles in the game, this projectile can be attacked and will disappear if hit. Holding the button will make Seox teleport to wherever the fireball connects, but will also make him take damage if the fireball is hit by an attack. The held version combos into c.L."
};
const lv2U = { 
  moveName: 'New Perspective', 
  altName: '5[U]', 
  damage: '800', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "Seox sends out a shadow clone of himself as a projectile. Unlike other projectiles in the game, this projectile can be attacked and will disappear if hit. Holding the button will make Seox teleport to wherever the fireball connects, but will also make him take damage if the fireball is hit by an attack. The held version combos into c.L."
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
  description: "",
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: "",
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
const lRekka = { 
  moveName: 'L Six-Claw Execution', 
  altName: '236L', 
  damage: '400', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Seox's main special move, a rekka that leads into different follow-ups. Each starter can turn into a myriad of frame traps and pressure resets and is his main pressure and combo tool. Think carefully about when you should spend the EX version.\nHits twice with a blue trail.\nSeox's main combo ender and pressure extender. Combos from pretty much anything. Leads to the 6M follow-up on crouching opponents, which gives Seox more combo options."
};
const mRekka = { 
  moveName: 'M Six-Claw Execution', 
  altName: '236M', 
  damage: '600', 
  guard: 'Mid', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Seox's main special move, a rekka that leads into different follow-ups. Each starter can turn into a myriad of frame traps and pressure resets and is his main pressure and combo tool. Think carefully about when you should spend the EX version.\nHits once with a red trail.\nSituational combo extender and frametrap tool. Combos from autocombo on crouching opponents and c.H always. Always combos into the 6M follow-up."
};
const hRekka = { 
  moveName: 'H Six-Claw Execution', 
  altName: '236H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Seox's main special move, a rekka that leads into different follow-ups. Each starter can turn into a myriad of frame traps and pressure resets and is his main pressure and combo tool. Think carefully about when you should spend the EX version.\nYellow effect makes it easy to distinguish.\nCombos from anything and always leads to the 6M follow-up for good damage. Be careful using this as you lose Seox's main combo and pressure tool."
};
const rekka = {
  moveName: 'L Archdemon Kick', 
  altName: '236X -> 6L', 
  damage: '800', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const rekka = {
  moveName: 'L Archdemon Kick', 
  altName: '236X -> 6L', 
  damage: '300', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const rekka = {
  moveName: 'M Archdemon Kick', 
  altName: '236X -> 6M', 
  damage: '300', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const rekka = {
  moveName: 'Wolf\'s Howl', 
  altName: '236X -> 4X', 
  damage: '800', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
};
const rekka = {
  moveName: 'H Six-Claw Execution', 
  altName: '236H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "L version keeps opponent grounded. Blue trail.M version launches on hit. Red trail.\nCancels into any other follow-up.\nSeox's rekka extender. The M version always combos from 236M and 236H, but only combos from 236L on crouching opponents."
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