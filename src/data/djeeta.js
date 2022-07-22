// DESCRIPTIONS DONE
// FRAME DATA UNFINISHED 

const general = { char: "Djeeta", health: '10000', prejump: '4F', backdash: '24F' }

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
  description: "Djeeta's fastest button and one of her primary pressure tools.\nLinks into itself, 2L and c.M on normal hit.\nLinks into 2M or 2U on crouching hit.\nFrametraps into c.H on 6F normals only."
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
  description: "Standard close medium. Good for autocombo pressure when used in tandem with Vorpal Blade to catch people challenging after your autocombo hits on block. Also your best link out of c.L or 2L without crouching or counter hit.\nLinks into itself, 2M, and c.H on counter hit."
};
const closeH = {
  moveName: 'Close Heavy',
  altName: 'cH',
  damage: '1200',
  guard: 'Mid',
  startup: '8',
  active: '4',
  recovery: '18',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+13',
  clash: '5',
  motion: ['h'],
  description: "Djeeta makes an upwards swipe with her sword. This normal is actually quite strong in a number of ways.\nCan act as a delayed frametrap from c.L or 2L to catch throw teching or jump outs.\nLinks into itself or f.H on counter hit, depending on how close you are to the opponent.\nAt close range, is actually a more consistent anti-air than 2H and leads to higher damage."
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
  description: "Pretty standard autocombo normals. Generally used for confirm and blockstring filler.In general, one should minimize the use of autocombos in confirms and juggles in order to maximize damage.\nCancels into M Vorpal Blade on block will frametrap an opponent attempting to mash after Djeeta's autocombo, though this cancel can be dodged and punished.\nHer 5XX is one of the the few auto combos in the game that can cancel later than normal into it's recovery, making it a formidable mixup and stagger tool."
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
  description: "Pretty standard autocombo normals. Generally used for confirm and blockstring filler.In general, one should minimize the use of autocombos in confirms and juggles in order to maximize damage.\nCancels into M Vorpal Blade on block will frametrap an opponent attempting to mash after Djeeta's autocombo, though this cancel can be dodged and punished.\nHer 5XX is one of the the few auto combos in the game that can cancel later than normal into it's recovery, making it a formidable mixup and stagger tool."
};

