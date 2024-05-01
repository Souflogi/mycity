import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message
        message={
          "No Data here yet,please select one or more city from the map."
        }
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem key={city.id} currentCity={city} />
      ))}
    </ul>
  );
}

export default CityList;
