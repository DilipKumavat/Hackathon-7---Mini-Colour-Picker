import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = {background : config.background};
  return (
    <button className={config.classname} onClick={() => props.selectNextBackground({background: config.background})}>
      {config.label}
      
    </button>
  )
}
export default ColourSelector;