// far normals
const far5L = {
  moveName: 'Far Light',
  altName: 'f5L',
  damage: '400',
  guard: 'Mid',
  startup: '6',
  active: '5',
  recovery: '11',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+3',
  clash: '2',
  motion: ['l'],
  description: "Djeeta kicks at about head height. Like Gran's, can be confirmed into from 2 2Ls, and buffers into her L and H confirm special.\nReally good range for its speed, at the cost of whiffing on crouchers at max range.\nCombos into L or H Vorpal Blade."
};
const far5M = {
  moveName: 'Far Medium',
  altName: 'f5M',
  damage: '700',
  guard: 'Mid',
  startup: '8',
  active: '3',
  recovery: '18',
  onblock: '-6',
  onhit: '-2',
  oncounterhit: '+2',
  clash: '3',
  motion: ['m'],
  description: "Djeeta swings her sword out in front of her. f.M is one of Djeeta's prime pokes, and behaves very similar to Gran's, while boasting slightly better range.\nGreat range for its speed.\nCombos into L and H Vorpal Blade on normal hit, and M Vorpal Blade on counter hit.\nCancels into M Vorpal Blade on block will frametrap an opponent pressing buttons, but this cancel can be dodged and punished.\nSpaced cancels into a charged fireball (Reginleiv: Recidive) can punish opponent trying to dodge cancels into Vorpal Blade.\nTip range f.M into L Reginleiv can typically leave Djeeta +1 or higher."
};
const far5H = {
  moveName: 'Far Heavy',
  altName: 'f5H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '5',
  recovery: '21',
  onblock: '-9',
  onhit: '-5',
  oncounterhit: '+3',
  clash: '4',
  motion: ['h'],
  description: "Djeeta swings her sword in an arc in front of her in a nearly identical manner to Gran. One frame slower overall than his, but seems to have slightly more range.\nCombos into all versions of Vorpal Blade.\nCan be used as a far anti-air option for further jumps that 2H won't be able to hit.\nCan frametrap with M Vorpal Blade on block, like with f.M.\nAt max range, a cancel into a charged light fireball will be plus on block.\nExcellent for crushing an opponent attempting to poke out after a spaced blockstring.\nUseful to keep an opponent locked in the corner while scouting jumps or dashes."
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
  description: "Djeeta's other plus on block normal, and her main stagger pressure tool. The myriad of links out of this normal on crouching and counter hit allow her to run relatively safe and rewarding blockstrings.\nLinks into itself, c.L, f.L and c.M on normal hit.\nLinks into 2M or 2U on crouching hit. Since f.L will whiff on crouchers, confirming crouching hit and using 2M or 2U instead is important for her offense.\nFrametraps into c.H on 6F normals only."
};
const n2M = {
  moveName: 'Crouch Medium',
  altName: '2M',
  damage: '700',
  guard: 'Mid',
  startup: '7',
  active: '6',
  recovery: '12',
  onblock: '-3',
  onhit: '+1',
  oncounterhit: '+5',
  clash: '3',
  motion: ['2', 'm'],
  description: "Probably Djeeta's best normal overall, and a candidate for one of the best medium pokes in the game. While it may look unassuming and even a bit stubby, you will eventually find this being one of the cornerstones of Djeeta's neutral.\nIncredibly fast poke, and very difficult to whiff punish. Can be useful for some abare situations.\nDeceptively good range, despite the somewhat stubby looking animation.\nDjeeta's best normal for checking Cross Overs, with 2U being the next strongest.\nCombos into L and H Vorpal Blade on normal hit, and M Vorpal Blade on counter hit. Like with f.M and f.H, cancels into M Vorpal Blade on block will frametrap, at the risk of your cancel being dodged."
};
const n2H = {
  moveName: 'Crouch Heavy',
  altName: '2H',
  damage: '1000',
  guard: 'Mid',
  startup: '10',
  active: '6',
  recovery: '24',
  onblock: '-13',
  onhit: '-9',
  oncounterhit: '-1',
  clash: '4',
  motion: ['2', 'h'],
  description: "Djeeta's main non-special move anti-air. Does not lower her profile as much as Gran and Katalina's 2Hs, so it can occasionally lose in situations where their anti-airs would be more consistent. Still quite strong overall.\nForward range is not as far as it looks, but hits very far behind Djeeta. Excellent for dealing with crossups.\nCan be stuffed by some early jump normals, or very close range jumps. For these angles, c.H or Rising Sword can be better anti-airs.\nCombos into 5U or Rising Sword on normal hit.\nCounter hit conversions can be awkward. Juggles into f.M, f.H, or c.H depending on the height and distance the opponent was hit. You'll have to judge the situation on reaction based on where your opponent is.\nNo conversions that work consistently on normal and counter hit, forcing Djeeta to confirm normal vs counter hit to optimize her anti-air damage."
};
const n2U = {
  moveName: 'Crouch Unique',
  altName: '2U',
  damage: '700',
  guard: 'Low',
  startup: '7',
  active: '6',
  recovery: '21',
  onblock: '-12',
  onhit: 'HKD (+43)',
  oncounterhit: 'HKD (+47)',
  clash: '3',
  motion: ['2', 'u'],
  description: "Similar to Gran's 2U, though not quite as ignorant. Still a very excellent sweep.\nIs stubbier than Gran's 2U.\nFast startup makes this relatively strong in abare or fuzzy mash, like 2M.\nCan low profile some projectiles and high-hitting normals, like Gran's 2U but not as early.\nCombos into L and H Vorpal Blade on hit, and M Vorpal Blade on counter hit. Frametrap cancels can also be performed on block with this normal.\nCancelling this normal into spot dodge grants a very easy safejump in the corner, which can be useful for ending Djeeta's corner combos.\nHas a low-profile hurtbox on frames 5-27."
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
  description: "Active until landing like every other j.L. This property can create some inconsistent, if not amusing interactions with some anti-airs in the game, but generally not your best option in the air.\nCrosses up slightly."
};
const jM = { 
  moveName: 'Jump Medium', 
  altName: 'jM', 
  damage: '550', 
  guard: 'High', 
  startup: '6', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '2',
  motion: ['m'],
  description: "Another one of Djeeta's crossup normals. Reaches farther back than j.L. Can be useful for speed since it is faster than j.U, but overall, j.U will be a better option in plenty of situations you might want to use this normal.\nDue to its faster startup compared to jU, you can use this later in the jump-in to avoid counter-hit from preemptive anti-airs.\nUseful for ambiguous jump-in mixups."
};
const jH = { 
  moveName: 'Jump Heavy', 
  altName: 'jH', 
  damage: '800', 
  guard: 'High', 
  startup: '7', 
  active: '6', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['h'],
  description: "Djeeta's furthest reaching jump normal. Mainly useful for far jump-ins where j.U won't reach, or for safejumps in the corner."
};
const jU = { 
  moveName: 'Jump Unique', 
  altName: 'jU', 
  damage: '700', 
  guard: 'High', 
  startup: '12', 
  active: '8', 
  recovery: '-', 
  onblock: '-', 
  onhit: '-',
  oncounterhit: '-',
  clash: '3',
  motion: ['u'],
  description: "Very familiar looking jump normal. Djeeta swings below her in an arc in a nearly identical manner to Gran and Katalina's j.Us. The hitbox is not quite as large as these normals, but the purpose remains the same.\nDjeeta's best jump normal, period. Hits in a wide arc below her and is very active, allowing her to use it at different points in her jump arc for different purposes.\nVery good safe jump normal along with j.H.\nCan stuff some poorly timed or weaker anti-airs if done at the correct timing during her jump arc.\nGrants juggles on air-to-air hit without counter hit if low enough to the ground.\nNormal jump j.U can be used in close range as a throwbait that won't give up your pressure, or to surprise an opponent to try and escape the corner.\nThis is Djeeta's slowest jump normal, so can it can lose to some pre-emptive air-to-airs and is prone getting counter-hit due to it's high amount of active frames.\nCan clash with M button anti-airs due to its higher than normal hurtbox and M level clash priority. Useful vs the Ferry or Metera matchup as it creates an almost certain losing situation for them."  
};

