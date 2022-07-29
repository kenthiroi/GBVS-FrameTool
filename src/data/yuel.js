// MISSING SPECIFIC PARTS FOR YUELS PARRY STANCE

const general = { char: "Yuel", health: '10000', prejump: '4F', backdash: '17F' }

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
  description: "Pretty standard c.L. Used for pressure and tick throws. Has multiple strong linking options as well."
};
const closeM = {
  moveName: 'Close Medium',
  altName: 'cM',
  damage: '700',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '14',
  onblock: '-2',
  onhit: '+2',
  oncounterhit: '+6',
  clash: '3',
  motion: ['m'],
  description: "Unsure as to if it hits on both sides of Yuel.\nHas a very far activation range, which can be advantageous but can occasionally be a detriment when you want f.M instead.\nDespite being -2 on block rather than 0 like most c.Ms, has some use in pressure due to it's somewhat absurd activation range. Links naturally from c.L and 2L as well."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '600, 200x2',
  guard: 'Mid',
  startup: '8',
  active: '2,2,2',
  recovery: '21',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '0',
  clash: '5',
  motion: ['h'],
  description: "3-hit normal. All hits are cancelable into autocombo or specials.\nLike c.M, also has a somewhat far and strange activation range.\nYuel's c.H does a bit less damage than average but is pretty strong for pressure due to its speed and high hitstun. It is the only way to frametrap into H Foxflame and the only way to combo into H Foxflame on a grounded opponent, though they must be crouching. The speed and far activation range make it pretty strong in punish situations where some characters can only use medium or even only light normals."
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '400',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "Pretty standard GBVS autocombo. The final hit can frametrap into L Foxflame."
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '400',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "Pretty standard GBVS autocombo. The final hit can frametrap into L Foxflame."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '9',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+7',
  clash: '2',
  motion: ['l'],
  description: "A bit stubby, but it's a plus on block, and a standing low. Excellent for pressure and safely buffers into her L Starlit Sky. Can also notably link into 2M on counter hit or f.M on crouching counter hit."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '500, 200',
  guard: 'Mid',
  startup: '9',
  active: '3,1',
  recovery: '21',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '-3',
  clash: '3',
  motion: ['m'],
  description: "This is an amazing button and easily a candidate for one of the best f.Ms in the game.\n9 Frames on startup, Generally very unsafe if not canceled, but can be made safe by doing 236L.\nIt's 2 hits, with both hits being cancelable, making it very easy to hit confirm into options such as M Starry Sky, or either of her Skybound Arts.\nIt moves Yuel pretty far forward, making it excellent for whiff punishing.\nGenerally unreliable as a poking tool as it leaves you minus on block in your opponent's face, and punishable if uncancelled."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '19',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '+4',
  clash: '4',
  motion: ['h'],
  description: "A somewhat strange normal, but not entirely without purpose. Yuel retracts her hurtbox slightly and sticks out a very active, heavy priority hitbox, so it is decent as an anticipatory counterpoke to stuff weaker normals or forward movement. Can kind of be used as an AA but the hitbox got lowered and it is now not as useful for that. Combined with how far forward f5m reaches it can be tough to be ready to whiff punish this button."
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
  description: "Standard Granblue 2L. Has all of the same linking options and similar frame data to c.L, but hits low and has more range. 2L > f.L is generally a good string for a basic frametrap or punish starter."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Frame traps from f.L and even combos on counter hit.\nThe crouching complement to f.M. While it doesn't sport some of that normal's better qualities, its speed and deceptive range make it strong for neutral and punishing in its own right. Good to use as a supplement if people are trying to hit you out of f.M with crouching buttons."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '500x2',
  guard: 'Mid',
  startup: '11',
  active: '3,3',
  recovery: '24',
  onblock: '-10',
  onhit: '-6',
  oncounterhit: '-6',
  clash: '4',
  motion: ['2', 'h'],
  description: "Good hitbox even though the animation can look strange. Since its 2 hits, the counter hit property does not transfer from hit 1 to hit 2. Counter hit combos need the first hit to be cancelled. For example via 5U into Yugetsu. Regardless, non-counterhit 2H (both hits) combos into 22H. This means Yuel does not need a counterhit to do a damaging anti air combo."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '3',
  recovery: '24',
  onblock: '-12',
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Special cancellable\nYuel's highest range low outside of stance, pretty solid at beating people walking around thanks to Yuel's speed."
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
  description: "Active until landing.\nYuel's biggest air normal in terms of the X axis, making it her go-to air-to-air normal. Since it's Yuel's only non multi hit aerial it's the only one with a chance of comboing on counter hit off an air to air."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '300x2', 
  guard: 'High', 
  startup: '6,10', 
  active: '3,3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Only the first hit is an overhead.\nCan be crushed by lights though it's a rare occurance."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '400x2', 
  guard: 'High', 
  startup: '8,15', 
  active: '4(3)3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['h'],
  description: "Unique for a j.H, it can hit crossup.\nBoth hits are overheads.\nCan be crushed by lights though it's a rare occurance."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '200*n', 
  guard: 'High', 
  startup: '19', 
  active: '3,3,3...->1', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+2, +5 (Crossup)',
  oncounterhit: '+2, +5 (Crossup)',
  clash: '2',
  motion: ['u'],
  description: "Hits multiple times on the way down.\nCan pass behind opponent during the roll but will not need to be blocked crossup.\nNot a high.\nRecovery frame count starts when Yuel touches the ground.\nMOSTLY safe and plus on hit. Sometimes the very last hit can miss due to spacing making her punishable. Anti-air bait that beats regularly timed 2Hs but not DPs. Does not knock down, but is safe on block and plus on hit."
};

