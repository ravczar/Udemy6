export class User {

    constructor(
        private email:string, 
        private subscription:string, 
        private password:string
    ){}
    
    // Old ToString
    public expressYourself(): string {
        return `Email: ${this.email}, Sub.: ${this.subscription}, Password: ${this.password}.`;
    }
    // Getters
    public getEmail(): string {
        return this.email;
    }
    public getSubscription(): string {
        return this.subscription;
    }
    public getPassword(): string {
        return this.password;
    }
    //Setters
    public setEmail(Email: string){
        this.email = Email;
    }
    public setSubscription(Subscription: string) {
        this.subscription = Subscription;
    }
    public setPassword(Password: string){
        this.password = Password;
    }

}