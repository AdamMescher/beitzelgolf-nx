import { config } from '@keystone-6/core';
import { withAuth } from './auth';
import keystoneConfig from './keystoneConfig';

export default withAuth(config(keystoneConfig));
