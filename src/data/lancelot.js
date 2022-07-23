
// UNFINISHED, NEEDS UPDATE

const general = {char: "Lancelot", health: '10000', prejump: '4F', backdash: '22F'}

// close normals
const closeL = {
  moveName: 'Close Light', 
  altName: 'cL', 
  damage: '350', 
  guard: 'Mid', 
  startup: '5', 
  active: '2', 
  recovery: '7', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['l'],
  description: 'Can transition into auto combo on contact at any range.\nLancelot\'s 5L does not change based on proximity. However, having no far variation means it will have very poor range in any situation. As his fastest grounded normal and +2 on block, it\'s used for a variety of things including starting close-range pressure, mashing through pressure gaps on defense, tick throws, and as a reversal-safe meaty after a knockdown.'
};
const closeM = {
  moveName: 'Close Medium', 
  altName: 'cM', 
  damage: '650', 
  guard: 'Mid', 
  startup: '6', 
  active: '1', 
  recovery: '14', 
  onblock: '0', 
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: 'Combos into 5L on crouching.\nCombos into c.H on counterhit.\nThis is your go-to move in pressure alongside 2L and 5L. Your main pressure string out of this normal is c.M > 5L > f.M, which leaves you at the perfect distance for 214L to be plus on block afterwards. Point blank, 2L > c.M is both a frametrap and a confirm. It can sometimes be used as a last-minute anti-air, but it\'s far worse than 2H in terms of hurtboxes.'
};
const closeH = {
  moveName: 'Close Heavy', 
  altName: 'cH', 
  damage: '600, 400', 
  guard: 'Mid', 
  startup: '7', 
  active: '3(3)3', 
  recovery: '18', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+2',
  clash: '5',
  motion: ['h'],
  description: 'Two-hit attack, primarily used for punishing or combos. Being two hits gives you a lot of time to confirm stuff from it. The downside of it being two hits is that if the first hit is a counterhit, the property is not carried over to the second. As an example, CH c.H(1) > 236H combos but CH c.H(2) > 236H does not.'
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit', 
  altName: 'cXX', 
  damage: '350', 
  guard: 'Mid', 
  startup: '9', 
  active: '2', 
  recovery: '16', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: '2nd hit does not combo into 214M, however the third can.\n3rd hit does not reliably work in juggle combos outside the corner due to how it launches the opponent and its small hitbox.\n5XXX > 214M can frametrap opponents, but is vulnerable to reversals.'
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
  description: '2nd hit does not combo into 214M, however the third can.\n3rd hit does not reliably work in juggle combos outside the corner due to how it launches the opponent and its small hitbox.\n5XXX > 214M can frametrap opponents, but is vulnerable to reversals.'
};

