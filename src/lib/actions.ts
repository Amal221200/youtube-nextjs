"use server"

import axios from "axios"
import fetchOption from "./fetchOptions";
import { VideoItemType } from "./types";
import videos from "@/data";


export async function getVideos(categoryType: string): Promise<VideoItemType[] | null> {
    const options = fetchOption(categoryType)

    try {
        if (process.env.NODE_ENV === "development"){
            return videos
        }
        const response = await axios.request(options);
        return response.data.items
    } catch (error) {
        console.log("fetch error");
        return null
    }
}
