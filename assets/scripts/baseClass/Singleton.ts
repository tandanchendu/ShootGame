export class Singleton{
    private static instance=null;
    public static getInstance<T>():T{
        if(this.instance==null)
            this.instance=new this();
        return this.instance;
    }
    protected constructor(){

    }
}