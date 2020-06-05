import React from 'react';
import Line from './Line';
import Frequency from './Frequency-Polygon';
import ColumnLine from './Column-Line';
import Pop from './Lollipop';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Line Charts',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Basic_Line_Chart = () => <Line/>;
  export const Frequency_Polygon = () => <Frequency/>;
  export const Column_Line = () => <ColumnLine/>;
  export const Lollipop = () => <Pop/>;
  