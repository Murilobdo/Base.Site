import type React from "react"

const SpinningGearIcon: React.FC<{
    size?: number
    color?: string
    speed?: "slow" | "very-slow"
}> = ({ size = 24, color = "currentColor", speed = "very-slow" }) => {
    const animationClass = speed === "slow" ? "animate-spin-slow" : "animate-spin-very-slow"

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animationClass}
        >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.2 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1c-.5-.5-1.2-.6-1.8-.3-.6.3-1 .9-1 1.5V21a2 2 0 0 1-4 0v-.1c0-.6-.4-1.2-1-1.5-.6-.3-1.3-.2-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1c.5-.5.6-1.2.3-1.8-.3-.6-.9-1-1.5-1H3a2 2 0 0 1 0-4h.1c.6 0 1.2-.4 1.5-1 .3-.6.2-1.3-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1c.5.5 1.2.6 1.8.3.6-.3 1-.9 1-1.5V3a2 2 0 0 1 4 0v.1c0 .6.4 1.2 1 1.5.6.3 1.3.2 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1c-.5.5-.6 1.2-.3 1.8.3.6.9 1 1.5 1H21a2 2 0 0 1 0 4h-.1c-.6 0-1.2.4-1.5 1-.3.6-.2 1.3.3 1.8l.1.1z" />
        </svg>
    )
}

export default SpinningGearIcon