// unique action
const lv1U = { 
  moveName: 'Overdrive Surge Lv1', 
  altName: '5ULv1', 
  damage: '800', 
  guard: 'Mid', 
  startup: '16', 
  active: '5', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+3',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u'],
  description: "A heel kick that can be strengthened up to 5 levels, becoming fully invincible at the maximum level. Behaves very similarly to Gran's Power Raise, but is not nearly as useful.\nCan be charged by holding U. Cancel the charge by pressing L, M, or H.\nCanceled at its earliest point, the move is 26 frames total.\nFully held, the move is 178 frames long, though Djeeta does not have to wait for the fully held move to reach level 4.\nCan hop over some low hitting moves, but high-profile ability is generally quite difficult to exploit due to the slow startup.\nCan ground-bounce on any counter-hit whether grounded or airborne. Requires level 1 charge or higher to ground-bounce on juggled opponents mid-combo.\nCan be used to punish projectiles when fully charged, but this situation will be incredibly rare in a match.\nCan be used as a throw-bait like universal overhead, but is not nearly as rewarding without counter-hit, nor does it have the additional property of hitting overhead + earlier throw invincibility.\nCan add an additional layer of offense to her pressure by canceling the stance itself for baiting whiffed buttons and mixing the cancel options off a normal between letting 5U rip, rekkas, fireballs, etc.\nCan be spaced to be a maximum +2 on block and up to +7 on hit for a 2M follow-up. The range to perform this is a bit outside fM range and only the tip of Djeeta's flip kick hits the opponent's foot."
};
const lv2U = { 
  moveName: 'Overdrive Surge Lv2', 
  altName: '5ULv2', 
  damage: '1000', 
  guard: 'Mid', 
  startup: '16', 
  active: '5', 
  recovery: '14', 
  onblock: '-2', 
  onhit: '+3',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u'],
  description: "A heel kick that can be strengthened up to 5 levels, becoming fully invincible at the maximum level. Behaves very similarly to Gran's Power Raise, but is not nearly as useful.\nCan be charged by holding U. Cancel the charge by pressing L, M, or H.\nCanceled at its earliest point, the move is 26 frames total.\nFully held, the move is 178 frames long, though Djeeta does not have to wait for the fully held move to reach level 4.\nCan hop over some low hitting moves, but high-profile ability is generally quite difficult to exploit due to the slow startup.\nCan ground-bounce on any counter-hit whether grounded or airborne. Requires level 1 charge or higher to ground-bounce on juggled opponents mid-combo.\nCan be used to punish projectiles when fully charged, but this situation will be incredibly rare in a match.\nCan be used as a throw-bait like universal overhead, but is not nearly as rewarding without counter-hit, nor does it have the additional property of hitting overhead + earlier throw invincibility.\nCan add an additional layer of offense to her pressure by canceling the stance itself for baiting whiffed buttons and mixing the cancel options off a normal between letting 5U rip, rekkas, fireballs, etc.\nCan be spaced to be a maximum +2 on block and up to +7 on hit for a 2M follow-up. The range to perform this is a bit outside fM range and only the tip of Djeeta's flip kick hits the opponent's foot."
};
const lv3U = { 
  moveName: 'Overdrive Surge Lv3', 
  altName: '5ULv3', 
  damage: '1200', 
  guard: 'Mid', 
  startup: '16', 
  active: '5', 
  recovery: '14', 
  onblock: '0', 
  onhit: '+5',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u'],
  description: "A heel kick that can be strengthened up to 5 levels, becoming fully invincible at the maximum level. Behaves very similarly to Gran's Power Raise, but is not nearly as useful.\nCan be charged by holding U. Cancel the charge by pressing L, M, or H.\nCanceled at its earliest point, the move is 26 frames total.\nFully held, the move is 178 frames long, though Djeeta does not have to wait for the fully held move to reach level 4.\nCan hop over some low hitting moves, but high-profile ability is generally quite difficult to exploit due to the slow startup.\nCan ground-bounce on any counter-hit whether grounded or airborne. Requires level 1 charge or higher to ground-bounce on juggled opponents mid-combo.\nCan be used to punish projectiles when fully charged, but this situation will be incredibly rare in a match.\nCan be used as a throw-bait like universal overhead, but is not nearly as rewarding without counter-hit, nor does it have the additional property of hitting overhead + earlier throw invincibility.\nCan add an additional layer of offense to her pressure by canceling the stance itself for baiting whiffed buttons and mixing the cancel options off a normal between letting 5U rip, rekkas, fireballs, etc.\nCan be spaced to be a maximum +2 on block and up to +7 on hit for a 2M follow-up. The range to perform this is a bit outside fM range and only the tip of Djeeta's flip kick hits the opponent's foot."
};
const lv4U = { 
  moveName: 'Overdrive Surge Lv4', 
  altName: '5ULv4', 
  damage: '1400', 
  guard: 'Mid', 
  startup: '16', 
  active: '5', 
  recovery: '14', 
  onblock: '0', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u'],
  description: "A heel kick that can be strengthened up to 5 levels, becoming fully invincible at the maximum level. Behaves very similarly to Gran's Power Raise, but is not nearly as useful.\nCan be charged by holding U. Cancel the charge by pressing L, M, or H.\nCanceled at its earliest point, the move is 26 frames total.\nFully held, the move is 178 frames long, though Djeeta does not have to wait for the fully held move to reach level 4.\nCan hop over some low hitting moves, but high-profile ability is generally quite difficult to exploit due to the slow startup.\nCan ground-bounce on any counter-hit whether grounded or airborne. Requires level 1 charge or higher to ground-bounce on juggled opponents mid-combo.\nCan be used to punish projectiles when fully charged, but this situation will be incredibly rare in a match.\nCan be used as a throw-bait like universal overhead, but is not nearly as rewarding without counter-hit, nor does it have the additional property of hitting overhead + earlier throw invincibility.\nCan add an additional layer of offense to her pressure by canceling the stance itself for baiting whiffed buttons and mixing the cancel options off a normal between letting 5U rip, rekkas, fireballs, etc.\nCan be spaced to be a maximum +2 on block and up to +7 on hit for a 2M follow-up. The range to perform this is a bit outside fM range and only the tip of Djeeta's flip kick hits the opponent's foot."
};
const lv5U = { 
  moveName: 'Overdrive Surge Lv5', 
  altName: '5ULv5', 
  damage: '1800', 
  guard: 'Mid', 
  startup: '16', 
  active: '5', 
  recovery: '14', 
  onblock: '0', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '4',
  motion: ['u'],
  description: "A heel kick that can be strengthened up to 5 levels, becoming fully invincible at the maximum level. Behaves very similarly to Gran's Power Raise, but is not nearly as useful.\nCan be charged by holding U. Cancel the charge by pressing L, M, or H.\nCanceled at its earliest point, the move is 26 frames total.\nFully held, the move is 178 frames long, though Djeeta does not have to wait for the fully held move to reach level 4.\nCan hop over some low hitting moves, but high-profile ability is generally quite difficult to exploit due to the slow startup.\nCan ground-bounce on any counter-hit whether grounded or airborne. Requires level 1 charge or higher to ground-bounce on juggled opponents mid-combo.\nCan be used to punish projectiles when fully charged, but this situation will be incredibly rare in a match.\nCan be used as a throw-bait like universal overhead, but is not nearly as rewarding without counter-hit, nor does it have the additional property of hitting overhead + earlier throw invincibility.\nCan add an additional layer of offense to her pressure by canceling the stance itself for baiting whiffed buttons and mixing the cancel options off a normal between letting 5U rip, rekkas, fireballs, etc.\nCan be spaced to be a maximum +2 on block and up to +7 on hit for a 2M follow-up. The range to perform this is a bit outside fM range and only the tip of Djeeta's flip kick hits the opponent's foot."
};

