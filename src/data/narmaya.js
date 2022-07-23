// FINAL 

const general = { char: "Narmaya", health: '10000', prejump: '4F', backdash: '22F' }

// Genji
const genjiCloseL = {
  moveName: 'Close Light (Genji)',
  altName: 'Genji cL',
  damage: '300',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '9',
  onblock: '-1',
  onhit: '+3',
  oncounterhit: '+5',
  clash: '1',
  motion: ['l'],
  description: "There is no close version of this normal.\nNegative on block but leads into auto combo at all ranges.\nA quick poke forward with the pommel of Narmaya's blade. This move is slower and covers less range than Kagura 5L."
};
const genjiCloseM = {
  moveName: 'Close Medium (Genji)',
  altName: 'Genji cM',
  damage: '650',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '14',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['m'],
  description: "Slower and less advantageous than Kagura c.M.\nMostly used for punishes where 5H is too slow.\nCombos into Kagura 5M on counterhit.\nA generic starter. It can be used in pressure situations with autocombos, but is poor for staggering."
};
const genjiCloseH = {
  moveName: 'Close Heavy (Genji)',
  altName: 'Genji cH',
  damage: '450, 350',
  guard: 'Mid',
  startup: '8',
  active: '2,3',
  recovery: '23',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '-3',
  clash: '5',
  motion: ['h'],
  description: "Less damage than Kagura c.H, but faster.\nClose anti-air, hits farther behind her than Genji 2H.\nHits twice for easy confirms and high enough to catch jumpers.\nIn Genji, this is Narmaya's main combo filler and strongest punish starter, and also an useful frametrap tool that can be made safe or even plus with auto combo or Genji 236H on block."
};

// Kagura
const kaguraCloseL = {
  moveName: 'Close Light (Kagura)',
  altName: 'Kagura cL',
  damage: '300',
  guard: 'Mid',
  startup: '5',
  active: '3[1,2]',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['l'],
  description: "There is no close version of this normal.\nOnly even on block, but leads to auto combo at all ranges.\nDoes not reach full range on first active frame. Plus at full range.\nA stab forward with the actual blade. Narmaya's only 5f normal. It has slightly more range than Genji 5L and is a frame faster."
};
const kaguraCloseM = {
  moveName: 'Close Medium (Kagura)',
  altName: 'Kagura cM',
  damage: '650',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '12',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "General pressure tool.\nCombos from 2L from either stance.\nCH confirms into M buttons and Genji 5H on crouching CH.\nA faster alternative to Kagura 2M that leads into autocombo and is better at catching jumpouts, but can be contested on block."
};
const kaguraCloseH = {
  moveName: 'Close Heavy (Kagura)',
  altName: 'Kagura cH',
  damage: '1100',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '15',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['h'],
  description: "Slightly slower than Genji c.H, but higher damage.\nCombos into itself on CH.\nGood at catching jump-outs but not very good as anti-air.\nCan be plus when timed meaty. If the hitstop shows the blade touching the ground, it is plus.\nOne of Narmaya's strongest normals. This move leads to big combos on counterhit and is strong in general pressure situations. This is Narmaya's highest damage starter, so it should be used for punishes whenever possible."
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
  description: "A Granblue autocombo like any other. In Genji, autocombo is a valid pressure option thanks to the threat of 236H. Try to avoid using them in short combos into super, as that'll reduce the damage. 5L c.XX can sometimes be a frame trap, but the timing is tough."
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
  description: "A Granblue autocombo like any other. In Genji, autocombo is a valid pressure option thanks to the threat of 236H. Try to avoid using them in short combos into super, as that'll reduce the damage. 5L c.XX can sometimes be a frame trap, but the timing is tough."
};

