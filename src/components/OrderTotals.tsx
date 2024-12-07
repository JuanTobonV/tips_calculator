import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order:OrderItem[]
}

export default function OrderTotals({order}:OrderTotalsProps) {

  //useMemo me permite que solo se renderice cuando cambie la dependencia

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
    <>
        <div className="space-y-3">
            <h2  className="font-black text-xl">Totales y propina:</h2>
            <p >
                Sutotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>

            <p >
                Propina: {''}
                <span className="font-bold">$0</span>
            </p>

            <p >
                Total a pagar: {''}
                <span className="font-bold">$0</span>
            </p>
        </div>

        <button></button>    
    </>
  )
}
