import Criteria from "../interfaces/Criteria";
import Person from "./Person";

class CriteriaSingle implements Criteria{
    meetCriteria(persons: Person[]): Person[]{
        const singlePersons: Person[] = []
        persons.forEach(person => {
            if(person.getMaritialStatus() === 'SINGLE'){
                singlePersons.push(person)
            }
        });
        return singlePersons
    }
}

export default CriteriaSingle