// far normals
const far5M = {
  moveName: 'Far Medium', 
  altName: 'f5M', 
  damage: '600', 
  guard: 'Mid', 
  startup: '7', 
  active: '3', 
  recovery: '17', 
  onblock: '-5', 
  onhit: '-1',
  oncounterhit: '+3',
  clash: '3',
  motion: ['m'],
  description: 'Not a lot of range and will easily get outpoked by other characters\' f.M, but the recovery isn\'t too bad and doesn\'t extend Lancelot\'s hurtbox that much. Primarily used in conjunction with 214L to pressure from midrange. If spaced at max range, cancelling into 214L leaves Lancelot plus afterwards.'
};
const far5H = {
  moveName: 'Far Heavy', 
  altName: 'f5H', 
  damage: '900', 
  guard: 'Mid', 
  startup: '12', 
  active: '3', 
  recovery: '18', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['h'],
  description: "Lancelot pokes out both his daggers as far as he can. His farthest reaching poke. Decent range considering his other normals. Combos into 66L at almost any range, making it a decent buffer when you're trying to stuff someone's poke. Alternatively, you can cancel into 214M which combos on counterhit and can be 0 on block if it's spaced far enough."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light', 
  altName: '2L', 
  damage: '350', 
  guard: 'Low', 
  startup: '6', 
  active: '1', 
  recovery: '8', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+8',
  clash: '1',
  motion: ['2', 'l'],
  description: "Can cancel into itself and 5L once per string\nLinks into itself, 5L, 2M, and c.M on standing hit, f.M and c.H on crouching or counter hit, and 2U on counter hit only.\nLancelot's fastest low. Like most 2Ls, plus on block and extremely important for pressure and mixup. It's always useful as a way to catch people trying to Cross-Over out of your pressure. 2L can actually be used 3 times in a blockstring if you're close, but doing so leaves you out of range of 2M and sometimes out of f.M range as well."
};
const n2M = {
  moveName: 'Crouch Medium', 
  altName: '2M', 
  damage: '500', 
  guard: 'Mid', 
  startup: '6', 
  active: '2', 
  recovery: '15', 
  onblock: '-2', 
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['2', 'm'],
  description: "Lancelot slashes low but don't be fooled, it's a mid. Worse range than f.M, but has better startup and frame advantage while also catching Cross-Overs. Post-buff, 2M now functions as a proximity-independent counterpart to many other characters' f.Ls. It now links from 5L and 2L, allowing for combos like 5L/2L > 5L/2L > 2M > 214L. The faster startup also allows Lancelot to more consistently punish moves like Djeeta's or Gran's 214L on block.\nIt can hit Charlotta on her way down after her EX DP, allowing a decent punish combo."
};
const n2H = {
  moveName: 'Crouch Heavy', 
  altName: '2H', 
  damage: '800', 
  guard: 'Mid', 
  startup: '10', 
  active: '5', 
  recovery: '24', 
  onblock: '-12', 
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "Lancelot's designated anti-air attack. It's pretty fast, and has a good hitbox that beats cross-ups easily. Very important move. If it hits anti-air, you'll want to cancel into 214L. On counterhit and a whiffed 214L, you can confirm a c.M/c.H and get a very high damage combo, and on non-counterhit you can confirm into 214L~4L for a little more damage and a knockdown."
};
const n2U = {
  moveName: 'Crouch Unique', 
  altName: '2U', 
  damage: '700', 
  guard: 'Low', 
  startup: '8', 
  active: '16', 
  recovery: '14', 
  onblock: '-15', 
  onhit: 'HKD (+40)',
  oncounterhit: 'HKD (+44)',
  clash: '2',
  motion: ['2', 'u'],
  description: "The Vega slide. Really really good move, hard knockdown sliding low that's safe at far spacing and very unsafe otherwise. Low profiles really well too, going under both projectiles like Gran's Reginleiv and some far-reaching pokes like Katalina's f.M. Gives you a safe jump on hit, but the safe jump is spacing dependent."
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
  description: "Pretty standard air light. Good horizontal hitbox, not so good vertical. Probably Lancelot's best air-to-air button as his other air normals are better at hitting grounded opponents. If it counterhits in the air you often have time to land and combo from it."
};
const jM = {
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Lancelot slashes beneath him. Contrasting j.L, this attack has shorter horizontal range in exchange for being his only air normal that can be used to cross-up the opponent. It's primarily used in safe jumps after a 22X/5~2/8U cross-up teleport or low walljump, and loses in the air against other aerial attacks."
};
const jH = {
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '400x2', 
  guard: 'High', 
  startup: '10', 
  active: '3(3)6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['h'],
  description: "A 2-hit falling overhead. This move is really good. Varying your timing makes the opponent guess if both strikes will hit overhead or if you'll land after one overhead and do a low 2L. On hit, combos into 2L even if only one hit lands. The hitbox is poor directly beneath Lancelot so if he's even a pixel distance to cross up someone it will whiff.\nThe good horizontal hitbox also makes this move decent at stuffing people air-to-air, but it's slower than j.L and because it's two hits you won't get a combo if you counter them."
};

