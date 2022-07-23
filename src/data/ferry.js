// DESCRIPTIONS DONE
// FRAME DATA UNFINISHED 

const general = { char: "Ferry", health: '9500', prejump: '5F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['l'],
  description: "Slightly slower than average jab that is a solid button to mash out of pressure with when the opponent is up close, as well as having nice utility when used in stagger pressure up close (i.e 2L>c.L). It has a tendency to whiff at the tip of its range rather than turn into f.L, beware. Low recovery lets you use this move on an opponent's knockdown and still recover to block slow reversals like Charlotta's flashkick."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '6',
  recovery: '9',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '3',
  motion: ['m'],
  description: "c.M can serve as situational anti-air for deep jump ins or opponents directly overhead."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '4',
  recovery: '12',
  onblock: '+3',
  onhit: '+7',
  oncounterhit: '+19',
  clash: '5',
  motion: ['h'],
  description: "Preferred starter for combos in most cases. +3 on block, allowing you to do things like c.H>Hinrichten and be able to capitalize on the + frames afterwards. Also great as combo filler in juggles. Combos into itself on counterhit for great damage."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '300',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "Both of these moves are combo filler primarily. You can use them during block pressure to end your turn safely. Not much else to say about these moves."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '300',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "Both of these moves are combo filler primarily. You can use them during block pressure to end your turn safely. Not much else to say about these moves."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '350',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '15',
  onblock: '-5',
  onhit: '+3',
  oncounterhit: '+5',
  clash: '1',
  motion: ['l'],
  description: "Solid poke in the midrange, and your primary button to jail the opponent after the opponent ends their pressure. When used to jail, you want to mix in the threat of f.L>214L vs f.L>nothing to keep them honest. Only combos into 623M at range."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '650',
  guard: 'Mid',
  startup: '10',
  active: '5[2,3]',
  recovery: '21',
  onblock: '-11',
  onhit: '-7',
  oncounterhit: '-3',
  clash: '2',
  motion: ['m'],
  description: "This is your main poke at longer distances, and is a staple move of Ferry’s strong keep out game. You’ll want to use this to control the screen horizontally, eventually conditioning the opponent to try to roll or jump over it, both of which can be baited and punished. The whip is NOT disjointed, so the opponent can hit the whip to hurt you, thus exercising restraint with this move is very important. This move can be low profiled, in which, you can use 2M or 2U to thwart that."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '900',
  guard: 'Mid',
  startup: '14',
  active: '4',
  recovery: '28',
  onblock: '-15',
  onhit: '-11',
  oncounterhit: '-3',
  clash: '3',
  motion: ['h'],
  description: "Similiar to f.M with more range and damage, but slower startup and higher recovery. Ferry steps forwards as she uses this move, so it can be useful in keeping up pressure on a retreating foe."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '9',
  onblock: '-1',
  onhit: '+3',
  oncounterhit: '+5',
  clash: '1',
  motion: ['2', 'l'],
  description: "Main button to mash out of pressure with, thanks to it not having a range limit unlike c.L. It has low range for a 2L though, so it can whiff against decently spaced close normals and specials. Also the preferred normal to start stagger pressure with up close. Low recovery lets you use this move on an opponent's knockdown and still recover to block slow reversals like Charlotta's flashkick. Hits low."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '600',
  guard: 'Low',
  startup: '12',
  active: '5[2,3]',
  recovery: '21',
  onblock: '-11',
  onhit: '-7',
  oncounterhit: '-3',
  clash: '2',
  motion: ['2', 'm'],
  description: "This move complements f.M very well. While f.M can be low profiled, 2M can stop this outright, as well as having the added utility of hitting low. Compared to f.M, it is slower so you really only want to use this to stop them from low profiling f.M, punish rolls, or poke at their feet. You can also go under projectiles with this, punishing people who try to fireball in the midrange. This move also often serves as the low complement of Ferry's high/low oki."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '900',
  guard: 'Mid',
  startup: '14',
  active: '6[3,3]',
  recovery: '21',
  onblock: '-10',
  onhit: '-6',
  oncounterhit: '+2',
  clash: '4',
  motion: ['2', 'h'],
  description: "Ferry’s dedicated anti air normal. Can convert into 236X on air hit. This move is good for controlling the air space in front of her, but is not reliable when the opponent is directly above your head, as well as being air blockable. In that case, consider another anti air option such as EX DP, c.M, or rising j.L. Great combo filler, especially in juggles and Hinrichten routes."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '10',
  active: '6[3,3]',
  recovery: '17',
  onblock: '-8',
  onhit: 'HKD (+48)',
  oncounterhit: 'HKD (+52)',
  clash: '2',
  motion: ['2', 'u'],
  description: "Incredible sweep. One of her better pokes, and one of the best sweeps in the game. Grants a hard knockdown on hit. You can use the hard knockdown to go for a safejump with j.H or set up Geegee oki with 22X. Preferred meterless ender when in Liechten. This move also is often used as an alternative to 2M as the low complement in Ferry's high/low oki."
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '400', 
  guard: 'High', 
  startup: '7', 
  active: '4', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "Primary use of this move is in Ferry’s mixup game, as rising j.L is instant overhead that can hit the entire cast, even when crouching. To convert off of it, you will need to set it up with Geegee or Vergiften. Alternatively, if you are in Liechten, you can convert off of it without the need of a setup, by chaining j.L into j.4U. Without a proper setup or Liechten, using j.L as an instant overhead is unsafe, even on hit. This move is also useful as an air to air up close."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'High', 
  startup: '9', 
  active: '4', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Horizontal whip attack that is useful for checking opponents in the air from a distance. You can also use it to hit a standing opponent at the tip, just before landing far from them. The whip does have a hurtbox so be careful when throwing it out. This move is also useful for whiff-cancelling from jU during Liechten."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '750', 
  guard: 'High', 
  startup: '10', 
  active: '4[2,2]', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Gran's longest reaching and most damaging jump-in. Hitbox is smaller/further up the closer it is to Gran's body."
};
const jU = { 
  moveName: 'Spectral Dive', 
  altName: 'j4U/j5U/j6U', 
  damage: '600', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '(Whiff: 21, Hit/Guard: 11)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['u'],
  description: "Dive kick. Performs a midair dive attack. If this move hits close to the opponent's feet, it's possible to be plus. The angle the move goes in can be altered by inputting j.4U or j.6U, for a total of 3 different angles. j.5/6U have 2 hits which makes them easier to be positioned so that they are plus on block. When cornered, you can jump and input j.6U as a way to escape out (however, the opponent can smack you for this if they read it). In Liechten, you can use j.4U to convert off of instant overhead j.L. You can also use j.4/5/6U as a way to set up pressure in general and high/low mix on opponents in Liechten."
};