const groundThrow = { 
  moveName: 'Ground Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+44)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Djeeta's ground throw. A necessary part of her offense as she lacks many other options other than staggers and frametraps. Use this once your opponent is respecting your blockstrings heavily, or try to bait them to tech with her universal overhead.\nSuperjump j.H or j.U after forward throw in the corner will grant a pretty easy safe jump.\nAfter a forward throw directly at the wall, whiffing c.L into whiff 2M into 2L grants her a DP safejab. Automatically links into c.H on hit. You can delay each button or use the recovery of the 2M as she stands up to hide a throw attempt.\nAfter a forward throw very close to the wall, whiffing 2L into the universal Overhead Attack grants Djeeta a meaty combo-able overhead."
};
const backThrow = { 
  moveName: 'Back Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '7', 
  active: '3', 
  recovery: '31', 
  onblock: '-', 
  onhit: 'HKD (+45)',
  oncounterhit: '-',
  clash: '-',
  motion: ['4', 'l', 'm', 'or', '4', 'l', 'u'],
  description: "Djeeta's ground throw. A necessary part of her offense as she lacks many other options other than staggers and frametraps. Use this once your opponent is respecting your blockstrings heavily, or try to bait them to tech with her universal overhead.\nSuperjump j.H or j.U after forward throw in the corner will grant a pretty easy safe jump.\nAfter a forward throw directly at the wall, whiffing c.L into whiff 2M into 2L grants her a DP safejab. Automatically links into c.H on hit. You can delay each button or use the recovery of the 2M as she stands up to hide a throw attempt.\nAfter a forward throw very close to the wall, whiffing 2L into the universal Overhead Attack grants Djeeta a meaty combo-able overhead."
};
const airThrow = { 
  moveName: 'Air Throw', 
  damage: '1500', 
  guard: 'Throw', 
  startup: '5', 
  active: '5', 
  recovery: '-', 
  onblock: '-', 
  onhit: 'HKD (+50)',
  oncounterhit: '-',
  clash: '-',
  motion: ['l', 'm', 'or', 'l', 'u'],
  description: "Standard air throw. Useful for calling out jump arc changing moves or someone trying to escape her corner pressure by jumping."
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
  motion: ['m', 'u'],
  description: "Same use as most overheads, checking for low blocks and getting counter hits on late buttons or throws. Links into c.H on counter hit, allowing Djeeta to start her max damage combos on a proper throwbait.\nCan hit meaty to link after without counter hit. Whiffing 2L, then inputting overhead after forward throw is a simple framekill to enable this. Links into c.L or 2L in this situation."
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
  moveName: 'L Reginleiv', 
  altName: '236L', 
  damage: '800', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '47', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Djeeta's projectile. One of the best projectiles in the game, and significantly more versatile than Gran's counterpart.\nProjectile speed has two variations. L being the slower and M/H being faster.\nH version hits 3 times and is plus on block, making it very strong for winning fireball wars or resetting her pressure.\nSpaced blockstrings ending with a fireball in the corner can leave the opponent in position to have their counterpoke crushed by her f.H."
};
const mFireball = { 
  moveName: 'M Reginleiv', 
  altName: '236M', 
  damage: '800', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '47', 
  onblock: '-7', 
  onhit: '-3',
  oncounterhit: '-1',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Djeeta's projectile. One of the best projectiles in the game, and significantly more versatile than Gran's counterpart.\nProjectile speed has two variations. L being the slower and M/H being faster.\nH version hits 3 times and is plus on block, making it very strong for winning fireball wars or resetting her pressure.\nSpaced blockstrings ending with a fireball in the corner can leave the opponent in position to have their counterpoke crushed by her f.H."
};
const hFireball = { 
  moveName: 'H Reginleiv', 
  altName: '236H', 
  damage: '300x2, 400', 
  guard: 'All', 
  startup: '16', 
  active: '-', 
  recovery: '47', 
  onblock: '+2', 
  onhit: '+6',
  oncounterhit: '+6',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Djeeta's projectile. One of the best projectiles in the game, and significantly more versatile than Gran's counterpart.\nProjectile speed has two variations. L being the slower and M/H being faster.\nH version hits 3 times and is plus on block, making it very strong for winning fireball wars or resetting her pressure.\nSpaced blockstrings ending with a fireball in the corner can leave the opponent in position to have their counterpoke crushed by her f.H."
};

