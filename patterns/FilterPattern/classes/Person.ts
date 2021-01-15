class Person {
    private name: string
    private gender: string
    private maritalStatus: string

    constructor(name: string, gender: string, maritialStatus: string){
        this.name = name
        this.gender = gender
        this.maritalStatus = maritialStatus
    }

    public getName(): string {
        return this.name
    }
    public getGender(): string {
        return this.gender
    }
    public getMaritialStatus(): string {
        return this.maritalStatus
    }
}

export default Person