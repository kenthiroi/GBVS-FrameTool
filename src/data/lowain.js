// UNFINISHED: SBA/SSBA Move s 

const general = { char: "Lowain", health: '10000', prejump: '4F', backdash: '26F' }

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
  description: "Pressure starter. Can go directly into a combo or use links to do frame traps."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '350,250,150',
  guard: 'Mid',
  startup: '6',
  active: '2,2,4',
  recovery: '15',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '0',
  clash: '3',
  motion: ['m'],
  description: "Weird anti air/pressure tool. You can use it in combos to make the combo last longer to refresh your moves. Has a shorter proximity activation range than most c.Ms. You might get f.M in situations you think you might get c.M so watch out."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '550x2',
  guard: 'Mid',
  startup: '10',
  active: '4(3)2',
  recovery: '21',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '0',
  clash: '5',
  motion: ['h'],
  description: "Combo starter/Juggle tool for bigger punishes. Can be a situational anti air too if they are close but 2H is better."
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
  description: "Can be used for gapless pressure. Stop prematurely to catch DP spam or on hit you can convert to a combo.\nThe second hit can now be special-cancelled as of patch 1.31."
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
  description: "Can be used for gapless pressure. Stop prematurely to catch DP spam or on hit you can convert to a combo.\nThe second hit can now be special-cancelled as of patch 1.31."
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
  description: "Hit confirm button and fast poke. It’s used in link combos.\nBe careful how you use this, since it will whiff on crouching at farther ranges."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "Neutral whiff punish/poke. Has fairly long reach and only punishable by jabs (very safe poke). Can cancel into specials for additional pressure. At max range you can cancel into 214L to become + on block (usually about +1 or +2)."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '6',
  recovery: '18',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '+5',
  clash: '4',
  motion: ['h'],
  description: "Combo Tool and situational anti air, but you probably want to use 2H instead. Doesn’t extend his hitbox much so it can also be a good whiff punish tool."
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
  description: "Fast low. Good for pressuring and also a hit confirm tool."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '5',
  recovery: '15',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+3',
  clash: '3',
  motion: ['2', 'm'],
  description: "Neutral whiff punish/poke. A mid that has pretty long reach. Can also use it as a pressure tool to keep people on their toes. Can cancel into specials.\nCan low profile a lot of moves."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '4',
  recovery: '24',
  onblock: '-11',
  onhit: '-7',
  oncounterhit: '+1',
  clash: '4',
  motion: ['2', 'h'],
  description: "Anti air that leads into big punishes on hit. Has good vertical range but not much horizontal range in front of him which makes some jump in arcs a bit awkward to anti-air. It does surprisingly anti-air cross ups well. Facilitates a lot of optimal air juggle combos with 2H > 214L. On airborne opponents, this is the only normal that will combo into HPA on it's own. It's usage is very important."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '9',
  active: '9',
  recovery: '17',
  onblock: '-11',
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Long range sweep that can lead to oki. When spaced correctly the slide is very hard to punish it will become safe at max range. The slide also has a low profile hurtbox from start to finish and is special cancelable on block and hit."
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
  clash: '-',
  motion: ['l'],
  description: "Lowain’s foot sticks out until he lands. Good for calling people out in the air though it can be crouched."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '8', 
  active: '3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Crossup tool. Be wary of the range though since it's pretty short."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '9', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Air to ground attack normal. Has more range than j.b so you can also use it air to air situations or mix up the timing on your jumping attacks."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '250xN', 
  guard: 'High', 
  startup: '12', 
  active: '2(3)2(3)', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Multihitting happy feet attack. Good for mixups/pressure since every hit counts as an overhead. It also changes the trajectory of your jump a little bit due to increased floatiness. Note that it can only hit an opponent up to 6 times before the active frames are forced to run out."
};

