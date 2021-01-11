import SingleObject from './SingleObject'

class SingletonPattern{
    public static generate(){
        const object = SingleObject.getInstance()

        object.showMessage()
    }
}

export default SingletonPattern