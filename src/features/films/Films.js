import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllFilmsResults,
  getFilmsStatus,
  getFilmsError,
  fetchFilms,
} from './filmsSlice';
import { useEffect } from 'react';

import { Loading } from '../../components/Loading';
import Film from './Film';

export const Films = () => {
  const dispatch = useDispatch();

  const films = useSelector(selectAllFilmsResults);
  const filmsStatus = useSelector(getFilmsStatus);
  const error = useSelector(getFilmsError);

  useEffect(() => {
    if (filmsStatus === 'idle') {
      dispatch(fetchFilms());
    }
  }, [filmsStatus, dispatch]);

  let content;
  if (filmsStatus === 'loading') {
    content = <Loading />;
  } else if (filmsStatus === 'succeeded') {
    const orderedFilms = films;
    content = orderedFilms.map((film) => (
      <Film key={film.title} title={film.title} />
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

export default Films;
