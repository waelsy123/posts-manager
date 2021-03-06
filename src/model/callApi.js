import { POSTS_URL, USERS_URL } from "../constants/api";
import fetch from 'isomorphic-fetch';

const callApi = (url, cb) => {
  fetch(url)
    .then(res => res.json())
    .then(
      (result) => cb(result),
      (err) => {
        cb(err);
        console.log(err)
      }
    )
}

export const getAllPosts = (cb) => callApi(POSTS_URL, cb);
export const getPost = (postId, cb) => callApi(`${POSTS_URL}/${postId}`, cb);
export const getUser = (userId, cb) => callApi(`${USERS_URL}/${userId}`, cb);
