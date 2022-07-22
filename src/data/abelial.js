// FINAL 

const general = { char: "Avatar Belial", health: '9000', prejump: '4F', backdash: '26F' }

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
  description: "+2 on block, excellent for pressure.\nLinks into c.M on hit.\nBelial's main pressure normal alongside 2L."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '12',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+8',
  clash: '3',
  motion: ['m'],
  description: "Links into 2L and c.L on crouching hit.\nLinks into c.H on counterhit."  
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '700,500',
  guard: 'Mid',
  startup: '8',
  active: '2,4',
  recovery: '18',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+1',
  clash: '5',
  motion: ['h'],
  description: "Two hits means counterhit links are limited.\nAvatar Belial's highest damage punish starter."
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
  description: "Standard combo filler. Be careful with this on block as the last hit is punishable unlike other autocombos."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '350',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "Standard combo filler. Be careful with this on block as the last hit is punishable unlike other autocombos."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '5',
  recovery: '12',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+2',
  clash: '2',
  motion: ['l'],
  description: "Belial's fastest button to stop people from running in on him. Always links out of 2L and c.L but should only really be used if no other options work. Also functions as a frame trap, but will lose to 5-frame normals if used after 2L."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '300, 500',
  guard: 'Mid',
  startup: '7',
  active: '1,3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '-2',
  clash: '3',
  motion: ['m'],
  description: "Two-hit far medium. Unsafe on block unlike normal Belial's version of the move."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '9',
  active: '4',
  recovery: '22',
  onblock: '-9',
  onhit: '-5',
  oncounterhit: '+3',
  clash: '4',
  motion: ['h'],
  description: "Shorter than it looks.\nAvatar Belial's longest range poke next to 2U. Always combos into 214L."
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Mid',
  startup: '5',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['2', 'l'],
  description: "Only 0 on block, use c.L when possible.\nAvatar Belial's version of a mid jab. Has some issues frame trapping due to being less plus than average, but it is a 5-frame crouching jab."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '600',
  guard: 'Low',
  startup: '6',
  active: '5',
  recovery: '13',
  onblock: '-3',
  onhit: 'KD',
  oncounterhit: 'KD(+6)',
  clash: '2',
  motion: ['2', 'm'],
  description: "Knocks opponent down on hit.\nAvatar Belial's fastest low at 6 frames. Does not combo into anything but special moves due to its knockdown properties and only consistently combos into 214L."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '11',
  active: '6[3,3]',
  recovery: '23',
  onblock: '-12',
  onhit: '-8',
  oncounterhit: '0',
  clash: '4',
  motion: ['2', 'h'],
  description: "Avatar Belial's highest reward anti-air."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '10',
  active: '6',
  recovery: '20',
  onblock: '-11',
  onhit: 'HKD(+44)',
  oncounterhit: 'HKD(+48)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Hard knockdown on hit."
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
  description: "Active until landing.\nHits entirely below and in front of Avatar Belial, making it a poor air-to-air option."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '7', 
  active: '6[2,4]', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Early active frames can cross up.\nAvatar Belial's longest range air normal and the most useful if you don't know which side he'll land on."
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
  description: "Avatar Belial's biggest jump-in."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '800', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['u'],
  description: "Sends Belial downwards at a 40° angle.\nBounces off opponent on hit or block.\nAvatar Belial's divekick."
};

// unique action
const laserBeam = { 
  moveName: 'Habakkuk', 
  altName: '5U', 
  damage: '700', 
  guard: 'All', 
  startup: '28', 
  active: '2', 
  recovery: '26', 
  onblock: '+4', 
  onhit: '+8',
  oncounterhit: '+12',
  clash: '-',
  motion: ['u'],
  description: "Whiffs against crouching opponents.\nCharged version knocks down on hit.\nThe first of Avatar Belial's three projectiles. Stops opponents from counterzoning due to the beam having negligable travel time. Charging the beam can also catch Rolls during their recovery."
};

