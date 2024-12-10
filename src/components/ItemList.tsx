import {Items, ReactSetState} from "../utils/type"
import Button from "./Button"


type ItemList = {
    items: Items[];
    setItems: ReactSetState<Items[]>
}
const ItemList = ({items, setItems}: ItemList) => {
    const handleDelete = (id:string) =>{
        setItems(prevState => prevState.filter(data => data.id !== id))
    
      }
  return (
    items.map(item => (

        <div key={item.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2'>
          <p>{item.title}</p>
          <Button onClick={()=>handleDelete(item.id)} className='bg-red-500'>Delete</Button>
        </div>
      ))
  )
}

export default ItemList