// unique action
const s5U = { 
  moveName: 'Don\'t Mind If I Do', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '57', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Cooks up a random food item that'll restore Lowain's health or SBA gauge. It's safest to use at long range or while the foe's knocked down.\nLife: Corn (200), Meat (500), Spaghetti (1000)\nGauge: Salad (8%), Parfait (30%)\nChance of getting each food item: Corn (30%), Meat (20%), Spaghetti (10%), Salad (30%), Parfait (10%)"
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw is Lowain's best throw. Gives him enough time to set up oki. His backwards throw leaves him plus but he cannot set up any summons. You cannot summon the boys when they're on screen during the throws either."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+27)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw is Lowain's best throw. Gives him enough time to set up oki. His backwards throw leaves him plus but he cannot set up any summons. You cannot summon the boys when they're on screen during the throws either."
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
  description: "Typical air throw. The distance from which your opponent ends up after the throw varies slightly if you throw them from a higher distance. Air throwing at superjump height will put them further away and some oki setups won't work as well. This throw also has an interesting property where if you air throw an opponent into a summon the summon will hit them during the throw animation and damage them."
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
  description: "Can be used in unblockable setups or just a general overhead option/throw bait to keep your opponent on their toes. It has foot invul on frame 23 which makes it extremely poor as a low crush option but has the same universal frame 4 throw invul as every other universal overhead."
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
  moveName: 'L Sammy & Tommy', 
  altName: '236L', 
  damage: '700', 
  guard: 'Low/Air', 
  startup: '21-52', 
  active: '-', 
  recovery: '34 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Projectile moves (for some reason) Calls in Sammy/Elsam or Tommy/Tomoi depending on the button you press.\nThis is the key move for setting up unblockables. The slide hits low and Lowain is able to move around before it hits allowing him to setup a jump in or universal overhead to hit his opponent just when Elsam slides. The brofams are very susceptible to active hitboxes. Any hitbox will hit a brofam and their attack will be negated. However, on hit, the brofams will soak up 1 hit of a projectile. Brofams will continue to attack even if Lowain is hit or blocking which makes some trade situations possible. The brofams' attacks come out faster the closer Lowain is to the edge of the screen.\nThe brofams will despawn when performing either of Lowain's supers.\nElsam slides in with a low-hitting attack."
};
const mFireball = { 
  moveName: 'M Sammy & Tommy', 
  altName: '236M', 
  damage: '700', 
  guard: 'All', 
  startup: '26-61', 
  active: '-', 
  recovery: '34 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Projectile moves (for some reason) Calls in Sammy/Elsam or Tommy/Tomoi depending on the button you press.\nThis is the key move for setting up unblockables. The slide hits low and Lowain is able to move around before it hits allowing him to setup a jump in or universal overhead to hit his opponent just when Elsam slides. The brofams are very susceptible to active hitboxes. Any hitbox will hit a brofam and their attack will be negated. However, on hit, the brofams will soak up 1 hit of a projectile. Brofams will continue to attack even if Lowain is hit or blocking which makes some trade situations possible. The brofams' attacks come out faster the closer Lowain is to the edge of the screen.\nThe brofams will despawn when performing either of Lowain's supers.\nTomoi jumps in and splashes on the foe.\nNot all that useful because it hits mid."
};
const hFireball = { 
  moveName: 'H Sammy & Tommy', 
  altName: '236H', 
  damage: '700x2', 
  guard: 'Low/Air, All', 
  startup: '21-52,26-73', 
  active: '-', 
  recovery: '29 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Projectile moves (for some reason) Calls in Sammy/Elsam or Tommy/Tomoi depending on the button you press.\nThis is the key move for setting up unblockables. The slide hits low and Lowain is able to move around before it hits allowing him to setup a jump in or universal overhead to hit his opponent just when Elsam slides. The brofams are very susceptible to active hitboxes. Any hitbox will hit a brofam and their attack will be negated. However, on hit, the brofams will soak up 1 hit of a projectile. Brofams will continue to attack even if Lowain is hit or blocking which makes some trade situations possible. The brofams' attacks come out faster the closer Lowain is to the edge of the screen.\nThe brofams will despawn when performing either of Lowain's supers.\nCalls both at the same time."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Come at Me, Bro!', 
  altName: '623L', 
  damage: '1200',
  guard: 'Unblockable', 
  startup: '4', 
  active: '19 (Armor)', 
  recovery: '12', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Counters highs and mids.\nLowain's parry. Note that he cannot parry unblockable attacks. His parry is also a guard point type parry which means your opponent can cancel the attack that triggers the parry if they are able to. An aware opponent can protect themselves by cancelling their normals into spotdodge or DP to avoid the parry followup. If they spotdodge, Lowain is left negative but not punishable.\nHe can also combo off of his parries near the corner. You can only combo from parry if they land a high jump in for his L and H parries. M Parry will always give you a chance to follow up if you land it near the corner."
};
const mUppercut = { 
  moveName: 'M Come at Me, Bro!', 
  altName: '623M', 
  damage: '1200',
  guard: 'Unblockable', 
  startup: '1', 
  active: '19 (Armor)', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Counters low hits.\nLowain's parry. Note that he cannot parry unblockable attacks. His parry is also a guard point type parry which means your opponent can cancel the attack that triggers the parry if they are able to. An aware opponent can protect themselves by cancelling their normals into spotdodge or DP to avoid the parry followup. If they spotdodge, Lowain is left negative but not punishable.\nHe can also combo off of his parries near the corner. You can only combo from parry if they land a high jump in for his L and H parries. M Parry will always give you a chance to follow up if you land it near the corner."
};
const hUppercut = { 
  moveName: 'H Come at Me, Bro!', 
  altName: '623H', 
  damage: '1200',
  guard: 'Unblockable', 
  startup: '1', 
  active: '16 (Armor)', 
  recovery: '10', 
  onblock: '-', 
  onhit: 'HKD (+49)',
  oncounterhit: 'HKD (+53)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Counters everything but throws.\nLowain's parry. Note that he cannot parry unblockable attacks. His parry is also a guard point type parry which means your opponent can cancel the attack that triggers the parry if they are able to. An aware opponent can protect themselves by cancelling their normals into spotdodge or DP to avoid the parry followup. If they spotdodge, Lowain is left negative but not punishable.\nHe can also combo off of his parries near the corner. You can only combo from parry if they land a high jump in for his L and H parries. M Parry will always give you a chance to follow up if you land it near the corner."
};

