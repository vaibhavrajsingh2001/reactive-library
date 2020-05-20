import React, { useState, useEffect } from 'react';

const NotFound = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setUrl(result.message);
                },
                (error) => {
                    alert(error);
                }
            )
    }, [])

    return (
        <div className='container-small all-center'>
            <h1>Page not found!</h1>
            <p>But that's fine. Here's some doggos for ya.</p>
            <br />
            <img src={url} alt='doggo' style={{ width: '300px', border: 'solid 5px' }} />
        </div>
    )

}

export default NotFound;
