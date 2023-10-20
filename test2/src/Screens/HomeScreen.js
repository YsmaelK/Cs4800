
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, Alert } from 'react-native';
import * as Location from "expo-location";


const HomeScreen = () => {
  
    return (
     <SafeAreaView>
      <Text>HomeScreen Hello</Text>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 180,
      height: 180,
      marginLeft: '25%',
      marginTop: '10%'
    }
});
export default HomeScreen