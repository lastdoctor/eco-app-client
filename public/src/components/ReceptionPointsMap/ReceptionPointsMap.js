import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import style from '../FindAdress.module.css';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';
import classes from './ReceptionPointsMap.module.css'
const ReceptionPointsMap = () => {
  const receptionPointsPlaces = useSelector(store => store.receptionPoints.places);
  const receptionPointsDescription = useSelector(store => store.receptionPoints.description);
  const center = useSelector(store => [store.currentPosition.latitude, store.currentPosition.longitude]);
  const mapstate = {
    center,
    zoom: 12,
    width: '100%',
    height: '100%',
  };
  return (
    <>
      <br />
      <div className={classes.mapWrapper}>
        <br />
        <div>
          <YMaps>
            <Map state={mapstate}>
              {receptionPointsPlaces &&
                receptionPointsPlaces.map(placemark => (
                  <Placemark key={placemark._id} {...placemark} />
                ))}
              <ZoomControl />
            </Map>
          </YMaps>
        </div>
      </div>
<<<<<<< HEAD
        <div className={classes.info}> {receptionPointsDescription}</div>
    </>
=======
      <p className={classes.paragraph}>{receptionPointsDescription}</p>
    </div>
      </>
>>>>>>> b3f298a97fc4d3df03abbdcb07932d426b830d87
  );
};

export default ReceptionPointsMap;
