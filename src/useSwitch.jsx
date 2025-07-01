import { useState } from "react";

export default function useSwitch(initialState = false) {
    const [isOn, setIsOn] = useState(initialState);
    
    const toggle = () => {
        setIsOn((prev) => !prev);
    };
    
    return [isOn, toggle];
}