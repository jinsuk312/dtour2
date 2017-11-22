/* eslint-disable no-undef */
import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { MAP } from 'react-google-maps/lib/constants';

const Map = compose (

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAiuyS5TMLNKU5yqI8BOirA9AL-A3PUdS0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100vh`, width: `85%`, float:`right`,  marginTop: `55px` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places,

            onAddressChange: (firstLat, firstLong) => {
              const DirectionsService = new google.maps.DirectionsService();
              // 41.8781° N, 87.6298° W -- Chicago
              // 43.0731° N, 89.4012° W -- Madison
              //console.log(firstLat+ '-' + firstLong);
              DirectionsService.route({
                origin: new google.maps.LatLng(41.8781, -87.6298),
                destination: new google.maps.LatLng(firstLat, firstLong),
                travelMode: google.maps.TravelMode.DRIVING,
              }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                //-----------------------------------------------------------------------
          var routeBoxer = new window.RouteBoxer();
          var infowindow;
          var map = this._reactInternalInstance._context[MAP];
          var path = result.routes[0].overview_path;
          var boxes = routeBoxer.box(path, 10);
          console.log(boxes);
              //a for loop that...
    for (var i = 0; i < boxes.length; i++) {

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            bounds: boxes[i]
            //type: ['store']
        }, callback);

        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }           

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });

        };


        };
        //--------------------------------------------------------------------

                  this.setState({
                    directions: result,
                  });
                } else {
                  console.error(`error fetching directions ${result}`);
                }
              });
            },
          });
        },
      })
    },
    componentDidMount() {
      window.google=google;
      require("./RouteBoxer.js");
      

      const DirectionsService = new google.maps.DirectionsService();
      
      // 41.8781° N, 87.6298° W -- Chicago
      // 43.0731° N, 89.4012° W -- Madison
      DirectionsService.route({
        origin: new google.maps.LatLng(41.8781, -87.6298),
        destination: new google.maps.LatLng(43.0731, -89.4012),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
          

        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <div>
    <GoogleMap
      defaultZoom={7}
      center={props.center}
    >
      {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
          {props.onAddressChange(location.lat(), location.lng())}
      )}
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
    <div data-standalone-searchbox="">
      <div 
          style={{
            width: `15%`,
            float: `left`,
            backgroundColor: `black`,
            height: `100vh`,
            textAlign: `center`,
            marginTop: `55px`,
          }}
        >
          <div
            style={{
              marginTop: `25px`,
              fontSize: `18px`,
              width: `100%`,
              color: `#fff`,
              fontWeight: `700`,
              textAlign: `center`,
            }}
          >
          Add Way Point
          </div>
      <StandaloneSearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="To Address"
          style={{
            clear: `both`,
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            margin: `20px auto`,
          }}
        />
      </StandaloneSearchBox>
      </div>      
    </div>
  </div>
);

export default (Map);