const lChargedFireball = { 
  moveName: 'L Reginleiv (Charged)', 
  altName: '236L', 
  damage: '900', 
  guard: 'All', 
  startup: '41', 
  active: '-', 
  recovery: '69', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'l', 'or', 'a'],
  description: "Djeeta charges her fireball, giving it an extra hit and much better frame advantage. This aspect of her fireball is what really sets it apart from the other shotos' projectiles.\nNot that useful for winning fireball wars due to the long charge time. Will also still lose to most H fireballs.\nCan bait people trying to dodge or Cross Over through projectiles by delaying the projectile timing.\nHas better frame data on hit and block than an uncharged fireball, and can be easily spaced to be plus on block. For example, max range f.H cancelled into a charged fireball will generally be plus on block.\nKnocks down on counter hit. Spaced cancels into a charged fireball will potentially punish dodges, which can lead to very beefy punishes in the corner.\nCharged version of H fireball has some use in some height specific anti-air conversions and in corner juggles.\nDjeeta is not in counter-hit state once she hits frame 40 in the animation. Therefore, L and M hold fireballs are never in counter-hit state once launched."
};
const mChargedFireball = { 
  moveName: 'M Reginleiv (Charged)', 
  altName: '236M', 
  damage: '900', 
  guard: 'All', 
  startup: '41', 
  active: '-', 
  recovery: '69', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['236', 'm', 'or', 'a', 'm'],
  description: "Djeeta charges her fireball, giving it an extra hit and much better frame advantage. This aspect of her fireball is what really sets it apart from the other shotos' projectiles.\nNot that useful for winning fireball wars due to the long charge time. Will also still lose to most H fireballs.\nCan bait people trying to dodge or Cross Over through projectiles by delaying the projectile timing.\nHas better frame data on hit and block than an uncharged fireball, and can be easily spaced to be plus on block. For example, max range f.H cancelled into a charged fireball will generally be plus on block.\nKnocks down on counter hit. Spaced cancels into a charged fireball will potentially punish dodges, which can lead to very beefy punishes in the corner.\nCharged version of H fireball has some use in some height specific anti-air conversions and in corner juggles.\nDjeeta is not in counter-hit state once she hits frame 40 in the animation. Therefore, L and M hold fireballs are never in counter-hit state once launched."
};
const hChargedFireball = { 
  moveName: 'H Reginleiv (Charged)', 
  altName: '236H', 
  damage: '300x2, 500', 
  guard: 'All', 
  startup: '30', 
  active: '-', 
  recovery: '60', 
  onblock: '+8', 
  onhit: '+12',
  oncounterhit: 'HKD (+71)',
  clash: '-',
  motion: ['236', 'h', 'or', 'a', 'h'],
  description: "Djeeta charges her fireball, giving it an extra hit and much better frame advantage. This aspect of her fireball is what really sets it apart from the other shotos' projectiles.\nNot that useful for winning fireball wars due to the long charge time. Will also still lose to most H fireballs.\nCan bait people trying to dodge or Cross Over through projectiles by delaying the projectile timing.\nHas better frame data on hit and block than an uncharged fireball, and can be easily spaced to be plus on block. For example, max range f.H cancelled into a charged fireball will generally be plus on block.\nKnocks down on counter hit. Spaced cancels into a charged fireball will potentially punish dodges, which can lead to very beefy punishes in the corner.\nCharged version of H fireball has some use in some height specific anti-air conversions and in corner juggles.\nDjeeta is not in counter-hit state once she hits frame 40 in the animation. Therefore, L and M hold fireballs are never in counter-hit state once launched."
};

// dragon punches
const lUppercut = { 
  moveName: 'L Rising Sword', 
  altName: '623L', 
  damage: '700, 300', 
  guard: 'Mid, All', 
  startup: '9', 
  active: '2,9', 
  recovery: '30', 
  onblock: '-22', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'l', 'or', '6', 'a'],
  description: "An invulnerable anti-air technique. Djeeta's DP is effectively identical to Gran's, with each version gaining progressively more hits and damage.\nDue to her somewhat less consistent 2H, Djeeta is somewhat more reliant on her DP for anti-airing than other shotos.\nL and M versions are air unblockable on the first hit only. H version is air unblockable for the first part of the move, but not the second.\nL version keeps her in place during the startup, useful for anti-airing certain cross up moves that have a hurtbox behind them. (EX: Katalina jU)\nM version advances her forward during the startup, with a large horizontal range to goes upward. It's because of the horizontal range that makes this move a key factor in some matchups that can enable her offense.\nH version grants a hard knockdown and a safejump, which can be useful for reversing a sticky situation.\nSome of Djeeta's corner combo routes will automatically leave the opponent at the proper height to combo after her H Rising Sword, allowing her to juggle into a 2U or c.H into Skybound Art or safejump afterwards."
};
const mUppercut = { 
  moveName: 'M Rising Sword', 
  altName: '623M', 
  damage: '700, 300x2', 
  guard: 'Mid, All*2', 
  startup: '12', 
  active: '2,3,17', 
  recovery: '29', 
  onblock: '-27', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '-',
  motion: ['623', 'm', 'or', '6', 'a', 'm'],
  description: "An invulnerable anti-air technique. Djeeta's DP is effectively identical to Gran's, with each version gaining progressively more hits and damage.\nDue to her somewhat less consistent 2H, Djeeta is somewhat more reliant on her DP for anti-airing than other shotos.\nL and M versions are air unblockable on the first hit only. H version is air unblockable for the first part of the move, but not the second.\nL version keeps her in place during the startup, useful for anti-airing certain cross up moves that have a hurtbox behind them. (EX: Katalina jU)\nM version advances her forward during the startup, with a large horizontal range to goes upward. It's because of the horizontal range that makes this move a key factor in some matchups that can enable her offense.\nH version grants a hard knockdown and a safejump, which can be useful for reversing a sticky situation.\nSome of Djeeta's corner combo routes will automatically leave the opponent at the proper height to combo after her H Rising Sword, allowing her to juggle into a 2U or c.H into Skybound Art or safejump afterwards."
};
const hUppercut = { 
  moveName: 'H Rising Sword', 
  altName: '623H', 
  damage: '1400', 
  guard: 'Mid*3, All', 
  startup: '9', 
  active: '2,3,6(23)2(3)2,2,3,3,9', 
  recovery: '32', 
  onblock: '-28', 
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+51)',
  clash: '-',
  motion: ['623', 'h', 'or', '6', 'a', 'h'],
  description: "An invulnerable anti-air technique. Djeeta's DP is effectively identical to Gran's, with each version gaining progressively more hits and damage.\nDue to her somewhat less consistent 2H, Djeeta is somewhat more reliant on her DP for anti-airing than other shotos.\nL and M versions are air unblockable on the first hit only. H version is air unblockable for the first part of the move, but not the second.\nL version keeps her in place during the startup, useful for anti-airing certain cross up moves that have a hurtbox behind them. (EX: Katalina jU)\nM version advances her forward during the startup, with a large horizontal range to goes upward. It's because of the horizontal range that makes this move a key factor in some matchups that can enable her offense.\nH version grants a hard knockdown and a safejump, which can be useful for reversing a sticky situation.\nSome of Djeeta's corner combo routes will automatically leave the opponent at the proper height to combo after her H Rising Sword, allowing her to juggle into a 2U or c.H into Skybound Art or safejump afterwards."
};

