import React, { Component } from 'react'
import {useRouteMatch} from 'react-router-dom'

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(Component())
    } catch (err) {
        console.warn(err)
        console.log('poop')
    }
}

export default function PageRenderer () {
    const {
        params: { page }
    } =useRouteMatch()

    return generatePage(page)
}