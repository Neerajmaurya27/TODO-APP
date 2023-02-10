import {MongoClient, ObjectId} from 'mongodb'

export class CurdManager {
    public static async create(inputObj:any){
        try {
            // const url = 'mongodb+srv://Neeraj:Neeraj@cluster0.becjdui.mongodb.net/?retryWrites=true&w=majority'
            const url = 'mongodb://localhost:27017'
            
            const client = await MongoClient.connect(url);
            
            const db = client.db('cdac');
            await db.collection('task').insertOne(inputObj)
            
            client.close();
            
            return {opr : true};        
        } catch (err) {
            // console.log(false)
            return {opr : false};        

        }
    
    
}
public static async read(){
    try {
        // const url = 'mongodb+srv://Neeraj:Neeraj@cluster0.becjdui.mongodb.net/?retryWrites=true&w=majority'
        const url = 'mongodb://localhost:27017'
        
        const client = await MongoClient.connect(url);
        
        const db = client.db('cdac');
        const output = await db.collection('task').find().toArray();
        
        client.close();
        
        return {output};        
    } catch (err) {
        // console.log(false)
        return {opr : false};        
    }


}
public static async update(inputObj:any){
    try {
        // const url = 'mongodb+srv://Neeraj:Neeraj@cluster0.becjdui.mongodb.net/?retryWrites=true&w=majority'
        const url = 'mongodb://localhost:27017'
        const client = await MongoClient.connect(url);
        
        const db = client.db('cdac');
        const query = {_id: new ObjectId(inputObj._id)};
        const newData = {"$set": {todo : inputObj.todo}};
        await db.collection('task').updateOne(query,newData);

        client.close();
        
        return {opr : true};         
    } catch (err) {
        // console.log(false)
        return {opr : false};        
    }


}

public static async delete(inputObj:any){
    try {
        // const url = 'mongodb+srv://Neeraj:Neeraj@cluster0.becjdui.mongodb.net/?retryWrites=true&w=majority'
        const url = 'mongodb://localhost:27017'
        const client = await MongoClient.connect(url);
        
        const db = client.db('cdac');
        const query = {_id: new ObjectId(inputObj._id)};
        // const newData = {"$set": {todo : inputObj.todo}};
        await db.collection('task').deleteOne(query);

        client.close();
        
        return {opr : true};         
    } catch (err) {
        // console.log(false)
        return {opr : false};        
    }


}

}