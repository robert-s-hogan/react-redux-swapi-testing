import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; //useSelector
import { fetchVehicles } from './vehiclesSlice'; //getVehiclesStatus
import { usePrefetch, useGetVehiclesQuery } from '../../services/apiVehicles';

import { Loading } from '../../components/Loading';
import Vehicle from './Vehicle';
import GridContainer from '../../components/GridContainer';

const Vehicles = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages] = useState(4);
  // const vehiclesStatus = useSelector(getVehiclesStatus);
  const { data, isLoading, isFetching } = useGetVehiclesQuery(page);
  const prefetchPage = usePrefetch('getVehicles');

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (data !== null) {
      dispatch(fetchVehicles());
    }
    if (page !== 1) {
      prefetchPrev();
    }
    if (page !== totalPages) {
      prefetchNext();
    }
  }, [page, totalPages, prefetchNext, prefetchPrev, dispatch, data]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>No posts</div>;
  }

  return (
    <div>
      {isFetching ? (
        <div>
          <Loading />
        </div>
      ) : (
        <GridContainer>
          {data.results.map((vehicle) => (
            <Vehicle key={vehicle.name} name={vehicle.name} />
          ))}
        </GridContainer>
      )}
      <div className="my-4 flex justify-between items-center text-2xl">
        <button
          className="letter-box bg-green"
          onClick={() => setPage((prev) => prev - 1)}
          isLoading={isFetching}
          onMouseEnter={prefetchPrev}
          disabled={page === 1}
        >
          previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          isLoading={isFetching}
          onMouseEnter={prefetchNext}
          disabled={page === totalPages}
          className="letter-box bg-orange"
        >
          next
        </button>
      </div>
    </div>
  );
};

export const VehiclesAPI = ({ data }) => {
  return (
    <section className="container max-w-4xl md:mx-auto my-4">
      <Vehicles />
    </section>
  );
};

export default VehiclesAPI;
