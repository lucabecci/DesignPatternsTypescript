class SingleObject{
    public static instance: SingleObject = new SingleObject()

    private(){}

    public static getInstance(){
        return this.instance
    }

    public showMessage(): void {
        console.log('Hello World of my object')
    }
}

export default SingleObject