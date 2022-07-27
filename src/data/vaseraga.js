// FINAL 

const general = { char: "Vaseraga", health: '11000', prejump: '5F', backdash: '21F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '500',
  guard: 'Mid',
  startup: '7',
  active: '3',
  recovery: '5',
  onblock: '+3',
  onhit: '+7',
  oncounterhit: '+9',
  clash: '2',
  motion: ['l'],
  description: "Close range jab. Slower than typical c.L moves but more plus."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '800',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '11',
  onblock: '+3',
  onhit: '+7',
  oncounterhit: '+9',
  clash: '4',
  motion: ['m'],
  description: "Excellent c.M. Pretty solid range, relatively quick, good damage, plus on block, and great value on counter hit or crouching if you can react fast enough. In patch 2.01, the pushback was reduced. Making it easier to tick throw with and making combos more consistent."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1500',
  guard: 'Mid',
  startup: '15',
  active: '6',
  recovery: '21',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+12',
  clash: '5',
  motion: ['h'],
  description: "Extremely damaging c.H but is equally slow. Charging this move doesn't change any of its properties, however if you have Soul Forge active, the armor will cover you as long as you hold the button (this goes for all charged H normals). One of only two moves that combo into 214L or [4]6M on normal hit, leading to some pretty strong combos. This normal has a massive amount of blockstun, which makes it one of the safest ways on going into Savage Rampage without using the EX version."
};
const closeHHold = {
  moveName: 'Close Heavy (Hold)',
  altName: 'cH (Hold)',
  damage: '1500',
  guard: 'Mid',
  startup: '16⇒35',
  active: '6',
  recovery: '21',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+12',
  clash: '5',
  motion: ['h'],
  description: "Extremely damaging c.H but is equally slow. Charging this move doesn't change any of its properties, however if you have Soul Forge active, the armor will cover you as long as you hold the button (this goes for all charged H normals). One of only two moves that combo into 214L or [4]6M on normal hit, leading to some pretty strong combos. This normal has a massive amount of blockstun, which makes it one of the safest ways on going into Savage Rampage without using the EX version."
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
  description: "Nothing too special about these normals. They can be used to set up frame traps with some specials or used to adjust height in juggles, but nothing is too special about them otherwise. Mostly combo and blockstring filler."
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
  description: "Nothing too special about these normals. They can be used to set up frame traps with some specials or used to adjust height in juggles, but nothing is too special about them otherwise. Mostly combo and blockstring filler."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '4',
  recovery: '10',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+9',
  clash: '3',
  motion: ['l'],
  description: "An excellent poke and one of Vaseraga's best attacks. Great range, damage, and recovery. It is highly safe to press f.L at its optimal range and, despite being only +1 block, can often be used successively due to outranging the opponent's quicker pokes. Combos into itself on CH for easy confirms, and can combo into 22H on any hit."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '900',
  guard: 'Mid',
  startup: '11',
  active: '6',
  recovery: '15',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['m'],
  description: "A slower f.L with slightly more damage and range, but much worse on block and whiff. While it's hard to find links using this move, you do get substantially more damage on counter hit than you do with f.L, so this is mainly used as either a punish button or a ranged poke when you know f.L won't hit."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1300',
  guard: 'Mid',
  startup: '17⇒19',
  active: '6',
  recovery: '30',
  onblock: '-15',
  onhit: '-11',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
  description: "High commitment poke with huge range and damage.\nCan be charged to manipulate timing. Soul Forge armor will activate during a charged attack.\nThere is no damage or frame data benefit from charging.\nHits from round start distance, so you can sometimes bully aggressive round start options."
};
const far5HHold = {
  moveName: 'Far Heavy (Hold)',
  altName: 'f5[H]',
  damage: '1300',
  guard: 'Mid',
  startup: '20⇒37',
  active: '6',
  recovery: '30',
  onblock: '-15',
  onhit: '-11',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
  description: "High commitment poke with huge range and damage.\nCan be charged to manipulate timing. Soul Forge armor will activate during a charged attack.\nThere is no damage or frame data benefit from charging.\nHits from round start distance, so you can sometimes bully aggressive round start options."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "Vaseraga's fastest normal. Surprisingly good hitbox considering the animation. Not nearly as good of a setup tool as c.L or c.M, but you'll probably use this primarily on abare or some weird combos that need specifically a 6 frame button. Hard to combo after, but does cancel into c.L if you're close enough."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Low',
  startup: '9',
  active: '4',
  recovery: '17',
  onblock: '-6',
  onhit: 'HKD (+49)',
  oncounterhit: 'HKD (+53)',
  clash: '3',
  motion: ['2', 'm'],
  description: "2M serves as Vaseraga's practical sweep, as opposed to his 2U input, which is used more for poking. This is one of Vaseraga's best starters midscreen, especially on counter hit."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1100',
  guard: 'Mid',
  startup: '13',
  active: '6',
  recovery: '26',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '+3',
  clash: '5',
  motion: ['2', 'h'],
  description: "Vaseraga's monster of an anti air.\nExcellent hitbox with one key flaw: it does not cover directly above you. This makes it unable to prevent cross-ups or well-spaced super jumps.\nAlways combos into 22L -> L regardless of counterhit.\nOn counterhit, can be confirmed into the highest damage combos in the game.\nHigh hitstun in combos allows you to combo 22X -> H.\nCan be charged and doing so will activate Soul Forge armor. This feature, combined with Vaseraga's small hurtbox during startup, allows 2H to be used to call out certain DPs when spaced and cover more options when people are jumping at you."
};
const n2HHold = {
  moveName: 'Crouch Heavy (Hold)',
  altName: '2H',
  damage: '1100',
  guard: 'Mid',
  startup: '14⇒33',
  active: '6',
  recovery: '26',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '+3',
  clash: '5',
  motion: ['2', 'h'],
  description: "Vaseraga's monster of an anti air.\nExcellent hitbox with one key flaw: it does not cover directly above you. This makes it unable to prevent cross-ups or well-spaced super jumps.\nAlways combos into 22L -> L regardless of counterhit.\nOn counterhit, can be confirmed into the highest damage combos in the game.\nHigh hitstun in combos allows you to combo 22X -> H.\nCan be charged and doing so will activate Soul Forge armor. This feature, combined with Vaseraga's small hurtbox during startup, allows 2H to be used to call out certain DPs when spaced and cover more options when people are jumping at you."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '900',
  guard: 'Low',
  startup: '16',
  active: '3',
  recovery: '24',
  onblock: '-12',
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+60)',
  clash: '4',
  motion: ['2', 'u'],
  description: "Slow sweep with extremely long range. Gives a good knockdown but the slow startup makes it a poor choice at close range. Great for long ranged pokes, especially since you can cancel it into L Battalions of Fear to close the gap or Savage Rampage to set up some pressure."
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
  description: "Large vertical hitbox and short startup makes this useful for safejumps or scrambles. Has a persisting hitbox but can only hit once per jump.\nThis is the only air normal that will hit behind Vaseraga during a cross-up."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '700', 
  guard: 'High', 
  startup: '12', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
  description: "Vaseraga's primary jumping attack, with large horizontal range. Quick startup for its range allows for easy whiff punishes."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '900', 
  guard: 'High', 
  startup: '12', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "The hitbox starts below Vaseraga but extends far upward. While you will usually opt for j.M, this attack can replace it at closer range for higher damage confirms. In specific matchups this can help prevent an opponent's jump-out attempt as you approach."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'Mid', 
  startup: '2 (On landing)', 
  active: '3', 
  recovery: '15', 
  onblock: '-1', 
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+60)',
  clash: '4',
  motion: ['u'],
  description: "Vaseraga's aerial Unique Action, used only for extremely specific purposes. This move does not normally combo into anything or provide any advantage outside of counter-hit. Its purpose is to give Vaseraga the ability to back out of a jump early in order to avoid predictable anti-airs\n\nVaseraga will briefly stall his air momentum, then falls down. The hitbox comes out when he lands.\nYou can exploit the pause in air momentum to manipulate your fall timing, enabling you to jump over fireballs you wouldn't normally. The most basic technique that utilizes this move is to jump backward then use j.U to prevent a fireball hitting you.\n0 or -1 on depending on how close you are when the hitbox comes out, and is not cancellable."
};

