import { GoogleMap, useLoadScript, Marker, Libraries } from "@react-google-maps/api";
import { Member } from "../../app/models/member";
import LoadingComponent from "../components/LoadingComponent";
import { useMemo } from "react";

const libraries: Libraries = ['places'];
const containerStyle = {
    width: '820px',
    height: '620px'
  };
  
//   const center = {
//     lat: 14.462,
//     lng: 121.010
//   };

  interface Props {
    members: Member[]
}

export default function MapGoogle({members}: Props) {
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_API,
    libraries
  });
  console.log(import.meta.env.VITE_GOOGLEMAP_API)
  const center = useMemo(() => ({ lat: 14.462, lng: 121.010 }), []);

  // const [map, setMap] = useState(null)
  // const onLoad = useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [center])
  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) return <LoadingComponent />;
  
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
      
        {/* <Marker position={center} /> */}
        {members.length > 0 &&
            members?.map(member => (
                <Marker position={member.position} />
            ))
         }
      </>
    </GoogleMap>
  )
}
