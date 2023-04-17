import { useState } from "react"
import ColorTheme from "../ColorTheme"

type Props = {
    href: string
    text: string
    colorSelected?: string
    defaultColor?: string
    cursor?: string
    textDecoration?: string
    target?: string
}

export default ({
    href,
    text,
    colorSelected = ColorTheme.primary,
    defaultColor = ColorTheme.text,
    cursor = 'pointer',
    textDecoration = 'none',
    target = '_blank'
}: Props) => {
    const [textColor, setTextColor] = useState(defaultColor)

    return (
        <a
            href={href}
            onMouseEnter={() => setTextColor(colorSelected)}
            onMouseLeave={() => setTextColor(defaultColor)}
            style={{
                cursor: cursor,
                textDecoration: textDecoration,
                color: textColor,
            }}
            target={target}
        >
            {text}
        </a>
    )
}