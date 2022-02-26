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

// unique action base form
const cmdThrow = {
  moveName: 'Blade of Light',
  altName: 'Base 5U',
  damage: '0, 100×5',
  guard: 'throw',
  startup: '30-39',
  active: '3', 
  recovery: '30',
  onblock: '-', 
  onhit: '-',
  motion: ['u'],
  description: "After startup, continues to run forward until it connects or has whiffed entirely.\nUpon conneting, transforms Vira into her Luminiera form.\nFull Counter Hit recovery.\nCan be comboed into with Summon Lumineria and Counter Hit c.H on grounded opponents.\nA very slow command grab, made only slower by the distance she has to travel. The damage is very low for the risks it requires, but provides Vira her massively enhanced Luminiera Form, with new moves and major improvements to her moveset. If it is not possible to land this grab, it may be required to instead use her Skybound Art, Luminiera Merge.\nThe startup can be faked with a pause then a short dash, due to its similar running animation. However, it is telegraphed by her arm swing before she begins running."
}

// unique action luminaire form
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
  description: "Basic grounded throw that sets up an easy safejump. Vira can set a Lumineria, but she's generally too far to force an opponent to block it or push them into it."
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
  description: "Leaves the opponent much farther away than her forward throw, making a safejump impossible."
};

const uOverhead = { 
  moveName: 'Overhead', 
  altName: 'UOH', 
  damage: '1000', 
  guard: 'high', 
  startup: '26', 
  active: '5', 
  recovery: '18', 
  onblock: '-4', 
  onhit: '+1',
  motion: ['m', 'u'],
  description: "High reward on counter hit.\nInvulnerable to lows and throws, but not instantly.\nMore dangerous than average as Vira can get a combo with a well-timed Lumineria."
};