// rekka
const lRekka = { 
  moveName: 'L Awesome Sauce', 
  altName: '214L', 
  damage: '800', 
  guard: 'Mid', 
  startup: '19', 
  active: '10', 
  recovery: '9', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Advancing move. Performs a quick slash attack with fast recovery. This is your major combo extender/ender. All versions become airborne after startup allowing you to go over some low hitting attacks.\nSlow start-up.\nThis is plus on block if spaced/Meaty (up to +5) and in general is unpunishable from any range. As well if done meaty last frame can block 11f DPs."
};
const mRekka = { 
  moveName: 'M Awesome Sauce', 
  altName: '214M', 
  damage: '500x2', 
  guard: 'Mid', 
  startup: '16', 
  active: '4(6)2', 
  recovery: '21', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Advancing move. Performs a quick slash attack with fast recovery. This is your major combo extender/ender. All versions become airborne after startup allowing you to go over some low hitting attacks.\nFast start-up and good damage.\nYour primary combo ender if you can combo into it."
};
const hRekka = { 
  moveName: 'H Awesome Sauce', 
  altName: '214H', 
  damage: '400x2, 300', 
  guard: 'Mid', 
  startup: '15', 
  active: '4(6)2(8)2', 
  recovery: '21', 
  onblock: '-4', 
  onhit: 'HKD (+45)',
  oncounterhit: 'HKD (+47)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Advancing move. Performs a quick slash attack with fast recovery. This is your major combo extender/ender. All versions become airborne after startup allowing you to go over some low hitting attacks.\nFast recovery.\nWallbounces in the corner.\nExtremely important for extending combos, but also Lowain's Achilles Heel. Using this will let you set up bros or mechs, but you won't be able to score another knockdown until it comes back."
};

