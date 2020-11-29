import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

function Block({
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  shadow,
  space,
  fluid,
  height,
  shadowColor,
  card,
  radius,
  width,
  safe,
  children,
  style,
  ...rest
}) {

  const styleBlock = [
    row && staticStyle.row,
    flex && { flex: flex === true ? 1 : flex },
    center && staticStyle.center,
    middle && staticStyle.middle,
    top && staticStyle.top,
    bottom && staticStyle.bottom,
    right && staticStyle.right,
    left && staticStyle.left,
    space && { justifyContent: `space-${space}` },
    shadow && staticStyle.shadow,
    fluid && staticStyle.fluid,
    card && staticStyle.card,
    height && { height },
    width && { width },
    shadowColor && { shadowColor },
    radius && { borderRadius: radius },
    style,
  ];

  if (safe) {
    return (
      <SafeAreaView style={styleBlock} {...rest}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={styleBlock} {...rest}>
      {children}
    </View>
  );
}

const staticStyle = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  card: {
    borderRadius: 6.4,
    borderWidth: 0.8,
    borderColor: '#808080',
  },
  shadow: {
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 1,
  },
  fluid: {
    width: 'auto',
  },
})

export default Block;