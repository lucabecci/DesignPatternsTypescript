import Person from "../classes/Person";

interface Criteria {
    meetCriteria(persons: Person[]): Person[]
}

export default Criteria