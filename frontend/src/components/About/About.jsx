// @flow

import * as React from 'react'
import { connect }from 'react-redux'

import getStyles from './AboutStyles.jsx'

import type {
    Props,
    ReduxState,
    OwnProps,
} from './AboutTypes.jsx'

import SidePanel, { sidePanelTypes } from '../Presentation/SidePanel/SidePanel.jsx'

import { footerPage } from '../../reducer/App.js'

const mapStateToProps: MapStateToProps<ReduxState> = function(state) {
    return {
        currentFooterPage: state.appReducer.currentFooterPage,
    }
}

const text = {}

const legalsContent = (
    <div>
        <h2>Terms and conditions of use</h2>
        <p>
            We maintain this site as a resource and communication portal. Terms of Service apply to anyone browsing the website. Accessing the site is acceptance without limitation or qualification of the following Terms and Conditions. If you do NOT accept the Terms and Conditions, please discontinue your use of this site.
        </p>
        <h2>Privacy Policy</h2>
        <p>
            We use basic Google Analytics to improve our services. Opt-out of Google Analytics: https://tools.google.com/dl-page/gaoptout/
        </p>
    </div>
)

const contactContent = (
    <div>
        <p>
            Thank you for your interest in Nova XR Media. Please email us with any question:
        </p>
        <strong><a href="mailto: joe@novamedia.nyc">joe@novamedia.nyc</a></strong>
    </div>
)

const loginContent = (
    <div>
        <h2>Coming Soon</h2>
    </div>
)


text[footerPage.LEGALS] = {
    title: 'legals',
    content: legalsContent
}

text[footerPage.CONTACT] = {
    title: 'contact',
    content: contactContent
}

text[footerPage.LOGIN] = {
    title: 'login',
    content: loginContent
}

const AboutUs: React.StatelessFunctionalComponent<Props> = (props) => {
    const styles = getStyles(props)

    const title = text[props.currentFooterPage].title
    const content = text[props.currentFooterPage].content

    return (
        <div style={ styles.wrapper }>
            <h2>{ title }</h2>
            <SidePanel type={ sidePanelTypes.INVERTED }>
                { content }
            </SidePanel>
        </div>
    )
}

const ConnectedAboutUs: React.ComponentType<OwnProps> = connect(
    mapStateToProps,
)(AboutUs)

export default ConnectedAboutUs
