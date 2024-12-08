import { tipOptions } from "../data/data"

type TipPercentageProps = {

    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipPercentage({setTip, tip}: TipPercentageProps) {
  return (
    <div>
        <h3 className="font-black text-xl">
            Propina:
        </h3>

        <form action="">
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio" 
                        name="tip" 
                        value={tipOption.value}
                        onChange={event => setTip(+event.target.value)}    
                        checked={tipOption.value === tip}
                    />

                </div>
            ))}
        </form>
    </div>
  )
}
