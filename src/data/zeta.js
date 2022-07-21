// FINAL 

const general = { char: "Zeta", health: '10000', prejump: '4F', backdash: '22F' }

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
  description: "Zeta attacks with the back of her spear. Her fastest normal, and a good normal for pressure that allows you link into other moves or hit confirm directly using the autocombo.\n\nLinks into 2L, f.L and c.M on regular hit, and 2U on crouching.\nGenerally requires at least one auto-combo hit to comfortably combo into any specials on cancel."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['m'],
  description: "Knee to the face. Combos from c.L and 2L naturally and is her best route out of a close light hit. The autocombo out of this can be used to hit confirm or end blockstrings safely, but pressing this generally ends your turn."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '17',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+12',
  clash: '5',
  motion: ['h'],
  description: "Zeta's optimal damage starter at close range. Safe on block, so can be occasionally used as a callout meaty or as a delayed frametrap option.\nHas some very niche applications as a close range anti-air, but in general 2H is your go-to option at close range.\nLinks into itself or f.H on counter hit, depending on range.\nCombos into nearly all of Zeta's specials, including meterless Rhapsody followups, but does not combo into H Infinite Wonders (at least one auto-combo hit is still required without counter-hit)."
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
  description: "Standard auto combo normals. The first hit of auto combo is generally required to combo into H Infinite Wonders without counter-hit, which somewhat gates her maximum damage. Performing the full auto combo can be occasionally useful in some of Zeta's more specific juggles, but in general it should be avoided in order to not reduce the damage and increase the combo limit\n\nAuto combo on block canceled into 5U is a true blockstring and can be a good way to push the opponent into the corner, even on block.\n2nd hit of autocombo can usually hit airborne opponents, while the 3rd hit tends to whiff due to the hitbox not being high enough.\nUpon hitting an airborne opponent with a close normal, the second hit of autocombo can be used for a bigger confirm window. Confirms into Spear of Arvess (Rise) in this scenario, though other specials may work depending on height. Resolute Strike will whiff on opponents that are too high.\nThis scenario will likely happen against opponents that jump out of pressure or fuzzy jump."  
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
  description: "Standard auto combo normals. The first hit of auto combo is generally required to combo into H Infinite Wonders without counter-hit, which somewhat gates her maximum damage. Performing the full auto combo can be occasionally useful in some of Zeta's more specific juggles, but in general it should be avoided in order to not reduce the damage and increase the combo limit\n\nAuto combo on block canceled into 5U is a true blockstring and can be a good way to push the opponent into the corner, even on block.\n2nd hit of autocombo can usually hit airborne opponents, while the 3rd hit tends to whiff due to the hitbox not being high enough.\nUpon hitting an airborne opponent with a close normal, the second hit of autocombo can be used for a bigger confirm window. Confirms into Spear of Arvess (Rise) in this scenario, though other specials may work depending on height. Resolute Strike will whiff on opponents that are too high.\nThis scenario will likely happen against opponents that jump out of pressure or fuzzy jump."  
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
  description: "Zeta kicks in front of her. This normal is fast and has good range for a light normal, but Zeta's foot will whiff on crouchers, low-profiling moves, and shorter characters like Charlotta. Use with caution when poking.\nCombos into L or H Spear of Arvess, with the former being somewhat inconsistent at further ranges."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '10',
  active: '4',
  recovery: '17',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "One of Zeta's main pokes. f.M allows Zeta to control the mid range by poking the opponent and intercepting approach attempts thanks to the range it has. The slow speed can make it somewhat more awkward to use inside of its max range, where other characters' pokes may be faster, but at tip range it can outrange many similar medium pokes from other characters.\n\nCombos into L or H Spear of Arvess. From absolute max range, H Spear of Arvess is required to get a combo.\nCan be cancelled into L Infinite Wonders on block for chip damage, or 5U to harass the opponent for some minor push into the corner."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '18',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '+5',
  clash: '4',
  motion: ['h'],
  description: "Very similar f.H to some of the shoto characters like Gran and Djeeta. Being faster than f.M, it is generally one of Zeta's best whiff punish options as well as being useful for crushing lower priority pokes pre-emptively.\nHas applications as a far anti-air against jumps where 2H would whiff, and is surprisingly consistent in this context.\nRange is somewhat worse than f.M and 2M in favor of heavy priority.\nCombos into all versions of Spear of Arvess. M Spear of Arvess is optimal but may not combo from further ranges, so be aware of your spacing."
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
  description: "Zeta's best pressure normal. Hits low, range and can link into itself up to 3 times if started from a running hit. Good use of this in stagger and throw pressure is Zeta's main way of opening up opponents without pogo mixup.\nLinks into c.L, f.L, and c.M on normal hit.\nLinks into 2U on crouching hit. Important for crouching confirms since f.L will whiff on crouchers. Confirming 2 of these normals into f.L or 2U depending on the opponent's standing or crouching state is an important route for Zeta's pressure to be rewarding.\nSees use in pogo okizeme as a surprise low option."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '12',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Zeta's other main poke, in tandem with f.M. This normal has slightly worse range than the standing variant but is faster, and is her main method of checking Cross Overs or dashes from a distance. The faster speed also makes this normal a very strong whiff punish option in tandem with f.H\n\nCombos into L or H Spear of Arvess. L Spear is generally consistent outside of hitting extended hurtboxes, such as on a whiff punish.\nCan be cancelled into L Infinite Wonders on block for chip damage, or 5U to harass the opponent for some minor push into the corner."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '5',
  recovery: '24',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "Zeta's main anti-air is scarily consistent at close range. The short horizontal range means it can be baited by far jumps and empty jumps, which can leave you open to whiff punishment, but in close range, it will beat jump attacks.\n\nCombos into Spear of Arvess (Rise) consistently, regardless of counter hit, granting her some of the most consistent anti-air conversions in the game. The version used will depend on the angle the opponent is anti-aired, with L and H being better when the opponent is in front of you, and M being better when the opponent is above or behind you.\nCan juggle into f.H on counter hit, which can be useful for better corner carry or as an alternative conversion if Spear of Arvess (Rise) is on cooldown."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '300, 600',
  guard: 'Low',
  startup: '7',
  active: '3(15)3',
  recovery: '19',
  onblock: '-7',
  onhit: 'HKD (+48)',
  oncounterhit: 'HKD (+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Zeta's sweep. The 2-hit nature of this sweep make it a unique, if somewhat specific move. The long animation makes this move very dangerous to whiff, but the fast startup on the first hit makes this one of Zeta's best close-range punish starters, such as on moves like Charlotta's Holy Ladder. Like most 2Us, this grants a hard knockdown and an easily timed safe jump after, being one of Zeta's preferred combo enders to start her pogo okizeme\n\nBoth hits are a true blockstring and cannot be interrupted, but you must manually block both hits low.\nBoth hits are special cancelable.\nCombos into L and H Spear of Arvess. L Spear tends to be pretty finnicky outside of point blank range, so when in doubt, use H instead.\nCan be kept safe on block by cancelling into L Infinite Wonders, but this cancel can be avoided with Cross Over and punished.\nThe 2 hits make this one of Zeta's easiest single-hit confirms into her Skybound Art."
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
  description: "Relatively standard j.L that is active until landing.\n\nCan be used to catch opponents jumping out of pressure, or moves like Lancelot's H Turbulenz.\nSees some use in Zeta's safe jump okizeme to as an alternative to j.U in order to setup blockstrings into an immediate low, such as j.L into 2U."
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
  description: "Zeta's best crossup normal. Has to hit relatively deep to be able to link into grounded normals.\n\nRhapsody's H followup into this normal can be a somewhat gimmicky method of escaping a bad situation and creating counter-pressure.\nSees use in Zeta's pogo okizeme as a method to confirm into her air Skybound Art or as a frametrap option after a j.U."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '9', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "Zeta's longest ranged, highest damage jump normal. Easiest to link into a combo on landing.\n\nCan be used for some far midscreen safejumps.\nSees use in Zeta's pogo okizeme as a frametrap option after a j.U.\nAlso used as combo filler after combos using Rhapsody's H followup in the corner."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'High', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '+9', 
  onhit: '+9',
  oncounterhit: '+13',
  clash: '2',
  motion: ['u'],
  description: "Shades of Chun-Li. This normal can be repeated up to twice on hit or block, but only the first hit is an overhead. This concept forms the crux of Zeta's okizeme and offensive mixup\n\nCarries the opponent up with you on hit, but it only moves you upwards on block.\nWhen performed midscreen, the later j.Us in the sequence can cross-up the opponent, though this can be option selected with the Guard button.\nWhen the first j.U is performed low enough, all 3 j.Us in the sequence will be safe to reversals, and not just the first.\nAny jump normal can be performed after a j.U hits or is blocked, which can create frametraps on block.\nPogo sequence can be dropped, allowing Zeta to land and perform a low-hitting 2L to catch an opponent attempting to block the full sequence.\n2 hits of j.U into j.M can be used to confirm Zeta's air Skybound Art, letting her confirm out of her pogo okizeme very easily without a grounded combo."
};

