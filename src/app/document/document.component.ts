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
data_arr1 = [];
color_arr1=[];
color_arr2=[];
data_arr2 = [];
eff_percentage=45;
process_percentage=90;
  labels = [this.data_arr[0],this.data_arr[1],this.data_arr[2],this.data_arr[3]];
labels1 = ["Efficiency"];
labels2 = ["Process"];
  displayedColumns: string[] = ['title', 'author', 'date', 'fulfilment', 'signed', 'completeby','action'];
  dataSource = array;

  ngOnInit(): void {
    for(let i=0;i<95;i++){
      this.data_arr1.push(1);
      this.data_arr2.push(1);
      if(i<(this.eff_percentage/100)*95){
        this.color_arr1.push("#ed6c7d")
      }
      else{
        this.color_arr1.push("#e5e5e5")
      }
      if(i<(this.process_percentage/100)*95){
        this.color_arr2.push("#ed6c7d")
      }
      else{
        this.color_arr2.push("#e5e5e5")
      }
    }
    this.chart1 = new Chart('canvas1', {
      type: 'doughnut',
      data: {
        labels: this.labels1,
        datasets: [
          {
            borderWidth: 1,
            data: this.data_arr1,
            backgroundColor:this.color_arr1,
            fill: true
          }
        ]
      },
      options: {

        cutoutPercentage: 88,
        plugins:{
          labels:false
        },

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
            borderWidth: 1,
            data: this.data_arr2,
            backgroundColor:this.color_arr2,
            fill: true
          }
        ]
      },
      options: {

        cutoutPercentage: 88,
        plugins:{
          labels:false
        },

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
        plugins:{
          
          labels: {
            render: '%',
            fontColor: '#434343',
            fontSize:8,
            fontWeight:500,
            position: 'outside',
            textMargin:6
          }
      },

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