const j8U = { 
  moveName: 'Ghostswing', 
  altName: 'j7U/j8U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '56 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Hooks Ferry's whip to the stage ceiling and swings her forward. Primarily used as a mobility option to get around the stage. You can cancel your air momentum after the swing by inputting an air normal immediately, with the most preferable button being j.L for that purpose. You can also swing backwards by inputting j.7U. You do turn around for air normals after crossing up the opponent with this, unlike a regular jump."
};


// unique action
const s5U = { 
  moveName: 'Ein Ball', 
  altName: '5U', 
  damage: '100x15', 
  guard: 'Mid', 
  startup: '17', 
  active: '1,1,1,1,1,1,1,1,1,2,2,2,2,2,1', 
  recovery: '22', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+2',
  clash: '5',
  motion: ['u'],
  description: "Performs a multi-hit attack that deals a substantial amount of chip damage if blocked close. It also gains a good chunk of meter if all hits are blocked and is only -2 on block. This skill has a short reach at first, so you’ll want to dash up to them prior, but it is mostly disjointed so it can serve as a counterpoke. Its multi-hit property makes it extremely effective against armor moves with limited number of hits, such as Vaseraga's empowered tackle, by shredding through the armor and punishing it. The low recovery of this move makes it pretty safe to whiff. Surprisingly, it prorates really well, making it useful in some combos."
};