// far normals
// Genji
const genjiFar5M = {
  moveName: 'Far Medium (Genji)',
  altName: 'Genji f5M',
  damage: '600',
  guard: 'Mid',
  startup: '9',
  active: '4',
  recovery: '17',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "A fast, long-reaching poke. This is the main button you'll be using in neutral.\nAlso your whiff punish of choice.\nDecent far anti air, but it's no Katalina f.H.\nCombos into SSBA at every range, making it quite deadly when Narmaya has full meter and is at low health.\nA strong, safe poke that should be a mainstay of your poking game. Cancel into 214H or SSBA for a hit confirm into knockdown."
};
const genjiFar5H = {
  moveName: 'Far Heavy (Genji)',
  altName: 'Genji f5H',
  damage: '900',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '22',
  onblock: '-11',
  onhit: '-7',
  oncounterhit: '+1',
  clash: '4',
  motion: ['h'],
  description: "Powerful, but high recovery poke\nThe big brother of f.M. Slightly slower and slightly more range. Should mainly use it as a preemptive running poke, where the combination of high attack level, fast run speed and long range is difficult to deal with, and leads to easier hit confirms into stronger combos. Try to not whiff it, it isn't hard to whiff punish."
};

// Kagura
const kaguraFar5M = {
  moveName: 'Far Medium (Kagura)',
  altName: 'Kagura f5M',
  damage: '600',
  guard: 'Mid',
  startup: '7',
  active: '5',
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+3',
  clash: '3',
  motion: ['m'],
  description: "OK poke, punish and pressure tool.\nAlso a decent far anti air.\nYour only real poke in Kagura, but inferior to Genji pokes. More useful for counter hit confirms and punishes due to its range and speed."
};
const kaguraFar5H = {
  moveName: 'Far Heavy (Kagura)',
  altName: 'Kagura f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '20',
  onblock: '-9',
  onhit: '-5',
  oncounterhit: '+3',
  clash: '4',
  motion: ['h'],
  description: "Essentially an highly active wall of hitbox that excels at crushing weaker pokes or mashes. Easy to confirm on hit, but also easy to whiff punish."
};

// Crouch normals
// Genji
const genji2L = {
  moveName: 'Crouch Light (Genji)',
  altName: 'Genji 2L',
  damage: '350',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "Staple, self-chaining pressure tool\nMight as well be the exact same move in each stance, but the Genji version has slightly bigger range. Both versions are staple pressure tools due to their high frame advantage."  
};
const genji2M = {
  moveName: 'Crouch Medium (Genji)',
  altName: 'Genji 2M',
  damage: '600',
  guard: 'Mid',
  startup: '8',
  active: '4',
  recovery: '14',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Safest, shortest range poke\nLow-ish profile\nImportant secondary poke compared to Genji f.M. Narmaya's only poke that catches rolls and has no large extended hurtbox."
};
const genji2H = {
  moveName: 'Crouch Heavy (Genji)',
  altName: 'Genji 2H',
  damage: '900',
  guard: 'Mid',
  startup: '11',
  active: '5',
  recovery: '23',
  onblock: '-11',
  onhit: '-7',
  oncounterhit: '+1',
  clash: '4',
  motion: ['2', 'h'],
  description: "Really strong anti-air with a good hitbox in front and behind Gran, allowing him to beat out opponents jumping behind him. On CH, whiff 214L> 2H> 214M is a good damage combo with great corner carry, but when they're closer to the ground/to you you'll need to go for an alternate route. As of 2.0 Patch the increased start-up and the nerfs to many of Gran's other moves have made many corner combos unreliable at best or impossible to do. Notably corner 2H> 5U is not only harder to go into but can't loop into itself reliably anymore."
};
const genji2U = {
  moveName: 'Crouch Unique (Genji)',
  altName: 'Genji 2U',
  damage: '700',
  guard: 'Low',
  startup: '9',
  active: '6',
  recovery: '20',
  onblock: '-11',
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Long-range low snipe\nLow profile, good hitbox to hurtbox ratio\nUnsafe on block or whiff\n2U and dash 2U are a risky, but effective option to snipe enemies walking back, which Narmaya otherwise has trouble dealing with."
};

