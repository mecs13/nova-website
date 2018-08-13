// @flow

import * as React from 'react'
import { connect }from 'react-redux'
import { compose, withState } from 'recompose'

import getStyles from './AboutStyles.jsx'

import type {
    Props,
    ReduxState,
    OwnProps,
} from './AboutTypes.jsx'

import type {
    MapStateToProps,
} from '../../storeTypes.jsx'

import Login from './Login/Login.jsx'
import BuildXR from '../BuildXR/BuildXR.jsx'

import MarkdownParser from '../MarkdownParser/MarkdownParser.jsx'
import contactPicto from '../img/contact-email.png'
import facebookPicto from '../img/facebook.png'
import twitterPicto from '../img/twitter.png'

import SidePanel, { sidePanelTypes } from '../Presentation/SidePanel/SidePanel.jsx'
import SidePanelLink from '../UI/SidePanelLink.jsx'

import { footerPage } from '../../reducer/App.js'

const mapStateToProps: MapStateToProps<ReduxState> = function(state) {
    return {
        currentFooterPage: state.appReducer.currentFooterPage,
        isSidebarOpened: state.sidebarReducer.isSidebarOpened,
    }
}

const text = {}

const legalsText = `
## Terms and Conditions of Use

!!! We maintain this site as a resource and communication portal. Terms of Service apply to anyone browsing the website. Accessing the site is acceptance without limitation or qualification of the following Terms and Conditions. If you do NOT accept the Terms and Conditions, please discontinue your use of this Site.


## Privacy Policy

We use basic Google Analytics to improve our services:

Opt-out of Google Analytics: https://tools.google.com/dlpage/gaoptout/


## Save the Internet

The internet is subject to change under proposed US policy that would compromise /Net Neutrality/.   We strongly support a free and open internet, which is at stake. Read more at SaveTheInternet.com https://www.savetheinternet.com/net-neutrality-what-you-need-know-now

/Net Neutrality/ the principle that Internet service providers should enable access to all content and applications regardless of the source and without favoring or blocking particular products or websites.

## Exhaustive Legal


This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.

## What personal information do we collect from the people that visit our blog, website or app?

When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information, interest or other details to help you with your experience.

## When do we collect information?

We collect information from you when you register on our site, respond to a survey, fill out a form, Use Live Chat, Open a Support Ticket or enter information on our site.

Provide us with feedback on our products or services

## How do we use your information?

We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:

- To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.
- To improve our website in order to better serve you.
- To allow us to better service you in responding to your customer service requests.
- To administer a contest, promotion, survey or other site feature.
- To quickly process your transactions.
- To ask for ratings and reviews of services or products
- To follow up with them after correspondence (live chat, email or phone inquiries)

## How do we protect your information?

We do not use vulnerability scanning and/or scanning to PCI standards.
We only provide articles and information. We never ask for credit card numbers.
We do not use Malware Scanning.

Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.

We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.

All transactions are processed through a gateway provider and are not stored or processed on our servers.

## Do we use 'cookies'?

Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.

## We use cookies to:
- Understand and save user's preferences for future visits.
- Keep track of advertisements.
- Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.

You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.

If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.

### Third-party disclosure

Do we disclose nothing to third parties.


Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.


Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en

We use Google AdSense Advertising on our website.

Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.

We have implemented the following:
- Remarketing with Google AdSense
- Google Display Network Impression Reporting
- Demographics and Interests Reporting
- DoubleClick Platform Integration

We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.

### California Online Privacy Protection Act

CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf

Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.

You will be notified of any Privacy Policy changes:
- On our Privacy Policy Page

Can change your personal information:
- By logging in to your account

##### How does our site handle Do Not Track signals?
We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.

Does our site allow third-party behavioral tracking?
It's also important to note that we do not allow third-party behavioral tracking

### COPPA (Children Online Privacy Protection Act)

When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.

We do not specifically market to children under the age of 13 years old.
Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?

## Fair Information Practices

The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.

In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:
We will notify you via email within 300 days.

We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.

## CAN SPAM Act

The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.

We collect your email address in order to:

- Send information, respond to inquiries, and/or other requests or questions
- Process orders and to send information and updates pertaining to orders.
- Send you additional information related to your product and/or service
- Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.

In accordance with CANSPAM, we agree to the following:

- Not use false or misleading subjects or email addresses.
- Identify the message as an advertisement in some reasonable way.
- Include the physical address of our business or site headquarters.
- Monitor third-party email marketing services for compliance, if one is used.
- Honor opt-out/unsubscribe requests quickly.
- Allow users to unsubscribe by using the link at the bottom of each email.

If at any time you would like to unsubscribe from receiving future emails, you can contact us by email at AnneIrene@novamedia.nyc

## Contacting Us

If there are any questions regarding this privacy policy, you may contact us using the information below.

- https://www.novamedia.nyc
- 481 Van Brunt - 7D
- Brooklyn, New York 11231
- USA
- AnneIrene@novamedia.nyc

**Last Edited on 2018-02-18**
`

