"use server"

import axios from "axios"
import fetchOption from "./fetchOptions";
import { VideoItemType } from "./types";


export async function getVideos(categoryType: string): Promise<VideoItemType[] | null> {
    const options = fetchOption(categoryType)

    try {
        const response = await axios.request(options);
        return response.data.items
    } catch (error) {
        console.error(error);
        return null
    }
}

export async function getChannelDetail(id: string) {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/channels',
        params: {
            part: 'snippet,statistics',
            id
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        return response.data.items[0]
    } catch (error) {
        console.error(error);
    }
}