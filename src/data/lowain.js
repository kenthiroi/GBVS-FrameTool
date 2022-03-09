// UNFINISHED: SBA/SSBA Move s 

const general = { char: "Lowain", health: '10000', prejump: '4F', backdash: '22F' }

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
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "Pressure starter. Can go directly into a combo or use links to do frame traps."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '750',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '10',
  onblock: '0',
  onhit: '4',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Weird anti air/pressure tool. You can use it in combos to make the combo last longer to refresh your moves. Has a shorter proximity activation range than most c.Ms. You might get f.M in situations you think you might get c.M so watch out."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '550x2',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Combo starter/Juggle tool for bigger punishes. Can be a situational anti air too if they are close but 2H is better."
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
  description: "Can be used for gapless pressure. Stop prematurely to catch DP spam or on hit you can convert to a combo.\nThe second hit can now be special-cancelled as of patch 1.31."
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
  description: "Can be used for gapless pressure. Stop prematurely to catch DP spam or on hit you can convert to a combo.\nThe second hit can now be special-cancelled as of patch 1.31."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l'],
  description: "Hit confirm button and fast poke. It’s used in link combos.\nBe careful how you use this, since it will whiff on crouching at farther ranges."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Neutral whiff punish/poke. Has fairly long reach and only punishable by jabs (very safe poke). Can cancel into specials for additional pressure. At max range you can cancel into 214L to become + on block (usually about +1 or +2)."
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
  oncounterhit: '-',
  clash: '-',
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
  onblock: '2',
  onhit: '6',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: "Fast low. Good for pressuring and also a hit confirm tool."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'm'],
  description: "Neutral whiff punish/poke. A mid that has pretty long reach. Can also use it as a pressure tool to keep people on their toes. Can cancel into specials.\nCan low profile a lot of moves."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'h'],
  description: "Anti air that leads into big punishes on hit. Has good vertical range but not much horizontal range in front of him which makes some jump in arcs a bit awkward to anti-air. It does surprisingly anti-air cross ups well. Facilitates a lot of optimal air juggle combos with 2H > 214L. On airborne opponents, this is the only normal that will combo into HPA on it's own. It's usage is very important."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'u'],
  description: "Long range sweep that can lead to oki. When spaced correctly the slide is very hard to punish it will become safe at max range. The slide also has a low profile hurtbox from start to finish and is special cancelable on block and hit."
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
  motion: ['l'],
  description: "Lowain’s foot sticks out until he lands. Good for calling people out in the air though it can be crouched."
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
  motion: ['m'],
  description: "Crossup tool. Be wary of the range though since it's pretty short."
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
  motion: ['h'],
  description: "Air to ground attack normal. Has more range than j.b so you can also use it air to air situations or mix up the timing on your jumping attacks."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '250xN', 
  guard: 'high', 
  startup: '12', 
  active: '-', 
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
  guard: 'throw', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw is Lowain's best throw. Gives him enough time to set up oki. His backwards throw leaves him plus but he cannot set up any summons. You cannot summon the boys when they're on screen during the throws either."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw is Lowain's best throw. Gives him enough time to set up oki. His backwards throw leaves him plus but he cannot set up any summons. You cannot summon the boys when they're on screen during the throws either."
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
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Typical air throw. The distance from which your opponent ends up after the throw varies slightly if you throw them from a higher distance. Air throwing at superjump height will put them further away and some oki setups won't work as well. This throw also has an interesting property where if you air throw an opponent into a summon the summon will hit them during the throw animation and damage them."
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
  motion: ['m', 'u'],
  description: "Can be used in unblockable setups or just a general overhead option/throw bait to keep your opponent on their toes. It has foot invul on frame 23 which makes it extremely poor as a low crush option but has the same universal frame 4 throw invul as every other universal overhead."
};

// fireballs
const lFireball = { 
  moveName: 'L Sammy & Tommy', 
  altName: '236L', 
  damage: '700', 
  guard: 'Low/Air', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
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
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
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
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
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
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Counters highs and mids.\nLowain's parry. Note that he cannot parry unblockable attacks. His parry is also a guard point type parry which means your opponent can cancel the attack that triggers the parry if they are able to. An aware opponent can protect themselves by cancelling their normals into spotdodge or DP to avoid the parry followup. If they spotdodge, Lowain is left negative but not punishable.\nHe can also combo off of his parries near the corner. You can only combo from parry if they land a high jump in for his L and H parries. M Parry will always give you a chance to follow up if you land it near the corner."
};
const mUppercut = { 
  moveName: 'M Come at Me, Bro!', 
  altName: '623M', 
  damage: '1200',
  guard: 'Unblockable', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Counters low hits.\nLowain's parry. Note that he cannot parry unblockable attacks. His parry is also a guard point type parry which means your opponent can cancel the attack that triggers the parry if they are able to. An aware opponent can protect themselves by cancelling their normals into spotdodge or DP to avoid the parry followup. If they spotdodge, Lowain is left negative but not punishable.\nHe can also combo off of his parries near the corner. You can only combo from parry if they land a high jump in for his L and H parries. M Parry will always give you a chance to follow up if you land it near the corner."
};
const hUppercut = { 
  moveName: 'H Come at Me, Bro!', 
  altName: '623H', 
  damage: '1200',
  guard: 'Unblockable', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Counters everything but throws.\nLowain's parry. Note that he cannot parry unblockable attacks. His parry is also a guard point type parry which means your opponent can cancel the attack that triggers the parry if they are able to. An aware opponent can protect themselves by cancelling their normals into spotdodge or DP to avoid the parry followup. If they spotdodge, Lowain is left negative but not punishable.\nHe can also combo off of his parries near the corner. You can only combo from parry if they land a high jump in for his L and H parries. M Parry will always give you a chance to follow up if you land it near the corner."
};

