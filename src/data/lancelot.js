
// UNFINISHED, NEEDS UPDATE

const general = {char: "Lancelot", health: '10000', prejump: '4F', backdash: '22F'}

// close normals
const closeL = {
  moveName: 'Close Light', 
  altName: 'cL', 
  damage: '350', 
  guard: 'mid', 
  startup: '5', 
  active: '3', 
  recovery: '6', 
  onblock: '2', 
  onhit: '6',
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: 'Can transition into auto combo on contact at any range.\nLancelot\'s 5L does not change based on proximity. However, having no far variation means it will have very poor range in any situation. As his fastest grounded normal and +2 on block, it\'s used for a variety of things including starting close-range pressure, mashing through pressure gaps on defense, tick throws, and as a reversal-safe meaty after a knockdown.'
};
const closeM = {
  moveName: 'Close Medium', 
  altName: 'cM', 
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
  description: 'Combos into 5L on crouching.\nCombos into c.H on counterhit.\nThis is your go-to move in pressure alongside 2L and 5L. Your main pressure string out of this normal is c.M > 5L > f.M, which leaves you at the perfect distance for 214L to be plus on block afterwards. Point blank, 2L > c.M is both a frametrap and a confirm. It can sometimes be used as a last-minute anti-air, but it\'s far worse than 2H in terms of hurtboxes.'
};
const closeH = {
  moveName: 'Close Heavy', 
  altName: 'cH', 
  damage: '600, 400', 
  guard: 'mid', 
  startup: '8', 
  active: '4', 
  recovery: '18', 
  onblock: '-3', 
  onhit: '1',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: 'Two-hit attack, primarily used for punishing or combos. Being two hits gives you a lot of time to confirm stuff from it. The downside of it being two hits is that if the first hit is a counterhit, the property is not carried over to the second. As an example, CH c.H(1) > 236H combos but CH c.H(2) > 236H does not.'
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
  description: '2nd hit does not combo into 214M, however the third can.\n3rd hit does not reliably work in juggle combos outside the corner due to how it launches the opponent and its small hitbox.\n5XXX > 214M can frametrap opponents, but is vulnerable to reversals.'
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
  description: '2nd hit does not combo into 214M, however the third can.\n3rd hit does not reliably work in juggle combos outside the corner due to how it launches the opponent and its small hitbox.\n5XXX > 214M can frametrap opponents, but is vulnerable to reversals.'
};

// far normals
const far5M = {
  moveName: 'Far Medium', 
  altName: 'f5M', 
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
  description: 'Not a lot of range and will easily get outpoked by other characters\' f.M, but the recovery isn\'t too bad and doesn\'t extend Lancelot\'s hurtbox that much. Primarily used in conjunction with 214L to pressure from midrange. If spaced at max range, cancelling into 214L leaves Lancelot plus afterwards.'
};
const far5H = {
  moveName: 'Far Heavy', 
  altName: 'f5H', 
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
  description: "Lancelot pokes out both his daggers as far as he can. His farthest reaching poke. Decent range considering his other normals. Combos into 66L at almost any range, making it a decent buffer when you're trying to stuff someone's poke. Alternatively, you can cancel into 214M which combos on counterhit and can be 0 on block if it's spaced far enough."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light', 
  altName: '2L', 
  damage: '350', 
  guard: 'mid', 
  startup: '6', 
  active: '3', 
  recovery: '6', 
  onblock: '2', 
  onhit: '6',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: "Can cancel into itself and 5L once per string\nLinks into itself, 5L, 2M, and c.M on standing hit, f.M and c.H on crouching or counter hit, and 2U on counter hit only.\nLancelot's fastest low. Like most 2Ls, plus on block and extremely important for pressure and mixup. It's always useful as a way to catch people trying to Cross-Over out of your pressure. 2L can actually be used 3 times in a blockstring if you're close, but doing so leaves you out of range of 2M and sometimes out of f.M range as well."
};
const n2M = {
  moveName: 'Crouch Medium', 
  altName: '2M', 
  damage: '500', 
  guard: 'mid', 
  startup: '7', 
  active: '5', 
  recovery: '9', 
  onblock: '1', 
  onhit: '5',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'm'],
  description: "Lancelot slashes low but don't be fooled, it's a mid. Worse range than f.M, but has better startup and frame advantage while also catching Cross-Overs. Post-buff, 2M now functions as a proximity-independent counterpart to many other characters' f.Ls. It now links from 5L and 2L, allowing for combos like 5L/2L > 5L/2L > 2M > 214L. The faster startup also allows Lancelot to more consistently punish moves like Djeeta's or Gran's 214L on block.\nIt can hit Charlotta on her way down after her EX DP, allowing a decent punish combo."
};
const n2H = {
  moveName: 'Crouch Heavy', 
  altName: '2H', 
  damage: '800', 
  guard: 'mid', 
  startup: '10', 
  active: '6', 
  recovery: '24', 
  onblock: '-13', 
  onhit: '-9',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'h'],
  description: "Lancelot's designated anti-air attack. It's pretty fast, and has a good hitbox that beats cross-ups easily. Very important move. If it hits anti-air, you'll want to cancel into 214L. On counterhit and a whiffed 214L, you can confirm a c.M/c.H and get a very high damage combo, and on non-counterhit you can confirm into 214L~4L for a little more damage and a knockdown."
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
  motion: ['2', 'l'],
  description: "The Vega slide. Really really good move, hard knockdown sliding low that's safe at far spacing and very unsafe otherwise. Low profiles really well too, going under both projectiles like Gran's Reginleiv and some far-reaching pokes like Katalina's f.M. Gives you a safe jump on hit, but the safe jump is spacing dependent."
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
  motion: ['2', 'l'],
  description: ''
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
  motion: ['2', 'l'],
  description: ''
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
  motion: ['2', 'l'],
  description: ''
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
  motion: ['2', 'l'],
  description: ''
};

