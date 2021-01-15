import Criteria from "../interfaces/Criteria";
import Person from "./Person";

class CriteriaFemale implements Criteria{
    meetCriteria(persons: Person[]): Person[]{
        const femalePerson: Person[] = []
        persons.forEach(person => {
            if(person.getGender() === 'FEMALE'){
                femalePerson.push(person)
            }
        });
        return femalePerson
    }
}

export default CriteriaFemale