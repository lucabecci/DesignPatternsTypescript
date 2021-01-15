import Person from "./classes/Person";
import CriteriaMale from './classes/CriteriaMale'
import CriteriaFemale from './classes/CriteriaFemale'
import CriteriaSingle from './classes/CriteriaSingle'
import AndCriteria from './classes/AndCriteria'
import OrCriteria from './classes/OrCriteria'

class CriteriaPattern {
    public generate(){
        const persons: Person[] = []

        persons.push(new Person("Robert","Male", "Single"));
        persons.push(new Person("John", "Male", "Married"));
        persons.push(new Person("Laura", "Female", "Married"));
        persons.push(new Person("Diana", "Female", "Single"));
        persons.push(new Person("Mike", "Male", "Single"));
        persons.push(new Person("Bobby", "Male", "Single"));

        const male = new CriteriaMale();
        const female = new CriteriaFemale();
        const single = new CriteriaSingle();
        const singleMale = new AndCriteria(single, male);
        const singleOrFemale = new OrCriteria(single, female);

        console.log('MALES:')
        this.printPersons(male.meetCriteria(persons))

        console.log('FEMALE:')
        this.printPersons(female.meetCriteria(persons))

        console.log('SINGLE MALES:')
        this.printPersons(singleMale.meetCriteria(persons))

        console.log('SINGLE OR FEMALES:')
        this.printPersons(singleOrFemale.meetCriteria(persons))
    }

    public printPersons(persons: Person[]): void{
        persons.forEach(person => {
            console.log(`Person: [Name:${person.getName()}, Gender:${person.getGender()}, Marital Status:${person.getMaritialStatus()}]`)
        });
    }
}

export default CriteriaPattern