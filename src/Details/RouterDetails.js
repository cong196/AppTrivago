import React from 'react';
import {
    Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Details_Info from './Details_Info';
import Ratings from './Ratings';
import MapView from './MapView';
export const TbDetails = TabNavigator(
    {
        TabDetails: {
            screen: Details_Info,
            navigationOptions: {
                tabBarLabel: 'Details',
            }
        },
        TabRatings: {
            screen: Ratings,
            navigationOptions: {
                tabBarLabel: 'Ratings'
            }
        },
        TabMapView: {
            screen: MapView,
            navigationOptions: {
                tabBarLabel: 'Map'
            }
        }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#D2D8DD',
            }
        }
    }
);