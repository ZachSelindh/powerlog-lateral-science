import React, { useState } from 'react';
import GammaRayChart from './GammaRayChart';
import BoundsBox from './BoundsBox';

const AppComponent = () => {
    const [bounds, setBounds] = useState([]);
    return (
        <>
            <div id="chart-container">
                <div className="chart">
                    <GammaRayChart bounds={bounds} setBounds={setBounds} />
                </div>
            </div>

            <BoundsBox bounds={bounds} setBounds={setBounds} />
        </>
    );
};

export default AppComponent;
