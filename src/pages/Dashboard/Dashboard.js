import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import EarningCard from '../../components/card/EarningCard';
import TotalIncomeDarkCard from '../../components/card/TotalIncomeDarkCard';
import TotalOrderLineChartCard from '../../components/card/TotalOrderLineChartCard';
import TotalIncomeLightCard from '../../components/card/TotalIncomeLightCard';
import { gridSpacing } from '../../store/constant';
import PieChart from '../../components/chart/PieChart';


const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing} sx={{ ml: 0, mt: 0 }}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3.5}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={12}>
                                <TotalIncomeDarkCard
                                    isLoading={isLoading}
                                    primaryText=
                                    {
                                        <>
                                            <Typography variant="h6" sx={{ color: '#fff' }}>
                                                Batidos: 2
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: '#fff' }}>
                                                Não Batidos: 4
                                            </Typography>
                                        </>
                                    }
                                    secondayText=
                                    {
                                        <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                                            Total de SLA
                                        </Typography>
                                    }
                                />
                            </Grid>
                            <Grid item lg={12} height={80}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <PieChart />
                    </Grid>
                    <Grid item md={3.5} mt={3}>
                        <TotalIncomeDarkCard
                            isLoading={isLoading}
                            primaryText=
                            {
                                <>
                                    <Typography variant="h6" sx={{ color: '#fff' }}>
                                        Quantidade de Ordens de Serviços: 2
                                    </Typography>
                                </>
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard