import React from 'react'

type LinePosition = "topRight" | "middleLeft" | "topRightHalf" | "middleRight" | "bottomLeft" | "middleTopRight" | "middleTopLeft" | "bottomRight";

type RedLinesProps = {
    lines: LinePosition[]
    className?: string
}

const lineStyles: Record<string, { className: string; style?: React.CSSProperties }> = {
    topRight: {
        className: 'top-0 right-0 w-1/4 border-r border-red',
        style: { height: '7%' },
    },
    middleLeft: {
        className: 'bottom-1/2 left-0 w-1/2 md:w-1/4 border-l border-red',
        style: { height: '4%' },
    },
    topRightHalf: {
        className: 'top-0 right-1/2 w-1/2 md:w-1/4 border-r border-red',
        style: { height: '15%' },
    },
    middleRight: {
        className: 'bottom-1/2 right-0 w-1/2 md:w-1/4 border-l border-red',
        style: { height: '12%' },
    },
    bottomLeft: {
        className: 'bottom-[22%] left-0 w-1/2 md:w-1/4 border-l border-red',
        style: { height: '30%' },
    },
    bottomRight: {
        className: 'bottom-[2%] right-0 w-1/2 md:w-1/4 border-r border-red',
        style: { height: '13%' },
    },
    middleTopRight: {
        className: 'top-[12%] right-0 w-1/2 md:w-1/4 border-r border-red',
        style: { height: '8%' },
    },
    middleTopLeft: {
        className: 'top-[16%] left-0 w-1/2 md:w-1/4 border-r border-red',
        style: { height: '4%' },
    },
}


const RedLines: React.FC<RedLinesProps> = ({ lines, className = '' }) => {
    return (
        <>
            {lines.map((pos) => {
                const { className: lineClass, style } = lineStyles[pos] || {}
                if (!lineClass) return null
                return (
                    <div
                        key={pos}
                        className={`absolute -z-10 ${lineClass} ${className} `}
                        style={style}
                    />
                )
            })}
        </>
    )
}

export default RedLines
