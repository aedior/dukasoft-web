'use client';



import { Modal } from '@/components/ui/modal'
import { useState } from 'react'


export default function (){
        
    const [loginModal, loginModalHandler] = useState(true);
    
    
    
    
    return (<section >
    
    <button onClick={() => loginModalHandler(true)}id='open-modal'className='btn btn-primary'>
    
    None
    </button>
    <Modal isOpen={loginModal}onClose={() => loginModalHandler(false)}>
    
    <div></div>
    </Modal>
    </section>)
    }