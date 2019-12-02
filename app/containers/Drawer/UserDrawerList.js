import React, { Fragment } from 'react';
// Icons
import { FiCalendar } from 'react-icons/fi';
import PropTypes from 'prop-types';
import ListItemWithIcon from './ListItemWithIcon';
import ShoppingCartIcon from '../../icons/shopping-cart';
import LogoutIcon from '../../icons/logoutIcon';
import { AUTH_TOKEN } from '../../constants/communication';

const styles = {
  fontSize: {
    fontSize: '22px'
  }
};

const iconList = {
  events: FiCalendar,
  sales: () => <ShoppingCartIcon size={24} color="#313640" />,
  logout: () => <LogoutIcon size={24} color="#313640" />
};

const options = [
  {
    name: 'Ventas',
    variant: 'sales',
    path: '/sales'
  },
  {
    name: 'Logout',
    variant: 'logout',
    path: '/logout',
    action: () => {
      localStorage.setItem(AUTH_TOKEN, '');
    }
  }
];

class UserDrawerList extends React.Component {
  handleClick = option => {
    const { handleListItemClick } = this.props;
    handleListItemClick(option);
  };

  render() {
    const { selectedItem } = this.props;
    return (
      <>
        {options.map(option => (
          <ListItemWithIcon
            iconStyles={styles.fontSize}
            iconList={iconList}
            key={`${option.name}${option.variant}`}
            name={option.name}
            variant={option.variant}
            selectedItem={selectedItem}
            path={option.path}
            handleListItemClick={() => this.handleClick(option)}
          />
        ))}
      </>
    );
  }
}

UserDrawerList.propTypes = {
  handleListItemClick: PropTypes.func,
  selectedItem: PropTypes.string
};

UserDrawerList.defaultProps = {
  handleListItemClick: () => {},
  selectedItem: ''
};

export default UserDrawerList;