// Kagura
const kagura2L = {
  moveName: 'Crouch Light (Kagura)',
  altName: 'Kagura 2L',
  damage: '350',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "Staple, self-chaining pressure tool\nHas the exact same framedata as the Genji version but a little less range."
};
const kagura2M = {
  moveName: 'Crouch Medium (Kagura)',
  altName: 'Kagura 2M',
  damage: '600',
  guard: 'Mid',
  startup: '7',
  active: '3',
  recovery: '11',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+9',
  clash: '3',
  motion: ['2', 'm'],
  description: "Main pressure tool, plus on block with high counterhit reward\nCore pressure move that is plus on block, frametraps into itself, and leads to pain at any range on counter hit. Use, abuse and keep resetting pressure with microdash Kagura 2M."
};
const kagura2H = {
  moveName: 'Crouch Heavy (Kagura)',
  altName: 'Kagura 2H',
  damage: '900',
  guard: 'Mid',
  startup: '10',
  active: '8',
  recovery: '22',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '-1',
  clash: '4',
  motion: ['2', 'h'],
  description: "Highest reward anti-air in pressure\nThe stronger 2H. Reliable, highly active and extremely good at stuffing cross-ups. The bane of anyone trying to jump out of your pressure."
};
const kagura2U = {
  moveName: 'Crouch Unique (Kagura)',
  altName: 'Kagura 2U',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Low profile\nUnsafe on block or whiff\nUsed for optimal crouch confirms and 7f punishes, but the worse range disqualifies it as a poke and it is harder to use it safely than Genji 2U. Can sometimes use in pressure to call out walking back."
};

// jump normals
// Genji
const genjiJL = { 
  moveName: 'Jump Light (Genji)', 
  altName: 'Genji jL', 
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
  description: "Air-to-air\nPretty generic jumping light with infinite active frames. Usable as air-to-air."
};
const genjiJM = { 
  moveName: 'Jump Medium (Genji)', 
  altName: 'Genji jM', 
  damage: '550', 
  guard: 'High', 
  startup: '6', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Jump-in, can cross up\nYour button in Genji when jumping on your enemies' heads. Can hit cross-up, but not too far."
};
const genjiJH = { 
  moveName: 'Jump Heavy (Genji)', 
  altName: 'Genji jH', 
  damage: '700', 
  guard: 'High', 
  startup: '9', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "All-round jump in\nAll-purpose jump-in that doesn't hit behind Narmaya despite what the animation suggests."
};
const genjiJU = { 
  moveName: 'Jump Unique (Genji)', 
  altName: 'Genji jU', 
  damage: '800', 
  guard: 'High', 
  startup: '10', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
  description: "Spaced jump-in and air-to-air\nHard coded to whiff on crouchers\nJumping button with high horizontal range. Excellent when well spaced, but can be low profiled, or beat with far-range antiairs."
};

// Kagura
const kaguraJL = { 
  moveName: 'Jump Light (Kagura)', 
  altName: 'Kagura jL', 
  damage: '400', 
  guard: 'High', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "Air-to-air\nA straight upgrade over the Genji version, with better disjoint, a stronger air-to-air angle and a cancel into Kagura j.214H for possible conversions, or plus frames on block."
};
const kaguraJM = { 
  moveName: 'Jump Medium (Kagura)', 
  altName: 'Kagura jM', 
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '8', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Jump-in, dedicated cross-up\nSacrifices frontal range for a large crossup hitbox. Cancelling into j.214H make this button plus from any height, and yields a strong conversion from crossup jumpins."
};
const kaguraJH = { 
  moveName: 'Jump Heavy (Kagura)', 
  altName: 'Kagura jH', 
  damage: '800', 
  guard: 'High', 
  startup: '12', 
  active: '9', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Highest attack level jump in\nExclusively used in safejumps and deep jump-ins. Hits very high above Narmaya, but Kagura j.U is better at covering that angle."
};
const kaguraJU = { 
  moveName: 'Jump Unique (Kagura)', 
  altName: 'Kagura jU', 
  damage: '800', 
  guard: 'High', 
  startup: '9', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "All-purpose air button\nUseful all-purpose jumping button, usable both as air-to-air and as a jump in."
};

