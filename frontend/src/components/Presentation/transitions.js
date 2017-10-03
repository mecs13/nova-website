import {
    updateFrontBgUrl,
    updateFrontBgStyle,
    updateBackBgUrl,
    updateBackBgStyle,
    updateTransitionProgress,
    updateFrontBgParalax,
    updateBackBgParalax,
    updateFrontLayers,
    updateBackLayers,
    updateCacheLayers,
} from '../../reducer/actions/Bg.js'

import store from '../../store.js'
const dispatch = store.dispatch

const transitions = { splitBackground: {}, bgParalax: {} }

/*
    Updates the backgrounds between slides prior to the slide transition
    - param sign {number} positive for next slide and negative for previous slide
    - pages {object[]} array of pages
    - currentPage {number} index
**/
transitions.splitBackground.updateBackgroundLayers = (sign, pages, currentPage) => {
    const totalPages = pages.length

    const previousPage = currentPage - 1 < 0 ? 0 : currentPage - 1
    const nextPage = currentPage + 1 > totalPages - 1 ? totalPages - 1 : currentPage + 1

    let frontLayers = sign < 0 ? pages[currentPage].layers : pages[nextPage].layers
    let backLayers = sign < 0 ? pages[previousPage].layers  : pages[currentPage].layers

    const frontLayers2 = sign > 0 ? transitions.splitBackground.resetBackgroundStyles(frontLayers, 0) : transitions.splitBackground.resetBackgroundStyles(frontLayers, 1)
    const backLayers2 = sign > 0 ? transitions.splitBackground.resetBackgroundStyles(backLayers, 0) : transitions.splitBackground.resetBackgroundStyles(backLayers, 1)

    const isBackLayerVisible = store.getState().bgReducer.transitionProgress < 0.9 ? true : false
    console.log(isBackLayerVisible)


    const currentSlideLayers = pages[currentPage].layers
    const nextSlideLayers = pages[nextPage].layers
    const previousSlideLayers = pages[previousPage].layers


    const { resetBackgroundStyles } = transitions.splitBackground
    if(sign > 0) {
        if(isBackLayerVisible) {
            dispatch(updateCacheLayers(backLayers2))
            dispatch(updateBackLayers(backLayers))
        } else {
            console.log(frontLayers)
            dispatch(updateCacheLayers(resetBackgroundStyles(frontLayers, 1)))
            dispatch(updateFrontLayers(frontLayers2))
            dispatch(updateBackLayers(backLayers))
        }
    } else {
        if(!isBackLayerVisible) {
            // user currently sees front layer which we need to cache and pass to the back layer to split
            dispatch(updateCacheLayers(resetBackgroundStyles(currentSlideLayers, 1)))
            dispatch(updateBackLayers(previousSlideLayers))
            dispatch(updateFrontLayers(resetBackgroundStyles(currentSlideLayers, 1)))
        } else {
            // user currently sees back layer which we need to move to the front layer and close back layer with previous slide over it
            dispatch(updateCacheLayers(updateFrontLayersOpacity(currentSlideLayers, 1)))
            dispatch(updateFrontLayers(updateFrontLayersOpacity(currentSlideLayers, 1)))
            dispatch(updateBackLayers(updateBackLayersOpacity(previousSlideLayers, 0)))
        }
    }

    window.setTimeout( () => {
        // dispatch(updateBackLayers(backLayers))
        // dispatch(updateFrontLayers(frontLayers2))
        dispatch(updateCacheLayers([]))
    }, 100)


    return { frontLayers, backLayers }
}

/*
    Reset background styles so next transition appears smoothly
    - param sign {number} positive for next slide and negative for previous slide
**/
transitions.splitBackground.resetBackgroundStyles = (layers, progress = 0) => {
        return store.getState().bgReducer.frontLayers.map(e => ({
            ...e,
            opacity: e.opacity * progress,
        }))

}

const updateFrontLayersOpacity = (layers, progress) => {
    const targetLayers = layers.map(e => ({
        ...e,
        opacity: e.opacity * progress,
    }))

    dispatch(updateFrontLayers(targetLayers))
}

const updateBackLayersOpacity = (layers, progress) => {
    const targetLayers = layers.map(e => ({
        ...e,
        opacity: e.opacity * progress,
    }))

    dispatch(updateBackLayers(targetLayers))
}

/*
    Split background slid
    - param sign {number} positive for next slide and negative for previous slide
    - pages {object[]} array of pages
    - currentPage {number} index
 transition
**/
transitions.splitBackground.slideTransition = (sign, pages, currentPage, attachScrollEvent, detachScrollEvent) => {


    // Upgrade backgrounds
    const { frontLayers, backLayers } = transitions.splitBackground.updateBackgroundLayers(sign, pages, currentPage)

    // transitions.splitBackground.resetBackgroundStyles(sign)
    // updateFrontLayersOpacity(0)

    // Detach scroll event
    detachScrollEvent()

    // Get target page
    const totalPages = pages.length

    // boundary condition
    const targetPage = sign > 0 ?
                        (currentPage + 1 > totalPages - 1 ? totalPages - 1 : currentPage + 1)
                        :
                        currentPage - 1

    // boundary condition: don't animate backgrounds when going back on first page and going forward on last page
    if((sign < 0 && currentPage <= 0) || (sign > 0 && currentPage >= totalPages - 1))
        return attachScrollEvent()


    // Animation handle
    let transitionProgress = 0
    let transitionTimer = 0
    transitionTimer = window.setInterval(() => {

        if(transitionProgress > 100) {
            ////// Stop animation

            // Attach scroll event to page change
            attachScrollEvent()

            // Clear interval
            window.clearInterval(transitionTimer)
            transitionTimer = undefined

        } else {
            ////// Continue scrolling

            // Call background controls
            if (sign > 0) {
                updateFrontLayersOpacity(frontLayers, transitionProgress / 100 * 2)

                dispatch(updateTransitionProgress(transitionProgress / 100 < 0.5 ? 0 :  (transitionProgress / 100 - 0.5) * 2))
            } else {
                updateFrontLayersOpacity(frontLayers, transitionProgress < 50 ? 1 : 1 - (transitionProgress / 100 - 0.5) * 2)

                dispatch(updateTransitionProgress(1 - transitionProgress / 100 < 0.5 ? 0 :  (1 - transitionProgress / 100 - 0.5) * 2))
            }

            // Increment transition progress
            transitionProgress = transitionProgress + 1
        }
    }, 5)
}

