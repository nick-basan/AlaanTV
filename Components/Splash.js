import React from 'react';
import { Text, ImageBackground, StyleSheet,Button} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        paddingTop: 400,
        color: '#fff',
        fontSize: 18,
        marginVertical: 0,
        marginHorizontal: 20,
        alignContent: 'center',
    }
});

export default class Splash extends React.Component {
    static navigationOptions = {
        title: 'Welcome', header: null
    };
    render() {

        return (
            <ImageBackground
                source={require('../image/bg-splash.jpg')}
                style={styles.container}>
                <Text style={styles.p}>
                    شغّل الإشعارات واحصل على التحديثات لن نرسل رسائل غير مرغوب فيها ويمكنك إيقافها إخطارات في أي وقت</Text>
                <Button
                                   title="Go to Next"
                                   onPress={() => this.props.navigation.navigate('Second')}/>
            </ImageBackground>

        )
    }
}