// unique action
const lv1U = { 
  moveName: 'Signo Drive', 
  altName: '5U', 
  damage: '300, 100xN', 
  guard: 'Mid', 
  startup: '8', 
  active: '3(7)3xN', 
  recovery: '18', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+2',
  clash: '3,2xN',
  motion: ['u'],
  description: "Zeta stabs repeatedly with Arvess. This move's duration can be extended by mashing the input. Signo Drive's main purpose is to push the opponent into the corner and into Zeta's optimal poking range. This leaves the opponent standing, so they can be checked with far normals after to keep them in place\n\nDoes not deal any chip damage on block\nMashing the move fully leaves Zeta plus on block, but generally too far to exploit the frame advantage thoroughly\nFinal hits may begin to whiff if mashed too long on block\nUseful alternative as a cancel from far pokes if Spear of Arvess is on cooldown for extra damage and corner carry\nUsing Rhapsody directly after this is blocked can catch antsy opponents attempting to poke out of Zeta's pressure"
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+51)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Zeta kicks and then throws the opponent full screen. Grants a hard knockdown, so she can dash up for okizeme despite the distance. In the corner, an immediate high jump will grant an easy safejump to start pogo okizeme."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+39)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: "Zeta kicks and then throws the opponent full screen. Grants a hard knockdown, so she can dash up for okizeme despite the distance. In the corner, an immediate high jump will grant an easy safejump to start pogo okizeme."
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
  description: "Zeta throws the opponent down to the ground in front of her. Useful as an air-to-air option or against opponents with strong anti-air baiting options. A neutral jump after this will grant a safejump for pogo okizeme."
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