// unique action
const lv1U = { 
  moveName: 'Butterfly Effect', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Narmaya changes from Genji stance to Kagura stance or vice-versa, changing her normals and special moves.\nIf swapping to Kagura stance, a red butterfly will be shown, and if swapping to Genji stance, a blue butterfly will be shown.\nWhen done alone, the swapping has a bit of a lengthy recovery time, but that can be canceled into anything except for walking after ~9 frames. This can be used to change stances in neutral, by pressing 5U and then quickly tapping the guard button to cancel the recovery.\nIts most important property, however, is that this can be used while you're in the middle of a move. If used in this way, Narmaya has no extra recovery at all, and as soon as she returns to neutral, she'll be in the other stance. Mastering this is a core part of her corner combos and her pressure.\nFor those familiar with Jojo:HFTF, the idea behind each stance is similar to Chaka's Stand ON/OFF. With long-range tools such as f.M and Setsuna, Genji stance is an excellent neutral stance, whereas Kagura's faster normals with higher frame advantage make it an ideal stance for close ranges."
};
const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+42)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Narmaya's forward throw gives her an auto-timed safejump in the corner by holding up-forward directly after it finishes, or even midscreen with an instant super jump Kagura j.H. The back throw has higher recovery and doesn't allow for safe jumps."
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
  description: "Narmaya's forward throw gives her an auto-timed safejump in the corner by holding up-forward directly after it finishes, or even midscreen with an instant super jump Kagura j.H. The back throw has higher recovery and doesn't allow for safe jumps."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+47)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Air-to-air when anticipating air stall\nGeneric air throw. Usable as a preemptive or reactive air-to-air. Air throw is allowed to side swap in this game, which makes it a more valuable option if you can gain the corner with it."
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
  description: "Goes over throws and low attacks, for high counterhit reward\nUniversal overhead. An educational conditioning tool that teaches your opponent not to tech throws with the regular throw tech, especially close to the corner, unless they want to die. This makes your opponent more likely to try and mash out or jump out against your throw threats, which you can then abuse in other ways."
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
  moveName: 'L Setsuna', 
  altName: '236L', 
  damage: '1000→700', 
  guard: 'Mid→All', 
  startup: '14', 
  active: '7', 
  recovery: '28 (Whiff: 35)', 
  onblock: '-12', 
  onhit: 'Close: KD, Far: -4',
  oncounterhit: 'Close: KD, Far: 0',
  clash: '1',
  motion: ['236', 'l', 'or', 'a'],
  description: "Long range high whiff recovery projectile that clashes with projectiles.\nNarmaya does a far-reaching horizontal slash forwards. Clashes with single hit projectiles. Multi-hit projectiles, such as Gran's H Reginleiv which has 3 hits, will only have one of their 'hits' canceled. At close to medium range, both the L and M versions will send the opponent up into the air slightly before putting them into a soft knockdown, whereas hitting them at medium to far range with this move will only make the opponent slightly recoil with no knockdown. The H version will follow the first behavior regardless of distance, however, results in a hard knockdown, and can wallbounce at close to medium range if the opponent is to the corner. All versions suffer reduced damage if hit at medium to far range.\nFast startup, high recovery.\nThe L version is a pretty swift slash, making it a long-range poke useful for keeping your opponent at bay in neutral, stuffing fireball attempts, punishing a zoning attempt, or a whiffed move. But it is also a move you have to be careful with, since it yields you little damage if it hits, but has enough recovery to eat a high-damage punish if your opponent jumps over it or rolls through it."
};
const mFireball = { 
  moveName: 'M Setsuna', 
  altName: '236M', 
  damage: '1000→700', 
  guard: 'Mid→All', 
  startup: '32-58', 
  active: '7', 
  recovery: '10 (Whiff: 21)', 
  onblock: '+10', 
  onhit: 'Close: KD, Far: +14',
  oncounterhit: '+30',
  clash: '1',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Long range high whiff recovery projectile that clashes with projectiles.\nNarmaya does a far-reaching horizontal slash forwards. Clashes with single hit projectiles. Multi-hit projectiles, such as Gran's H Reginleiv which has 3 hits, will only have one of their 'hits' canceled. At close to medium range, both the L and M versions will send the opponent up into the air slightly before putting them into a soft knockdown, whereas hitting them at medium to far range with this move will only make the opponent slightly recoil with no knockdown. The H version will follow the first behavior regardless of distance, however, results in a hard knockdown, and can wallbounce at close to medium range if the opponent is to the corner. All versions suffer reduced damage if hit at medium to far range.\nSlow startup, short recovery.\nLinks into most pokes on hit.\nExtended counter hit hitstun.\nThe M version has a longer startup, can be delayed even longer and is very plus on block. You can mix it up with the L version to throw off your opponent's rhythm, or use it as a pressure reset against overly respectful opponents. Useful in neutral against opponents happy to roll through the L version, but still loses to jumps. Do not use against characters with an long-range invincible super on deck."

};
const hFireball = { 
  moveName: 'H Setsuna', 
  altName: '236H', 
  damage: '1000→700', 
  guard: 'Mid→All', 
  startup: '15', 
  active: '7', 
  recovery: '14 (Whiff: 25)', 
  onblock: '+2', 
  onhit: 'HKD (+58)',
  oncounterhit: 'HKD (+62)',
  clash: '1',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Long range high whiff recovery projectile that clashes with projectiles.\nNarmaya does a far-reaching horizontal slash forwards. Clashes with single hit projectiles. Multi-hit projectiles, such as Gran's H Reginleiv which has 3 hits, will only have one of their 'hits' canceled. At close to medium range, both the L and M versions will send the opponent up into the air slightly before putting them into a soft knockdown, whereas hitting them at medium to far range with this move will only make the opponent slightly recoil with no knockdown. The H version will follow the first behavior regardless of distance, however, results in a hard knockdown, and can wallbounce at close to medium range if the opponent is to the corner. All versions suffer reduced damage if hit at medium to far range.\nBest of both worlds.\nCounterhit conversion into Genji f.M midscreen.\nWallbounce conversions in the corner.\nThe H version combines frame advantage, speed and higher safety on whiff. It is plus on block, fast enough to frametrap, extends corner combos and can just be thrown out there to fish for unreactable hard knockdowns from mid screen. Use and abuse."
};

