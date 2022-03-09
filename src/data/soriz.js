// FINAL 

const general = { char: "Soriz", health: '10500', prejump: '4F', backdash: '24F' }

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
  description: "Fast close-up pressure tool for staggers and frame-traps. Can link into c.L, f.L and c.M on-hit if in range."
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
  description: "Very fast for a medium. Neutral on block, making it useful for pressure strings or as a meaty. Can also be hit-confirmed into from close Lights."
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
  description: "His best starter in terms of raw damage. Use this for punishes and CH combos. Also useful as an alternative throw bait option to Universal Overhead as it leaves him plus on block. On CH, it can link into itself for crushing damage."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '400',
  guard: 'mid',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-3',
  onhit: '1',
  motion: ['l', 'l'],
  description: "Generic auto combo filler. Both hits are cancellable. Third hit tends to whiff against opponents who are too high in the air."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '400',
  guard: 'mid',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-5',
  onhit: '-1',
  motion: ['l', 'l', 'l'],
  description: "Generic auto combo filler. Both hits are cancellable. Third hit tends to whiff against opponents who are too high in the air."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-3',
  onhit: '1',
  motion: ['l'],
  description: "A standing low. Strong low option from far away. Combos into all of his H special moves and super. Can be chained into from lights to allow him to combo into a special move off 2L starters."
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
  description: "Your go-to poke for neutral. Has less reach than 5H but is faster."
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
  description: "Forward-moving kick with lots of range. Large hitstun allows you to easily confirm into super or your special moves. On counterhit, combos into 22M and 236M. You can use this to whiff-punish. Has jump-in crush frames, making it serviceable as a situational, far-reaching anti-air."
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
  description: "Fast, low option with decent range. Best for hit-confirming and pressure. Can link into itself twice from point-blank range and into f.L at farther ranges."
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
  description: "Not actually a low despite appearances. Soriz's legs will go under most standing pokes but his upper body can still be hit."
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
  description: "Dedicated anti-air button with huge vertical reach. Does not have much of a horizontal hitbox but does a good job of reaching opponents directly above you. It's slower than Roundhouse Fang but is far more rewarding on CH and can be special cancelled on normal hit."
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
  description: "Pretty slow sweep with decent range. Doesn't low profile but useful as an ender for corner combo routes. Can be cancelled into specials and UOH."
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
  description: "Elbow attack that stays active until landing or making contact with an opponent. This is your cross-up button."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'high', 
  startup: '6', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['m'],
  description: "Essentially an aerial version of his f.M. Use this as an anti-air tool."
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
  description: "Has the deepest reach of all your jump-ins."
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
  description: "Launches the opponent upwards.\nThis would be useful in a game where you can jump-cancel moves in combos, but Granblue is not such a game. The only real use it has is Way of the Fundoshi Fist CH AA 2H combos, which are extremely situational. Because it launches upwards, it's much harder to convert off of CH than his other jumping normals. Practically useless as a jump-in as it whiffs on crouchers."
};

// unique action
const lv1U = { 
  moveName: 'Muscle Fury', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Armored on frame 3.\nReactive Muscles on close CH gains 20% meter.\nBeing hit while armored gives 1 stack of Manliness. Consecutive hits do not give multiple stacks.\nDecent as an anti-air when you missed the opportunity to use 2H instead.\nPrimary use is to steal turns when you're safe but minus or in gaps in pressure strings.\nSoriz assumes a stance that allows him to absorb anything that isn't a throw, Skybound Art, or Super Skybound Art. It can be extended by holding U, and Soriz takes less damage while the stance is up. Keep in mind that like most armored moves, you will die if your HP drops below zero while armoring. Soriz also has access to the Reactive Muscles counterattack. You may choose to do the counterattack at any point in the stance animation whether or not your opponent hits you during it. If it counterhits a very close opponent, it will proc a cinematic zoom-in and build a very large amount of meter (20%). On crouching CH, it is possible to link into c.L. Reactive Muscles hits both in front and behind Soriz. It also has Crush frames VS jump-in attacks, making it a viable anti-air option.\nDamage modifier during 5U:\n1 stack = 70%, 2 stacks = 60%, 3 stacks = 50%, 4 stacks = 40%, 5 stacks = 30%\nDoes not stack with Macho Ultimatum's damage reduction"
};
const lv2U = { 
  moveName: 'Muscle Fury (Attack)', 
  altName: '5U > 6X', 
  damage: '300', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "Armored on frame 3.\nReactive Muscles on close CH gains 20% meter.\nBeing hit while armored gives 1 stack of Manliness. Consecutive hits do not give multiple stacks.\nDecent as an anti-air when you missed the opportunity to use 2H instead.\nPrimary use is to steal turns when you're safe but minus or in gaps in pressure strings.\nSoriz assumes a stance that allows him to absorb anything that isn't a throw, Skybound Art, or Super Skybound Art. It can be extended by holding U, and Soriz takes less damage while the stance is up. Keep in mind that like most armored moves, you will die if your HP drops below zero while armoring. Soriz also has access to the Reactive Muscles counterattack. You may choose to do the counterattack at any point in the stance animation whether or not your opponent hits you during it. If it counterhits a very close opponent, it will proc a cinematic zoom-in and build a very large amount of meter (20%). On crouching CH, it is possible to link into c.L. Reactive Muscles hits both in front and behind Soriz. It also has Crush frames VS jump-in attacks, making it a viable anti-air option.\nDamage modifier during 5U:\n1 stack = 70%, 2 stacks = 60%, 3 stacks = 50%, 4 stacks = 40%, 5 stacks = 30%\nDoes not stack with Macho Ultimatum's damage reduction"
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
  description: "Back-throw gives worse okizeme than forward-throw. While back-throw limits you to a dash-up 2L in most cases, forward throw gives you a very strong mix game:\nSafe c.L (baits invincible reversals)\nMeaty c.M (can be up to +4 oB and +8 oH)\nMeaty c.H (links to itself on CH)\nWait and throw again (can be walked, jumped, and mashed out of)\nMeaty 2L (beats walking, jumping, and mashing)"
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
  description: "Back-throw gives worse okizeme than forward-throw. While back-throw limits you to a dash-up 2L in most cases, forward throw gives you a very strong mix game:\nSafe c.L (baits invincible reversals)\nMeaty c.M (can be up to +4 oB and +8 oH)\nMeaty c.H (links to itself on CH)\nWait and throw again (can be walked, jumped, and mashed out of)\nMeaty 2L (beats walking, jumping, and mashing)"
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
  description: "Soriz slams his opponent down to the ground with an axe-kick while in the air."
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
  description: "Universal overhead. Goes over lows and baits throws."
};

