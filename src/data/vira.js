// FINAL 

const general = { char: "Vira", health: '10000', prejump: '4F', backdash: '22F' }

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
  motion: ['l'],
  description: "Always links into c.M and f.L.\nLinks into 2M and 2U on crouching or counterhit.\nOne of Vira's main pressure normals. Excellent frame advantage and frame trap options afterwards make this a threatening button to challenge. Linking into 2U is always preferable as it allows Vira to set up L Luminaria for okizeme."
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
  description: "Links into itself and 2U on counterhit.\nFrame trap and general pressure tool. Any close button will frame trap into c.M, which has some great linking options on counterhit. The activation range is also decently large which allows her to harass 6-frame characters."
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
  motion: ['h'],
  description: "Highest damage button that goes into autoGood anti-air.\nLinks into itself on counterhit.\nVira's hardest-hitting punish starter. combo, better choice for combo filler for the extra damage when applicable. Puts the opponent in huge hitstun on Counter Hit, so much so that it can link into either itself or f.H depending on distance, allowing for a high damage combo in the corner. Has large active frames, so can be meatied late for plus frames on oki."
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
  motion: ['l', 'l'],
  description: "Fully true blockstrings off any normal. Cannot be delayed into a frametrap.\nc.XX naturally frametraps into Scarlet Oath L.\nSimple combo extender and hitconfirm tool.\nOn block, every hit can cancel into Darkane frametrap punishes, or mixup into Blade of Light, making it most useful for creating unpredictable pressure timings and challenge simple fuzzy blocking."
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
  motion: ['l', 'l', 'l'],
  description: "Fully true blockstrings off any normal. Cannot be delayed into a frametrap.\nc.XX naturally frametraps into Scarlet Oath L.\nSimple combo extender and hitconfirm tool.\nOn block, every hit can cancel into Darkane frametrap punishes, or mixup into Blade of Light, making it most useful for creating unpredictable pressure timings and challenge simple fuzzy blocking."
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
  motion: ['l'],
  description: "Vira's 6-frame punish.\nCombos into 214L for a knockdown.\nVira's fastest, but lowest reward whiff punish button."
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
  motion: ['m'],
  description: "Longest range normal.\nSafe neutral poke, good for controlling space. Does not properly frametrap into Darkane from max range."
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
  motion: ['h'],
  description: "Vira's best counterpoke.\nNoticeably less range than Vira's f.M, but has much more hitstun making it easier to confirm. It's also quite fast for an H button, making it a great whiff punisher on extended hurtboxes."
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
  motion: ['2', 'l'],
  description: "Always links into c.M and f.L.\nLinks into 2M and 2U on crouching or counterhit.\nVira's other main pressure normal. Works well with her throw as it hits low."
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
  description: "Very fast and very active.\nVira's safest poke overall due to its low total duration. Combos into both 214L and 236M for a knockdown. Beats rolls cleanly where f.M does not, but 2U is a better punish thanks to its knockdown and Vira's setplay."
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
  description: "Strong, angled anti-air.\nAll of Vira's H buttons make for good anti-airs at different ranges. 2H is particularly good against opponents jumping right at her, where c.H is better for crossups and f.H is best for far jump-ins."
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
  description: "Leads straight into a 22L setup.\nVira's sweep is fast enough that she can counter hit or crouch confirm into it. Whenever it is an option, it is usually the best overall because it grants Lumineria oki. It also combos into the same things that 2M does while dealing the same damage. The only downside of 2U is that its frame advantage is much worse than 2M."
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
  motion: ['l'],
  description: "Active until landing.\nStrong air button overall and makes for a great air-to-air."
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
  motion: ['m'],
  description: "Hard to hit against most crouching opponents.\nVira's other main air-to-air option. Hits higher than j.L and is great for sniping opponents above Vira."
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
  motion: ['h'],
  description: "Hits far below Vira.\nVira's best jump-in normal in terms of raw damage."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'high', 
  startup: '12', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "Hits behind Vira during startup.\nVira's crossup normal. Hits primarily below her and hits behind her early on."
};

// unique action
const lv1U = { 
  moveName: 'Power Raise Lv1', 
  altName: '5ULv1', 
  damage: '1000', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv2U = { 
  moveName: 'Power Raise Lv2', 
  altName: '5ULv2', 
  damage: '1200', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv3U = { 
  moveName: 'Power Raise Lv3', 
  altName: '5ULv3', 
  damage: '1400', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv4U = { 
  moveName: 'Power Raise Lv4', 
  altName: '5ULv4', 
  damage: '1600', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
};
const lv5U = { 
  moveName: 'Power Raise Lv5', 
  altName: '5ULv5', 
  damage: '2000', 
  guard: 'mid', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "A chargable slash attack. Can be charged up to five levels and gains invulnerability at level five. Each level will also increase in damage and range. \nCharge can be cancelled with L/M/H. Level is stored and resumes charging from the same level when using 5U again. Gran will auto cancel charge after Level 5, and once he's at Level 5, he can still delay the attack by holding 5U or cancel it like normal. \nLevel 4 and 5 will cause a wallbounce in the corner allowing for combo extensions. \nIt\'s also a decent pressure tool as it\'s 0 on block when spaced at the tip and also pulls Gran's hurtbox back a bit. \nCan be used in some corner combos if an opponent is high enough after 2H."
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


export const viraInfo = [
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