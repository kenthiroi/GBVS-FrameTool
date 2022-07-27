// FINAL 

const general = { char: "Soriz", health: '10500', prejump: '4F', backdash: '24F' }

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
  description: "Fast close-up pressure tool for staggers and frame-traps. Can link into c.L, f.L and c.M on-hit if in range."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '5',
  recovery: '10',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "Very fast for a medium. Neutral on block, making it useful for pressure strings or as a meaty. Can also be hit-confirmed into from close Lights."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '12',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+17',
  clash: '5',
  motion: ['h'],
  description: "His best starter in terms of raw damage. Use this for punishes and CH combos. Also useful as an alternative throw bait option to Universal Overhead as it leaves him plus on block. On CH, it can link into itself for crushing damage."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '400',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "Generic auto combo filler. Both hits are cancellable. Third hit tends to whiff against opponents who are too high in the air."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '400',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "Generic auto combo filler. Both hits are cancellable. Third hit tends to whiff against opponents who are too high in the air."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Low',
  startup: '7',
  active: '3',
  recovery: '12',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+4',
  clash: '2',
  motion: ['l'],
  description: "A standing low. Strong low option from far away. Combos into all of his H special moves and super. Can be chained into from lights to allow him to combo into a special move off 2L starters."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '5',
  recovery: '14',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['m'],
  description: "Your go-to poke for neutral. Has less reach than 5H but is faster."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '6',
  recovery: '19',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '+4',
  clash: '4',
  motion: ['h'],
  description: "Forward-moving kick with lots of range. Large hitstun allows you to easily confirm into super or your special moves. On counterhit, combos into 22M and 236M. You can use this to whiff-punish. Has jump-in crush frames, making it serviceable as a situational, far-reaching anti-air."
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
  description: "Fast, low option with decent range. Best for hit-confirming and pressure. Can link into itself twice from point-blank range and into f.L at farther ranges."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '6',
  recovery: '11',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['2', 'm'],
  description: "Not actually a low despite appearances. Soriz's legs will go under most standing pokes but his upper body can still be hit."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '5',
  recovery: '22',
  onblock: '-10',
  onhit: '-6',
  oncounterhit: '+2',
  clash: '4',
  motion: ['2', 'h'],
  description: "Dedicated anti-air button with huge vertical reach. Does not have much of a horizontal hitbox but does a good job of reaching opponents directly above you. It's slower than Roundhouse Fang but is far more rewarding on CH and can be special cancelled on normal hit."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '10',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Pretty slow sweep with decent range. Doesn't low profile but useful as an ender for corner combo routes. Can be cancelled into specials and UOH."
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
  description: "Elbow attack that stays active until landing or making contact with an opponent. This is your cross-up button."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'High', 
  startup: '7', 
  active: '9', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
  description: "Essentially an aerial version of his f.M. Use this as an anti-air tool."
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
  description: "Has the deepest reach of all your jump-ins."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
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
  active: '27-57', 
  recovery: '9', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Armored on frame 3.\nReactive Muscles on close CH gains 20% meter.\nBeing hit while armored gives 1 stack of Manliness. Consecutive hits do not give multiple stacks.\nDecent as an anti-air when you missed the opportunity to use 2H instead.\nPrimary use is to steal turns when you're safe but minus or in gaps in pressure strings.\nSoriz assumes a stance that allows him to absorb anything that isn't a throw, Skybound Art, or Super Skybound Art. It can be extended by holding U, and Soriz takes less damage while the stance is up. Keep in mind that like most armored moves, you will die if your HP drops below zero while armoring. Soriz also has access to the Reactive Muscles counterattack. You may choose to do the counterattack at any point in the stance animation whether or not your opponent hits you during it. If it counterhits a very close opponent, it will proc a cinematic zoom-in and build a very large amount of meter (20%). On crouching CH, it is possible to link into c.L. Reactive Muscles hits both in front and behind Soriz. It also has Crush frames VS jump-in attacks, making it a viable anti-air option.\nDamage modifier during 5U:\n1 stack = 70%, 2 stacks = 60%, 3 stacks = 50%, 4 stacks = 40%, 5 stacks = 30%\nDoes not stack with Macho Ultimatum's damage reduction"
};
const lv2U = { 
  moveName: 'Muscle Fury (Attack)', 
  altName: '5U > 6X', 
  damage: '300', 
  guard: 'Mid', 
  startup: '11', 
  active: '3', 
  recovery: '33', 
  onblock: '-3', 
  onhit: '+3',
  oncounterhit: '+4',
  clash: '5',
  motion: ['u'],
  description: "Armored on frame 3.\nReactive Muscles on close CH gains 20% meter.\nBeing hit while armored gives 1 stack of Manliness. Consecutive hits do not give multiple stacks.\nDecent as an anti-air when you missed the opportunity to use 2H instead.\nPrimary use is to steal turns when you're safe but minus or in gaps in pressure strings.\nSoriz assumes a stance that allows him to absorb anything that isn't a throw, Skybound Art, or Super Skybound Art. It can be extended by holding U, and Soriz takes less damage while the stance is up. Keep in mind that like most armored moves, you will die if your HP drops below zero while armoring. Soriz also has access to the Reactive Muscles counterattack. You may choose to do the counterattack at any point in the stance animation whether or not your opponent hits you during it. If it counterhits a very close opponent, it will proc a cinematic zoom-in and build a very large amount of meter (20%). On crouching CH, it is possible to link into c.L. Reactive Muscles hits both in front and behind Soriz. It also has Crush frames VS jump-in attacks, making it a viable anti-air option.\nDamage modifier during 5U:\n1 stack = 70%, 2 stacks = 60%, 3 stacks = 50%, 4 stacks = 40%, 5 stacks = 30%\nDoes not stack with Macho Ultimatum's damage reduction"
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+10)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Back-throw gives worse okizeme than forward-throw. While back-throw limits you to a dash-up 2L in most cases, forward throw gives you a very strong mix game:\nSafe c.L (baits invincible reversals)\nMeaty c.M (can be up to +4 oB and +8 oH)\nMeaty c.H (links to itself on CH)\nWait and throw again (can be walked, jumped, and mashed out of)\nMeaty 2L (beats walking, jumping, and mashing)"
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+36)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: "Back-throw gives worse okizeme than forward-throw. While back-throw limits you to a dash-up 2L in most cases, forward throw gives you a very strong mix game:\nSafe c.L (baits invincible reversals)\nMeaty c.M (can be up to +4 oB and +8 oH)\nMeaty c.H (links to itself on CH)\nWait and throw again (can be walked, jumped, and mashed out of)\nMeaty 2L (beats walking, jumping, and mashing)"
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Soriz slams his opponent down to the ground with an axe-kick while in the air."
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
  description: "Universal overhead. Goes over lows and baits throws."
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
  moveName: 'L Impact Knuckles', 
  altName: '236L', 
  damage: '1100', 
  guard: 'Mid', 
  startup: '15⇒17', 
  active: '4', 
  recovery: '17', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Soriz's rush attack. The distance he travels increases with button strength, L being the shortest. All versions travel farther in Macho Ultimatum. All versions are safe and give advantage on hit, meaning Soriz can safely back off or continue pressure as he pleases. The hitbox does not appear until he reaches a certain distance from the opponent, much like Balrog's Dash Straight. You'll be cancelling most of your moves into this to maintain pressure, as some characters cannot stop you from pressing a button afterwards.\nBracketed numbers indicate the Fundoshi version."
};
const mFireball = { 
  moveName: 'M Impact Knuckles', 
  altName: '236M', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '26⇒31', 
  active: '6', 
  recovery: '15', 
  onblock: '+1', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Soriz's rush attack. The distance he travels increases with button strength, L being the shortest. All versions travel farther in Macho Ultimatum. All versions are safe and give advantage on hit, meaning Soriz can safely back off or continue pressure as he pleases. The hitbox does not appear until he reaches a certain distance from the opponent, much like Balrog's Dash Straight. You'll be cancelling most of your moves into this to maintain pressure, as some characters cannot stop you from pressing a button afterwards.\nBracketed numbers indicate the Fundoshi version."
};
const hFireball = { 
  moveName: 'H Impact Knuckles', 
  altName: '236H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '15⇒17', 
  active: '6', 
  recovery: '16', 
  onblock: '-2', 
  onhit: 'HKD (+58)',
  oncounterhit: 'HKD (+62)',
  clash: '4',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Soriz's rush attack. The distance he travels increases with button strength, L being the shortest. All versions travel farther in Macho Ultimatum. All versions are safe and give advantage on hit, meaning Soriz can safely back off or continue pressure as he pleases. The hitbox does not appear until he reaches a certain distance from the opponent, much like Balrog's Dash Straight. You'll be cancelling most of your moves into this to maintain pressure, as some characters cannot stop you from pressing a button afterwards.\nBracketed numbers indicate the Fundoshi version."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Roundhouse Fang', 
  altName: '623L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '7', 
  active: '6', 
  recovery: '18', 
  onblock: '-7', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Upwards kick. Has Crush properties vs airbone attacks during it's active frames but has no invincibility otherwise. Has bigger range in Macho Ultimatum. Will knockdown an opponent who is grounded. Airborne opponents will be forced into air tech for non-EX versions. On CH can be combo'ed from when in corner.\nSoriz kicks upward in place."
};
const mUppercut = { 
  moveName: 'M Roundhouse Fang', 
  altName: '623M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '7', 
  active: '6', 
  recovery: '20', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Upwards kick. Has Crush properties vs airbone attacks during it's active frames but has no invincibility otherwise. Has bigger range in Macho Ultimatum. Will knockdown an opponent who is grounded. Airborne opponents will be forced into air tech for non-EX versions. On CH can be combo'ed from when in corner.\nSoriz advances a bit before kicking upward.\nCan be used to anti-air opponents who are jumping in from slightly farther. Exercise caution as it can whiff against an opponent who jumped in too deep."
};
const hUppercut = { 
  moveName: 'H Roundhouse Fang', 
  altName: '623H', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '6', 
  active: '7', 
  recovery: '19', 
  onblock: '-7', 
  onhit: 'HKD (+58)',
  oncounterhit: 'HKD (+62)',
  clash: '5',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Upwards kick. Has Crush properties vs airbone attacks during it's active frames but has no invincibility otherwise. Has bigger range in Macho Ultimatum. Will knockdown an opponent who is grounded. Airborne opponents will be forced into air tech for non-EX versions. On CH can be combo'ed from when in corner.\n6-frame H button in disguise.\nOne of Soriz's fastest attacks. In combos it can be a solid way to secure hard knockdowns without having to expend 22H or 236H."
};

