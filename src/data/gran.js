// TEMPLATE 
// const moveName = {moveName: , altName: , damage: , guard: mid, startup: , active: , recovery: , onblock: , onhit: };

const general = {char: "Gran", health: '10000', prejump: '4F', backdash: '22F'}

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
  description: "Gran's fastest button for pressure, great for frame traps and tick throws. It can link into c.M on regular hit for a hitconfirm. When done meaty, it can avoid some of the slower reversals."
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
  description: "A good upclose tool, post-nerf it is mostly combo filler but can frametrap against 6f c.L characters due to attack level. Can link into c.L on crouching hit."
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
  description: "Highest damage button that goes into auto combo, better choice for combo filler for the extra damage when applicable. Puts the opponent in huge hitstun on Counter Hit, so much so that it can link into either itself or f.H depending on distance, allowing for a high damage combo in the corner. Has large active frames, so can be meatied late for plus frames on oki."
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
  motion: ['l','l'],
  description: "Despite being airborne, the second hit can be canceled into grounded attacks on the first few active frames. On clash, Gran can delay his button to get c.XX > j.L, but this is slower than c.XX > c.XXX. Because of his speed, the second hit of Gran\'s autocombo can also be used as a soft reset point. While pausing here isn\'t safe, you are left close enough to your opponent to go into a low, throw, or overhead mixup if you\'re willing to take the risk that your opponent is mashing here or buffering DP. You can also use this point in the autocombo to stop and block(to bait a DP) or insert your own DP here to punish mashers. Against stronger or more paitent players, this point can also be used to transition into 2L pressure."
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
  description: "Despite being airborne, the second hit can be canceled into grounded attacks on the first few active frames. On clash, Gran can delay his button to get c.XX > j.L, but this is slower than c.XX > c.XXX. Because of his speed, the second hit of Gran\'s autocombo can also be used as a soft reset point. While pausing here isn\'t safe, you are left close enough to your opponent to go into a low, throw, or overhead mixup if you\'re willing to take the risk that your opponent is mashing here or buffering DP. You can also use this point in the autocombo to stop and block(to bait a DP) or insert your own DP here to punish mashers. Against stronger or more paitent players, this point can also be used to transition into 2L pressure."
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
  description: "A faster close range poke at 6 frames, so it can punish some things from further away. Can combo into 214L>214M to round out a punish, but the cancel window is fairly tight."
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
  description: "His go to poke. Has the farthest reach of his normals and reaches far for its speed."
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
  description: "Has slightly less range than his f.M, but pulls his hurtbox back a bit. Great for counter poking. It has enough range to hit after you end your string with a fireball and doing so can catch mashing, but it's not recommended to do all the time because there are moves that will beat it."
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
  motion: ['2', 'L'],
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
  motion: ['2', 'M'],
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
  motion: ['2', 'H'],
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
  motion: ['2', 'U'],
  description: "Gran's sweep is very fast and very evasive. It goes under a lot more things than even it's animation would suggest. Sets up for a safejump on its own and after combos. As of 2.0 Patch, 2U > SSBA is an increadibly unsafe poke at any point. It still combos into high damage, but with how unsafe SSBA is and ease to Evade it's a High Risk option to go for. 2U by itself have also been nerfed by being less evasive than before, but still works as a strong low profile."
};

// jump normals
const jL = {moveName: 'Jump Light', altName: 'jL', damage: '400', guard: 'high', startup: '5', active: '-', recovery: '-', onblock: '-', onhit: '-'};
const jM = {moveName: 'Jump Medium', altName: 'jM', damage: '550', guard: 'high', startup: '6', active: '-', recovery: '-', onblock: '-', onhit: '-'};
const jH = {moveName: 'Jump Heavy', altName: 'jH', damage: '800', guard: 'high', startup: '7', active: '-', recovery: '-', onblock: '-', onhit: '-'};
const jU = {moveName: 'Jump Unique', altName: 'jU', damage: '700', guard: 'high', startup: '12', active: '-', recovery: '-', onblock: '-', onhit: '-'};

