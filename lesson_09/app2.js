
// Клас для співробітника
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

// Клас для департаменту (може містити співробітників або піддепартаменти)
class Department {
    constructor(name) {
        this.name = name;
        this.subDepartments = [];
        this.employees = [];
    }

    // Додає співробітника в департамент
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Додає піддепартамент
    addSubDepartment(subDepartment) {
        this.subDepartments.push(subDepartment);
    }

    // Рекурсивний підрахунок загальної зарплати
    getTotalSalary() {
        let total = this.employees.reduce((sum, emp) => sum + emp.salary, 0);
        for (let subDep of this.subDepartments) {
            total += subDep.getTotalSalary();
        }
        return total;
    }
}

// Створення компанії
class Company {
    constructor() {
        this.departments = [];
    }

    // Додає департамент
    addDepartment(department) {
        this.departments.push(department);
    }
    
    // Обчислення загальної зарплати в компанії
    getTotalSalary() {
        return this.departments.reduce((sum, dep) => sum + dep.getTotalSalary(), 0);
    }
}

// Створення об'єктів компанії, департаментів і співробітників
const company = new Company();

const sales = new Department("Sales");
sales.addEmployee(new Employee("John", 1000));
sales.addEmployee(new Employee("Alice", 600));

const development = new Department("Development");

const web = new Department("Web");
web.addEmployee(new Employee("Peter", 2000));
web.addEmployee(new Employee("Alex", 1800));

const internals = new Department("Internals");
internals.addEmployee(new Employee("Jack", 1300));

development.addSubDepartment(web);
development.addSubDepartment(internals);

company.addDepartment(sales);
company.addDepartment(development);

// Виведення загальної суми зарплат
console.log(company.getTotalSalary());
