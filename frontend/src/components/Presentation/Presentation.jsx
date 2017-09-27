import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom';

import {
    updateFrontBgUrl,
    updateFrontBgStyle,
    updateBackBgUrl,
    updateBackBgStyle,
    updateTransitionProgress
} from '../../reducer/actions/Bg.js'

const mapStateToProps = state => ({
    routing: state.routing,
})

const mapDispatchToProps = dispatch => ({
    updateFrontBgUrl: url => dispatch(updateFrontBgUrl(url)),
    updateBackBgUrl: url => dispatch(updateBackBgUrl(url)),
    updateFrontBgStyle: style => dispatch(updateFrontBgStyle(style)),
    updateBackBgStyle: style => dispatch(updateBackBgStyle(style)),
    updateTransitionProgress: p => dispatch(updateTransitionProgress(p)),
    goTo: url => dispatch(push(url)),
})

const PresentationDumb = props => {
    let currentPage = props.currentPage < 0 ? 0 : props.currentPage
    currentPage = currentPage > props.pages.length - 1 ? props.pages.length - 1 : currentPage

    const Comp = props.pages[currentPage].comp
    return (
        <Comp />
    )
}


class Presentation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 0,
        }

        this.onScroll = this.onScroll.bind(this)
        this.updateBackgroundUrls = this.updateBackgroundUrls.bind(this)
        this.splitBackgroundSlideTransition = this.splitBackgroundSlideTransition.bind(this)
        this.goToNextPage = this.goToNextPage.bind(this)
        this.goToPreviousPage = this.goToPreviousPage.bind(this)
        this.attachScrollEvent = this.attachScrollEvent.bind(this)
        this.detachScrollEvent = this.detachScrollEvent.bind(this)
    }

    componentDidMount() {
        // Attach scroll to page change
        this.attachScrollEvent()

        // Deal with urls
    }

    componentWillUnmount() {
        this.detachScrollEvent()
    }

    componentWillUpdate() {
    }

    componentWillReceiveProps(newProps) {
    }

    goToNextPage() {
        // Get next page
        const { currentPage } = this.state
        let nextPage = currentPage + 1

        // Boundary conditions
        const totalPages = this.props.pages.length
        nextPage = nextPage >= totalPages ? totalPages - 1 : nextPage

        // User callback
        this.props.goToNextPage()

        // Background transitions
        this.splitBackgroundSlideTransition(1)

        // Update state
        this.setState({ currentPage: nextPage })
    }

    goToPreviousPage() {
        // Get previous page
        const { currentPage } = this.state
        let previousPage = currentPage - 1

        // Boundary conditions
        previousPage = previousPage < 0 ? 0 : previousPage

        // User callback
        this.props.goToPreviousPage()

        // Background transitions
        this.splitBackgroundSlideTransition(-1)

        // Update state
        this.setState({ currentPage: previousPage })
    }

    attachScrollEvent() {
        window.addEventListener("wheel", this.onScroll)
    }

    detachScrollEvent() {
        window.removeEventListener("wheel", this.onScroll)
    }

    onScroll(e) {
        const sign = e.deltaY

        if(sign > 0)
            this.goToNextPage()
        else
            this.goToPreviousPage()
    }

    updateBackgroundUrls(sign) {
        const { currentPage } = this.state



        const previousPage = currentPage - 1 < 0 ? 0 : currentPage - 1
        const totalPages = this.props.pages.length
        const nextPage = currentPage + 1 > totalPages - 1 ? totalPages - 1 : currentPage + 1


        const frontBgUrl = sign < 0 ? this.props.pages[currentPage].bgUrl : this.props.pages[nextPage].bgUrl
        const backBgUrl = sign < 0 ? this.props.pages[previousPage].bgUrl : this.props.pages[currentPage].bgUrl

        console.log(currentPage, previousPage, nextPage, totalPages, frontBgUrl, backBgUrl, this.props.pages.map(e => e.bgUrl))

        this.props.updateFrontBgUrl(frontBgUrl)
        this.props.updateBackBgUrl(backBgUrl)
    }

    splitBackgroundSlideTransition(sign) {
        console.log(sign, 'sign')
        // Upgrade backgrounds
        this.updateBackgroundUrls(sign)

        // Detach scroll event
        this.detachScrollEvent()

        // Get target page
        const { currentPage } = this.state
        const totalPages = this.props.pages.length

        // boundary condition
        const targetPage = sign > 0 ?
                           (currentPage + 1 > totalPages - 1 ? totalPages - 1 : currentPage + 1)
                         :
                           currentPage

        let transitionProgress = 0
        this.transitionTimer = window.setInterval(() => {
            const condition = sign > 0 ? currentPage > targetPage : currentPage < targetPage

            if(
                transitionProgress > 100
            ) {
                ////// Stop animation

                // Attach scroll event to page change
                this.attachScrollEvent()

                // Clear interval
                window.clearInterval(this.transitionTimer)
                this.transitionTimer = undefined

                if(this.state.currentPage < 0)
                    this.setState({ currentPage: 0 })
                else if(this.state.pages > totalPages - 1)
                    this.setState({ currentPage: totalPages - 1 })

                // update URL

            } else {
                ////// Continue scrolling

                // Call background controls
                if (sign > 0) {
                    this.props.updateFrontBgStyle({ opacity: transitionProgress / 100 * 2 })
                    this.props.updateTransitionProgress(transitionProgress / 100 < 0.5 ? 0 :  (transitionProgress / 100 - 0.5) * 2)
                } else {
                    this.props.updateFrontBgStyle({ opacity: transitionProgress < 50 ? 1 : 1 - (transitionProgress / 100 - 0.5) * 2 })
                    this.props.updateTransitionProgress(1 - transitionProgress / 100 < 0.5 ? 0 :  (1 - transitionProgress / 100 - 0.5) * 2)
                }

                // Increment transition progress
                transitionProgress = transitionProgress + 1
            }

        }, 5)
    }



    render() {

        return (
            <PresentationDumb
                { ...this.props }
                currentPage={ this.state.currentPage }
            />
        )
    }
}

Presentation.defaultProps = {
    goToNextPage: () => {},
    goToPreviousPage: () => {},
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Presentation)
