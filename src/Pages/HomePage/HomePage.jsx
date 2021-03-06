import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTimeData } from '../../Redux/dashboard/dashboardReducer';
import { fetchContinents } from '../../Redux/continents/continentsReducer';
import AllTimeStats from '../../components/AllTimeStats/AllTimeStats';
import ContinentsDisplay from '../../components/ContinentsDisplay/ContinentsDisplay';
import style from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';

function HomePage() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);

  useEffect(() => {
    dispatch(fetchAllTimeData())
      .then(dispatch(fetchContinents()));
  }, []);

  return (
    <>
      <Navbar pageTo="Home" />
      <div className={style.mapDiv}>
        <iframe className={style.map} title="covid map" src="https://coronavirus.app/map?embed=true" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>

      <h2 className={style.title}>ALL TIME STATS</h2>

      <AllTimeStats />

      <h2 className={style.title}>STATS BY CONTINENT</h2>
      <div className={style.continents}>
        {continents.map((continent) => (
          <ContinentsDisplay key={continent.id} continent={continent} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
