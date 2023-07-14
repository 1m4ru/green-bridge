import { ApexOptions } from 'apexcharts';
// @mui
import { Card, CardHeader, Box, CardProps } from '@mui/material';
import Chart, { useChart } from '../../components/Charts';
// components
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';



// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    labels: string[];
    colors?: string[];
    series: {
      name: string;
      type: string;
      fill?: string;
      data: number[];
    }[];
    options?: ApexOptions;
  };
}





export interface PopOverProps {
  title?: string;
  descriptionPopOver?: string[];
}

export default function AnalyticsWebsiteVisits({ title, subheader, chart, ...other }: Props) {
  const { labels, colors, series, options } = chart;

  const formattedLabels = labels && labels.map((labelItem) => {
    const date = new Date(labelItem)
    return format(date, 'dd/MM/yyyy', { locale: ptBR })

  })

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill) as string[],
    },
    labels: formattedLabels || [],
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} Emitidos`;
          }
          return value;
        },
      },
    },
    ...options,
    // locales: [ptBR]
  });


  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Chart options={chartOptions} series={series} type="line" height={364} />
      </Box>
    </Card>
  );
}

