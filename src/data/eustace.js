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
  guard: 'all', 
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
  damage: '400, 800', 
  guard: 'mid, all', 
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
  damage: '350 x 3', 
  guard: 'all', 
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
  altName: '[4]6L', 
  damage: '800', 
  guard: 'all', 
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
const mChargedFireball = { 
  moveName: 'M Flamek Thunder (Charged)', 
  altName: '[4]6M', 
  damage: '400, 800', 
  guard: 'mid, all', 
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
const hChargedFireball = { 
  moveName: 'H Flamek Thunder  (Charged)', 
  altName: '[4]6H', 
  damage: '350 x 3', 
  guard: 'all', 
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Gran charges and throws out an invulnerable projectile move. It can travel across the screen, however if used at point blank it will be followed by a massive blast by the summoned Proto Bahamut. Deals a lot of chip damage on block which can setup for a chip kill afterwards. After 2.0 Patch, extremely unsafe to the point where Vaseraga gets a free f.H for punish."
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
  lFireball,
  mFireball,
  hFireball,
  lChargedFireball,
  mChargedFireball,
  hChargedFireball,
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