// unique action
const lv1U = { 
  moveName: 'Entering Stance', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Stance changes all of Yuel's normals and movement options. She retains access to her throws, though they perform an auto-dash before performing the throw (see Throw section).\nIf struck while in stance, Yuel does an automatic counter (Eye of the Sparrow).\nCounters mids.\nLoses to projectiles despite projectiles being classified as mids.\nLoses to lows, overheads, and throws.\nYuel cannot block during stance, but can perform Evade. She cannot perform Cross Over.\nYuel cannot walk forwards nor backwards during stance.\nYuel cannot run during stance. Run and backdash are replaced with a unique forward and backwards hop.\nBeats standard reversals such as DPs and strike-supers, but will not protect against projectile based supers such as  Gran's Catastrophe. This can be used to encourage enemies to mash low attacks and allow you to structure frame traps with her stance buttons."
};
const lv2U = { 
  moveName: 'Exiting Stance', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '12', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Invulnerable on frame 1~30\nStance changes all of Yuel's normals and movement options. She retains access to her throws, though they perform an auto-dash before performing the throw (see Throw section).\nIf struck while in stance, Yuel does an automatic counter (Eye of the Sparrow).\nCounters mids.\nLoses to projectiles despite projectiles being classified as mids.\nLoses to lows, overheads, and throws.\nYuel cannot block during stance, but can perform Evade. She cannot perform Cross Over.\nYuel cannot walk forwards nor backwards during stance.\nYuel cannot run during stance. Run and backdash are replaced with a unique forward and backwards hop.\nBeats standard reversals such as DPs and strike-supers, but will not protect against projectile based supers such as  Gran's Catastrophe. This can be used to encourage enemies to mash low attacks and allow you to structure frame traps with her stance buttons."
};
const lv3U = { 
  moveName: 'Stance Dash', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '20', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['6', '6'],
  description: "Airborne on frame 3~13\nStance changes all of Yuel's normals and movement options. She retains access to her throws, though they perform an auto-dash before performing the throw (see Throw section).\nIf struck while in stance, Yuel does an automatic counter (Eye of the Sparrow).\nCounters mids.\nLoses to projectiles despite projectiles being classified as mids.\nLoses to lows, overheads, and throws.\nYuel cannot block during stance, but can perform Evade. She cannot perform Cross Over.\nYuel cannot walk forwards nor backwards during stance.\nYuel cannot run during stance. Run and backdash are replaced with a unique forward and backwards hop.\nBeats standard reversals such as DPs and strike-supers, but will not protect against projectile based supers such as  Gran's Catastrophe. This can be used to encourage enemies to mash low attacks and allow you to structure frame traps with her stance buttons."
};
const lv4U = { 
  moveName: 'Stance Backdash', 
  altName: '-', 
  damage: '-', 
  guard: '-', 
  startup: '-', 
  active: '-', 
  recovery: '23', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', '4'],
  description: "Airborne on frame 3~16\nStance changes all of Yuel's normals and movement options. She retains access to her throws, though they perform an auto-dash before performing the throw (see Throw section).\nIf struck while in stance, Yuel does an automatic counter (Eye of the Sparrow).\nCounters mids.\nLoses to projectiles despite projectiles being classified as mids.\nLoses to lows, overheads, and throws.\nYuel cannot block during stance, but can perform Evade. She cannot perform Cross Over.\nYuel cannot walk forwards nor backwards during stance.\nYuel cannot run during stance. Run and backdash are replaced with a unique forward and backwards hop.\nBeats standard reversals such as DPs and strike-supers, but will not protect against projectile based supers such as  Gran's Catastrophe. This can be used to encourage enemies to mash low attacks and allow you to structure frame traps with her stance buttons."
};
const lv5U = { 
  moveName: 'Eye of the Sparrow',
  altName: '5U Counter', 
  damage: '700', 
  guard: '-', 
  startup: '7', 
  active: '9', 
  recovery: '21', 
  onblock: '-', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['u'],
  description: "Stance changes all of Yuel's normals and movement options. She retains access to her throws, though they perform an auto-dash before performing the throw (see Throw section).\nIf struck while in stance, Yuel does an automatic counter (Eye of the Sparrow).\nCounters mids.\nLoses to projectiles despite projectiles being classified as mids.\nLoses to lows, overheads, and throws.\nYuel cannot block during stance, but can perform Evade. She cannot perform Cross Over.\nYuel cannot walk forwards nor backwards during stance.\nYuel cannot run during stance. Run and backdash are replaced with a unique forward and backwards hop.\nBeats standard reversals such as DPs and strike-supers, but will not protect against projectile based supers such as  Gran's Catastrophe. This can be used to encourage enemies to mash low attacks and allow you to structure frame traps with her stance buttons."
};