// unique action
const lv1U = { 
  moveName: 'Soul Forge', 
  altName: '5U', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '21', 
  active: '3', 
  recovery: '22', 
  onblock: '-11', 
  onhit: '+14',
  oncounterhit: '+22',
  clash: '4',
  motion: ['u'],
  description: "Activates an aura that gives 2 hits of armor on specific moves. Can be safely used after a knockdown before applying okizeme. Attacks hitting Vaseraga while he's armored will have damage reduced by 50%\n\nThe two hits of armor are activated on any of the following skills or attacks:\n\nCharged grounded H attacks. You can still use them and preserve the armor buff so long as you don't charge them.\nSoul Forge itself\nBattalions of Fear (M/H)\nSavage Rampage (including follow-up Skills and March)\nSoul Forge itself is, in fact, one of the strongest moves to use the armor buff on, as it leads to a full c.H confirm upon successful hit at close range, whether it counters or not -- not to mention it also reapplies armor immediately. It requires a counter-hit to combo on jumping confirms, but it is air unblockable. Combined with 2 hits of armor makes it a effective anti-air when 2H won't cut it.\n\nThe startup until Soul Forge becomes armored is 5F. This is a critical aspect of Vaseraga's matchups, because his fastest jab, 2L, is only 6F."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+58)',
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
  onhit: 'HKD (+58)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: ""
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+32)',
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
  moveName: 'L Instinction', 
  altName: '214L', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '18', 
  recovery: '51', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['214', 'l', 'or', 'a'],
  description: "Fires a ground projectile that travels about half the stage. L/M fireballs do not knockdown without counter hit. M and H versions initiates the skill with a quick close range slash attack. The slash attack launches opponent on hit, giving a knockdown on the M version where it normally wouldn't.\nGood for space control.\nThe light version of the move can be used to control spacing very well in tandem with your long range pokes."
};
const mFireball = { 
  moveName: 'M Instinction', 
  altName: '214M', 
  damage: '400, 800', 
  guard: 'Mid, All', 
  startup: '12', 
  active: '3(5)18', 
  recovery: '35', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', 'a', 'm'],
  description: "Fires a ground projectile that travels about half the stage. L/M fireballs do not knockdown without counter hit. M and H versions initiates the skill with a quick close range slash attack. The slash attack launches opponent on hit, giving a knockdown on the M version where it normally wouldn't.\nHas a starting hit that launches.\nThe medium version is faster than the light version, allowing you to check certain responses in situations where the light version is too slow."
};
const hFireball = { 
  moveName: 'H Instinction', 
  altName: '214H', 
  damage: '400, 800', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '3(5)18', 
  recovery: '23', 
  onblock: '+3', 
  onhit: 'HKD (+69)',
  oncounterhit: 'HKD (+70)',
  clash: '4',
  motion: ['214', 'h', 'or', 'a', 'h'],
  description: "Fires a ground projectile that travels about half the stage. L/M fireballs do not knockdown without counter hit. M and H versions initiates the skill with a quick close range slash attack. The slash attack launches opponent on hit, giving a knockdown on the M version where it normally wouldn't.\nHas a starting hit that launches.\nTwo hit EX fireball.\nThe H version is beaten by almost every other H projectile in the game, but is an effective pressure reset since it's so plus."
};

