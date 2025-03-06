'use client';







import { useItems_691d50 } from '@/hooks/items/691d50'
import Items_691d50_read from '@/components/items/691d50_read'
import Items_691d50_create from '@/components/items/691d50_create'
import Items_691d50_update from '@/components/items/691d50_update'
import Items_691d50_delete from '@/components/items/691d50_delete'
import { Modal } from '@/components/ui/modal'
import { useEffect, useState } from 'react'


export default function (){
        
    const { get_items_list_list, create_items_data, update_items_data, delete_items_data, items_list} = useItems_691d50();
    const [itemsModal, itemsModalHandler] = useState(true);
    
    
    
    useEffect(() =>  {
    
        // get from server here
        get_items_list_list()
    }, [])
    
    return (<section >
    
    <button onClick={() => itemsModalHandler(true)}id='open-modal'className='btn btn-primary'>
    
    None
    </button>
    <Modal isOpen={itemsModal}onClose={() => itemsModalHandler(false)}>
    
    { items_list.map((d, i) => <Items_691d50_read data={d}key={i}/>) }
    <form action={create_items_data}>
    
    <Items_691d50_create />
    <button type='submit'>
    
    None
    </button>
    </form>
    <form action={None}>
    
    <Items_691d50_update />
    </form>
    </Modal>
    </section>)
    }