const laserBeamCharged = { 
  moveName: 'Habakkuk (Charged)', 
  altName: '5U', 
  damage: '700', 
  guard: 'All', 
  startup: '49', 
  active: '2', 
  recovery: '14', 
  onblock: '+10', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['u'],
  description: "Whiffs against crouching opponents.\nCharged version knocks down on hit.\nThe first of Avatar Belial's three projectiles. Stops opponents from counterzoning due to the beam having negligable travel time. Charging the beam can also catch Rolls during their recovery."
};

const ABelCancel5U = { 
  moveName: 'Pact (Neutral)', 
  altName: '5U Follow Up', 
  damage: '1500', 
  guard: '-', 
  startup: '20?', 
  active: '3?', 
  recovery: '27?', 
  onblock: '-11', 
  onhit: 'KD (+18)',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['u'],
  description: "Invincible from 11?~20?. Startup/Active/Recovery are rough estimates.\nUsable after any special move connects except for Blind Devotion.\nCosts 500 health upon use.\nAvatar Belial's unique special move follow-ups. They both have different uses but complement his gameplan equally well.\nTeleports in front of the opponent.\nLaunches upwards.\nInvincible during startup and active frames.\nWhile Belial can't get a combo from this follow-up normally, it links into f.M on counterhit. The invincibility allows him to call out mashing and force respect after his special moves, but the health cost also adds to the potential punish if it is blocked. Better to threaten with than to use in most cases."
};

const ABelCancel8U = { 
  moveName: 'Pact (Up)', 
  altName: '8U Follow Up', 
  damage: '700', 
  guard: '-', 
  startup: '37?', 
  active: '8?', 
  recovery: '11', 
  onblock: '+2', 
  onhit: 'HKD (+35)',
  oncounterhit: 'HKD (+55)',
  clash: '3',
  motion: ['u'],
  description: "Invincible from 11?~23, airborne from 24~43? Startup/Active are rough estimates.\nUsable after any special move connects except for Blind Devotion.\nCosts 500 health upon use.\nAvatar Belial's unique special move follow-ups. They both have different uses but complement his gameplan equally well.\nTeleports above the opponent and stomps down.\nForces a hard knockdown on hit.\nAvatar Belial's other follow-up makes for an excellent combo ender. It will always give a hard knockdown on hit, allowing for consistent setplay."
};

const groundThrow = { 
  moveName: 'Forward Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+44), +24 after delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Same animation as Belial's.\nAllows for a safejump with j.H anywhere on the screen."
};

const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+38), 24 after delay tech',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Same animation as Belial's.\nAllows for a safejump with j.H anywhere on the screen."
};

const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '6F after landing', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: ""
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
  description: "Forces crouching on hit."
};

