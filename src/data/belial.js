// FINAL 

const general = { char: "Belial", health: '10000', prejump: '4F', backdash: '26F' }

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
  oncounterhit: '+6',
  clash: '1',
  motion: ['l'],
  description: "Granblue Fantasy Versus c.L. +2 on block, +6 on hit, links into itself, 2L and c.M on regular hit, and 2M on crouching hit."
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
  description: "A standard Granblue c.M, frame traps from c.L and 2L. Due to being 0 on block and 6 frame start up, when pressed again, can crush far light normals when spaced correctly. Good for pressure due to this, but otherwise pretty unremarkable."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '9',
  active: '5',
  recovery: '19',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+11',
  clash: '5',
  motion: ['h'],
  description: "Mostly combo filler, but can function as an anti-air if opponent is above you."
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
  description: ""
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
  description: ""
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '5',
  recovery: '12',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+2',
  clash: '2',
  motion: ['l'],
  description: "Links from 2L much more consistently than f.M, making it a great way to confirm into 214H from that normal. Somewhat useful as a poke."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '300, 500',
  guard: 'Mid',
  startup: '6',
  active: '5',
  recovery: '14',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "+6 on counter hit on the second hitbox.\nDeals 2 Hits if you're close enough\nStrong pressure tool, links from 2L and c.L if close enough and frame traps from them no matter the distance. Easy to confirm from due to being 2 hits, which would matter far more if Belial's confirm tools were actually unsafe."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '500, 500',
  guard: 'Mid',
  startup: '9',
  active: '2(13)2',
  recovery: '18',
  onblock: '-5',
  onhit: '0',
  oncounterhit: '0',
  clash: '4, 3',
  motion: ['h'],
  description: "Forces crouching on second hit.\n+4 on counter hit on the second hitbox.\n2 hit natural combo\n2nd hit does NOT cancel, only the first hit can\nCombos into 236H on first hit, useful in combos to extend into 214X. No longer combos on second hit CH, and you'll lose your turn on regular hit. Otherwise a pretty decent pressure button due to its range and forward momentum. Despite being -5 on block the only character who can actually punish it is Belial himself, using 2L. Still an extremely strong normal in neutral. Allows combos that would otherwise be impossible, thanks to Belial moving forward an absurd distance during its startup."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Mid',
  startup: '5',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['2', 'l'],
  description: "Not a low but nonetheless one of Belial's strongest defensive tools. It goes extremely far on its first active frame, significantly further than Lancelot's or either of Narmaya's 5L, allowing it to punish or beat moves that even those normals aren't capable of."
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
  oncounterhit: '+9',
  clash: '3',
  motion: ['2', 'm'],
  description: "Hits low, +1 on block, decent range. The hitbox is extremely close to the ground, which can be exploited, but otherwise one of the most absurd normals in the game. Staple for pressure as it frame traps into 2L, c.L itself, f.M, and f.H depending on spacing and matchup. Also combos into 2L and c.L on normal hit, c.M on crouching hit, and f.M, C.H and f.H on counter hit."
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
  description: "Belial's designated anti-air normal, hitbox isn't as bad as it might seem. Combos from this tend to be finicky, and you might want to use c.H instead, but it's still useful to swat people out of the air."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '10',
  active: '6',
  recovery: '20',
  onblock: '-11',
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Much longer than the average sweep in exchange for being significantly slower. Useful poke."
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
  description: "Active until landing"
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Can crossup"
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '700', 
  guard: 'High', 
  startup: '10', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "Despite the animation, this cannot hit crossup. Ridiculously big hitbox, great for air-to-airs and jump-ins."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '900', 
  guard: 'All', 
  startup: '23', 
  active: 'Til 1f after landing', 
  recovery: '18 (Whiff), 15 (Block)', 
  onblock: '-5', 
  onhit: '+13',
  oncounterhit: '+13',
  clash: '3',
  motion: ['u'],
  description: "NOT an Overhead\nHigh recovery on whiff\nOn hit bounces off the opponent. You can direct where he goes by pressing left or right, allowing you to pick up a combo with either jM or jH"
};