// rekka
const lRekka = { 
  moveName: 'L Punch the Stars', 
  altName: '214L', 
  damage: '250x4', 
  guard: 'Mid', 
  startup: '13', 
  active: '2(3)2(3)2(3)2', 
  recovery: '14', 
  onblock: '-1', 
  onhit: '+3',
  oncounterhit: '+3',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Soriz releases a flurry of blows. L version moves him forward slightly, M and H advance farther forward. In Macho Ultimatum, the move deals more hits and can be followed up by Tenacious Will or Bravado Bullet.\nBracketed numbers indicate the Fundoshi version."
};
const mRekka = { 
  moveName: 'M Punch the Stars', 
  altName: '214M', 
  damage: '300x4', 
  guard: 'Mid', 
  startup: '20', 
  active: '2(3)2(3)2(3)2', 
  recovery: '14', 
  onblock: '-1', 
  onhit: '+3',
  oncounterhit: '+3',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a', 'm'],
  description: "Soriz releases a flurry of blows. L version moves him forward slightly, M and H advance farther forward. In Macho Ultimatum, the move deals more hits and can be followed up by Tenacious Will or Bravado Bullet.\nBracketed numbers indicate the Fundoshi version."
};
const hRekka = { 
  moveName: 'H Punch the Stars', 
  altName: '214H', 
  damage: '300x4', 
  guard: 'Mid', 
  startup: '13', 
  active: '2(3)2(3)2(3)2', 
  recovery: '12', 
  onblock: '+1', 
  onhit: '+5',
  oncounterhit: '+5',
  clash: '3',
  motion: ['214', 'h', 'or', '4', 'a', 'h'],
  description: "Soriz releases a flurry of blows. L version moves him forward slightly, M and H advance farther forward. In Macho Ultimatum, the move deals more hits and can be followed up by Tenacious Will or Bravado Bullet.\nBracketed numbers indicate the Fundoshi version."
};

