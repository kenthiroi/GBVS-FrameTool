// FINAL 

const general = { char: "Metera", health: '9500', prejump: '4F', backdash: '22F' }

// close normals
const closeL = {
  moveName: 'Close Light',
  altName: 'cL',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '3',
  recovery: '8',
  onblock: '0',
  onhit: '+4',
  oncounterhit: '+6',
  clash: '1',
  motion: ['l'],
  description: "Her fastest standing normal\nOff knockdowns you can safe jab 11 frame or slower DP character\nTrue Blockstrings are:\nc.L > c.2L | c.5L > Auto Combo | c.L > c.L (Strict Timing)\nNormal hit confirms from this button are:\nc.L > Auto Combo | c.L > c.L | c.L > 2L | c.L > f.L (Crouching only) | c.L > Starry Sky(High/Low) | c.L > SBA/SSBA\nCounterhit confirms include the above and also\nc.L > The Great Fall(H) (Standing only)\nAir Counter Hits confirm, very rare but sometimes c.L can interrupt some character moves\nc.L > 2H > loop  - this is the one of the best case route but all the other above work as well"
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
  description: "Great button for punishes and some character interruptions\nHitbox extending behind Metera head so can hit low crossover attempts, Does not reach above her head so use 1H instead in those situations\nTrue Blockstrings :\nc.M > Auto combo | c.M > Starry Sky(High/Low)\nHit Confirms :\nc.M > Auto Combo | c.M > Starry Sky(High/Low) | c.M > The Great Fall(H) (Standing only) | c.M > SSA/SSBA\nCounter Hit Confirms :\nc.M > c.L | c.M > 2L | c.M > c.M | c.M > 2M\nSituational Counter Hit Air confirms :\nc.M > 5u > j.M | c.M > 2H > AA Route | c.M > 2U"
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '400,300x2',
  guard: 'Mid',
  startup: '11',
  active: '2,2,2',
  recovery: '21',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '0',
  clash: '5',
  motion: ['h'],
  description: "Hits 3 times\nSlow and rewarding tool for punishing DPs and SBAs. You can cancel it into specials or auto combos after any hit made.\nStrong on a clash due to it being multi hitting\nHitbox hits up above Metera's head so it can be used as a situational Anti-Air.\nTrue Blockstrings :\nc.H > Auto Combo | c.H > Starry Sky(High/Low) | c.H > The Great Fall(H) (Standing only)\nHit Confirms :\nc.H > Auto Combo | c.H > Starry Sky(High/Low) | c.H > The Great Fall(H) (Standing only) | c.H > SBA/SSBA\nCounter Hit Only Confirms :\nc.H(1 hit) > 5U > j.H | c.H(1 hit) > Universal Overhead\nSituational Air Counter Hit Only Confirms :\nc.H(1 hit) > Aetherial Seal(H) > c.H > Starry Sky High(H)"
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '300',
  guard: 'Mid',
  startup: '9',
  active: '3',
  recovery: '15',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['l', 'l'],
  description: "Primary combo that leads to a special move\nC.xx and c.xxx have the same cancel properties\nFor punishes it does less damage scaling if you super cancel after c.XX rather than c.XXX\nOn block doing 4U after auto combo is a simple way to retreat and reset neutral.\nTrue Blockstrings :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H)\nHit confirms :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H) (Standing only) | c.xx/c.xxx > SBA/SSBA"
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '300',
  guard: 'Mid',
  startup: '12',
  active: '3',
  recovery: '18',
  onblock: '-4',
  onhit: '0',
  oncounterhit: '+8',
  clash: '4',
  motion: ['l', 'l', 'l'],
  description: "Primary combo that leads to a special move\nC.xx and c.xxx have the same cancel properties\nFor punishes it does less damage scaling if you super cancel after c.XX rather than c.XXX\nOn block doing 4U after auto combo is a simple way to retreat and reset neutral.\nTrue Blockstrings :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H)\nHit confirms :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H) (Standing only) | c.xx/c.xxx > SBA/SSBA"
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Low',
  startup: '8',
  active: '6',
  recovery: '6',
  onblock: '+1',
  onhit: '+5',
  oncounterhit: '+7',
  clash: '2',
  motion: ['l'],
  description: "Plus on block low hitting poke\nGreat at checking opponent ground movement as well as catching rolls\nCan safe jab 9 frame DPs on their wakeups\nCan interrupt some far reaching specials moves from reaching you\nNo True blockstring from this move\nHit Confirms, Note these can change depending on the range\nf.L > f.L > f.L | f.L > Starry Sky Low (M/H)(L version works still but only hits close) | f.L > Starry Sky High(M/H) (Very close crouching or Standing only) |  f.L > SBA\nCounterhit Confirms : Note these can change depending on the range\nf.L > 2M(Crounching only) | f.L > Starry Sky Low(L) | f.L > The Great Fall(H) | f.L > SSBA"
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '9[2,3,4]',
  recovery: '15',
  onblock: '-7',
  onhit: '-3',
  oncounterhit: '+1',
  clash: '3',
  motion: ['m'],
  description: "Wide and vertical poke, covers a good amount of space and doubles as a pseudo anti-air\nThe pushblock on block gives you enough space to walk backwards to dodge and punish a counterpoke\nGreat for stopping people who jump and block, but has the same clash level as most M air normals\nTrue Blockstring, Note it's range dependent\nf.M > Starry Sky(Low) | f.M > Starry Sky(High) (Very close crouching or Standing only)\nHit Confirms, Each also work off air hit but dependent on their height\nf.M > The Great Fall (H) | f.M > Starry Sky(Low) | f.M > Starry Sky(High) (Very close crouching or Standing only) | f.M > SBA/SSBA\nAir Counter Hit Only :\nf.M > 5U > j.M"
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '800',
  guard: 'All',
  startup: '15',
  active: '15',
  recovery: '44',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '0',
  clash: '-',
  motion: ['h'],
  description: "Your Projective Poke button.\nOn hit or block allows you to cancel into Specials, 5U, Spot Dodge, or Supers on the same frame. (Note on projective clash does not let you special cancel)\nBig Buffer window for specials cancels so your next move will startup the frame they block or get hit.\nTravels half screen allowing you to outrange other characters pokes.\nActives Aetherial Seal\nSlower startup than Starry Sky with the less recovery than Starry Sky\nYou can string into Starry Sky and Great Fall for a true blockstring up close with dashing momentum\nHit Confirms\nf.H > Starry Sky Low(M/H) | f.H > Starry Sky High(M/H)(Very close crouching or Standing only) | f.H > The Great Fall(H)(Very Close standing only) f.H > SBA/SSBA\nAir Counter only Confirms\nf.H > 5U > j.M"
};