// rekka
const lRekka = { 
  moveName: 'L Vorpal Blade', 
  altName: '214L', 
  damage: '350x2', 
  guard: 'Mid', 
  startup: '14', 
  active: '3(11)3', 
  recovery: '20', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '3',
  motion: ['214', 'l', 'or', '2', 'a'],
  description: "Two advancing slashes that can be rekka'd into additional followups. Djeeta's main confirm special, granting her excellent corner carry on hit. This move is also extremely strong in her offense due to its frametrap ability and relative safety.\nThe L version comes out quickly, while the M version is slower, but reaches further and is safer on block.\nThe L and M versions will immediately perform the ender with a second 214 input, while the H version will perform a second set of slashes before the knockdown ender.\nThe ender can frametrap an opponent attempting to challenge the first part of the rekka on block. The ender is always unsafe on block, so perform with caution.\nAdditionally, H rekka ender can now wall bounce within proximity of the corner. Allowing potentially bigger combos from midscreen to corner.\nDjeeta cannot follow up with anything if the ender frametraps the opponent when directly at the corner. Even on counter-hit.\nM version launches on counter-hit. Allowing full combo confirms when near the corner.\nM version is safe on block and will frametrap in cancels from auto combo and nearly all of Djeeta's far normals, making it a strong option to use to end a blockstring with some free chip. This cancel can be dodged and punished, though this comes with risk to the opponent as this dodge can be baited by simply blocking or using a charged fireball to punish it.\nBoth the M and H versions see staple use in Djeeta's corner combos as she can juggle into normals after the initial followups if she does not perform the ender.\nThe H version can have a gap between the first and second follow-up. Allowing a potentially large reward for punish attempts on the first part at the compromise that the risk is greater for Djeeta afterward due to being closer to the opponent for a punish if they decide to continue blocking.\nDue to the advancing nature of this move, the L and H version are viable alternatives to Djeeta's poor whiff punishing options against longer normals and play a key role in her neutral gameplan."
};
const mRekka = { 
  moveName: 'M Vorpal Blade', 
  altName: '214M', 
  damage: '400x2', 
  guard: 'Mid', 
  startup: '20', 
  active: '3(13)3', 
  recovery: '18', 
  onblock: '-4', 
  onhit: '0',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Two advancing slashes that can be rekka'd into additional followups. Djeeta's main confirm special, granting her excellent corner carry on hit. This move is also extremely strong in her offense due to its frametrap ability and relative safety.\nThe L version comes out quickly, while the M version is slower, but reaches further and is safer on block.\nThe L and M versions will immediately perform the ender with a second 214 input, while the H version will perform a second set of slashes before the knockdown ender.\nThe ender can frametrap an opponent attempting to challenge the first part of the rekka on block. The ender is always unsafe on block, so perform with caution.\nAdditionally, H rekka ender can now wall bounce within proximity of the corner. Allowing potentially bigger combos from midscreen to corner.\nDjeeta cannot follow up with anything if the ender frametraps the opponent when directly at the corner. Even on counter-hit.\nM version launches on counter-hit. Allowing full combo confirms when near the corner.\nM version is safe on block and will frametrap in cancels from auto combo and nearly all of Djeeta's far normals, making it a strong option to use to end a blockstring with some free chip. This cancel can be dodged and punished, though this comes with risk to the opponent as this dodge can be baited by simply blocking or using a charged fireball to punish it.\nBoth the M and H versions see staple use in Djeeta's corner combos as she can juggle into normals after the initial followups if she does not perform the ender.\nThe H version can have a gap between the first and second follow-up. Allowing a potentially large reward for punish attempts on the first part at the compromise that the risk is greater for Djeeta afterward due to being closer to the opponent for a punish if they decide to continue blocking.\nDue to the advancing nature of this move, the L and H version are viable alternatives to Djeeta's poor whiff punishing options against longer normals and play a key role in her neutral gameplan."
};
const rekkaEnder = { 
  moveName: 'Vorpal Blade (Ender)', 
  altName: '214L/M -> 4L/M', 
  damage: '500', 
  guard: 'Mid', 
  startup: '20', 
  active: '3', 
  recovery: '22', 
  onblock: '-8', 
  onhit: 'KD',
  oncounterhit: 'KD',
  clash: '3',
  motion: ['214', 'm', 'or', '4', 'a'],
  description: "Two advancing slashes that can be rekka'd into additional followups. Djeeta's main confirm special, granting her excellent corner carry on hit. This move is also extremely strong in her offense due to its frametrap ability and relative safety.\nThe L version comes out quickly, while the M version is slower, but reaches further and is safer on block.\nThe L and M versions will immediately perform the ender with a second 214 input, while the H version will perform a second set of slashes before the knockdown ender.\nThe ender can frametrap an opponent attempting to challenge the first part of the rekka on block. The ender is always unsafe on block, so perform with caution.\nAdditionally, H rekka ender can now wall bounce within proximity of the corner. Allowing potentially bigger combos from midscreen to corner.\nDjeeta cannot follow up with anything if the ender frametraps the opponent when directly at the corner. Even on counter-hit.\nM version launches on counter-hit. Allowing full combo confirms when near the corner.\nM version is safe on block and will frametrap in cancels from auto combo and nearly all of Djeeta's far normals, making it a strong option to use to end a blockstring with some free chip. This cancel can be dodged and punished, though this comes with risk to the opponent as this dodge can be baited by simply blocking or using a charged fireball to punish it.\nBoth the M and H versions see staple use in Djeeta's corner combos as she can juggle into normals after the initial followups if she does not perform the ender.\nThe H version can have a gap between the first and second follow-up. Allowing a potentially large reward for punish attempts on the first part at the compromise that the risk is greater for Djeeta afterward due to being closer to the opponent for a punish if they decide to continue blocking.\nDue to the advancing nature of this move, the L and H version are viable alternatives to Djeeta's poor whiff punishing options against longer normals and play a key role in her neutral gameplan."
};
const hRekka = { 
  moveName: 'H Vorpal Blade', 
  altName: '214H', 
  damage: '300x2', 
  guard: 'Mid', 
  startup: '15', 
  active: '2(8)5', 
  recovery: '18', 
  onblock: '-6', 
  onhit: '-2',
  oncounterhit: '-2',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Two advancing slashes that can be rekka'd into additional followups. Djeeta's main confirm special, granting her excellent corner carry on hit. This move is also extremely strong in her offense due to its frametrap ability and relative safety.\nThe L version comes out quickly, while the M version is slower, but reaches further and is safer on block.\nThe L and M versions will immediately perform the ender with a second 214 input, while the H version will perform a second set of slashes before the knockdown ender.\nThe ender can frametrap an opponent attempting to challenge the first part of the rekka on block. The ender is always unsafe on block, so perform with caution.\nAdditionally, H rekka ender can now wall bounce within proximity of the corner. Allowing potentially bigger combos from midscreen to corner.\nDjeeta cannot follow up with anything if the ender frametraps the opponent when directly at the corner. Even on counter-hit.\nM version launches on counter-hit. Allowing full combo confirms when near the corner.\nM version is safe on block and will frametrap in cancels from auto combo and nearly all of Djeeta's far normals, making it a strong option to use to end a blockstring with some free chip. This cancel can be dodged and punished, though this comes with risk to the opponent as this dodge can be baited by simply blocking or using a charged fireball to punish it.\nBoth the M and H versions see staple use in Djeeta's corner combos as she can juggle into normals after the initial followups if she does not perform the ender.\nThe H version can have a gap between the first and second follow-up. Allowing a potentially large reward for punish attempts on the first part at the compromise that the risk is greater for Djeeta afterward due to being closer to the opponent for a punish if they decide to continue blocking.\nDue to the advancing nature of this move, the L and H version are viable alternatives to Djeeta's poor whiff punishing options against longer normals and play a key role in her neutral gameplan."
};
const hRekkaFollowUp = { 
  moveName: 'H Vorpal Blade (Follow Up)', 
  altName: '214H', 
  damage: '350x2', 
  guard: 'Mid', 
  startup: '11', 
  active: '2(10)3', 
  recovery: '20', 
  onblock: '-6', 
  onhit: 'HKD (+64)',
  oncounterhit: 'HKD (+64)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Two advancing slashes that can be rekka'd into additional followups. Djeeta's main confirm special, granting her excellent corner carry on hit. This move is also extremely strong in her offense due to its frametrap ability and relative safety.\nThe L version comes out quickly, while the M version is slower, but reaches further and is safer on block.\nThe L and M versions will immediately perform the ender with a second 214 input, while the H version will perform a second set of slashes before the knockdown ender.\nThe ender can frametrap an opponent attempting to challenge the first part of the rekka on block. The ender is always unsafe on block, so perform with caution.\nAdditionally, H rekka ender can now wall bounce within proximity of the corner. Allowing potentially bigger combos from midscreen to corner.\nDjeeta cannot follow up with anything if the ender frametraps the opponent when directly at the corner. Even on counter-hit.\nM version launches on counter-hit. Allowing full combo confirms when near the corner.\nM version is safe on block and will frametrap in cancels from auto combo and nearly all of Djeeta's far normals, making it a strong option to use to end a blockstring with some free chip. This cancel can be dodged and punished, though this comes with risk to the opponent as this dodge can be baited by simply blocking or using a charged fireball to punish it.\nBoth the M and H versions see staple use in Djeeta's corner combos as she can juggle into normals after the initial followups if she does not perform the ender.\nThe H version can have a gap between the first and second follow-up. Allowing a potentially large reward for punish attempts on the first part at the compromise that the risk is greater for Djeeta afterward due to being closer to the opponent for a punish if they decide to continue blocking.\nDue to the advancing nature of this move, the L and H version are viable alternatives to Djeeta's poor whiff punishing options against longer normals and play a key role in her neutral gameplan."
};
const hRekkaEnder = { 
  moveName: 'H Vorpal Blade (Ender)', 
  altName: '214H', 
  damage: '400', 
  guard: 'Mid', 
  startup: '17', 
  active: '3', 
  recovery: '22', 
  onblock: '-8', 
  onhit: 'HKD (+52)',
  oncounterhit: 'HKD (+46)',
  clash: '4',
  motion: ['214', 'h', 'or', '2', 'a', 'h'],
  description: "Two advancing slashes that can be rekka'd into additional followups. Djeeta's main confirm special, granting her excellent corner carry on hit. This move is also extremely strong in her offense due to its frametrap ability and relative safety.\nThe L version comes out quickly, while the M version is slower, but reaches further and is safer on block.\nThe L and M versions will immediately perform the ender with a second 214 input, while the H version will perform a second set of slashes before the knockdown ender.\nThe ender can frametrap an opponent attempting to challenge the first part of the rekka on block. The ender is always unsafe on block, so perform with caution.\nAdditionally, H rekka ender can now wall bounce within proximity of the corner. Allowing potentially bigger combos from midscreen to corner.\nDjeeta cannot follow up with anything if the ender frametraps the opponent when directly at the corner. Even on counter-hit.\nM version launches on counter-hit. Allowing full combo confirms when near the corner.\nM version is safe on block and will frametrap in cancels from auto combo and nearly all of Djeeta's far normals, making it a strong option to use to end a blockstring with some free chip. This cancel can be dodged and punished, though this comes with risk to the opponent as this dodge can be baited by simply blocking or using a charged fireball to punish it.\nBoth the M and H versions see staple use in Djeeta's corner combos as she can juggle into normals after the initial followups if she does not perform the ender.\nThe H version can have a gap between the first and second follow-up. Allowing a potentially large reward for punish attempts on the first part at the compromise that the risk is greater for Djeeta afterward due to being closer to the opponent for a punish if they decide to continue blocking.\nDue to the advancing nature of this move, the L and H version are viable alternatives to Djeeta's poor whiff punishing options against longer normals and play a key role in her neutral gameplan."
};