const stance5L = {
  moveName: 'Third Dance: Stand Light',
  altName: 'td.5L',
  damage: '400',
  guard: 'Mid',
  startup: '5',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '2',
  motion: ['u', 'l'],
  description: "After any attack, Yuel will remain in Third Dance unless you press U during them.\ntd.5L is a clash level above normal, so it will crush every jab except Vaseraga's, making td.5L > td.5L a universal, true frame trap. It can be cancelled into itself, td.2L and td.2M.\ntd.2L is great after 2M to catch someone off guard, but generally, pressing td.2L means you will be hit out of stance. With a -3 frame data, a blocking opponent pressing 2L will hit Yuel after td.2L. Use with caution. Combos into c.L and td.5L on counter hit. It has extremely high priority and will crush level 2 normals.\ntd.5M forces crouch on hit and crushes throws. It does not crush lows, but lifts Yuel's hurtbox above the ground during its startup frames, so it will go over lows if timed properly. On block, it leaves a 10 frame gap if cancelled into from td.5L. Combos into Yugetsu on counter hit, but it also combos into c5H if you leave stance. Also combos into f5m on crouching counter hit.\ntd.2M can recover quickly enough to parry wakeup reversals if it's meaty enough. Useful for pressure as it's +2 even if you cancel stance from it. Converts into Yugetsu on counter hit"
}
const stance2L = {
  moveName: 'Third Dance: Crouch Light',
  altName: 'td.2L',
  damage: '600',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['u', '2', 'l'],
  description: "After any attack, Yuel will remain in Third Dance unless you press U during them.\ntd.5L is a clash level above normal, so it will crush every jab except Vaseraga's, making td.5L > td.5L a universal, true frame trap. It can be cancelled into itself, td.2L and td.2M.\ntd.2L is great after 2M to catch someone off guard, but generally, pressing td.2L means you will be hit out of stance. With a -3 frame data, a blocking opponent pressing 2L will hit Yuel after td.2L. Use with caution. Combos into c.L and td.5L on counter hit. It has extremely high priority and will crush level 2 normals.\ntd.5M forces crouch on hit and crushes throws. It does not crush lows, but lifts Yuel's hurtbox above the ground during its startup frames, so it will go over lows if timed properly. On block, it leaves a 10 frame gap if cancelled into from td.5L. Combos into Yugetsu on counter hit, but it also combos into c5H if you leave stance. Also combos into f5m on crouching counter hit.\ntd.2M can recover quickly enough to parry wakeup reversals if it's meaty enough. Useful for pressure as it's +2 even if you cancel stance from it. Converts into Yugetsu on counter hit"
}
const stance5M = {
  moveName: 'Third Dance: Stand Medium',
  altName: 'td.5M',
  damage: '800',
  guard: 'Mid',
  startup: '16',
  active: '4',
  recovery: '13',
  onblock: '0',
  onhit: '+5',
  oncounterhit: '+13',
  clash: '4',
  motion: ['u', 'm'],
  description: "After any attack, Yuel will remain in Third Dance unless you press U during them.\ntd.5L is a clash level above normal, so it will crush every jab except Vaseraga's, making td.5L > td.5L a universal, true frame trap. It can be cancelled into itself, td.2L and td.2M.\ntd.2L is great after 2M to catch someone off guard, but generally, pressing td.2L means you will be hit out of stance. With a -3 frame data, a blocking opponent pressing 2L will hit Yuel after td.2L. Use with caution. Combos into c.L and td.5L on counter hit. It has extremely high priority and will crush level 2 normals.\ntd.5M forces crouch on hit and crushes throws. It does not crush lows, but lifts Yuel's hurtbox above the ground during its startup frames, so it will go over lows if timed properly. On block, it leaves a 10 frame gap if cancelled into from td.5L. Combos into Yugetsu on counter hit, but it also combos into c5H if you leave stance. Also combos into f5m on crouching counter hit.\ntd.2M can recover quickly enough to parry wakeup reversals if it's meaty enough. Useful for pressure as it's +2 even if you cancel stance from it. Converts into Yugetsu on counter hit"
}
const stance2M = {
  moveName: 'Third Dance: Crouch Medium',
  altName: 'td.2M',
  damage: '600',
  guard: 'Low',
  startup: '10',
  active: '6',
  recovery: '5',
  onblock: '+2',
  onhit: '+6',
  oncounterhit: '+8',
  clash: '2',
  motion: ['u', '2', 'm'],
  description: "After any attack, Yuel will remain in Third Dance unless you press U during them.\ntd.5L is a clash level above normal, so it will crush every jab except Vaseraga's, making td.5L > td.5L a universal, true frame trap. It can be cancelled into itself, td.2L and td.2M.\ntd.2L is great after 2M to catch someone off guard, but generally, pressing td.2L means you will be hit out of stance. With a -3 frame data, a blocking opponent pressing 2L will hit Yuel after td.2L. Use with caution. Combos into c.L and td.5L on counter hit. It has extremely high priority and will crush level 2 normals.\ntd.5M forces crouch on hit and crushes throws. It does not crush lows, but lifts Yuel's hurtbox above the ground during its startup frames, so it will go over lows if timed properly. On block, it leaves a 10 frame gap if cancelled into from td.5L. Combos into Yugetsu on counter hit, but it also combos into c5H if you leave stance. Also combos into f5m on crouching counter hit.\ntd.2M can recover quickly enough to parry wakeup reversals if it's meaty enough. Useful for pressure as it's +2 even if you cancel stance from it. Converts into Yugetsu on counter hit"
}
const stanceGurren = {
  moveName: 'Third Dance: Gurren',
  altName: 'td.5H',
  damage: '1000',
  guard: 'All',
  startup: '15⇒28',
  active: '11',
  recovery: '14',
  onblock: '-6',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['u','h'],
  description: "Chargeable advancing attack. Used to cover ground while in stance and potentially reset your pressure.\nGood option after canceling into stance from Hanaarashi's backstep if your opponent is blocking or attempting to chase you down.\nCan be very plus on block and on hit if well spaced. Yuel will automatically exit stance afterwards, allowing you to pick up a combo on a well-spaced hit.\nCan combo into 2M if spaced well on non ch."
}
const stanceGurrenCharged = {
  moveName: 'Third Dance: Gurren (Charged)',
  altName: 'td.5[H]',
  damage: '1000',
  guard: 'All',
  startup: '29',
  active: '11',
  recovery: '14',
  onblock: '-6',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '5',
  motion: ['u','h'],
  description: "Chargeable advancing attack. Used to cover ground while in stance and potentially reset your pressure.\nGood option after canceling into stance from Hanaarashi's backstep if your opponent is blocking or attempting to chase you down.\nCan be very plus on block and on hit if well spaced. Yuel will automatically exit stance afterwards, allowing you to pick up a combo on a well-spaced hit.\nCan combo into 2M if spaced well on non ch."
}
const stanceYugetsu = {
  moveName: 'Third Dance: Yugetsu',
  altName: 'td.2H',
  damage: '1000',
  guard: 'All',
  startup: '11',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u','2', 'h'],
  description: "Yuel's AA while in stance\nLaunches on hit.\nConverts out of a good number of her stance options on counter hit, giving her high reward for successfully landing a frame trap. Yuel automatically exits Third Dance if she uses this move."
}

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw',
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'Late (+24), Forward (+44), Back(+34)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Standard throw. Third Dance version performs an automatic stance hop forward before performing the throw, making sure you're always close to the opponent first. This increases the startup significantly, however.\nForward throw allows for a DP-safe meaty low in the corner: LM~U > td.5M (whiff) > td.2M\nAlternatively, you can set up a safejump with microwalk jump j.H\nYou can press 5U during the throw animation and enter/leave stance."
};

