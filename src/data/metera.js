// FINAL 

const general = { char: "Metera", health: '9500', prejump: '4F', backdash: '22F' }

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
  description: "Her fastest standing normal\nOff knockdowns you can safe jab 11 frame or slower DP character\nTrue Blockstrings are:\nc.L > c.2L | c.5L > Auto Combo | c.L > c.L (Strict Timing)\nNormal hit confirms from this button are:\nc.L > Auto Combo | c.L > c.L | c.L > 2L | c.L > f.L (Crouching only) | c.L > Starry Sky(High/Low) | c.L > SBA/SSBA\nCounterhit confirms include the above and also\nc.L > The Great Fall(H) (Standing only)\nAir Counter Hits confirm, very rare but sometimes c.L can interrupt some character moves\nc.L > 2H > loop  - this is the one of the best case route but all the other above work as well"
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
  description: "Great button for punishes and some character interruptions\nHitbox extending behind Metera head so can hit low crossover attempts, Does not reach above her head so use 1H instead in those situations\nTrue Blockstrings :\nc.M > Auto combo | c.M > Starry Sky(High/Low)\nHit Confirms :\nc.M > Auto Combo | c.M > Starry Sky(High/Low) | c.M > The Great Fall(H) (Standing only) | c.M > SSA/SSBA\nCounter Hit Confirms :\nc.M > c.L | c.M > 2L | c.M > c.M | c.M > 2M\nSituational Counter Hit Air confirms :\nc.M > 5u > j.M | c.M > 2H > AA Route | c.M > 2U"
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '400, 300x2',
  guard: 'mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '1',
  motion: ['h'],
  description: "Hits 3 times\nSlow and rewarding tool for punishing DPs and SBAs. You can cancel it into specials or auto combos after any hit made.\nStrong on a clash due to it being multi hitting\nHitbox hits up above Metera's head so it can be used as a situational Anti-Air.\nTrue Blockstrings :\nc.H > Auto Combo | c.H > Starry Sky(High/Low) | c.H > The Great Fall(H) (Standing only)\nHit Confirms :\nc.H > Auto Combo | c.H > Starry Sky(High/Low) | c.H > The Great Fall(H) (Standing only) | c.H > SBA/SSBA\nCounter Hit Only Confirms :\nc.H(1 hit) > 5U > j.H | c.H(1 hit) > Universal Overhead\nSituational Air Counter Hit Only Confirms :\nc.H(1 hit) > Aetherial Seal(H) > c.H > Starry Sky High(H)"
};

