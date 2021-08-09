import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export const AnimationWrapper = () => {
  return (
    <WebView
      source={{
        uri: 'https://sse-animated-guys.netlify.app/',
      }}
    />
  );
};