const lSlashes = { 
  moveName: 'L Kyokasuigetsu', 
  altName: '236L', 
  damage: '900', 
  guard: 'Mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-5', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Main combo ender, or close to corner combo starter\nFaster startup when canceled into from a Transient (214X) command dash\nL Version\nHits once.\nThe 2.70 patch changes turn this move into a safe poke or approach when spaced, in exchange for losing the knockdown. On hit, it now air resets, with enough time to dash up with a meaty."
};
const mSlashes = { 
  moveName: 'M Kyokasuigetsu', 
  altName: '236M', 
  damage: '600x2', 
  guard: 'Mid', 
  startup: '16', 
  active: '2(9)2', 
  recovery: '21', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Main combo ender, or close to corner combo starter\nFaster startup when canceled into from a Transient (214X) command dash\nHits twice for more damage and covers more ground.\nYour EX-less hit confirm and combo ender of choice. Good damage, and good knockdown that leaves more than enough time to run in with any meaty or throw you want. Do not use on block."

};
const hSlashes = { 
  moveName: 'H Kyokasuigetsu', 
  altName: '236H', 
  damage: '400x3', 
  guard: 'Mid', 
  startup: '15', 
  active: '2(9)2(9)6', 
  recovery: '20', 
  onblock: '-7', 
  onhit: 'HKD (+66)',
  oncounterhit: 'HKD (+68)',
  clash: '4',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Main combo ender, or close to corner combo starter\nFaster startup when canceled into from a Transient (214X) command dash\nHits three times.\nLeads to a combo in the corner, or a safejump midscreen. Most characters can now punish it on block, with the exception of Ferry, Metera and Narmaya in Genji stance. Extremely important cooldown to start her corner combos, Narmaya will be far less threatening in pressure during Kagura stance if she does not have this cooldown."
};


