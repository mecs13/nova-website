// @flow

import * as React from 'react'

import intro from '../img/default.jpg'

import designIntro from '../img/design/intro.png'
import worldLayer1 from '../img/design/world-layer1.png'
import worldLayer2 from '../img/design/world-layer2.png'
import storyLayer1 from '../img/design/story-layer1.png'
import storyLayer2 from '../img/design/story-layer2.png'
import storyLayer4 from '../img/design/story-layer3.png'
import storyLayer3 from '../img/design/story-layer4.png'
import interfaceLayer1 from '../img/design/interface-layer1.png'
import interfaceLayer2 from '../img/design/interface-layer2.png'
import interfaceLayer3 from '../img/design/interface-layer3.png'

import technologyIntro from '../img/Technology/intro.png'
import vrLayer1 from '../img/Technology/vr-layer1.png'
import vrLayer2 from '../img/Technology/vr-layer2.jpg'
import vrLayer3 from '../img/Technology/vr-layer3.png'
import vrLayer4 from '../img/Technology/vr-layer4.png'
import vrLayer5 from '../img/Technology/vr-layer5.png'
import vrLayer6 from '../img/Technology/vr-layer6.png'
import arLayer1 from '../img/Technology/ar-layer1.png'
import arLayer2 from '../img/Technology/ar-layer2.png'
import arLayer3 from '../img/Technology/ar-layer3.png'
import expTechLayer1 from '../img/Technology/exp-techs-layer1.jpg'
import expTechLayer2 from '../img/Technology/exp-techs-layer2.jpg'
import expTechLayer3 from '../img/Technology/exp-techs-layer3.jpg'
import expTechLayer4 from '../img/Technology/exp-techs-layer4.jpg'

import businessIntroLayer1 from '../img/business/business-intro-layer1.jpg'
import businessIntroLayer2 from '../img/business/business-intro-layer2.jpg'
import businessIntroLayer3 from '../img/business/business-intro-layer3.jpg'
import servicesLayer1 from '../img/business/services-layer1.png'
import servicesLayer2 from '../img/business/services-layer2.png'
import philoLayer1 from '../img/business/philo-layer1.png'
import disciplinesLayer6 from '../img/business/disciplines-layer1.png'
import disciplinesLayer5 from '../img/business/disciplines-layer2.png'
import disciplinesLayer4 from '../img/business/disciplines-layer3.png'
import disciplinesLayer3 from '../img/business/disciplines-layer4.png'
import disciplinesLayer2 from '../img/business/disciplines-layer5.png'
import disciplinesLayer1 from '../img/business/disciplines-layer6.png'

import { styles as appStyles } from '../../constants.js'

import { BigText, alignments } from './UI.jsx'

import type { ISlide, IPage } from './types.jsx'


/************************************

    SITE INTRO

************************************/


