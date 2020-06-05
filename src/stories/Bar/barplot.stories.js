import React from 'react';
import Column from './Basic-Bar-Plot';
import Diverge from './Diverging';
import Order from './Ordered';
import Pair from './Paired';
import Population from './Pyramid';
import Stack from './Stacked';
import Hist from './Histogram';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Bar Graph Plotly',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Basic_Column = () => <Column/>;
  export const Diverging = () => <Diverge/>;
  export const Ordered = () => <Order/>;
  export const Paired = () => <Pair/>;
  export const Pyramid = () => <Population/>;
  export const Stacked = () => <Stack/>;
  export const Histogram = () => <Hist/>;