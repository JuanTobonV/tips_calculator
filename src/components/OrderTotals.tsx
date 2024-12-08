import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order:OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}:OrderTotalsProps) {

  //useMemo me permite que solo se renderice cuando cambie la dependencia

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip])

  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

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
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p >
                Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button className="w-full bg-black p-3 uppercase font-bold mt-10 text-white rounded-lg" disabled = {totalAmount === 0} onClick={placeOrder}
        >
            Guardar Orden    
        </button>    
    </>
  )
}