const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '+48',
  oncounterhit: '-',
  clash: '-',
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
  oncounterhit: '+2',
  clash: '2',
  motion: ['m', 'u'],
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

// fireballs
const lFireball = { 
  moveName: 'L Starlit Sky', 
  altName: '236L', 
  damage: '900', 
  guard: 'All', 
  startup: '14', 
  active: '4,4,4', 
  recovery: '16', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: '+1',
  clash: '2',
  motion: ['236', 'l', 'or', 'a'],
  description: "Pressing U will transition Yuel into Third Dance during recovery.\nAn advancing special that trades priority and velocity for safety. Due to 236L's and 236H's extremely quick startups, they won't leave a gap when cancelled into from M or H normals on block unless they are delay cancelled and spaced at the tip of f5m.\nFast startup and safe on block.\nSince M knocks down on hit, people might get counterhit after 236L on hit as they tried to tech.\nL Starlit Sky is a safe way to transition into stance offense, as Yuel is +1 on hit."
};
const mFireball = { 
  moveName: 'M Starlit Sky', 
  altName: '236M', 
  damage: '1100', 
  guard: 'All', 
  startup: '18', 
  active: '2,2,2,2,2,2,4', 
  recovery: '21', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Pressing U will transition Yuel into Third Dance during recovery.\nAn advancing special that trades priority and velocity for safety. Due to 236L's and 236H's extremely quick startups, they won't leave a gap when cancelled into from M or H normals on block unless they are delay cancelled and spaced at the tip of f5m.\nSlow startup and unsafe on block.\nSoft knockdown\n236M frame traps from almost any normal, but is easily punishable on block."
};
const hFireball = { 
  moveName: 'H Starlit Sky', 
  altName: '236H', 
  damage: '1100', 
  guard: 'All', 
  startup: '14', 
  active: '2,2,2,2,2,2,4',
  recovery: '16', 
  onblock: '-3', 
  onhit: 'KD (+53/+60 in the corner)',
  oncounterhit: 'KD (+53/+60 in the corner)',
  clash: '4',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Pressing U will transition Yuel into Third Dance during recovery.\nAn advancing special that trades priority and velocity for safety. Due to 236L's and 236H's extremely quick startups, they won't leave a gap when cancelled into from M or H normals on block unless they are delay cancelled and spaced at the tip of f5m.\nBest of both worlds.\nWallbounces in the corner.\nYuel's main juggle starter."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Hien: Homuragaeshi', 
  altName: '623L', 
  damage: '1000', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2,2,3,2,2,2', 
  recovery: '33', 
  onblock: '-27', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Pressing U will transition Yuel into Third Dance during landing\nYuel's invincible reversal. Its multiple hits make it shine in certain situations such as against Vaseraga's Soul Forge, but it has a tendency to whiff against deep jump-ins.\nGo-to reversal due to speed and not costing resources.\n623L is the least damaging version and gives the worst okizeme on hit. However, due to its low cost and quick startup, you'll see it frequently used as a reversal."  
};
const mUppercut = { 
  moveName: 'M Hien: Homuragaeshi', 
  altName: '623M', 
  damage: '1200', 
  guard: 'Mid, All', 
  startup: '11', 
  active: '2,2,2,2,2,2,2,2', 
  recovery: '35', 
  onblock: '-32', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Pressing U will transition Yuel into Third Dance during landing\nYuel's invincible reversal. Its multiple hits make it shine in certain situations such as against Vaseraga's Soul Forge, but it has a tendency to whiff against deep jump-ins.\nBetter as a combo ender than a reversal.\n623M is slower and more damaging. Useful as a combo ender as it does more damage and gives better okizeme than 236M, in exchange for less corner carry. You'll however rarely see this as a reversal."  
};
const hUppercut = { 
  moveName: 'H Hien: Homuragaeshi', 
  altName: '623H', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '9', 
  active: '2,2,2,2,2,2,2,2,2,2', 
  recovery: '39', 
  onblock: '-40',
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+52)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Pressing U will transition Yuel into Third Dance during landing\nYuel's invincible reversal. Its multiple hits make it shine in certain situations such as against Vaseraga's Soul Forge, but it has a tendency to whiff against deep jump-ins.\nInvincible reversal.\nBuilds a ton of meter on hit.\nHard knockdown on hit.\n623H is the most damaging version and gives the best okizeme, giving Yuel enough time to dash up and do a crossup j.H safejump. Sometimes used as a combo ender and sometimes as a reversal." 
};

