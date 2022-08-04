// FINAL 

const general = { char: "Zooey", health: '10000', prejump: '4F', backdash: '22F' }

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
  description: "One of Zooey's two plus on block normals.\nThe Granblue c.L. Go-to pressure and abare button due to its fast overall speed. Also offers frame advantage on block for tick throws and pressure resets."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '3',
  recovery: '12',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "0 on block, only useful as a frame trap if a light is used after.\nDoes not link into c.H on counterhit.\nPretty average c.M button. Frame traps from all light buttons if it's in activation range."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '18',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '+11',
  clash: '5',
  motion: ['h'],
  description: "-5 but safe due to pushback.\nLinks into itself on Counter Hit.\nNot a frame trap after c.L/2L.\nStrictly a punish starter due to its bad frame advantage. Some characters may not be able to punish this move but c.M is a better pressure option anyway. Leads to great damage should it counterhit."
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
  description: "Combo filler midscreen, but not much besides that. You can use it as an ender in the corner if you don't have any Hard Knockdown tools available, as the juggle height will typically still leave you plus after you cancel into Thunder or Summon Dragon."
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
  description: "Combo filler midscreen, but not much besides that. You can use it as an ender in the corner if you don't have any Hard Knockdown tools available, as the juggle height will typically still leave you plus after you cancel into Thunder or Summon Dragon."
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
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+3',
  clash: '2',
  motion: ['l'],
  description: "Ranged anti-air and punish normal.\nDecent range normal can cancel into most of her moves and SSBA. This will punish things like Gran 214L and lead to a knockdown."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '9',
  active: '5',
  recovery: '16',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "Zooey's main poking normal.\nAll things considered, this is a pretty good poke. It combos into all of her knockdown enders and can be made safe and even plus at some distances with L Summon Dragon."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '5',
  recovery: '19',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '+5',
  clash: '4',
  motion: ['h'],
  description: "Shorter than f.M.\nGood counterpoking normal due to a slight step back during startup. Deals high damage and combos into M Spinning Slash for a bit of extra damage."
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
  description: "Plus on block low.\nZooey's other plus on block normal. Unlike c.L, this has no distance requirement and hits low, making it a more useful pressure tool."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '4',
  recovery: '14',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Stops rolls where f.M does not.\nNot actually a low, but stops low approaches and rolls where f.M would lose. Combos into all of the same options while also starting up a frame faster. Zooey can't actually use her 2M as a crouch confirm from 2L, but it will still frame trap due to its Clash level."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '5',
  recovery: '24',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "5U cancels builds Wyvern meter and cut recovery.\nZooey's main anti-air. Leads to devastating damage and a setup with an air CH and has a high hitbox, but is a little slow to come out."
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
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Easy hard knockdown ender.\nUseful as an ender to set up her Thunder okizeme. It has less range than it looks, but it can low-profile some reversals if it's used as a meaty. Weirdly enough, this move is faster than her 2M and makes for a highly rewarding crouch confirm."
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
  description: "Active until landing.\nZooey's fastest air normal. It has a high hitbox but is otherwise pretty unremarkable."
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
  description: "Zooey's crossup button.\nDoes what it looks like on the tin. Use this if you want a left/right as it hits on both sides."
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
  clash: '3',
  motion: ['h'],
  description: "Good downwards hitbox.\nThis is Zooey's highest-damage jump-in, making it exceptional for things like punishing bad fireballs."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '7', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
  description: "Combo tool.\nLaunches on hit.\nWallbounces on counterhit.\nFunctions like Sol Badguy's j.D from Guilty Gear in that it recovers mid-air if it hits as early as possible after rising, allowing you to link another j.U while falling. Sadly, it launches at a shallow enough angle that you can usually get two j.U's in a combo before the opponent is too low for any more."
};

