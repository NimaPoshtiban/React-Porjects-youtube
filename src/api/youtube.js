import axios from 'axios'
const KEY='AIzaSyDS8vYoku0rCfuTcxh-fejFCR2y5sZ0qj4';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }
})