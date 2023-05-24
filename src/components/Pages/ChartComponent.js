import React ,{useEffect} from 'react';
import { createChart } from 'lightweight-charts';
import { Paper } from '@mui/material';

const ChartComponent = () => {
  const chartRef = React.useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('API_URL'); // API_URL에는 실제 API의 주소를 입력하세요.
        const data = await response.json();

        const chart = createChart(chartRef.current, { width: 800, height: 400 });

        const mainSeries = chart.addLineSeries();
        mainSeries.setData(data.mainChartData);

        const indicatorSeries1 = chart.addLineSeries({ color: 'orange', lineWidth: 2 });
        indicatorSeries1.setData(data.indicatorChartData1);

        const indicatorSeries2 = chart.addLineSeries({ color: 'green', lineWidth: 2 });
        indicatorSeries2.setData(data.indicatorChartData2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //랜덤데이터 생성했을때 코드
  // const generateRandomData = (count) => {
  //   const data = [];

  //   let timestamp = Math.floor(Date.now() / 1000);

  //   for (let i = 0; i < count; i++) {
  //     const open = Math.random() * 1000 + 100;
  //     const close = open + (Math.random() - 0.5) * 50;
  //     const high = Math.max(open, close) + Math.random() * 10;
  //     const low = Math.min(open, close) - Math.random() * 10;

  //     data.push({
  //       time: timestamp,
  //       open,
  //       value: close,
  //       high,
  //       low,
  //     });

  //     timestamp -= 60; // 1분 간격으로 데이터 생성
  //   }

  //   return data.reverse();
  // };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ width: '800px', height: '400px' }}>
        <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
      </Paper>
    </div>
  );
};

export default ChartComponent;