// dragon punches
const lUppercut = { 
  moveName: 'L Absolute Horizon', 
  altName: '623L', 
  damage: '600,400', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2,8', 
  recovery: '34', 
  onblock: '-23', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "True reversal\nEmergency or fallback anti-air, but bad at hitting cross-ups\nA classic reversal DP. Also your staple fallback anti-air in Genji if you have no time for 2H, or no confidence it'll win. All versions are air unblockable on the first hit, and EX is fully air unblockable. If you use it as a reactive anti-air, either use the easy input version or buffer the DP motion ahead of time. If only the second hit of the M version hits as a high counter hit, you get a combo off it - this can happen against high anti-antiairs like Percival j.U."
};
const mUppercut = { 
  moveName: 'M Absolute Horizon', 
  altName: '623M', 
  damage: '800,500', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2,8', 
  recovery: '40', 
  onblock: '-27', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "True reversal\nEmergency or fallback anti-air, but bad at hitting cross-ups\nA classic reversal DP. Also your staple fallback anti-air in Genji if you have no time for 2H, or no confidence it'll win. All versions are air unblockable on the first hit, and EX is fully air unblockable. If you use it as a reactive anti-air, either use the easy input version or buffer the DP motion ahead of time. If only the second hit of the M version hits as a high counter hit, you get a combo off it - this can happen against high anti-antiairs like Percival j.U."
};
const hUppercut = { 
  moveName: 'H Absolute Horizon', 
  altName: '623H', 
  damage: '650,250x3', 
  guard: 'Mid', 
  startup: '9', 
  active: '2,4,2,2', 
  recovery: '44', 
  onblock: '-31', 
  onhit: 'HKD (+55)',
  oncounterhit: 'HKD (+51)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "True reversal\nEmergency or fallback anti-air, but bad at hitting cross-ups\nA classic reversal DP. Also your staple fallback anti-air in Genji if you have no time for 2H, or no confidence it'll win. All versions are air unblockable on the first hit, and EX is fully air unblockable. If you use it as a reactive anti-air, either use the easy input version or buffer the DP motion ahead of time. If only the second hit of the M version hits as a high counter hit, you get a combo off it - this can happen against high anti-antiairs like Percival j.U."
};

const lParrycut = { 
  moveName: 'L Mugenkagura', 
  altName: '623L', 
  damage: '700,400', 
  guard: 'Mid, All', 
  startup: '20', 
  active: '4,6', 
  recovery: '31', 
  onblock: '-18', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "High/mid parry that beats safejumps\nAutoguard stance that parries highs and mids. Follows up with a counter slash after parrying an attack, or after some time passes. Usable as a reaction to slow specials or a last resort anti-air that loses to empty jumps. Freezes the opponent on parry, allowing it to win against safe jumps.\nQuick startup.\nYou can combo into it off close autocombos."
};
const mParrycut = { 
  moveName: 'M Mugenkagura', 
  altName: '623M', 
  damage: '750,600', 
  guard: 'Mid, All', 
  startup: '42', 
  active: '4,6', 
  recovery: '35', 
  onblock: '-22', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "High/mid parry that beats safejumps\nAutoguard stance that parries highs and mids. Follows up with a counter slash after parrying an attack, or after some time passes. Usable as a reaction to slow specials or a last resort anti-air that loses to empty jumps. Freezes the opponent on parry, allowing it to win against safe jumps.\nSlower.\nMore damage.\nBasically impossible to combo into, only used for hard reads when you really need the extra parry time."
};
const hParrycut = { 
  moveName: 'H Mugenkagura', 
  altName: '623H', 
  damage: '750,250x3', 
  guard: 'Mid', 
  startup: '20', 
  active: '4,3,2,1', 
  recovery: '40', 
  onblock: '-24', 
  onhit: 'HKD (+51)',
  oncounterhit: 'HKD (+48)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "High/mid parry that beats safejumps\nAutoguard stance that parries highs and mids. Follows up with a counter slash after parrying an attack, or after some time passes. Usable as a reaction to slow specials or a last resort anti-air that loses to empty jumps. Freezes the opponent on parry, allowing it to win against safe jumps.\nNot actually as fast as the L version. Still fast enough for combo uses, and Narmaya's staple ender for full corner combos.\nHard knockdown on hit."
};

