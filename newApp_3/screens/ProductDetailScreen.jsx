import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import shoppingBag from "../assets/shoppingBag.png";
import Logo from "../assets/Logo.png";
import Export from "../assets/Export.png";
import bleach from "../assets/bleach.png";
import dry from "../assets/dry.png";
import iron from "../assets/iron.png";
import wash from "../assets/wash.png";
import shipping from "../assets/Shipping.png";
import Up from "../assets/Up.png";

const width = Dimensions.get('window').width / 1.5;
const height = Dimensions.get('window').height / 2;
const customWidth = Dimensions.get('window').width;

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { addToCart, cartItems } = useCart();
    const cartItemCount = cartItems.length;
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    console.log(product);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleAddToCart = () => {
        addToCart(product);
    };



    return (
        <View style={styles.container}>
            <View style={{ margin: 10, zIndex: 1000 }}>
                {/* <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} navigation={navigation} /> */}
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                    <View>
                        <TouchableOpacity onPress={toggleMenu}>
                            <Ionicons name={isMenuOpen ? "close-outline" : "menu-outline"} size={33} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image source={Logo} style={{ cursor: "pointer" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: 10 }}>
                        <View style={{ marginRight: 10 }}>
                            <Ionicons name="search-outline" size={33} />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
                                <Image source={shoppingBag} />
                                {cartItemCount > 0 ? (
                                    <View style={styles.cartItemCountContainer}>
                                        <Text style={styles.cartItemCountText}>{cartItemCount}</Text>

                                    </View>
                                ) : (null)}

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView >
                <View style={styles.detail}>
                    <Image source={{ uri: product.image }} style={styles.productImage} />

                    <View style={{ marginHorizontal: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
                            <Text style={styles.productName} numberOfLines={1}>{product.title}</Text>
                            <Image source={Export}  style={{ height: 33, width: 33 }}/>
                        </View>
                        <Text style={styles.productDescription} numberOfLines={1}>{product.description}</Text>
                        <Text style={styles.productPrice}>${product.price}</Text>
                    </View>

                    <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                        <Text style={{ marginVertical: 15, fontSize: 22, }}>Materials</Text>
                        <Text style={{ fontSize: 19, color: "gray" }}>We work with monitoring programmes to
                            ensure compliance with safety, health and
                            quality standards for our products.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", marginVertical: 5, marginRight: 20 }}>
                            <Image source={bleach} style={{ height: 36, width: 36 }} />
                            <Text style={{ paddingRight: 20, fontSize: 17, color: "gray", marginTop: 10 }}>Do no use bleach</Text>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", marginVertical: 5, marginRight: 20 }}>
                            <Image source={dry} style={{ height: 36, width: 36 }} />
                            <Text style={{ paddingRight: 20, fontSize: 17, color: "gray", marginTop: 10 }}>Do not tumble dry</Text>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", marginVertical: 5, marginRight: 20 }}>
                            <Image source={wash} style={{ height: 36, width: 36 }} />
                            <Text style={{ paddingRight: 20, fontSize: 18, color: "gray", marginTop: 10 }}>Dry clean with tetrachloroethylene</Text>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", marginVertical: 5, marginRight: 20 }}>
                            <Image source={iron} style={{ height: 36, width: 36 }} />
                            <Text style={{ paddingRight: 20, fontSize: 18, color: "gray", marginTop: 10 }}>Iron at a maximum of 110</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "gray", width: 300, height: 0.8, marginBottom: 10, alignSelf: "center" }}></View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 15, marginHorizontal: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", }}>
                            <View>
                                <Image source={shipping} style={{ height: 40, width: 40 }} />
                            </View>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={{ fontSize: 17, marginVertical: 1 }}>Free Flat Rate Shipping</Text>
                                <Text style={{ fontSize: 17, color: "grey", marginVertical: 1 }}>Estimated to be delivered on</Text>
                                <Text style={{ fontSize: 17, color: "grey", marginVertical: 1 }}>09/11/2021 - 12/11/2021.</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={Up} style={{ height: 40, width: 40 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={[styles.footer]}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
                   <Ionicons name="add" color="white" size={40} />
                    <Text style={{ color: "white", marginRight: 30, marginTop: 10, fontSize: 20 }}>Add to Basket</Text>
                </View>
                <View>
                    <Ionicons name="heart-outline" color="white" size={40} />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    cartItemCountContainer: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    cartItemCountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

    detail: {
        marginTop: 20,
        marginBottom: 50,
        paddingBottom: 100
    },

    productImage: {
        width: width,
        height: height,
        resizeMode: 'cover',
        alignSelf: "center",
        marginVertical: 20
    },

    productName: {
        fontSize: 20,
    },

    productDescription: {
        marginVertical: 10,
        fontSize: 19,

    },

    productPrice: {
        color: "tomato",
        fontSize: 22,
    },

    footer: {
        bottom: 0,
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: customWidth,
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 10
    }

})
export default ProductDetailScreen;