const groundThrow = { 
  moveName: 'Forward Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+43)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw slams the opponent to the ground, giving a hard knockdown afterwards. Midscreen, you can set up 22X to apply more pressure afterwards. If you have Geegee placed beforehand, he can be used to convert off of the throw.\nBoth throws can set up safejumps as well."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+43)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Back throw has Beppo slam them to the other side, leaving them very close to Ferry. This is the preferred throw for okizeme afterwards midscreen due to this property, allowing for 22H oki.\nBoth throws can set up safejumps as well."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+51)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Grabs the opponent and slams them back into the ground. Good air to air option. If Geegee was was set up prior, you can convert off of it afterwards."
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
  description: "Probably one of the worse universal overhead attacks in the game, due to it moving Ferry back as opposed to forward, making it hard to utilize in pressure. Luckily, it isn’t that big of a deal, as Ferry has a better overhead mixup anyway."
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
  moveName: 'L Gespenst', 
  altName: '236L', 
  damage: '400', 
  guard: 'All', 
  startup: '21', 
  active: '10[2,2,2,4]', 
  recovery: '(Whiff: 30, Blocked: 26, Clash: 22)', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '5',
  motion: ['236', 'l', 'or', 'a'],
  description: "Performs a whip attack. It has a slow start-up, but it has a long reach and negates projectiles. Can be followed up by Whip It Good and Heel. This move is very good at punishing reckless run ins from the opponent in neutral.\nFastest version, but lowest reach."
};
const mFireball = { 
  moveName: 'M Gespenst', 
  altName: '236M', 
  damage: '400', 
  guard: 'All', 
  startup: '32', 
  active: '10[2,2,2,4]', 
  recovery: '(Whiff: 30, Blocked: 26, Clash: 22)', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '5',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Performs a whip attack. It has a slow start-up, but it has a long reach and negates projectiles. Can be followed up by Whip It Good and Heel. This move is very good at punishing reckless run ins from the opponent in neutral.\nM version has longer startup but also has more reach than the L version."
};
const hFireball = { 
  moveName: 'H Gespenst', 
  altName: '236H', 
  damage: '400', 
  guard: 'All', 
  startup: '20', 
  active: '10[2,2,2,4]', 
  recovery: '(Whiff: 30, Blocked: 26, Clash: 22)', 
  onblock: '-4', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '5',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Performs a whip attack. It has a slow start-up, but it has a long reach and negates projectiles. Can be followed up by Whip It Good and Heel. This move is very good at punishing reckless run ins from the opponent in neutral.\nH version has the same range as M version but is much faster and plus on block."
};

const lFireballExpode = {
  moveName: 'L Whip It Good', 
  altName: '236L -> X', 
  damage: '600-800', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'l', 'or', 'a'],
  description: 'Deals additional damage after connecting Gespenst (automatically triggers with less damage if no other commands are input). If H version of Genspenst was used, Whip It Good will grant a hard knockdown. After M Genspenst, the enemy is popped up high enough for a followup hit, which can lead to a combo in the corner.'
}
const mFireballExpode = {
  moveName: 'M Whip It Good', 
  altName: '236M -> X', 
  damage: '1000-1200', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'l', 'or', 'a'],
  description: 'Deals additional damage after connecting Gespenst (automatically triggers with less damage if no other commands are input). If H version of Genspenst was used, Whip It Good will grant a hard knockdown. After M Genspenst, the enemy is popped up high enough for a followup hit, which can lead to a combo in the corner.'
}
const hFireballExpode = {
  moveName: 'H Whip It Good', 
  altName: '236H -> X', 
  damage: '1000-1200', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'l', 'or', 'a'],
  description: 'Deals additional damage after connecting Gespenst (automatically triggers with less damage if no other commands are input). If H version of Genspenst was used, Whip It Good will grant a hard knockdown. After M Genspenst, the enemy is popped up high enough for a followup hit, which can lead to a combo in the corner.'
}