// Tackle
const lTackle = { 
  moveName: 'L Battalions of Fear', 
  altName: '[4]6L', 
  damage: '1300', 
  guard: 'Mid', 
  startup: '19', 
  active: '18', 
  recovery: '15', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['4', '6', 'l', 'or', '6', 'a'],
  description: "Charges forward with a tackling attack.\n+9 on block at maximum range.\nFast enough to be used as an ender in certain corner combos, or can be used after certain knockdowns in order to quickly get in top of the enemy before they get up so you can apply okizeme to them."
};
const mTackle = { 
  moveName: 'M Battalions of Fear', 
  altName: '[4]6M', 
  damage: '1800', 
  guard: 'Mid', 
  startup: '26⇒51', 
  active: '16', 
  recovery: '17', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['4', '6', 'm', 'or', '6', 'a', 'm'],
  description: "Charges forward with a tackling attack.\nBriefly delays before charging forward with a tackling attack.\nThis version can be enhanced with Soul Forge armor.\nMedium Battalions is very unsafe on block if you are close to the opponent, so you are best off using this as a counter to a slow poke from the enemy when you have armor ready. As of patch 2.01 it doesn't go as far forward, but has more pushback on block. Making it a safer option at more ranges."
};
const hTackle = { 
  moveName: 'H Battalions of Fear', 
  altName: '[4]6H', 
  damage: '1000x2', 
  guard: 'Mid', 
  startup: '26⇒76', 
  active: '12(9)12', 
  recovery: '17', 
  onblock: '-4', 
  onhit: 'HKD (+48)',
  oncounterhit: 'HKD (+51)',
  clash: '5',
  motion: ['4', '6', 'h', 'or', '6', 'a', 'h'],
  description: "Charges forward with a tackling attack.\nBriefly delays before quickly forward with a tackling attack.\nThis version can be enhanced with Soul Forge armor.\nH Battalions travels the farthest of all versions.\n+7 on block at maximum range.\nAlthough H Battalions is less unsafe than M Battalions, it is still fairly negative on block and you will be giving up your turn if you use it."
};

