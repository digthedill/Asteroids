const collectData = async (
  date: string,
  setData: React.Dispatch<React.SetStateAction<never[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  setLoading(true);
  try {
    let apiKey = "2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF";
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    const asteroids =
      data.near_earth_objects[Object.keys(data.near_earth_objects)[0]];
    const formattedAsteroid = asteroids.map((item: NasaResponseType) => {
      return {
        id: item.id,
        name: item.name,
        dangerous: item.is_potentially_hazardous_asteroid,
        diameter: Math.round(averageDiameter(item.estimated_diameter.feet)),
        missDistance: Math.round(
          item.close_approach_data[0].miss_distance.miles
        ),
        speed: Math.round(
          item.close_approach_data[0].relative_velocity.miles_per_hour
        ),
      };
    });
    setData(formattedAsteroid);
  } catch (err) {
    throw new Error("Can not fetch data from NASA");
  }
  setLoading(false);
};

const averageDiameter = (obj: DiameterObj) => {
  return (obj.estimated_diameter_max + obj.estimated_diameter_min) / 2;
};

interface NasaResponseType {
  id: string;
  name: string;
  estimated_diameter: { feet: DiameterObj };
  close_approach_data: NestedVelocity[];
  is_potentially_hazardous_asteroid: boolean;
}
interface DiameterObj {
  estimated_diameter_max: number;
  estimated_diameter_min: number;
}

interface NestedVelocity {
  relative_velocity: { miles_per_hour: number };
  miss_distance: { miles: number };
}

export default collectData;
