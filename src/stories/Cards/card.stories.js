import React from 'react';
import Pro from './Card';
import Card2 from './Card2';
import Card3 from './Balance';
import Card4 from './Visitor';
import Card5 from './Card5';
import Card6 from './Card6';
import Bank from './Bank';
import Sent from './Sent';
import Received from './Received';
import Last from './Last';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Cards',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Dashboard_Card = () => <Pro/>;
  export const Single_Value_Card = () => <Card2/>;
  export const Last_Card = () => <Last/>;
  export const Bank_Account_Card = () => <Bank/>;
  export const Balance_Card = () => <Card3/>;
  export const Visitor_Card = () => <Card4/>;
  export const Income_Card = () => <Card5/>;
  export const Outcome_Card = () => <Card6/>;
  export const Sent_Card = () => <Sent/>;
  export const Received_Card = () => <Received/>;
  