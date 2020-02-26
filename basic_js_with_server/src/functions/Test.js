class Test{
    constructor() {
        this.print = this.print.bind(this);
    }
    
    print() {
        console.log("==== This is from a class metohd ===");
    }
}

export default Test;