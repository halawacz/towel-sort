module.exports = function towelSort(matrix = []) {
    if (matrix == undefined) {
        return [];
    }

    let iterator = matrix.entries();
    let result = [];
    for (const [index, element] of iterator) {
        if (index % 2 == 0) {
            for (const e in element) {
                result.push(matrix[index][e]);
            }
        } else {
            matrix[index].reverse();
            for (const e in element) {
                result.push(matrix[index][e]);
            }
        }
    }
    return result;
};