const uOverhead = { 
  moveName: 'Overhead', 
  altName: 'UOH', 
  damage: '1000', 
  guard: 'High', 
  startup: '26 (OD: 24)', 
  active: '6', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['m', 'u'],
  description: "Zeta's overhead. Necessary to use in tandem with her throw to open up opponents without pogo okizeme. Expect to use this a lot.\n\nLike all overheads, will avoid throws and counter hit punish them, leading to massive, optimal combos on a throw bait.\nWill also avoid throws defensively, granting strong punishes on a defensive throw read. Useful, since Zeta's reversal loses to throws.\nIf timed meaty enough, can link into light normals without counter hit."
};

// fireballs
const lFireball = { 
  moveName: 'L Infinite Wonders', 
  altName: '236L', 
  damage: '700', 
  guard: 'All', 
  startup: '20', 
  active: '12', 
  recovery: '22', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Zeta's projectile. The slow startup and recovery make this projectile a high commitment, but the near-instant travel time allows it to blow through every other projectile in the game, even H projectiles. While it is only safe from about 3/4ths screen or further, proper use of this projectile will allow you to get into Zeta's poking range more easily, as you frustrate your opponents out of using their projectile, or entice them to jump. NO LONGER BLOWS THOUGH PROJECTILES AS OF LATEST PATCH\nIt's a beam.\nThe fastest version, in both startup and recovery. Main version to use generically."
};
const mFireball = { 
  moveName: 'M Infinite Wonders', 
  altName: '236M', 
  damage: '900', 
  guard: 'All', 
  startup: '28⇒61', 
  active: '12', 
  recovery: '22', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Zeta's projectile. The slow startup and recovery make this projectile a high commitment, but the near-instant travel time allows it to blow through every other projectile in the game, even H projectiles. While it is only safe from about 3/4ths screen or further, proper use of this projectile will allow you to get into Zeta's poking range more easily, as you frustrate your opponents out of using their projectile, or entice them to jump. NO LONGER BLOWS THOUGH PROJECTILES AS OF LATEST PATCH\nSlower startup.\nCan be delayed by holding down the button.\nThe delayed version can catch antsy opponents attempting to Dodge or Cross Over through the beam. Knocks down (and wall-bounces) on counter hit, allowing Zeta to approach."
};
const hFireball = { 
  moveName: 'H Infinite Wonders', 
  altName: '236H', 
  damage: '200, 700', 
  guard: 'All', 
  startup: '18', 
  active: '24', 
  recovery: '22', 
  onblock: '-5', 
  onhit: 'HKD (+46)',
  oncounterhit: 'HKD (+46)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Zeta's projectile. The slow startup and recovery make this projectile a high commitment, but the near-instant travel time allows it to blow through every other projectile in the game, even H projectiles. While it is only safe from about 3/4ths screen or further, proper use of this projectile will allow you to get into Zeta's poking range more easily, as you frustrate your opponents out of using their projectile, or entice them to jump. NO LONGER BLOWS THOUGH PROJECTILES AS OF LATEST PATCH\nHits twice at close range.\nWallbounces in the corner.\nZeta's best launcher, though she has to use at least 1 hit of her auto combo to combo into it. Corner combos starting with the H version of Infinite Wonders are generally long enough for the cooldown to regenerate by the end. In general, having this move on cooldown is very bad for Zeta's neutral, and the H version provides no extra hits from far range unlike other projectiles, so avoid using it outside of corner combos."
};