// unique action
const lv1U = {
  moveName: 'Wirbelwind', 
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
  motion: ['2', 'l'],
  description: ''
};
const lv2U = {
  moveName: 'Air Wirbelwind', 
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
  motion: ['2', 'l'],
  description: ''
};
const lv3U = {
  moveName: 'Wirbelwind (Stop)', 
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
  motion: ['2', 'l'],
  description: ''
};
const lv4U = {
  moveName: 'Wirbelwind (Feint)', 
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
  motion: ['2', 'l'],
  description: ''
};
const lv5U = {
  moveName: 'Wirbelwind (Crossup)', 
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
  motion: ['2', 'l'],
  description: ''
};
const lv6U = {
  moveName: 'Wirbelwind (Jump)', 
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
  motion: ['2', 'l'],
  description: ''
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
  motion: ['2', 'l'],
  description: ''
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
  motion: ['2', 'l'],
  description: ''
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
  motion: ['2', 'l'],
  description: ''
};

// fireballs
const lFireball = {
  moveName: 'L Wogenstrom', 
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
  motion: ['2', 'l'],
  description: ''
};
const mFireball = {
  moveName: 'M Wogenstrom', 
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
  motion: ['2', 'l'],
  description: ''
};
const hFireball = {
  moveName: 'H Wogenstrom', 
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
  motion: ['2', 'l'],
  description: ''
};

// dragon punches
const lUppercut = {
  moveName: 'L Blade Impulse', 
  altName: '66L', 
  damage: '700, 300', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: ''
};
const mUppercut = {
  moveName: 'M Blade Impulse', 
  altName: '66M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: ''
};
const hUppercut = {
  moveName: 'H Blade Impulse', 
  altName: '66H', 
  damage: '950~1400', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: ''
};

// rekka
const lRekka = {
  moveName: 'L Southern Cross', 
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
  motion: ['2', 'l'],
  description: ''
};
const mRekka = {
  moveName: 'M Southern Cross', 
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
  motion: ['2', 'l'],
  description: ''
};
const hRekka = {
  moveName: 'H Southern Cross', 
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
  motion: ['2', 'l'],
  description: ''
};

// skybound art
const sba =  {
  moveName: 'Weiss Flugel', 
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
  motion: ['2', 'l'],
  description: ''
};
const ssba =  {
  moveName: 'Schöner Winterhügel', 
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
  motion: ['2', 'l'],
  description: ''
};


export const lanceInfo = [
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
  lv6U,
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
  sba,
  ssba
]