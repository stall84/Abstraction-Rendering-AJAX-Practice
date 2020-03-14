// JS for index.html 



class User{
    
    constructor(username, email, password) {
        
        this.username = username;
        this.email = email;
        this.password = password;
        
     }
    
    register() {
        console.log(this.username + " is now registered")
    }
    
    
}

let bob = new User('bob', 'bobby@bobsalot.com', 'passDumb');

bob.register();





class Person {
    
    static species() {
        return 'Homo Sapiens';
    }
    
    static speciesSentence() {
        return `Humans are classified as ${this.species()} `;
    }
    
    constructor(firstName, lastName) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
        
    }
    
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    
    setLastName(lastName) {
        this.lastName = lastName;
    }
    
    
}