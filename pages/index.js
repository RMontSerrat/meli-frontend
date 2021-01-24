import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '~/components/templates';
import { withTranslation } from '~/i18n';

const Home = ({ t }) => (
  <Screen title="Mercado Livre">
    <h2>
      {t('title')}
    </h2>
  </Screen>
);

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);
