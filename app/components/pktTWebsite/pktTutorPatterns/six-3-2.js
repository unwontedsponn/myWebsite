const rightHand = [
    'x•x•x••x•x••',
    'x•x•x••x•x•x',
    'x•x•x•xx•x•x',
    'x•x•xx•x•x•x',
    'x•x•xx•x•x••',
    'x•x•xx•x•xx•',
    'x•x•x•xx•xx•',
    'x•x••x•x•x••',
    'x•xx•x•x•xx•',
    'x•xx•x•xx•x•',
    '••x•x••x•x•x'
];

const leftHand = [
    '••⌃••⌄••⌃••⌄',
    '••⌃•⌄⌄••⌃•⌄⌄',
    '•⌃⌃•⌄⌄•⌃⌃•⌄⌄',
    '••⌃⌃••⌃⌃••⌃⌃',
    '⌃⌃••⌃⌃••⌃⌃••',
    '⌄⌄•⌃⌃•⌄⌄•⌃⌃•',
    '••⌃⌃••⌄⌄••⌃⌃',
    '•⌃••⌃••⌃⌃•⌃•',
    '⌃••⌃••⌃••⌃••',
    '⌃⌃••••⌃⌃••••',
    '⌃⌃•⌄⌄•⌃⌃•⌄⌄•'
];

const kick = [
    'o•••••o•••••',
    'o••o••o••o••',
    'o••••oo••••o',
    'o•••o•••o•••',
    'o••oo••oo••o',
    '••o•••o•••o•',
    'o•o•o•o•o•o•',
    'oo•oo•oo•oo•',
    'oo••oo••oo••',
    'oo••••oo••••'
];

const hhf = [
    '•••v•••••v••',
    'v••v••v••v••',
    '•••••v•••••v',
    '••v•••••v•••',
    '••v•••v•••v•',
    'v•••v•••v•••',
    '••v•v•••v•v•',
    '••v••v••v••v'
];

export const combinations = [];

// Total = 9680 combinations
for (let i = 0; i < rightHand.length; i++) {
    for (let j = 0; j < leftHand.length; j++) {
        for (let k = 0; k < kick.length; k++) {
            for (let h = 0; h < hhf.length; h++) {
                const exerciseNumber = i * leftHand.length * kick.length * hhf.length +
                                    j * kick.length * hhf.length +
                                    k * hhf.length +
                                    h + 1;

                combinations.push({
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