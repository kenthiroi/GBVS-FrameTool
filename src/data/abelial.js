// FINAL 

const general = { char: "Belial", health: '10000', prejump: '4F', backdash: '26F' }

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
  motion: ['l'],
  description: "+2 on block, excellent for pressure.\nLinks into c.M on hit.\nBelial's main pressure normal alongside 2L."
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
  motion: ['m'],
  description: "Links into 2L and c.L on crouching hit.\nLinks into c.H on counterhit."  
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700,500',
  guard: 'All',
  startup: '9',
  active: '5',
  recovery: '19',
  onblock: '-5',
  onhit: '-1',
  motion: ['h'],
  description: "Two hits means counterhit links are limited.\nAvatar Belial's highest damage punish starter."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '350',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-3',
  onhit: '+1',
  motion: ['l', 'l'],
  description: "Standard combo filler. Be careful with this on block as the last hit is punishable unlike other autocombos."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '350',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-5',
  onhit: '0',
  motion: ['l', 'l', 'l'],
  description: "Standard combo filler. Be careful with this on block as the last hit is punishable unlike other autocombos."
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
  motion: ['l'],
  description: "Belial's fastest button to stop people from running in on him. Always links out of 2L and c.L but should only really be used if no other options work. Also functions as a frame trap, but will lose to 5-frame normals if used after 2L."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '300, 500',
  guard: 'All',
  startup: '6(8)',
  active: '5',
  recovery: '14',
  onblock: '-2',
  onhit: '+2',
  motion: ['m'],
  description: "Two-hit far medium. Unsafe on block unlike normal Belial's version of the move."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'All',
  startup: '9',
  active: '2,X',
  recovery: '10',
  onblock: '-5',
  onhit: '-1',
  motion: ['h'],
  description: "Shorter than it looks.\nAvatar Belial's longest range poke next to 2U. Always combos into 214L."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'All',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '0',
  onhit: '+6',
  motion: ['2', 'l'],
  description: "Only 0 on block, use c.L when possible.\nAvatar Belial's version of a mid jab. Has some issues frame trapping due to being less plus than average, but it is a 5-frame crouching jab."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '3',
  recovery: '11',
  onblock: '+1',
  onhit: '+5',
  motion: ['2', 'm'],
  description: "Knocks opponent down on hit.\nAvatar Belial's fastest low at 6 frames. Does not combo into anything but special moves due to its knockdown properties and only consistently combos into 214L."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'All',
  startup: '10',
  active: '6',
  recovery: '23',
  onblock: '-12',
  onhit: '-8',
  motion: ['2', 'h'],
  description: "Avatar Belial's highest reward anti-air."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'All',
  startup: '10',
  active: '6',
  recovery: '20',
  onblock: '-11',
  onhit: 'HKD',
  motion: ['2', 'u'],
  description: "Hard knockdown on hit."
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
  motion: ['l'],
  description: "Active until landing.\nHits entirely below and in front of Avatar Belial, making it a poor air-to-air option."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['m'],
  description: "Early active frames can cross up.\nAvatar Belial's longest range air normal and the most useful if you don't know which side he'll land on."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '700', 
  guard: 'High', 
  startup: '10', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['h'],
  description: "Avatar Belial's biggest jump-in."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '900', 
  guard: 'All', 
  startup: '23', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Sends Belial downwards at a 40° angle.\nBounces off opponent on hit or block.\nAvatar Belial's divekick."
};

// unique action
const laserBeam = { 
  moveName: 'Habakkuk', 
  altName: '5U', 
  damage: '700', 
  guard: 'All', 
  startup: '28', 
  active: '-', 
  recovery: '-', 
  onblock: '+2', 
  onhit: '+8',
  motion: ['u'],
  description: "Whiffs against crouching opponents.\nCharged version knocks down on hit.\nThe first of Avatar Belial's three projectiles. Stops opponents from counterzoning due to the beam having negligable travel time. Charging the beam can also catch Rolls during their recovery."
};

const laserBeamCharged = { 
  moveName: 'Habakkuk (Charged)', 
  altName: '5U', 
  damage: '700', 
  guard: 'All', 
  startup: '49', 
  active: '-', 
  recovery: '-', 
  onblock: '+10', 
  onhit: 'KD',
  motion: ['u'],
  description: "Whiffs against crouching opponents.\nCharged version knocks down on hit.\nThe first of Avatar Belial's three projectiles. Stops opponents from counterzoning due to the beam having negligable travel time. Charging the beam can also catch Rolls during their recovery."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
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
  guard: 'High', 
  startup: '26', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '+1',
  motion: ['m', 'u'],
  description: ""
};

