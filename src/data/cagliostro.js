// FINAL 

const general = { char: "Cagliostro", health: '10000', prejump: '4F', backdash: '22F' }

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
  description: "The Granblue c.L™. Use in pressure."
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
  description: "More minus than average at -3 instead of 0.\nThe Granblue c.M™. Also used in pressure and combos, especially as a frametrap."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700, 100x3',
  guard: 'Mid',
  startup: '9',
  active: '2x4',
  recovery: '20',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
  description: "Unique 4-hitting c.H that can used as a situational anti-air. Causes troubles mid combo as it pushes the opponent fairly high up, but can be useful to allow Cagliostro to combo from 214H in the corner if this attack lands on an airborne target."
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
  description: "An autocombo like any other. Used to extend confirms, get closer or generate extra height in juggles."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '280',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "An autocombo like any other. Used to extend confirms, get closer or generate extra height in juggles."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+3',
  clash: '2',
  motion: ['l'],
  description: "A far L with decent range. Good for converting off L pressure."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '15',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "Longest range normal poke. Usually gets no conversions on hit, but using Cagliostro's varied special cancels between 5U, Trap, Spear or Teleport can still keep the opponent guessing and generate advantage."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '6',
  recovery: '18',
  onblock: '-5',
  onhit: '-1',
  oncounterhit: '-1',
  clash: '4',
  motion: ['h'],
  description: "Less minus than f.M but way worse on whiff.\nImportant poke and your whiff punish of choice. Less range and higher recovery than f.M, but has high hitstun and three hits, allowing for easy 1-hit confirms into knockdown at nearly any range."
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
  description: "A Granblue 2L - a plus on block low with moderate range that chains into itself. This is Cagliostro's only low outside of sweep, and the cornerstone of her pressure game."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '16',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['2', 'm'],
  description: "Similar to 5M, with less range but less startup, less recovery and a lower to the ground hitbox. Not a low, but stuffs rolls."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '-1',
  clash: '4',
  motion: ['2', 'h'],
  description: "Average anti-air with high reward on anti-air CHs. Hits slightly behind Cagliostro."
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
  description: "The Granblue Sweep™. A low that causes hard knockdown on hit. Useful combo ender that gets you a safejump and trap setup. Can also be used in neutral to clip the shins of walk-happy opponents."
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
  description: "Fastest air attack. Can be used for f-shiki (fuzzy) setups as it hits the standing guard of some characters on the way up."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'High', 
  startup: '6', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
  description: "Has the longest range of all her air buttons, making it Cagliostro's go-to air to air."
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
  description: "Cagliostro's jump in tool."
};

const jU = { 
  moveName: 'Collapse (Conjure)', 
  altName: 'jU', 
  damage: '500', 
  guard: 'All', 
  startup: '12', 
  active: '4', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '1',
  motion: ['u'],
  description: "Cagliostro poses, charging up a rock for as long as you hold U. The rock levels up once with the initial press, and then approximately once every 30 frames while U is held.\n5U can absorb one projectile hit while it is deployed, and the rock comes out fast enough to absorb fireballs in neutral on reaction. The rock also has an attack hitbox when it initially spawns. This can be used to push yourself out safely in blockstrings.\nThe air version stalls her air momentum almost completely while it is deployed."
};

const s5U = { 
  moveName: 'Collapse (Conjure) (Air)', 
  altName: 'jU', 
  damage: '500', 
  guard: 'All', 
  startup: '11', 
  active: '4', 
  recovery: '6 (after landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
  description: "Cagliostro poses, charging up a rock for as long as you hold U. The rock levels up once with the initial press, and then approximately once every 30 frames while U is held.\n5U can absorb one projectile hit while it is deployed, and the rock comes out fast enough to absorb fireballs in neutral on reaction. The rock also has an attack hitbox when it initially spawns. This can be used to push yourself out safely in blockstrings.\nThe air version stalls her air momentum almost completely while it is deployed."
};

