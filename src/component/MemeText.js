import React, { useEffect, useState } from "react";

export default function MemeText() {
    const api_url = 'https://api.imgflip.com/get_memes';
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: ""
    });
    const [memesData, setMemesData] = useState([])

    // async function getMemeImage(e) {
    //     e.preventDefault();
    //     let response = await fetch(api_url).then((response) => response.json());
    //     let memes = await response.data.memes;
    //     let random = Math.floor(Math.random() * memes.length)
    //     let memeUrl = memes[random].url
    //     // console.log(random);
    //     // console.log(memes[random].url);
    //     // console.log(memes);
    //     setMeme(prevMemes => ({
    //         ...prevMemes,
    //         memeImage: memeUrl
    //     }));
    // }

    useEffect(()=>{
        fetch(api_url).then(res => res.json()).then(data => setMemesData(data.data.memes))
    }, [])

    function getMemeImage(e) {
        e.preventDefault();
        let random = Math.floor(Math.random() * memesData.length);
        setMeme(prev => ({
            ...prev,
            memeImage: memesData[random].url
        }))
    }

    console.log(meme)

    function handleChange(event) {
        const {name, value} = event.target
        console.log(event.target.name)
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="meme-container">
            <form className="meme-form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="input meme-input-top"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="textt"
                    placeholder="Bottom Text"
                    className="input meme-input-bottom"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="meme-button-submit"
                    onClick={getMemeImage}
                >
                    Get New Image
                </button>
            </form>
            <div className="meme-image-container">
                <figure><img src={meme.memeImage} alt={meme} className="meme-image" /></figure>
                <p className="meme-top-text">{meme.topText}</p>
                <p className="meme-bottom-text">{meme.bottomText}</p>
            </div>
        </div>
    )
}