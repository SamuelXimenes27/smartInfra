import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    Legend,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { country: 'Lançamento 12FO', area: 12 },
    { country: 'Lançamento 6FO', area: 4 },
    { country: 'Caixa de Emenda', area: 7 },
    { country: 'Raquete', area: 2 },
    // { country: 'Brazil', area: 6 },
    // { country: 'Australia', area: 5 },
    // { country: 'India', area: 2 },
    // { country: 'Others', area: 55 },
];

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />
);
const Item = props => (
    <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />
);

export default class PieChart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart
                    data={chartData}

                >
                    <PieSeries
                        name='country'
                        valueField="area"
                        argumentField="country"

                    />
                    <Title
                        text="Serviços Realizados"
                    />
                    <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}