// unique action
const lv1U = {
  moveName: 'Wirbelwind', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '36', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Performs a dashing maneuver that can be canceled on the ground into various followups. The dash covers a pretty good distance but has a lot of recovery, even when you quick stop."
};
const lv2U = {
  moveName: 'Air Wirbelwind', 
  altName: 'jU', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '7 (On landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Performs a dashing maneuver that can be canceled on the ground into various followups. The dash covers a pretty good distance but has a lot of recovery, even when you quick stop.\nFastfalls diagonally towards the ground. Lancelot cannot act until he reaches the ground and also has some landing recovery. A versatile movement tool with many applications that increase after a hard knockdown or when 236H is forcing the opponent to block, including baiting anti-airs and reversals. Altering the fastfall timing during a jump makes which side he lands on extremely ambiguous."
};
const lv3U = {
  moveName: 'Wirbelwind (Stop)', 
  altName: '5U -> 5U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '14', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', 'u'],
  description: "Performs a dashing maneuver that can be canceled on the ground into various followups. The dash covers a pretty good distance but has a lot of recovery, even when you quick stop.\nUsed to bait whiffs in neutral when well-spaced, but the recovery can prevent you from getting a proper punish. Also used in some anti-air combo routes."
};
const lv4U = {
  moveName: 'Wirbelwind (Feint)', 
  altName: '5U -> 4U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '16', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', '4', 'u'],
  description: "Performs a dashing maneuver that can be canceled on the ground into various followups. The dash covers a pretty good distance but has a lot of recovery, even when you quick stop.\nAlso used to bait moves in neutral, with less risk than quick stop. Using this to bait forward-moving reversals can reward you with a huge punish."
};
const lv5U = {
  moveName: 'Wirbelwind (Crossup)', 
  altName: '5U -> 6U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '18', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', '6', 'u'],
  description: "Performs a dashing maneuver that can be canceled on the ground into various followups. The dash covers a pretty good distance but has a lot of recovery, even when you quick stop.\nCan cross through opponents, but its recovery and the presence of the Guard button doesn't make it a strong mixup just by itself."
};
const lv6U = {
  moveName: 'Wirbelwind (Jump)', 
  altName: '5U -> 2/8U', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '25', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u', '2', 'u'],
  description: "Performs a dashing maneuver that can be canceled on the ground into various followups. The dash covers a pretty good distance but has a lot of recovery, even when you quick stop.\nSame as the teleport from 22L/M. Used in safe jumps after forward throw or 66H knockdown. The diagonal angle makes it possible to force many wakeup DPs to whiff after a midscreen knockdown, at the risk of losing to regular anti-airs."
};

const groundThrow = {
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+32)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'u', 'or', 'l', 'm'],
  description: "Lancelot's forward throw leaves him point blank and at enough advantage to set up a 236X for pressure afterwards. Any DP will punish 236L, but 236H is safe against reversals with startups longer than 9f. The hard knockdown allows for all shades of setups, not just limited to 236X, but that's by far the easiest."
};
const backThrow = {
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+38)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'u', 'or', '4', 'l', 'm'],
  description: "Lancelot's back throw sends the opponent half screen, which is too far for 236X to work as a meaty."
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
  motion: ['l', 'u', 'or', 'l', 'm'],
  description: "Sets up a hard knockdown not too far in front of Lancelot.\nLancelot's airthrow is similar to his forward throw in that you get a 236X setup for continued pressure.\nIf your reactions are on point, you can catch people jumping out of your rekka pressure with this. Just be warned you cannot do anything else until you land if it whiffs, so if you mess up your read you're going to get punished."
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
  motion: ['m', 'h'],
  description: "Airborne on frame 4, making it a good anti-throw option.\nLow crush on frame 9, tied with Gran for the fastest.\nThe can opener. Because Lancelot's Universal Overhead has 6 active frames, the right meaty setup will allow for a combo without a counterhit."
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
  moveName: 'L Wogenstrom', 
  altName: '236L', 
  damage: '700', 
  guard: 'All', 
  startup: '33', 
  active: '-', 
  recovery: '45 (Entire move)', 
  onblock: '+4', 
  onhit: '+8',
  oncounterhit: '+10',
  clash: '-',
  motion: ['236', 'l'],
  description: "Fires a projectile that travels across the stage. Very advantageous on contact and very important for his okizeme game. This skill has slow startup but fast recovery, so Lancelot can move and go on the offensive while the projectile is still onscreen. Keep in mind that in a neutral fireball fight you're likely to get hit out of the startup. Comboing into this from CH c.H(1) is possible and adds a good chunk of damage if you use 236H as it has enough hitstun for you to jump and land a j.H.\nFaster startup but also fast travel time.\nTravels fullscreen."
};
const mFireball = {
  moveName: 'M Wogenstrom', 
  altName: '236M', 
  damage: '700', 
  guard: 'All', 
  startup: '38', 
  active: '-', 
  recovery: '50 (Entire move)', 
  onblock: '+4', 
  onhit: '+8',
  oncounterhit: '+10',
  clash: '-',
  motion: ['236', 'm'],
  description: "Fires a projectile that travels across the stage. Very advantageous on contact and very important for his okizeme game. This skill has slow startup but fast recovery, so Lancelot can move and go on the offensive while the projectile is still onscreen. Keep in mind that in a neutral fireball fight you're likely to get hit out of the startup. Comboing into this from CH c.H(1) is possible and adds a good chunk of damage if you use 236H as it has enough hitstun for you to jump and land a j.H.\nSlower startup but also much slower travel time.\nTravels fullscreen.\nVery good to cover your approach because of how slow it travels."
};
const hFireball = {
  moveName: 'H Wogenstrom', 
  altName: '236H', 
  damage: '350x3', 
  guard: 'All', 
  startup: '33', 
  active: '-', 
  recovery: '41', 
  onblock: '+44', 
  onhit: '+48',
  oncounterhit: '+48',
  clash: '-',
  motion: ['236', 'h'],
  description: "Fires a projectile that travels across the stage. Very advantageous on contact and very important for his okizeme game. This skill has slow startup but fast recovery, so Lancelot can move and go on the offensive while the projectile is still onscreen. Keep in mind that in a neutral fireball fight you're likely to get hit out of the startup. Comboing into this from CH c.H(1) is possible and adds a good chunk of damage if you use 236H as it has enough hitstun for you to jump and land a j.H.\nHits 3 times.\nOnly travels 3/4 of the screen.\nHard knockdown on air hit.\nHits 3 times on both hit and block, making easy to confirm on hit and incredibly plus on block. If the opponent is caught blocking the projectile in the air, they can be hit with any other grounded move since mids are air-unblockable."
};

