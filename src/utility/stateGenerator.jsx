import { useState } from "react";

export default function stateGenerator(initial = ""){
    const [state, setState] = useState(initial);
    const setEvent = (value)=>{
        setState(value);
    }
    return [state, setEvent];
}