// auto combos
const auto1 = {
  moveName: 'Auto Combo 2nd hit',
  altName: 'cXX',
  damage: '300',
  guard: 'mid',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-3',
  onhit: '1',
  motion: ['l', 'l'],
  description: "Primary combo that leads to a special move\nC.xx and c.xxx have the same cancel properties\nFor punishes it does less damage scaling if you super cancel after c.XX rather than c.XXX\nOn block doing 4U after auto combo is a simple way to retreat and reset neutral.\nTrue Blockstrings :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H)\nHit confirms :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H) (Standing only) | c.xx/c.xxx > SBA/SSBA"
};
const auto2 = {
  moveName: 'Auto Combo 3rd hit',
  altName: 'cXXX',
  damage: '300',
  guard: 'mid',
  startup: '-',
  active: '-',
  recovery: '-',
  onblock: '-5',
  onhit: '-1',
  motion: ['l', 'l', 'l'],
  description: "Primary combo that leads to a special move\nC.xx and c.xxx have the same cancel properties\nFor punishes it does less damage scaling if you super cancel after c.XX rather than c.XXX\nOn block doing 4U after auto combo is a simple way to retreat and reset neutral.\nTrue Blockstrings :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H)\nHit confirms :\nc.xx/c.xxx > Starry Sky(High/Low) | c.xx/c.xxx > The Great Fall(H) (Standing only) | c.xx/c.xxx > SBA/SSBA"
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Low',
  startup: '6',
  active: '3',
  recovery: '13',
  onblock: '-3',
  onhit: '1',
  motion: ['l'],
  description: "Plus on block low hitting poke\nGreat at checking opponent ground movement as well as catching rolls\nCan safe jab 9 frame DPs on their wakeups\nCan interrupt some far reaching specials moves from reaching you\nNo True blockstring from this move\nHit Confirms, Note these can change depending on the range\nf.L > f.L > f.L | f.L > Starry Sky Low (M/H)(L version works still but only hits close) | f.L > Starry Sky High(M/H) (Very close crouching or Standing only) |  f.L > SBA\nCounterhit Confirms : Note these can change depending on the range\nf.L > 2M(Crounching only) | f.L > Starry Sky Low(L) | f.L > The Great Fall(H) | f.L > SSBA"
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
  description: "Wide and vertical poke, covers a good amount of space and doubles as a pseudo anti-air\nThe pushblock on block gives you enough space to walk backwards to dodge and punish a counterpoke\nGreat for stopping people who jump and block, but has the same clash level as most M air normals\nTrue Blockstring, Note it's range dependent\nf.M > Starry Sky(Low) | f.M > Starry Sky(High) (Very close crouching or Standing only)\nHit Confirms, Each also work off air hit but dependent on their height\nf.M > The Great Fall (H) | f.M > Starry Sky(Low) | f.M > Starry Sky(High) (Very close crouching or Standing only) | f.M > SBA/SSBA\nAir Counter Hit Only :\nf.M > 5U > j.M"
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '800',
  guard: 'All',
  startup: '10',
  active: '5',
  recovery: '20',
  onblock: '-9',
  onhit: '-5',
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
  recovery: '6',
  onblock: '2',
  onhit: '6',
  motion: ['2', 'l'],
  description: "Metera's fastest Low\nOff knockdowns you can safe jab 11 frame or slower DP character\nLow Pushback making a good Tick throw button\nTrue Blockstring :\n2L > 2L | 2L > c.L | 2L > f.L (Crouching Only)\nHit Confirms\n2L > 2L | 2L > c.L > Auto Combo | 2L > Starry Sky (High/Low) | 2L > SBA/SSBA\nCounter Hit Confirms\n2L > The Great Fall(H) (Standing Only)"
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
  description: "Metera's farthest horizonal poke\nGreat punish button\nTrue Blockstring\n2M > Starry Sky(High/Low) (close range for each version)\nHit confirms\n2M > Starry Sky(Low) | 2M > Starry Sky(High) (Close crouching or Standing only) | 2M > The Great Fall(H) | 2M > SBA/SSBA"
};
const n2H = {
  moveName: 'Crouch Heavy (2H)',
  altName: '2H',
  damage: '800',
  guard: 'All',
  startup: '10',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  motion: ['2', 'h'],
  description: "Major anti-air move and combo starter/extender. Is a projectile and can therefore be blocked in the air\nUsing 2H makes the arrow fly in a 45° angle, covers a lot of air space and air stalls\nOn hit or block allows you to cancel into Specials, 5U, Spot Dodge, or Supers. (Note on projective clash does not let you special cancel)\nHuge hitstun on counter hit, they won't recover until they hit the ground. Allows combos like 2H>5U>j.H and impractical links like 2H>2U\nTriggers Aetherial Seal and good for shooting charged Aetherial Seals\nNo pushback on block which can lead to frametraps like 2H > delay The Great Fall(H) or 2H > delay Starry Sky(H)"
};
const n1H = {
  moveName: 'Crouch Heavy (1H)',
  altName: '1H',
  damage: '800',
  guard: 'All',
  startup: '10',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  motion: ['1', 'h'],
  description: "Mostly identical with 2H only different is the angle it will shoot at.\nGreat at hitting people who jump/superjump on top of you.\nAir Blockable\nOn hit or block allows you to cancel into Specials, 5U, Spot Dodge, or Supers. (Note on projective clash does not let you special cancel)\nHuge hitstun on counter hit, they won't recover until they hit the ground. Allows combos like 1H > 2H > The Great Fall (H) and impractical links like 2H> 2U\nTriggers Aetherial Seal\nNo pushback on block which can lead to frametraps like 1H > delay The Great Fall (H) or 2H > delay Starry Sky(H)"
}
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD',
  motion: ['2', 'u'],
  description: "Mid-range slide that shoots Metera forward and hits Low\nMakes a good whiff punish tool for high recovery moves, also can interrupt some moves from reaching you\nUnable to special cancel from this button\nFrame advantage is better on block the further you initiate the slide.\nKnockdowns on hit which gives you time to setup Aetherial Seal."
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
  description: "Metera's fastest air attack.\nClashes with L Normals\nLowest blockstun on block which sets up auto tick throws\nThe frame advantage on block depends on the height. At the highest it's even and at it's lowest it's plus\nHitbox hits extends behind Metera so can be use as a cross up.\nCan special cancel on hit or block into Air Starry Sky(High/Low).\nOn Air counter hit, opponent will not recover until they reach the ground. It's possible to link Air Starry Sky before they land"
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '300x2', 
  guard: 'high', 
  startup: '6', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['m'],
  description: "Metera's j.M is solid air poke with good attack level and fast startup for its range.\nj.M is 2-hit move allows Metera to do solid high/low mixups with slightly changing the timing of j.M.\nBoth Hits clashes with M Normals\nAfter Zephyr into j.M The first hit will bring up for hurtbox and you can jump over some special moves and punish.\nOn hit or block of the 1st hit of j.M, you can special cancel into air starry sky\nOn Air counter hit, opponent will not recover until they reach the ground. It's possible to link Air Starry Sky before they land"
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
  description: "A air-to-ground move useful for safe-jumps or a pressure reset with 5U.\nMetera j.H is her lowest hitting air normal.\nClashes with M Normals\nCan special cancel on hit or block into Air Starry Sky(High/Low).\nOn Air counter hit, opponent will not recover until they reach the ground. It's possible to link Air Starry Sky before they land"
};