const lFireballPull = {
  moveName: 'L Heel', 
  altName: '236L -> 4X', 
  damage: '0', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', '4', 'l', 'or', '4', 'a'],
  description: 'Pulls the foe near after connecting Gespenst. This skill doesn\'t deal any damage, but causes hard knockdown regardless of the version of Genspent used. This move is a key part of setting up her midscreen oki game, as you can do 22L and go for a hit/throw/shimmy mixup that can be looped into itself. If you do 22H, you can add additional layers to the mixup, such as instant overhead j.L or low, albeit sacrificing the ability to loop the oki. If 236M was used and you are close enough, after the pull in, Ferry can follow up with a normal and continue with a combo or setup. If 236L or 236H are used, Ferry cannot combo after the pull.\nGran wakes up 52 frames after pulling.\nNarmaya wakes up 54 frames after pulling.\nEveryone else wakes up in 51 frames'
}
const mFireballPull = {
  moveName: 'M Heel', 
  altName: '236M -> 4X', 
  damage: '0', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'Close: HKD(+61), Far: HKD(+58)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', '4', 'l', 'or', '4', 'a'],
  description: 'Pulls the foe near after connecting Gespenst. This skill doesn\'t deal any damage, but causes hard knockdown regardless of the version of Genspent used. This move is a key part of setting up her midscreen oki game, as you can do 22L and go for a hit/throw/shimmy mixup that can be looped into itself. If you do 22H, you can add additional layers to the mixup, such as instant overhead j.L or low, albeit sacrificing the ability to loop the oki. If 236M was used and you are close enough, after the pull in, Ferry can follow up with a normal and continue with a combo or setup. If 236L or 236H are used, Ferry cannot combo after the pull.\nGran wakes up 52 frames after pulling.\nNarmaya wakes up 54 frames after pulling.\nEveryone else wakes up in 51 frames'
}
const hFireballPull = {
  moveName: 'H Heel', 
  altName: '236H -> 4X', 
  damage: '0', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'Close: HKD(+54), Far: HKD(+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', '4', 'l', 'or', '4', 'a'],
  description: 'Pulls the foe near after connecting Gespenst. This skill doesn\'t deal any damage, but causes hard knockdown regardless of the version of Genspent used. This move is a key part of setting up her midscreen oki game, as you can do 22L and go for a hit/throw/shimmy mixup that can be looped into itself. If you do 22H, you can add additional layers to the mixup, such as instant overhead j.L or low, albeit sacrificing the ability to loop the oki. If 236M was used and you are close enough, after the pull in, Ferry can follow up with a normal and continue with a combo or setup. If 236L or 236H are used, Ferry cannot combo after the pull.\nGran wakes up 52 frames after pulling.\nNarmaya wakes up 54 frames after pulling.\nEveryone else wakes up in 51 frames'
}

// dragon punches
const lUppercut = { 
  moveName: 'L Beppo, Sic \'Em!', 
  altName: '623L', 
  damage: '1000', 
  guard: 'All', 
  startup: '7', 
  active: '12', 
  recovery: '21', 
  onblock: '-16', 
  onhit: 'KD (+24)',
  oncounterhit: '-',
  clash: '4',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Summons Beppo to perform a rising attack. Ferry's main juggle ender and reversal (granted, the H version is the only real one).\nStrikes near Ferry's head, making it a useful anti-air attack."
};
const mUppercut = { 
  moveName: 'M Beppo, Sic \'Em!', 
  altName: '623M', 
  damage: '800, 500', 
  guard: 'All', 
  startup: '13', 
  active: '3,9', 
  recovery: '21', 
  onblock: '-11', 
  onhit: 'KD (+25)',
  oncounterhit: 'KD (+22)',
  clash: '5',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Summons Beppo to perform a rising attack. Ferry's main juggle ender and reversal (granted, the H version is the only real one).\nSummons Beppo a little lower vertically and further ahead compared to the L version.\nCovers different air angles as well as be utilized as combo filler in grounded confirms when compared to the L version. It's much slower and thus bad to use as reaction anti-air, but it's surprisingly good as a prediction \"poke\"."
};
const hUppercut = { 
  moveName: 'H Beppo, Sic \'Em!', 
  altName: '623H', 
  damage: '450x3', 
  guard: 'Mid', 
  startup: '11', 
  active: '3,3,6', 
  recovery: '39', 
  onblock: '-26', 
  onhit: 'HKD (+47)',
  oncounterhit: 'HKD (+44)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Summons Beppo to perform a rising attack. Ferry's main juggle ender and reversal (granted, the H version is the only real one).\nFrame 1 invincible. Yep, you read that right.\nSlower than the average reversal.\nUnlike the L and M versions, it is also completely air unblockable. Grants hard knockdown. Can be low profiled."
};

