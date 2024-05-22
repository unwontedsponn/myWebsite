const rightHand = [
    'x••x••x•••x•x•••',
    'x••x••x•••x••x••',
    'x••x•••x••x•x•••',
    'x••x••xx••x•x••x',
    'x•xx•xx•x•x•xx•x',
    'xx•xxx•xx•x•xx•x',
    'x•xx•x•xx•x•xx•x',
    '•xxx•x•xx•x•xxxx',
    'x••x•x••x•x••x••'
];

const leftHand = [
    '••⌃•••⌄•••⌃•••⌄•',
    '••⌃•••⌄⌄••⌃•••⌄⌄',
    '••⌃•••⌄⌄•⌃•⌃••⌄⌄',
    '••⌃⌃••⌄⌄••⌃⌃••⌄⌄',
    '•••⌃⌃••••••⌃⌃•••',
    '⌃••⌃••••⌃••⌃••••',
    '⌃⌃••⌃⌃••⌃⌃••⌃⌃••',
    '⌃•••⌃•••⌃⌃•⌃••••',
    '⌃•••⌃•••⌃⌃•⌃⌃•••',
    '••⌄•••⌃⌃••⌄•••⌃⌃',
    '••⌃•⌃•••⌃••⌃••••',
    '••••⌄•⌄•••••⌄•⌄•'
];

const kick = [
    'o•••••••o•••••••',
    'o•••o•••o•••o•••',
    '••••o•••••••o•••',
    'o••••••oo•••••••',
    'o••oo••oo••oo••o',
    '••••••o•••••••o•',
    'o••o•••••••o••••',
    '•••o•••••••o••••',
    'o••o••••o••o••••',
    'o••o••o•o••o••o•'
];

const hhf = [
    '••••v•••••••v•••',
    '•••v•••v•••v•••v',
    '••v•••v•••v•••v•',
    '••v•••••••v•••••',
    '•••v•••••••v••••',
    'v••v••v•v••v••v•',
    'v•••v•••v•••v•••',
    'v•••+•••v•••+•••',
    'v•••v•••vv••v•••',
];

export const fourCombinations = [];

// Total = 9680 combinations
for (let i = 0; i < rightHand.length; i++) {
    for (let j = 0; j < leftHand.length; j++) {
        for (let k = 0; k < kick.length; k++) {
            for (let h = 0; h < hhf.length; h++) {
                const exerciseNumber = i * leftHand.length * kick.length * hhf.length +
                                    j * kick.length * hhf.length +
                                    k * hhf.length +
                                    h + 1;

                fourCombinations.push({
                    name: `Exercise: ${exerciseNumber}`,
                    rightHand: rightHand[i],
                    leftHand: leftHand[j],
                    kick: kick[k],
                    hhf: hhf[h]
                });
            }
        }
    }
}