// rekka
const lRekka = { 
  moveName: 'L Hanaarashi', 
  altName: '214L', 
  damage: '1200', 
  guard: 'All', 
  startup: '46', 
  active: '3x2', 
  recovery: '13', 
  onblock: '+1', 
  onhit: '+5',
  oncounterhit: '+5',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};
const mRekka = { 
  moveName: 'M Hanaarashi', 
  altName: '214M', 
  damage: '1000', 
  guard: 'Low', 
  startup: '41', 
  active: '6', 
  recovery: '18', 
  onblock: '-7', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};
const hRekka = { 
  moveName: 'H Hanaarashi', 
  altName: '214H', 
  damage: '1200', 
  guard: 'All', 
  startup: '42', 
  active: '3x2', 
  recovery: '12', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};

const hMRekka = { 
  moveName: 'H Hanaarashi -> M', 
  altName: '214H', 
  damage: '1000', 
  guard: 'Low', 
  startup: '38', 
  active: '6', 
  recovery: '15', 
  onblock: '-4', 
  onhit: 'HKD (+58)',
  oncounterhit: 'HKD (+62)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "The lunge forward can be cancelling by pressing 5U, Yuel will instead enter her stance.\nThe L and H versions are plus on block and combo on hit.\nThe M and H~M versions can be made safe if spaced\nFlipping back can be used to create space and let Yuel reset to neutral after an approach Yuel can 214L after a 236L on block and the opponent can't hit her out of it. Forcing the opponent to run up and challenge with a low on a read, which in turn loses to her flipping forward.\n214L and 214M are invulnerable on frame 3, and 214H is invulnerable on frame 1. Don't abuse these moves too much, however, as the followups can be easily caught with long pokes, or blown through with DPs or SBAs."
};