// unique action
const lv1U = { 
  moveName: 'Convergence', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '18-363', 
  recovery: '5', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Minimum 5U charge duration is 23 frames total and gains 8.5% Dragon Gauge\nEarliest The Last Wish cancel from 5U is on frame 16 (Total startup: 20)\nHolding Convergence will recharge Zooey's Dragon Gauge. The Last Wish (press 6L/M/H while charging) has strike invincibility and one hit of projectile clash, and will also charge 50% of the Dragon Gauge on hit.\nWhile Lyrn is active or in cooldown, 5U charge speed is halved and The Last Wish on hit only charges for 16.7%. Exact values for Dragon Gauge can be found in Zooey's Frame Data page."
};
const lv2U = { 
  moveName: 'The Last Wish', 
  altName: '5U -> 6L/M/H', 
  damage: '700', 
  guard: 'Mid', 
  startup: '5', 
  active: '8', 
  recovery: '31', 
  onblock: '-20', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['u', '6', 'l'],
  description: "Minimum 5U charge duration is 23 frames total and gains 8.5% Dragon Gauge\nEarliest The Last Wish cancel from 5U is on frame 16 (Total startup: 20)\nHolding Convergence will recharge Zooey's Dragon Gauge. The Last Wish (press 6L/M/H while charging) has strike invincibility and one hit of projectile clash, and will also charge 50% of the Dragon Gauge on hit.\nWhile Lyrn is active or in cooldown, 5U charge speed is halved and The Last Wish on hit only charges for 16.7%. Exact values for Dragon Gauge can be found in Zooey's Frame Data page."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+40)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Situationally can lead to a combo.\nThunder will not allow for a combo.\nZooey can combo off her forward throw in the corner with H Summon Dragon, making this throw significantly scarier than most. Even if she doesn't get a combo, hard knockdowns are absolutely necessary for Zooey to get her game going."
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
  description: "Situationally can lead to a combo.\nThunder will not allow for a combo.\nZooey can combo off her forward throw in the corner with H Summon Dragon, making this throw significantly scarier than most. Even if she doesn't get a combo, hard knockdowns are absolutely necessary for Zooey to get her game going."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+45)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Very situationally can lead to a combo.\nThis throw can also be picked up after like her ground throw, but it's much harder due to the natural variance in timing of it being an airthrow. The hard knockdown will allow for Thunder or Summon Dragon, but it may not be perfectly meaty."
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
  description: "Situationally can lead to a combo.\nZooey performs a short hop before hitting the opponent on the head with her sword. Has exceptional range for a Universal Overhead. Just like her throws, Zooey can set up Summon Dragon and use this in between lasers for a perfectly safe overhead. She can also use a negative edge Thunder release to make it plus on block or to start a combo on hit."
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
  moveName: 'Immortal Thrust', 
  altName: '236L', 
  damage: '700', 
  guard: 'All', 
  startup: '16', 
  active: '35 (Fireball)', 
  recovery: '45 (Entire move)', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: 'KD',
  clash: 'KD',
  motion: ['236', 'l', 'or', 'a'],
  description: "Zooey calls Lyrn to perform one of three actions. Each action takes a certain amount of Zooey's Dragon Gauge, and can be done for as long as the gauge is not empty. Lyrn will despawn once the gauge is fully depleted and go on 12 second cooldown. All three of these specials will set Lyrn in place wherever he stops for about three seconds. Afterwards, Lyrn returns to float by Zooey's side. While set or floating by Zooey, Lyrn cannot be hit.\nCosts 6.66% of the Dragon meter.\nExtremely fast projectile.\nAlways teleports Lyrn to Zooey's position before launching.\nClashes with other projectiles and repositions Lyrn. Immortal Thrust has amazing frame advantage for a projectile and will usually be plus at Zooey's maximum poking range."
};
const mFireball = { 
  moveName: 'M Summon Dragon', 
  altName: '236M', 
  damage: '300, 500x2', 
  guard: 'All', 
  startup: '32', 
  active: '5,6,3', 
  recovery: '5', 
  onblock: '+16', 
  onhit: 'KD (+60)',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Zooey calls Lyrn to perform one of three actions. Each action takes a certain amount of Zooey's Dragon Gauge, and can be done for as long as the gauge is not empty. Lyrn will despawn once the gauge is fully depleted and go on 12 second cooldown. All three of these specials will set Lyrn in place wherever he stops for about three seconds. Afterwards, Lyrn returns to float by Zooey's side. While set or floating by Zooey, Lyrn cannot be hit.\nCosts 12.5% of the Dragon meter.\nLaunches on hit, allowing for juggles.\nActivates at Lyrn's position unless Zooey is closer.\nLyrn will also teleport to Zooey if he is behind the opponent and farther than half screen.\nWill correct for the corner so the entire move can connect.\nEven though the startup is 34 frames, Zooey cannot move until frame 50.\nWhile Sweeping Beam is better for mixups, Heavy Breath is best used midscreen after Bisection. If the opponent doesn't have a reversal or chooses not to, Zooey becomes very plus. If they do reversal, Zooey will be far enough away that it should whiff."
};
const hFireball = { 
  moveName: 'H Summon Dragon', 
  altName: '236H', 
  damage: '160x5, 120x8', 
  guard: 'All', 
  startup: '71', 
  active: '3x5(32)3x8', 
  recovery: '44 (Entire move)', 
  onblock: '-',
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Zooey calls Lyrn to perform one of three actions. Each action takes a certain amount of Zooey's Dragon Gauge, and can be done for as long as the gauge is not empty. Lyrn will despawn once the gauge is fully depleted and go on 12 second cooldown. All three of these specials will set Lyrn in place wherever he stops for about three seconds. Afterwards, Lyrn returns to float by Zooey's side. While set or floating by Zooey, Lyrn cannot be hit.\nCosts 25% of the Dragon meter.\nActivates at Lyrn's position unless Zooey is closer.\nLyrn will also teleport to Zooey if he is behind the opponent and farther than half screen.\nWill correct for the corner so the entire move can connect.\nCannot move until frame 44.\nWhile Sweeping Beam is slow, it is by far Zooey's most powerful summon. It persists if Zooey blocks, but will go away if Zooey is hit or techs a throw. Sweeping Beam allows for combos from Zooey's Throw and Universal Overhead, as well as stronger combos off her low options like 2L or 2U. It also has some usage to stop approaches, but the beam doesn't quite hit at full screen."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Aerial Spinning Slash', 
  altName: '623L', 
  damage: '250x4', 
  guard: 'All', 
  startup: '27', 
  active: '4x3', 
  recovery: '13', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Value in [] is when the rising portion whiffs.\nZooey leaps into the air before crashing down to the ground. The L version has no hitbox while rising and is generally useless. The M and H versions make for good anti-airs, as they have some Head invincibility and combo into the descending hits on air connect. The H version will also lead to a hard knockdown, providing an alternate to 214H when it's on cooldown."
};
const mUppercut = { 
  moveName: 'M Aerial Spinning Slash', 
  altName: '623M', 
  damage: '300, 200x5', 
  guard: 'All', 
  startup: '14', 
  active: '6(16)2x6', 
  recovery: '13', 
  onblock: '0', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Value in [] is when the rising portion whiffs.\nZooey leaps into the air before crashing down to the ground. The L version has no hitbox while rising and is generally useless. The M and H versions make for good anti-airs, as they have some Head invincibility and combo into the descending hits on air connect. The H version will also lead to a hard knockdown, providing an alternate to 214H when it's on cooldown."
};
const hUppercut = { 
  moveName: 'H Aerial Spinning Slash', 
  altName: '623H', 
  damage: '300, 200x5', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '11(13)2x6', 
  recovery: '11', 
  onblock: '+2', 
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+52)',
  clash: '3',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Value in [] is when the rising portion whiffs.\nZooey leaps into the air before crashing down to the ground. The L version has no hitbox while rising and is generally useless. The M and H versions make for good anti-airs, as they have some Head invincibility and combo into the descending hits on air connect. The H version will also lead to a hard knockdown, providing an alternate to 214H when it's on cooldown."
};

