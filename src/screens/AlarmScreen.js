import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function Alarms({ navigation }) {
    return (
        <View style={{ flex: 1}}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", height: 50}}>
                <View style={{backgroundColor: "#3BA9E5", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 4, marginHorizontal: 1}}>
                    <Text>Nokia</Text>
                </View>
                
                <View style={{backgroundColor: "#7E8386", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 4,  marginHorizontal: 1}}>
                    <Text>Ericsson</Text>
                </View>
                
                <View style={{backgroundColor: "#7E8386", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 4,  marginHorizontal: 1}}>
                    <Text>Huawei</Text>
                </View>

                <View style={{backgroundColor: "#7E8386", flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 4,  marginHorizontal: 1}}>
                    <Text>SOEM</Text>
                </View>
            </View>

            <ScrollView style={{marginTop: 8}}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", height: 20}}>
                    <View style={{backgroundColor: "#e9ecef", flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 1}}>
                        <Text style={{fontSize: 10, fontWeight: "bold"}}>Site</Text>
                    </View>
                    
                    <View style={{backgroundColor: "#e9ecef", flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 1}}>
                        <Text style={{fontSize: 10, fontWeight: "bold"}}>Cell</Text>
                    </View>
                    
                    <View style={{backgroundColor: "#e9ecef", flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 1}}>
                        <Text style={{fontSize: 10, fontWeight: "bold"}}>Tech.</Text>
                    </View>

                    <View style={{backgroundColor: "#e9ecef", flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 1}}>
                        <Text style={{fontSize: 10, fontWeight: "bold"}}>Time</Text>
                    </View>

                    <View style={{backgroundColor: "#e9ecef", flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 1}}>
                        <Text style={{fontSize: 10, fontWeight: "bold"}}>Date</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
} 