import Criteria from "../interfaces/Criteria";
import Person from "./Person";

class CriteriaMale implements Criteria{
    meetCriteria(persons: Person[]): Person[]{
        const malePersons: Person[] = []
        persons.forEach(person => {
            if(person.getGender() === 'MALE'){
                malePersons.push(person)
            }
        });
        return malePersons
    }
}

export default CriteriaMale