// fireballs
const lFireball = { 
  moveName: 'L Rejected Truth', 
  altName: '236L', 
  damage: '500, 100×3', 
  guard: 'All', 
  startup: '18', 
  active: '18', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Projectile travels until it hits the opponent, then turns into a three-hit projectile before de-spawning.\nL Version is unsafe at close range, safe at half max range, and plus at max range.\nH Version costs 500 health upon use.\nBelial creates an earthquake that travels around half the screen's length. The H version has enough hitstun to start a combo and enough blockstun to be plus at close range."
};
const mFireball = { 
  moveName: 'Destructive Delusions', 
  altName: '236M', 
  damage: '500, 200, 100×3', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '53', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Belial flings five Goetia projectiles in an arc. The bottom projectile does the most damage, followed by the second lowest, then the rest deal 100. Excellent complement to 236L/H as it covers a massive amount of air space."
};
const hFireball = { 
  moveName: 'H Rejected Truth', 
  altName: '236H', 
  damage: '600, 100×4', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '55', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Projectile travels until it hits the opponent, then turns into a three-hit projectile before de-spawning.\nL Version is unsafe at close range, safe at half max range, and plus at max range.\nH Version costs 500 health upon use.\nBelial creates an earthquake that travels around half the screen's length. The H version has enough hitstun to start a combo and enough blockstun to be plus at close range."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Blind Devotion', 
  altName: '623L', 
  damage: '1000',
  guard: 'All', 
  startup: '9', 
  active: '6', 
  recovery: '33', 
  onblock: '-23', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Air blockable and quite unsafe.\nPray this counterhits, otherwise it's gonna hurt Belial a lot."  
};
const mUppercut = { 
  moveName: 'M Blind Devotion', 
  altName: '623M', 
  damage: '700, 200, 100×4', 
  guard: 'Mid, Allx5', 
  startup: '9', 
  active: '2, 3x4, 4', 
  recovery: '34', 
  onblock: '-30', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "First hit is air unblockable.\nPretty good last-minute anti-air, but generally outclassed in reward by his 2H."
};
const hUppercut = { 
  moveName: 'H Blind Devotion', 
  altName: '623H', 
  damage: '700, 200, 50×4, 800', 
  guard: 'Mid', 
  startup: '9', 
  active: '2, 3x5', 
  recovery: '35', 
  onblock: '-30', 
  onhit: 'HKD (+38)',
  oncounterhit: 'HKD (+38)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Entirely air unblockable.\nCosts 500 health upon use.\nHigh damage and air unblockable throughout make this Belial's most consistent anti-air. It does not come cheap though, as it costs health and is very unsafe on block."
};

// rekka
const lRekka = { 
  moveName: 'L Carnal Passion', 
  altName: '214L', 
  damage: '400', 
  guard: 'Mid', 
  startup: '14', 
  active: '4', 
  recovery: '17', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '0',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Belial's rekka series. The follow-ups are all the same and combo into Pact enders\nFast and combos from 2M.\nStandard combo ender special. Provides a good enough knockdown, but really shines in its corner carry."
};
const mRekka = { 
  moveName: 'M Carnal Passion', 
  altName: '214M', 
  damage: '600', 
  guard: 'Mid', 
  startup: '22', 
  active: '6', 
  recovery: '15', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+2',
  clash: '5',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Belial's rekka series. The follow-ups are all the same and combo into Pact enders.\nMuch larger range at the cost of speed.\nLow crushes.\nWhile this version generally cannot be combo'd into without a counter hit, its extended range and low crush make it a better neutral tool. Avatar Belial can also catch people trying to punish it with Pact."
};
const hRekka = { 
  moveName: 'H Carnal Passion', 
  altName: '214H', 
  damage: '500', 
  guard: 'Mid', 
  startup: '16', 
  active: '4', 
  recovery: '15', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: '+2',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Belial's rekka series. The follow-ups are all the same and combo into Pact enders.\nCauses follow-up 2 to wallbounce.\nCosts 500 health upon use.\nCorner combo launcher. It's generally a better idea to use other specials first but Belial can still get basic knockdowns without this special using 623M or 623H."
};

const rekka2 = { 
  moveName: 'Carnal Passion Follow Up', 
  altName: '214X > 4X', 
  damage: '400', 
  guard: 'Mid', 
  startup: '9?', 
  active: '3?', 
  recovery: '22?', 
  onblock: '-8', 
  onhit: 'KD (+21)',
  oncounterhit: 'HKD',
  clash: '4',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Belial's rekka series. The follow-ups are all the same and combo into Pact enders."
};

const rekka3 = { 
  moveName: 'Carnal Passion Ender', 
  altName: '214X > 4X > 4X', 
  damage: '700', 
  guard: 'Mid', 
  startup: '13?', 
  active: '6?',
  recovery: '29?', 
  onblock: '-16', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Belial's rekka series. The follow-ups are all the same and combo into Pact enders."
};

