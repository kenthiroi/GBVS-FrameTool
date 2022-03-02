// DESCRIPTIONS DONE
// FRAME DATA UNFINISHED 

const general = { char: "Eustace", health: '10000', prejump: '4F', backdash: '22F' }

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
  description: "Standard Granblue c.L. Combos into itself, 2L and f.L on hit and 2M on crouching hit. Useful for pressure, combos, and abare."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Slightly slower than the average c.M at 7f startup, but useful as a frametrap tool to lead into autocombo."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  oncounterhit: '-',
  clash: '-',
  motion: ['h'],
  description: "Big combo filler upswing and punish starter. Your only way to combo into 623H on a standing opponent, which leads to flashy, highly damaging combos from anywhere on screen."
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
  description: "It's the autocombo. c.XXX > 623H is a frame trap and a combo on crouching opponents."
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
  description: "It's the autocombo. c.XXX > 623H is a frame trap and a combo on crouching opponents."
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
  description: "Kick. Unlike Zeta's and old Djeeta's f.Ls, it will hit crouching opponents, so don't let the somewhat similar animation fool you. A 6f normal that's useful for punishing certain moves, as well as certain links. Only combos into [4]6X and 214H on hit, so it's generally preferable to find ways to route around using this."
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
  description: "Looks like Lancelot's f.M but a lot bigger due to how Eustace leans forward as he swings. Good, fast poke, combos into 214M on hit unless hit at near-maximum range."
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
  description: "By pressing H again, Eustace fires off a shot from the extended gun which can set off the H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nThe followup cannot be canceled into special moves.\nReally good poke, has the automatic follow-up for free extra damage although it doesn't lead to anything. Combos into 214M and 5U on hit and is often used to extend juggles, whether in the corner or midscreen."  
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'mid',
  startup: '6',
  active: '3',
  recovery: '6',
  onblock: '2',
  onhit: '6',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'l'],
  description: "Extremely good range for a 2L, second only to Zeta's. Can be repeated three times on block, frame traps into f.L and 2M at any range, and at further ranges, f.M. Cornerstone of Eustace's powerful pressure and you'll often want to start strings with this."
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
  description: "Low swipe. does not actually hit low. Decent 7f poke. Combos from 2L on crouching opponents, which leads to a knockdown with 214M. Try to confirm into this rather than f.L as it leads to a resourceless knockdown."
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
  description: "By pressing H again, Eustace fires off a shot from the extended gun which can set off the Rat Race+ grenade. Values in [] indicate advantage when 623H is triggered.\nThe followup cannot be canceled into special moves.\nEustace's designated anti-air, not very large. Can be confirmed fairly easily on either counter or normal hit with 214L~G for the former and 214L~L/H for the latter.\n2HH is NOT any safer on block unless you have a 623H set up. Don't even try it."
};
const n2HH = {
  moveName: 'Crouch Heavy (Followup)',
  altName: '2H',
  damage: '500',
  guard: 'mid',
  startup: '10',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'h', 'h'],
  description: "By pressing H again, Eustace fires off a shot from the extended gun which can set off the Rat Race+ grenade. Values in [] indicate advantage when 623H is triggered.\nThe followup cannot be canceled into special moves.\nEustace's designated anti-air, not very large. Can be confirmed fairly easily on either counter or normal hit with 214L~G for the former and 214L~L/H for the latter.\n2HH is NOT any safer on block unless you have a 623H set up. Don't even try it."
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
  oncounterhit: '-',
  clash: '-',
  motion: ['2', 'u'],
  description: "Really big, but pretty slow. Good poke and used at the end of some juggles for a smidge more damage, and more stable oki. Can combo and frame trap into 214M but is inconsistent at further ranges."
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
  description: "Active until landing."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '600', 
  guard: 'high', 
  startup: '6', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['m'],
  description: "Eustace's longest air button, useful for air-to-airs and jump-ins from further out."
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
  description: "Not a lot of range. j.M is generally better, but j.H's more downward hitbox can be useful for certain jump-in angles."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'high', 
  startup: '12', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "After Eustace fires the shot, he is bounced up and backwards, and cannot act until landing.\nCompletely stalls air momentum before the shot.\nCan set off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be used to bait anti-airs, but gives no reward. Trickier to land than other AA bait j.Us and not safe on block, but looks very funny"
};

