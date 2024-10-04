import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookCall = () => {
  return (
    <div style={{ height: '600px' }}>
      <InlineWidget url="https://calendly.com/your-calendly-username" />
    </div>
  );
};

export default BookCall;