// dragon punches
const lSpear = { 
  moveName: 'L Spear of Arvess', 
  altName: '66L', 
  damage: '600', 
  guard: 'Mid', 
  startup: '16', 
  active: '7', 
  recovery: '19', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['6', '6', 'l', 'or', '6', 'a'],
  description: "Performs a rush attack that can be canceled into a follow-up attack while in motion. Zeta's main confirm special. Without this move available, Zeta's options from her far pokes are quite limited, so managing this cooldown is quite important.\nAllows for one follow-up.\nThe general version you'll combo into the most. Generally combos consistently from her medium pokes after the 1.2.1 patch."
};
const mSpear = { 
  moveName: 'M Spear of Arvess', 
  altName: '66M', 
  damage: '800', 
  guard: 'Mid', 
  startup: '19', 
  active: '12', 
  recovery: '19', 
  onblock: '-14', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['6', '6', 'm', 'or', '6', 'a', 'm'],
  description: "Performs a rush attack that can be canceled into a follow-up attack while in motion. Zeta's main confirm special. Without this move available, Zeta's options from her far pokes are quite limited, so managing this cooldown is quite important.\nAllows for one follow-up.\nSlower, but travels further than the L version. Only combos from f.H or auto combo."
};
const hSpear = { 
  moveName: 'H Spear of Arvess', 
  altName: '66H', 
  damage: '600', 
  guard: 'Mid', 
  startup: '15', 
  active: '12', 
  recovery: '19', 
  onblock: '-14', 
  onhit: 'HKD (+45)',
  oncounterhit: 'HKD (+49)',
  clash: '4',
  motion: ['6', '6', 'h', 'or', '6', 'a', 'h'],
  description: "Performs a rush attack that can be canceled into a follow-up attack while in motion. Zeta's main confirm special. Without this move available, Zeta's options from her far pokes are quite limited, so managing this cooldown is quite important.\nAllows for two follow-ups instead of just one.\nGreat for corner carry and midscreen pogo okizeme, though be wary of having this move on cooldown."
};
const lSpearRise = { 
  moveName: 'L Spear of Arvess (Rise)', 
  altName: '22L', 
  damage: '800', 
  guard: 'Mid', 
  startup: '12', 
  active: '12', 
  recovery: '43', 
  onblock: '-38', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Same as Spear of Arvess, but Zeta attacks upwards for the first hit rather than horizontally. Uses a seperate cooldown from the normal horizontal version.\nAll versions are air unblockable for the first strike, but not for any of the followups.\nCan be used raw as an anti-air for specific jump arcs or far jumps.\nZeta travels diagonally upwards.\nAllows for one follow-up.\nGood for basic anti-air combos."
};
const mSpearRise = { 
  moveName: 'M Spear of Arvess (Rise)', 
  altName: '22M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '12', 
  active: '12', 
  recovery: '44', 
  onblock: '-39', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Same as Spear of Arvess, but Zeta attacks upwards for the first hit rather than horizontally. Uses a seperate cooldown from the normal horizontal version.\nAll versions are air unblockable for the first strike, but not for any of the followups.\nCan be used raw as an anti-air for specific jump arcs or far jumps.\nZeta travels directly upwards.\nAllows for one follow-up.\nGood for some corner combo routes that save cooldowns, or for anti-airs where the opponent is directly above Zeta's head."
};
const hSpearRise = { 
  moveName: 'H Spear of Arvess (Rise)', 
  altName: '22H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '12', 
  active: '12', 
  recovery: '43', 
  onblock: '-38', 
  onhit: 'HKD (+37)',
  oncounterhit: 'HKD (+41)',
  clash: '4',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Same as Spear of Arvess, but Zeta attacks upwards for the first hit rather than horizontally. Uses a seperate cooldown from the normal horizontal version.\nAll versions are air unblockable for the first strike, but not for any of the followups.\nCan be used raw as an anti-air for specific jump arcs or far jumps.\nZeta travels diagonally upwards.\nAllows for two follow-ups, not just one.\nGenerally used in anti-air combos or as corner combo filler."
};
const lSpearFall = { 
  moveName: 'L Spear of Arvess (Fall)', 
  altName: 'j22L', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Same as Spear of Arvess, but Zeta attacks downwards from the air. Uses the same cooldown as the grounded anti-air version, as of version 2.01. (Rise). Massively unsafe on block, so use with caution. Can be made kinda safe if done not too high by ending in 3X. Can also be superjump-installed by doing 282X. It's really good against Percival's corner pressure as you can jump out of his fireball cancels and smack him with j.22L.\nZeta travels diagonally downwards.\nAllows for one follow-up.\nUseful for some air-to-airs, or baiting anti-airs from far jumps or high jumps over the opponent."
};
const mSpearFall = { 
  moveName: 'M Spear of Arvess (Fall)', 
  altName: 'j22M', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Same as Spear of Arvess, but Zeta attacks downwards from the air. Uses the same cooldown as the grounded anti-air version, as of version 2.01. (Rise). Massively unsafe on block, so use with caution. Can be made kinda safe if done not too high by ending in 3X. Can also be superjump-installed by doing 282X. It's really good against Percival's corner pressure as you can jump out of his fireball cancels and smack him with j.22L.\nZeta travels directly downwards.\nAllows for one follow-up.\nMainly just useful for baiting anti-airs while directly above an opponent."
};
const hSpearFall = { 
  moveName: 'H Spear of Arvess (Fall)', 
  altName: 'j22H', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '3',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Same as Spear of Arvess, but Zeta attacks downwards from the air. Uses the same cooldown as the grounded anti-air version, as of version 2.01. (Rise). Massively unsafe on block, so use with caution. Can be made kinda safe if done not too high by ending in 3X. Can also be superjump-installed by doing 282X. It's really good against Percival's corner pressure as you can jump out of his fireball cancels and smack him with j.22L.\nZeta travels diagonally downwards.\nAllows for two follow-ups, not just one.\nUsed similarly to the L version to bait anti-airs or escape the corner. The extra followups allow Zeta to keep herself a bit safer on block by dashing away or dashing into the ground as low as possible."
};

