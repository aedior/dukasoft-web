'use client';







import { usePersonel_e02ed2 } from '@/hooks/personel/e02ed2'
import Personel_e02ed2_read from '@/components/personel/e02ed2_read'
import Personel_e02ed2_create from '@/components/personel/e02ed2_create'
import Personel_e02ed2_update from '@/components/personel/e02ed2_update'
import Personel_e02ed2_delete from '@/components/personel/e02ed2_delete'
import { Modal } from '@/components/ui/modal'
import { useEffect, useState } from 'react'


export default function (){
        
    const { get_personel_list_list, create_personel_data, update_personel_data, delete_personel_data, personel_list} = usePersonel_e02ed2();
    const [personelsModal, personelsModalHandler] = useState(true);
    
    
    
    useEffect(() =>  {
    
        // get from server here
        get_personel_list_list()
    }, [])
    
    return (<section >
    
    <button onClick={() => personelsModalHandler(true)}id='open-modal'className='btn btn-primary'>
    
    None
    </button>
    <Modal isOpen={personelsModal}onClose={() => personelsModalHandler(false)}>
    
    { personel_list.map((d, i) => <Personel_e02ed2_read data={d}key={i}/>) }
    <form action={create_personel_data}>
    
    <Personel_e02ed2_create />
    <button type='submit'>
    
    None
    </button>
    </form>
    <form action={None}>
    
    <Personel_e02ed2_update />
    </form>
    </Modal>
    </section>)
    }