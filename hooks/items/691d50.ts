import { ItemsType } from '@/lib/types'
import { useState } from 'react'
import { axiosNoUser } from '@/lib/axios/noUser'




export type items_691d50Type = Pick<ItemsType, "name"|"price"|"count">

export function useItems_691d50(){
        
    const [loading, loadingHandler] = useState(false);
    const [items_list, items_listHandler] = useState<items_691d50Type[]>([]);
    const get_items_list_list = async () =>  {
    
        loadingHandler(true)
        const response = await axiosUser.get("items/691d50/")
        const serverData = response.data.items
        // set response of server on state
        items_listHandler(serverData)
        loadingHandler(false)
    };
    const create_items_data = async (formData: any) =>  {
    
        loadingHandler(true)
        // create backend form
        const data = Object.fromEntries(formData);
        const response = await axiosUser.post("items/691d50/", data)
        const serverData = response.data.items
        // set response of server on state
        loadingHandler(false)
    };
    const update_items_data = async (formData: any) =>  {
    
        loadingHandler(true)
        // create backend form
        const data = Object.fromEntries(formData);
        const response = await axiosUser.put("items/691d50/", data)
        const serverData = response.data.items
        // set response of server on state
        loadingHandler(false)
    };
    const delete_items_data = async () =>  {
    
        loadingHandler(true)
        const response = await axiosUser.delete("items/691d50/")
        const serverData = response.data.items
        // set response of server on state
        loadingHandler(false)
    };
    
    
    
    
    
    
    
    
    
    
    return { loading, items_list, get_items_list_list, create_items_data, update_items_data, delete_items_data }
    }