transitions.types = {
    BG_PARALAX: 0,
    BG_SPLIT: 1,
}


/**
   Translate front Bg
**/
const translateFrontBg = (progress, deltaX) => {
    dispatch(updateFrontBgParalax(-progress))
}

/**
   Translate back Bg
**/
const translateBackBg = (progress, deltaX) => {
    dispatch(updateBackBgParalax(-progress))
}


const updateFrontBg = (progress, pages, currentPage, targetPage) => {
    const currentLayers = pages[currentPage].layers
    const targetLayers = pages[targetPage].layers

    const updatedLayers = currentLayers.map((layer, i) => {
        let deltaParalax = targetLayers[i].paralax - currentLayers[i].paralax
        let deltaOpacity = targetLayers[i].opacity - currentLayers[i].opacity

        let paralax = currentLayers[i].paralax + deltaParalax * progress / 100
        let opacity = currentLayers[i].opacity + deltaOpacity * progress / 100

        if(targetPage < currentPage) {
            paralax = targetLayers[i].paralax - (1 - progress / 100) * deltaParalax
            opacity = targetLayers[i].opacity - (1 - progress / 100) * deltaOpacity
        }

        return {
            ...layer,
            paralax,
            opacity,
        }
    })

    dispatch(updateFrontLayers(updatedLayers))
}

const updateBackBg = (progress, pages, currentPage, targetPage) => {
    const currentLayers = pages[currentPage].layers
    const targetLayers = pages[targetPage].layers

    const updatedLayers = currentLayers.map((layer, i) => {
        let deltaParalax = targetLayers[i].paralax - currentLayers[i].paralax
        let deltaOpacity = targetLayers[i].opacity - currentLayers[i].opacity

        let paralax = currentLayers[i].paralax + deltaParalax * progress / 100
        let opacity = currentLayers[i].opacity + deltaOpacity * progress / 100

        if(targetPage < currentPage) {
            paralax = targetLayers[i].paralax - (1 - progress / 100) * deltaParalax
            opacity = targetLayers[i].opacity - (1 - progress / 100) * deltaOpacity
        }

        return {
            ...layer,
            paralax,
            opacity,
        }
    })

    dispatch(updateBackLayers(updatedLayers))
}

/**
   Paralax slide transitions
*/
transitions.bgParalax.slideTransition = (sign, pages, currentPage, attachScrollEvent, detachScrollEvent) => {
    detachScrollEvent()

    const bgState = store.getState().bgReducer

    // boundary condition
    const totalPages = pages.length
    const targetPage = sign > 0 ?
          (currentPage + 1 > totalPages - 1 ? totalPages - 1 : currentPage + 1)
          :
          currentPage - 1

    const currentParalax = pages[currentPage].paralax
    const targetParalax = pages[targetPage].paralax
    const deltaParalax = Math.abs(targetParalax - currentParalax)

    // Choose which bg to translate
    let translate = bgState.transitionProgress !== 0 ? translateFrontBg : translateBackBg


    // Layers
    const frontLayer = pages[currentPage].layers
    const targetLayer = pages[targetPage].layers

    // Choose which layers to update
    let updateLayers = bgState.transitionProgress !== 0 ? updateFrontBg : updateBackBg

    // Animation handle
    let transitionProgress = 0
    let transitionTimer = 0
    transitionTimer = window.setInterval(() => {
        if(transitionProgress > 100) {
            ////// Stop animation

            // Attach scroll event to page change
            attachScrollEvent()

            // Clear interval
            window.clearInterval(transitionTimer)
            transitionTimer = undefined
        } else {
            ////// Continue scrolling

            updateLayers(transitionProgress, pages, currentPage, targetPage)

            // Call background controls
            let x
            if (sign > 0) {
                x = currentParalax + transitionProgress / 100 * deltaParalax
                translate(x, deltaParalax)

            } else {
                x = targetParalax + (1 - transitionProgress / 100) * deltaParalax
                translate(x, deltaParalax)
            }

            // Increment transition progress
            transitionProgress = transitionProgress + 5
        }
    }, 15)
}

/**
   Pick which transition to apply
*/
transitions.startTransition = (type, params) => {
    const { sign, pages, currentPage, attachScrollEvent, detachScrollEvent } = params
    const { BG_PARALAX, BG_SPLIT } = transitions.types

    switch(type){
        case BG_SPLIT:
            return transitions.splitBackground.slideTransition(sign, pages, currentPage, attachScrollEvent, detachScrollEvent)
        case BG_PARALAX:
            return transitions.bgParalax.slideTransition(sign, pages, currentPage, attachScrollEvent, detachScrollEvent)
            break
        default:
            return
    }
}


export default transitions
