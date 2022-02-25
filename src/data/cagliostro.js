// FINAL 

const general = { char: "Cagliostro", health: '10000', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'All',
  startup: '5',
  active: '3',
  recovery: '6',
  onblock: '2',
  onhit: '6',
  motion: ['l'],
  description: "The Granblue c.L™. Use in pressure."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '10',
  onblock: '0',
  onhit: '4',
  motion: ['m'],
  description: "More minus than average at -3 instead of 0.\nThe Granblue c.M™. Also used in pressure and combos, especially as a frametrap."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700, 100x3',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  motion: ['h'],
  description: "Unique 4-hitting c.H that can used as a situational anti-air. Causes troubles mid combo as it pushes the opponent fairly high up, but can be useful to allow Cagliostro to combo from 214H in the corner if this attack lands on an airborne target."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '350',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-3',
  onhit: '1',
  motion: ['l', 'l'],
  description: "An autocombo like any other. Used to extend confirms, get closer or generate extra height in juggles."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '280',
  guard: 'All',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-5',
  onhit: '-1',
  motion: ['l', 'l', 'l'],
  description: "An autocombo like any other. Used to extend confirms, get closer or generate extra height in juggles."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'All',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-3',
  onhit: '1',
  motion: ['l'],
  description: "A far L with decent range. Good for converting off L pressure."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'All',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  motion: ['m'],
  description: "Longest range normal poke. Usually gets no conversions on hit, but using Cagliostro's varied special cancels between 5U, Trap, Spear or Teleport can still keep the opponent guessing and generate advantage."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'All',
  startup: '10',
  active: '5',
  recovery: '20',
  onblock: '-9',
  onhit: '-5',
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
  onblock: '2',
  onhit: '6',
  motion: ['2', 'l'],
  description: "A Granblue 2L - a plus on block low with moderate range that chains into itself. This is Cagliostro's only low outside of sweep, and the cornerstone of her pressure game."
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
  motion: ['2', 'm'],
  description: "Similar to 5M, with less range but less startup, less recovery and a lower to the ground hitbox. Not a low, but stuffs rolls."
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
  motion: ['2', 'h'],
  description: "Average anti-air with high reward on anti-air CHs. Hits slightly behind Cagliostro."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'mid',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD',
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
  motion: ['l'],
  description: "Fastest air attack. Can be used for f-shiki (fuzzy) setups as it hits the standing guard of some characters on the way up."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '6', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['m'],
  description: "Has the longest range of all her air buttons, making it Cagliostro's go-to air to air."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['h'],
  description: "Cagliostro's jump in tool."
};

const jU = { 
  moveName: 'Collapse (Conjure)', 
  altName: 'jU', 
  damage: '500', 
  guard: 'All', 
  startup: '12', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Cagliostro poses, charging up a rock for as long as you hold U. The rock levels up once with the initial press, and then approximately once every 30 frames while U is held.\n5U can absorb one projectile hit while it is deployed, and the rock comes out fast enough to absorb fireballs in neutral on reaction. The rock also has an attack hitbox when it initially spawns. This can be used to push yourself out safely in blockstrings.\nThe air version stalls her air momentum almost completely while it is deployed."
};

const s5U = { 
  moveName: 'Collapse (Conjure) (Air)', 
  altName: 'jU', 
  damage: '500', 
  guard: 'All', 
  startup: '12', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Cagliostro poses, charging up a rock for as long as you hold U. The rock levels up once with the initial press, and then approximately once every 30 frames while U is held.\n5U can absorb one projectile hit while it is deployed, and the rock comes out fast enough to absorb fireballs in neutral on reaction. The rock also has an attack hitbox when it initially spawns. This can be used to push yourself out safely in blockstrings.\nThe air version stalls her air momentum almost completely while it is deployed."
};

