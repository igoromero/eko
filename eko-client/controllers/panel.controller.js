(function () {
  'use strict';

  angular
    .module('eko')
    .controller('panelController', panelController);

  panelController.$inject = ['SensorService'];

  function panelController(SensorService) {
    var vm = this;
    (function() {
        vm.title = 'DASHBOARD PANEL';
        configOptionsChart();
        setDataChart();
    })();




    function configOptionsChart() {
        vm.options = {
            chart: {
                type: 'linePlusBarChart',
                height: 500,
                margin: {
                    top: 30,
                    right: 75,
                    bottom: 50,
                    left: 75
                },
                bars: {
                    forceY: [0]
                },
                bars2: {
                    forceY: [0]
                },
                color: ['#2ca02c', 'darkred'],
                x: function(d,i) { return i },
                xAxis: {
                    axisLabel: 'Data ',
                    tickFormat: function(d) {
                        var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
                        if (dx > 0) {
                            return d3.time.format('%x')(new Date(dx))
                        }
                        return null;
                    }
                },
                x2Axis: {
                    tickFormat: function(d) {
                        var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
                        return d3.time.format('%b-%Y')(new Date(dx))
                    },
                    showMaxMin: false
                },
                y1Axis: {
                    axisLabel: 'Y1 Axis',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    },
                    axisLabelDistance: 12
                }
            }
        };
    }

    function setDataChart() {
        var registros = [];
        registros.push({
              "_id": "57efd2d229f19b73c5978320",
              "data": "2016-10-01T11:59:55.000Z",
              "noid": 32776,
              "umidadeExtSolo": 0.66
            },
            {
              "_id": "57efd2d329f19b73c5978321",
              "data": "2016-10-01T12:12:48.000Z",
              "noid": 32773,
              "umidadeExtSolo": 0.66
            },
            {
              "_id": "57efd2d329f19b73c5978322",
              "data": "2016-10-01T12:13:13.000Z",
              "noid": 32786,
              "umidadeExtSolo": 0.66
            },
            {
              "_id": "57efdd9b29f19b73c5978334",
              "data": "2016-10-01T12:45:05.000Z",
              "noid": 32773,
              "umidadeExtSolo": 975.67
            },
            {
              "_id": "57efdd9b29f19b73c5978335",
              "data": "2016-10-01T12:45:05.000Z",
              "noid": 32773,
              "umidadeExtSolo": 975.67
            },
            {
              "_id": "57efdd9b29f19b73c5978337",
              "data": "2016-10-01T12:45:31.000Z",
              "noid": 32786,
              "umidadeExtSolo": 975.67
            },
            {
              "_id": "57efdd9b29f19b73c5978338",
              "data": "2016-10-01T12:48:22.000Z",
              "noid": 32776,
              "umidadeExtSolo": 975.67
            },
            {
              "_id": "57efdd9b29f19b73c5978339",
              "data": "2016-10-01T12:45:31.000Z",
              "noid": 32786,
              "umidadeExtSolo": 975.67
            },
            {
              "_id": "57efdd9c29f19b73c597833b",
              "data": "2016-10-01T12:48:22.000Z",
              "noid": 32776,
              "umidadeExtSolo": 975.67
            },
            {
              "_id": "57efe0e229f19b73c597834c",
              "data": "2016-10-01T13:01:16.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efe0e229f19b73c597834d",
              "data": "2016-10-01T13:01:38.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efe0e229f19b73c597834e",
              "data": "2016-10-01T13:04:33.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efebaa29f19b73c597835b",
              "data": "2016-10-01T13:49:42.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efebaa29f19b73c597835e",
              "data": "2016-10-01T13:50:07.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efebaa29f19b73c5978361",
              "data": "2016-10-01T13:52:57.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efebaa29f19b73c5978363",
              "data": "2016-10-01T13:49:42.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efebaa29f19b73c5978366",
              "data": "2016-10-01T13:50:07.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efebab29f19b73c5978368",
              "data": "2016-10-01T13:52:57.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efeef229f19b73c5978378",
              "data": "2016-10-01T14:05:52.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efeef229f19b73c5978379",
              "data": "2016-10-01T14:06:14.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57efeef229f19b73c597837a",
              "data": "2016-10-01T14:09:07.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57eff9ba29f19b73c5978387",
              "data": "2016-10-01T14:54:15.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57eff9ba29f19b73c597838a",
              "data": "2016-10-01T14:54:44.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57eff9ba29f19b73c597838d",
              "data": "2016-10-01T14:57:34.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57eff9ba29f19b73c597838f",
              "data": "2016-10-01T14:54:15.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57eff9ba29f19b73c5978392",
              "data": "2016-10-01T14:54:44.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57eff9ba29f19b73c5978394",
              "data": "2016-10-01T14:57:34.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57effd0129f19b73c59783a4",
              "data": "2016-10-01T15:10:21.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57effd0229f19b73c59783a5",
              "data": "2016-10-01T15:10:50.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57effd0229f19b73c59783a6",
              "data": "2016-10-01T15:13:41.000Z",
              "noid": 32776,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57f007ca29f19b73c59783b2",
              "data": "2016-10-01T15:45:57.000Z",
              "noid": 32776,
              "umidadeExtSolo": 0.58
            },
            {
              "_id": "57f007ca29f19b73c59783b4",
              "data": "2016-10-01T15:58:49.000Z",
              "noid": 32773,
              "umidadeExtSolo": 0.58
            },
            {
              "_id": "57f007ca29f19b73c59783b6",
              "data": "2016-10-01T15:59:18.000Z",
              "noid": 32786,
              "umidadeExtSolo": 0.58
            },
            {
              "_id": "57f007ca29f19b73c59783b7",
              "data": "2016-10-01T15:45:57.000Z",
              "noid": 32776,
              "umidadeExtSolo": 0.58
            },
            {
              "_id": "57f007ca29f19b73c59783b9",
              "data": "2016-10-01T15:58:49.000Z",
              "noid": 32773,
              "umidadeExtSolo": 0.58
            },
            {
              "_id": "57f007ca29f19b73c59783ba",
              "data": "2016-10-01T15:59:18.000Z",
              "noid": 32786,
              "umidadeExtSolo": 0.58
            },
            {
              "_id": "57f00b1129f19b73c59783d0",
              "data": "2016-10-01T15:59:18.000Z",
              "noid": 32786,
              "umidadeExtSolo": -0.93
            },
            {
              "_id": "57f00b1229f19b73c59783d1",
              "data": "2016-10-01T16:02:07.000Z",
              "noid": 32776,
              "umidadeExtSolo": -0.93
            },
            {
              "_id": "57f00b1229f19b73c59783d2",
              "data": "2016-10-01T16:14:57.000Z",
              "noid": 32773,
              "umidadeExtSolo": -0.93
            },
            {
              "_id": "57f015da29f19b73c59783e2",
              "data": "2016-10-01T16:47:13.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57f015da29f19b73c59783e3",
              "data": "2016-10-01T16:47:13.000Z",
              "noid": 32773,
              "umidadeExtSolo": 961.24
            },
            {
              "_id": "57f015da29f19b73c59783e5",
              "data": "2016-10-01T16:47:42.000Z",
              "noid": 32786,
              "umidadeExtSolo": 961.24
          });
        function getNo() {
            var nos = [];
            registros.filter(function(registro) {
                if(registro.noid === 32786 )
                nos.push([registro.data, registro.umidadeExtSolo]);
            });
            return nos;
        }
        vm.data = [
            {
                "key" : "No 01" ,
                "values" : getNo()
            },
            {
                "key" : "No 02" ,
                "values" : [ [ "2016-10-01T16:47:13.000Z" , 71.89] , [ "2016-11-02T16:47:13.000Z" , 75.51] , [ "2016-12-03T16:47:13.000Z" , 68.49]]
            }
        ].map(function(series) {
                series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
                return series;
            });
    }
  }

})();
