import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllVehiclesResults,
  getVehiclesStatus,
  getVehiclesError,
  fetchVehicles,
} from './vehiclesSlice';
import { useEffect } from 'react';

import { Loading } from '../../components/Loading';
import Vehicle from './Vehicle';

export const Vehicles = () => {
  const dispatch = useDispatch();

  const vehicles = useSelector(selectAllVehiclesResults);
  const filmsStatus = useSelector(getVehiclesStatus);
  const error = useSelector(getVehiclesError);

  useEffect(() => {
    if (filmsStatus === 'idle') {
      dispatch(fetchVehicles());
    }
  }, [filmsStatus, dispatch]);

  let content;
  if (filmsStatus === 'loading') {
    content = <Loading />;
  } else if (filmsStatus === 'succeeded') {
    const orderedVehicles = vehicles;
    content = orderedVehicles.map((vehicle) => (
      <Vehicle key={vehicle.name} name={vehicle.name} />
    ));
  } else if (filmsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      {content}
    </section>
  );
};

export default Vehicles;
