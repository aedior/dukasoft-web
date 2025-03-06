import { personel_e02ed2Type } from '@/hooks/personel/e02ed2'



interface PersonelProps{data: personel_e02ed2Type;
}

export default function Personel_e02ed2_read({data}: PersonelProps){
        
    const {name, description} = data
    return (<div >
    
    <p >
    
    { name }
    </p>
    <p >
    
    { description }
    </p>
    </div>)
    }