const lHop = {
  moveName: "L Wings Bestowed",
  altName: '22L',
  damage: '-',
  guard: '-',
  startup: '16',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Belial begins to float in the air using his wings. His hurtbox is quite large during this move, making it risky to use. Belial can pick between four follow-ups while he floats."
}

const mHop = {
  moveName: "M Wings Bestowed",
  altName: '22M',
  damage: '-',
  guard: '-',
  startup: '23',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'm', 'a'],
  description: "Belial begins to float in the air using his wings. His hurtbox is quite large during this move, making it risky to use. Belial can pick between four follow-ups while he floats."
}

const hHop = {
  moveName: "H Wings Bestowed",
  altName: '22H',
  damage: '-',
  guard: '-',
  startup: '13',
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'h', 'a'],
  description: "Costs 500 health\nBelial begins to float in the air using his wings. His hurtbox is quite large during this move, making it risky to use. Belial can pick between four follow-ups while he floats."
}

const lStolas = {
  moveName: 'L Stolas',
  altName: '22L -> L',
  damage: '700',
  guard: '-',
  startup: '15',
  active: '6 -> 7',
  recovery: '11',
  onblock: '+1 -> +2',
  onhit: '+2 -> +3',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '2', 'l', 'l'],
  description: 'Plus on block.\nOnly hits the area directly below Belial, limiting its use.'
}

const mStolas = {
  moveName: 'M Stolas',
  altName: '22M -> L',
  damage: '700',
  guard: '-',
  startup: '15',
  active: '6 -> 10',
  recovery: '11',
  onblock: '+2 -> +3',
  onhit: '+3 -> +4',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['2', '2', 'm', 'l'],
  description: 'Plus on block.\nOnly hits the area directly below Belial, limiting its use.'
}

const hStolas = {
  moveName: 'H Stolas',
  altName: '22H -> L',
  damage: '700',
  guard: '-',
  startup: '15',
  active: '6 -> 10',
  recovery: '11',
  onblock: '+1 -> +2',
  onhit: '+2 -> +3',
  oncounterhit: 'HKD(+55)',
  clash: '3',
  motion: ['2', '2', 'h', 'l'],
  description: 'Plus on block.\nOnly hits the area directly below Belial, limiting its use.'
}

const lBeleth = {
  moveName: 'Beleth',
  altName: '22L -> M',
  damage: '600, 100x5',
  guard: '-',
  startup: '21',
  active: '8 -> 10',
  recovery: '11',
  onblock: '+2',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'l', 'm'],
  description: 'Plus on block.\nBelial dives at a shallower angle downwards, allowing him to hit opponents farther away. Hits at about the same angle as his command grab from Wings Bestowed.'
}

const mBeleth = {
  moveName: 'Beleth',
  altName: '22M -> M',
  damage: '600, 100x5',
  guard: '-',
  startup: '21',
  active: '8 -> 12',
  recovery: '11',
  onblock: '+2',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '2',
  motion: ['2', '2', 'm', 'm'],
  description: 'Plus on block.\nBelial dives at a shallower angle downwards, allowing him to hit opponents farther away. Hits at about the same angle as his command grab from Wings Bestowed.'
}

const hBeleth = {
  moveName: 'Beleth',
  altName: '22H -> M',
  damage: '600, 100x5',
  guard: '-',
  startup: '21',
  active: '8 -> 13',
  recovery: '11',
  onblock: '+2',
  onhit: 'HKD (+60)',
  oncounterhit: 'HKD (+60)',
  clash: '2',
  motion: ['2', '2', 'h', 'm'],
  description: 'Plus on block.\nBelial dives at a shallower angle downwards, allowing him to hit opponents farther away. Hits at about the same angle as his command grab from Wings Bestowed.'
}

const lBarbatos = {
  moveName: 'L Barbatos',
  altName: '22L -> H',
  damage: '2000',
  guard: 'Throw',
  startup: '30 -> 31',
  active: '2',
  recovery: '34',
  onblock: '-',
  onhit: 'HKD (+39)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'h'],
  description: 'Fast command grab.\nSurprise option from Wings Bestowed. Does the most damage from the M version, but 2K from the others is nothing to sneeze at.'
}

