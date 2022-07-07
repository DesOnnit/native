import React from 'react';
import { news } from '../../utils/auth'
import { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import Card from '../Card/Card';
import { styles } from '../../style/news'
import  Header  from '../Header/Header';
import { usePagination } from "react-use-pagination";
export default function News ({ navigation }){
    const [uncos, setUncos] = useState([])
    const getNews = async () => {
        let response = await news()
        setUncos(response.data.news.concat(response.data.news))
    }
    useEffect(() => {
        getNews()
    }, [])
    const {
        currentPage,
        totalPages,
        setNextPage,
        setPreviousPage,
        nextEnabled,
        previousEnabled,
        startIndex,
        endIndex,
        setPage,
    } = usePagination({ totalItems: uncos.length, initialPageSize: 10 });
    const handleNavigate = (id) => {
        navigation.navigate('NewsPage', {
            id: id
        })
      }
    return (
        <View style={styles.news}>
            <Header />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.container}>
                        {uncos.slice(startIndex, endIndex + 1).map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                handleNavigate={handleNavigate}
                                navigate='true' />
                        ))}
                    </View>
                    <View style={styles.paginate}>
                        <View style={styles.button}>
                            <Button onPress={setPreviousPage} disabled={!previousEnabled} title="Предыдущая страница" />
                        </View>
                        <View style={styles.paginate__buttons}>
                            {[...Array(totalPages).keys()].map((el) => (
                                <Text style={styles[`${el === currentPage ? 'paginate__item' : 'paginate__item_disabled'}`]}
                                    onPress={() => setPage(el)}
                                    key={el}
                                    disabled={el === currentPage ? true : false}
                                >
                                    {el + 1}
                                </Text>
                            ))}
                        </View>
                        <View style={styles.button}>
                            <Button onPress={setNextPage} disabled={!nextEnabled} title="Следующая страница" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
} 