// unique action
const lv1U = { 
  moveName: 'Give Daddy Some Sugar (Parry)', 
  altName: '5U', 
  damage: '-', 
  guard: 'All', 
  startup: '3', 
  active: '85', 
  recovery: '48', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Belial walks forward with his arms spread wide, and if he is attacked by anything other than a throw he will counterattack. The counterattack will track the opponent. Belial is in counterhit state if he gets hit between frame 1~3 but the recovery he is not in counterhit state. As well this move can be blocked or spot dodged in certain situations after the counter animation has triggered"
};
const lv2U = { 
  moveName: 'Give Daddy Some Sugar (Attack)', 
  altName: '5U', 
  damage: '200, 800', 
  guard: 'All', 
  startup: '-', 
  active: 'Til 2f after landing', 
  recovery: '11', 
  onblock: '-2', 
  onhit: 'HKD (+47)',
  oncounterhit: 'HKD (+47)',
  clash: '-',
  motion: ['u'],
  description: "Belial walks forward with his arms spread wide, and if he is attacked by anything other than a throw he will counterattack. The counterattack will track the opponent. Belial is in counterhit state if he gets hit between frame 1~3 but the recovery he is not in counterhit state. As well this move can be blocked or spot dodged in certain situations after the counter animation has triggered"
};


const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+44)',
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
  onhit: 'HKD (+38)',
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
  recovery: 'Til 6f after landing', 
  onblock: '-', 
  onhit: 'HKD (+50)',
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
  active: '6', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'u'],
  description: "Forces crouching"
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
  moveName: 'L Goetia', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '47', 
  onblock: '-10', 
  onhit: '-6',
  oncounterhit: '-4',
  clash: '-',
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
  recovery: '49', 
  onblock: '-10', 
  onhit: '-6',
  oncounterhit: '-4',
  clash: '-',
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
  recovery: '49', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Belial's projectile. Overall an extremely versatile tool.\nFollows the same trajectory as 236L, and has three hits instead of one. What makes it unique to the other two versions is its ability to transition into Everyone's A Little Crooked even on hit and block, making it an extremely strong tool for midscreen combos and extending pressure from a frame trap. The H followup only combos on crouching opponents."
};

const lFireballFollowUp = {
  moveName: 'L Everyones A Little Crooked',
  altName: '236X->4L',
  damage: '250x3',
  guard: 'All',
  startup: '13',
  active: '-',
  recovery: '38',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+5',
  clash: '-',
  motion: ['236', 'l', '4', 'l'],
  description: "Goetia followup which transforms the projectile into a spinning scythe that hits multiple times. The scythe takes a (very short) moment to spin up after transforming, during which the projectile does not have a hitbox. L followup causes the scythe to move forward, M followup causes the scythe to move backward, and H followup causes the scythe to decelerate and eventually spin in place.\nIn addition to the universal forward/backwards/stop commands, the L and M followups cause the scythe to move vertically up or down depending on which version of Goetia was initially used. For example, the forward moving L Goetia cancelled into L followup will cause the scythe to move up as well as forwards, while M Goetia into L followup will cause the scythe to move down as well as forwards. The specifics are as follows:\nThe L and M followups to L and H Goetia cause the projectile to move forwards & up and backwards & up respectively\nThe L and M followups to M Goetia cause the projectile to move forwards & down and backwards & down respectively\nThe H followups to all versions of Goetia do not affect the scythe's vertical positioning\nThe L and H followups push the opponent slightly on hit and block, while the M followup vacuums opponents towards Belial. The L and M followups hit 3 times, while the H followup hits 5 times."
}

const mFireballFollowUp = {
  moveName: 'M Everyones A Little Crooked',
  altName: '236X->4M',
  damage: '250x3',
  guard: 'All',
  startup: '13',
  active: '-',
  recovery: '38',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+5',
  clash: '-',
  motion: ['236', 'l', '4', 'm'],
  description: "Goetia followup which transforms the projectile into a spinning scythe that hits multiple times. The scythe takes a (very short) moment to spin up after transforming, during which the projectile does not have a hitbox. L followup causes the scythe to move forward, M followup causes the scythe to move backward, and H followup causes the scythe to decelerate and eventually spin in place.\nIn addition to the universal forward/backwards/stop commands, the L and M followups cause the scythe to move vertically up or down depending on which version of Goetia was initially used. For example, the forward moving L Goetia cancelled into L followup will cause the scythe to move up as well as forwards, while M Goetia into L followup will cause the scythe to move down as well as forwards. The specifics are as follows:\nThe L and M followups to L and H Goetia cause the projectile to move forwards & up and backwards & up respectively\nThe L and M followups to M Goetia cause the projectile to move forwards & down and backwards & down respectively\nThe H followups to all versions of Goetia do not affect the scythe's vertical positioning\nThe L and H followups push the opponent slightly on hit and block, while the M followup vacuums opponents towards Belial. The L and M followups hit 3 times, while the H followup hits 5 times."
}