// Hands
const lHands = { 
  moveName: 'L Darkane', 
  altName: '236L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "Naturally frametraps off every normal and auto-combo attack except c.L, c.H, and 2L.\nOpponent air techs on hit.\nSafe on block.\nMakes for a good pressure tool as it's safe on block. Vira can force pokes to whiff at max range, allowing her to whiff punish and get a knockdown. 236L also acts as an easy frame trap from any of her poking normals, helping her condition opponents not to mash. Be careful throwing this out in neutral as the hurtboxes are horrendus."
};
const mHands = { 
  moveName: 'M Darkane', 
  altName: '236M', 
  damage: '400, 800', 
  guard: 'mid, all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Can frametrap off 5L and 2L.\nGood knockdown on hit.\nCan catch buttons between the stabs and final slash.\nCan be held in Luminiera to perform a dash instead of the last hit.\nNormal Vira's best combo ender for corner carry and risky complement to 236L. If her opponent has big buttons, she can risk a frame trap with 236M instead of trying to make said buttons whiff after 236L. Be careful with this though as 236M is -9 on block and advances Vira forwards. The held version gives Vira a meterless launch that combos into c.L anywhere. Be careful with this on block as it is still quite punishable."
};
const hHands = { 
  moveName: 'H Darkane', 
  altName: '236H', 
  damage: '350 x 3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Wallbounces in the corner.\nCan catch buttons between the stabs and final slash.\nCan be held in Luminiera to perform a dash instead of the last hit.\nCorner combo extender and Vira's only real launching move. The held version is less useful than 236[M] because it costs a cooldown but it is much safer on block."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Red Beryl Sword', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-17', 
  onhit: 'KD',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Fully invincible on startup\nVira's non-Skybound invincible reversal. Like most, it is able to escape pressure easily and doubles as a strong anti-air, but can almost never combo, making it very low reward. On block and whiff it is extremely punishable and must be used with caution. Only hits forwards, making it incapable of attacking enemies directly above or behind Vira.\nAir unblockable only on frames 9 ~ 10\n500 Damage if hit on frames 13 ~ 18.\nOpponent Air Recovers if hit on frames 13 ~ 18\nBasic invincible reversal. Lower recovery makes it safer on whiff, but is extremely poor for use as an anti-air."
};
const mUppercut = { 
  moveName: 'M Red Beryl Sword', 
  altName: '623M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Fully invincible on startup\nVira's non-Skybound invincible reversal. Like most, it is able to escape pressure easily and doubles as a strong anti-air, but can almost never combo, making it very low reward. On block and whiff it is extremely punishable and must be used with caution. Only hits forwards, making it incapable of attacking enemies directly above or behind Vira.\nFirst hit is air unblockable, second is not.\nUnreasonably long active time.\nMakes for a stronger anti-air and deals slightly more damage. It is much worse on whiff, and on block will be punishable in a higher airborne state, enabling larger combos on punish. Surprisingly has a decent amount of oki as a midscreen ender (if done from autocombo), significantly moreso in the corner."
};
const mGrandUppercut = { 
  moveName: 'M Red Beryl Sword', 
  altName: '623M', 
  damage: '700, 300 x 2', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'KD',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Might as well be a completely different move. Instead of jumping skyward, she brings down her battleaxe upon the enemy with incredible force.\nMassive pushback, completely safe on block.\nTrue frametraps between hits, but has no invulnerability on the second hit.\nSmall anti-air range, but completely air unblockable.\nDeals only 600 damage if the first hit misses.\nBarely an anti-air and slightly slower, but in exchange becomes the best wakeup reversal in the game. It deals very solid damage, gives a nearby hard knockdown for some basic okizeme, maintains the low cooldown, and on block it is entirely safe. This move absolutely domoniates against pressure and is very difficult to challenge. The best counter-strategy on block is to wait until after the first hit, then either use an invincible move or perform a Dodge. However, Vira will be fully grounded, slightly reducing the combo potential compared to other versions of Red Beryl Sword.\nThis is also Luminiera Form Vira's best combo ending special move. Deals the most damage out of any of her special moves while also giving her a hard knockdown for further okizeme."
};
const hUppercut = { 
  moveName: 'H Red Beryl Sword', 
  altName: '623H', 
  damage: '950~1400', 
  guard: 'mid, all', 
  startup: '9', 
  active: '-', 
  recovery: '-', 
  onblock: '-26', 
  onhit: 'HKD',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Fully invincible on startup\nVira's non-Skybound invincible reversal. Like most, it is able to escape pressure easily and doubles as a strong anti-air, but can almost never combo, making it very low reward. On block and whiff it is extremely punishable and must be used with caution. Only hits forwards, making it incapable of attacking enemies directly above or behind Vira.Completely air unblockable.\nExtreme meter gain, useful to transform as quickly as possible\nThe only version able to combo, and only on an anti-air hit in the corner.\nGrand: Additional 100 damage and cinematic pause if it hits on the first active frame, enabling better corner combo confirms.\nHer strongest anti-air move, it completely shuts down jump-ins while leading into okizeme. The massive cooldown, especially with the simple input, is a detriment to Vira's defensive gameplay, dramatically worsening her ability to defend herself immediately after. Particularly good late into a round, where a single shift in the momentum or increased damage can easily win the round on its own, and further defense is not nessecary."
};