// 214 motion (Rekka)
const lCmdDash = { 
  moveName: 'L Transient', 
  altName: '214L', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '39', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Command dash that cancels into other specials, main hit confirm tool\nA forward command dash. All versions can be canceled into Kagura stance specials, SBA or SSBA. Canceling into Kagura specials will also switch your stance to Kagura automatically.\nL and M version have the same earliest cancel point, but M can cross up. The H version can be canceled earlier than L or M, allowing better confirms off more buttons, and is usually your command dash of choice for hit confirms. For confirms, you will usually confirm into 236M midscreen for good pressure, or 236H for Narmaya's full, high damage corner combo. On good counter hits, combos into SBA are possible. If you missed a hit confirm, you can cancel into 214X instead to keep yourself safe.\nWhen crossing up with the M and H versions, keep in mind that your followup input will be interpreted from the side before you crossed up. For example, to get Kyokasuigetsu (236X) after crossing up, you would technically input 214X."
};
const mCmdDash = { 
  moveName: 'M Transient', 
  altName: '214M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '45', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Command dash that cancels into other specials, main hit confirm tool\nA forward command dash. All versions can be canceled into Kagura stance specials, SBA or SSBA. Canceling into Kagura specials will also switch your stance to Kagura automatically.\nL and M version have the same earliest cancel point, but M can cross up. The H version can be canceled earlier than L or M, allowing better confirms off more buttons, and is usually your command dash of choice for hit confirms. For confirms, you will usually confirm into 236M midscreen for good pressure, or 236H for Narmaya's full, high damage corner combo. On good counter hits, combos into SBA are possible. If you missed a hit confirm, you can cancel into 214X instead to keep yourself safe.\nWhen crossing up with the M and H versions, keep in mind that your followup input will be interpreted from the side before you crossed up. For example, to get Kyokasuigetsu (236X) after crossing up, you would technically input 214X."
};
const hCmdDash = { 
  moveName: 'H Transient', 
  altName: '214H', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '36', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Command dash that cancels into other specials, main hit confirm tool\nA forward command dash. All versions can be canceled into Kagura stance specials, SBA or SSBA. Canceling into Kagura specials will also switch your stance to Kagura automatically.\nL and M version have the same earliest cancel point, but M can cross up. The H version can be canceled earlier than L or M, allowing better confirms off more buttons, and is usually your command dash of choice for hit confirms. For confirms, you will usually confirm into 236M midscreen for good pressure, or 236H for Narmaya's full, high damage corner combo. On good counter hits, combos into SBA are possible. If you missed a hit confirm, you can cancel into 214X instead to keep yourself safe.\nWhen crossing up with the M and H versions, keep in mind that your followup input will be interpreted from the side before you crossed up. For example, to get Kyokasuigetsu (236X) after crossing up, you would technically input 214X."
};

const lTsubame = { 
  moveName: 'L Crescent Moon', 
  altName: '214L', 
  damage: '1100', 
  guard: 'All', 
  startup: '32', 
  active: '8', 
  recovery: '9', 
  onblock: '-2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Safe-on-block frametrap that crushes ground buttons\nNot an overhead, but has more frame advantage if blocked crouching. Has a built-in jump on startup, so it crushes most grounded buttons, but the reward for it isn't high and a waiting opponent can anti-air Narmaya out of the flip.\nSlower.\nFlips forward a short distance, almost never crosses up.\nCan be plus when spaced at the very tip of its range." 
};
const mTsubame = { 
  moveName: 'M Crescent Moon', 
  altName: '214M', 
  damage: '1200', 
  guard: 'All', 
  startup: '38', 
  active: '7', 
  recovery: '10', 
  onblock: '-2', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Safe-on-block frametrap that crushes ground buttons\nNot an overhead, but has more frame advantage if blocked crouching. Has a built-in jump on startup, so it crushes most grounded buttons, but the reward for it isn't high and a waiting opponent can anti-air Narmaya out of the flip.\nSlower.\nMoves Narmaya farther than the L version, crosses up at close range.\nCan be plus when spaced as a deep cross-up."
};
const hTsubame = { 
  moveName: 'H Crescent Moon', 
  altName: '214H', 
  damage: '1200', 
  guard: 'All', 
  startup: '32', 
  active: '8', 
  recovery: '8', 
  onblock: '+1', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Always plus.\nFaster than L or M versions.\nCan be steered by holding [6], to follow the M versions trajectory instead of the L version's.\nSkips neutral if opponent focuses too much on the ground game."
};

