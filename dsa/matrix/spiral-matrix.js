/**
 * Input: 
 *     1 ⟾  2 ⟾  3 ⟾ 4
 *                       ⬇
 *    5 ⟾  6 ⟾  7     8
 *   ⬆            ⬇    ⬇
 *   9     10  ⬅  11   12
 *  ⬆                  ⬇        
 *  13 ⬅  14 ⬅  15 ⬅ 16
 * 
 * Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 */


const input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

const traverseMatrix = (inputArr) => {
    const result = [];
    let top = 0, bottom = input.length - 1, left = 0, right = input[0].length - 1;
    let direction = 0;
    while (left <= right && top <= bottom) {
        if (direction === 0) {
            for (let i = left; i <= right; i++) {
                result.push(inputArr[top][i]);
            }
            top += 1;
        } else if (direction === 1) {
            for (let i = top; i <= bottom; i++) {
                result.push(inputArr[i][right]);
            }
            right -= 1;
        } else if (direction === 2) {
            for (let i = right; i >= left; i--) {
                result.push(inputArr[bottom][i]);
            }
            bottom -= 1;
        } else if (direction === 3) {
            for (let i = bottom; i >= top; i--) {
                result.push(inputArr[i][left]);
            }
            left += 1;
        }
        direction = (direction + 1) % 4;
    }
    return result;
};

console.log('Spiral Traversal of matrix: ', traverseMatrix(input));
