import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

const extractCountriesOnly = cities => {
  //   const seen = new Set();
  //   const newArray = cities.filter(obj => {
  //     const value = obj["country"];
  //     return !seen.has(value) && seen.add(value);
  //   });

  //   const OnlyCountries = newArray.map(Obj => ({
  //     country: Obj.country,
  //     emoji: Obj.emoji,
  //     id: Math.random(),
  //   }));

  const OnlyCountries = cities.reduce((acc, curr) => {
    return !acc.some(e => e.country === curr.country)
      ? [
          ...acc,
          {
            country: curr.country,
            emoji: curr.emoji,
            id: Math.random(),
          },
        ]
      : [...acc];
  }, []);

  return OnlyCountries;
};

function CountryList({ cities, isLoading }) {
  const countries = extractCountriesOnly(cities);
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
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
