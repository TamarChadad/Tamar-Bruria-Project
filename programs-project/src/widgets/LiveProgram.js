import React from 'react'

export const LiveProgram = ()=> {

    return <>
        <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            controls={true}
            playing={true}
            config={{
                file: {
                    attributes: {
                        controlsList: "nodownload"
                    }
                }
            }}
        />
    </>
}