// dragon punches
const lUppercut = {
  moveName: 'L Blade Impulse', 
  altName: '66L', 
  damage: '800', 
  guard: 'Mid', 
  startup: '16', 
  active: '6', 
  recovery: '18', 
  onblock: '-9', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['6', '6', 'l'],
  description: "A sliding lunge attack. Depending on distance you're very likely to cross through the opponent on both hit and block. If spaced correctly every version can be safe on block.\nTravels about half screen.\nWhen used as a combo ender midscreen, it not only switches sides but the opponent recovers point blank so further pressure can be applied. Also used in high damage anti-air combos as it can be linked off of if it hits high enough."
};
const mUppercut = {
  moveName: 'M Blade Impulse', 
  altName: '66M', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '25', 
  active: '9', 
  recovery: '16', 
  onblock: '-6', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['6', '6', 'm'],
  description: "A sliding lunge attack. Depending on distance you're very likely to cross through the opponent on both hit and block. If spaced correctly every version can be safe on block.\nTravels about 3/4ths screen.\nSafe on block from most ranges and plus at the tip like 66H, albeit with much slower startup. Can be used to close the distance in neutral, as an anti-air/reversal punish combo tool, and as a niche meaty on far hard knockdowns or throws in the corner. If it counterhits at tip range, you can link into 5L for a brief combo extension off the mini-launch."
};
const hUppercut = {
  moveName: 'H Blade Impulse', 
  altName: '66H', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '20', 
  active: '9', 
  recovery: '16', 
  onblock: '-6', 
  onhit: 'HKD (+60)',
  oncounterhit: 'HKD (+64)',
  clash: '4',
  motion: ['6', '6', 'h'],
  description: "A sliding lunge attack. Depending on distance you're very likely to cross through the opponent on both hit and block. If spaced correctly every version can be safe on block.\nTravels the same distance as 66M.\nLaunches the opponent straight up on hit, allowing further combos on both far-spaced hits and in the corner where you remain close enough to link into c.H afterwards. Midscreen, it gives a hard knockdown and usually gives 236H oki or 5U~8U safe jump setups afterwards. If it hits at the very tip of its range, it leaves you plus on block as opposed to just safe."
};

