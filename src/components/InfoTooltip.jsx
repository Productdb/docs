import React from 'react';
import { ProductDBTooltip } from '@ProductDBsdk/react-ui-kit';
import { Info } from 'react-feather';

export default function InfoTooltip({ label }) {
  return (
    <span style={{ verticalAlign: 'middle' }}>
      <ProductDBTooltip variant="primary" label={label} kind="inline">
        <Info />
      </ProductDBTooltip>
    </span>
  );
}
