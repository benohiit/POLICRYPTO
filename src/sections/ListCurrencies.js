import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { parseObjectToArray, formatToDecimals, calculRateToRender } from '../utils/functions'

const ListCurrencies = (props) => {     //props.euroBTC props.allCurr
    //console.log(JSON.stringify(props.allCurr, null, 4));
    const DATA = parseObjectToArray(props.allCurr)
    //console.log(DATA);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => console.log(item)} >
                <View style={styles.item}>
                    <View style={styles.flagBox}>
                        <Image style={styles.flag}
                            source={{
                                uri: item.flag,
                            }}
                        />
                    </View>
                    <Text style={styles.curr}>{item.id}</Text>
                    <Text style={styles.price}>{calculRateToRender(item.id, item.rate, formatToDecimals(props.euroBTC))}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.section}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ListCurrencies

const styles = StyleSheet.create({
    section: {
        maxHeight: 300,
        width: "80%",
        backgroundColor: "rgba(255,255,255,0.2)",
        alignSelf: "center"
    },
    item: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    curr: {
        fontSize: 20,
        width: "35%",
        alignItems: "center"
    },
    price: {
        width: "35%",
        alignItems: "center",
        fontWeight: "500"
    },
    flagBox: {
        width: "30%",
        alignItems: "center"
    },
    flag: {
        height: 20,
        width: 30,
        resizeMode: "stretch",
    }

})