// unique action
const s5U = { 
  moveName: 'Stand in Line', 
  altName: '5U', 
  damage: '700', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Follow-up cannot be canceled into special moves.\nFollow-up sets off H Rat Race grenade, but the first hit does not. Values in [] indicate advantage when 623H is triggered.\nEustace steps forward and strikes with the barrel of the Flamek Thunder. Pressing Unique Action again shoots the Thunder. The follow-up shot can be charged to delay the attack and increase damage, and the second shot will also set off a Rat Race+ grenade.\nUseful for frame traps and closing distance, with 5UU being safe on block due to pushback. 5UU doesn't knock down but forces your opponent in an auto-tech quite close to you, so you can dash up and continue your offense on hit. On block, 5UU can be delayed for a frame trap, or cancelled into immediately for a safe, true blockstring. There is almost never any reason not to use the follow-up."
};
const s5UFollowUp = { 
  moveName: 'Stand in Line (Followup)', 
  altName: '5U', 
  damage: '500(800)', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', 'u'],
  description: "Follow-up cannot be canceled into special moves.\nFollow-up sets off H Rat Race grenade, but the first hit does not. Values in [] indicate advantage when 623H is triggered.\nEustace steps forward and strikes with the barrel of the Flamek Thunder. Pressing Unique Action again shoots the Thunder. The follow-up shot can be charged to delay the attack and increase damage, and the second shot will also set off a Rat Race+ grenade.\nUseful for frame traps and closing distance, with 5UU being safe on block due to pushback. 5UU doesn't knock down but forces your opponent in an auto-tech quite close to you, so you can dash up and continue your offense on hit. On block, 5UU can be delayed for a frame trap, or cancelled into immediately for a safe, true blockstring. There is almost never any reason not to use the follow-up."
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
  description: "Forward Throw can set off the grenade from H Rat Race, allowing for a combo.\nBack Throw will also set off the grenade but won't give a combo, only tacking on a little extra damage.\nForward throw can be combod into super or H Flamek Thunder midscreen, but in the corner it grants a full juggle."
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
  description: "Sets off the grenade from H Rat Race."
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
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan set off the H Rat Race grenade, allowing for a combo. This will also keep Eustace at advantage if they block it, making it more potent than other UOHs. As with other UOHs, can be used as a throw bait for huge damage." 
};

// fireballs
const lFireball = { 
  moveName: 'L Flamek Thunder', 
  altName: '[4]6L', 
  damage: '800', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '6', 'l', 'or', '6', 'a'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nA faster-than average fireball in both startup and velocity. Both [4]6L and [4]6M are very spammable and good at winning fireball wars, but are both very unsafe on block. [4]6H, on the other hand, grants some frame advantage, and can be used to extend combos and pressure. Both [4]6L and [4]6H will combo from literally any normal."
};
const mFireball = { 
  moveName: 'M Flamek Thunder', 
  altName: '[4]6M', 
  damage: '800', 
  guard: 'All', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '6', 'm', 'or', '6', 'a', 'm'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nA faster-than average fireball in both startup and velocity. Both [4]6L and [4]6M are very spammable and good at winning fireball wars, but are both very unsafe on block. [4]6H, on the other hand, grants some frame advantage, and can be used to extend combos and pressure. Both [4]6L and [4]6H will combo from literally any normal."
};
const hFireball = { 
  moveName: 'H Flamek Thunder', 
  altName: '[4]6H', 
  damage: '300, 300, 400', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '6', 'h', 'or', '6', 'a', 'h'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nA faster-than average fireball in both startup and velocity. Both [4]6L and [4]6M are very spammable and good at winning fireball wars, but are both very unsafe on block. [4]6H, on the other hand, grants some frame advantage, and can be used to extend combos and pressure. Both [4]6L and [4]6H will combo from literally any normal."
};

