import { ReactSetState } from "../utils/type";

type Input = {
    type: "text" | "color" | "checkbox"
    input: string;
    setInput:ReactSetState<string>
}
const Input = ({setInput, input, type} : Input) => {
  return (
    <input value={input} type = {type} className='w-full p-2 rounded-sm mb-2 border border-black' onChange={event => setInput(event.target.value)} />
  )
}

export default Input