const lTurret = {
  moveName: 'L Magnificent Tool of Destruction', 
  altName: '22', 
  damage: '400x2', 
  guard: 'All', 
  startup: '38', 
  active: '6(3)6', 
  recovery: '34', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Summons the mighty (and imaginary) Lady Katapillar into battle. One of your major sources of neutral and okizeme. Listed startup is how long it takes Katapillar to actually do the attack. Lowain can act 34F after inputting the move. The Katerpillar is very susceptible to active hitboxes. Any hitbox will hit Katerpillar and her attack will be negated. Katerpillar will continue to attack even if Lowain is hit or blocking which makes some trade situations possible.\nDoes four small punches forward.\nThe punches can clash projectiles if you're lucky."
};
const mTurret = {
  moveName: 'M Magnificent Tool of Destruction', 
  altName: '22', 
  damage: '800', 
  guard: 'All', 
  startup: '47', 
  active: '6[2,2,2]', 
  recovery: '34', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Summons the mighty (and imaginary) Lady Katapillar into battle. One of your major sources of neutral and okizeme. Listed startup is how long it takes Katapillar to actually do the attack. Lowain can act 34F after inputting the move. The Katerpillar is very susceptible to active hitboxes. Any hitbox will hit Katerpillar and her attack will be negated. Katerpillar will continue to attack even if Lowain is hit or blocking which makes some trade situations possible.\nFires a thin Aether Beam at slightly upward angle.\nOpponent can duck under it at max range.\nExcellent for zoning and to answer your opponent's projectiles."
};
const hTurret = {
  moveName: 'H Magnificent Tool of Destruction', 
  altName: '22', 
  damage: '170x6', 
  guard: 'All', 
  startup: '38', 
  active: '70', 
  recovery: '34', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Summons the mighty (and imaginary) Lady Katapillar into battle. One of your major sources of neutral and okizeme. Listed startup is how long it takes Katapillar to actually do the attack. Lowain can act 34F after inputting the move. The Katerpillar is very susceptible to active hitboxes. Any hitbox will hit Katerpillar and her attack will be negated. Katerpillar will continue to attack even if Lowain is hit or blocking which makes some trade situations possible.\nPerforms a rocket barrage.\nThis can instantly give you a free chance to get in if the missiles come out."
};