// unique action
const lv1U = { 
  moveName: 'Zephyr', 
  altName: '5U', 
  damage: '-', 
  guard: '-', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "Performs a small hop. Hold ← when pressing the button to hop backwards instead.\nThis skill can be used midair to change Metera's jump trajectory (à la double jump) Use it to get out of corner or to cross-up opponents, but be aware that it can get predictable."
};
const lv2U = { 
  moveName: 'Zephyr (Air)', 
  altName: 'jU', 
  damage: '-', 
  guard: '-', 
  startup: '22', 
  active: '9', 
  recovery: '13', 
  onblock: '-5', 
  onhit: '-',
  motion: ['u'],
  description: "Performs a small hop. Hold ← when pressing the button to hop backwards instead.\nThis skill can be used midair to change Metera's jump trajectory (à la double jump) Use it to get out of corner or to cross-up opponents, but be aware that it can get predictable."
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
  description: "Hold 4 for a back throw. Gives Metera a hard knockdown, which lets you get a safe Aetherial Seal setup for extended pressure."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'throw', 
  startup: '7', 
  active: '-', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Hold 4 for a back throw. Gives Metera a hard knockdown, which lets you get a safe Aetherial Seal setup for extended pressure."
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
  description: "Hold 4 for a sideswap. Launches your opponent 30 degrees downward and gives you a hard knockdown like her ground throw, but the advantage timing depends on how high you are when throwing your opponent."
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
  description: "Moves backwards and shoots high.\nOn counter hit in most ranges you can only get UOH > 2M > Starry Sky (Low), With your back in the corner you can get UOH > c.H > Supers\nActivates Aetherial Seal, making it a highly damaging starter. It is also much easier to confirm than the counter hit route."
};

