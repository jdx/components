/**
 * compact: true
 */
import React from 'react';
import JourneyMap from '@arvinxu/journey-map';

const YAML = () => {
  return (
    <div style={{ background: '#fafafa', padding: 24 }}>
      <JourneyMap
        data="https://gw.alipayobjects.com/os/antfincdn/gqpXwG8AFl/map.yml"
        style={{ background: 'white', padding: 24 }}
      />
    </div>
  );
};

export default YAML;
