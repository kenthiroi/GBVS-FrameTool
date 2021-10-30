// TEMPLATE 
// const moveName = {moveName: , altName: , damage: , guard: mid, startup: , active: , recovery: , onblock: , onhit: };

// close normals
const closeL = {moveName: 'Close Light', altName: 'cL', damage: '400', guard: 'mid', startup: '5', active: '3', recovery: '6', onblock: '2', onhit: '6'};
const closeM = {moveName: 'Close Medium', altName: 'cM', damage: '700', guard: 'mid', startup: '6', active: '3', recovery: '10', onblock: '0', onhit: '4'};
const closeH = {moveName: 'Close Heavy', altName: 'cH', damage: '1200', guard: 'mid', startup: '8', active: '4', recovery: '18', onblock: '-3', onhit: '1'};

// auto combos
const auto1 = {moveName: 'Auto Combo 2nd hit', altName: 'cXX', damage: '350', guard: 'mid', startup: null, active: null, recovery: null, onblock: '-3', onhit: '1'};
const auto2 = {moveName: 'Auto Combo 3rd hit', altName: 'cXXX', damage: '350', guard: 'mid', startup: null, active: null, recovery: null, onblock: '-5', onhit: '-1'};

// far normals
const far5L = {moveName: 'Far Light', altName: 'f5L', damage: '400', guard: 'mid', startup: '6', active: '3', recovery: '13', onblock: '-3', onhit: '1'};
const far5M = {moveName: 'Far Medium', altName: 'f5M', damage: '700', guard: 'mid', startup: '8', active: '3', recovery: '18', onblock: '-6', onhit: '-2'};
const far5H = {moveName: 'Far Heavy', altName: 'f5H', damage: '1000', guard: 'mid', startup: '10', active: '5', recovery: '20', onblock: '-9', onhit: '-5'};

// regular normals
const n2L = {moveName: 'Crouch Light', altName: '2L', damage: '400', guard: 'mid', startup: '6', active: '3', recovery: '6', onblock: '2', onhit: '6'};
const n2M = {moveName: 'Crouch Medium', altName: '2M', damage: '700', guard: 'mid', startup: '7', active: '5', recovery: '9', onblock: '1', onhit: '5'};
const n2H = {moveName: 'Crouch Heavy', altName: '2H', damage: '1000', guard: 'mid', startup: '10', active: '6', recovery: '24', onblock: '-13', onhit: '-9'};
const n2U = {moveName: 'Crouch Unique', altName: '2U', damage: '700', guard: 'mid', startup: '7', active: '6', recovery: '21', onblock: '-12', onhit: 'HKD'};

// jump normals
const jL = {moveName: 'Jump Light', altName: 'jL', damage: '400', guard: 'high', startup: '5', active: null, recovery: null, onblock: null, onhit: null};
const jM = {moveName: 'Jump Medium', altName: 'jM', damage: '550', guard: 'high', startup: '6', active: null, recovery: null, onblock: null, onhit: null};
const jH = {moveName: 'Jump Heavy', altName: 'jH', damage: '800', guard: 'high', startup: '7', active: null, recovery: null, onblock: null, onhit: null};
const jU = {moveName: 'Jump Unique', altName: 'jU', damage: '700', guard: 'high', startup: '12', active: null, recovery: null, onblock: null, onhit: null};

// unique action
const lv1U = {moveName: 'Power Raise Lv1', altName: '5ULv1', damage: '1000', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv2U = {moveName: 'Power Raise Lv2', altName: '5ULv2', damage: '1200', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv3U = {moveName: 'Power Raise Lv3', altName: '5ULv3', damage: '1400', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv4U = {moveName: 'Power Raise Lv4', altName: '5ULv4', damage: '1600', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv5U = {moveName: 'Power Raise Lv5', altName: '5ULv5', damage: '2000', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};

const groundThrow = {moveName: 'Ground Throw', damage: '1500', guard: 'throw', startup: '7', active: null, recovery: null, onblock: null, onhit: null};
const airThrow = {moveName: 'Air Throw', damage: '1500', guard: 'throw', startup: '5', active: null, recovery: null, onblock: null, onhit: null};

const uOverhead = {moveName: 'Overhead', altName: 'UOH', damage: '1000', guard: 'high', startup: '26', active: null, recovery: null, onblock: '-4', onhit: '1'};

// fireballs
const lFireball = {moveName: 'L Reginleiv', altName: '236L', damage: '800', guard: 'all', startup: '15', active: null, recovery: null, onblock: '-7', onhit: '-3'};
const mFireball = {moveName: 'M Reginleiv', altName: '236M', damage: '400, 800', guard: 'mid, all', startup: '13', active: null, recovery: null, onblock: '-4', onhit: '0'};
const hFireball = {moveName: 'H Reginleiv', altName: '236H', damage: '350 x 3', guard: 'all', startup: '15', active: null, recovery: null, onblock: '+3', onhit: '+7'};

// dragon punches
const lUppercut = {moveName: 'L Rising Sword', altName: '623L', damage: '700, 300', guard: 'mid, all', startup: '9', active: null, recovery: null, onblock: '-17', onhit: 'KD'};
const mUppercut = {moveName: 'M Rising Sword', altName: '623M', damage: '700, 300 x 2', guard: 'mid, all', startup: '9', active: null, recovery: null, onblock: '-26', onhit: 'KD'};
const hUppercut = {moveName: 'H Rising Sword', altName: '623H', damage: '950~1400', guard: 'mid, all', startup: '9', active: null, recovery: null, onblock: '-26', onhit: 'HKD'};

// rekka
const lRekka = {moveName: 'L Overdrive Surge', altName: '214L', damage: '700', guard: 'mid', startup: '13', active: '2', recovery: '19', onblock: '-6', onhit: '-2'};
const followupRekka = {moveName: 'M Overdrive Surge(follow up)', altName: '214L -> 214M', damage: '500', guard: 'mid', startup: null, active: '13', recovery: '29', onblock: '-10', onhit: 'KD'};
const mRekka = {moveName: 'M Overdrive Surge', altName: '214M', damage: '1200', guard: 'mid', startup: '16', active: '13', recovery: '29', onblock: '+2~-10', onhit: null};
const hRekka = {moveName: 'H Overdrive Surge', altName: '214H', damage: '1200', guard: 'mid', startup: '13', active: '13', recovery: '37', onblock: '+4~-8', onhit: 'HKD'};

// skybound art
const sba =  {moveName: 'Tempest Blade', altName: '236236H', damage: '2500-3500', guard: 'mid', startup: '6+5', active: null, recovery: null, onblock: '-13', onhit: 'HKD'};
const ssba =  {moveName: 'Catastrophe', altName: '236236U', damage: '3500-4500', guard: 'all', startup: '8+5', active: null, recovery: null, onblock: '-23', onhit: 'HKD'};