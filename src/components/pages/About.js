import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <div className='container-small all-center'>
                <h1>About this app</h1>
                <p>An app to search, read and curate your favourite books!</p>
                <p>Version: 1.0.0</p>
                <p>Source code available at: <a href='https://github.com/vaibhavrajsingh2001/reactive-library'><img src='/octocat.png' alt='octocat' style={{width: '25px'}}></img> repo</a></p>
            </div>
        </Fragment>
    )
}

export default About