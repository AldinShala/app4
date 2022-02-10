import * as React from 'react';
import { ImageBackground, ScrollView,StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.workoutCard1}>
                <ImageBackground imageStyle={styles.ImageBackground}
                source={{
                uri: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                }} style={styles.image}>
                    <Text style={styles.homeText}>Fullbody</Text>
                    <Text style={styles.greyText}>Strength Focused</Text>
                </ImageBackground>
            </View>

            <View style={styles.workoutCard2}>
                <ImageBackground imageStyle={styles.ImageBackground}
                source={{
                uri: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }} style={styles.image}>
                    <Text style={styles.homeText}>Push Pull Legs</Text>
                    <Text style={styles.greyText}>Hypertrophy Focused</Text>
                </ImageBackground>

            </View>

            <View style={styles.workoutCard3}>
                <ImageBackground imageStyle={styles.ImageBackground}
                source={{
                uri: 'https://images.unsplash.com/photo-1598266663439-2056e6900339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                }} style={styles.image}>
                    <Text style={styles.homeText}>Bodyweight</Text>
                    <Text style={styles.greyText}>Strength & Hypertrophy</Text>
                </ImageBackground>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#15202B',
    },
    
    workoutCard1: {
        flex: 1,
        position: 'absolute',
        width: '90%',
        height: 150,
        marginTop: 50,
        marginLeft: 25,
        backgroundColor: '#253341',
        borderRadius: 30,
    },
     
    fullbodyText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 250,
    },   

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    
    ImageBackground: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 1, 
        width: 170,
    },

    homeText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        paddingLeft: 150,
    },

     greyText: {
        color: 'grey',
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        paddingLeft: 150,
        paddingBottom: 10,
    },

    workoutCard2: {
        flex: 1,
        position: 'absolute',
        width: '90%',
        height: 150,
        marginTop: 230,
        marginLeft: 25,
        backgroundColor: '#253341',
        borderRadius: 30,
    },

    workoutCard3: {
        flex: 1,
        position: 'absolute',
        width: '90%',
        height: 150,
        marginTop: 415,
        marginLeft: 25,
        backgroundColor: '#253341',
        borderRadius: 30,
    },
})