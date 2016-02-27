/**
 * @constructor
 */
var MinStack = function() {
    this.araay = [];
    this.top1 = [];
    
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    if(this.top1[this.top1.length - 1] >= x || this.top1.length === 0) {
        this.top1.push(x);
    }
    this.araay.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var result = this.araay.pop();
    if(this.top1[this.top1.length -1] === result) {
        this.top1.pop();
        
    }
    return result;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.araay[this.araay.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.top1[this.top1.length - 1];

};