// skybound art
const sba = { 
  moveName: 'Eternal Ascendancy', 
  altName: '236236H', 
  damage: '2500-3700', 
  guard: 'All', 
  startup: '14', 
  active: '-', 
  recovery: '-', 
  onblock: '-13', 
  onhit: 'HKD (T:+44, S:+34)',
  oncounterhit: 'HKD (T:+44, S:+34)',
  clash: '-',
  motion: ['236', '236', 'h', 'or', '236', 'a'],
  description: "Has some invulnerability. On simple input, it will unleash Reginleiv Azimuth (the Conqueror of the Eternals skin CA) when hit close. With technical input, you can Reginleiv Zenith (the Guiders to the Eternal Edge skin CA) from any hit by doing a rave-style input.\nThe rave input is L, L, M, M, H, H, L, M, H, 214U. This CAN be done on block, but doing so will not make the super any safer; each hit is still punishable on block. When done using the simple input, the rave will automatically be executed on hit at close range, but not on block.\nAllows Djeeta to confirm into her max damage Skybound Art from much further than most characters due to the technical input granting the full super animation as long as the first hit of the lunge collides with ANY hurtbox, including extended hurtboxes, well outside of it's intended clean hit window. Confirm this from f.M, 2M, or f.H for great returns on a single hit confirm.\nThis super doubles as a utility for punishing the opponent's projectiles at range, though it is not as consistent as some other supers at doing this due to it's lunge speed. Easy input is quick and great for reacting to close projectiles, while technical input is harder to do but rewards even greater damage from further out as long as the first hit of the lunge connects.\nGreat for heavily discouraging the opponent's projectiles, potentially putting the opposing character at a noticeable disadvantage in the neutral.\nThis super outside of SSBAs is the hardest hitting super in the game.\nBase damage for Reginleiv Azimuth (easy input) is 3500; minimum damage is 513. Base damage for Reginleiv Zenith (technical input) is 3700; minimum damage is 935.\nIn close to point-blank scenarios, delaying the 1st follow up as long as possible after the first is blocked can create a frame trap.\nSimple input super never grants a safe jump.\nDjeeta is +4 if she fails to complete the deadly rave at any follow-up."
};
const ssba = { 
  moveName: 'Skyfall', 
  altName: '236236U', 
  damage: '3500-4500', 
  guard: 'All', 
  startup: '13', 
  active: '6[3,3]3,3,3,3,6(5)6', 
  recovery: '42', 
  onblock: '-52', 
  onhit: 'HKD (T:+45, S:+35)',
  oncounterhit: 'HKD (T:+45, S:+35)',
  clash: '-',
  motion: ['236', '236', 'u', 'or', '236', 'a', 'u'],
  description: "Djeeta performs a rising uppercut like Katalina's SSBA (contrast with Gran's projectile SSBA). If it hits properly, the attack finishes with Proto Bahamut. If the cinematic doesn't connect, the attack finishes with a big sword slice that sends the opponent back to the ground.\nNot a good reversal; can be option selected with meaty lights.\nNot a bad option as a raw anti-air, though Djeeta moves quite far forward during the uppercut, making the effective range somewhat awkward. Will combo consistently from 2H regardless of counter hit.\nUppercut nature of the super makes it highly unsafe on block and more or less impossible to confirm into from max range pokes. Generally sees use to end her corner combos when Djeeta is below 30% health.\nMinimum Damage:\nTechnical Input: 1350→1050\nSimple Input: 900→700"
};


export const djeetaInfo = [
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
  lChargedFireball,
  mChargedFireball,
  hChargedFireball,
  lUppercut,
  mUppercut,
  hUppercut,
  lRekka,
  mRekka,
  rekkaEnder,
  hRekka,
  hRekkaFollowUp,
  hRekkaEnder,
  sba,
  ssba
]