// regular normals
const n2L = {
  moveName: 'Crouch Light',
  altName: '2L',
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '9',
  onblock: '-1',
  onhit: '+3',
  oncounterhit: '+5',
  clash: '1',
  motion: ['2', 'l'],
  description: "Metera's fastest Low\nOff knockdowns you can safe jab 11 frame or slower DP character\nLow Pushback making a good Tick throw button\nTrue Blockstring :\n2L > 2L | 2L > c.L | 2L > f.L (Crouching Only)\nHit Confirms\n2L > 2L | 2L > c.L > Auto Combo | 2L > Starry Sky (High/Low) | 2L > SBA/SSBA\nCounter Hit Confirms\n2L > The Great Fall(H) (Standing Only)"
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '6',
  recovery: '12',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Metera's farthest horizonal poke\nGreat punish button\nTrue Blockstring\n2M > Starry Sky(High/Low) (close range for each version)\nHit confirms\n2M > Starry Sky(Low) | 2M > Starry Sky(High) (Close crouching or Standing only) | 2M > The Great Fall(H) | 2M > SBA/SSBA"
};
const n2H = {
  moveName: 'Crouch Heavy (2H)',
  altName: '2H',
  damage: '800',
  guard: 'All',
  startup: '11',
  active: '-',
  recovery: '40',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '0',
  clash: '-',
  motion: ['2', 'h'],
  description: "Major anti-air move and combo starter/extender. Is a projectile and can therefore be blocked in the air\nUsing 2H makes the arrow fly in a 45° angle, covers a lot of air space and air stalls\nOn hit or block allows you to cancel into Specials, 5U, Spot Dodge, or Supers. (Note on projective clash does not let you special cancel)\nHuge hitstun on counter hit, they won't recover until they hit the ground. Allows combos like 2H>5U>j.H and impractical links like 2H>2U\nTriggers Aetherial Seal and good for shooting charged Aetherial Seals\nNo pushback on block which can lead to frametraps like 2H > delay The Great Fall(H) or 2H > delay Starry Sky(H)"
};
const n1H = {
  moveName: 'Crouch Heavy (1H)',
  altName: '1H',
  damage: '800',
  guard: 'All',
  startup: '11',
  active: '-',
  recovery: '40',
  onblock: '-8',
  onhit: '-4',
  oncounterhit: '0',
  clash: '-',
  motion: ['1', 'h'],
  description: "Mostly identical with 2H only different is the angle it will shoot at.\nGreat at hitting people who jump/superjump on top of you.\nAir Blockable\nOn hit or block allows you to cancel into Specials, 5U, Spot Dodge, or Supers. (Note on projective clash does not let you special cancel)\nHuge hitstun on counter hit, they won't recover until they hit the ground. Allows combos like 1H > 2H > The Great Fall (H) and impractical links like 2H> 2U\nTriggers Aetherial Seal\nNo pushback on block which can lead to frametraps like 1H > delay The Great Fall (H) or 2H > delay Starry Sky(H)"
}
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '13',
  active: '15',
  recovery: '14',
  onblock: '-14',
  onhit: 'HKD (+41)',
  oncounterhit: 'HKD (+45)',
  clash: '2',
  motion: ['2', 'u'],
  description: "Mid-range slide that shoots Metera forward and hits Low\nMakes a good whiff punish tool for high recovery moves, also can interrupt some moves from reaching you\nUnable to special cancel from this button\nFrame advantage is better on block the further you initiate the slide.\nKnockdowns on hit which gives you time to setup Aetherial Seal."
};

