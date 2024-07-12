import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import addCircle from "../assets/add_circle.png";
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window');

const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    const navigation = useNavigation();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product })}>
                    <Image style={styles.image} source={{ uri: product.image }} />

                </TouchableOpacity>
                <TouchableOpacity onPress={handleAddToCart} style={{ alignSelf: "flex-end", position: "absolute", top: 216, right: 13, fontSize: 30 }}>
                    <Image source={addCircle} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{product.title}</Text>
                <Text style={styles.description} numberOfLines={2} ellipsizeMode='tail'>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </View>
        </View>
    );
};

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleProducts();
    }, []);

    const handleProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (response) {
                const data = await response.json();
                setProducts(data);
                
            }
        } catch (error) {
            console.log("Error fetching Products", error);
        }
    };

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <ProductItem product={item} />
            )}
            scrollEnabled={false}
        />
    );
};

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 20,
        alignContent: "center"
    },
    product: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 2,
    },
    image: {
        width: width,
        height: 250,
        borderRadius: 5,
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