class LegalsContent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setHeaderText('')
    }
    render() {
        return (
            <div style={{ padding: 0, margin: '-2rem' }}>
              <MarkdownParser
                useWhiteFont={ false }
                content={ legalsText } />
            </div>
        )
    }
}

const contactText = `Thank you for your interest in Nova XR Media. Please email us with any question:`
const contactStyles = {
    linkWrapper: {
        marginRight: '-2rem',
    }
}

class ContactContent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setHeaderText(contactText)
    }
    render() {
        return (
            <div>
                <div style={ contactStyles.linkWrapper }>
                    <SidePanelLink
                        onClickCallback={ () => window.location.href = "mailto:joe@novamedia.nyc" }
                        isSquarePicto={ true }
                        pictoUrl={ contactPicto }
                        invertColors={ true }
                        title="Email Us" />
                    <SidePanelLink
                        onClickCallback={ () => window.open("https://www.facebook.com/N0vamedia/", "_blank") }
                        isSquarePicto={ true }
                        pictoUrl={ facebookPicto }
                        invertColors={ true }
                        title="Facebook" />
                    <SidePanelLink
                        onClickCallback={ () => window.open("https://twitter.com/N0vaMedia", "_blank") }
                        isSquarePicto={ true }
                        pictoUrl={ twitterPicto }
                        invertColors={ true }
                        title="Twitter" />
                </div>
            </div>
        )
    }
}

// const loginContent = <Login />
// 
// const buildXRContent = <BuildXR />


text[footerPage.LEGALS] = {
    title: 'Legals',
    content: LegalsContent
}

text[footerPage.CONTACT] = {
    title: 'Contact',
    content: ContactContent
}

text[footerPage.LOGIN] = {
    title: 'Login',
    content: Login
}

text[footerPage.BUILDXR] = {
    title: 'Build XR',
    content: BuildXR,
}

const AboutUs: React.StatelessFunctionalComponent<Props> = (props) => {
    const styles = getStyles(props)

    const title = text[props.currentFooterPage].title
    const Content = text[props.currentFooterPage].content
    const comp = <Content
        setHeaderTextBgColor={ props.setHeaderTextBgColor }
        setHeaderText={ props.setHeaderText } />

    return (
        <div style={ styles.wrapper }>
            <SidePanel
                marginTop={ styles.sidePanel.marginTop }
                type={ sidePanelTypes.INVERTED }>
                <div style={ styles.wrapper2 }>
                    <div style={ styles.title }>
                        <h2 style={ styles.h2 }>{ title }</h2>
                        <div style={ styles.headerText }>{ props.headerText }</div>
                    </div>
                    <div style={ styles.content }>
                        { comp }
                    </div>
                    <div style={ styles.contentEnd }>
                    </div>
                </div>
            </SidePanel>
        </div>
    )
}

const ConnectedAboutUs: React.ComponentType<OwnProps> = connect(
    mapStateToProps,
)(AboutUs)

const StatefulConnectedAboutUs = compose(
    withState('headerText', 'setHeaderText', ''),
    withState('headerTextBgColor', 'setHeaderTextBgColor', 'rgba(0, 0, 0, 0.2)'),
)(ConnectedAboutUs)

export default StatefulConnectedAboutUs
