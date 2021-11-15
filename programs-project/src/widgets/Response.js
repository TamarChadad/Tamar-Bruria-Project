import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ShortName } from './ShortName';

export const Response = (props) => {

    const responses = useSelector((state) => state.responses.responses.filter(r => r.RSprogramId == props.programId));

    return (
        <>

            {responses.map((response) => (
                <div key={response.RSid}>
                    <div >
                        {response.RSdescription}
                    </div>

                    <div>
                        <ShortName userId={response.RSuserId} />
                    </div>

                    <hr />
                </div>
            ))}
        </>
    )
}