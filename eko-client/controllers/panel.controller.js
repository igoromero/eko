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
        vm.es1100 = [];
        getArraySensorEs1100();
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
    
    function getArraySensorEs1100() {
      SensorService.getSensor('es1100').then(function(data) {
        vm.es1100 = data.registros;
      }).then(setDataChart);
    }

    function getNosEs1100(noId) {
      var no = [];
      vm.es1100.filter(function(registro) {
        var dia = new Date(registro.data);
        if (registro.noid === noId && dia.getHours() === 12) {
          no.push([dia, registro.umidadeIntSolo]);
        }
      });
      return no;
    }

    function setDataChart() {
        vm.data = [
            {
                "key" : "No 01" ,
                "values" : getNosEs1100(32777)
            },
            {
                "key" : "No 02" ,
                "values" : getNosEs1100(32772)
            }
        ].map(function(sensor) {
                sensor.values = sensor.values.map(function(d) { return {x: d[0], y: d[1] } });
                return sensor;
            });
    }
  }

})();
