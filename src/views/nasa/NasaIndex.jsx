import { View, StyleSheet } from "react-native";
import Header_nasa from "../../components/nasa/HeaderNasa";
import { useEffect, useState } from "react";
import TodaysImage from "../../components/nasa/TodaysImage";
import { helpHttp } from "../../services/helpHttp";
import {format, sub} from 'date-fns';
import LastFiveDaysImage from "../../components/nasa/LastFiveDaysImage";

const API_KEY='1IwFCSS8lCT7sMLrnNYfxlcLDocZjPoYTCRcxx7b';
const API_URL='https://api.nasa.gov/planetary/apod';
const api = helpHttp();

const NasaIndex = () => {

    const [todaysImage, setTodaysImage] = useState([]);
    const [lastFiveImages, setLastFiveImages] = useState([]);

    useEffect(() => {
        api.get(`${API_URL}?api_key=${API_KEY}`).then((res) => {
            if(!res.err){
                setTodaysImage(res);
            }else{
                setTodaysImage(null);
            }      
        });

        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

        api.get(`${API_URL}?api_key=${API_KEY}&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`).then((res) => {
            if(!res.err){
                setLastFiveImages(res);
            }else{
                setLastFiveImages(null);
            }      
        });   
         
    }, []);

    return (
        <View style={styles.container}>
            <Header_nasa />   
            <TodaysImage todaysImage={todaysImage}/> 
            <LastFiveDaysImage lastFiveImages={lastFiveImages}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(7,26,93,255)',
        paddingHorizontal: 16
    }
});

export default NasaIndex;