// fireballs
const lFireball = { 
  moveName: 'L Starry Sky (High)', 
  altName: '236L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mFireball = { 
  moveName: 'M Starry Sky (High)', 
  altName: '236M', 
  damage: '800', 
  guard: 'all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hFireball = { 
  moveName: 'H Starry Sky (High)', 
  altName: '236H', 
  damage: '350x3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const lAirFireball = { 
  moveName: 'L Starry Sky (High)(Air)', 
  altName: '236L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mAirFireball = { 
  moveName: 'M Starry Sky (High)(Air)', 
  altName: '236M', 
  damage: '800', 
  guard: 'all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hAirFireball = { 
  moveName: 'H Starry Sky (High)(Air)', 
  altName: '236H', 
  damage: '350x3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels higher than a standard projectile, so it won't hit crouching foes at a distance. It will go over lower hitting projectiles\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};

const lLowFireball = { 
  moveName: 'L Starry Sky (Low)', 
  altName: '214L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mLowFireball = { 
  moveName: 'M Starry Sky (Low)', 
  altName: '214M', 
  damage: '800', 
  guard: 'all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hLowFireball = { 
  moveName: 'H Starry Sky (Low)', 
  altName: '214H', 
  damage: '350x3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const lLowAirFireball = { 
  moveName: 'L Starry Sky (Low)(Air)', 
  altName: '214L', 
  damage: '800', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '-7', 
  onhit: '-3',
  motion: ['236', 'l', 'or', 'a'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const mLowAirFireball = { 
  moveName: 'M Starry Sky (Low)(Air)', 
  altName: '214M', 
  damage: '800', 
  guard: 'all', 
  startup: '13', 
  active: '-', 
  recovery: '-', 
  onblock: '-4', 
  onhit: '0',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
};
const hLowAirFireball = { 
  moveName: 'H Starry Sky (Low)(Air)', 
  altName: '214H', 
  damage: '350x3', 
  guard: 'all', 
  startup: '15', 
  active: '-', 
  recovery: '-', 
  onblock: '+3', 
  onhit: '+7',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "You cannot fire a new Starry Sky (High/Low) before the former one disappears off screen, gets blocked, or hits the opponent.\nIt travels lower than a standard projectile, so it will hit crouching foes.\nThe L version fires a slower shot, M version fires a faster shot. The H version is used to knock down and for juggle combos.\nWhen used midair, Metera fires at a downward angle. The L & H versions fires at a steep downward shot, M fires a more horizontal shot. Good for counter-pokes.\nThe L & M versions totally cancels your original momentum with a small forward hop, while H version can keep most of it's momentum.\nThe M Ground & Midair arrow will cause a Soft Knock Down on counterhit.\nThe H midair arrow can be combo starter for a 2h hop loop.\nAll versions activates Aetherial Seal. The Ground version will not hit the L & M Seals.\nDoes ~1% Chip Damage with Easy Input and ~1.5% with Technical Input."
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
  moveName: 'Dense Caress', 
  altName: '236236H', 
  damage: '2500-3500', 
  guard: 'Mid', 
  startup: '6+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Performs a powerful jumping somersault kick.\nEasy metered air unblockable anti air super. Great for closing out rounds.\nThe range for the cinematic version is increased by using the technical input.\nCan take advantage of the invincible frames and be used as a slow reversal, but the slow startup makes it vulnerable to safe jabs, safe frame traps and safe jumps.\nThe animation is misleading, The super will whiff if an opponent directly above or behind you."
};
const ssba = { 
  moveName: 'Rapid Pulverize', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '8+5', 
  active: '-', 
  recovery: '-', 
  onblock: '-23', 
  onhit: 'HKD',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Gran charges and throws out an invulnerable projectile move. It can travel across the screen, however if used at point blank it will be followed by a massive blast by the summoned Proto Bahamut. Deals a lot of chip damage on block which can setup for a chip kill afterwards. After 2.0 Patch, extremely unsafe to the point where Vaseraga gets a free f.H for punish."
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