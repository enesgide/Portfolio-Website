import React, { useState } from "react";
import useFetch from './useFetch.js'

export const getIdFromUsername = (username) => {
    const url = `https://users.roblox.com/v1/users/search?keyword=${username}&limit=10`
    
    return fetch(url)
        .then(res => {
            if (!res.ok) throw Error("getIdFromUsername() server error");
            return res.json();
        })
        .then(data => {
            // const user = data.data.filter((user) => user.name.toLowerCase() === username.toLowerCase())
            const user = data.data.find((user) => user.name.toLowerCase() === username.toLowerCase());
            return user ? user.id : null;
        })
        .catch(err => {
            console.log(err)
        })
}

export const getGamesFromId = (userId) => {
    const url = `https://games.roblox.com/v2/users/${userId}/games?accessFilter=Public&sortOrder=Asc&Limit=10`
    
    return fetch(url)
        .then(res => {
            if (!res.ok) throw Error("getGamesFromId() server error");
            return res.json();
        })
        .then(data => {
            console.log("Found game data:");
            console.log(data);
            return data;
            // Return data.data. Iterate (map), each iteration is a game/place
        })
        .catch(err => console.log(err))
}