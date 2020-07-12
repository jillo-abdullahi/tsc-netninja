// working with classes
export class Invoice {
    // readonly client: string;
    // private detail: string;
    // public amount: number;
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
        // this.client = client;
        // this.detail = detail;
        // this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}