// Parry
const lParry = { 
  moveName: 'L Rhapsody', 
  altName: '214L', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '40', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Zeta turns her back and gets into a defensive stance. She will armor all hits until the move recovery begins, or until she cancels into one of the 3 followups. This is one of the best parry/armor type moves in the game, and is invaluable for Zeta's gameplay\n\nThe armor during Rhapsody allows Zeta to punish specific things that other characters can struggle to deal with, such as Percival's fireball traps.\nUnlike some other armor or parry type moves, spot dodging after your move is armored does not guarantee a punish due to the Knee Assault followup.\nThe followups can be used regardless of if Zeta armors through something, allowing them to be used in combos. Good as an alternative combo ender from a midscreen auto combo hit if Spear of Arvess is on cooldown.\nUnlike some other armored moves in the game, like Katalina's Light Wall, Zeta can actually armor multiple hits.\nNone of the followups have any invincibility or armor, so they can be baited if the opponent uses a multi-hitting move to throw off the timing of her followup, or make it impossible for her to perform one safely.\nGetting hit by a high/low/mid that a version of Rhapsody does not cover leads to taking a counter hit.\nArmors highs and jumping attacks.\nIf you're not using the H version, you'll probably be using this version. Useful as an anti-air alternative for some tricky jump moves, or to call out some forward moving moves in neutral like Gran's Overdrive Surge. Cannot be used to call out low hitting forward moving moves, such as Eustace's Takedown. Especially risky against Percival as counter hit Schneiden leads to combos."
};
const mParry = { 
  moveName: 'M Rhapsody', 
  altName: '214M', 
  damage: '-', 
  guard: '-', 
  startup: '3', 
  active: '40', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Zeta turns her back and gets into a defensive stance. She will armor all hits until the move recovery begins, or until she cancels into one of the 3 followups. This is one of the best parry/armor type moves in the game, and is invaluable for Zeta's gameplay\n\nThe armor during Rhapsody allows Zeta to punish specific things that other characters can struggle to deal with, such as Percival's fireball traps.\nUnlike some other armor or parry type moves, spot dodging after your move is armored does not guarantee a punish due to the Knee Assault followup.\nThe followups can be used regardless of if Zeta armors through something, allowing them to be used in combos. Good as an alternative combo ender from a midscreen auto combo hit if Spear of Arvess is on cooldown.\nUnlike some other armored moves in the game, like Katalina's Light Wall, Zeta can actually armor multiple hits.\nNone of the followups have any invincibility or armor, so they can be baited if the opponent uses a multi-hitting move to throw off the timing of her followup, or make it impossible for her to perform one safely.\nGetting hit by a high/low/mid that a version of Rhapsody does not cover leads to taking a counter hit.\nArmors lows.\nThis version will likely see the least use, and in general if the trajectory of the move you're armoring is ambiguous, you're best just using the H version. As this version loses to mids, it is a very risky and situational callout."
};
const lParryFollowup = {
  moveName: 'Crimson Cleave', 
  altName: '214X -> L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '15', 
  active: '3', 
  recovery: '23', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'l', 'l', 'or', '4', 'a', 'l'],
  description: "Follows up Rhapsody with a horizontal cleave attack. It has a decent reach and can be a handy skill to keep the foe at arm's length.\nFurthest reaching followup from Rhapsody. Difficult to punish when spaced at max range.\nThe slowest Rhapsody followup, so this is most likely to be interrupted by a multi-hitting move or an opponent's special.\nWhen performed from the H version of Rhapsody, will wallbounce on hit in the corner. Important to Zeta's optimal corner combos."
}
const mParryFollowup = {
  moveName: 'Rising Split', 
  altName: '214X -> M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '9', 
  active: '6', 
  recovery: '20', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'l', 'm', 'or', '4', 'a', 'm'],
  description: "Follows up Rhapsody with a vertical slash attack. It has a shorter reach than Crimson Cleave but a much faster start-up. It can be a handy skill to use at close range or as an anti-air.\nBest followup from Rhapsody for dealing with air moves, and can be used occasionally as a raw anti-air without armoring anything.\nOn counter hit, Zeta can dash f.H or f.M midscreen for a followup combo.\nWhen performed from the H version of Rhapsody, launches high enough for combos in the corner without counter hit."
}
const hParryFollowup = {
  moveName: 'Knee Assault', 
  altName: '214X -> H', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '8', 
  active: '4', 
  recovery: '16', 
  onblock: '-5', 
  onhit: 'KD (+34)',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'h', 'or', '4', 'a', 'h'],
  description: "Follows up Rhapsody with a jumping knee attack. Zeta can then perform midair attacks (or block) after jumping. It can be a handy skill to close the gap when going on the offensive.\nFastest followup from Rhapsody, making it the best option in a reversal situation or to beat multi-hitting moves or cancels.\nNot generally a good raw anti-air unless you armor a jumping move first.\nDifficult to punish since Zeta has full air control after the leap. Can be used to escape the corner even if the opponent blocks on Zeta's wakeup since she'll cross behind them at an awkward angle to anti-air.\nCan be used to start pogo offense without a knockdown in the corner against an inattentive opponent, though this can be anti-aired.\nActs as a launcher, with more air untech time on the opponent when performed from the H version. One of Zeta's best options to start corner combos when further away from the corner."
}
const hParry = { 
  moveName: 'H Rhapsody', 
  altName: '214H', 
  damage: '-', 
  guard: '-', 
  startup: '1', 
  active: '42', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '4', 'a', 'h'],
  description: "Zeta turns her back and gets into a defensive stance. She will armor all hits until the move recovery begins, or until she cancels into one of the 3 followups. This is one of the best parry/armor type moves in the game, and is invaluable for Zeta's gameplay\n\nThe armor during Rhapsody allows Zeta to punish specific things that other characters can struggle to deal with, such as Percival's fireball traps.\nUnlike some other armor or parry type moves, spot dodging after your move is armored does not guarantee a punish due to the Knee Assault followup.\nThe followups can be used regardless of if Zeta armors through something, allowing them to be used in combos. Good as an alternative combo ender from a midscreen auto combo hit if Spear of Arvess is on cooldown.\nUnlike some other armored moves in the game, like Katalina's Light Wall, Zeta can actually armor multiple hits.\nNone of the followups have any invincibility or armor, so they can be baited if the opponent uses a multi-hitting move to throw off the timing of her followup, or make it impossible for her to perform one safely.\nGetting hit by a high/low/mid that a version of Rhapsody does not cover leads to taking a counter hit.\nArmors all strike and projectile attacks.\nUnlike the L and M versions, this version has frame 1 startup, allowing it to be used as a reversal. Since this is armor, and not invincibility, using H Rhapsody in this manner will lose to throws. However, the armor can beat a number of safejump setups that will be safe to traditional DPs. All of the followups will be enhanced when performed from the H version of Rhapsody. Not recommended for use in neutral since L Rhapsody is good enough and does not put the move on cooldown."
};

