import Link from 'next/link'



export default function LayoutMenu(){
        
    return <ul className='menu'>
    
    <li className='menu-title'>menu</li>
    <li><Link href='/panel/dashboard'>dashboard</Link></li>
    <li><Link href='/panel/visit'>visit</Link></li>
    <li><Link href='/panel/presonels'>presonels</Link></li>
    <li><Link href='/panel/items'>items</Link></li>
    <li><Link href='/panel/services'>services</Link></li>
    </ul>
    }