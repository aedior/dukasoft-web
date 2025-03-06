import { items_691d50Type } from '@/hooks/items/691d50'



interface ItemsProps{data: items_691d50Type;
}

export default function Items_691d50_read({data}: ItemsProps){
        
    const {name, price, count} = data
    return (<div >
    
    <p >
    
    { name }
    </p>
    <p >
    
    { price }
    </p>
    <p >
    
    { count }
    </p>
    </div>)
    }