// rekka
const lRekka = { 
  moveName: 'L Spinning Slash', 
  altName: '214L', 
  damage: '700', 
  guard: 'Mid', 
  startup: '15', 
  active: '4', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Zooey moves forward and swings her blade. The distance covered changes depending on the button pressed; L moves the least distance, M and H move the same distance. Chains into two different followups, allowing for confirms into knockdown or frame traps.\nGo-to version\nCombos from all buttons except c.L and 2L (even on CH)."
};
const followupRekka = { 
  moveName: 'Ray Strike', 
  altName: '214X -> L/M/H', 
  damage: '400', 
  guard: 'Low', 
  startup: '18', 
  active: '6', 
  recovery: '19', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Combos naturally from all three versions of Spinning Slash. The followup itself does not change regardless of which attack button was used, unless it was used from the H version where it will grant a hard knockdown. There will always be a gap between Spinning Slash and Ray Strike. Even though this hits low, there's no good reason to use it instead of Bisection."
};
const followupRekkaForward = { 
  moveName: 'Bisection', 
  altName: '214X -> 6L/M/H', 
  damage: '600', 
  guard: 'Mid', 
  startup: '19', 
  active: '6', 
  recovery: '24', 
  onblock: '-11', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '4', 'a'],
  description: "Combos from all versions of Spinning Slash. There will always be a gap between Spinning Slash and Bisection. The followup itself does not change regardless of which attack button was used, unless it was used from the H version. The H version launches high enough to link a c.M in the corner. Deals more damage than the other follow-up and has more advantage on hit, outclassing it entirely."
};
const mRekka = { 
  moveName: 'M Spinning Slash', 
  altName: '214M', 
  damage: '800', 
  guard: 'Mid', 
  startup: '19', 
  active: '4', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a', 'm'],
  description: "Zooey moves forward and swings her blade. The distance covered changes depending on the button pressed; L moves the least distance, M and H move the same distance. Chains into two different followups, allowing for confirms into knockdown or frame traps.\nCounterhit/crouch confirm.\nCan only be cancelled into for a natural combo from c.H, f.H, and 2H. It can be cancelled into for a natural combo from c.M, f.M, and 2M on CH or if it hits a crouching opponent, and it can be cancelled into for a natural combo from f.L if the attack hits crouching and is a CH."
};
const hRekka = { 
  moveName: 'H Spinning Slash', 
  altName: '214H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '15', 
  active: '4', 
  recovery: '17', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '4',
  motion: ['214', 'h', 'or', '4', 'a', 'h'],
  description: "Zooey moves forward and swings her blade. The distance covered changes depending on the button pressed; L moves the least distance, M and H move the same distance. Chains into two different followups, allowing for confirms into knockdown or frame traps.\nBest of both worlds.\nLinks to c.H on counter hit.\nUse this if you're lazy or want the knockdown/launch."
};

