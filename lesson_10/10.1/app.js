class User {
    constructor(name, age, userLocation, occupation) {
        this.name = name;
        this.age = age;
        this.location = userLocation;
        this.occupation = occupation;
    }

    getInfo() {
        return `Ім'я: ${this.name}\nВік: ${this.age}\nМісце проживання: ${this.location}\nПрофесія: ${this.occupation}`;
    }
}

class UserList {
    constructor() {
        this.users = [];
        this.allUserData = [];
    }

    addUser(user) {
        this.users.push(user);
        this.allUserData.push({
            name: user.name,
            age: user.age,
            location: user.location,
            occupation: user.occupation
        });
        this.renderUsers();
    }

    getAllUsersInfo() {
        return this.users.map(user => user.getInfo()).join('\n\n');
    }

    renderUsers() {
        const userListElement = document.getElementById("userList");
        userListElement.innerHTML = this.users.map(
            user => 
                `<li>${user.getInfo()}</li>`
        ).join('');
    }
}

const userList = new UserList();

function addUserFromForm() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const userLocation = document.getElementById("location").value;
    const occupation = document.getElementById("occupation").value;
    
    if (name && age && userLocation && occupation) {
        userList.addUser(new User(name, age, userLocation, occupation));
        document.getElementById("userForm").reset();
    } else {
        alert("Будь ласка, заповніть всі поля!");
    }
}