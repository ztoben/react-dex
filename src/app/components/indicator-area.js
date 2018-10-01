import React from 'react';
import '../../style/components/indicator-area.scss';

export default function IndicatorArea() {
  return (
    <div className="indicator-container">
      <div className="indicator-light"/>
      <div className="decorator-lights-container">
        <div className="light"/>
        <div className="light"/>
        <div className="light"/>
      </div>
    </div>
  );
}

IndicatorArea.displayName = 'IndicatorArea';