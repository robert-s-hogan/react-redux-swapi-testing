import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllStarshipsResults,
  getStarshipsStatus,
  getStarshipsError,
  fetchStarships,
} from './starshipsSlice';
import { useEffect } from 'react';

import { Loading } from '../../components/Loading';
import Starship from './Starship';

export const Starships = () => {
  const dispatch = useDispatch();

  const starships = useSelector(selectAllStarshipsResults);
  const starshipsStatus = useSelector(getStarshipsStatus);
  const error = useSelector(getStarshipsError);

  useEffect(() => {
    if (starshipsStatus === 'idle') {
      dispatch(fetchStarships());
    }
  }, [starshipsStatus, dispatch]);

  let content;
  if (starshipsStatus === 'loading') {
    content = <Loading />;
  } else if (starshipsStatus === 'succeeded') {
    const orderedStarships = starships;
    content = orderedStarships.map((starship) => (
      <Starship key={starship.name} name={starship.name} />
    ));
  } else if (starshipsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      {content}
    </section>
  );
};

export default Starships;
