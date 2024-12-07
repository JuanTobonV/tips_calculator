import { tipOptions } from "../data/data"

export default function TipPercentage() {
  return (
    <div>
        <h3 className="font-black text-xl">
            Propina:
        </h3>

        <form action="">
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex gap-2">
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input id={tip.id} type="radio" name="tip" value={tip.value} />
                </div>
            ))}
        </form>
    </div>
  )
}