//
const lFlame = {
  moveName: 'L Foxflame', 
  altName: '22L', 
  damage: '800', 
  guard: 'All', 
  startup: '21', 
  active: '9', 
  recovery: '17', 
  onblock: '-3', 
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Pressing U will transition Yuel to Third Dance during the recovery.\nLots of active frames, making it good as a meaty against characters without meterless reversals.\n22L will frame trap from full autocombo, but it's only +5 on counter hit and will put you just outside of c.L's activation range, meaning your reward for hitting it on a standing opponent is minimal, and you'll lose your turn if it's blocked. It also frame traps from 2H(1), which does leave you close enough for a c.L combo, but only at point blank range."
};
const mFlame = {
  moveName: 'M Foxflame', 
  altName: '22M', 
  damage: '1000', 
  guard: 'All', 
  startup: '31', 
  active: '9', 
  recovery: '13', 
  onblock: '+5', 
  onhit: '+9',
  oncounterhit: '+13',
  clash: '3',
  motion: ['2', '2', 'm', 'or', '2', 'a', 'm'],
  description: "Pressing U will transition Yuel to Third Dance during the recovery.\nLots of active frames, making it good as a meaty against characters without meterless reversals.\n22M is the slowest but most advantageous version. It will never frame trap, but because Yuel moves forward during its startup, it can be used as a disrespectful pressure extension once your opponent starts respecting your actual frame traps. If your opponent somehow gets hit by this, you can follow up with a c.H combo."
};
const hFlame = {
  moveName: 'H Foxflame', 
  altName: '22H', 
  damage: '1200', 
  guard: 'All', 
  startup: '23', 
  active: '9', 
  recovery: '13', 
  onblock: '+1', 
  onhit: '+5',
  oncounterhit: '+9',
  clash: '3',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Pressing U will transition Yuel to Third Dance during the recovery.\nLots of active frames, making it good as a meaty against characters without meterless reversals.\n22H frame traps from c.H and grants a c.H combo on CH. If your opponent doesn't mash, you can continue pressure due to it being advantageous on block. In addition, it will always combo from an air hit of 2H, making it useful for anti-air combos and certain punishes."
};