// skybound art
const sba = { 
  moveName: 'Human! Pyramid! Attack!', 
  altName: '236236H', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Unleashes the final form of the Lowain Bros. Enters Pyramid stance which grants boosted movement speed but you cannot block in this stance. This has a time limit (shows up as a gauge under Lowain's health bar) before he reverts back to normal. HPA has unlimited armor and he is completely immune to throws of all kinds. Note that if your HP drops to zero Lowain will die.\nHPA is most safely used to end corner combos. If your opponent is unprepared you can use the high and low options to mix up your opponent or to chip them out.\nNote the activation has no armor until after the flash (cannot be used as reversal)."
};
const sbaG = {
  moveName: 'Totally Rad Juke', 
  altName: '236236H -> G', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '29', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'h', 'g', 'or', '236', 'a', 'g'],
  description: 'Dodges incoming attacks from the foe. The bros can\'t block while in H.P.A., so use this skill to avoid taking damage.'
}
const sbaL = {
  moveName: 'It\'s Lit, Bros', 
  altName: '236236H -> L', 
  damage: '200x3', 
  guard: 'Mid', 
  startup: '8', 
  active: '3x3', 
  recovery: '16', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '5',
  motion: ['236', '236', 'h', 'l', 'or', '236', 'a', 'l'],
  description: 'Performs a three-hit flurry of slashes. This skill deals a considerable amount of chip damage when blocked. It\'s fairly unsafe on block allowing your opponent to punish with some damage before you\'re able to act again.'
}
const sbaM = {
  moveName: 'Definitely Don\'t Try This at Home', 
  altName: '236236H -> M', 
  damage: '700', 
  guard: 'Mid', 
  startup: '9', 
  active: '6', 
  recovery: '15', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+14',
  clash: '5',
  motion: ['236', '236', 'h', 'm', 'or', '236', 'a', 'm'],
  description: 'Ignites fireworks toward the sky. This skill doesn\'t have much horizontal reach, but easily catches foes trying to jump in. Easily juggles into itself on airborne opponents. It can sometimes be plus on block if spaced.'
}
const sbaH = {
  moveName: 'Flex On \'Em', 
  altName: '236236H -> H', 
  damage: '800', 
  guard: 'High', 
  startup: '19', 
  active: '3', 
  recovery: '12', 
  onblock: '+1', 
  onhit: '+9',
  oncounterhit: '+21',
  clash: '5',
  motion: ['236', '236', 'h', 'h', 'or', '236', 'a', 'h'],
  description: 'Performs an overhead attack much faster than the standard overhead attack. It\'s a handy skill to catch crouching foes off-guard. Is considerably plus on block making it usable for frame traps if they block it.'
}
const sbaU = {
  moveName: 'Catch \'Em Slippin\'', 
  altName: '236236H -> U', 
  damage: '900', 
  guard: 'Low', 
  startup: '23', 
  active: '5', 
  recovery: '21', 
  onblock: '-7', 
  onhit: 'HKD (+72)',
  oncounterhit: 'HKD (+84)',
  clash: '5',
  motion: ['236', '236', 'h', 'u', 'or', '236', 'a', 'u'],
  description: 'Performs a low sliding attack that sends the foe flying high. This skill can be followed up with attacks upon connecting. Use it right after a Flex On \'Em to mix up a standing foe. The slide is very punishable so your opponent gets a guaranteed C normal punish if it hits.'
}
const sbaEnder = {
  moveName: 'Moment of Truth', 
  altName: '236236H -> 236U', 
  damage: '1500', 
  guard: 'Mid', 
  startup: '14', 
  active: '10', 
  recovery: '33', 
  onblock: '-6', 
  onhit: 'HKD (+33)',
  oncounterhit: 'HKD (+45)',
  clash: '-',
  motion: ['236', '236', 'h', '236', 'u', 'or', '236', 'a', '236', 'u'],
  description: 'Perform a powerful rush attack that can be canceled from any skill used during H.P.A. mode. It\'ll also disband the pyramid. The rush attack if blocked will cause Guard Crush.'
}
const ssba = { 
  moveName: 'Try This on for Size!', 
  altName: '236236U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '31', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Summons (an imaginary) Yggdrasil into battle in place of Lowain for a time period (a gauge will show up under Lowain's health bar). Also comes with her own moves (see below). Attacks hitting Yggdrasil have 50% of their damage reduced, and she can't be knocked out. Her skills deal big damage at just about any range, so give her a call when it's about time to finish off the foe. All of her attacks can be spotdodged individually or avoided. When the timer runs out Lowain has punishable recovery frames. Make sure you finish them off or you push them far enough to avoid being punished\nYggdrasil can be controlled to move back and fourth slowly, which can be used to fence your opponent in.\nSince it's a knowledge check instead of guaranteed damage, it's slightly less useful against experienced players (you still get ridiculous chip damage) However, Lowain disappears when this move goes active. So it can be used as a very expensive get-out-of-jail-free card if you're in a pinch since it does have frame 1 invincibility.\nNote that using the easy input (236S+U) will result in 10% less damage on all moves."
};
const ssbaL = {
  moveName: 'Earth Pillar', 
  altName: '236236U -> L', 
  damage: '600x3', 
  guard: 'All', 
  startup: '18', 
  active: '9,9,9', 
  recovery: '20', 
  onblock: '-12/-3/+6', 
  onhit: '+29/+38/+47/+44/+53/+58',
  oncounterhit: '+29/+38/+47/+44/+53/+58',
  clash: '-',
  motion: ['236', '236', 'u', 'l', 'or', '236', 'a', 'u', 'l'],
  description: ''
}
const ssbaM = {
  moveName: 'Axis Mundi', 
  altName: '236236U -> M', 
  damage: '1000', 
  guard: 'All', 
  startup: '22⇒69', 
  active: '32⇒81', 
  recovery: '55⇒102', 
  onblock: '+1', 
  onhit: 'HKD (+74)',
  oncounterhit: 'HKD (+86)',
  clash: '-',
  motion: ['236', '236', 'u', 'm', 'or', '236', 'a', 'u', 'm'],
  description: 'Erects three rock pillars from the ground. Their placement can be adjusted by holding → or ← when pressing the button.'
}
const ssbaH = {
  moveName: 'Nether Veil', 
  altName: '236236U -> H', 
  damage: '2000', 
  guard: 'Unblockable', 
  startup: '30', 
  active: '3', 
  recovery: '15', 
  onblock: '-', 
  onhit: 'KD (+51)',
  oncounterhit: 'KD (+76)',
  clash: '-',
  motion: ['236', '236', 'u', 'h', 'or', '236', 'a', 'u', 'h'],
  description: ''
}
const ssbaU = {
  moveName: 'Luminox Genesi', 
  altName: '236236U -> U', 
  damage: '1400,200x5', 
  guard: 'All', 
  startup: '45', 
  active: '20', 
  recovery: '20', 
  onblock: '+15', 
  onhit: 'KD (+73)',
  oncounterhit: 'KD (+73)',
  clash: '-',
  motion: ['236', '236', 'u', 'u', 'or', '236', 'a', 'u', 'u'],
  description: ''
}

//still need individual moves for sba/ssba forms


export const lowainInfo = [
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
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lTurret,
  mTurret,
  hTurret,
  sba,
  sbaG,
  sbaL,
  sbaM,
  sbaH,
  sbaU,
  sbaEnder,
  ssba,
  ssbaL,
  ssbaM,
  ssbaH,
  ssbaU
]