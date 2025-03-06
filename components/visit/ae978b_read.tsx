import { visit_ae978bType } from '@/hooks/visit/ae978b'



interface VisitProps{data: visit_ae978bType;
}

export default function Visit_ae978b_read({data}: VisitProps){
        
    const {client, service, datetime} = data
    return (<div >
    
    <p >
    
    { client }
    </p>
    <p >
    
    { service }
    </p>
    <p >
    
    { datetime }
    </p>
    </div>)
    }