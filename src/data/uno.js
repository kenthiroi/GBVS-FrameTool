// FINAL 

const general = { char: "Uno", health: '10000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['l'],
  description: "Anre attacks with cosmic energy. Has very short range. All of Anre's grounded light attacks are 1 frame slower than the standard 5 frames, making Anre weak at mashing out of pressure."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'mid',
  startup: '7',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['m'],
  description: ""
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'mid',
  startup: '11',
  active: '6',
  recovery: '15',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['h'],
  description: ""
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
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+1',
  clash: '3',
  motion: ['l', 'l'],
  description: ""
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '280',
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
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+1',
  clash: '2',
  motion: ['l'],
  description: ""
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '10',
  active: '5',
  recovery: '16',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "Max range will not combo into any special moves unless on counter hit"
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '21',
  active: '3,3',
  recovery: '17',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
  clash: '4',
  motion: ['h'],
  description: "2 hits\nMoves forward a huge distance\nSpecial-cancellable on both hits"
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
  description: "Hits low"
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'mid',
  startup: '11',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: ""
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'mid',
  startup: '11',
  active: '6',
  recovery: '23',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: ""
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'mid',
  startup: '10',
  active: '14',
  recovery: '15',
  onblock: '-14',
  onhit: 'HKD (+41)',
  oncounterhit: 'HKD (+45)',
  clash: '2',
  motion: ['2', 'u'],
  description: "Not special cancellable"
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
  description: ""
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'high', 
  startup: '6', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Can cross up but the range is very small."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '700', 
  guard: 'high', 
  startup: '9', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "This move is very awkward as a jump-in normal due the angle it is hitting at. When done right off the ground, can anti-air moves, however, 2H is more reliable and can lead to more damage."
};
const jU = { 
  moveName: 'Arm the Bastion (Air)', 
  altName: 'jU', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '18 (Armor)', 
  recovery: '16 (On landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Anre is able to act immediately after a successful parry. Anre can either parry again, or act with any normal action. A notable use of this is to parry a hit of an uncancelable attack, such as GBVS Charlotta Icon.png Charlotta's Sword of Lumiel, and then hit the opponent before the subsequent hit of their attack comes out. c.H is too slow to counter some attacks, but c.L and c.M are fast enough.\nOpponent appears to be stuck in a form of hitstop on parry while Anre is able to act.\nis a Parry, can do it consecutively with timing"  
};

// unique action
const lv1U = { 
  moveName: 'Arm the Bastion', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '5', 
  active: '15 (Armor)', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Anre is able to act immediately after a successful parry. Anre can either parry again, or act with any normal action. A notable use of this is to parry a hit of an uncancelable attack, such as GBVS Charlotta Icon.png Charlotta's Sword of Lumiel, and then hit the opponent before the subsequent hit of their attack comes out. c.H is too slow to counter some attacks, but c.L and c.M are fast enough.\nOpponent appears to be stuck in a form of hitstop on parry while Anre is able to act.\nis a Parry, can do it consecutively with timing"  
};
const j6u = {
  moveName: 'One Rift Spear',
  altName: 'j6U / j2U', 
  damage: '700', 
  guard: '-', 
  startup: '24', 
  active: '8', 
  recovery: '7 (On landing)', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['u'],
  description: ""
}

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+42)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+42)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: ""
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '5', 
  active: '5', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: 'HKD (+46)',
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
  active: '6', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'u'],
  description: ""
};