// rekka
const lRekka = { 
  moveName: 'L Trombe', 
  altName: '214L', 
  damage: '750, 150x2', 
  guard: 'Mid', 
  startup: '16', 
  active: '3x4', 
  recovery: '16', 
  onblock: '-5', 
  onhit: 'KD (+20)',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Safe on block.\nDoesn't knock down, causes a flipout instead.\nMainly used to end your block pressure safely, as well as having some utility as a frametrap tool during block pressure. Can also be used as an alternative ender if 623X is not available due to cooldown."
};
const mRekka = { 
  moveName: 'M Trombe', 
  altName: '214M', 
  damage: '550, 150x5', 
  guard: 'Mid', 
  startup: '24', 
  active: '3x7', 
  recovery: '16', 
  onblock: '-3', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Wallbounce on counterhit.\nSlower than L version, but does more damage and hits and is safer on block. On counter hit, causes a wall bounce in corner, making it a very scary move to get punished by in corner."
};
const hRekka = { 
  moveName: 'H Trombe', 
  altName: '214H', 
  damage: '550, 150x5', 
  guard: 'Mid', 
  startup: '16', 
  active: '3x7', 
  recovery: '16', 
  onblock: '-3', 
  onhit: 'HKD (+55)',
  oncounterhit: 'HKD (+54)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Wallbounces on hit.\nGreat setplay starter midscreen and combo extender in the corner."
};

// trap
const lTrap = {
  moveName: ' Geegee, Get \'Em!', 
  altName: '22L', 
  damage: '500, 200x5', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '(Air Blocked: +4)', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: 'Projectile that disappears if Ferry blocks or gets hit. Sends Geegee at the foe for a multi-hit attack. The attack can be delayed by holding any button except U or G. You can switch which button you use to delay Geegee by holding down a different button immediately after inputting it. Geegee defines Ferry’s amazing okizeme game, as you can go for many ambiguous mixups such as hit/throw/shimmy or even a high/low with 2M and rising j.L, and have Geegee help you convert off of it afterwards. Geegee persists after a throw which allows for a combo, but any kind of tech will make it vanish.\nJumps out in an arc.\nCan be useful as an anti air in some cases. In corner, Geegee can go offscreen when using the L or M version. If you’re too close to the corner, use 22H.'
}
const mTrap = {
  moveName: ' Geegee, Get \'Em!', 
  altName: '22M', 
  damage: '500, 200x5', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '(Air Blocked: +4)', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: 'Projectile that disappears if Ferry blocks or gets hit. Sends Geegee at the foe for a multi-hit attack. The attack can be delayed by holding any button except U or G. You can switch which button you use to delay Geegee by holding down a different button immediately after inputting it. Geegee defines Ferry’s amazing okizeme game, as you can go for many ambiguous mixups such as hit/throw/shimmy or even a high/low with 2M and rising j.L, and have Geegee help you convert off of it afterwards. Geegee persists after a throw which allows for a combo, but any kind of tech will make it vanish.\nJumps out in an arc.\nCan be useful as an anti air in some cases. In corner, Geegee can go offscreen when using the L or M version. If you’re too close to the corner, use 22H.'
}
const hTrap = {
  moveName: 'H Geegee, Get \'Em!', 
  altName: '22H', 
  damage: '200x5', 
  guard: 'All', 
  startup: '76-167', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: 'Projectile that disappears if Ferry blocks or gets hit. Sends Geegee at the foe for a multi-hit attack. The attack can be delayed by holding any button except U or G. You can switch which button you use to delay Geegee by holding down a different button immediately after inputting it. Geegee defines Ferry’s amazing okizeme game, as you can go for many ambiguous mixups such as hit/throw/shimmy or even a high/low with 2M and rising j.L, and have Geegee help you convert off of it afterwards. Geegee persists after a throw which allows for a combo, but any kind of tech will make it vanish.\nRuns across the ground stopping in front of the foe.\nThis is usually the version you want to use to set up the high/low mixup with rising j.L and 2M. Can occasionally be used at neutral or in long-range pressure to attempt to force an advantageous situation for Ferry.'
}


