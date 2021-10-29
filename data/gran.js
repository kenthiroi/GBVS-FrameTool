// TEMPLATE 
// const moveName = {damage: , guard: mid, startup: , active: , recovery: , onblock: , onhit: };

// close normals
const closeL = {damage: '400', guard: 'mid', startup: '5', active: '3', recovery: '6', onblock: '2', onhit: '6'};
const closeM = {damage: '700', guard: 'mid', startup: '6', active: '3', recovery: '10', onblock: '0', onhit: '4'};
const closeH = {damage: '1200', guard: 'mid', startup: '8', active: '4', recovery: '18', onblock: '-3', onhit: '1'};

// auto combos
const auto1 = {damage: '350', guard: 'mid', startup: null, active: null, recovery: null, onblock: '-3', onhit: '1'};
const auto2 = {damage: '350', guard: 'mid', startup: null, active: null, recovery: null, onblock: '-5', onhit: '-1'};

// far normals
const far5L = {damage: '400', guard: 'mid', startup: '6', active: '3', recovery: '13', onblock: '-3', onhit: '1'};
const far5M = {damage: '700', guard: 'mid', startup: '8', active: '3', recovery: '18', onblock: '-6', onhit: '-2'};
const far5H = {damage: '1000', guard: 'mid', startup: '10', active: '5', recovery: '20', onblock: '-9', onhit: '-5'};

// regular normals
const n2L = {damage: '400', guard: 'mid', startup: '6', active: '3', recovery: '6', onblock: '2', onhit: '6'};
const n2M = {damage: '700', guard: 'mid', startup: '7', active: '5', recovery: '9', onblock: '1', onhit: '5'};
const n2H = {damage: '1000', guard: 'mid', startup: '10', active: '6', recovery: '24', onblock: '-13', onhit: '-9'};
const n2U = {damage: '700', guard: 'mid', startup: '7', active: '6', recovery: '21', onblock: '-12', onhit: 'HKD'};

// jump normals
const jL = {damage: '400', guard: 'high', startup: '5', active: null, recovery: null, onblock: null, onhit: null};
const jM = {damage: '550', guard: 'high', startup: '6', active: null, recovery: null, onblock: null, onhit: null};
const jH = {damage: '800', guard: 'high', startup: '7', active: null, recovery: null, onblock: null, onhit: null};
const jU = {damage: '700', guard: 'high', startup: '12', active: null, recovery: null, onblock: null, onhit: null};

// unique action
const lv1U = {damage: '1000', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv2U = {damage: '1200', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv3U = {damage: '1400', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv4U = {damage: '1600', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};
const lv5U = {damage: '2000', guard: 'mid', startup: '22', active: '9', recovery: '13', onblock: '-5', onhit: null};

const groundThrow = {damage: '1500', guard: 'throw', startup: '7', active: null, recovery: null, onblock: null, onhit: null};
const airThrow = {damage: '1500', guard: 'throw', startup: '5', active: null, recovery: null, onblock: null, onhit: null};

const uOverhead = {damage: '1000', guard: 'high', startup: '26', active: null, recovery: null, onblock: '-4', onhit: '1'};

// fireballs
const lFireball = {damage: '800', guard: 'all', startup: '15', active: null, recovery: null, onblock: '-7', onhit: '-3'};
const mFireball = {damage: '400, 800', guard: 'mid, all', startup: '13', active: null, recovery: null, onblock: '-4', onhit: '0'};
const hFireball = {damage: '350 x 3', guard: 'all', startup: '15', active: null, recovery: null, onblock: '+3', onhit: '+7'};

// dragon punches
const lFireball = {damage: '700, 300', guard: 'mid, all', startup: '9', active: null, recovery: null, onblock: '-17', onhit: 'KD'};
const mFireball = {damage: '700, 300 x 2', guard: 'mid, all', startup: '9', active: null, recovery: null, onblock: '-26', onhit: 'KD'};
const hFireball = {damage: '950~1400', guard: 'mid, all', startup: '9', active: null, recovery: null, onblock: '-26', onhit: 'HKD'};

// rekka
const lRekka = {damage: '700', guard: 'mid', startup: '13', active: '2', recovery: '19', onblock: '-6', onhit: '-2'};
const followupRekka = {damage: '500', guard: 'mid', startup: null, active: '13', recovery: '29', onblock: '-10', onhit: 'KD'};
const mRekka = {damage: '1200', guard: 'mid', startup: '16', active: '13', recovery: '29', onblock: '+2~-10', onhit: null};
const hRekka = {damage: '1200', guard: 'mid', startup: '13', active: '13', recovery: '37', onblock: '+4~-8', onhit: 'HKD'};

// skybound art
const sba =  {damage: '2500-3500', guard: 'mid', startup: '6+5', active: null, recovery: null, onblock: '-13', onhit: 'HKD'};
const ssba =  {damage: '3500-4500', guard: 'all', startup: '8+5', active: null, recovery: null, onblock: '-23', onhit: 'HKD'};