// fireballs
const lFireball = { 
  moveName: 'L Rakshasa', 
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
  description: "Anre's \"laser\", an invaluable neutral tool for controlling space. Cancels out projectiles while Anre stabs forwards with the spear, making it a great anti-fireball tool. Pressing any attack button on hit only will do a followup detonation. Said follow-up does 400 damage from 236M and 500 from 236L/H.\n236L is always safe on block due to pushback. Useful for frame traps at a distance, or just for throwing out in neutral as it's much faster than 236M and doesn't cost a cooldown. Combos from f.M and 2M on CH."
};
const mFireball = { 
  moveName: 'M Rakshasa', 
  altName: '236M', 
  damage: '1000', 
  guard: 'mid, all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Anre's \"laser\", an invaluable neutral tool for controlling space. Cancels out projectiles while Anre stabs forwards with the spear, making it a great anti-fireball tool. Pressing any attack button on hit only will do a followup detonation. Said follow-up does 400 damage from 236M and 500 from 236L/H.\n236M is extremely slow but also extremely advantageous, and the follow-up launches for a combo in the corner. Very interruptible if used as a pressure reset, but can be used as a meaty and in some CH 2H anti-air combos."
};
const hFireball = { 
  moveName: 'H Rakshasa', 
  altName: '236H', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Anre's \"laser\", an invaluable neutral tool for controlling space. Cancels out projectiles while Anre stabs forwards with the spear, making it a great anti-fireball tool. Pressing any attack button on hit only will do a followup detonation. Said follow-up does 400 damage from 236M and 500 from 236L/H.\n236H is the fastest of the three and still quite advantageous on block. It can be used to end or extend combos from full autocombo or f.H, and also to extend pressure."
};
const FireballFollowup = {
  moveName: ' Rakshasa (Followup)', 
  altName: '236 > X', 
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
  description: "Anre's \"laser\", an invaluable neutral tool for controlling space. Cancels out projectiles while Anre stabs forwards with the spear, making it a great anti-fireball tool. Pressing any attack button on hit only will do a followup detonation. Said follow-up does 400 damage from 236M and 500 from 236L/H.\n236L is always safe on block due to pushback. Useful for frame traps at a distance, or just for throwing out in neutral as it's much faster than 236M and doesn't cost a cooldown. Combos from f.M and 2M on CH."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Spiral Spear', 
  altName: '623L', 
  damage: '100x4', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Very fast special that can be used to beat fireballs, but generally worse than Anre's other anti-fireball tools for that purpose. Combo filler that can connect from almost any normal but often won't reach due to its short range.\n623L is inferior to 623M in almost every way, but it can hit crouchers, so it sees use then with the 6H follow-up."
};
const mUppercut = { 
  moveName: 'M Spiral Spear', 
  altName: '623M', 
  damage: '100x5', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Very fast special that can be used to beat fireballs, but generally worse than Anre's other anti-fireball tools for that purpose. Combo filler that can connect from almost any normal but often won't reach due to its short range.\n623M has some forward momentum and does more damage than 623L, so it's your midscreen cooldownless combo ender with the 6M follow-up."
};
const hUppercut = { 
  moveName: 'H Spiral Spear', 
  altName: '623H', 
  damage: '75x8', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Very fast special that can be used to beat fireballs, but generally worse than Anre's other anti-fireball tools for that purpose. Combo filler that can connect from almost any normal but often won't reach due to its short range.\n623H is used primarily in Anre's corner combos as it wallbounces with the 6H follow-up. Goes slightly farther than 623M but doesn't move quickly enough to combo from f.M or 2M in most situations."
};
const lSpearFollowup = {
  moveName: 'Radiance Ruination', 
  altName: '623X -> 6L', 
  damage: '700', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "623X-6L travels till it hits a target. It pushes Anre too far out for even Belial 2L to punish, so it sees use as a safe pressure ender after 623L. It can also be delayed to frame trap."
};
const mSpearFollowup = {
  moveName: 'Astral Piercer', 
  altName: '623X -> 6M', 
  damage: '800', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "623X-6M does slightly more damage than the 6L follow-up and knocks down, making it useful as a combo ender if not used from 623H. Can also be delayed to frame trap."
};
const hSpearFollowup = {
  moveName: 'Peerless Thrust', 
  altName: '623X -> 6H', 
  damage: '1100', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "623X-6H is a low and wallbounces when used from 623H, allowing followups in the corner. It also wallbounces on 623L and 623M on CH, so it can be used as a high-risk, high-reward frametrap, but it won't combo from 623L or 623M unless the opponent is crouching."
};
const uSpearFollowup = {
  moveName: 'Grand Haste', 
  altName: '623X -> 6U', 
  damage: '75x8', 
  guard: 'All', 
  startup: '11', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "623X-6U is a command dash. It's always unsafe, but it can be used to reset pressure if your opponent is expecting one of the other follow-ups."
};


// rekka
const lRekka = { 
  moveName: 'L Mantra Wheel', 
  altName: '214L', 
  damage: '200x4', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "M and H versions travel upwards and come back down\nH wallbounces allowing for followups in the corner\nAll versions are safe but will end your turn in pressure"
};
const mRekka = { 
  moveName: 'M Mantra Wheel', 
  altName: '214M', 
  damage: '200x6', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "M and H versions travel upwards and come back down\nH wallbounces allowing for followups in the corner\nAll versions are safe but will end your turn in pressure"
};
const hRekka = { 
  moveName: 'H Mantra Wheel', 
  altName: '214H', 
  damage: '200x5', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "M and H versions travel upwards and come back down\nH wallbounces allowing for followups in the corner\nAll versions are safe but will end your turn in pressure"
};
const lRekkaAir = { 
  moveName: 'L Mantra Wheel (Air)', 
  altName: 'j214L', 
  damage: '200xN', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Cooldown is tied to the grounded one.\nIt's a divekick, but he also has one with j.U."
};
const mRekkaAir = { 
  moveName: 'M Mantra Wheel (Air)', 
  altName: 'j214M', 
  damage: '200xN', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Cooldown is tied to the grounded one.\nIt's a divekick, but he also has one with j.U."
};
const hRekkaAir = { 
  moveName: 'H Mantra Wheel (Air)', 
  altName: 'j214H', 
  damage: '200xN', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Cooldown is tied to the grounded one.\nIt's a divekick, but he also has one with j.U."
};

// skybound art
const sba = { 
  moveName: 'Astralance: Everto', 
  altName: '236236H', 
  damage: '3500', 
  guard: 'mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Bits will travel full screen"
};
const sbaSatelite = { 
  moveName: 'Seven Spears of Lightning', 
  altName: '214214H', 
  damage: '400', 
  guard: 'all', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
  description: "Each bit will fly off when a M or H normal make contact with the opponent. Best in the corner, where it grants him oppressive looping pressure with enhanced c.M.\nBits will do chip damage"
};
const ssba = {
  moveName: 'Thousand Spear Void', 
  altName: '236236U', 
  damage: '4500', 
  guard: 'All', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Full screen projectile\nOnly close range hit will trigger the cinematic for more damage\nCan be super jumped, dodged, or roll to avoid"
};


export const unoInfo = [
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
  groundThrow,
  backThrow,
  airThrow,
  uOverhead,
  lFireball,
  mFireball,
  hFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lSpearFollowup,
  mSpearFollowup,
  hSpearFollowup,
  uSpearFollowup,
  lRekka,
  mRekka,
  hRekka,
  lRekkaAir,
  mRekkaAir,
  hRekkaAir,
  sba,
  sbaSatelite,
  ssba
]