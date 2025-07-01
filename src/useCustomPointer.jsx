import { useEffect, useState } from "react";

export default function useCustomPointer() {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                pointerEvents: "none",
                fontSize: "24px",
            }}
        >
            🔥
        </div>
    );
}