// Tackle
const lTackle = { 
  moveName: 'L Scarlet Oath', 
  altName: '214L', 
  damage: '700', 
  guard: 'mid', 
  startup: '13', 
  active: '2', 
  recovery: '19', 
  onblock: '-6', 
  onhit: '-2',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Safe when blocked at max range.\nVira's basic poke confirm tool, best ender for oki but trades corner carry. Fast and effective for catching people in neutral beyond her f.M range. Can also act as a frametrap off f.L to further enforce her pokes."
};
const mTackle = { 
  moveName: 'M Scarlet Oath', 
  altName: '214M', 
  damage: '1200', 
  guard: 'mid', 
  startup: '16', 
  active: '13', 
  recovery: '29', 
  onblock: '+2~-10', 
  onhit: '-',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Advantageous on block\nGrand: Visual pause on counterhit allowing for easier combo confirms.\nVira's primary pressure reset. It is slow, and easily interrupted, but always places her within a good range to threaten frametraps with 2U and c.L, while easily reaching for Throw. Even with simple inputs its cooldown is short enough to allow freely using it in pressure.\nCan also be used in neutral as an approach tool. On counter hits it scores huge combo potential, and on block begins pressure freely."
};
const hTackle = { 
  moveName: 'H Scarlet Oath', 
  altName: '214H', 
  damage: '1200', 
  guard: 'mid', 
  startup: '13', 
  active: '13', 
  recovery: '37', 
  onblock: '+4~-8', 
  onhit: 'HKD',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Ground bounces on hit.\nGrand: Can combo into 5L in the corner.\nGrand: Ground bounces on counterit, being able to combo into 5M midscreen.\nEven faster, safer, and more damaging than the Light variant for catching in neutral, but the heavy cooldown will eliminate the ability to reset pressure as easily. On hit, scores a better knockdown for setting up some okizeme, and can be used as a combo extender in the corner."
};

// Luminiera
const lLumin = { 
  moveName: 'L Summon Luminiera', 
  altName: '22L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['22', 'l', 'or', 'a'],
  description: "Summons Luminiera to attack a fixed position on the screen after a short time.\nLuminiera will disappear immediately if Vira blocks or is hit.\nThe primary tool for okizeme setplay. The extended hitstun allows Vira to combo off attacks more easily, including her Overhead, and is delayed enough to allow a normal Throw or her Blade of Light grab to land before it becomes active. However, because it disappears instantly when Vira is hit, it does not protect Vira from an opponent attacking out of pressure. (See more: Strategy: Okizeme)\nIn neutral, Luminiera can provide a ranged threat to either run in and begin pressure freely, or force the opponent into moving out of the way. However, it is very slow and open to punish.\nLuminiera spawns 40% of the screen away.\nUseful to set up after almost any knockdown cheaply. Due to its timing and position, it won't prevent jumping and backdashing on wakeup, which needs to be supported by fast okizeme. It is also spacing-sensitive, potentially whiffing (but catching backdashes) at very close positions.\nGood in neutral as a pre-emptive catch to approaches, but is too slow to be effective at its actual range."
};
const mLumin = { 
  moveName: 'M Summon Luminiera', 
  altName: '22M', 
  damage: '400, 800', 
  guard: 'mid, all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['22', 'm', 'or', 'a', 'm'],
  description: "Summons Luminiera to attack a fixed position on the screen after a short time.\nLuminiera will disappear immediately if Vira blocks or is hit.\nThe primary tool for okizeme setplay. The extended hitstun allows Vira to combo off attacks more easily, including her Overhead, and is delayed enough to allow a normal Throw or her Blade of Light grab to land before it becomes active. However, because it disappears instantly when Vira is hit, it does not protect Vira from an opponent attacking out of pressure. (See more: Strategy: Okizeme)\nIn neutral, Luminiera can provide a ranged threat to either run in and begin pressure freely, or force the opponent into moving out of the way. However, it is very slow and open to punish.\nLuminiera spawns 70% of the screen away.\nSpawns too far away to use for setups, only able to catch backdashes after a non-cinematic Affection Abyss (236236H).\nA useful long-range tool for neutral."
};
const hLumin = { 
  moveName: 'H Summon Luminiera', 
  altName: '22H', 
  damage: '350 x 3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['22', 'h', 'or', 'a', 'h'],
  description: "Summons Luminiera to attack a fixed position on the screen after a short time.\nLuminiera will disappear immediately if Vira blocks or is hit.\nThe primary tool for okizeme setplay. The extended hitstun allows Vira to combo off attacks more easily, including her Overhead, and is delayed enough to allow a normal Throw or her Blade of Light grab to land before it becomes active. However, because it disappears instantly when Vira is hit, it does not protect Vira from an opponent attacking out of pressure. (See more: Strategy: Okizeme)\nIn neutral, Luminiera can provide a ranged threat to either run in and begin pressure freely, or force the opponent into moving out of the way. However, it is very slow and open to punish.\nLuminiera tracks to the opponent's position.\nTravels a maximum 80% of the screen.\nThe only version that is useful in the corner, as the other two versions are summoned off-screen.\nGrand: Additional damage and blockstun. Can combo better off slow recovering moves.\nGood for any knockdown without concern for spacing, and able to threaten backdashes by following their position, at the cost of a heavy cooldown. Due to longer recovery it can make some okizeme more difficult or weaker to jump-outs, notably after a Throw where you cannot prevent a jump-out in time.\nGood in neutral to make it much more difficult to position out of, and attack from almost full-screen as a weak zoning tool."
};