const lChargedFireball = { 
  moveName: 'L Flamek Thunder (Charged)', 
  altName: '[4]6[L]', 
  damage: '1000', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '6', 'l', 'or', '6', 'a'],
  description: "[4]6[X] is effectively a laser. All versions will pierce through and destroy other projectiles to hit the opponent, though multi-hit projectiles won't be completely destroyed even by [4]6[H]. All versions of [4]6[X] gain exactly one frame of advantage over their uncharged counterparts, [4]6[M] will grant a soft knockdown on hit, and [4]6[H] grants a hard knockdown and wallbounces."
};
const mChargedFireball = { 
  moveName: 'M Flamek Thunder (Charged)', 
  altName: '[4]6[M]', 
  damage: '1000', 
  guard: 'All', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '6', 'm', 'or', '6', 'a', 'm'],
  description: "[4]6[X] is effectively a laser. All versions will pierce through and destroy other projectiles to hit the opponent, though multi-hit projectiles won't be completely destroyed even by [4]6[H]. All versions of [4]6[X] gain exactly one frame of advantage over their uncharged counterparts, [4]6[M] will grant a soft knockdown on hit, and [4]6[H] grants a hard knockdown and wallbounces."
};
const hChargedFireball = { 
  moveName: 'H Flamek Thunder (Charged)', 
  altName: '[4]6[H]', 
  damage: '1200', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '6', 'h', 'or', '6', 'a', 'h'],
  description: "[4]6[X] is effectively a laser. All versions will pierce through and destroy other projectiles to hit the opponent, though multi-hit projectiles won't be completely destroyed even by [4]6[H]. All versions of [4]6[X] gain exactly one frame of advantage over their uncharged counterparts, [4]6[M] will grant a soft knockdown on hit, and [4]6[H] grants a hard knockdown and wallbounces."
};


// fireballs
const lAntiAirBall = { 
  moveName: 'L Slow Kill', 
  altName: '[2]8L', 
  damage: '800', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '8', 'l', 'or', 'a'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nEustace is in CH state during recovery.\nEustace aims his gun downward and ricochets a shot off of the ground. One of Eustace's myriad ways to extend his pressure, as all three versions of [2]8[X] grant great frame advantage if blocked. Although it's not too difficult to react to it due to its unique animation, Eustace can release the projectile early in the charge for to bait a mash out. Also somewhat useful in neutral to control space, but ironically, none of its versions are good at catching jumps. Best used to mix up your timing between all of Eustace's other projectiles."
};
const mAntiAirBall = { 
  moveName: 'M Slow Kill', 
  altName: '[2]8M', 
  damage: '800', 
  guard: 'All', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '8', 'm', 'or', 'a', 'm'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nEustace is in CH state during recovery.\nEustace aims his gun downward and ricochets a shot off of the ground. One of Eustace's myriad ways to extend his pressure, as all three versions of [2]8[X] grant great frame advantage if blocked. Although it's not too difficult to react to it due to its unique animation, Eustace can release the projectile early in the charge for to bait a mash out. Also somewhat useful in neutral to control space, but ironically, none of its versions are good at catching jumps. Best used to mix up your timing between all of Eustace's other projectiles."
};
const hAntiAirBall = { 
  moveName: 'H Slow Kill', 
  altName: '[2]8H', 
  damage: '300, 300, 400', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '8', 'h', 'or', 'a', 'h'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nEustace is in CH state during recovery.\nEustace aims his gun downward and ricochets a shot off of the ground. One of Eustace's myriad ways to extend his pressure, as all three versions of [2]8[X] grant great frame advantage if blocked. Although it's not too difficult to react to it due to its unique animation, Eustace can release the projectile early in the charge for to bait a mash out. Also somewhat useful in neutral to control space, but ironically, none of its versions are good at catching jumps. Best used to mix up your timing between all of Eustace's other projectiles."
};

