export class Payment {
    // readonly client: string;
    // private detail: string;
    // public amount: number;
    constructor(recepient, detail, amount) {
        this.recepient = recepient;
        this.detail = detail;
        this.amount = amount;
        // this.client = client;
        // this.detail = detail;
        // this.amount = amount;
    }
    format() {
        return `${this.recepient} is owed $${this.amount} for ${this.detail}`;
    }
}
