import React, { useMemo, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AnnotationsModule from 'highcharts/modules/annotations';
import { getOptions } from './getOptions';
import { getGammaData } from './getGammaData';

AnnotationsModule(Highcharts);

const GammaRayChart = ({ bounds, setBounds }) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const gammaData = useMemo(() => getGammaData(), []);
    const densityData = useMemo(() => getGammaData(), []);

    const options = useMemo(
        () => getOptions(gammaData, densityData, bounds, setBounds),
        [gammaData, densityData, bounds, setBounds]
    );

    return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />;
};

export default GammaRayChart;
