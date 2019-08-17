module.exports = {
    // Fib sequence calculation
    fib: function (index){
        if (index < 2){
            return 1;
        }
        else {
            return this.fib(index-1) + this.fib(index-2);
        }
    }
}