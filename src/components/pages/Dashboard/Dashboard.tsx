import React, { ReactElement, useEffect } from 'react';
import { DashboardLayout } from 'components/templates';
import { SCProps } from 'types/props';
import { getRequest } from 'api/request';

const Dashboard = ({ children }: SCProps): ReactElement => {
  useEffect(() => {
    console.log(getRequest().then(data => console.log(data)));
  }, []);
  return <DashboardLayout />;
};
export default Dashboard;