const lAirTsubame = { 
  moveName: 'L Crescent Moon (Air)', 
  altName: '214L', 
  damage: '1000', 
  guard: 'All', 
  startup: '5', 
  active: '7', 
  recovery: '7 (After landing)', 
  onblock: '-3', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Anti-anti air and ground button whiff punish\nGives better jump-in or air-to-air confirms\nPressure tool when done as TK, especially the EX\nBounces backward\nBetter and faster at hitting in front\nHuge downward hitbox, can be used as anti-anti-air\nSlightly stalls before landing, lowest possible version is +4 on block and leads to counterhit confirms"  
};
const mAirTsubame = { 
  moveName: 'M Crescent Moon (Air)', 
  altName: '214M', 
  damage: '1000', 
  guard: 'All', 
  startup: '5', 
  active: '7', 
  recovery: '7 (After landing)', 
  onblock: '-6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Anti-anti air and ground button whiff punish\nGives better jump-in or air-to-air confirms\nPressure tool when done as TK, especially the EX\nBounces forwardBetter and faster at hitting behind\nUsually not plus"  
};
const hAirTsubame = { 
  moveName: 'H Crescent Moon (Air)', 
  altName: '214H', 
  damage: '1100', 
  guard: 'All', 
  startup: '5', 
  active: '3', 
  recovery: '7 (After landing)', 
  onblock: '+2', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '3',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Anti-anti air and ground button whiff punish\nGives better jump-in or air-to-air confirms\nPressure tool when done as TK, especially the EX\nAlways plus, especially on air block\nBehaves similarily to M version, not L version\nWhen done as TK, strong pressure reset and throw bait that is 9f of startup including jump startup, +2 on block and on counterhit combos midscreen into Genji f.M\nMidscreen combos when used as crossup jump-in\nStaple corner combo tool\nAir special. All versions change air momentum on hit, which gives them useful properties done just above the ground as TK specials. Comes out very fast as it does not have the jump that the ground version has. Can be used to combo off air-to-air hits or off jump-ins that would normally be too high.\nValues in [] are for the Tiger Knee'd version"  
};

// skybound art
const sba = { 
  moveName: 'One Hundred Cloudscapes', 
  altName: '236236H', 
  damage: '1000-3500', 
  guard: 'Mid', 
  startup: '11', 
  active: '6', 
  recovery: '56', 
  onblock: '-43', 
  onhit: 'HKD (S:+42, T:+52)',
  oncounterhit: 'HKD (S:+42, T:52)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Short-range, fast confirm super\nGreat anti-air\nLaunches the opponent up and catches them with an elegant sword spin on the way down. Has a large vertical hitbox but short horizontal reach, making it difficult to connect in some situations but also an excellent anti-air. To increase the range, you can cancel into it from Utakata (214X[g]).\nIf you hold down the button on hit, only the initial launching attack will come out. This lets you continue with your own combo, or take time to create various mixups. Usually, this is not worth it compared to the full animation, but it can be used if you would otherwise not get a full combo at all."
};
const ssba = { 
  moveName: 'Butterfly Effect: Ame-no-Uzume', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'Mid*1,All', 
  startup: '14', 
  active: '3x16', 
  recovery: '48', 
  onblock: '-32', 
  onhit: 'HKD (+42)',
  oncounterhit: 'HKD (+42)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "High horizontal range and damage, combos off any poke\nCrosses up on animation\nInvincible startup, with a far, far longer range than 236236H. Activates a cinematic that deals more damage and switches sides if it hits at close range. You can combo off a lot of different pokes or use it in close-to-corner juggles where nothing else would reach."
};


export const narmayaInfo = [
  general,
  genjiCloseL,
  genjiCloseM,
  genjiCloseH,
  kaguraCloseL,
  kaguraCloseM,
  kaguraCloseH,
  auto1,
  auto2,
  genjiFar5M,
  genjiFar5H,
  kaguraFar5M,
  kaguraFar5H,
  genji2L,
  genji2M,
  genji2H,
  genji2U,
  kagura2L,
  kagura2M,
  kagura2H,
  kagura2U,
  genjiJL,
  genjiJM,
  genjiJH,
  genjiJU,
  kaguraJL,
  kaguraJM,
  kaguraJH,
  kaguraJU,
  lv1U,
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
  lSlashes,
  mSlashes,
  hSlashes,
  lUppercut,
  mUppercut,
  hUppercut,
  lParrycut,
  mParrycut,
  hParrycut,
  lCmdDash,
  mCmdDash,
  hCmdDash,
  lTsubame,
  mTsubame,
  hTsubame,
  lAirTsubame,
  mAirTsubame,
  hAirTsubame,
  sba,
  ssba
]