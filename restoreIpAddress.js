String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [];
    if(s.length > 12) {
        return [];
    }
    for(var i = 0; i < s.length; i++) {
      for(var x = 0; x < s.length; x++) {
        for(var z = 0; z < s.length; z++) {
          var copy = ""+s;
          copy = copy.splice(i, 0, ".");
          copy = copy.splice(x + 1, 0, ".");
          copy = copy.splice(z + 2, 0, ".");
          //console.log(copy);
          result.push(copy);
        }
      }
    }
    var final = [];
    result.forEach(function(q) {
      var split = q.split(".");
      var found = true;
      //console.log("Checking: "+q);
      for(var x = 0; x< split.length; x++) {
        var c = parseInt(split[x]);
        if(split[x][0] === "0" && split[x].length >= 2) {
          found = false;
          break;
        }
        if(c < 0 || c > 255 || Number.isNaN(c)) {
          found = false;
          break;
        } 

      }
      if(found && final.indexOf(q) === -1) {
        final.push(q);
      }
    });

    return final;
};