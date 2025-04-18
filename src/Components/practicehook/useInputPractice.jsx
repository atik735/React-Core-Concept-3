import { useState } from "react"

const useInputPractice =(defaultValue) =>{
    const [practice,setPractice] = useState(defaultValue);
    const practiceOnChange = (e) =>{
        setPractice(e.target.value)
    }
    return[practice,practiceOnChange]
}
export default useInputPractice