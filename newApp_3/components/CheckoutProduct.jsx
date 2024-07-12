import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import remove from "../assets/remove.png";
import { useCart } from '../context/CartContext';

const width = Dimensions.get('window');

const CheckoutItem = ({ id, title, description, price, image }) => {

    const { removeFromCart } = useCart();

    const handleRemoveFromCart = () => {
        removeFromCart(id);
    }

   
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={image} />
            </View>

            <View style={{ width: 200, marginLeft: 20, }}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>$ {price}</Text>
                <TouchableOpacity onPress={handleRemoveFromCart} style={{ alignSelf: "flex-end", marginTop: 20, marginRight: 25}} >
                <Image source={remove} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CheckoutProduct = () => {

    const { cartItems } = useCart();
   

    return (
        <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <CheckoutItem
                        id={item.id} 
                        description={item.description}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                </TouchableOpacity>
            )}
            scrollEnabled={false}
        />
    )
}

export default CheckoutProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        padding: 10,
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 26
    },
    image: {
        borderRadius: 5,
        height: 210,
        width: 160
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        opacity: 0.7,
        fontSize: 16,
        marginTop: 6
    },
    price: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
        opacity: 0.8
    },
});