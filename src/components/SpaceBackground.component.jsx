import React, {useRef, useEffect} from 'react'
import {initStarBackground} from "../pixijs/BackgroundAnimation"
import "../styles/components/SpaceBackground.styles.scss"

const SpaceBackground = () => {
    const canvasRef = useRef();

    useEffect(() => {
        initStarBackground(canvasRef.current)
    }, [])

    return (
        <div className="space-background">
            <canvas className="space-background__canvas" ref={canvasRef}/>
        </div>
    )
}

export default SpaceBackground;