const introPid = Symbol()
const SiteIntro: Array<ISlide> = [
    {
        h1: 'Dream Awake',
        h2: '',
        content: () => <BigText>We design XR solutions for businesses.</BigText>,
        path: '/',
        pid: introPid,
        linePosition: 0,
        layers: [
            {
                imgUrl: intro,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
]


/************************************

    DESIGN

************************************/


const designPid = Symbol()
const designH1 = 'Design'
const designH2 = 'Introduction'
const Design: Array<ISlide> = [
    {
        h1: designH1,
        h2: designH2,
        content: () => 'Nova XR provides world, interface and story design. Gravity has sculpted all of our physical world - from its beauty to its mystery.',
        path: '/design',
        pid: designPid,
        layers: [
            {
                imgUrl: designIntro,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: designH1,
        h2: designH2,
        content: () => 'In XR, we build the world around us and construction is only limited by the confines of our imagination. Nova XR designs succinct and intuitive worlds.  You live your own story.',
        path: '/design',
        pid: designPid,
        layers: [
            {
                imgUrl: designIntro,
                paralax: -30,
                opacity: 1,
            },
        ]
    },
]


const interfacePid = Symbol()
const Interface: Array<ISlide> = [
    {
        h1: 'Design',
        h2: 'Interface',
        content: () => <BigText>We simplify complex technologies into intuitive designs.</BigText>,
        path: '/interface',
        pid: interfacePid,
        align: alignments.right,
        layers: [
            {
                imgUrl: interfaceLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: interfaceLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: interfaceLayer3,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'Interface',
        content: () => 'Navigation and interaction within XR Media is enriching, empowering, and seemingly void of all technical interfacing, making it the smoothest and most lifelike experience.',
        path: '/interface',
        pid: interfacePid,
        align: alignments.right,
        layers: [
            {
                imgUrl: interfaceLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: interfaceLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: interfaceLayer3,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'Interface',
        content: () => 'With media becoming multidimensional, interfaces are evolving. We program into the world around us everything from graphics to functionalities to high-tech learning strategies. XR is opening new doors.',
        path: '/interface',
        pid: interfacePid,
        align: alignments.right,
        layers: [
            {
                imgUrl: interfaceLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: interfaceLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: interfaceLayer3,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'Interface',
        content: () => <span>Players will expect to  zoom, scale, rotate, delete, cut <em>et cetera</em> everywhere they go in this new reality. We design interfaces that let you explore in your most natural form.</span>,
        path: '/interface',
        pid: interfacePid,
        align: alignments.right,
        layers: [
            {
                imgUrl: interfaceLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: interfaceLayer2,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: interfaceLayer3,
                paralax: -100,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'Interface',
        content: () => <BigText>It's about the journey.</BigText>,
        path: '/interface',
        pid: interfacePid,
        align: alignments.right,
        layers: [
            {
                imgUrl: interfaceLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: interfaceLayer2,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: interfaceLayer3,
                paralax: -100,
                opacity: 1,
            },
        ]
    },
]

const storyPid = Symbol()
const Story: Array<ISlide> = [
    {
        h1: 'Design',
        h2: 'Story',
        content: () => <BigText>In XR you live the story.</BigText>,
        path: '/story',
        pid: storyPid,
        layers: [
            {
                imgUrl: storyLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: storyLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: storyLayer3,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: storyLayer4,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'Story',
        content: () => 'Our writers understand XR\'s technical intricacies and have the skills to adapt any scenario into an Extended Reality experience.',
        path: '/story',
        pid: storyPid,
        layers: [
            {
                imgUrl: storyLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: storyLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: storyLayer3,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: storyLayer4,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'Story',
        content: () => 'We live on the virtual frontier and know first hand the implications of tomorrow. Whatever your story, we can build it in XR.',
        path: '/story',
        pid: storyPid,
        layers: [
            {
                imgUrl: storyLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: storyLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: storyLayer3,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: storyLayer4,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
]

const worldPid = Symbol()
const World: Array<ISlide> = [
    {
        h1: 'Design',
        h2: 'World',
        content: () => 'XR ushers in a new era of exploration - a dream in the making. Nova builds customized XR worlds for you.',
        path: '/world',
        pid: worldPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: worldLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: worldLayer2,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'World',
        content: () => 'Whether you want to showcase your art work, re-create a story, or build a fantasy land, we can advise and implement everything from interface to cryptography.',
        path: '/world',
        pid: worldPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: worldLayer1,
                paralax: -50,
                opacity: 1,
            },
            {
                imgUrl: worldLayer2,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'World',
        content: () => <BigText>Build your dream in XR.</BigText>,
        path: '/world',
        pid: worldPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: worldLayer1,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: worldLayer2,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'World',
        content: () => 'Pioneer infinity - endless landscapes, innumerable dimensions, warps of time and space.',
        path: '/world',
        pid: worldPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: worldLayer1,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: worldLayer2,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Design',
        h2: 'World',
        content: () => <BigText>We venture further and bring our findings to you.</BigText>,
        path: '/world',
        pid: worldPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: worldLayer1,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: worldLayer2,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
]




/************************************

    Business

************************************/



const businessPid = Symbol()
const businessH1 = 'Business'
const businessH2 = 'Introduction'

const Business: Array<ISlide> = [
    {
        h1: businessH1,
        h2: businessH2,
        content: () => <BigText>We provide access to advanced technologies and advise on related markets.</BigText>,
        path: '/business',
        pid: businessPid,
        layers: [
            {
                imgUrl: businessIntroLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: businessIntroLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: businessIntroLayer3,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: businessH1,
        h2: businessH2,
        content: () => 'Our work includes creating technical specifications, sourcing development and managing project execution. Through primary research and academic relationships, we keep you ahead of the curve and beyond your competition.',
        path: '/business',
        pid: businessPid,
        layers: [
            {
                imgUrl: businessIntroLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: businessIntroLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: businessIntroLayer3,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: businessH1,
        h2: businessH2,
        content: () => <BigText>We provide access.</BigText>,
        path: '/business',
        pid: businessPid,
        layers: [
            {
                imgUrl: businessIntroLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: businessIntroLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: businessIntroLayer3,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
]

const servicesPid = Symbol()
const Services: Array<ISlide> = [
    {
        h1: 'Business',
        h2: 'Services',
        content: () => <BigText>Consultation, Research,<br /> Design, Development,</BigText>,
        path: '/services',
        pid: servicesPid,
        layers: [
            {
                imgUrl: servicesLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: servicesLayer2,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Services',
        content: () => <BigText>Production, Publication,<br /> Distribution, Analytics.</BigText>,
        path: '/services',
        pid: servicesPid,
        layers: [
            {
                imgUrl: servicesLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: servicesLayer2,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
]

const philoPid = Symbol()
const Philosophy: Array<ISlide> = [
    {
        h1: 'Business',
        h2: 'Philosophy',
        content: () => <BigText><em>Do unto others.</em></BigText>,
        path: '/philosophy',
        pid: philoPid,
        layers: [
            {
                imgUrl: philoLayer1,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Philosophy',
        content: () => 'As pioneers our duty is to explore new media, publish our findings, and map the way.',
        path: '/philosophy',
        pid: philoPid,
        layers: [
            {
                imgUrl: philoLayer1,
                paralax: -50,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Philosophy',
        content: () => 'The fringe of technology is full of ethical complexities and it is our responsibility to set a high moral standard for the industry.',
        path: '/philosophy',
        pid: philoPid,
        layers: [
            {
                imgUrl: philoLayer1,
                paralax: -100,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Philosophy',
        content: () => 'We lead by example, challenge traditional structures and fight for underdogs.',
        path: '/philosophy',
        pid: philoPid,
        layers: [
            {
                imgUrl: philoLayer1,
                paralax: -150,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Philosophy',
        content: () => <BigText>We <em>Dream Awake</em>.</BigText>,
        path: '/philosophy',
        pid: philoPid,
        layers: [
            {
                imgUrl: philoLayer1,
                paralax: -200,
                opacity: 1,
            },
        ]
    },
]

const disciplinesPid = Symbol()
const Disciplines: Array<ISlide> = [
    {
        h1: 'Business',
        h2: 'Disciplines',
        content: () => <BigText>We design new media.</BigText>,
        path: '/disciplines',
        pid: disciplinesPid,
        layers: [
            {
                imgUrl: disciplinesLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer3,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer4,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer5,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer6,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Disciplines',
        content: () => 'Whether your are architecting a virtual world or executing a marketing campaign, we help you implement the latest technological breakthroughs, artfully.',
        path: '/disciplines',
        pid: disciplinesPid,
        layers: [
            {
                imgUrl: disciplinesLayer1,
                paralax: -50,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer2,
                paralax: -75,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer3,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer4,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer5,
                paralax: -150,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer6,
                paralax: -200,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Disciplines',
        content: () => 'We pride ourselves on a swift ability to design and execute. We will help you pilot the use of engines, software, and design to “Extend Reality” (XR).',
        path: '/disciplines',
        pid: disciplinesPid,
        layers: [
            {
                imgUrl: disciplinesLayer1,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer2,
                paralax: -150,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer3,
                paralax: -200,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer4,
                paralax: -200,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer5,
                paralax: -300,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer6,
                paralax: -400,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Business',
        h2: 'Disciplines',
        content: () => <BigText>We will help you see further, move faster, and achieve more.</BigText>,
        path: '/disciplines',
        pid: disciplinesPid,
        layers: [
            {
                imgUrl: disciplinesLayer1,
                paralax: -150,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer2,
                paralax: -225,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer3,
                paralax: -300,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer4,
                paralax: -300,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer5,
                paralax: -500,
                opacity: 1,
            },
            {
                imgUrl: disciplinesLayer6,
                paralax: -600,
                opacity: 1,
            },
        ]
    },
]



/************************************

    Technology

************************************/


const techPid = Symbol()
const techH1 = 'Technology'
const techH2 = 'Introduction'
const Technology: Array<ISlide> = [
    {
        h1: techH1,
        h2: techH2,
        content: () => 'We use technology as an artist uses paint. XR media promises to enhance our lives through shared experiences developed by real people.',
        path: '/technology',
        pid: techPid,
        layers: [
            {
                imgUrl: technologyIntro,
                paralax: 0,
                opacity: 1,
            },
        ]
    },
    {
        h1: techH1,
        h2: techH2,
        content: () => 'As the internet democratized information, XR will democratize experience. We are embarking on a new frontier of connectivity.',
        path: '/technology',
        pid: techPid,
        layers: [
            {
                imgUrl: technologyIntro,
                paralax: -100,
                opacity: 1,
            },
        ]
    },
    {
        h1: techH1,
        h2: techH2,
        content: () => 'Nova XR sources new applications of scientific knowledge from around the world - compiling it for your use.',
        path: '/technology',
        pid: techPid,
        layers: [
            {
                imgUrl: technologyIntro,
                paralax: -200,
                opacity: 1,
            },
        ]
    },
]

const vrPid = Symbol()
const VR: Array<ISlide> = [
    {
        h1: 'Technology',
        h2: 'Virtual Reality',
        content: () => 'Virtual Reality (VR) is an emerging technology empowering people to dream together. VR allows you to go places you otherwise could not. VR allows us architect new digital worlds while transcending time and space.',
        path: '/vr',
        pid: vrPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: vrLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: vrLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer3,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: vrLayer4,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer5,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer6,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Technology',
        h2: 'Virtual Reality',
        content: () => 'By putting on goggles and artificially stimulating our senses, our mind accepts another version of reality, an entirely man made world. Like any new form of exploration, you begin with the basics.',
        path: '/vr',
        pid: vrPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: vrLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: vrLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer3,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer4,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: vrLayer5,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer6,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Technology',
        h2: 'Virtual Reality',
        content: () => 'Nova XR helps you stay on the cutting edge of technology by applying the latest computer sciences to your current strategies.',
        path: '/vr',
        pid: vrPid,
        theme: appStyles.themeTypes.noFooterTheme,
        layers: [
            {
                imgUrl: vrLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: vrLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer3,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer4,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: vrLayer5,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: vrLayer6,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
]

const arPid = Symbol()
const AR: Array<ISlide> = [
    {
        h1: 'Technology',
        h2: 'Augmented Reality',
        content: () => 'Augmented Reality (AR) is a powerful tool to simplify complex ideas and democratize education.',
        path: '/ar',
        pid: arPid,
        align: alignments.right,
        layers: [
            {
                imgUrl: arLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: arLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: arLayer3,
                paralax: 0,
                opacity: 0,
            },
        ]
    },
    {
        h1: 'Technology',
        h2: 'Augmented Reality',
        content: () => 'AR superimposes digital graphics atop our physical environment. It is ideal for collaborative work or training, because it enables easy visual sharing.',
        path: '/ar',
        pid: arPid,
        align: alignments.right,
        layers: [
            {
                imgUrl: arLayer1,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: arLayer2,
                paralax: -50,
                opacity: 1,
            },
            {
                imgUrl: arLayer3,
                paralax: -50,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Technology',
        h2: 'Augmented Reality',
        content: () => 'Through computer vision we can model the world around you and turn everyday scenarios into interactive experiences.',
        path: '/ar',
        pid: arPid,
        align: alignments.right,
        layers: [
            {
                imgUrl: arLayer1,
                paralax: -200,
                opacity: 1,
            },
            {
                imgUrl: arLayer2,
                paralax: -100,
                opacity: 1,
            },
            {
                imgUrl: arLayer3,
                paralax: -100,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Technology',
        h2: 'Augmented Reality',
        content: () => 'AR forces you to reconsider how media and content serve the user. Your work, your creations, and your activities can all be digitized into your surroundings.',
        path: '/ar',
        pid: arPid,
        align: alignments.right,
        layers: [
            {
                imgUrl: arLayer1,
                paralax: -300,
                opacity: 1,
            },
            {
                imgUrl: arLayer2,
                paralax: -150,
                opacity: 1,
            },
            {
                imgUrl: arLayer3,
                paralax: -150,
                opacity: 1,
            },
        ]
    },
    {
        h1: 'Technology',
        h2: 'Augmented Reality',
        content: () => 'Nova XR will assist you in adapting the world to your workflow.',
        path: '/ar',
        pid: arPid,
        align: alignments.right,
        layers: [
            {
                imgUrl: arLayer1,
                paralax: -400,
                opacity: 1,
            },
            {
                imgUrl: arLayer2,
                paralax: -200,
                opacity: 1,
            },
            {
                imgUrl: arLayer3,
                paralax: -200,
                opacity: 1,
            },
        ]
    },
]

const expPid = Symbol()
const expH2 = 'Exponential Techs'
const expTech: Array<ISlide> = [
    {
        h1: 'Technology',
        h2: expH2,
        content: () => <span>Digital innovations that develop at an exponential rate, such as artificial intelligence, biometric softwares, robotics, drones, blockchain, cryptography, <em>et cetera</em>.</span>,
        path: '/expentional-technologies',
        pid: expPid,
        layers: [
            {
                imgUrl: expTechLayer1,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: expTechLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: expTechLayer3,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: expTechLayer4,
                paralax: 0,
                opacity: 0,
            },
        ],
    },
    {
        h1: 'Technology',
        h2: expH2,
        content: () => <BigText>These techs integrated into VR and AR will revolutionize the world as we know it.</BigText>,
        path: '/expentional-technologies',
        pid: expPid,
        layers: [
            {
                imgUrl: expTechLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: expTechLayer2,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: expTechLayer3,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: expTechLayer4,
                paralax: 0,
                opacity: 0,
            },
        ],
    },
    {
        h1: 'Technology',
        h2: expH2,
        content: () => 'We help you prepare specifications, develop strategies and drive the change you want to see in the world.',
        path: '/expentional-technologies',
        pid: expPid,
        layers: [
            {
                imgUrl: expTechLayer1,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: expTechLayer2,
                paralax: 0,
                opacity: 0,
            },
            {
                imgUrl: expTechLayer3,
                paralax: 0,
                opacity: 1,
            },
            {
                imgUrl: expTechLayer4,
                paralax: 0,
                opacity: 0,
            },
        ],
    },
]


/************************************

    Slide assembly

************************************/


const designSlides = [
        Design,
        World,
        Interface,
        Story,
]

const businessSlides = [
        Business,
        Services,
        Philosophy,
        Disciplines,
]

const technologySlides = [
    Technology,
    VR,
    AR,
    expTech,
]

const page1: IPage = [
    designSlides,
    technologySlides,
    businessSlides,
]

export default page1

export {
    SiteIntro,
}