// fireballs
const lFireball = { 
  moveName: 'L Impact Knuckles', 
  altName: '236L', 
  damage: '1100', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Soriz's rush attack. The distance he travels increases with button strength, L being the shortest. All versions travel farther in Macho Ultimatum. All versions are safe and give advantage on hit, meaning Soriz can safely back off or continue pressure as he pleases. The hitbox does not appear until he reaches a certain distance from the opponent, much like Balrog's Dash Straight. You'll be cancelling most of your moves into this to maintain pressure, as some characters cannot stop you from pressing a button afterwards.\nBracketed numbers indicate the Fundoshi version."
};
const mFireball = { 
  moveName: 'M Impact Knuckles', 
  altName: '236M', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Soriz's rush attack. The distance he travels increases with button strength, L being the shortest. All versions travel farther in Macho Ultimatum. All versions are safe and give advantage on hit, meaning Soriz can safely back off or continue pressure as he pleases. The hitbox does not appear until he reaches a certain distance from the opponent, much like Balrog's Dash Straight. You'll be cancelling most of your moves into this to maintain pressure, as some characters cannot stop you from pressing a button afterwards.\nBracketed numbers indicate the Fundoshi version."
};
const hFireball = { 
  moveName: 'H Impact Knuckles', 
  altName: '236H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Soriz's rush attack. The distance he travels increases with button strength, L being the shortest. All versions travel farther in Macho Ultimatum. All versions are safe and give advantage on hit, meaning Soriz can safely back off or continue pressure as he pleases. The hitbox does not appear until he reaches a certain distance from the opponent, much like Balrog's Dash Straight. You'll be cancelling most of your moves into this to maintain pressure, as some characters cannot stop you from pressing a button afterwards.\nBracketed numbers indicate the Fundoshi version."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Roundhouse Fang', 
  altName: '623L', 
  damage: '1000', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Upwards kick. Has Crush properties vs airbone attacks during it's active frames but has no invincibility otherwise. Has bigger range in Macho Ultimatum. Will knockdown an opponent who is grounded. Airborne opponents will be forced into air tech for non-EX versions. On CH can be combo'ed from when in corner.\nSoriz kicks upward in place."
};
const mUppercut = { 
  moveName: 'M Roundhouse Fang', 
  altName: '623M', 
  damage: '1000', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Upwards kick. Has Crush properties vs airbone attacks during it's active frames but has no invincibility otherwise. Has bigger range in Macho Ultimatum. Will knockdown an opponent who is grounded. Airborne opponents will be forced into air tech for non-EX versions. On CH can be combo'ed from when in corner.\nSoriz advances a bit before kicking upward.\nCan be used to anti-air opponents who are jumping in from slightly farther. Exercise caution as it can whiff against an opponent who jumped in too deep."
};
const hUppercut = { 
  moveName: 'H Roundhouse Fang', 
  altName: '623H', 
  damage: '1000', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Upwards kick. Has Crush properties vs airbone attacks during it's active frames but has no invincibility otherwise. Has bigger range in Macho Ultimatum. Will knockdown an opponent who is grounded. Airborne opponents will be forced into air tech for non-EX versions. On CH can be combo'ed from when in corner.\n6-frame H button in disguise.\nOne of Soriz's fastest attacks. In combos it can be a solid way to secure hard knockdowns without having to expend 22H or 236H."
};

// rekka
const lRekka = { 
  moveName: 'L Punch the Stars', 
  altName: '214L', 
  damage: '250x4', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Soriz releases a flurry of blows. L version moves him forward slightly, M and H advance farther forward. In Macho Ultimatum, the move deals more hits and can be followed up by Tenacious Will or Bravado Bullet.\nBracketed numbers indicate the Fundoshi version."
};
const mRekka = { 
  moveName: 'M Punch the Stars', 
  altName: '214M', 
  damage: '300x4', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Soriz releases a flurry of blows. L version moves him forward slightly, M and H advance farther forward. In Macho Ultimatum, the move deals more hits and can be followed up by Tenacious Will or Bravado Bullet.\nBracketed numbers indicate the Fundoshi version."
};
const hRekka = { 
  moveName: 'H Punch the Stars', 
  altName: '214H', 
  damage: '300x4', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Soriz releases a flurry of blows. L version moves him forward slightly, M and H advance farther forward. In Macho Ultimatum, the move deals more hits and can be followed up by Tenacious Will or Bravado Bullet.\nBracketed numbers indicate the Fundoshi version."
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


export const sorizInfo = [
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