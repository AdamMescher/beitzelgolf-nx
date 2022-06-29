import { config } from '@keystone-6/core';
import { withAuth } from './auth';
import keystoneConfig from './keystoneConfig';
import 'dotenv/config';



export default withAuth(config(keystoneConfig));
