
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
    for (let i = 0; i < matrix.length; i++) {
        
        if (i % 2 !== 0) {
            matrix[i].reverse()
        }
      
    }
    
  result = matrix.flat(Infinity)
  
    return result;
}
