import React from 'react';

import resources from '../data/resources'
import SleighdogsResource from './sleighdogs-resource';

const SleighdogsResources = () => {

    function renderResources() {
        if (resources && resources.length > 0) {
            return resources.map((resource, key) => {
                return <SleighdogsResource key={key} resource={resource} />
            });
        }
    }

    return (
        <div className="article-section">
            <div className="article-header display-1">News and Resources</div>
            <div className="resources">
                {renderResources()}
            </div>            
        </div>
    );
}

export default SleighdogsResources;