const lChargedAntiAirBall = { 
  moveName: 'L Slow Kill (Charged)', 
  altName: '[2]8[L]', 
  damage: '1000', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '8', 'l', 'or', 'a'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nEustace is in CH state during recovery.\nEustace aims his gun downward and ricochets a shot off of the ground. One of Eustace's myriad ways to extend his pressure, as all three versions of [2]8[X] grant great frame advantage if blocked. Although it's not too difficult to react to it due to its unique animation, Eustace can release the projectile early in the charge for to bait a mash out. Also somewhat useful in neutral to control space, but ironically, none of its versions are good at catching jumps. Best used to mix up your timing between all of Eustace's other projectiles."
};
const mChargedAntiAirBall = { 
  moveName: 'M Slow Kill (Charged)', 
  altName: '[2]8[M]', 
  damage: '1000', 
  guard: 'All', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '8', 'm', 'or', 'a', 'm'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nEustace is in CH state during recovery.\nEustace aims his gun downward and ricochets a shot off of the ground. One of Eustace's myriad ways to extend his pressure, as all three versions of [2]8[X] grant great frame advantage if blocked. Although it's not too difficult to react to it due to its unique animation, Eustace can release the projectile early in the charge for to bait a mash out. Also somewhat useful in neutral to control space, but ironically, none of its versions are good at catching jumps. Best used to mix up your timing between all of Eustace's other projectiles."
};
const hChargedAntiAirBall = { 
  moveName: 'H Slow Kill (Charged)', 
  altName: '[2]8[H]', 
  damage: '1200', 
  guard: 'All', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '8', 'h', 'or', 'a', 'h'],
  description: "Sets off H Rat Race grenade. Values in [] indicate advantage when 623H is triggered.\nCan be charged for an extra hit and more damage.\nEustace is in CH state during recovery.\nEustace aims his gun downward and ricochets a shot off of the ground. One of Eustace's myriad ways to extend his pressure, as all three versions of [2]8[X] grant great frame advantage if blocked. Although it's not too difficult to react to it due to its unique animation, Eustace can release the projectile early in the charge for to bait a mash out. Also somewhat useful in neutral to control space, but ironically, none of its versions are good at catching jumps. Best used to mix up your timing between all of Eustace's other projectiles."
};

// dragon punches
const lGrenade = { 
  moveName: 'L Rat Race', 
  altName: '623L', 
  damage: '200, 600', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'l', 'or', '2', 'a'],
  description: "Eustace tosses a grenade. The grenade has different properties depending on what version is used, with the H version sticking to the opponent. Mostly useful as a setplay tool, but can see some use in neutral to control space.\nExplodes on impact.\nSlow and loses you your turn."
};
const mGrenade = { 
  moveName: 'M Rat Race', 
  altName: '623M', 
  damage: '200, 600', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'm', 'or', '2', 'a', 'm'],
  description: "Eustace tosses a grenade. The grenade has different properties depending on what version is used, with the H version sticking to the opponent. Mostly useful as a setplay tool, but can see some use in neutral to control space.\nHits once, then explodes.\nUseful on oki to bait your opponent into trying something. It's usable from pretty far, so what they'll do depends on how far away you are when you set it. When they're close, you want to look out for mashing or reversals, and from afar, keep jumps in mind."
};
const hGrenade = { 
  moveName: 'H Rat Race', 
  altName: '623H', 
  damage: '400, 400', 
  guard: 'All', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['623', 'h', 'or', '2', 'a', 'h'],
  description: "Eustace tosses a grenade. The grenade has different properties depending on what version is used, with the H version sticking to the opponent. Mostly useful as a setplay tool, but can see some use in neutral to control space.\nSticks to the enemy on impact.\nCan be set off by Eustace's projectile attacks.\nAmazing move. Frame traps from full autocombo and H normals while granting advantage on block, and if you open them up while they've a grenade stuck to them, they eat brutal amounts of damage from anywhere on screen. Allows conversions from UOH, forward throw, air throw, any far normal, any close normal. Can only be combo'd into with c.H on standers and 2H or full autocombo on crouchers."
};

// rekka
const lRekka = { 
  moveName: 'L Close Combat', 
  altName: '214L', 
  damage: '-', 
  guard: 'All', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Eustace's command dash.\nThe L version only moves and can be cancelled into 5 follow-up actions (see below).\nThe M version ends in a knife attack and then allows follow-ups, apart from Brake which can only be used before the strike. Startup varies based on distance travelled.\nThe H version can be cancelled before or after the knife strike, but Brake must be used before the strike. Startup varies based on distance travelled."
};
const mRekka = { 
  moveName: 'M Close Combat', 
  altName: '214M', 
  damage: '500', 
  guard: 'All', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Eustace's command dash.\nThe L version only moves and can be cancelled into 5 follow-up actions (see below).\nThe M version ends in a knife attack and then allows follow-ups, apart from Brake which can only be used before the strike. Startup varies based on distance travelled.\nThe H version can be cancelled before or after the knife strike, but Brake must be used before the strike. Startup varies based on distance travelled."
};
const hRekka = { 
  moveName: 'H Close Combat', 
  altName: '214H', 
  damage: '500', 
  guard: 'All', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Eustace's command dash.\nThe L version only moves and can be cancelled into 5 follow-up actions (see below).\nThe M version ends in a knife attack and then allows follow-ups, apart from Brake which can only be used before the strike. Startup varies based on distance travelled.\nThe H version can be cancelled before or after the knife strike, but Brake must be used before the strike. Startup varies based on distance travelled."
};