// unique action
const lv1U = { 
  moveName: 'Collapse (Fire) Lv1', 
  altName: '6U Lv1', 
  damage: '400', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '-8', 
  onhit: '-4',
  oncounterhit: '-2',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv2U = { 
  moveName: 'Collapse (Fire) Lv2', 
  altName: '6U Lv2', 
  damage: '600', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '0', 
  onhit: '+4',
  oncounterhit: '+4',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv3U = { 
  moveName: 'Collapse (Fire) Lv3', 
  altName: '6U Lv3', 
  damage: '700', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv4U = { 
  moveName: 'Collapse (Fire) Lv4', 
  altName: '6U Lv4', 
  damage: '800', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)',  
  onblock: '+4', 
  onhit: '+8',
  oncounterhit: '+8',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv5U = { 
  moveName: 'Collapse (Fire) Lv5', 
  altName: '6U Lv5', 
  damage: '1000', 
  guard: 'All', 
  startup: '18', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '+7', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};

const airLv1U = { 
  moveName: 'Air Collapse (Fire) Lv1', 
  altName: '6U Lv1', 
  damage: '400', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const airLv2U = { 
  moveName: 'Air Collapse (Fire) Lv2', 
  altName: '6U Lv2', 
  damage: '600', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const airLv3U = { 
  moveName: 'Air Collapse (Fire) Lv3', 
  altName: '6U Lv3', 
  damage: '700', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const airLv4U = { 
  moveName: 'Air Collapse (Fire) Lv4', 
  altName: '6U Lv4', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const airLv5U = { 
  moveName: 'Air Collapse (Fire) Lv5', 
  altName: '6U Lv5', 
  damage: '1000', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '9 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};


const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+36), +24 on delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "A regular throw that becomes very scary thanks to Cagliostro's traps. If an opponent is thrown into an active ground or air trap, it triggers, allowing for strong combo conversions."
};

const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+42), +24 on delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "A regular throw that becomes very scary thanks to Cagliostro's traps. If an opponent is thrown into an active ground or air trap, it triggers, allowing for strong combo conversions."
};

const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '6 (After landing)', 
  onblock: '-', 
  onhit: 'HKD (+44)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Spikes the opponent into the ground. Like ground throw, allows for conversions if the opponent is launched into a trap this way, although this will not come up as often."
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
  description: "Regular universal overhead that can lead to trap conversions if a ground trap is behind the opponent. Hops backwards after the hit, limiting CH conversion quality at times. Doesn't hit nearly as far up as it looks like."
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
const lTrap = { 
  moveName: 'L Mehen', 
  altName: '236L', 
  damage: '400', 
  guard: 'All', 
  startup: '50 ⇒ 589', 
  active: '6', 
  recovery: '33 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Cagliostro's character defining tool, with neutral, setplay and pressure uses as long as you understand its limitations. Performing this special will cause Cagliostro to place a trap in the following locations:\n236L: Directly at Cagliostro's feet\n236M: A character length and a half in front of Cagliostro\nj.236L: Approximately a character length away from Cagliostro\nj.236M: About two character lengths away from Cagliostro\nThe H version of these places both traps at the same time with the startup of the L version. They also are placed faster, have unlimited untechable time and after air H version Cagliostro retains her air options.\nWhen used in neutral, traps force the opponent to hit them with a normal or move around them. You want to exploit that opening with your normals. They are usually ineffective against advancing specials, however.\nAs a setplay tool:\nGround traps beneath the opponent will trigger on their wakeup with a short delay. They will not protect you from reversals, but still give you free pressure. When combined with a safejump from 2U 236M forward jump H, you get f-shiki setups with rejump jL.\nGround traps behind the opponent will trigger as soon as your pressure pushes your opponent into the trap, or give you a throw conversion instead.\nAir traps above the opponent will prevent the opponent from jumping out, and gives Cagliostro a conversion of throw. This massively increases the reward of throws while also removing its biggest counterplay.\nExtremely easy to convert from if the opponent gets caught or is otherwise hit into a trap with another one of your moves. Hitting an opponent into an air trap allows you to loop air traps, which doesn't do much damage but is great at stalling for cooldowns.\nUnusually for a Granblue tool, non-EX traps have nearly no cooldown even with easy input."
};
const mTrap = { 
  moveName: 'M Mehen', 
  altName: '236M', 
  damage: '400', 
  guard: 'All', 
  startup: '50 ⇒ 589', 
  active: '6', 
  recovery: '33 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Cagliostro's character defining tool, with neutral, setplay and pressure uses as long as you understand its limitations. Performing this special will cause Cagliostro to place a trap in the following locations:\n236L: Directly at Cagliostro's feet\n236M: A character length and a half in front of Cagliostro\nj.236L: Approximately a character length away from Cagliostro\nj.236M: About two character lengths away from Cagliostro\nThe H version of these places both traps at the same time with the startup of the L version. They also are placed faster, have unlimited untechable time and after air H version Cagliostro retains her air options.\nWhen used in neutral, traps force the opponent to hit them with a normal or move around them. You want to exploit that opening with your normals. They are usually ineffective against advancing specials, however.\nAs a setplay tool:\nGround traps beneath the opponent will trigger on their wakeup with a short delay. They will not protect you from reversals, but still give you free pressure. When combined with a safejump from 2U 236M forward jump H, you get f-shiki setups with rejump jL.\nGround traps behind the opponent will trigger as soon as your pressure pushes your opponent into the trap, or give you a throw conversion instead.\nAir traps above the opponent will prevent the opponent from jumping out, and gives Cagliostro a conversion of throw. This massively increases the reward of throws while also removing its biggest counterplay.\nExtremely easy to convert from if the opponent gets caught or is otherwise hit into a trap with another one of your moves. Hitting an opponent into an air trap allows you to loop air traps, which doesn't do much damage but is great at stalling for cooldowns.\nUnusually for a Granblue tool, non-EX traps have nearly no cooldown even with easy input."
};
const hTrap = { 
  moveName: 'H Mehen', 
  altName: '236H', 
  damage: '400x2', 
  guard: 'All', 
  startup: '38 ⇒ 589', 
  active: '6', 
  recovery: '33 (Entire move)',
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Cagliostro's character defining tool, with neutral, setplay and pressure uses as long as you understand its limitations. Performing this special will cause Cagliostro to place a trap in the following locations:\n236L: Directly at Cagliostro's feet\n236M: A character length and a half in front of Cagliostro\nj.236L: Approximately a character length away from Cagliostro\nj.236M: About two character lengths away from Cagliostro\nThe H version of these places both traps at the same time with the startup of the L version. They also are placed faster, have unlimited untechable time and after air H version Cagliostro retains her air options.\nWhen used in neutral, traps force the opponent to hit them with a normal or move around them. You want to exploit that opening with your normals. They are usually ineffective against advancing specials, however.\nAs a setplay tool:\nGround traps beneath the opponent will trigger on their wakeup with a short delay. They will not protect you from reversals, but still give you free pressure. When combined with a safejump from 2U 236M forward jump H, you get f-shiki setups with rejump jL.\nGround traps behind the opponent will trigger as soon as your pressure pushes your opponent into the trap, or give you a throw conversion instead.\nAir traps above the opponent will prevent the opponent from jumping out, and gives Cagliostro a conversion of throw. This massively increases the reward of throws while also removing its biggest counterplay.\nExtremely easy to convert from if the opponent gets caught or is otherwise hit into a trap with another one of your moves. Hitting an opponent into an air trap allows you to loop air traps, which doesn't do much damage but is great at stalling for cooldowns.\nUnusually for a Granblue tool, non-EX traps have nearly no cooldown even with easy input."
};

const lTrapAir = { 
  moveName: 'Air L Mehen', 
  altName: '236L', 
  damage: '400', 
  guard: 'All', 
  startup: '39 ⇒ 578', 
  active: '6', 
  recovery: '4 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Cagliostro's character defining tool, with neutral, setplay and pressure uses as long as you understand its limitations. Performing this special will cause Cagliostro to place a trap in the following locations:\n236L: Directly at Cagliostro's feet\n236M: A character length and a half in front of Cagliostro\nj.236L: Approximately a character length away from Cagliostro\nj.236M: About two character lengths away from Cagliostro\nThe H version of these places both traps at the same time with the startup of the L version. They also are placed faster, have unlimited untechable time and after air H version Cagliostro retains her air options.\nWhen used in neutral, traps force the opponent to hit them with a normal or move around them. You want to exploit that opening with your normals. They are usually ineffective against advancing specials, however.\nAs a setplay tool:\nGround traps beneath the opponent will trigger on their wakeup with a short delay. They will not protect you from reversals, but still give you free pressure. When combined with a safejump from 2U 236M forward jump H, you get f-shiki setups with rejump jL.\nGround traps behind the opponent will trigger as soon as your pressure pushes your opponent into the trap, or give you a throw conversion instead.\nAir traps above the opponent will prevent the opponent from jumping out, and gives Cagliostro a conversion of throw. This massively increases the reward of throws while also removing its biggest counterplay.\nExtremely easy to convert from if the opponent gets caught or is otherwise hit into a trap with another one of your moves. Hitting an opponent into an air trap allows you to loop air traps, which doesn't do much damage but is great at stalling for cooldowns.\nUnusually for a Granblue tool, non-EX traps have nearly no cooldown even with easy input."
};
const mTrapAir = { 
  moveName: 'Air M Mehen', 
  altName: '236M', 
  damage: '400', 
  guard: 'All', 
  startup: '39 ⇒ 578', 
  active: '6', 
  recovery: '4 (After landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Cagliostro's character defining tool, with neutral, setplay and pressure uses as long as you understand its limitations. Performing this special will cause Cagliostro to place a trap in the following locations:\n236L: Directly at Cagliostro's feet\n236M: A character length and a half in front of Cagliostro\nj.236L: Approximately a character length away from Cagliostro\nj.236M: About two character lengths away from Cagliostro\nThe H version of these places both traps at the same time with the startup of the L version. They also are placed faster, have unlimited untechable time and after air H version Cagliostro retains her air options.\nWhen used in neutral, traps force the opponent to hit them with a normal or move around them. You want to exploit that opening with your normals. They are usually ineffective against advancing specials, however.\nAs a setplay tool:\nGround traps beneath the opponent will trigger on their wakeup with a short delay. They will not protect you from reversals, but still give you free pressure. When combined with a safejump from 2U 236M forward jump H, you get f-shiki setups with rejump jL.\nGround traps behind the opponent will trigger as soon as your pressure pushes your opponent into the trap, or give you a throw conversion instead.\nAir traps above the opponent will prevent the opponent from jumping out, and gives Cagliostro a conversion of throw. This massively increases the reward of throws while also removing its biggest counterplay.\nExtremely easy to convert from if the opponent gets caught or is otherwise hit into a trap with another one of your moves. Hitting an opponent into an air trap allows you to loop air traps, which doesn't do much damage but is great at stalling for cooldowns.\nUnusually for a Granblue tool, non-EX traps have nearly no cooldown even with easy input."
};
const hTrapAir = { 
  moveName: 'Air H Mehen', 
  altName: '236H', 
  damage: '400x2', 
  guard: 'All', 
  startup: '39 ⇒ 578', 
  active: '6', 
  recovery: '4 (After landing)',
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Cagliostro's character defining tool, with neutral, setplay and pressure uses as long as you understand its limitations. Performing this special will cause Cagliostro to place a trap in the following locations:\n236L: Directly at Cagliostro's feet\n236M: A character length and a half in front of Cagliostro\nj.236L: Approximately a character length away from Cagliostro\nj.236M: About two character lengths away from Cagliostro\nThe H version of these places both traps at the same time with the startup of the L version. They also are placed faster, have unlimited untechable time and after air H version Cagliostro retains her air options.\nWhen used in neutral, traps force the opponent to hit them with a normal or move around them. You want to exploit that opening with your normals. They are usually ineffective against advancing specials, however.\nAs a setplay tool:\nGround traps beneath the opponent will trigger on their wakeup with a short delay. They will not protect you from reversals, but still give you free pressure. When combined with a safejump from 2U 236M forward jump H, you get f-shiki setups with rejump jL.\nGround traps behind the opponent will trigger as soon as your pressure pushes your opponent into the trap, or give you a throw conversion instead.\nAir traps above the opponent will prevent the opponent from jumping out, and gives Cagliostro a conversion of throw. This massively increases the reward of throws while also removing its biggest counterplay.\nExtremely easy to convert from if the opponent gets caught or is otherwise hit into a trap with another one of your moves. Hitting an opponent into an air trap allows you to loop air traps, which doesn't do much damage but is great at stalling for cooldowns.\nUnusually for a Granblue tool, non-EX traps have nearly no cooldown even with easy input."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Calculated', 
  altName: '623L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '20', 
  active: '5', 
  recovery: '27', 
  onblock: '-5', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Cagliostro poses, causing a spear to erupt from the ground. A zoning and combo tool that synergizes well with traps. All versions are slow and don't track fast-moving opponents well, but will launch the opponent on hit and lead to high damage or free pressure when knocking opponents into traps.\nTracks from point blank to about one character width away.\nHits the opponent away from Cagliostro."
};
const mUppercut = { 
  moveName: 'M Calculated', 
  altName: '623M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '24', 
  active: '5', 
  recovery: '26', 
  onblock: '-4', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Cagliostro poses, causing a spear to erupt from the ground. A zoning and combo tool that synergizes well with traps. All versions are slow and don't track fast-moving opponents well, but will launch the opponent on hit and lead to high damage or free pressure when knocking opponents into traps.\nTracks from about one character width away to about 3/4 screen away\nHits the opponent towards Cagliostro.\nThis also turns the opponent around, so the opponent can back-roll towards Cagliostro. Trades favorably with fireballs and other zoning attempts."
};
const hUppercut = { 
  moveName: 'H Calculated', 
  altName: '623H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '2(0', 
  active: '5', 
  recovery: '27', 
  onblock: '-4', 
  onhit: 'HKD (+64)',
  oncounterhit: 'HKD (+70)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Cagliostro poses, causing a spear to erupt from the ground. A zoning and combo tool that synergizes well with traps. All versions are slow and don't track fast-moving opponents well, but will launch the opponent on hit and lead to high damage or free pressure when knocking opponents into traps.\nTracks from point blank to about half-screen.\nHits the opponent away from Cagliostro.\nEX spear allows for corner conversions even without traps."
};

// rekka
const lRekka = { 
  moveName: 'L Alexandria', 
  altName: '214L', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '15', 
  active: '10', 
  recovery: '16', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Has a follow-up version of 214M that knocks down. \nGran dashes forward with a slash. Safest version of 214X at point blank. Can cancel into 214M on hit or block. On hit, 214L > 214M serves as his standard meterless combo ender. On block can be used to test your opponent's willingness to mash after 214L lest they risk a Counter Hit 214M. As of 2.0 Patch follow-up causes no Wall Bounce on Counter Hit, only knocks down."
};
const mRekka = { 
  moveName: 'M Alexandria', 
  altName: '214M', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '21', 
  active: '13', 
  recovery: '16', 
  onblock: '-12', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Does not knock down. \nGran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};
const hRekka = { 
  moveName: 'H Alexandria', 
  altName: '214H', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '12', 
  active: '13', 
  recovery: '16', 
  onblock: '-12', 
  onhit: 'HKD (+44)',
  oncounterhit: 'HKD (+48)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Wallbounces in the corner. \nGran's primary juggle starter. \nSimilar to 214M, but Gran dashes forward faster. Cannot be canceled into from 214L. Causes a wall bounce in the corner on hit regardless of counter hit, allowing for additional follow ups. Exercise caution as depending on the opponent's height when used, it can cause them to fall behind Gran after the wall bounce, possibly causing a side switch with yourself in the corner."
};

const lTeleport = {
  moveName: 'L Spare Body', 
  altName: '22L', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: 'Cagliostro creates a fake body and teleports somewhere. All versions of this move have some invuln while Cagliostro isn\'t on the screen, but none of them start at frame one. You can perform this move instantly in the air by performing it as 282X, 272X, or 292x, depending on if you want to do it out of a neutral, backward, or forward jump. Neither the M or H versions of this move will allow you to cross up the opponent if they are in the corner.\nCagliostro teleports backwards around backdash length.\nMainly used as a fakeout tool to bait the opponent into pressing something after using 22M.'
};

const mTeleport = {
  moveName: 'M Spare Body', 
  altName: '22M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '39 (Entire move)',  
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: 'Cagliostro creates a fake body and teleports somewhere. All versions of this move have some invuln while Cagliostro isn\'t on the screen, but none of them start at frame one. You can perform this move instantly in the air by performing it as 282X, 272X, or 292x, depending on if you want to do it out of a neutral, backward, or forward jump. Neither the M or H versions of this move will allow you to cross up the opponent if they are in the corner.\nCagliostro teleports a set distance forward.\nThis move can cross up depending on how close or far away the opponent is.'
};

const hTeleport = {
  moveName: 'H Spare Body', 
  altName: '22H', 
  damage: '1000', 
  guard: 'All', 
  startup: '13', 
  active: '5', 
  recovery: '19', 
  onblock: '+1', 
  onhit: 'HKD (+59)',
  oncounterhit: 'HKD (+63)',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: 'Cagliostro creates a fake body and teleports somewhere. All versions of this move have some invuln while Cagliostro isn\'t on the screen, but none of them start at frame one. You can perform this move instantly in the air by performing it as 282X, 272X, or 292x, depending on if you want to do it out of a neutral, backward, or forward jump. Neither the M or H versions of this move will allow you to cross up the opponent if they are in the corner.\nCagliostro performs a hit before teleporting forward, directly behind the opponent.\nThe hit has extremely short range, but is +1 on block and launches straight up on hit. Can also be used as a reversal-safe meaty.'
};

const lTeleportAir = {
  moveName: 'L Spare Body (Air)', 
  altName: '22L', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '34 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: 'Cagliostro creates a fake body and teleports somewhere. All versions of this move have some invuln while Cagliostro isn\'t on the screen, but none of them start at frame one. You can perform this move instantly in the air by performing it as 282X, 272X, or 292x, depending on if you want to do it out of a neutral, backward, or forward jump. Neither the M or H versions of this move will allow you to cross up the opponent if they are in the corner.\nCagliostro teleports backwards around backdash length.\nMainly used as a fakeout tool to bait the opponent into pressing something after using 22M.'
};

const mTeleportAir = {
  moveName: 'M Spare Body (Air)', 
  altName: '22M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '39 (Entire move)',  
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: 'Cagliostro creates a fake body and teleports somewhere. All versions of this move have some invuln while Cagliostro isn\'t on the screen, but none of them start at frame one. You can perform this move instantly in the air by performing it as 282X, 272X, or 292x, depending on if you want to do it out of a neutral, backward, or forward jump. Neither the M or H versions of this move will allow you to cross up the opponent if they are in the corner.\nCagliostro teleports a set distance forward.\nThis move can cross up depending on how close or far away the opponent is.'
};

const hTeleportAir = {
  moveName: 'H Spare Body (Air)', 
  altName: '22H', 
  damage: '1000', 
  guard: 'All', 
  startup: '13', 
  active: '5', 
  recovery: '17', 
  onblock: '+3', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: 'Cagliostro creates a fake body and teleports somewhere. All versions of this move have some invuln while Cagliostro isn\'t on the screen, but none of them start at frame one. You can perform this move instantly in the air by performing it as 282X, 272X, or 292x, depending on if you want to do it out of a neutral, backward, or forward jump. Neither the M or H versions of this move will allow you to cross up the opponent if they are in the corner.\nCagliostro performs a hit before teleporting forward, directly behind the opponent.\nThe hit has extremely short range, but is +1 on block and launches straight up on hit. Can also be used as a reversal-safe meaty.'
};

// skybound art
const sba = { 
  moveName: 'Ars Magna', 
  altName: '236236H', 
  damage: '2000, 300x5', 
  guard: 'All', 
  startup: '13', 
  active: '3x16 (48)', 
  recovery: '49', 
  onblock: '-27', 
  onhit: 'HKD (T:+45, S:+35)',
  oncounterhit: 'HKD (T:+45, S:+35)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Solid Skybound Art that shines as a conversion tool with long range and synergy with air traps.\nIf an air trap is placed appropriately, Cagliostro can hit the opponent into the trap from this super, allowing follow-ups for huge damage. If the opponent remains grounded or close to the ground in the corner, Cagliostro can get a much longer combo, leading to even more damage."
};
const ssba = { 
  moveName: 'Everything\'s Coming Up Cagliostro', 
  altName: '236236U', 
  damage: '4500', 
  guard: 'All', 
  startup: '13', 
  active: '3x6', 
  recovery: '48', 
  onblock: '-32', 
  onhit: 'HKD (T:+45, S:+40)',
  oncounterhit: 'HKD (T:+45, S:+40)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Cagliostro creates a landslide of gold on the floor in front of her that moves near full-screen, and then encases the opponent in gold if the move connects at close range. Safe on block if the opponent forgets to spot dodge.\nBecause the move travels nearly full-screen, you can use this to tack on some extra damage to random trap hits from just about anywhere, though because the hitbox is so low to the ground it can be difficult to convert off the air traps, possibly making the regular super preferable in those situations.\nThe range on the cinematic hitbox is rather small, meaning you're not likely to get the full animation and damage outside of the corner or auto combos."
};


export const cagInfo = [
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
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  airLv1U,
  airLv2U,
  airLv3U,
  airLv4U,
  airLv5U,
  groundThrow,
  backThrow,
  airThrow,
  uOverhead,
  tacticalRush,
  tacticalRushCancel,
  tacticalShift,
  overdriveActivation,
  lTrap,
  mTrap,
  hTrap,
  lTrapAir,
  mTrapAir,
  hTrapAir,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  hRekka,
  lTeleport,
  mTeleport,
  hTeleport,
  lTeleportAir,
  mTeleportAir,
  hTeleportAir,
  sba,
  ssba
]