class Employee {
    private name: string
    private dept: string
    private salary: number
    private subordinates: Employee[]

    constructor(name: string, dept: string, sal: number){
        this.name = name
        this.dept = dept
        this.salary = sal
        this.subordinates = []
    }

    public add(e: Employee): void {
        this.subordinates.push(e)
    }

    public remove(e: Employee): void {
        let counter: number;
        this.subordinates.forEach(subordinate => {
            if(subordinate === e){
                this.subordinates.slice(counter, 1)
            }
            counter++
        });
    }
    public getSubordinates(): Employee[]{
        return this.subordinates
    }
}

export default Employee