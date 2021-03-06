// working with classes
import { HasFormatter } from "../interfaces/HasFormatter.js"
export class Invoice implements HasFormatter {
    // readonly client: string;
    // private detail: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private detail: string, 
        public amount: number) {

        // this.client = client;
        // this.detail = detail;
        // this.amount = amount;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}
