interface VisitProps{}

export default function Visit_ae978b_create({}: VisitProps){
        
    return (<div >
    
    <label className='input input-bordered gap-2 p-2 flex items-center'>
    
    client
    <input id='client'name='client'type='text'className='grow'/>
    </label>
    <label className='input input-bordered gap-2 p-2 flex items-center'>
    
    service
    <input id='service'name='service'type='text'className='grow'/>
    </label>
    <label className='input input-bordered gap-2 p-2 flex items-center'>
    
    datetime
    <input id='datetime'name='datetime'type='datetime-local'className='grow'/>
    </label>
    </div>)
    }