import React from 'react';
import Stat from 'src/components/Stat';
import useActivities from 'src/hooks/useActivities';

const PeriodStat = ({ onClick }) => {
  const { runPeriod } = useActivities();

  const periodArr = Object.entries(runPeriod);
  periodArr.sort((a, b) => a[0][0] - b[0][0]);
  return (
    <div style={{ cursor: 'pointer' }}>
      <section>
        {periodArr.map(([period, times]) => (
          <Stat
            key={period.slice(1)}
            value={period.slice(1)}
            description={` ${times} Runs`}
            citySize={3}
            onClick={() => onClick(period)}
          />
        ))}
      </section>
      <hr color="red" />
    </div>
  );
};

export default PeriodStat;
