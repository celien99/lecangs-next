import { mapJson, mobileOption, option } from '@/utils/mapData';
import { EffectScatterChart, MapChart } from 'echarts/charts';
import {
  GeoComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
  EffectScatterChart,
]);
export default function UseEcharts() {
  const map = useRef(null);
  useEffect(() => {
    handleEchart();
    window.addEventListener('resize', handleEchart);
    return () => {
      window.removeEventListener('resize', handleEchart);
    };
  }, []);
  const handleEchart = () => {
    if (!map.current) return;
    echarts.dispose(map.current);
    const mapChart = echarts.init(map.current);
    echarts.registerMap('USA', mapJson);
    if (window.innerWidth > 750) {
      mapChart.setOption(option);
    } else {
      mapChart.setOption(mobileOption);
    }
  };
  return <div ref={map} className='map'></div>;
}
