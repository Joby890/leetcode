/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var rows = [
      // [1],
      // [1,1],
    ];
    for(var x = 0; x < numRows; x++) {
      var row = [1];
      for(var i = 1; i < x; i++) {
        row[i] = rows[x - 1][i - 1] + rows[x - 1][i];
      }
      row[x] = 1;
      rows.push(row);
    }
    return rows;
};


console.log(generate(6));
