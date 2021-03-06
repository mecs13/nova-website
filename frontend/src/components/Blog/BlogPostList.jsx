import React from 'react'
import { connect } from 'react-redux'
import {
    compose,
    withState,
    lifecycle,
} from 'recompose'

import API from '../../API.js'

import { push } from 'react-router-redux'

import getStyles, {
} from './BlogPostListStyles.jsx'

import {
    updateMainPanelIsOpened,
    updateSidePanelHeader,
} from '../../reducer/actions/App.js'

import SidePanelDrawer from '../UI/SidePanelDrawer.jsx'
import SidePanelLink from '../UI/SidePanelLink.jsx'
import SidePanelProductsHeader from '../UI/SidePanelProductsHeader.jsx'
import BlogPost from './Blog.jsx'

import URLSearchParams from 'url-search-params'

const mapStateToProps = state => ({
    routing: state.routing,
    pages: state.appReducer.pages,
    currentPage: state.appReducer.currentPage,
    width: state.appReducer.windowWidth,
})

const mapDispatchToProps = dispatch => ({
    goTo: url => dispatch(push(url)),
    updateMainPanelIsOpened: isOpened => dispatch(updateMainPanelIsOpened(isOpened)),
    updateSidePanelHeader: header => dispatch(updateSidePanelHeader(header)),
})


const BlogPostList = props => {
    const styles = getStyles(props)

    const List2 = props.List

    return (
        <div
            style={ styles.wrapper }
            className="BlogPostList--wrapper">
            <SidePanelDrawer
                comps={[
                    //() => <div style={ styles.listWrapper }><List2 /></div>,
                    List2,
                    () => [
                        <BlogPost
                            key={ 2 }
                            fetchUrl={ props.fetchUrl }
                            showHeader={ false } />,
                    ]
                ]}
                position={ props.drawerPosition }
            />
        </div>
    )
}

BlogPostList.defaultProps = {
}

const fetchBlogPosts = async (url, setBlogPosts, that) => {
    const restApi = new API()
    const blogPosts = await restApi.fetch(url)

    if(that.mounted) {
        setBlogPosts(blogPosts)
    }
}

const updateDrawerFromUrl = (setDrawerPosition, urlGetParam, updateMainPanelIsOpened) => {
    if(urlGetParam === '') {
        setDrawerPosition(0)
    } else {
        setDrawerPosition(1)
        updateMainPanelIsOpened(true)
    }
}

const initHeader = (updateSidePanelHeader, props) => {
    const string = props.headerText

    let header = () => <div>{ string }</div>

    if(props.routing.location.seach !== '') {
        const productNumber = parseInt(new URLSearchParams(new URL(document.location.href).search).get('post'), 10)
        const post = props.blogPosts.filter(e => e.id === productNumber)[0]

        if(props.blogPosts.length >= productNumber) {
            header = () => <SidePanelProductsHeader
                title={ post ? post.title : "" }
                subtitle={ post ? post.description : "" }
                onClickCallback={ () => {
                    props.goTo(props.pages[props.currentPage].path)
                    props.updateMainPanelIsOpened(false)
                }}
            />
        }

    }

    updateSidePanelHeader(header)
}


const createList = props => {
    const List = () => props.blogPosts.map((e, i) => {
        let { content } = e
        if(content.length > 100) {
            content = content.substring(0, 70) + '...'
        }

        const active = parseInt(new URLSearchParams(new URL(document.location.href).search).get('post'), 10) === e.id

        const onClickCallback = () => props.goTo(`${window.location.pathname}?post=${e.id}`)

        const pictoUrl = new URL(e.picto)
        const filteredPictoUrl = pictoUrl.origin + pictoUrl.pathname
        return (
            <SidePanelLink
                key={ i }
                isSquarePicto={ true }
                onClickCallback={ onClickCallback }
                pictoUrl={ filteredPictoUrl }
                isActive={ active }
                title={ e.title } />
        )
    })

    const styles = getStyles(props)
    props.setList(() => () => <div style={ styles.listWrapper }><List /><div style={ styles.trailingDiv }></div></div>)
}

const SmartComp = compose(
    withState(
        'blogPosts',
        'setBlogPosts',
        [],
    ),
    withState(
        'drawerPosition',
        'setDrawerPosition',
        0,
    ),
    withState(
        'List',
        'setList',
        () => () => <div></div>,
    ),
    lifecycle({
        componentDidMount() {
            this.mounted = true
            fetchBlogPosts(
                this.props.fetchUrl, this.props.setBlogPosts, this)
            updateDrawerFromUrl(
                this.props.setDrawerPosition,
                this.props.routing.location.search,
                this.props.updateMainPanelIsOpened)

            initHeader(this.props.updateSidePanelHeader, this.props)
        },
        componentWillUpdate(nextProps) {
            if(nextProps.blogPosts.length !== this.props.blogPosts.length) {
                createList(nextProps)
            }
            if(this.props.routing.location.search !== nextProps.routing.location.search) {
                updateDrawerFromUrl(
                    this.props.setDrawerPosition,
                    nextProps.routing.location.search,
                    this.props.updateMainPanelIsOpened)
            }

            initHeader(nextProps.updateSidePanelHeader, nextProps)
        },
        componentWillUnmount() {
            this.mounted = false
        }
    })
)(BlogPostList)

SmartComp.defaultProps = {
    fetchUrl: new API().urls.blogPosts.list,
    headerText: '',
    isSquarePicto: true,
}

const ConnectedComp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartComp)

export default ConnectedComp