// unique action
const lv1U = { 
  moveName: 'Collapse (Fire) Lv1', 
  altName: '6U Lv1', 
  damage: '400', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv2U = { 
  moveName: 'Collapse (Fire) Lv2', 
  altName: '6U Lv2', 
  damage: '600', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv3U = { 
  moveName: 'Collapse (Fire) Lv3', 
  altName: '6U Lv3', 
  damage: '700', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv4U = { 
  moveName: 'Collapse (Fire) Lv4', 
  altName: '6U Lv4', 
  damage: '800', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
};
const lv5U = { 
  moveName: 'Collapse (Fire) Lv5', 
  altName: '6U Lv5', 
  damage: '1000', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['6', 'u'],
  description: "Cagliostro fires the rock she charged with 5U. If no rock was charged prior, Cagliostro will simply use level 1 rock.\nAt low levels it mostly acts as a low-risk low-reward cancel option off pokes, but as it gains levels it becomes more rewarding, gains more hits and higher advantage.\nThe air version has two different angles with j.2U and j.6U. j.2U fires close to her, j.6U fires further away.\nLevel 1: 1 hit, basic projectile.\nLevel 2: 2 hits, will eat normal projectiles and continue with one hit.\nLevel 3: 3 hits, cancels out EX projectiles.\nLevel 4: 4 hits, will eat EX projectiles and continue to travel with a single hit.\nLevel 5: 5 hits, will eat EX projectiles and continue to travel with two hits, launches on hit. Moves more slowly than the other versions, so if Cag gets enough space to charge and throw a LV5 rock she can move in behind it and win neutral for free."
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
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Forward throw knocks opponent far away, but untech time is long enough so you can run in for a meaty or jump in. Great for driving your opponent towards the corner. \nBack throw switches sides. Useful if you want to stick close to your opponent after as you will recover closer up than if you were to forward throw. \nBetween buttons such as c.L, 2L, c.M, and 2M, throw is a particularly strong mix-up option for Gran as it offers many tick throw opportunities. Gran's ability to convert the opponent's whiffed throw techs into enormous damage also serves to make his throw mix up game all the more scary."
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
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
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
  motion: ['m', 'u'],
  description: "Same use as most overheads, checking for low blocks and getting counter hits on late buttons or throws. Gran gets really good reward off of CH Overhead in the corner due to his explosive corner damage, enough to end the round from half health with all specials and super. As of 2.0 Patch Gran can get a stronger Midscreen combo thanks to the changes to H Reginleiv, allowing for follow-ups and better damage."
};

// fireballs
const lFireball = { 
  moveName: 'L Reginleiv', 
  altName: '236L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Standard fireball. \nTravels fairly fast and across the screen. Serves as a safe ender for his block strings and pokes."
};
const mFireball = { 
  moveName: 'M Reginleiv', 
  altName: '236M', 
  damage: '400, 800', 
  guard: 'mid, all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Gran slashes upward before shooting out a projectile. \nFirst slash cancels out projectiles. \nUseful to turn projectile wars more in your favor as you can cancel out incoming projectiles with the upward slash before throwing out a projectile of your own. Also is helpful in throwing off your opponent\'s timing when trying to dodge 236L. Serves as a better blockstring ender than 236L, and as of the 2.0 Patch there\'s no Gap in-between the two hits."
};
const hFireball = { 
  moveName: 'H Reginleiv', 
  altName: '236H', 
  damage: '350 x 3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "3-hit fireball. \nHard knockdown on airhit. \nA grown man 3-hit fireball. As of the 2.0 Patch H Reginleiv does NOT knockdown, but instead leaves them standing. Depending on distance and the state of the opponent, it allows for combos afterwards. At least +7 on hit, allowing for follow-ups even midscreen provided that the opponent is close enough to be hit. Primarily a combo and pressure tool, as it has lost a lot of its neutral prowess due to the nerf. Worth throwing out when applying pressure in the corner, however. H Reginleiv can also frame trap from cXX, albeit in a rather tight window."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Rising Sword', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Invincible reversal. \nAir unblockable during the early active frames. Technically the least unsafe on block and can be difficult to punish at far ranges due to the pushback and shorter recovery than the other versions, but don't count on it. As of 2.0 Patch L version is slower and has increased Recovery, making it much easier punish."
};
const mUppercut = { 
  moveName: 'M Rising Sword', 
  altName: '623M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Also an invincible reversal. \nStandard non-H combo ender for damage. Also air unblockable during the early active frames."
};
const hUppercut = { 
  moveName: 'H Rising Sword', 
  altName: '623H', 
  damage: '950~1400', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Oops, all reversals. \nDouble the uppercuts. Hard knockdown. There is a small gap in-between the two strikes. The entire first strike is air unblockable, however invincibility wears off before the second strike."
};

// rekka
const lRekka = { 
  moveName: 'L Overdrive Surge', 
  altName: '214L', 
  damage: '700', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Has a follow-up version of 214M that knocks down. \nGran dashes forward with a slash. Safest version of 214X at point blank. Can cancel into 214M on hit or block. On hit, 214L > 214M serves as his standard meterless combo ender. On block can be used to test your opponent's willingness to mash after 214L lest they risk a Counter Hit 214M. As of 2.0 Patch follow-up causes no Wall Bounce on Counter Hit, only knocks down."
};
const followupRekka = { 
  moveName: 'M Overdrive Surge(follow up)', 
  altName: '214L -> 214M', 
  damage: '500', 
  guard: 'mid', 
  startup: '-', 
  active: '13', 
  recovery: '29', 
  onblock: '-10', 
  onhit: 'KD',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Gran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};
const mRekka = { 
  moveName: 'M Overdrive Surge', 
  altName: '214M', 
  damage: '1200', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Does not knock down. \nGran dashes forward with his foot out. Covers a lot of horizontal space in front of him. As of 2.21 Patch no longer punishable on hit from point blank, but still negative enough to lose your turn. On block safety ranges depending on the range used. At point blank, Gran is punishable. However at farther lengths it can be spaced out to be safe and at most be 0 on block. On Counter Hit causes extended hitstun for a follow-up combo, but doesn't allow for a combo at point blank. Doesn't reliably combo from far pokes and the reduced hitbox and increased hurtbox with weak reward on hit makes it in the current meta a very mediocre move."
};
const hRekka = { 
  moveName: 'H Overdrive Surge', 
  altName: '214H', 
  damage: '1200', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Wallbounces in the corner. \nGran's primary juggle starter. \nSimilar to 214M, but Gran dashes forward faster. Cannot be canceled into from 214L. Causes a wall bounce in the corner on hit regardless of counter hit, allowing for additional follow ups. Exercise caution as depending on the opponent's height when used, it can cause them to fall behind Gran after the wall bounce, possibly causing a side switch with yourself in the corner."
};

// skybound art
const sba = { 
  moveName: 'Tempest Blade', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Metered advancing invulnerable move. Deals big damage but has a short reach. Try using it when you're close to your opponent."
};
const ssba = { 
  moveName: 'Catastrophe', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'all', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Gran charges and throws out an invulnerable projectile move. It can travel across the screen, however if used at point blank it will be followed by a massive blast by the summoned Proto Bahamut. Deals a lot of chip damage on block which can setup for a chip kill afterwards. After 2.0 Patch, extremely unsafe to the point where Vaseraga gets a free f.H for punish."
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
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  groundThrow,
  airThrow,
  uOverhead,
  lFireball,
  mFireball,
  hFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  followupRekka,
  mRekka,
  hRekka,
  sba,
  ssba
]