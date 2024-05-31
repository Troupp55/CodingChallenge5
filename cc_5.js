class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}, Monthly Salary: $${this.salary.toFixed(2)}`);
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Example of this
const employee = new Employee("John Doe", 5000);
console.log(`Annual Salary: $${employee.calculateAnnualSalary().toFixed(2)}`);


class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const annualSalary = super.calculateAnnualSalary();
        const bonus = annualSalary * 0.15;
        console.log(`Bonus: $${bonus.toFixed(2)}`);
        return annualSalary + bonus;
    }
}

// Another exmaple of this 
const manager = new Manager("Alice Smith", 7000, "Sales");
console.log(`Total Annual Salary with Bonus: $${manager.calculateAnnualSalary().toFixed(2)}`);


// Test Data
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
console.log(`Total Annual Salary for ${manager1.name} in ${manager1.department}: $${manager1.calculateAnnualSalary().toFixed(2)}`);

const manager2 = new Manager("Debbie Little", 7205, "Finance");
console.log(`Total Annual Salary for ${manager2.name} in ${manager2.department}: $${manager2.calculateAnnualSalary().toFixed(2)}`);