// skybound art
const sba = { 
  moveName: 'Vergiften', 
  altName: '236236H', 
  damage: '400x5', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '41', 
  onblock: '+45', 
  onhit: 'HKD (+110)',
  oncounterhit: 'HKD (+110)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Skybound Art that launches a projectile. Releases a powerful orb that slowly bounces across the stage. Chase the projectile down to apply pressure and restrict the foe's movement options. Also serves as amazing combo filler when you have the meter to spend. Won't dissappear even if you get hit after it has come out. DOES NOT HAVE INVINCIBILITY FRAME 1 SO DO NOT USE IT AS A REVERSAL! Since the orb is guaranteed to come out after the super flash, it also serves as a very strong reactionary anti-air option. It will trade even with deep jump-ins while dispensing the full damage."
};
const installSba = { 
  moveName: 'Hinrichten', 
  altName: '214214H', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '7', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', '214', 'h', 'or', '214', 'a'],
  description: "Install super that lasts for 600F (10 seconds).\nWhen active, allows Ferry to chain her normals into each other in any order, but cannot repeat a normal in the chain and she can only cancel up to 3 times i.e (5H > 5M > 2U). Each hit of an autocombo contributes to this 3-move limit. Hinrichten allows you to do a multitude of things, such as reverse beat your pokes into 2L to cut down their recovery, convert off of rising j.L instant overhead without a setup prior, and combo into 2U naturally for a hard knockdown. DOES NOT HAVE INVINCIBILITY FRAME 1 SO DO NOT USE IT AS A REVERSAL!\nWhile in install, specials will not recharge until install finishes. Recharging specials used before install became active will have their timers paused and will resume recharging once the install is over.\nThis can also be used as a pseudo chainshift/YRC. Buffering this input in neutral while in range can be good to start pressure or catch them during fireball startup.\nThere is currently no known difference between the easy input (214S) and the hard input (214214H)"
};
const ssba = { 
  moveName: 'Aetheryte Requiescat', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'Mid', 
  startup: '13', 
  active: '14[2,3,3,6]', 
  recovery: '42', 
  onblock: '-37', 
  onhit: 'HKD (T:+46, S:+36)',
  oncounterhit: 'HKD (T:+46, S:+36)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Invincible reversal. Performs a powerful whip attack that deals additional hits upon connecting. This skill's long reach is useful for punishing foes throwing out pokes or projectiles at a distance. You can hitconfirm into this after successfully hitting f.M, f.H or 2M, by buffering 236236 and then hitting U when you see they got hit. It’s really easy so it’s highly recommended to learn it.\nThe easy input only affects the distance at which the cinematic occurs, and the cinematic does provide extra damage. At certain ranges where 236S+U and 236236U both won't activate the cinematic, there is no damage difference between the two inputs."
};


export const ferryInfo = [
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
  j8U,
  s5U,
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
  lFireballExpode,
  mFireballExpode,
  hFireballExpode,
  lFireballPull,
  mFireballPull,
  hFireballPull,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lTrap,
  mTrap,
  hTrap,
  sba,
  installSba,
  ssba
]