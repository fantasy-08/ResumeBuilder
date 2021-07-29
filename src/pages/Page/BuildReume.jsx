import React from 'react'
//Components
import Navigation from '../../components/steps/Navigation'
//Pages
import PageController from '../PagesController'

function BuildReume() {
    return (
        <>
            <Navigation  />
            <br id="printHide" />
            <PageController />
        </>
    )
}

export default BuildReume