// CmdThrow
const lCmdThrow = { 
  moveName: 'L Great Scythe Grynoth', 
  altName: '632146L', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '12', 
  active: '3', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Grabs the opponent using Grynoth and throws them fullscreen. A standard command throw. It's slower than Ladiva's command throws so even 6 framers can consistently mash on it in most situations. You can generally make them block one normal before they get pushed out of command throw range. If you do two or more normals they will be pushed out of range so you will need to walk/run up a bit to get back into range, use Savage Rampage march to get back into range, or use the H version.\n\nDon't forget, you can Great Scythe while in Savage Rampage stance!\nCommand grab."
};
const mCmdThrow = { 
  moveName: 'M Great Scythe Grynoth', 
  altName: '632146M', 
  damage: '2500', 
  guard: 'Throw', 
  startup: '9', 
  active: '3', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Grabs the opponent using Grynoth and throws them fullscreen. A standard command throw. It's slower than Ladiva's command throws so even 6 framers can consistently mash on it in most situations. You can generally make them block one normal before they get pushed out of command throw range. If you do two or more normals they will be pushed out of range so you will need to walk/run up a bit to get back into range, use Savage Rampage march to get back into range, or use the H version.\n\nDon't forget, you can Great Scythe while in Savage Rampage stance!\nAnti-air command grab.\nThis move is important because it covers 2H blind spot while also being faster. This version can also be incorporated into combos as a non-EX HKD ender."
};
const hCmdThrow = { 
  moveName: 'H Great Scythe Grynoth', 
  altName: '632146H', 
  damage: '2000', 
  guard: 'Throw', 
  startup: '26', 
  active: '3', 
  recovery: '39', 
  onblock: '-', 
  onhit: 'HKD (+57)',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Grabs the opponent using Grynoth and throws them fullscreen. A standard command throw. It's slower than Ladiva's command throws so even 6 framers can consistently mash on it in most situations. You can generally make them block one normal before they get pushed out of command throw range. If you do two or more normals they will be pushed out of range so you will need to walk/run up a bit to get back into range, use Savage Rampage march to get back into range, or use the H version.\n\nDon't forget, you can Great Scythe while in Savage Rampage stance!\nGrabs the opponent using Grynoth and throws them fullscreen.\nThe H version of Great Scythe slides forwards before the command grab becomes active. Massive range but much slower than the L version at 26 frames. You generally want to use this version in situations where marching or running back into range of L command throw will take too long such as a blocked spaced tackle or a blocked EX fireball from not point blank range."
};