const mBarbatos = {
  moveName: 'M Barbatos',
  altName: '22M -> H',
  damage: '2500',
  guard: 'Throw',
  startup: '29 -> 33',
  active: '2',
  recovery: '34',
  onblock: '-',
  onhit: 'HKD (+39)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'h'],
  description: 'Fast command grab.\nSurprise option from Wings Bestowed. Does the most damage from the M version, but 2K from the others is nothing to sneeze at.'
}

const hBarbatos = {
  moveName: 'H Barbatos',
  altName: '22H -> H',
  damage: '2000',
  guard: 'Throw',
  startup: '30 -> 35',
  active: '2',
  recovery: '34',
  onblock: '-',
  onhit: 'HKD (+39)',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'h', 'h'],
  description: 'Fast command grab.\nSurprise option from Wings Bestowed. Does the most damage from the M version, but 2K from the others is nothing to sneeze at.'
}

const airLaser = {
  moveName: 'Habakkuk (Midair)',
  altName: '22X -> U',
  damage: '1000',
  guard: '-',
  startup: '27',
  active: '-',
  recovery: '-',
  onblock: '-4',
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  description: 'Uncharged version has a small hitbox.\nCharged version sweeps the screen.\nAvatar Belials long-range option while in Wings Bestowed. Knocks down on hit and deals respectable damage.'
}

const airLaserCharged = {
  moveName: 'Habakkuk Charged (Midair)',
  altName: '22X -> [U]',
  damage: '1100',
  guard: '-',
  startup: '27',
  active: '-',
  recovery: '-',
  onblock: '-9',
  onhit: 'KD',
  oncounterhit: '-',
  clash: '-',
  description: 'Uncharged version has a small hitbox.\nCharged version sweeps the screen.\nAvatar Belials long-range option while in Wings Bestowed. Knocks down on hit and deals respectable damage.'
}

// skybound art
const sba = { 
  moveName: 'Diafthora', 
  altName: '236236H', 
  damage: '3200', 
  guard: 'Mid', 
  startup: '12', 
  active: '7', 
  recovery: '32', 
  onblock: '-', 
  onhit: 'HKD (T:+43, S:+33)',
  oncounterhit: 'HKD (T:+43, S:+33)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "+43 KD advantage on technical input, +33 on simple.\nBelial performs a rising attack, followed by a downwards lunge."
};

const airSba = { 
  moveName: 'Diafthora (Air)', 
  altName: '236236H', 
  damage: '3200', 
  guard: 'Mid', 
  startup: '15', 
  active: 'til landing', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (T:+43, S:+33)',
  oncounterhit: 'HKD (T:+43, S:+33)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "+43 KD advantage on technical input, +33 on simple.\nBelial performs a rising attack, followed by a downwards lunge."
};

const ssba = { 
  moveName: 'Wild Sin', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'Throw/All', 
  startup: '13', 
  active: '2,2', 
  recovery: '100', 
  onblock: '-32', 
  onhit: 'HKD (T:+41, S:+31)',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "+41 KD advantage on technical input, +31 on simple.\nBelial's invincible command throw super. Can be combo'd into like a strike and turns into a projectile if the grab portion whiffs."
};


export const aBelialInfo = [
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
  laserBeam,
  laserBeamCharged,
  ABelCancel5U,
  ABelCancel8U,
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
  rekka2,
  rekka3,
  lBarbatos,
  mBarbatos,
  hBarbatos,
  lBeleth,
  mBeleth,
  hBeleth,
  lStolas,
  mStolas,
  hStolas,
  lHop,
  mHop,
  hHop,
  airLaser,
  airLaserCharged,
  sba,
  airSba,
  ssba
]