const lRekkaFollowUp = {
  moveName: 'Stunlight',
  altName: '214X -> L',
  damage: '700',
  guard: 'All', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'l', 'or', '2', 'a', 'l'],
  description: 'Eustace stops in place and fires a quick flash. Useful for ending pressure in a frame trap, and combos on crouching CH. During a juggle 214H~L is also very useful for combo extensions. Is very advantageous if it sets off a 623H set, so feel free to continue pressure if that happens. Using this follow-up from 214H grants slightly more advantage than the normal versions.',
}
const mRekkaFollowUp = {
  moveName: 'Takedown',
  altName: '214X -> M',
  damage: '800',
  guard: 'All', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'm', 'or', '2', 'a', 'm'],
  description: 'A low slide. Leaves Eustace very vulnerable but travels far.',
}
const hRekkaFollowUp = {
  moveName: 'Assault Knife',
  altName: '214X -> H',
  damage: '800/1000',
  guard: 'All', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'h', 'or', '2', 'a', 'h'],
  description: 'Eustace\'s anti-air attack. Has some invuln. Highest damaging combo ender from 214M and 214H, and if used from 214H, grants a combo extension in the corner on opponents juggled high enough. Slightly less disadvantageous on block if used from 214H',
}
const uRekkaFollowUp = {
  moveName: 'Spreadshot',
  altName: '214X -> U',
  damage: '400*X',
  guard: 'All', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'u', 'or', '2', 'a', 'u'],
  description: 'Eustace hops backward and shoots downward. Has some invuln. The attack is slow, but can be used to create distance. Slightly advantageous on block but puts Eustace too far to take advantage of it. Likely the lowest commitment of all follow-ups, but if overused, your opponent can air throw you on prediction. If it sets off a 623H set, it\'s advantageous enough for you to continue pressure, or even pick up for a combo if it hits.',
}
const gRekkaFollowUp = {
  moveName: 'Brake',
  altName: '214X -> G',
  damage: '',
  guard: 'All', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['214', 'l', 'g', 'or', '2', 'a', 'g'],
  description: 'By pressing G, Eustace will stop the dash. This has to be done before the strike of the M or H version. To guarantee an empty 214X, use 214L instead.\nValues in [] indicate advantage when 623H is triggered.',
}



// skybound art
const sba = { 
  moveName: 'Acidrage Howl', 
  altName: '236236H', 
  damage: '3200', 
  guard: 'All', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Eustace rushes forward with invulnerability. On hit or block, he unleashes a flurry of shots. Very good range, gets the full animation no matter the distance, like Lancelot and Yuel's SBAs."
};
const ssba = { 
  moveName: 'Catastrophe', 
  altName: '236236U', 
  damage: '4468', 
  guard: 'All', 
  startup: '-', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Eustace scorches the heavens with Flamek Thunder. The shot fires upward, so it will miss grounded opponents if they're far enough away from Eustace. Best used against airborne opponents or in short range combos. Note that only the first hit of the super is air unblockable."
};


export const eustaceInfo = [
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
  s5UFollowUp,
  groundThrow,
  airThrow,
  uOverhead,
  lAntiAirBall,
  mAntiAirBall,
  hAntiAirBall,
  lChargedAntiAirBall,
  mChargedAntiAirBall,
  hChargedAntiAirBall,
  lFireball,
  mFireball,
  hFireball,
  lChargedFireball,
  mChargedFireball,
  hChargedFireball,
  lGrenade,
  mGrenade,
  hGrenade,
  lRekka,
  mRekka,
  hRekka,
  lRekkaFollowUp,
  mRekkaFollowUp,
  hRekkaFollowUp,
  uRekkaFollowUp,
  gRekkaFollowUp,
  sba,
  ssba
]