const lStep = {
  moveName: 'L Savage Rampage', 
  altName: '22L', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '152', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Savage Rampage > 66 makes Vaseraga marches forward hitting with each slow step. The slow speed of the steps combined with their low hitstun means that the steps of march will not combo into each other on block or on hit. The EX version of March is faster than the normal version.\nSavage Rampage > 44 makes Vaseraga exits stance.\nInitiates vaseraga's Savage Stance which can be followed up with additional inputs or canceled with 44. Great Scythe Grynoth can be used during Stance, especially scary during EX Stance due to the walking hitboxes.\nTransitions to Stance in place.\nL Savage Rampage is useful in anti-air combos because it allows him to follow up after 2H without putting Savage Rampage on cooldown, and does not move Vaseraga away from the enemy like H version does."
}
const mStep = {
  moveName: 'M Savage Rampage', 
  altName: '22M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '160', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Savage Rampage > 66 makes Vaseraga marches forward hitting with each slow step. The slow speed of the steps combined with their low hitstun means that the steps of march will not combo into each other on block or on hit. The EX version of March is faster than the normal version.\nSavage Rampage > 44 makes Vaseraga exits stance.\nInitiates vaseraga's Savage Stance which can be followed up with additional inputs or canceled with 44. Great Scythe Grynoth can be used during Stance, especially scary during EX Stance due to the walking hitboxes.\nTakes a slight step backwards while transitioning.\nM Savage Rampage has limited use in combos because it moves Vaseraga away from the enemy, but it is useful in neutral since he can out-range many pokes with his followups."
}
const hStep = {
  moveName: 'H Savage Rampage', 
  altName: '22H', 
  damage: '-', 
  guard: '-', 
  startup: '15', 
  active: '2(25)2(25)2(25)2', 
  recovery: '148', 
  onblock: '+6', 
  onhit: '+10',
  oncounterhit: '+14',
  clash: '2',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Savage Rampage > 66 makes Vaseraga marches forward hitting with each slow step. The slow speed of the steps combined with their low hitstun means that the steps of march will not combo into each other on block or on hit. The EX version of March is faster than the normal version.\nSavage Rampage > 44 makes Vaseraga exits stance.\nInitiates vaseraga's Savage Stance which can be followed up with additional inputs or canceled with 44. Great Scythe Grynoth can be used during Stance, especially scary during EX Stance due to the walking hitboxes.\nImmediately begins the 66 stomps after the move begins.\nCan be canceled into followup moves before any stomps come out.\nH Savage Rampage is often used as combo filler because many moves combo into 22H~H which grants a knockdown and leaves Vaseraga close to the enemy for strong okizeme."
}
const stepToStep = {
  moveName: 'Savage Rampage (March)', 
  altName: '22X 66', 
  damage: '500x4', 
  guard: 'Mid', 
  startup: '-', 
  active: '-', 
  recovery: '18', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', '6', '6', 'or', '2', 'a', '6', '6'],
  description: "Savage Rampage > 66 makes Vaseraga marches forward hitting with each slow step. The slow speed of the steps combined with their low hitstun means that the steps of march will not combo into each other on block or on hit. The EX version of March is faster than the normal version.\nSavage Rampage > 44 makes Vaseraga exits stance.\nInitiates vaseraga's Savage Stance which can be followed up with additional inputs or canceled with 44. Great Scythe Grynoth can be used during Stance, especially scary during EX Stance due to the walking hitboxes."
}

const lStepFollowup = {
  moveName: 'Rising Slash', 
  altName: '22X ⇒ L', 
  damage: '1500', 
  guard: 'Mid', 
  startup: '12⇒32', 
  active: '3', 
  recovery: '21', 
  onblock: '+1', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['2', '2', 'l', 'l', 'or', '2', 'a', 'l'],
  description: "Swings Grynoth in a high slash, hitting both airborne foes and those standing nearby. This is the fastest move Vaseraga has from stance. This move does not hit crouching foes. If done from EX stance 22H, it's +8 on block. Due to the low recovery, when used as a frametrap during march, it will often leave you plus on spot dodge, allowing you to keep your turn or in the EX version's case punish the spot dodge\nCan be held to adjust the release timing. Useful for adapting to the opponent's air movement during your startup."
}
const mStepFollowup = {
  moveName: 'Sweeping Slash', 
  altName: '22X -> M', 
  damage: '1500', 
  guard: 'Low', 
  startup: '16⇒36', 
  active: '6', 
  recovery: '29', 
  onblock: '-10', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['2', '2', 'l', 'm', 'or', '2', 'a', 'm'],
  description: "Swings Grynoth in a low sweep, knocking down any standing foes nearby. This move can be used to catch a foe attempting to back out range. If done from EX stance 22H, it's safe on block at -4. This is the longest ranged move Vaseraga has in stance. It also has the most active frames, allowing you to tag opponents quite easily for bad spacing/not blocking low."
}
const hStepFollowup = {
  moveName: 'Crushing Strike', 
  altName: '22X -> H', 
  damage: '2000', 
  guard: 'Mid', 
  startup: '15⇒39', 
  active: '2', 
  recovery: '31', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['2', '2', 'l', 'h', 'or', '2', 'a', 'h'],
  description: "Swings Grynoth in a vertical downward slash, causing guard crush when fully charged.\n22H~H is a very important part of Vaseraga's kit. The move is safe on block and can be granted armor by Soul Forge. These properties encourage the enemy to attempt to poke out of it in order to avoid the guard crush, which you can punish by releasing the button to hit them before they break your armor however there is a specific timing to spotdodge that will allow them to avoid the guard crush and punish. The move is also prominently used as filler in his corner 214X loops, and as an ender in the corner BnB combo. Effective use of this move is essential for Vaseraga players. Outside of combos, it is your main frametrap option while in stance. If this move counter hits the opponent or catch them while airborne it will lead into game ending damage."
}
const hStepFollowupCharged = {
  moveName: 'Crushing Strike (Fully Charged)', 
  altName: '22X -> [H]', 
  damage: '2000', 
  guard: 'Mid', 
  startup: '40', 
  active: '2', 
  recovery: '31', 
  onblock: '+16', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['2', '2', 'l', 'h', 'or', '2', 'a', 'h'],
  description: "Swings Grynoth in a vertical downward slash, causing guard crush when fully charged.\n22H~H is a very important part of Vaseraga's kit. The move is safe on block and can be granted armor by Soul Forge. These properties encourage the enemy to attempt to poke out of it in order to avoid the guard crush, which you can punish by releasing the button to hit them before they break your armor however there is a specific timing to spotdodge that will allow them to avoid the guard crush and punish. The move is also prominently used as filler in his corner 214X loops, and as an ender in the corner BnB combo. Effective use of this move is essential for Vaseraga players. Outside of combos, it is your main frametrap option while in stance. If this move counter hits the opponent or catch them while airborne it will lead into game ending damage."
}
const uStepFollowup = {
  moveName: 'Ravaging Stomp', 
  altName: '22X -> U', 
  damage: '2000', 
  guard: 'Mid', 
  startup: '20⇒40', 
  active: '6', 
  recovery: '30', 
  onblock: '-11', 
  onhit: 'HKD (+17)',
  oncounterhit: 'HKD (+21)',
  clash: '-',
  motion: ['2', '2', 'l', 'u', 'or', '2', 'a', 'u'],
  description: "Stomps on Grynoth unleashing a damaging blast. This skill has armor properties independent of Soul Forge and will armor any number of hits until active. This followup is significantly more unsafe on block than the H followup, a property that when combined with its unique armor property, means that it is intended to be used as a bait and punish against enemy reversals when you do not already have armor ready. When you have Soul Forge already, the 2 hits act as a buffer you can use to react to the hitstop of multi-hitting reversals and score a punish. This takes a lot of practice, but it will make Savage Rampage even more threatening.\nThis move also serves as a necessary defense against opponents simply using SBA/SSBA against you in stance. While experienced opponents know better than to try, never forget to simply push U against newcomers trying to beat your stance with supers."
}

