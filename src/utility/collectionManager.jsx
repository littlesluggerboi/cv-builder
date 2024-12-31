export default function CollectionManager(collection, callback){
    const change = (changedItem)=>{
        callback(collection.map((item) =>{
            if(item.id === changedItem.id){
                return changedItem;
            } else{
                return item;
            }
        }))
    }

    const del = (id)=>{
        callback(collection.filter((item)=> item.id !== id));
    }

    return [change, del];
}