// trap
const lTrap = {
  moveName: 'L Thunder', 
  altName: '22L', 
  damage: '400, 700', 
  guard: 'Mid, All', 
  startup: '15', 
  active: '9', 
  recovery: '25', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '1',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Earliest possible lightning happens after the 15 frame startup of the sword hit and the 19 frame startup of the lightning itself (34).\nc.XXX > 22L is -2 on block and +2 on hit.\nZooey strikes the ground with her blade and calls down lightning in one of three areas. The blade strike itself has a hitbox. The strike point for the lightning depends on which button was pressed, marked by a glowing group of sparks on the ground. The minimum range on the L and M versions makes the lightning summon harmlessly offscreen when done in the corner.\nThe lightning strike itself can be delayed by holding L, M, H, or the Skill Button and will fall shortly after Zooey is no longer holding an attack button (except U) or after about three seconds of holding, allowing Zooey to coordinate with the strikes to extend her pressure. The button(s) being held can be switched freely without the lightning striking as long as at least one of the attack buttons is held.\nL version calls lightning closest to Zooey.\nGeneral purpose blockstring ender."
}
const mTrap = {
  moveName: 'M Thunder', 
  altName: '22M', 
  damage: '400, 700', 
  guard: 'Mid, All', 
  startup: '15', 
  active: '9', 
  recovery: '25', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '1',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Earliest possible lightning happens after the 15 frame startup of the sword hit and the 19 frame startup of the lightning itself (34).\nc.XXX > 22L is -2 on block and +2 on hit.\nZooey strikes the ground with her blade and calls down lightning in one of three areas. The blade strike itself has a hitbox. The strike point for the lightning depends on which button was pressed, marked by a glowing group of sparks on the ground. The minimum range on the L and M versions makes the lightning summon harmlessly offscreen when done in the corner.\nThe lightning strike itself can be delayed by holding L, M, H, or the Skill Button and will fall shortly after Zooey is no longer holding an attack button (except U) or after about three seconds of holding, allowing Zooey to coordinate with the strikes to extend her pressure. The button(s) being held can be switched freely without the lightning striking as long as at least one of the attack buttons is held.\nCalls lightning farther out.\nWeirdly enough, M version has the longest range, going out further than the H version."
}
const hTrap = {
  moveName: 'H Thunder', 
  altName: '22H', 
  damage: '400, 350x3', 
  guard: 'Mid, All', 
  startup: '15', 
  active: '9', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '1',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Earliest possible lightning happens after the 15 frame startup of the sword hit and the 19 frame startup of the lightning itself (34).\nc.XXX > 22L is -2 on block and +2 on hit.\nZooey strikes the ground with her blade and calls down lightning in one of three areas. The blade strike itself has a hitbox. The strike point for the lightning depends on which button was pressed, marked by a glowing group of sparks on the ground. The minimum range on the L and M versions makes the lightning summon harmlessly offscreen when done in the corner.\nThe lightning strike itself can be delayed by holding L, M, H, or the Skill Button and will fall shortly after Zooey is no longer holding an attack button (except U) or after about three seconds of holding, allowing Zooey to coordinate with the strikes to extend her pressure. The button(s) being held can be switched freely without the lightning striking as long as at least one of the attack buttons is held.\nHits multiple times, starting close to Zooey and traveling outwards.\nPushes opponent away.\nCovers the area between the front of Zooey and the area just slightly before M lightning range."
}

