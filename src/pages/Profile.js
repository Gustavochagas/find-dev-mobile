import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Svg, { Circle, Rect } from 'react-native-svg';

function Profile({ navigation }) {
    const [loading, setLoading] = useState(true);
    const githubUsername = navigation.getParam('github_username');

    return (
        <>
            <WebView style={{ flex: 1 }} onLoad={() => setLoading(false)}  source={{ uri: `https://github.com/${githubUsername}` }} />
            {loading &&
                <View style={styles.loading}>
                    <Svg style={styles.svg} width="50px" height="50px" viewBox="0 0 64 64">
                        <Circle stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" cx="32" cy="32" r="30" />
                    </Svg>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#7D40e7',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
});

export default Profile;