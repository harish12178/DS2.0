import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions,ChartType } from 'chart.js';


export interface Table {
  title: string;
  author: string;
  date: string;
signed: string;
completeby: string;
}
const array: Table[] = [
  { title: "Transport Contract", author: "Raja M.",date:"14/08/2020",signed:"User 1(1/3)",completeby:"14/08/2020"},
{ title: "Transport Contract", author: "Raja M.",date:"14/08/2020",signed:"User 1(1/3)",completeby:"14/08/2020"},
{ title: "Transport Contract", author: "Raja M.",date:"14/08/2020",signed:"User 1(1/3)",completeby:"14/08/2020"},
{ title: "Transport Contract", author: "Raja M.",date:"14/08/2020",signed:"User 1(1/3)",completeby:"14/08/2020"},
{ title: "Transport Contract", author: "Raja M.",date:"14/08/2020",signed:"User 1(1/3)",completeby:"14/08/2020"}
];

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
    
  constructor() { }

      chart;
chart1;
chart2;
  data_arr = [10, 40, 20, 30];
data_arr1 = [45,55];
data_arr2 = [95,5];
  labels = ["Completed", "Draft", "Released", "Signing"];
labels1 = ["Efficiency"];
labels2 = ["Process"];
  displayedColumns: string[] = ['title', 'author', 'date', 'fulfilment', 'signed', 'completeby','action'];
  dataSource = array;

  ngOnInit(): void {
    this.chart1 = new Chart('canvas1', {
      type: 'doughnut',
      data: {
        labels: this.labels1,
        datasets: [
          {
            borderWidth: 0,
            data: this.data_arr1,
            backgroundColor: [
              "#ed6c7d"],
            fill: true
          }
        ]
      },
      options: {

        cutoutPercentage: 89,

        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });

this.chart2 = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: this.labels2,
        datasets: [
          {
            borderWidth: 0,
            data: this.data_arr2,
            backgroundColor: [
              "#ed6c7d"],
            fill: true
          }
        ]
      },
      options: {

        cutoutPercentage: 89,

        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });

this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            borderWidth: 0,
            data: this.data_arr,
            backgroundColor: [
              "#40ed9a",
              "#fb863a",
              "#40a8e2",
              "#485865"
            ],
            fill: true
          }
        ]
      },
      options: {

        cutoutPercentage: 78,

        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });
  }

}