// fireballs
const lFireball = { 
  moveName: 'L Goetia', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-10', 
  onhit: '-6',
  motion: ['236', 'l', 'or', 'a'],
  description: "Belial's projectile. Overall an extremely versatile tool.\nGoes forward and is used like a standard projectile, or to control space by transitioning into Everyone's A Little Crooked."
};
const mFireball = { 
  moveName: 'M Goetia', 
  altName: '236M', 
  damage: '800', 
  guard: 'All', 
  startup: '17', 
  active: '-', 
  recovery: '-', 
  onblock: '-10', 
  onhit: '-6',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Belial's projectile. Overall an extremely versatile tool.\nGoes upward at about a 40 degree angle from Belial. Used to control air space occasionally, and sometimes to reset pressure, but never without the follow-up."
};
const hFireball = { 
  moveName: 'H Goetia', 
  altName: '236H', 
  damage: '300x3', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+2', 
  onhit: '+6',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Belial's projectile. Overall an extremely versatile tool.\nFollows the same trajectory as 236L, and has three hits instead of one. What makes it unique to the other two versions is its ability to transition into Everyone's A Little Crooked even on hit and block, making it an extremely strong tool for midscreen combos and extending pressure from a frame trap. The H followup only combos on crouching opponents."
};

const lFireballFollowUp = {
  moveName: 'L Everyones A Little Crooked',
  altName: '236L->4L',
  damage: '250x3',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '+1',
  onhit: '+5',
  motion: ['236', 'l', '4', 'l'],
  description: "Goetia followup which transforms the projectile into a spinning scythe that hits multiple times. The scythe takes a (very short) moment to spin up after transforming, during which the projectile does not have a hitbox. L followup causes the scythe to move forward, M followup causes the scythe to move backward, and H followup causes the scythe to decelerate and eventually spin in place.\nIn addition to the universal forward/backwards/stop commands, the L and M followups cause the scythe to move vertically up or down depending on which version of Goetia was initially used. For example, the forward moving L Goetia cancelled into L followup will cause the scythe to move up as well as forwards, while M Goetia into L followup will cause the scythe to move down as well as forwards. The specifics are as follows:\nThe L and M followups to L and H Goetia cause the projectile to move forwards & up and backwards & up respectively\nThe L and M followups to M Goetia cause the projectile to move forwards & down and backwards & down respectively\nThe H followups to all versions of Goetia do not affect the scythe's vertical positioning\nThe L and H followups push the opponent slightly on hit and block, while the M followup vacuums opponents towards Belial. The L and M followups hit 3 times, while the H followup hits 5 times."
}

const mFireballFollowUp = {
  moveName: 'L Everyones A Little Crooked',
  altName: '236L->4M',
  damage: '250x3',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '+1',
  onhit: '+5',
  motion: ['236', 'l', '4', 'm'],
  description: "Goetia followup which transforms the projectile into a spinning scythe that hits multiple times. The scythe takes a (very short) moment to spin up after transforming, during which the projectile does not have a hitbox. L followup causes the scythe to move forward, M followup causes the scythe to move backward, and H followup causes the scythe to decelerate and eventually spin in place.\nIn addition to the universal forward/backwards/stop commands, the L and M followups cause the scythe to move vertically up or down depending on which version of Goetia was initially used. For example, the forward moving L Goetia cancelled into L followup will cause the scythe to move up as well as forwards, while M Goetia into L followup will cause the scythe to move down as well as forwards. The specifics are as follows:\nThe L and M followups to L and H Goetia cause the projectile to move forwards & up and backwards & up respectively\nThe L and M followups to M Goetia cause the projectile to move forwards & down and backwards & down respectively\nThe H followups to all versions of Goetia do not affect the scythe's vertical positioning\nThe L and H followups push the opponent slightly on hit and block, while the M followup vacuums opponents towards Belial. The L and M followups hit 3 times, while the H followup hits 5 times."
}

const hFireballFollowUp = {
  moveName: 'L Everyones A Little Crooked',
  altName: '236L->4H',
  damage: '150x5',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '+1',
  onhit: '+5',
  motion: ['236', 'l', '4', 'h'],
  description: "Goetia followup which transforms the projectile into a spinning scythe that hits multiple times. The scythe takes a (very short) moment to spin up after transforming, during which the projectile does not have a hitbox. L followup causes the scythe to move forward, M followup causes the scythe to move backward, and H followup causes the scythe to decelerate and eventually spin in place.\nIn addition to the universal forward/backwards/stop commands, the L and M followups cause the scythe to move vertically up or down depending on which version of Goetia was initially used. For example, the forward moving L Goetia cancelled into L followup will cause the scythe to move up as well as forwards, while M Goetia into L followup will cause the scythe to move down as well as forwards. The specifics are as follows:\nThe L and M followups to L and H Goetia cause the projectile to move forwards & up and backwards & up respectively\nThe L and M followups to M Goetia cause the projectile to move forwards & down and backwards & down respectively\nThe H followups to all versions of Goetia do not affect the scythe's vertical positioning\nThe L and H followups push the opponent slightly on hit and block, while the M followup vacuums opponents towards Belial. The L and M followups hit 3 times, while the H followup hits 5 times."
}

