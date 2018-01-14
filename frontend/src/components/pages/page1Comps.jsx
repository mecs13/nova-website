import * as React from 'react'

import { connect } from 'react-redux'

import { styles as appStyles } from '../../constants.js'

import HomePage from './Home.jsx'

import {
    P,
    BigText,
    FlexColumn,
} from './UI.jsx'


/**
   DESIGN => intro
**/
const DesignIntroComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'DesignIntroComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P>Nova XR provides world, interface and story design. Gravity has sculpted all of our physical world - from its beauty to its mystery.</P>
                <P>In XR, we build the world around us and construction is only limited by the confines of our imagination. Nova XR designs succinct and intuitive worlds.  You live your own story.</P>
            </FlexColumn>
        </div>
    )
}

/**
   DESIGN => interface
**/
const DesignInterfaceComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'DesignInterfaceComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><BigText>We simplify complex technologies into intuitive designs.</BigText></P>
                <P>Navigation and interaction within XR Media is enriching, empowering, and seemingly void of all technical interfacing, making it the smoothest and most lifelike experience.</P>
                <P>With media becoming multidimensional, interfaces are evolving. We program into the world around us everything from graphics to functionalities to high-tech learning strategies. XR is opening new doors.</P>
                <P><span>Players will expect to  zoom, scale, rotate, delete, cut <em>et cetera</em> everywhere they go in this new reality. We design interfaces that let you explore in your most natural form.</span></P>
                <P><BigText>It's about the journey.</BigText></P>
            </FlexColumn>
        </div>
    )
}

/**
   DESIGN => Story
**/
const StoryComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'StoryComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><BigText>In XR you live the story.</BigText></P>
                <P>Our writers understand XR's technical intricacies and have the skills to adapt any scenario into an Extended Reality experience.</P>
                <P>We live on the virtual frontier and know first hand the implications of tomorrow. Whatever your story, we can build it in XR.</P>
            </FlexColumn>
        </div>
    )
}

/**
   DESIGN => World
**/
const WorldComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'WorldComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P>Whether you want to showcase your art work, re-create a story, or build a fantasy land, we can advise and implement everything from interface to cryptography.</P>
                <P><BigText>Build your dream in XR.</BigText></P>
                <P>Pioneer infinity - endless landscapes, innumerable dimensions, warps of time and space.</P>
                <P><BigText>We venture further and bring our findings to you.</BigText></P>
            </FlexColumn>
        </div>
    )
}


/**
   TECHNOLOGY => intro
**/
const TechIntroComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'TechIntroComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P>We use technology as an artist uses paint. XR media promises to enhance our lives through shared experiences developed by real people.</P>
                <P>As the internet democratized information, XR will democratize experience. We are embarking on a new frontier of connectivity.</P>
                <P>Nova XR sources new applications of scientific knowledge from around the world - compiling it for your use.</P>
            </FlexColumn>
        </div>
    )
}

/**
   TECHNOLOGY => vr
**/
const VRComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'VRComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P>Virtual Reality (VR) is an emerging technology empowering people to dream together. VR allows you to go places you otherwise could not. VR allows us architect new digital worlds while transcending time and space.</P>
                <P>By putting on goggles and artificially stimulating our senses, our mind accepts another version of reality, an entirely man made world. Like any new form of exploration, you begin with the basics.</P>
                <P>Nova XR helps you stay on the cutting edge of technology by applying the latest computer sciences to your current strategies.</P>
            </FlexColumn>
        </div>
    )
}

/**
   TECHNOLOGY => ar
**/
const ARComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'ARComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P>Augmented Reality (AR) is a powerful tool to simplify complex ideas and democratize education.</P>
                <P>AR superimposes digital graphics atop our physical environment. It is ideal for collaborative work or training, because it enables easy visual sharing.</P>
                <P>Through computer vision we can model the world around you and turn everyday scenarios into interactive experiences.</P>
                <P>AR forces you to reconsider how media and content serve the user. Your work, your creations, and your activities can all be digitized into your surroundings.</P>
                <P>Nova XR will assist you in adapting the world to your workflow.</P>
            </FlexColumn>
        </div>
    )
}

/**
   TECHNOLOGY => exponential technologies
**/
const ExpComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'ExpComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><span>Digital innovations that develop at an exponential rate, such as artificial intelligence, biometric softwares, robotics, drones, blockchain, cryptography, <em>et cetera</em>.</span></P>
                <P><BigText>These techs integrated into VR and AR will revolutionize the world as we know it.</BigText></P>
                <P>We help you prepare specifications, develop strategies and drive the change you want to see in the world.</P>
            </FlexColumn>
        </div>
    )
}

/**
   BUSINESS => intro
**/
const BusinessComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'BusinessComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><BigText>We provide access to advanced technologies and advise on related markets.</BigText></P>
                <P>Our work includes creating technical specifications, sourcing development and managing project execution. Through primary research and academic relationships, we keep you ahead of the curve and beyond your competition.</P>
                <P><BigText>We provide access.</BigText></P>
            </FlexColumn>
        </div>
    )
}

/**
   BUSINESS => services
**/
const ServicesComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'ServicesComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><BigText>Consultation, Research,<br /> Design, Development,</BigText></P>
                <P><BigText>Production, Publication,<br /> Distribution, Analytics.</BigText></P>
            </FlexColumn>
        </div>
    )
}

/**
   BUSINESS => philosophy
**/
const PhiloComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'PhiloComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><BigText><em>Do unto others.</em></BigText></P>
                <P>As pioneers our duty is to explore new media, publish our findings, and map the way.</P>
                <P>The fringe of technology is full of ethical complexities and it is our responsibility to set a high moral standard for the industry.</P>
                <P>We lead by example, challenge traditional structures and fight for underdogs.</P>
                <P><BigText>We <em>Dream Awake</em>.</BigText></P>
            </FlexColumn>
        </div>
    )
}

/**
   BUSINESS => disciplines
**/
const DisciplinesComp = props => {
    const styles = {
        wrapper:{
        }
    }

    return (
        <div
            className={ 'DisciplinesComp--wrapper' }
            style={ styles.wrapper }>
            <FlexColumn>
                <P><BigText>We design new media.</BigText></P>
                <P>Whether your are architecting a virtual world or executing a marketing campaign, we help you implement the latest technological breakthroughs, artfully.</P>
                <P>We pride ourselves on a swift ability to design and execute. We will help you pilot the use of engines, software, and design to “Extend Reality” (XR).</P>
                <P><BigText>We will help you see further, move faster, and achieve more.</BigText></P>
            </FlexColumn>
        </div>
    )
}

export {
    HomePage,

    DesignIntroComp,
    DesignInterfaceComp,
    StoryComp,
    WorldComp,

    TechIntroComp,
    VRComp,
    ARComp,
    ExpComp,

    BusinessComp,
    ServicesComp,
    PhiloComp,
    DisciplinesComp,
}
