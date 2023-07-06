'use client';
import { Box } from '@mui/material';
import style from './chart.module.scss';
import { TableProps } from './chart.types';
import React from 'react';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Chart = ({ averageTemperaturesScaled }: TableProps) => {
  return (
    <Box className={style.chartContainer}>
      <Box className={style.chartText}>
        <span className={style.analytics}>Analytics</span>
        <span className={style.values}>Value&#x2019;s name</span>
      </Box>
      <svg width="450" height="350">
        <defs>
          <linearGradient id="barGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#adea57" />
            <stop offset="100%" stopColor="#1c2c06" />
          </linearGradient>
        </defs>
        {[0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.99].map(
          (value, index) => (
            <React.Fragment key={index}>
              <line
                x1="50"
                x2="420"
                y1={value * 310 + 8}
                y2={value * 310 + 8}
                stroke="#515151"
                strokeWidth="1"
                strokeDasharray="10, 8"
                key={index}
              />
              <text
                x={30}
                y={value * 313 + 8}
                textAnchor="middle"
                fill="#A4A4A4"
                fontSize="14px"
                fontFamily="Helvetica"
              >
                {60 - index * 10}
              </text>
            </React.Fragment>
          ),
        )}
        {averageTemperaturesScaled &&
          averageTemperaturesScaled.map((value, index) => (
            <React.Fragment key={index}>
              <rect
                key={index}
                x={index * 50 + 150 / 2}
                y={value}
                width="27"
                rx={10}
                height={318 - value}
                fill="url(#barGradient)"
              />
              <text
                x={index * 50 + 175 / 2}
                y={335}
                textAnchor="middle"
                fill="#FDFCFF"
                fontSize="14px"
                fontFamily="Helvetica"
              >
                {daysOfWeek[index]}
              </text>
            </React.Fragment>
          ))}
      </svg>
    </Box>
  );
};

export { Chart };