// dragon punches
const lUppercut = { 
  moveName: 'L Notoria', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-20', 
  onhit: 'KD',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Belial's reversal. One of the best DPs in the game. A standard DP with less air time than others, giving characters who thrive on air combos worse punishes."
};
const mUppercut = { 
  moveName: 'M Notoria', 
  altName: '623M', 
  damage: '1000, 500', 
  guard: 'All', 
  startup: '38', 
  active: '-', 
  recovery: '-', 
  onblock: '+2', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Belial's reversal. One of the best DPs in the game. Has no invulnerability and only hits on the way down, but is plus on block. Can be used as a fakeout for people expecting the L version, but don't expect a good player to fall for it, as it can quite easily be interrupted with DP or even 2H on reaction. It can also be meatied to be a maximum of +7 on block while having 11 frames of recovery."
};
const hUppercut = { 
  moveName: 'H Notoria', 
  altName: '623H', 
  damage: '600, 300, 500', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-12', 
  onhit: 'HKD',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Belial's reversal. One of the best DPs in the game. Reintroduces the invulnerability and adds a follow-up hit for significantly stronger okizeme and damage, making it a strong combo ender in many situations."
};

// rekka
const lRekka = { 
  moveName: 'L Asmodeus', 
  altName: '214L', 
  damage: '700, 500', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-6', 
  onhit: 'KD',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "An advancing strike. If it hits from close range, it will grab the opponent and do more damage. A combo ender that sees usage when you're too far for 236H/623H to hit, or if those specials are on cooldown. Can also be used as a frame trap, but it'll lose you your turn."
};
const mRekka = { 
  moveName: 'M Asmodeus', 
  altName: '214M', 
  damage: '700, 700', 
  guard: 'All', 
  startup: '21', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'KD',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "An advancing strike. If it hits from close range, it will grab the opponent and do more damage. A lso a combo ender, but can only be comboed into from c.H or full autocombo on crouching hit."
};
const hRekka = { 
  moveName: 'H Asmodeus', 
  altName: '214H', 
  damage: '700, 600', 
  guard: 'All', 
  startup: '14', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "An advancing strike. If it hits from close range, it will grab the opponent and do more damage. Launches the opponent and combos from basically any normal, leading to massive damage in corner. Post-236H nerf it's undoubtedly your best corner combo starter."
};

const lCmdThrow = {
  moveName: "L Vassago",
  altName: '632146L',
  damage: '2000',
  guard: 'Throw',
  startup: '35',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD',
  description: "A forward walk that ends in a command throw. Moves a short distance, but won't activate until Belial has walked its full length."
}

const mCmdThrow = {
  moveName: "M Vassago",
  altName: '632146M',
  damage: '2500',
  guard: 'Throw',
  startup: '53',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD',
  description: "A forward walk that ends in a command throw. Moves further. You probably won't use this at all due to its absurd startup."
}

const hCmdThrow = {
  moveName: "H Vassago",
  altName: '632146H',
  damage: '2000',
  guard: 'Throw',
  startup: '26',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD',
  description: "A forward walk that ends in a command throw. Will automatically activate once Belial is close, making it by far the most practical version, despite the EX flash being an additional telegraph."
}

// skybound art
const sba = { 
  moveName: 'Legemeton', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'All', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-19', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "An invulnerable move that strikes first, then dashes forward with another strike, so it can be used against distant enemies too. The gap between the two hits is just long enough that if they input 4G during the flash, the second hit'll catch its recovery.\nAbsurdly short range for full damage if you use the simple input, so try not to do that."
};
const ssba = { 
  moveName: 'Anagenesis', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-29', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Invulnerable. Kicks the enemy into the air, then finishes them off with Anagenesis. Useful for close combos, or to interrupt/punish the enemy."
};


export const belialInfo = [
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
  laserBeam,
  laserBeamCharged,
  groundThrow,
  airThrow,
  uOverhead,
  lFireball,
  mFireball,
  hFireball,
  lFireballFollowUp,
  mFireballFollowUp,
  hFireballFollowUp,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lCmdThrow,
  mCmdThrow,
  hCmdThrow,
  sba,
  ssba
]