// jump normals
const jL = { 
  moveName: 'Jump Light', 
  altName: 'jL', 
  damage: '400', 
  guard: 'High', 
  startup: '6', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['l'],
  description: "Metera's fastest air attack.\nClashes with L Normals\nLowest blockstun on block which sets up auto tick throws\nThe frame advantage on block depends on the height. At the highest it's even and at it's lowest it's plus\nHitbox hits extends behind Metera so can be use as a cross up.\nCan special cancel on hit or block into Air Starry Sky(High/Low).\nOn Air counter hit, opponent will not recover until they reach the ground. It's possible to link Air Starry Sky before they land"
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '300x2', 
  guard: 'High', 
  startup: '8', 
  active: '3(5)3', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['m'],
  description: "Metera's j.M is solid air poke with good attack level and fast startup for its range.\nj.M is 2-hit move allows Metera to do solid high/low mixups with slightly changing the timing of j.M.\nBoth Hits clashes with M Normals\nAfter Zephyr into j.M The first hit will bring up for hurtbox and you can jump over some special moves and punish.\nOn hit or block of the 1st hit of j.M, you can special cancel into air starry sky\nOn Air counter hit, opponent will not recover until they reach the ground. It's possible to link Air Starry Sky before they land"
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '13', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "A air-to-ground move useful for safe-jumps or a pressure reset with 5U.\nMetera j.H is her lowest hitting air normal.\nClashes with M Normals\nCan special cancel on hit or block into Air Starry Sky(High/Low).\nOn Air counter hit, opponent will not recover until they reach the ground. It's possible to link Air Starry Sky before they land"
};

