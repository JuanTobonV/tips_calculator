import { menuItems } from "./data/data"

function App() {

  console.log(menuItems);
  return (
    <>
      <body className="bg-gray-100 h-screen">

        <header className="py-5">
          <h1 className="text-center text-3xl font-semibold">Calculadora de propinas y consumos</h1>
        </header>
  
        <main className="max-w-7xl mx-auto max-h-fit grid grid-cols-2 bg-cyan-100 rounded-xl">
            <div className="p-8">
              <h2 className="text-center font-semibold text-xl">Menu</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolores quas delectus iste impedit fugit repudiandae, minus provident, cupiditate ut assumenda libero quia. Possimus nulla repudiandae, sed odit impedit tenetur perspiciatis dicta sequi rem cumque expedita consequuntur nemo error maxime nesciunt libero sit ex reiciendis modi magnam minima. Similique adipisci unde dolore. Nesciunt porro suscipit harum omnis? Accusamus exercitationem praesentium voluptates dicta aspernatur. Labore iure voluptate nostrum sint corrupti error molestiae accusantium recusandae? Fugiat, dolor quae enim recusandae officiis animi consequatur consectetur quos voluptatum deserunt, et qui hic excepturi atque id? Sit incidunt eius blanditiis aut quis fuga nemo! Ipsam!</p>
  
            </div>
  
            <div className="bg-white max-h-full rounded-r-xl p-8">
              <h2 className="text-center font-semibold text-xl">Bill</h2>
  
            </div>
        </main>
      </body>
    </>
  )
}

export default App