const lSlam = { 
  moveName: 'L Rock Smash', 
  altName: '22L', 
  damage: '900', 
  guard: 'Mid', 
  startup: '18', 
  active: '6', 
  recovery: '17', 
  onblock: '-2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: 'Projectile',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: 'Soriz punches the ground really hard and produces a column of flames. Can be used to stop single-hit projectiles. All 3 versions have bigger hitboxes in Macho Ultimatum.\nAll Versions lose 100 damage when doing them with simple input, 800/1100/1000 instead of 900/1200/1100.\nFast startup, but minus on block.\nGenerally used to knockdown the opponent when nothing else is available. Can also be used as a conditioning tool on block since it\'s only -3 when used in conjunction with 5U. Can lead to meaty 22M in the corner.'
};
const mSlam = { 
  moveName: 'M Rock Smash', 
  altName: '22M', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '28', 
  active: '6', 
  recovery: '13', 
  onblock: '+8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: 'Projectile',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: 'Soriz punches the ground really hard and produces a column of flames. Can be used to stop single-hit projectiles. All 3 versions have bigger hitboxes in Macho Ultimatum.\nAll Versions lose 100 damage when doing them with simple input, 800/1100/1000 instead of 900/1200/1100.\nSlow startup, but high adv. on block.\nUsed to reset pressure on opponents scared to contest your blockstrings. Can start combos in the corner.'
};
const hSlam = { 
  moveName: 'H Rock Smash', 
  altName: '22H', 
  damage: '1100', 
  guard: 'Mid', 
  startup: '15', 
  active: '6', 
  recovery: '11', 
  onblock: '+4', 
  onhit: 'HKD (+63)',
  oncounterhit: 'HKD (+67)',
  clash: 'Projectile',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: 'Soriz punches the ground really hard and produces a column of flames. Can be used to stop single-hit projectiles. All 3 versions have bigger hitboxes in Macho Ultimatum.\nAll Versions lose 100 damage when doing them with simple input, 800/1100/1000 instead of 900/1200/1100.\nBest of both worlds, but less plus than the M version.\nThe centerpiece starter for most of Soriz\'s high damage corner combos. On block, it can be used as a guaranteed way to reset pressure and continue your blockstring.'
};


