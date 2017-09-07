import React from 'react';

import SleighdogsProducts from './sleighdogs-products';
import SleighdogsResources from './sleighdogs-resources';

const SleighdogsBody = () => {
  return (
    <div className="body-content">
        <SleighdogsProducts />
        <SleighdogsResources />        
    </div>
  );
}

export default SleighdogsBody;