import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/data"
import useOrder from "./hooks/useOrder";

function App() {

  const {order, addItem, removeItem} = useOrder()
  
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

                <OrderContents
                  order = {order}
                  removeItem = {removeItem}
                />

            </div>
        </main>
      </div>
    </>
  )
}

export default App
