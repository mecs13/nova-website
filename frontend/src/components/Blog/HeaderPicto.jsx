// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { styles as appStyles } from '../../constants.js'
import {
    compose,
    lifecycle,
    withHandlers,
} from 'recompose'

import getStyles from './HeaderPictoStyles.jsx'

import type {
    ReduxState,
} from './HeaderPictoTypes.jsx'

import type {
    OwnProps,
    Props,
} from './HeaderPictoTypes.jsx'

import type {
    MapStateToProps,
} from '../../storeTypes.jsx'


const mapStateToProps: MapStateToProps<ReduxState> = state => ({
    windowWidth: state.appReducer.windowWidth,
    windowHeight: state.appReducer.windowHeight,
})

const canvasId = 'picto-canvas'

const HeaderPictoDumb: React.StatelessFunctionalComponent<Props> = props => {
    const styles = getStyles(props)

    return (
        <div
            className="HeaderPicto--wrapper"
            style={ styles.wrapper }>
            <canvas
                ref={ props.onRef }
                id={ canvasId }>
            </canvas>
            <div id="invertbtn">click</div>
        </div>
    )
}

function loadImg(props: Props) {
    var img = new Image()
    img.src = props.url + '?' + Math.floor(Math.random() * 100)
    img.crossOrigin = "anonymous"
    img.onload = function() {
        draw(this)
    }

    function draw(img: Image) {
        var canvas = props.getRef()
        if(canvas) {
            canvas.height = 6.73 * appStyles.unitHeightJs
            canvas.width = canvas.height
            canvas.style.transform = `translateY(calc(-0.73 * ${appStyles.unitHeight}))`
            const ctx = canvas.getContext('2d')

            const scaleFactor = canvas.width / img.width
            ctx.scale(scaleFactor, scaleFactor)
            ctx.drawImage(img, 0, 0)
            img.style.display = 'none'

            const  imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const  data = imageData.data

            const crop = function() {
                const sizeWidth = canvas.width

                for (var i = 0; i < data.length; i += 4) {
                    // convert i to (x, y)
                    const p = {
                        x: (i / 4) % (sizeWidth),
                        y: (i / 4) / sizeWidth,
                    }

                    // for some p(x, y) and some f(x, y):
                    //     set alpha to 0 for all (p.x, p.y) < f(x,y)

                    const { pow, sqrt } = Math
                    const vh = document.documentElement.clientHeight / 100
                    const vw = document.documentElement.clientWidth / 100
                    const { unitWidthJs, unitHeightJs } = appStyles
                    const R = appStyles.header.radius * vh
                    const Cy = appStyles.header.centerY * vh - 2.2 * unitHeightJs
                    const Cx = appStyles.header.centerX * vw - 4 * unitWidthJs
                    const f = (x, y) =>  sqrt(pow(x - Cx, 2) + pow(y - Cy, 2)) - R
                    if(f(p.x, p.y) < -1000000) {
                        data[i + 3] = 0 // alpha
                    } else if(f(p.x, p.y) < 0) {
                        data[i + 1] = 0.5 // alpha
                    }
                }
                ctx.putImageData(imageData, 0, 0)
            }

            crop()
        }
    }
}

const HeaderPictoSmart = compose(
    withHandlers(() => {
        let myCanvas: ?HTMLCanvasElement = null

        return {
            onRef: () => ref => (myCanvas = ref),
            getRef: () => () => myCanvas,
        }
    }),
    lifecycle({
        componentDidMount() {
            loadImg(this.props)
        },
        componentWillReceiveProps(nextProps) {
            loadImg(nextProps)
        }
    }),
)(HeaderPictoDumb)


const ConnectedHeaderPicto: React.ComponentType<OwnProps> = connect(
    mapStateToProps,
)(HeaderPictoSmart)


export default ConnectedHeaderPicto
export {
    HeaderPictoDumb,
    HeaderPictoSmart,
}
