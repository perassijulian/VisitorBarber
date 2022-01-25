import { DateTimePicker } from '@material-ui/pickers';
import React, { useState } from 'react';

const PickDate = () => {
  const [date, setDate] = useState(new Date());
  return (
  <div>
    <DateTimePicker value={date} onChange={setDate} />
  </div>);
};

export default PickDate;
