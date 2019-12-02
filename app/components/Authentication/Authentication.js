import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FiLock, FiMail } from 'react-icons/fi';
import { Typography } from '@material-ui/core';
import { IoIosCube } from 'react-icons/io';
import LogoIcon from '../../icons/logoIcon';
import { APP_NAME_FULL } from '../../constants/constants';
import { LOGIN_MUTATION } from './AuthenticationMutations';
import saveUserData from '../../utils/userManager/user';

/**
 * Authentication Component that's contains Login.
 *
 * @param {Object} history Json Object with routes history.
 */
const Authentication = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Graphql LOGIN mutation
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
    onCompleted: data => {
      confirm(data);
    }
  });

  /**
   * Confirms and storage the user authentication.
   *
   * @param {Object} data Object that represent the user information.
   */
  const confirm = data => {
    saveUserData(data);
    history.push('/');
  };

  return (
    <div style={styles.mainContainer}>
      <div className="title-logo" style={{ width: '50%' }}>
        <Typography
          style={styles.brandLabel}
          component="h2"
          variant="h2"
          gutterBottom
        >
          {APP_NAME_FULL}
        </Typography>
        <div style={{ marginLeft: '5px' }}>
          <LogoIcon size="60" />
        </div>
      </div>
      <div className="auth-container" style={{ height: '100%', width: '50%' }}>
        <div className="auth-form-container">
          <div style={styles.formTitleContainer} className="mv3">
            <Typography
              component="h4"
              style={{ fontWeight: 'bold' }}
              variant="h4"
              gutterBottom
              color="primary"
            >
              Bienvenido
            </Typography>
          </div>
          <div
            className="space custom-input"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '20px 0'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  margin: '0 12px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <FiMail style={{ fontSize: '24px', color: 'gray' }} />
              </div>
              <TextField
                style={{ margin: '10px 0', width: '100%' }}
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  margin: '0 12px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <FiLock style={{ fontSize: '24px', color: 'gray' }} />
              </div>
              <TextField
                style={{
                  margin: '10px 0',
                  width: '100%',
                  borderRadius: '5px'
                }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Password"
                type="password"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginLeft: 'auto', color: 'white' }}
              onClick={login}
            >
              LOGIN
            </Button>
          </div>
          <div style={styles.termAndUseContainer}>
            <div style={styles.termAndUseLabel}>
              <Typography variant="caption">
                Term of use. Privacy policy
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center'
  },
  brandLabel: {
    fontFamily: 'Gruppo',
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#898e90',
    marginBottom: '0px'
  },
  secondBrandLabel: {
    marginLeft: '15px',
    marginBottom: 0,
    fontSize: '6.5rem',
    fontWeight: 'normal',
    color: '#e91e63'
  },
  formTitleContainer: {
    textAlign: 'center',
    fontSize: '2rem',
    margin: '60px 0'
  },
  termAndUseContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto'
  },
  termAndUseLabel: {
    marginTop: '30px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

Authentication.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
};

export default Authentication;