// skybound art
const sba = { 
  moveName: 'Resolute Strike', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '14', 
  active: '9', 
  recovery: '33', 
  onblock: '-21', 
  onhit: 'HKD (S:+33, T:+43)',
  oncounterhit: 'HKD (S:+33, T:+43)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Performs a powerful strike attack. When activated midair, Zeta dives diagonally toward the ground. Since this skill covers a long range, it can be used as a combo finisher from afar\n\nCan be option selected with meaty light normals when used as a reversal.\nCan be confirmed into from all of Zeta's main pokes from max range, granting her a powerful single-hit confirm when she has full meter.\nThe air version can be used to confirm from Zeta's pogo offense while in the air, or as a risky way to bait anti-airs.\nDoes 1000 less damage when connected from far range. Using the technical input will increase the range of the max-damage connect.\nUnfortunately, not amazing as an anti-projectile super unlike other forward moving supers."
};
const airSba = { 
  moveName: 'Resolute Strike (Air)', 
  altName: 'j236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '12', 
  active: '-', 
  recovery: '35', 
  onblock: '-13', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Performs a powerful strike attack. When activated midair, Zeta dives diagonally toward the ground. Since this skill covers a long range, it can be used as a combo finisher from afar\n\nCan be option selected with meaty light normals when used as a reversal.\nCan be confirmed into from all of Zeta's main pokes from max range, granting her a powerful single-hit confirm when she has full meter.\nThe air version can be used to confirm from Zeta's pogo offense while in the air, or as a risky way to bait anti-airs.\nDoes 1000 less damage when connected from far range. Using the technical input will increase the range of the max-damage connect.\nUnfortunately, not amazing as an anti-projectile super unlike other forward moving supers."
};
const ssba = { 
  moveName: 'Sirius Roar', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '13', 
  active: '6,2,2,2', 
  recovery: '61', 
  onblock: '-51', 
  onhit: 'HKD (S:+40, T:+50)',
  oncounterhit: 'HKD (S:+40, T:+50)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Performs a powerful rising attack. If connected at close range, Zeta will perform an enhanced version for increased damage. Aside from the raw damage output, this super is generally worse than Zeta's Skybound Art\n\nCan be option selected with meaty light normals when used as a reversal.\nAlmost never gets the full connect when used as an anti-air, and can easily whiff on many jump angles due to the trajectory.\nAwkward trajectory makes this difficult to use outside of corner combos or autocombo confirms. Cannot be confirmed into from her far normals.\nPlaces Zeta midscreen, quite far from the opponent regardless of easy or technical input, making her okizeme somewhat weak. Try to use this when it will kill the opponent."
};


export const zetaInfo = [
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
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lFireball,
  mFireball,
  hFireball,
  lSpear,
  mSpear,
  hSpear,
  lSpearRise,
  mSpearRise,
  hSpearRise,
  lSpearFall,
  mSpearFall,
  hSpearFall,
  lParry,
  mParry,
  hParry,
  lParryFollowup,
  mParryFollowup,
  hParryFollowup,
  sba,
  airSba,
  ssba
]