// rekka
const lRekka = {
  moveName: 'L Southern Cross', 
  altName: '214L', 
  damage: '300', 
  guard: 'Mid', 
  startup: '14', 
  active: '5', 
  recovery: '13', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['214', 'l'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 3 times.\n214L links into 5L on standing counterhit and c.M on crouching counterhit\n214L~4L links into c.M on crouching counterhit only\nStaple follow-up after hitting with farther-ranged normals such as f.M/f.H/2M. Using a sequence like c.M > 5L > f.M > 214L to condition your opponent to block can open them up for further pressure, or a throw. Keep in mind that strings like 2L > 5L > f.M > 214L actually leave you slightly negative, and while c.M > c.M > f.M > 214L can still set up plus rekkas it leaves massive gaps in your pressure.\n214L being +1 on hit allows you to attempt a crush reset with c.M against opponents pressing 5L. Against characters whose fastest normal is 6f startup, c.H can be used instead."
};
const mRekka = {
  moveName: 'M Southern Cross', 
  altName: '214M', 
  damage: '400', 
  guard: 'Mid', 
  startup: '19', 
  active: '6', 
  recovery: '13', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['214', 'm'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 3 times.\nBoth 214M and 214M~4M link into 5L on crouching counterhit only\nSlower startup and farther travel distance than 214L. Staple combo ender after c.H or autocombo for damage and corner carry. The increased startup makes it decent as a frame trap out of autocombo and most normals, but this gap is large enough to be vulnerable to reversals. Since it travels farther than 214L, using this successfully on block when pushed out of 214L range maintains your frame advantage."
};
const hRekka = {
  moveName: 'H Southern Cross', 
  altName: '214H', 
  damage: '300', 
  guard: 'Mid', 
  startup: '11', 
  active: '3', 
  recovery: '15', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['214', 'h'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
};
const rekkaFollowUp1 = {
  moveName: 'L/M Southern Cross (2nd Hit)', 
  altName: '214XX', 
  damage: '400(L)/500(M)', 
  guard: 'Mid', 
  startup: '9', 
  active: '3', 
  recovery: '16', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['214', 'l', 'l'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
}
const rekkaFollowUp2 = {
  moveName: 'L/M Southern Cross (3rd Hit)', 
  altName: '214XXX', 
  damage: '500(L)/600(M)', 
  guard: 'Mid', 
  startup: '14', 
  active: '7', 
  recovery: '24', 
  onblock: '-16', 
  onhit: 'KD (0 for H)',
  oncounterhit: 'KD (+4 for H)',
  clash: '3',
  motion: ['214', 'l', 'l', 'l'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
}
const hRekkaFollowUp1 = {
  moveName: 'H Southern Cross (2nd Hit)', 
  altName: '214HH', 
  damage: '350', 
  guard: 'Mid', 
  startup: '7', 
  active: '3', 
  recovery: '16', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['214', 'h', 'h'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
}
const hRekkaFollowUp2 = {
  moveName: 'H Southern Cross (3rd Hit)', 
  altName: '214HHH', 
  damage: '400', 
  guard: 'Mid', 
  startup: '7', 
  active: '3', 
  recovery: '16', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['214', 'h', 'h', 'h'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
}
const hRekkaFollowUp3 = {
  moveName: 'H Southern Cross (4th Hit)', 
  altName: '214HHHH', 
  damage: '450', 
  guard: 'Mid', 
  startup: '7', 
  active: '3', 
  recovery: '16', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+4',
  clash: '3',
  motion: ['214', 'h', 'h', 'h', 'h'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
}
const hRekkaFollowUp4 = {
  moveName: 'H Southern Cross (5th Hit)', 
  altName: '214HHHHH', 
  damage: '500', 
  guard: 'Mid', 
  startup: '12', 
  active: '7', 
  recovery: '24', 
  onblock: '-16', 
  onhit: 'HKD (+47)',
  oncounterhit: 'HKD (+51)',
  clash: '3',
  motion: ['214', 'h', 'h', 'h', 'h', 'h'],
  description: "Technical inputs only require 214X for the first attack, while 4X is used for the follow-ups.\nMulti-part advancing slash attacks, colloquially known as \"rekkas\". The initial attack and first follow-ups are safe on block, allowing for pressure resets if you can scare your opponent with the frametrap properties of delayed follow-ups. Additionally, the initial attacks themselves can be spaced to be even or plus on block the further out they make contact. If they hit at the absolute max range, both 214L and 214M can be +1 on block. The enders have a small gap from the previous parts, which makes them a risky way to catch people mashing the follow-ups.\nCan hit up to 5 times.\nBecause 214X is a critical part of Lancelot's pressure and combos, putting the special on cooldown this way should be used sparingly, but can still be done to get a hard knockdown and a safe jump anywhere on screen. Delaying the follow-ups can be used to secure rounds against very low health opponents via chip damage, but this is still vulnerable to reversals."
}


const lTeleport = {
  moveName: 'L Turbulenz', 
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
  motion: ['2', '2', 'l'],
  description: "Lancelot teleports into the air. The horizontal distance depends on the button strength used. All versions can be held which will make Lancelot followup with a overhead plunging attack which is invincible on the way down, but extremely unsafe on block. On counter hit the opponent will bounce, allowing a high damage combo afterwards. Airborne on frame 4.\nTeleports about the distance of Lancelot's backdash.\nUnlikely to cross-up unless performed point-blank."
};
const mTeleport = {
  moveName: 'M Turbulenz', 
  altName: '22M', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm'],
  description: "Lancelot teleports into the air. The horizontal distance depends on the button strength used. All versions can be held which will make Lancelot followup with a overhead plunging attack which is invincible on the way down, but extremely unsafe on block. On counter hit the opponent will bounce, allowing a high damage combo afterwards. Airborne on frame 4.\nTeleports about the distance of two of Lancelot's backdashes.\nMore likely to crossup due to the distance it travels."
};
const hTeleport = {
  moveName: 'H Turbulenz', 
  altName: '22H', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '30 (Entire move)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'h'],
  description: "Lancelot teleports into the air. The horizontal distance depends on the button strength used. All versions can be held which will make Lancelot followup with a overhead plunging attack which is invincible on the way down, but extremely unsafe on block. On counter hit the opponent will bounce, allowing a high damage combo afterwards. Airborne on frame 4.\nTeleports farther than L/M version, but does not cross up.\nH teleport is the only invulnerable reversal Lancelot has other than his Skybound Arts, but it's often very risky to go for the full plunge because of the very slow startup. You can get by with just doing the teleport portion and either do a falling attack or fastfall to the ground with j.U, but either way leaves you vulnerable to anti-airs, including air throw."
};

const lTeleportAttack = {
  moveName: 'L Turbulenz (Hold)', 
  altName: '22[L]', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '16', 
  active: '8', 
  recovery: '30', 
  onblock: '-18', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'l'],
  description: "Lancelot teleports into the air. The horizontal distance depends on the button strength used. All versions can be held which will make Lancelot followup with a overhead plunging attack which is invincible on the way down, but extremely unsafe on block. On counter hit the opponent will bounce, allowing a high damage combo afterwards. Airborne on frame 4.\nTeleports about the distance of Lancelot's backdash.\nUnlikely to cross-up unless performed point-blank."
};
const mTeleportAttack = {
  moveName: 'M Turbulenz (Hold)', 
  altName: '22[M]', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '16', 
  active: '8', 
  recovery: '30', 
  onblock: '-18', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['2', '2', 'm'],
  description: "Lancelot teleports into the air. The horizontal distance depends on the button strength used. All versions can be held which will make Lancelot followup with a overhead plunging attack which is invincible on the way down, but extremely unsafe on block. On counter hit the opponent will bounce, allowing a high damage combo afterwards. Airborne on frame 4.\nTeleports about the distance of two of Lancelot's backdashes.\nMore likely to crossup due to the distance it travels."
};
const hTeleportAttack = {
  moveName: 'H Turbulenz (Hold)', 
  altName: '22[H]', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '16', 
  active: '8', 
  recovery: '30', 
  onblock: '-18', 
  onhit: 'HKD (+28)',
  oncounterhit: 'HKD (+63)',
  clash: '-',
  motion: ['2', '2', 'h'],
  description: "Lancelot teleports into the air. The horizontal distance depends on the button strength used. All versions can be held which will make Lancelot followup with a overhead plunging attack which is invincible on the way down, but extremely unsafe on block. On counter hit the opponent will bounce, allowing a high damage combo afterwards. Airborne on frame 4.\nTeleports farther than L/M version, but does not cross up.\nH teleport is the only invulnerable reversal Lancelot has other than his Skybound Arts, but it's often very risky to go for the full plunge because of the very slow startup. You can get by with just doing the teleport portion and either do a falling attack or fastfall to the ground with j.U, but either way leaves you vulnerable to anti-airs, including air throw."
};

// skybound art
const sba =  {
  moveName: 'Weiss Flugel', 
  altName: '236236H', 
  damage: '500,100×12,1200', 
  guard: 'Mid', 
  startup: '13->22', 
  active: '3', 
  recovery: '28', 
  onblock: '-12', 
  onhit: 'HKD (T:+45, S:+35)',
  oncounterhit: 'HKD (T:+45, S:+35)',
  clash: '-',
  motion: ['236', '236', 'h'],
  description: "Minimum damage: 800\nSimple input (236S) damage: 3000\nSimple input minimum damage: 450\nLoses invincibility after the startup but regains it on hit when the cinematic animation begins to play\nLancelot dashes forward with a slash and unleashes a flurry of slashes when he hits. Invincible startup and can travel about half screen if the opponent is far enough, but stops at the opponent's location regardless so it's very punishable on block or whiff. Using the 236236H technical input leaves Lancelot closer to the opponent afterwards, allowing for stronger okizeme."
};

const ssba =  {
  moveName: 'Schöner Winterhügel', 
  altName: '236236U', 
  damage: '4200', 
  guard: 'Mid', 
  startup: '16', 
  active: '4-15', 
  recovery: '25', 
  onblock: '-8~-9', 
  onhit: 'HKD (+50)',
  oncounterhit: 'HKD (+50)',
  clash: '-',
  motion: ['236', '236', 'u'],
  description: "Minimum damage: 1260\nSimple input (236S+U) damage: 4000\nSimple input minimum damage: 800\nA powerful diving attack with invincible startup.\nGround version automatically locks onto the opponent's position with no additional input, but can be manually angled by holding L (sharp angle, short range), M (shallow angle, far range), or H (shallow angle, full screen range) during startup.\nLancelot is only invincible during the startup when he jumps up to the wall so on the way down he can run into DPs, armored moves, and projectiles, making this a situationally worse reversal compared to 236236H.\nThere is a blind spot where the move can whiff when Lancelot is cornered, but intentionally whiffing 236236U~[H] can be a risky way to escape the corner.\nBecause of the time it takes for Lancelot to travel to the wall and back to the opponent, the opponent may tech out before it hits in some midscreen juggle combo situations when Lancelot's back is too far away from the wall. In this case, either use 236236H or save your meter.\nAir version dives from Lancelot's current position at a sharp angle, similar to a grounded 236236U~[L]. Does not track and cannot be manually aimed like the ground version.\nCan be used as a hard callout to crush anti-air attempts, but is even more unsafe than the ground version."
};
const airssba =  {
  moveName: 'Schöner Winterhügel (Air)', 
  altName: '236236U', 
  damage: '4200', 
  guard: 'All', 
  startup: '14', 
  active: 'Until landing +1', 
  recovery: '34', 
  onblock: '-16', 
  onhit: 'HKD (+50)',
  oncounterhit: 'HKD (+50)',
  clash: '-',
  motion: ['236', '236', 'u'],
  description: "Minimum damage: 1260\nSimple input (236S+U) damage: 4000\nSimple input minimum damage: 800\nA powerful diving attack with invincible startup.\nGround version automatically locks onto the opponent's position with no additional input, but can be manually angled by holding L (sharp angle, short range), M (shallow angle, far range), or H (shallow angle, full screen range) during startup.\nLancelot is only invincible during the startup when he jumps up to the wall so on the way down he can run into DPs, armored moves, and projectiles, making this a situationally worse reversal compared to 236236H.\nThere is a blind spot where the move can whiff when Lancelot is cornered, but intentionally whiffing 236236U~[H] can be a risky way to escape the corner.\nBecause of the time it takes for Lancelot to travel to the wall and back to the opponent, the opponent may tech out before it hits in some midscreen juggle combo situations when Lancelot's back is too far away from the wall. In this case, either use 236236H or save your meter.\nAir version dives from Lancelot's current position at a sharp angle, similar to a grounded 236236U~[L]. Does not track and cannot be manually aimed like the ground version.\nCan be used as a hard callout to crush anti-air attempts, but is even more unsafe than the ground version."
};


export const lanceInfo = [
  general,
  closeL,
  closeM,
  closeH,
  auto1,
  auto2,
  far5M,
  far5H,
  n2L,
  n2M,
  n2H,
  n2U,
  jL,
  jM,
  jH,
  lv1U,
  lv2U,
  lv3U,
  lv4U,
  lv5U,
  lv6U,
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
  rekkaFollowUp1,
  rekkaFollowUp2,
  hRekkaFollowUp1,
  hRekkaFollowUp2,
  hRekkaFollowUp3,
  hRekkaFollowUp4,
  lTeleport,
  mTeleport,
  hTeleport,
  lTeleportAttack,
  mTeleportAttack,
  hTeleportAttack,
  sba,
  airssba,
  ssba
]