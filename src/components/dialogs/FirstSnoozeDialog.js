// @flow

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { SLEEPING_TABS_PATH } from '../../paths';
import TSDialog from './TSDialog';
import Button from '../SnoozePanel/Button';
import HotelIcon from '@material-ui/icons/Hotel';
import { Link } from 'react-router-dom';

export default class FirstSnoozeDialog extends Component<{}> {
  render() {
    // const shareText = `Snooze browser tabs for later with Tab Snooze Chrome Extension: \n${CHROME_WEB_STORE_INSTALL_SHARE_LINK}`;

    return (
      <TSDialog
        // title="Congrats!"
        image={require('./images/congrats.png')}
        headline="Awesome! You snoozed your first Tab!"
        subheader={
          <Fragment>
            Your tab will sleep and magically reopen when you asked
            for it.
            <br />
            You can always wake it up earlier if you need to from the
            Sleeping Tabs list.
          </Fragment>
        }
        closeBtnText="Got it, thanks!"
      >
        <Root>
          <Button
            raised="true"
            as={Link}
            color="#4A90E2"
            to={SLEEPING_TABS_PATH}
            target="_blank"
            onClick={() => window.close()}
          >
            <HotelIcon /> Sleeping Tabs
          </Button>
          {/* <Button
            raised
            as="a"
            icon={require('./images/facebook.svg')}
            color="#4460AE"
            href={`https://www.facebook.com/sharer/sharer.php?u=${CHROME_WEB_STORE_INSTALL_SHARE_LINK}`}
            style={{ marginRight: 12 }}
          >
            Share on Facebook
          </Button>
          <Button
            raised
            as="a"
            icon={require('./images/twitter.svg')}
            color="#00ACEE"
            href={`https://twitter.com/home?status=${shareText}`}
          >
            Share on Twitter
          </Button> */}
        </Root>
      </TSDialog>
    );
  }
}

const Root = styled.div``;