// skybound art
const sba = { 
  moveName: 'Leaping Tiger, Charging Dragon', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'mid', 
  startup: '13', 
  active: '2(27)3', 
  recovery: '45', 
  onblock: '-29', 
  onhit: 'HKD (S:+35, T:+45)',
  oncounterhit: 'HKD (S:+35, T:+45)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "A big punch with invincible startup, making it Soriz's sole reversal. Has short range so you need to be close to the opponent. The first hit can be low-profiled by some characters. The slow startup also makes it susceptible to a lot of safe meaty cl.L setups.\nBracketed numbers indicate the Fundoshi version.\nMin Damages: Technical 875→625, Simple 525→375, Install Technical 1125→625, Install Simple 675→375"
};
const ssba = { 
  moveName: 'Catastrophe', 
  altName: '236236U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '14', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Soriz strips down and powers up. The super lasts until the end of the round, and while it's active Soriz gains a few bonuses\n\nDefense buff based on how many Manliness stacks he absorbed with Muscle Fury.\nEnhanced Special moves and Skybound Art\nFollow-ups to Punch the Stars\nAccess to Way of the Fundoshi Fist\nFaster dash\nKeep in mind, Soriz IS NOT invincible during the initial startup frames. Only AFTER the superflash animation is over (Frames 10-14). This is not usable as a reversal option.\n\nWhen cancelled from the following normals Soriz can be plus to continue pressure after activation.\n\nc.XXX = +2\nf.H = +2\nc.H = +4\nDamage modifier during Macho Ultimatum:\n1 stack = 83.3%, 2 stacks = 76.9%, 3 stacks = 71.4%, 4 stacks = 66.7%, 5 stacks = 62.5%"
};
const ssbaFinisher = { 
  moveName: 'Way of the Fundoshi Fist', 
  altName: '236236U', 
  damage: '4500', 
  guard: 'all', 
  startup: '8', 
  active: '2(10)3', 
  recovery: '42', 
  onblock: '-26', 
  onhit: 'HKD (S:+35, T:+45)',
  oncounterhit: 'HKD (S:+35, T:+45)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "A Super Skybound Art tied to Macho Ultimatum's activation. Using this super does not cost meter BUT you only get one use. The first hit of the super is a throw, effectively giving Soriz a dodge check. Can be comboed into, but Soriz must be very close to do so. Soriz IS NOT invincible during the startup of this move at all.\nNote 1: The opponent cannot jump, dodge or DP on reaction to the superflash animation, but ONLY if they are in range of the first attack (the stomp).\nNote 2: If easy input is used, the super deals 500 less damage than that of the technical input, dealing 4000 instead of 4500.\nMin Damage: Technical: 1050, Simple 600"
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
  lSlam,
  mSlam,
  hSlam,
  sba,
  ssba,
  ssbaFinisher
]