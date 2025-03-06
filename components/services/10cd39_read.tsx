import { services_10cd39Type } from '@/hooks/services/10cd39'



interface ServicesProps{data: services_10cd39Type;
}

export default function Services_10cd39_read({data}: ServicesProps){
        
    const {name, price, description, personel, items, personel_fixed_fee, personel_precent_fee} = data
    return (<div >
    
    <p >
    
    { name }
    </p>
    <p >
    
    { price }
    </p>
    <p >
    
    { description }
    </p>
    <p >
    
    { personel }
    </p>
    <p >
    
    { items }
    </p>
    <p >
    
    { personel_fixed_fee }
    </p>
    <p >
    
    { personel_precent_fee }
    </p>
    </div>)
    }