import { formatCurrency } from "../helpers"
import { OrderItem, MenuItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem["id"]) => void
}

export default function OrderContents({order, removeItem}:OrderContentsProps) {
  return (
    
    <>
        {
            order.length === 0 ?
            <p className="text-center font-medium"> La orden esta vacia</p> :
            
            order.map(item => (
                <div className="flex justify-between items-center mb-4 border-b-2 border-gray-400 p-2 gap-6" key={item.id}>
                    <div>
                        <p> 
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency((item.price * item.quantity))}
                        </p>
                    </div>

                    <button onClick={() => removeItem(item.id)} className="hover:text-red-500 font-black">
                        X
                    </button>
                    
                </div>
            ))
        }
    
    </>
  )
}
