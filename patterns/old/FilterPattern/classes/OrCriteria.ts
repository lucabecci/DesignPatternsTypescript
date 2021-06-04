import Criteria from "../interfaces/Criteria";
import Person from "./Person";

class OrCriteria implements Criteria{
    private criteria: Criteria
    private otherCriteria: Criteria

    constructor(criteria: Criteria, otherCriteria: Criteria) {
        this.criteria = criteria
        this.otherCriteria = otherCriteria
    }
    public meetCriteria(persons: Person[]): Person[] {
        const firstCriteriaPersons =  this.criteria.meetCriteria(persons)
        const otherCriteriaPersons = this.meetCriteria(persons)

        for(let i = 0; i < otherCriteriaPersons.length; i ++) {
            for (let j = 0; j < firstCriteriaPersons.length; j++){
                if(otherCriteriaPersons[i] !== firstCriteriaPersons[j]){
                    firstCriteriaPersons.push(otherCriteriaPersons[i])
                }
            }
        }

        return firstCriteriaPersons
    }
}

export default OrCriteria