// unique action
const lv1U = { 
  moveName: 'Zephyr', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '21', 
  active: '-', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Performs a small hop. Hold ← when pressing the button to hop backwards instead.\nThis skill can be used midair to change Metera's jump trajectory (à la double jump) Use it to get out of corner or to cross-up opponents, but be aware that it can get predictable."
};
const lv2U = { 
  moveName: 'Zephyr (Air)', 
  altName: 'jU', 
  damage: '-', 
  guard: '-', 
  startup: '21', 
  active: '-', 
  recovery: '21', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['u'],
  description: "Performs a small hop. Hold ← when pressing the button to hop backwards instead.\nThis skill can be used midair to change Metera's jump trajectory (à la double jump) Use it to get out of corner or to cross-up opponents, but be aware that it can get predictable."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+49)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Hold 4 for a back throw. Gives Metera a hard knockdown, which lets you get a safe Aetherial Seal setup for extended pressure."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+48)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Hold 4 for a back throw. Gives Metera a hard knockdown, which lets you get a safe Aetherial Seal setup for extended pressure."
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
  description: "Hold 4 for a sideswap. Launches your opponent 30 degrees downward and gives you a hard knockdown like her ground throw, but the advantage timing depends on how high you are when throwing your opponent."
};

const uOverhead = { 
  moveName: 'Overhead', 
  altName: 'UOH', 
  damage: '1000', 
  guard: 'High', 
  startup: '26 (OD:24)', 
  active: '8', 
  recovery: '15', 
  onblock: '-4', 
  onhit: '+1',
  oncounterhit: '+13',
  clash: '-',
  motion: ['m', 'u'],
  description: "Moves backwards and shoots high.\nOn counter hit in most ranges you can only get UOH > 2M > Starry Sky (Low), With your back in the corner you can get UOH > c.H > Supers\nActivates Aetherial Seal, making it a highly damaging starter. It is also much easier to confirm than the counter hit route."
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
  moveName: 'L Starry Sky (High)', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '12', 
  active: '54', 
  recovery: '43', 
  onblock: '-5', 
  onhit: '+2',
  oncounterhit: '+4',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mFireball = { 
  moveName: 'M Starry Sky (High)', 
  altName: '236M', 
  damage: '800', 
  guard: 'All', 
  startup: '12', 
  active: '30', 
  recovery: '43', 
  onblock: '-5', 
  onhit: '+2',
  oncounterhit: '+4',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hFireball = { 
  moveName: 'H Starry Sky (High)', 
  altName: '236H', 
  damage: '350x3', 
  guard: 'All', 
  startup: '12', 
  active: '30', 
  recovery: '43', 
  onblock: '+5', 
  onhit: 'HKD (+65)',
  oncounterhit: 'HKD (+65)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const lAirFireball = { 
  moveName: 'L Starry Sky (High)(Air)', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mAirFireball = { 
  moveName: 'M Starry Sky (High)(Air)', 
  altName: '236M', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hAirFireball = { 
  moveName: 'H Starry Sky (High)(Air)', 
  altName: '236H', 
  damage: '350x3', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};

const lLowFireball = { 
  moveName: 'L Starry Sky (Low)', 
  altName: '214L', 
  damage: '800', 
  guard: 'All', 
  startup: '13', 
  active: '43', 
  recovery: '43', 
  onblock: '-7', 
  onhit: '+1',
  oncounterhit: '+3',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mLowFireball = { 
  moveName: 'M Starry Sky (Low)', 
  altName: '214M', 
  damage: '800', 
  guard: 'All', 
  startup: '13', 
  active: '32', 
  recovery: '43', 
  onblock: '-7', 
  onhit: '+1',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hLowFireball = { 
  moveName: 'H Starry Sky (Low)', 
  altName: '214H', 
  damage: '350x3', 
  guard: 'All', 
  startup: '13', 
  active: '32', 
  recovery: '43', 
  onblock: '+3', 
  onhit: 'HKD (+64)',
  oncounterhit: 'HKD (+64)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const lLowAirFireball = { 
  moveName: 'L Starry Sky (Low)(Air)', 
  altName: '214L', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mLowAirFireball = { 
  moveName: 'M Starry Sky (Low)(Air)', 
  altName: '214M', 
  damage: '800', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hLowAirFireball = { 
  moveName: 'H Starry Sky (Low)(Air)', 
  altName: '214H', 
  damage: '350x3', 
  guard: 'All', 
  startup: '22', 
  active: '-', 
  recovery: '6 (On landing)', 
  onblock: '-', 
  onhit: 'HKD',
  oncounterhit: 'HKD',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};

// dragon punches
const lUppercut = { 
  moveName: 'L The Great Fall', 
  altName: '623L', 
  damage: '800, 150x4', 
  guard: 'Mid, All*4', 
  startup: '22+18', 
  active: '22,24', 
  recovery: '64', 
  onblock: '+19', 
  onhit: '+28 (2nd Part only)',
  oncounterhit: '+28 (2nd Part only)',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "Invincible reversal. \nAir unblockable during the early active frames. Technically the least unsafe on block and can be difficult to punish at far ranges due to the pushback and shorter recovery than the other versions, but don't count on it. As of 2.0 Patch L version is slower and has increased Recovery, making it much easier punish."
};
const mUppercut = { 
  moveName: 'M The Great Fall', 
  altName: '623M', 
  damage: '800, 150x4', 
  guard: 'Mid, All*4', 
  startup: '18+18', 
  active: '22,23', 
  recovery: '53', 
  onblock: '+24', 
  onhit: '+34 (2nd Part only)',
  oncounterhit: '+34 (2nd Part only)',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "Also an invincible reversal. \nStandard non-H combo ender for damage. Also air unblockable during the early active frames."
};
const hUppercut = { 
  moveName: 'H The Great Fall', 
  altName: '623H', 
  damage: '800, 150x4', 
  guard: 'Mid, All*4', 
  startup: '15+25', 
  active: '22,23', 
  recovery: '53', 
  onblock: '+21', 
  onhit: 'HKD (+66), +31 (2nd Part only)',
  oncounterhit: 'HKD (+66), +31 (2nd Part only)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "Oops, all reversals. \nDouble the uppercuts. Hard knockdown. There is a small gap in-between the two strikes. The entire first strike is air unblockable, however invincibility wears off before the second strike."
};

// rekka
const lButterfly = { 
  moveName: 'L Aetherial Seal', 
  altName: '22L', 
  damage: '200x5', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '19', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'l', 'or', '2', 'a'],
  description: "Hold down the button to make L & M butterflies to fly ~45° upward.\nMoves that trigger explosion: f.H, 2H, 1H, Universal Overhead, Starry Sky (High and Low), and The Great Fall (Initial Arrow).\nDoes ~1.50% chip damage on Single Explosions with easy input and ~2% chip damage with Technical input.\nDoes ~3% chip damage on double Explosions with easy input and ~4% chip damage with Technical input.\nYour setplay tool. Blow a kiss to send out butterfly that flutters across the stage. It does nothing by itself, but can be triggered to explode vertically by hitting it with any of Metera's arrow moves. The butterflies eventually will fizzle out, but the H version is the only version that stops at the stage wall. Butterflies are mostly used to extend combos, especially in corner for many of Metera's high damage routes. It can also be used to deny an opponent's approach, but it's harder to have one set up for that purpose than to have one set up after a knockdown."
};
const mButterfly = { 
  moveName: 'M Aetherial Seal', 
  altName: '22M', 
  damage: '200x5', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '19', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'm', 'or', '2', 'm', 'a'],
  description: "Hold down the button to make L & M butterflies to fly ~45° upward.\nMoves that trigger explosion: f.H, 2H, 1H, Universal Overhead, Starry Sky (High and Low), and The Great Fall (Initial Arrow).\nDoes ~1.50% chip damage on Single Explosions with easy input and ~2% chip damage with Technical input.\nDoes ~3% chip damage on double Explosions with easy input and ~4% chip damage with Technical input.\nYour setplay tool. Blow a kiss to send out butterfly that flutters across the stage. It does nothing by itself, but can be triggered to explode vertically by hitting it with any of Metera's arrow moves. The butterflies eventually will fizzle out, but the H version is the only version that stops at the stage wall. Butterflies are mostly used to extend combos, especially in corner for many of Metera's high damage routes. It can also be used to deny an opponent's approach, but it's harder to have one set up for that purpose than to have one set up after a knockdown."
};
const hButterfly = { 
  moveName: 'H Aetherial Seal', 
  altName: '22H', 
  damage: '(200x5)x2', 
  guard: 'All', 
  startup: '20', 
  active: '-', 
  recovery: '12', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '-',
  motion: ['2', '2', 'h', 'or', '2', 'a', 'h'],
  description: "Hold down the button to make L & M butterflies to fly ~45° upward.\nMoves that trigger explosion: f.H, 2H, 1H, Universal Overhead, Starry Sky (High and Low), and The Great Fall (Initial Arrow).\nDoes ~1.50% chip damage on Single Explosions with easy input and ~2% chip damage with Technical input.\nDoes ~3% chip damage on double Explosions with easy input and ~4% chip damage with Technical input.\nYour setplay tool. Blow a kiss to send out butterfly that flutters across the stage. It does nothing by itself, but can be triggered to explode vertically by hitting it with any of Metera's arrow moves. The butterflies eventually will fizzle out, but the H version is the only version that stops at the stage wall. Butterflies are mostly used to extend combos, especially in corner for many of Metera's high damage routes. It can also be used to deny an opponent's approach, but it's harder to have one set up for that purpose than to have one set up after a knockdown."
};

// skybound art
const sba = { 
  moveName: 'Dense Caress', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '13', 
  active: '9(12)6,4', 
  recovery: '55', 
  onblock: '-67', 
  onhit: 'HKD (S:+27, T:+37)',
  oncounterhit: 'HKD (S:+27, T:+37)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Performs a powerful jumping somersault kick.\nEasy metered air unblockable anti air super. Great for closing out rounds.\nThe range for the cinematic version is increased by using the technical input.\nCan take advantage of the invincible frames and be used as a slow reversal, but the slow startup makes it vulnerable to safe jabs, safe frame traps and safe jumps.\nThe animation is misleading, The super will whiff if an opponent directly above or behind you."
};
const ssba = { 
  moveName: 'Rapid Pulverize', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '13', 
  active: '-', 
  recovery: '108', 
  onblock: '-29', 
  onhit: 'HKD (S:+38, T:+48)',
  oncounterhit: 'HKD (S:+38, T:+48)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Metera's Full Screen Projectile super. Used to punish any fireball ball or high recovery move full screen\nAir blockable\nOn the ground the opponent is not able to spot dodge to fully avoid damage\nYou will rarely see this move doing 4500 damage because it almost always drops the opponent down to less than 60% before the last hit lands.\nThe range for the cinematic version is increased by using the technical input.\nThe Last hit will trigger Aetherial Seal\nGood for setting up a chip kill situation from afar.\nDoes ~5% Chip Damage with Easy Input and ~7% with Technical Input."
};


export const meteraInfo = [
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
  lAirFireball,
  mAirFireball,
  hAirFireball,
  lLowFireball,
  mLowFireball,
  hLowFireball,
  lLowAirFireball,
  mLowAirFireball,
  hLowAirFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lButterfly,
  mButterfly,
  hButterfly,
  sba,
  ssba
]