const lTrapAir = {
  moveName: 'L Thunder (Air)', 
  altName: 'j22L', 
  damage: '700', 
  guard: 'All', 
  startup: '22', 
  active: '9', 
  recovery: '10 (On landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', 'a'],
  description: "Zooey fires lightning down at an angle. The L version fires the projectile close to her while the M version fires it further away. The H version fires both at once, and also goes even further than M version. Zooey's momentum is stalled while using this, so it is very useful as anti-anti-air or as a tool to keep the opponent on the ground. The H version will only hard knockdown on airborne opponents."
}
const mTrapAir = {
  moveName: 'M Thunder (Air)', 
  altName: 'j22M', 
  damage: '700', 
  guard: 'All', 
  startup: '22', 
  active: '9', 
  recovery: '10 (On landing)', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', 'a', 'm'],
  description: "Zooey fires lightning down at an angle. The L version fires the projectile close to her while the M version fires it further away. The H version fires both at once, and also goes even further than M version. Zooey's momentum is stalled while using this, so it is very useful as anti-anti-air or as a tool to keep the opponent on the ground. The H version will only hard knockdown on airborne opponents."
}
const hTrapAir = {
  moveName: 'H Thunder (Air)', 
  altName: 'j22H', 
  damage: '700', 
  guard: 'All', 
  startup: '22', 
  active: '13', 
  recovery: '10 (On landing)', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'h', 'or', 'a', 'h'],
  description: "Zooey fires lightning down at an angle. The L version fires the projectile close to her while the M version fires it further away. The H version fires both at once, and also goes even further than M version. Zooey's momentum is stalled while using this, so it is very useful as anti-anti-air or as a tool to keep the opponent on the ground. The H version will only hard knockdown on airborne opponents."
}


// skybound art
const sba = { 
  moveName: 'Gamma Ray', 
  altName: '236236H', 
  damage: '3500', 
  guard: 'Mid', 
  startup: '12', 
  active: '6', 
  recovery: '40', 
  onblock: '-27', 
  onhit: 'HKD (S:+36, T:+46)',
  oncounterhit: 'HKD (S:+36, T:+46)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Advances forwards after superflash with a tall hitbox.\nZooey's generic combo ender super, but this time with a Gundam reference. Gives a good knockdown for a setup or a safejump."
};
const ssba = { 
  moveName: 'Catastrophe', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '15', 
  active: '15', 
  recovery: '61', 
  onblock: '-25', 
  onhit: 'HKD (S:+36, T:+46)',
  oncounterhit: 'HKD (S:+36, T:+46)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Unusually high blockstun.\nZooey reveals her true form as the Grand Order, then rushing forward and hit the opponent. Very slow but deals good damage as a combo ender"
};


export const zooeyInfo = [
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
  followupRekka,
  followupRekkaForward,
  mRekka,
  hRekka,
  lTrap,
  mTrap,
  hTrap,
  lTrapAir,
  mTrapAir,
  hTrapAir,
  sba,
  ssba
]