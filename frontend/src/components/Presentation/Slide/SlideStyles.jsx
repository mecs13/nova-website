import { styles as appStyles } from '../../../constants.js'

const getStyles = props => {
    const headerHeightCoef = 3
    const footerHeightCoef = headerHeightCoef
    const lineHeightCoef = 4 // height of vertical line spanning across screen
    const lineYCoef = 9 + (2 * props.linePosition) // distance from top of screen to top of line
    const titleHeightCoef = 4
    const headHeightCoef = lineYCoef - headerHeightCoef - titleHeightCoef
    const tailHeightCoef = 24 - lineYCoef - footerHeightCoef - lineHeightCoef

    return {
        slideParagraphs: {
            height: 'calc(' + (24 - headerHeightCoef - footerHeightCoef) + ' * ' + appStyles.unitHeight + ')',
            overflowY: 'hidden',
            overflowX: 'hidden',
            // min width greater than container so it doesn't shrink on panel close
            minWidth: 'calc(' + appStyles.sidePanel.openedWidthCoef + ' * ' + appStyles.unitWidth + ')',
        },
        head: {
            height: 'calc(' + headHeightCoef + ' * ' + appStyles.unitHeight + ') ',
        },
        tail: {
            height: 'calc(' + tailHeightCoef + ' * ' + appStyles.unitHeight + ') ',
        },
        title: {
            height: 'calc(' + titleHeightCoef + ' * ' + appStyles.unitHeight + ') ',
            display: 'flex',
            padding: 0,
            margin: 0,
            // min width greater than container so it doesn't shrink on panel close
            minWidth: 'calc(' + appStyles.sidePanel.openedWidthCoef + ' * ' + appStyles.unitWidth + ')',
        },
        paragraph: {
            // height: 'calc(' + lineHeightCoef + ' * ' + appStyles.unitHeight + ') ',
            display: 'flex',
            width: '100%',
        },
        dummy: {
            display: 'none',
            color: 'rgba(0, 0, 0, 0)',
        }
    }
}

export default getStyles
