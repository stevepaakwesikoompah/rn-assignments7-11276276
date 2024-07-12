import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
//const { height } = Dimensions.get("window")

const SideMenu = ({ isOpen, toggleMenu, navigation }) => {
    const [animation] = useState(new Animated.Value(isOpen ? 0 : -width));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isOpen ? 0 : -width,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isOpen]);

    const handleNavigation = (screen) => {
        toggleMenu();
        navigation.navigate(screen);
    };

    return (
        <Animated.View style={[styles.menuContainer, { transform: [{ translateX: animation }] }]}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={toggleMenu} style={styles.closeIcon}>
                    <Ionicons name="close-outline" size={33} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('Home')}>
                    <Text style={styles.menuItem}>Koompah Steve Paa kwesi</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('')}>
                    <Text style={styles.menuItem}>Store</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('')}>
                    <Text style={styles.menuItem}>Locations</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('')}>
                    <Text style={styles.menuItem}>Blog</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('')}>
                    <Text style={styles.menuItem}>Jewelery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('')}>
                    <Text style={styles.menuItem}>Electronic</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('')}>
                    <Text style={styles.menuItem}>Clothing</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: -25,
        width: width,
        height: 650,
        zIndex: 1,

    },
    menu: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        width: width * 0.7,
        height: 180
    },
    closeIcon: {
        alignSelf: 'flex-end',
    },
    menuItem: {
        fontSize: 22,
        marginVertical: 16,
        paddingVertical: 10
    },
});

export default SideMenu;