const hFireballFollowUp = {
  moveName: 'H Everyones A Little Crooked',
  altName: '236X->4H',
  damage: '150x5',
  guard: 'All',
  startup: '27',
  active: '-',
  recovery: '40',
  onblock: '+12',
  onhit: '+16',
  oncounterhit: '+16',
  clash: '-',
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
  active: '2(3)9', 
  recovery: '28', 
  onblock: '-20', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Belial's reversal. One of the best DPs in the game. A standard DP with less air time than others, giving characters who thrive on air combos worse punishes."
};
const mUppercut = { 
  moveName: 'M Notoria', 
  altName: '623M', 
  damage: '1000, 500', 
  guard: 'All', 
  startup: '38', 
  active: '5', 
  recovery: '10', 
  onblock: '+2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Belial's reversal. One of the best DPs in the game. Has no invulnerability and only hits on the way down, but is plus on block. Can be used as a fakeout for people expecting the L version, but don't expect a good player to fall for it, as it can quite easily be interrupted with DP or even 2H on reaction. It can also be meatied to be a maximum of +7 on block while having 11 frames of recovery."
};
const hUppercut = { 
  moveName: 'H Notoria', 
  altName: '623H', 
  damage: '600, 300, 500', 
  guard: 'Mid', 
  startup: '9', 
  active: '2(3)9(18(5)', 
  recovery: '24', 
  onblock: '-12', 
  onhit: 'HKD (+48)',
  oncounterhit: 'HKD (+48)',
  clash: '-',
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
  active: '4', 
  recovery: '21', 
  onblock: '-6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "An advancing strike. If it hits from close range, it will grab the opponent and do more damage. A combo ender that sees usage when you're too far for 236H/623H to hit, or if those specials are on cooldown. Can also be used as a frame trap, but it'll lose you your turn."
};
const mRekka = { 
  moveName: 'M Asmodeus', 
  altName: '214M', 
  damage: '700, 700', 
  guard: 'All', 
  startup: '21', 
  active: '4', 
  recovery: '19', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "An advancing strike. If it hits from close range, it will grab the opponent and do more damage. A lso a combo ender, but can only be comboed into from c.H or full autocombo on crouching hit."
};
const hRekka = { 
  moveName: 'H Asmodeus', 
  altName: '214H', 
  damage: '700, 600', 
  guard: 'All', 
  startup: '14', 
  active: '4', 
  recovery: '19', 
  onblock: '-4', 
  onhit: 'HKD (+63)',
  oncounterhit: 'HKD (+63)',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "An advancing strike. If it hits from close range, it will grab the opponent and do more damage. Launches the opponent and combos from basically any normal, leading to massive damage in corner. Post-236H nerf it's undoubtedly your best corner combo starter."
};

const lCmdThrow = {
  moveName: "L Vassago",
  altName: '632146L',
  damage: '2000',
  guard: 'Throw',
  startup: '34',
  active: '3', 
  recovery: '36', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
  description: "A forward walk that ends in a command throw. Moves a short distance, but won't activate until Belial has walked its full length."
}

const mCmdThrow = {
  moveName: "M Vassago",
  altName: '632146M',
  damage: '2500',
  guard: 'Throw',
  startup: '52',
  active: '3', 
  recovery: '36', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
  description: "A forward walk that ends in a command throw. Moves further. You probably won't use this at all due to its absurd startup."
}

const hCmdThrow = {
  moveName: "H Vassago",
  altName: '632146H',
  damage: '2000',
  guard: 'Throw',
  startup: '27 -> 82(Max)',
  active: '3', 
  recovery: '34', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
  description: "A forward walk that ends in a command throw. Will automatically activate once Belial is close, making it by far the most practical version, despite the EX flash being an additional telegraph."
}

// skybound art
const sba = { 
  moveName: 'Legemeton', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'All', 
  startup: '13', 
  active: '4(18)9', 
  recovery: '30', 
  onblock: '-20', 
  onhit: 'HKD (Si: +30, Tc: +40)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "An invulnerable move that strikes first, then dashes forward with another strike, so it can be used against distant enemies too. The gap between the two hits is just long enough that if they input 4G during the flash, the second hit'll catch its recovery.\nAbsurdly short range for full damage if you use the simple input, so try not to do that."
};
const ssba = { 
  moveName: 'Anagenesis', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '13', 
  active: '3(12)3', 
  recovery: '45', 
  onblock: '-29', 
  onhit: 'HKD (S:+31, T:+41)',
  oncounterhit: '-',
  clash: '-',
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