// rekka
const lRekka = { 
  moveName: 'L Awesome Sauce', 
  altName: '214L', 
  damage: '800', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Advancing move. Performs a quick slash attack with fast recovery. This is your major combo extender/ender. All versions become airborne after startup allowing you to go over some low hitting attacks.\nSlow start-up.\nThis is plus on block if spaced/Meaty (up to +5) and in general is unpunishable from any range. As well if done meaty last frame can block 11f DPs."
};
const mRekka = { 
  moveName: 'M Awesome Sauce', 
  altName: '214M', 
  damage: '500x2', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Advancing move. Performs a quick slash attack with fast recovery. This is your major combo extender/ender. All versions become airborne after startup allowing you to go over some low hitting attacks.\nFast start-up and good damage.\nYour primary combo ender if you can combo into it."
};
const hRekka = { 
  moveName: 'H Awesome Sauce', 
  altName: '214H', 
  damage: '400x2, 300', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Advancing move. Performs a quick slash attack with fast recovery. This is your major combo extender/ender. All versions become airborne after startup allowing you to go over some low hitting attacks.\nFast recovery.\nWallbounces in the corner.\nExtremely important for extending combos, but also Lowain's Achilles Heel. Using this will let you set up bros or mechs, but you won't be able to score another knockdown until it comes back."
};

const lTurret = {
  moveName: 'L Awesome Sauce', 
  altName: '22', 
  damage: '400x2', 
  guard: 'mid', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Summons the mighty (and imaginary) Lady Katapillar into battle. One of your major sources of neutral and okizeme. Listed startup is how long it takes Katapillar to actually do the attack. Lowain can act 34F after inputting the move. The Katerpillar is very susceptible to active hitboxes. Any hitbox will hit Katerpillar and her attack will be negated. Katerpillar will continue to attack even if Lowain is hit or blocking which makes some trade situations possible.\nDoes four small punches forward.\nThe punches can clash projectiles if you're lucky."
};
const mTurret = {
  moveName: 'M Awesome Sauce', 
  altName: '22', 
  damage: '800', 
  guard: 'mid', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Summons the mighty (and imaginary) Lady Katapillar into battle. One of your major sources of neutral and okizeme. Listed startup is how long it takes Katapillar to actually do the attack. Lowain can act 34F after inputting the move. The Katerpillar is very susceptible to active hitboxes. Any hitbox will hit Katerpillar and her attack will be negated. Katerpillar will continue to attack even if Lowain is hit or blocking which makes some trade situations possible.\nFires a thin Aether Beam at slightly upward angle.\nOpponent can duck under it at max range.\nExcellent for zoning and to answer your opponent's projectiles."
};
const hTurret = {
  moveName: 'H Awesome Sauce', 
  altName: '22', 
  damage: '170x6', 
  guard: 'mid', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Summons the mighty (and imaginary) Lady Katapillar into battle. One of your major sources of neutral and okizeme. Listed startup is how long it takes Katapillar to actually do the attack. Lowain can act 34F after inputting the move. The Katerpillar is very susceptible to active hitboxes. Any hitbox will hit Katerpillar and her attack will be negated. Katerpillar will continue to attack even if Lowain is hit or blocking which makes some trade situations possible.\nPerforms a rocket barrage.\nThis can instantly give you a free chance to get in if the missiles come out."
};

// skybound art
const sba = { 
  moveName: 'Human! Pyramid! Attack!', 
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
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Unleashes the final form of the Lowain Bros. Enters Pyramid stance which grants boosted movement speed but you cannot block in this stance. This has a time limit (shows up as a gauge under Lowain's health bar) before he reverts back to normal. HPA has unlimited armor and he is completely immune to throws of all kinds. Note that if your HP drops to zero Lowain will die.\nHPA is most safely used to end corner combos. If your opponent is unprepared you can use the high and low options to mix up your opponent or to chip them out.\nNote the activation has no armor until after the flash (cannot be used as reversal)."
};
const ssba = { 
  moveName: 'Try This on for Size!', 
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
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Summons (an imaginary) Yggdrasil into battle in place of Lowain for a time period (a gauge will show up under Lowain's health bar). Also comes with her own moves (see below). Attacks hitting Yggdrasil have 50% of their damage reduced, and she can't be knocked out. Her skills deal big damage at just about any range, so give her a call when it's about time to finish off the foe. All of her attacks can be spotdodged individually or avoided. When the timer runs out Lowain has punishable recovery frames. Make sure you finish them off or you push them far enough to avoid being punished\nYggdrasil can be controlled to move back and fourth slowly, which can be used to fence your opponent in.\nSince it's a knowledge check instead of guaranteed damage, it's slightly less useful against experienced players (you still get ridiculous chip damage) However, Lowain disappears when this move goes active. So it can be used as a very expensive get-out-of-jail-free card if you're in a pinch since it does have frame 1 invincibility.\nNote that using the easy input (236S+U) will result in 10% less damage on all moves."
};


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
  ssba
]