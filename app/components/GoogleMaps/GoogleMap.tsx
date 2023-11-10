import React from "react";
import { GoogleMap, InfoWindow, Marker, MarkerF, useJsApiLoader, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
  backgroundColor: 'blue',
  borderRadius: '10%'
};

const center = {
  lat: 32.186470,
  lng: 34.892470,
};

const center2 = {
  lat: 36.186470,
  lng: 34.892470,
};


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCa_9Xf6-EJBIK2v4Ycxl_OJKCz3jCnuas",
    mapIds: ["a3ddb6ba6dca14dd"],
    
  });

  const [map, setMap] = React.useState<google.maps.Map>();

  const onLoad = (map: google.maps.Map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = (map: google.maps.Map) => {
    setMap(undefined);
  };

  const mapStyle = [
    {
        featureType: "all",
        elementType: "geometry",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "all",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                color: "#ffffff"
            },
            {
                visibility: "on"
            },
            {
                weight: "0.01"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
            {
                weight: ".75"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "all",
        stylers: [
            {
                weight: "0.40"
            }
        ]
    }
]

const defaultMapOptions = {
  disableDefaultUI: true,

};

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      

    
      options={{...defaultMapOptions, styles: mapStyle}}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <><Marker label={'COOL'} position={center2}/>
      {/* <Marker position={center} icon={
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png',
          scaledSize: new google.maps.Size(50, 50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(25, 25)
        }
      }>
        {'Hello'}
        </Marker></> */}
        </>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent);