// skybound art
const sba = { 
  moveName: 'Bloody Moon', 
  altName: '236236H', 
  damage: '2600-3900', 
  guard: 'Mid', 
  startup: '13', 
  active: '3⇒18→(5)3', 
  recovery: '44 (Whiffed: 40)', 
  onblock: '-26', 
  onhit: 'HKD (S:+40,T:+50)',
  oncounterhit: 'HKD (S:+40,T:50)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Charges forward with a powerful advancing attack. If you are close enough, the Skybound Art will go into an animation for max damage. This skill has invincibility properties and advances considerably forward, but it is not the most reliable option against fireballs. This super converts very well from f.L/f.M/f.H so long as you are not at absolute max range, but you will not get max damage in these situations. If you trigger the full animation, it will add a massive amount of damage to his combos. A versatile Skybound Art all things considered."
};
const ssba = { 
  moveName: 'Aftermath', 
  altName: '236236U', 
  damage: '3500-5000', 
  guard: 'Mid', 
  startup: '15', 
  active: '6', 
  recovery: '52', 
  onblock: '-27', 
  onhit: 'HKD (S:+27,T:+37)',
  oncounterhit: 'HKD (S:+27,T:+37)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Moves slightly forward and unleashes a moderately sized vertical burst attack, sending any foes caught in it flying. Has armor during the start-up, which means it is significantly harder to safejump by normal means. However, hitbox is smaller than it appears, especially horizontally, making this super difficult to use in neutral or as a reversal option. Is a poor reversal compared with Bloody Moon, as the armor on the move's start-up is treated the same as blocking an attack. This means that if their button makes contact early enough and can get through hitstop of their attack, the opponent can dodge to avoid the Vaseraga's super and get a significant punish. Despite these flaws, this super does massive damage and is good anti air in a lot of situations his 2H would hit, however you need to be quick to react."
};


export const vaseragaInfo = [
  general,
  closeL,
  closeM,
  closeH,
  closeHHold,
  auto1,
  auto2,
  far5L,
  far5M,
  far5H,
  far5HHold,
  n2L,
  n2M,
  n2H,
  n2HHold,
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
  lTackle,
  mTackle,
  hTackle,
  lCmdThrow,
  mCmdThrow,
  hCmdThrow,
  lStep,
  mStep,
  hStep,
  stepToStep,
  lStepFollowup,
  mStepFollowup,
  hStepFollowup,
  hStepFollowupCharged,
  uStepFollowup,
  sba,
  ssba
]