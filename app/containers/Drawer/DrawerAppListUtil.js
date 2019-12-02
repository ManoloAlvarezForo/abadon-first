import React from 'react';
import HouseIcon from '../../icons/houseIcon';

export const drawerAppIconList = {
  home: () => <HouseIcon size={24} color="#313640" />
};

/**
 * List for the app options [dashboard, sales]
 */
export const drawerAppOptions = [
  {
    name: 'Inicio',
    variant: 'home',
    path: '/'
  }
];