// skybound art
const sba = { 
  moveName: 'Luminiera Merge', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Spend your Skybound Art to transform.\nMinimum damage: Shortcut: 120, Technical: 250\nUpon activation, Vira enters her Grand transformation.\nCan hit slightly above and behind Vira.\nLow damage and extremely short range, making it incredibly poor for a Skybound Art, but is your only way to access Vira's Grand transformation without landing Blade of Light (5U).\nEven when blocked you still receive the transformation and it is not as punishable as other Skybound Arts. Additionally, it is also the only invincible move in her arsenal that can hit directly above and behind her, making it viable for challenging strong crossup okizeme.\nLastly, it is possible for Vira to combo after super, as her recovery is fairly short."
};
const sbaGrand = {
  moveName: 'Punishment Ray',
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "A huge beam, doubling both as an invincible reversal and a zoning tool.\nReplaces Vira's Skybound Art when in her Grand transformation.\nMinimum damage: Shortcut: 480, Technical: 875\nLower frame disadvantage the more spaced it is.\nAn ironically less safe invincible reversal Skybound Art. It not only has less vertical reach and fails to hit behind her, but it's also much more punishable when blocked at close range.\nTo compensate, the move does astronomically more damage, and can work from any range. It is impossible to jump over on reaction, and the pushback is enough to make it very difficult to punish unless already close, making it decent for challenging slower pokes in neutral, without losing the round."
}
const ssba = { 
  moveName: 'Affection Abyss', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'all', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "A savage flurry of strikes.\nData in [] represent data for cinematic clean hit.\nMinimum damage: Shortcut: ?, Technical: ?\nQuickly advances until a hit lands, travelling half-screen.\nThe move is slightly unreliable. While it will chase down an opponent to better punish whiffs, the attack can only hit directly in front and is very poor at hitting enemies above, making it usually much worse than Red Beryl Sword (623X) as a tool to challenge pressure.\nMay be the worse option against Luminiera Merge (236236H), depending on the current situation. Particularly, the more health Vira and the opponent has, the more valuable her transformation becomes, while the less the opponent has the more valuable Affection Abyss becomes."
};
const ssbaGrand = {
  moveName: 'Iliad Vision', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'all', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "A ceremoniously destructive attack.\nData in [] represent data for cinematic clean hit.\nMinimum damage: Shortcut: ?, Technical: ?\nQuickly advances until a hit lands, travelling full-screen.\nTied for highest damage in the game, making it a potent round ender.\nWhile the cinematic clean hit has a surprisingly forgiving range and will easily chase down an opponent to punish whiffs, the attack can only hit directly in front and is very poor at hitting enemies above. If blocked, Vira can be hit before the final strike, as she no longer has any invuln."
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
  cmdThrow,
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  groundThrow,
  airThrow,
  uOverhead,
  lHands,
  mHands,
  hHands,
  lUppercut,
  mUppercut,
  mGrandUppercut,
  hUppercut,
  lTackle,
  mTackle,
  hTackle,
  lLumin,
  mLumin,
  hLumin,
  sba,
  sbaGrand,
  ssba,
  ssbaGrand
]