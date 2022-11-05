/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import DataItem from './DataItem';
/* eslint-disable no-unused-expressions */
const ADManagement = () => {
  const ListData = [
    {
      id: 1,
      adType: 'web',
      title: '매드업 레버 광고 1234',
      budget: 500000,
      status: 'active',
      startDate: '2020-10-19T00:00:00',
      endDate: null,
      report: {
        cost: 267144117,
        convValue: 1157942685,
        roas: 433,
      },
    },
    {
      id: 2,
      adType: 'web',
      title: '매드업 레버 광고 12345',
      budget: 200000,
      status: 'ended',
      startDate: '2021-01-22T00:00:00',
      endDate: '2021-12-21T23:59:59',
      report: {
        cost: 169837362,
        convValue: 745438798,
        roas: 438,
      },
    },
    {
      id: 3,
      adType: 'web',
      title: '원티드 레버 광고 1234',
      budget: 150000,
      status: 'active',
      startDate: '2022-01-01T00:00:00',
      endDate: null,
      report: {
        cost: 699481243,
        convValue: 898716259,
        roas: 1284,
      },
    },
    {
      id: 4,
      adType: 'app',
      title: '매드업 앱광고 광고 9912',
      budget: 240000,
      status: 'active',
      startDate: '2022-02-10T00:00:00',
      endDate: null,
      report: {
        cost: 9300222,
        convValue: 38234789,
        roas: 411,
      },
    },
  ];

  return (
    <ADContainer>
      <DataItemBox>
        {ListData.map((v, i) => (
          <DataItem key={i} data={v} />
        ))}
      </DataItemBox>
    </ADContainer>
  );
};

const ADContainer = styled.div``;

const DataItemBox = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default ADManagement;
