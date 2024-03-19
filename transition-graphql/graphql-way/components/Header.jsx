const GET_ACTUAL_HEADER_STATUS = gql`
    subscription GetActualHeaderStatus {
        headerStatus {
            count
        }
    }
`;

const Header = () => {
  const [headerStatus, headerStatusUpdated] = useUnit([
    headerModel.$headerStatus,
    headerModel.headerStatusUpdated,
  ]);

  useSubscription(GET_ACTUAL_HEADER_STATUS, {
    onSubscriptionData: (subscriptionData) => {
      if (subscriptionData?.subscriptionData?.data?.headerStatus) {
        headerStatusUpdated(subscriptionData?.subscriptionData?.data?.headerStatus);
      }
    },
  });

  return (
    <div>
      {headerStatus.basket.count}
    </div>
  )
}