// skybound art
const sba = { 
  moveName: 'Crimson Dance: Rinnen-aratame', 
  altName: '236236H', 
  damage: '3200', 
  guard: 'All', 
  startup: '14->23', 
  active: '3', 
  recovery: '39', 
  onblock: '-23', 
  onhit: 'HKD (Simple: +36/Tech: +46)',
  oncounterhit: 'HKD (Simple: +36/Tech: +46)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Minimum damage: 800\nSimple input (236S) damage: 3000\nSimple input minimum damage: 450\nLoses invincibility after the startup but regains it on hit when the cinematic animation begins to play"
};
const ssba = { 
  moveName: 'Sapphire Dance: Gentiana', 
  altName: '236236U', 
  damage: '4000', 
  guard: 'All', 
  startup: '14', 
  active: '3x10', 
  recovery: '40', 
  onblock: '-24', 
  onhit: 'HKD (S:+33, T:+43)',
  oncounterhit: 'HKD (S:+33, T:+43)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Vacuums even on whiff, but the cinematic will only play if the opponent is drawn in and hit during the first few moments of the animation. The long animation will catch attempted Evades."
};


export const yuelInfo = [
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
  stance5L,
  stance5M,
  stance2L,
  stance2M,
  stanceGurren,
  stanceGurrenCharged,
  stanceYugetsu,
  groundThrow,
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
  hMRekka,
  lFlame,
  mFlame,
  hFlame,
  sba,
  ssba
]