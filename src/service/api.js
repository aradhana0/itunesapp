import axios from "axios";

import { APIURL } from "../constants/APIURLs";

export function getiTuensAlbumList () {
    return axios.get(APIURL.ITUNESALBUMLISTURL)
}

