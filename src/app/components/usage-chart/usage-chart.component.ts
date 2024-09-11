import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { max } from 'rxjs';

@Component({
  selector: 'app-usage-chart',
  templateUrl: './usage-chart.component.html',
  styleUrls: ['./usage-chart.component.css'],
})
export class UsageChartComponent implements OnInit {
  chartOptions: any;

  ngOnInit(): void {
    const data = [120, 200, 150, 80, 70, 110, 130, 250, 180, 230, 200, 240];
    const xAxisData = [
      'يناير',
      'فبراير',
      'مارس',
      'ابريل',
      'مايو',
      'يونيو',
      'يوليو',
      'اغسطس',
      'سبتمبر',
      'اكتوبر',
      'نوفمبر',
      'ديسمبر',
    ];

    // Find the index of the maximum value
    const maxIndex = data.indexOf(Math.max(...data));
    const maxXAxisValue = xAxisData[maxIndex]; // Get the corresponding x-axis value

    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#3A3A3A',
        textStyle: {
          color: '#FFFFFF',
        },
        formatter: '{c0} استخدام',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisLabel: {
          color: '#666666',
        },
        axisLine: {
          lineStyle: {
            color: '#E0E0E0',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#666666',
        },
        axisLine: {
          lineStyle: {
            color: '#E0E0E0',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#F0F0F0',
          },
        },
      },
      series: [
        {
          name: 'إستخدام',
          type: 'line',
          data: data,
          smooth: true,
          lineStyle: {
            color: 'rgba(138, 116, 249, 1)',
            width: 3,
          },
          itemStyle: {
            opacity: 0,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#8A74F9' },
              { offset: 0.8428, color: 'rgba(138, 116, 249, 0.263733)' },
              { offset: 1, color: 'rgba(138, 116, 249, 0)' },
            ]),
          },
          markPoint: {
            data: [
              {
                type: 'max',
                name: 'أعلى نقطة',
                symbol: 'circle',
                symbolSize: 25,
                itemStyle: {
                  color: '#6C63FF',
                  borderColor: '#FFFFFF',
                  borderWidth: 2,
                },
                label: {
                  show: false,
                },
              },
            ],
          },
          markLine: {
            data: [
              {
                type: 'max',
                label: { show: false, showLabel: false },
                xAxis: maxXAxisValue,
                lineStyle: {
                  color: '#6C63FF',
                  width: 2,
                  type: 'solid',
                },
                symbol: 'none',
                symbolSize: 0,
              },
            ],
          },
        },
      ],
    };
  }
}
