import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Logo from "../assets/Logo.png";
import Ionicons from "react-native-vector-icons/Ionicons"
import CheckoutProduct from "../components/CheckoutProduct";
import shoppingBag from "../assets/shoppingBag.png";
import { useCart } from "../context/CartContext";

const CheckoutScreen = ({ navigation }) => {

    const { cartItems } = useCart();
    const cartItemCount = cartItems.length;

    const totalCost = cartItems.reduce((sum, item) => sum + parseFloat(item.price) || 0, 0);


    return (
        <View style={styles.container}>
            <ScrollView style={ styles.scrollViewContent }>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20, }}>
                    <View>

                    </View>
                    <View> 

                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Image source={Logo} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 16 }}>
                        <Ionicons name="search-outline" size={35} />
                    </View>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Text style={{ textAlign: "center", fontSize: 25 }}>CHECKOUT</Text>
                    <View style={{ width: 130, backgroundColor: "gray", height: 0.5, alignItems: "center", marginVertical: 10, marginHorizontal: "auto" }} />
                </View>

                <CheckoutProduct />
            </ScrollView>

            <View style={[styles.footer]}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 20, marginHorizontal: 25 }}>
                    <Text style={{ color: "gray", marginLeft: 10, fontSize: 20 }}>EST. TOTAL</Text>
                    <Text style={{ color: "red", marginRight: 20, fontSize: 20 }}>${totalCost.toFixed(2)}</Text>
                </View>
                <View style={{ height: 70, width: 420, backgroundColor: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={shoppingBag} style={{ height: 45, width: 45, color: "#fff", marginRight: 15 }} />

                    {cartItemCount > 0 ? (
                        <View style={styles.cartItemCountContainer}>
                            <Text style={styles.cartItemCountText}>{cartItemCount}</Text>
                        </View>
                    ) : null
                    }

                    <Text style={{ color: "white", fontSize: 25, marginLeft: 15 }}>Checkout</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    scrollViewContent: {
        paddingBottom: 100,
    },

    cartItemCountContainer: {
        position: 'absolute',
        top: 20,
        right: 250,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    cartItemCountText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },

    footer: {
        bottom: 0,
        position: "fixed",
    }
})

export default CheckoutScreen;