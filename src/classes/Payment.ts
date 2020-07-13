import { HasFormatter } from "../interfaces/HasFormatter.js"
export class Payment implements HasFormatter {
    // readonly client: string;
    // private detail: string;
    // public amount: number;

    constructor(
        readonly recepient: string,
        private detail: string, 
        public amount: number) {

        // this.client = client;
        // this.detail = detail;
        // this.amount = amount;
    }

    format() {
        return `${this.recepient} is owed $${this.amount} for ${this.detail}`;
    }
}