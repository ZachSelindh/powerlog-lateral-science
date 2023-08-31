import Highcharts from 'highcharts';

function selectAreaByDrag(e, setBounds) {
    setBounds(prev =>
        [...prev, { start: e.xAxis[0].min, end: e.xAxis[0].max }].sort((a, b) => {
            if (a.start < b.start) return -1;
            if (a.start > b.start) return 1;
            return 0;
        })
    );

    return false; // Don't zoom
}

export const getOptions = (gammaData, densityData, bounds, setBounds) => {
    return {
        chart: {
            events: {
                selection: e => selectAreaByDrag(e, setBounds),
            },
            zoomType: 'x',
            inverted: true,
            height: 1000,
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1,
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.getOptions().colors[2]],
                        [2, Highcharts.getOptions().colors[1]],
                    ],
                },
            },
        },
        tooltip: {
            enabled: false,
        },
        title: {
            text: null
        },
        xAxis: {
            title: {
                text: 'Depth',
            },
        },
        yAxis: [{
            title: {
                text: 'Gamma Ray',
            },
            width: '25%',
        },
        {
            title: {
                text: 'Density',
            },
            left: '25%',
            width: '25%',
            offset: 0,
        },
        {
            title: {
                text: 'Permeability',
            },
            left: '50%',
            width: '25%',
            offset: 0,
        }],
        legend: false,
        credits: {
            enabled: false
        },
        // In progress
        annotations: [{
            shapes: [{
                point: {
                    x: 100,
                    y: 300
                },
                type: 'rect',
                width: 20,
                height: 20
            }]
        }],
        series: [
            {
                type: 'area',
                name: 'Gamma Ray',
                data: gammaData,
                enableMouseTracking: false,
                yAxis: 0
            },
            {
                type: 'areaspline',
                name: 'Density',
                data: densityData,
                enableMouseTracking: false,
                yAxis: 1
            },
            {
                type: 'line',
                name: 'Permeability',
                data: densityData,
                enableMouseTracking: false,
                yAxis: 2
            },
        ],
    };
};
