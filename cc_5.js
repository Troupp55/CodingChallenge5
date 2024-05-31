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

// Example usage:
const employee = new Employee("John Doe", 5000);
console.log(`Annual Salary: $${employee.calculateAnnualSalary().toFixed(2)}`);
