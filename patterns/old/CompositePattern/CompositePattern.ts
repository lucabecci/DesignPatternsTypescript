import Employee from "./Employee";

class CompositePattern {
    public static generate(){
        const CEO: Employee = new Employee("John","CEO", 30000) 
        const headSales: Employee = new Employee("Robert","Head Sales", 20000);
        const headMarketing: Employee = new Employee("Michel","Head Marketing", 20000);

        const clerk1: Employee = new Employee("Laura","Marketing", 10000);
        const clerk2: Employee = new Employee("Bob","Marketing", 10000); 

        const salesExecutive1: Employee = new Employee("Richard","Sales", 10000);
        const salesExecutive2: Employee = new Employee("Rob","Sales", 10000);
        
        CEO.add(headSales)
        CEO.add(headMarketing)

        headSales.add(salesExecutive1)
        headSales.add(salesExecutive2)

        headMarketing.add(clerk1)
        headMarketing.add(clerk2)

        CEO.getSubordinates().forEach(headEmployee => {
            console.log(headEmployee)
            headEmployee.getSubordinates().forEach(employee => {
                console.log(employee)
            });
        });
    }
}

export default CompositePattern