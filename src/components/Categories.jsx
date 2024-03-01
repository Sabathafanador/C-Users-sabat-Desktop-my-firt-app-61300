import React from "react";
import { View, Text, FlatList } from "react-native";
import categories from "../data/categories.json";

function Categories() {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(category) => category.id.toString()}
      />
    </View>
  );
}

export default Categories;
