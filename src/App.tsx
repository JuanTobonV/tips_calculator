import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentage from "./components/TipPercentage";
import { menuItems } from "./data/data"
import useOrder from "./hooks/useOrder";

function App() {

  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder()
  
  return (
    <>
      <div className="bg-gray-100 h-screen flex">

        <main className="max-w-7xl mx-auto my-auto max-h-fit grid md:grid-cols-2 bg-cyan-100 rounded-xl shadow-[0px_4px_6px_4px_rgba(0,_0,_0,_0.1)]">
            <div className="bg-white p-8 rounded-l-xl">
              <h2 className="pb-4 font-bold text-3xl">Menú</h2>
              
              <div className="flex flex-col gap-2">
                {menuItems.map(item => (
                  <MenuItem
                  key={item.id}
                  item = {item}
                  addItem={addItem}
                  />
                ))}
              </div>
            </div>
  
            <div className="max-h-full rounded-r-xl md:rounded-bl-none-none p-8 shadow-[-3px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
              <h2 className="pb-4 font-bold text-3xl">Consumo</h2>

              {order.length >0 ? (
                <>
                  <OrderContents
                    order = {order}
                    removeItem = {removeItem}
                  />

                  <TipPercentage
                      setTip = {setTip}
                      tip = {tip}

                  />

                  <OrderTotals
                    order = {order}
                    tip = {tip}
                    placeOrder = {placeOrder}

                  />
                  </>
              ): (
                <p className="text-center text-gray-400 font-medium pb-3"> La orden esta vacia</p>
              )}



            </div>
        </main>
      </div>
    </>
  )
}

export default App
