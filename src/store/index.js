import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabScreen = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const renderContent = (tab) => {
    switch (tab) {
      case 'Tab1':
        return (
          <View style={styles.contentContainer}>
            <Text>Contenido de la pestaña 1</Text>
          </View>
        );
      case 'Tab2':
        return (
          <View style={styles.contentContainer}>
            <Text>Contenido de la pestaña 2</Text>
          </View>
        );
      case 'Tab3':
        return (
          <View style={styles.contentContainer}>
            <Text>Contenido de la pestaña 3</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Tab1' && styles.activeTab]}
          onPress={() => setActiveTab('Tab1')}>
          <Text>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Tab2' && styles.activeTab]}
          onPress={() => setActiveTab('Tab2')}>
          <Text>Tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Tab3' && styles.activeTab]}
          onPress={() => setActiveTab('Tab3')}>
          <Text>Tab 3</Text>
        </TouchableOpacity>
      </View>
      {renderContent(activeTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: 'blue',
  
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabScreen;
