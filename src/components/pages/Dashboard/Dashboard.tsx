import React, { ReactElement, useEffect, useState } from 'react';
import { DashboardLayout } from 'components/templates';
import { getRequest } from 'api/request';
import { Request } from 'api/request.type';

const Dashboard = (): ReactElement => {
  const [requests, setRequests] = useState<Request[] | null>(null);

  useEffect(() => {
    getRequest()
      .then(data => setRequests(data))
      .catch(e => console.error(e));
  }, []);

  return requests ? <DashboardLayout requests={requests} /> : <div>loading</div>;
};
export default Dashboard;
