import Criteria from "../interfaces/Criteria";
import Person from "./Person";

class AndCriteria implements Criteria{
    private criteria: Criteria
    private otherCriteria: Criteria

    constructor(criteria: Criteria, otherCriteria: Criteria) {
        this.criteria = criteria
        this.otherCriteria = otherCriteria
    }
    public meetCriteria(persons: Person[]): Person[] {
        const firstCriteriaPerson: Person[] = this.criteria.meetCriteria(persons)
        return this.otherCriteria.meetCriteria(firstCriteriaPerson)
    }
}

export default AndCriteria