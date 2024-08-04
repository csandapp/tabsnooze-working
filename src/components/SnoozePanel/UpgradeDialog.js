// @flow
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import SnoozeModal from './SnoozeModal';
import Button from './Button';
import { getUpgradeUrl } from '../../paths';
import ProBadge from '../OptionsPage/ProBadge';
import { FREE_WEEKLY_SNOOZE_COUNT } from '../../core/license';

type Props = {
  visible: boolean,
  onDismiss: void => void,
};
type State = {
  canContinue: boolean,
};

// Delay the user 7 seconds until they can continue without paying
const CONTINUE_DELAY = 6000;

export default class UpgradeDialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { canContinue: false };

    setTimeout(() => {
      this.setState({ canContinue: true });
    }, CONTINUE_DELAY + 600);
  }

  render() {
    const { visible, onDismiss } = this.props;
    const { canContinue } = this.state;

    return (
      <SnoozeModal visible={visible}>
        <Root>
          <Star src={require('./images/super_star.svg')} />
          <Title>
            Become a Tab Snooze <ProBadge big /> !
          </Title>
          <Subtitle>
            Help us support this extension development and enjoy
            unlimited tab snoozing!
            <br />
            <br />
            You have used your {FREE_WEEKLY_SNOOZE_COUNT} free weekly
            snoozes.
          </Subtitle>

          <BuyButton
            raised
            as="a"
            href={getUpgradeUrl()}
            target="_blank"
          >
            Choose a Plan
          </BuyButton>
          <NoThanksButton
            raised
            onClick={onDismiss}
            disabled={!canContinue}
          >
            Let me use one more time for free
            <ProgressBar>
              <Progress />
            </ProgressBar>
          </NoThanksButton>
        </Root>
      </SnoozeModal>
    );
  }
}

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding-top: 20px;
`;

const Star = styled.img``;

const Title = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 26px;
  color: #1f1f1f;
  text-align: center;
`;
const Subtitle = styled.div`
  flex: 1;
  margin-top: 15px;
  font-size: 17px;
  color: #7a7a7a;
  text-align: center;
  line-height: 24px;
`;

const BuyButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

const NoThanksButton = styled(BuyButton).attrs({ color: '#E2E2E2' })`
  color: #333333;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;

const horizontalShrink = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

const Progress = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${horizontalShrink} ${CONTINUE_DELAY}ms linear 1;
`;
