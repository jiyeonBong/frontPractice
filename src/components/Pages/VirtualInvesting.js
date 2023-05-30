import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { createChart, CrosshairMode } from 'lightweight-charts';

const MockInvestmentPage = () => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [data, setData] = useState([]);
  const [initialCapital, setInitialCapital] = useState(0);
  const [maxBuyAmount, setMaxBuyAmount] = useState(0);
  const [minBuyAmount, setMinBuyAmount] = useState(0);
  const [leverage, setLeverage] = useState(0);
  const [position, setPosition] = useState('');

  useEffect(() => {
    chartInstanceRef.current = createChart(chartContainerRef.current, {
      width: 800,
      height: 400,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });

    const chart = chartInstanceRef.current;

    // Add a line series
    const lineSeries = chart.addLineSeries();

    // Fetch closing data and set it to the line series
    fetchClosingData()
      .then((data) => {
        setData(data);
        lineSeries.setData(data.map((dataPoint) => ({ time: dataPoint.date, value: dataPoint.close })));

        // Set markers for buy and sell points
        data.forEach((dataPoint) => {
          lineSeries.setMarkers([
            {
              time: dataPoint.date,
              position: 'aboveBar',
              shape: 'circle',
              size: 4,
              color: 'green',
            },
            {
              time: dataPoint.date,
              position: 'belowBar',
              shape: 'circle',
              size: 4,
              color: 'red',
            },
          ]);
        });
      })
      .catch((error) => {
        console.error('Error fetching closing data:', error);
      });

    return () => {
      // Clean up the chart instance when the component is unmounted
      chartInstanceRef.current.remove();
    };
  }, []);

  const fetchClosingData = async () => {
    // Replace this with your code to fetch closing data
    const mockData = [
      { date: new Date('2022-01-01'), close: 100 },
      { date: new Date('2022-01-02'), close: 110 },
      // Additional data...
    ];

    return mockData;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform calculations and update state
    // Total profit, total profit amount, win rate, trade history, MDD
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center">
        모의투자 페이지
      </Typography>

      <div ref={chartContainerRef} />

      <form onSubmit={handleFormSubmit}>
        <label>
          Initial Capital:
          <input
            type="number"
            value={initialCapital}
            onChange={(e) => setInitialCapital(e.target.value)}
          />
        </label>
        <br />
        <label>
          Max Buy Amount:
          <input
            type="number"
            value={maxBuyAmount}
            onChange={(e) => setMaxBuyAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Min Buy Amount:
          <input
            type="number"
            value={minBuyAmount}
            onChange={(e) => setMinBuyAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Leverage:
          <input type="number" value={leverage} onChange={(e) => setLeverage(e.target.value)} />
        </label>
        <br />
        <label>
          Position:
          <select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="">Choose position</option>
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
    </Container>
  );
};

export default MockInvestmentPage;
