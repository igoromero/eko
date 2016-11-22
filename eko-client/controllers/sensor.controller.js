(function () {
  'use strict';

  angular
    .module('eko')
    .controller('sensorController', sensorController);

  sensorController.$inject = ['SensorService', '$routeParams'];

  function sensorController(SensorService, $routeParams) {
    var vm = this;
    (function init() {
      vm.sensorName = $routeParams.sensor;
      vm.sensor = [];
      configOptionsChart();
      getArraySensor(vm.sensorName);
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
          x: function (d, i) {
            return i
          },
          xAxis: {
            axisLabel: 'Data ',
            tickFormat: function (d) {
              var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
              if (dx > 0) {
                return d3.time.format('%d/%m/%Y')(new Date(dx))
              }
              return null;
            }
          },
          x2Axis: {
            tickFormat: function (d) {
              var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
              return d3.time.format('%b-%Y')(new Date(dx))
            },
            showMaxMin: false
          },
          y1Axis: {
            axisLabel: 'Y1 Axis',
            tickFormat: function (d) {
              return d3.format(',f')(d);
            },
            axisLabelDistance: 12
          }
        }
      };
    }

    function setDataChart() {
      vm.data = [{
        "key": "No 01",
        "values": getNo(vm.sensorName)
      }, {
        "key": "No 02",
        "values": getNo(vm.sensorName)
      }].map(function (sensor) {
        sensor.values = sensor.values.map(function (d) {
          return {
            x: d[0],
            y: d[1]
          }
        });
        return sensor;
      });
    }

    function getArraySensor(sensor) {
      SensorService.getSensor(sensor).then(function (data) {
        vm.sensor = data.registros;
      }).then(setDataChart);
    }

    function getNo(sensorName) {
      var no = [];
      if (sensorName === 'es1100') {
        vm.sensor.filter(function (registro) {
          var dia = new Date(registro.data);
          if (dia.getHours() === 12) {
            no.push([dia, registro.umidadeIntSolo]);
          }
        });
      } else if (sensorName === 'es1110') {
        vm.sensor.filter(function (registro) {
          var dia = new Date(registro.data);
          if (dia.getHours() === 12) {
            no.push([dia, registro.umidadeIntSolo]);
          }
        });
      } else if (sensorName === 'es1201') {
        vm.sensor.filter(function(registro) {
        var dia = new Date(registro.data);
        if (dia.getHours() === 12) {
          no.push([dia, registro.umidade, registro.temperatura, registro.pontoOrvalho]);
        }
      });
      }
      return no;
    }

  }
})();
