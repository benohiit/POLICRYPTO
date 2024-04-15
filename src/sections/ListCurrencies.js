import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { parseObjectToArray, formatToDecimals } from '../utils/functions'

const ListCurrencies = (props) => {     //props.euroBTC props.allCurr
    //console.log(JSON.stringify(props.allCurr, null, 4));
    const DATA = parseObjectToArray(props.allCurr)
    //console.log(DATA);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => console.log(item)} >
                <View style={styles.item}>
                    <Image style={styles.flag}
                        source={{
                            uri: item.flag,
                        }}
                    />
                    <Text style={styles.curr}>{item.id}</Text>
                    <Text style={styles.price}>{item.rate * parseFloat(formatToDecimals(props.euroBTC))}</Text>
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
        maxHeight: 200,
        backgroundColor: "rgba(255,255,255,0.2)",
    },
    item: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    curr: {
        fontSize: 20,
        width: "40%"
    },
    price: {
        width: "40%"
    },
    flag: {
        height: 20,
        width: 30,
        resizeMode: "stretch",
    }

})