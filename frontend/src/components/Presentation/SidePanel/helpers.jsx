// @flow

import { styles as appStyles } from '../../../constants.js'

const coord2Circ = (x: number): {y1: number, y2: number} => {
    const vh = document.documentElement.clientHeight / 100
    const vw = document.documentElement.clientWidth / 100
    const { radius, centerX, centerY } = appStyles.header

    // unit conversions
    const r = radius * vh
    const Cx = centerX * vw
    const Cy = centerY * vh

    // solve for x = sidebar width

    // solve for the determinant
    const delta1 = Math.pow(2 * Cy, 2) - 4 * (x*x - 2*x*Cx + Cx*Cx + Cy*Cy - r*r)
    const delta2 = Math.pow(2 * Cy, 2) + 4 * (x*x - 2*x*Cx + Cx*Cx + Cy*Cy - r*r)
    const y1 = ((2*Cy) + Math.sqrt(delta1)) / 2
    const y2 = ((2*Cy) + Math.sqrt(delta2)) / 2

    return { y1, y2 }
}

const togglePanel = (initWidth: number, targetWidth: number, progress: number, setWidth: number => void, initTimestamp: number) => {
    const dist = targetWidth - initWidth
    const currentPos = initWidth + dist * progress

    const transitionTime = appStyles.sidePanel.transitionTime
    const newProgress = (new Date().getTime() - initTimestamp) / transitionTime

    if(progress <= 1) {
        requestAnimationFrame(() => togglePanel(initWidth, targetWidth, newProgress, setWidth, initTimestamp))
    }

    setWidth(currentPos)

}

export {
    coord2Circ,
    togglePanel,
}