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
        console.log("fetch error");
        return null
    }
}