// unique action
const lv1U = {moveName: 'Power Raise Lv1', altName: '5ULv1', damage: '1000', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: '-'};
const lv2U = {moveName: 'Power Raise Lv2', altName: '5ULv2', damage: '1200', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: '-'};
const lv3U = {moveName: 'Power Raise Lv3', altName: '5ULv3', damage: '1400', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: '-'};
const lv4U = {moveName: 'Power Raise Lv4', altName: '5ULv4', damage: '1600', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: '-'};
const lv5U = {moveName: 'Power Raise Lv5', altName: '5ULv5', damage: '2000', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: '-'};

const groundThrow = {moveName: 'Ground Throw', damage: '1500', guard: 'throw', startup: '7', active: '-', recovery: '-', onblock: '-', onhit: '-'};
const airThrow = {moveName: 'Air Throw', damage: '1500', guard: 'throw', startup: '5', active: '-', recovery: '-', onblock: '-', onhit: '-'};

const uOverhead = {moveName: 'Overhead', altName: 'UOH', damage: '1000', guard: 'high', startup: '26', active: '-', recovery: '-', onblock: '-4', onhit: '1'};

// fireballs
const lFireball = {moveName: 'L Reginleiv', altName: '236L', damage: '800', guard: 'all', startup: '15', active: '-', recovery: '-', onblock: '-7', onhit: '-3'};
const mFireball = {moveName: 'M Reginleiv', altName: '236M', damage: '400, 800', guard: 'mid, all', startup: '13', active: '-', recovery: '-', onblock: '-4', onhit: '0'};
const hFireball = {moveName: 'H Reginleiv', altName: '236H', damage: '350 x 3', guard: 'all', startup: '15', active: '-', recovery: '-', onblock: '+3', onhit: '+7'};

// dragon punches
const lUppercut = {moveName: 'L Rising Sword', altName: '623L', damage: '700, 300', guard: 'mid, all', startup: '9', active: '-', recovery: '-', onblock: '-17', onhit: 'KD'};
const mUppercut = {moveName: 'M Rising Sword', altName: '623M', damage: '700, 300 x 2', guard: 'mid, all', startup: '9', active: '-', recovery: '-', onblock: '-26', onhit: 'KD'};
const hUppercut = {moveName: 'H Rising Sword', altName: '623H', damage: '950~1400', guard: 'mid, all', startup: '9', active: '-', recovery: '-', onblock: '-26', onhit: 'HKD'};

// rekka
const lRekka = {moveName: 'L Overdrive Surge', altName: '214L', damage: '700', guard: 'mid', startup: '13', active: '2', recovery: '19', onblock: '-6', onhit: '-2'};
const followupRekka = {moveName: 'M Overdrive Surge(follow up)', altName: '214L -> 214M', damage: '500', guard: 'mid', startup: '-', active: '13', recovery: '29', onblock: '-10', onhit: 'KD'};
const mRekka = {moveName: 'M Overdrive Surge', altName: '214M', damage: '1200', guard: 'mid', startup: '16', active: '13', recovery: '29', onblock: '+2~-10', onhit: '-'};
const hRekka = {moveName: 'H Overdrive Surge', altName: '214H', damage: '1200', guard: 'mid', startup: '13', active: '13', recovery: '37', onblock: '+4~-8', onhit: 'HKD'};

// skybound art
const sba =  {moveName: 'Tempest Blade', altName: '236236H', damage: '2500-3500', guard: 'mid', startup: '6+5', active: '-', recovery: '-', onblock: '-13', onhit: 'HKD'};
const ssba =  {moveName: 'Catastrophe', altName: '236236U', damage: '3500-4500', guard: 'all', startup: '8+5', active: '-', recovery: '-', onblock: '-23', onhit: 'HKD'};


export const granInfo = [
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
  hUppercut,
  lRekka,
  followupRekka,
  mRekka,
  hRekka,
  sba,
  ssba
]