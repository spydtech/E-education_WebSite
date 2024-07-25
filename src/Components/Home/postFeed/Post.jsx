import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import { CiCamera } from "react-icons/ci";
import { FaRegPenToSquare, FaRegThumbsUp, FaThumbsUp, FaRegMessage } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EmojiPicker from 'emoji-picker-react';

const initialTweets = [
    {
        id: 1,
        content: "Hello World! This is my first tweet.",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: 1,
            name: "John Doe",
        },
        isLiked: false,
    },
    {
        id: 2,
        content: "Loving the new React features!",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: 2,
            name: "Jane Smith",
        },
        isLiked: true,
    },
    {
        id: 3,
        content: "Hello World! This is my first tweet.",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: 3,
            name: "Ravi ",
        },
        isLiked: false,
    },
    {
        id: 4,
        content: "Loving the new React features!",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: 4,
            name: "Priya",
        },
        isLiked: true,
    },
    {
        id: 5,
        content: "Hello World! This is my first tweet.",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: 5,
            name: "Gopi",
        },
        isLiked: false,
    },
    {
        id: 6,
        content: "Loving the new React features!",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: 6,
            name: "Raman",
        },
        isLiked: true,
    }
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function Post() {
    const [tweetData, setTweetData] = useState({
        id: Math.floor(Math.random() * 100000 + 1),
        content: "",
        createdAt: Date.now(),
        image: "",
        tweetedBy: {
            id: Math.floor(Math.random() * 100000 + 1),
            name: "Mister Kim",
        },
        isLiked: false,
        comments: []
    });
    const [tweets, setTweets] = useState(() => {
        const savedTweets = localStorage.getItem('tweets');
        return savedTweets ? JSON.parse(savedTweets) : initialTweets;
    });
    const [open, setOpen] = useState(false);
    // const [liked, setLiked] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [commentData, setCommentData] = useState("");

    useEffect(() => {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }, [tweets]);

    const handleChange = (e) => {
        const { value } = e.target;
        setTweetData({ ...tweetData, content: value });
    };

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setTweetData({ ...tweetData, image: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePost = () => {
        setTweets([tweetData, ...tweets]);
        setTweetData({
            id: Math.floor(Math.random() * 100000 + 1),
            content: "",
            createdAt: Date.now(),
            image: "",
            tweetedBy: {
                id: Math.floor(Math.random() * 100000 + 1),
                name: "Avatar",
            },
            isLiked: false,
            comments: []
        });
        setOpen(false);
        setShowEmojiPicker(false);
    };

    const onEmojiClick = (emojiObject) => {
        setTweetData({
            ...tweetData,
            content: tweetData.content + emojiObject.emoji
        });
    };

    const toggleLike = (id) => {
        setTweets(tweets.map(tweet =>
            tweet.id === id ? { ...tweet, isLiked: !tweet.isLiked } : tweet
        ));
    };

    const handleCommentChange = (e) => {
        setCommentData(e.target.value);
    };

    const addComment = (id) => {
        setTweets(tweets.map(tweet =>
            tweet.id === id ? {
                ...tweet,
                comments: [...tweet.comments, { id: Math.random(), text: commentData }]
            } : tweet
        ));
        setCommentData("");
    };

    return (
        <>
            <div className="p-4 w-[560px]">
                <div className="flex">
                    <textarea
                        placeholder="Create Post..."
                        rows={2}
                        className="rounded-lg w-full border border-blue-600 text-blue-700 outline-none resize-none text-lg placeholder-custom"
                        onClick={() => setOpen(true)}
                        readOnly
                    />
                </div>
                <div className="flex justify-between items-center mt-4 ">
    <div className="flex justify-center items-center gap-16 text-black">
        <div className="flex flex-row-reverse justify-center items-center gap-2">
            <div>
                Photo
            </div>
            <div>
                <label>
                    <CiCamera className="w-[25px] h-[25px] cursor-pointer text-green-800" />
                    <input type="file" accept="image/*" className="hidden" onChange={handleAddImage} />
                </label>
            </div>
        </div>
        <div className="flex flex-row-reverse justify-center items-center gap-2 ">
            <div>
                Video
            </div>
            <div>

                <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer text-blue-800" />
            </div>
        </div>

        <div className="flex flex-row-reverse justify-center items-center gap-2 ">
            <div>
                Event
            </div>
            <div>
                <AiOutlineCalendar className="w-5 h-5 cursor-pointer text-orange-700" />
            </div>
        </div>

        <div className="flex flex-row-reverse justify-center items-center gap-2 ">
            <div>
                Write Articles
            </div>
            <div>

                <FaRegPenToSquare className="w-5 h-5 cursor-pointer text-red-800" />
            </div>
        </div>

    </div>
</div> 
            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
               
            >
                <Box sx={style}>
                    <textarea
                        placeholder="Write your post..."
                        rows={12}
                        cols={28}
                        className="w-full border border-blue-600 text-blue-700 outline-none resize-none text-lg"
                        onChange={handleChange}
                        value={tweetData.content}
                    />
                    <div className="mt-2 flex justify-between items-center flex-row">
                        <label className="cursor-pointer">
                            <CiCamera className="w-[25px] h-[25px] text-green-800" />
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden "
                                onChange={handleAddImage}
                            />
                        </label>
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded"
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        >
                            Emoji
                        </button>
                        {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded"
                            onClick={handlePost}
                        >
                            Post
                        </button>
                    </div>
                    {tweetData.image && (
                        <div className="mt-2">
                            <img src={tweetData.image} alt="Uploaded" className="w-full h-auto" />
                        </div>
                    )}
                </Box>
            </Modal>

            <div>
                <div className="bg-[#0098F1] text-white flex flex-row justify-around items-center h-[44px] rounded-lg">
                    <div>Filter post by :</div>
                    <div>Popular</div>
                </div>
            </div>

            <div className="mt-4 overflow-y-auto h-[600px] overflow-hidden">
                {tweets.map((tweet) => (
                    <div key={tweet.id} className="p-8">
                        <div className="flex items-center">
                            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                            <span className="ml-2 font-bold">{tweet.tweetedBy.name}</span>
                        </div>
                        <p className="mt-2">{tweet.content}</p>
                        {tweet.image && (
                            <img src={tweet.image} alt="Tweet" className="mt-2 rounded-lg h-[60px] w-[60px]" />
                        )}
                        <div className="mt-2 flex justify-start items-center text-gray-500 border-t border-gray-300 gap-8 py-4">
                            <div
                                className={`flex justify-center items-center flex-row gap-2 text-[#0098F1]  ${tweet.isLiked ? 'text-blue-600' : ''}`}
                                // className={`text-blue-500 hover:text-blue-700 mr-3 ${liked ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => toggleLike(tweet.id)}
                            >
                                <div>{tweet.isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}</div>
                                <div>Likes</div>
                            </div>
                            <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1] cursor-pointer">
                                <div onClick={() => setTweets(tweets.map(t => t.id === tweet.id ? { ...t, showCommentInput: !t.showCommentInput } : t))}><FaRegMessage /></div>
                                <div onClick={() => setTweets(tweets.map(t => t.id === tweet.id ? { ...t, showCommentInput: !t.showCommentInput } : t))}>Comments</div>
                            </div>
                            <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1]">
                                <div><IoShareSocialOutline /></div>
                                <div>Share</div>
                            </div>
                            <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1]">
                                <div><LuSend /></div>
                                <div>Send</div>
                            </div>
                        </div>
                        {tweet.showCommentInput && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="Write a comment..."
                                    className="border border-gray-300 rounded w-full p-2"
                                    value={commentData}
                                    onChange={handleCommentChange}
                                />
                                <button
                                    className="bg-blue-600 text-white py-2 px-4 rounded mt-2"
                                    onClick={() => addComment(tweet.id)}
                                >
                                    Create Comment
                                </button>
                            </div>
                        )}
                        {tweet.comments && tweet.comments.map(comment => (
                            <div key={comment.id} className="ml-4 mt-2">
                                <p className="text-sm text-gray-700">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}












// import React, { useState } from "react";
// import Avatar from '@mui/material/Avatar';
// import { CiCamera } from "react-icons/ci";
// import { FaRegPenToSquare, FaRegThumbsUp, FaThumbsUp, FaRegMessage } from "react-icons/fa6";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { AiOutlineFileImage, AiOutlineVideoCamera, AiOutlineCalendar, AiOutlineFileText } from "react-icons/ai";
// import { LuSend } from "react-icons/lu";
// import Picker from 'emoji-picker-react';

// const initialTweets = [
//     {
//         id: 1,
//         content: "Hello World! This is my first tweet.",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 1,
//             name: "John Doe",
//         },
//         like: <FaRegThumbsUp />,
//         comment: <FaRegMessage />,
//         share: <IoShareSocialOutline />,
//         send: <LuSend />,
//         isLiked: false,
//         comments: [],
//     },
//     {
//         id: 2,
//         content: "Loving the new React features!",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: 2,
//             name: "Jane Smith",
//         },
//         like: <FaRegThumbsUp />,
//         comment: <FaRegMessage />,
//         share: <IoShareSocialOutline />,
//         send: <LuSend />,
//         isLiked: true,
//         comments: [],
//     },
//     // Add more initial tweets as needed
// ];

// export default function Post() {
//     const [tweetData, setTweetData] = useState({
//         id: Math.floor(Math.random() * 100000 + 1),
//         content: "",
//         createdAt: Date.now(),
//         image: "",
//         tweetedBy: {
//             id: Math.floor(Math.random() * 100000 + 1),
//             name: "Mister Kim",
//         },
//         like: <FaRegThumbsUp />,
//         comment: <FaRegMessage />,
//         share: <IoShareSocialOutline />,
//         send: <LuSend />,
//         isLiked: false,
//         comments: [],
//     });
//     const [tweets, setTweets] = useState(initialTweets);
//     const [showPopup, setShowPopup] = useState(false);
//     const [newComment, setNewComment] = useState("");
//     const [selectedTweet, setSelectedTweet] = useState(null);
//     const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//     const handleChange = (e) => {
//         const { value } = e.target;
//         setTweetData({ ...tweetData, content: value });
//     };

//     const handleAddImage = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 setTweetData({ ...tweetData, image: event.target.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter' && !showPopup) {
//             addTweet();
//         }
//     };

//     const addTweet = () => {
//         setTweets([tweetData, ...tweets]);
//         setTweetData({
//             id: Math.floor(Math.random() * 100000 + 1),
//             content: "",
//             createdAt: Date.now(),
//             image: "",
//             tweetedBy: {
//                 id: Math.floor(Math.random() * 100000 + 1),
//                 name: "Mister Kim",
//             },
//             like: <FaRegThumbsUp />,
//             comment: <FaRegMessage />,
//             share: <IoShareSocialOutline />,
//             send: <LuSend />,
//             isLiked: false,
//             comments: [],
//         });
//         setShowPopup(false);
//     };

//     const handleEmojiClick = (event, emojiObject) => {
//         setTweetData({ ...tweetData, content: tweetData.content + emojiObject.emoji });
//     };

//     const toggleLike = (tweetId) => {
//         setTweets(tweets.map(tweet => tweet.id === tweetId ? { ...tweet, isLiked: !tweet.isLiked } : tweet));
//     };

//     const toggleCommentInput = (tweetId) => {
//         if (selectedTweet === tweetId) {
//             setSelectedTweet(null);
//         } else {
//             setSelectedTweet(tweetId);
//             setNewComment("");
//         }
//     };

//     const addComment = (tweetId) => {
//         const updatedTweets = tweets.map(tweet => {
//             if (tweet.id === tweetId) {
//                 return {
//                     ...tweet,
//                     comments: [...tweet.comments, { text: newComment, id: Math.random() }]
//                 };
//             }
//             return tweet;
//         });
//         setTweets(updatedTweets);
//         setNewComment("");
//         setSelectedTweet(null);
//     };

//     return (
//         <>
//             <div className="p-4 w-[560px]">
//                 <div className="flex">
//                     <textarea
//                         placeholder="Create Post..."
//                         rows={2}
//                         className="rounded-lg w-full border border-blue-600 text-blue-700 outline-none resize-none text-lg placeholder-custom"
//                         onChange={handleChange}
//                         value={tweetData.content}
//                         onClick={() => setShowPopup(true)}
//                     />
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                     <div className="flex justify-center items-center gap-16 text-black">
//                         <div className="flex flex-row-reverse justify-center items-center gap-2">
//                             <div>Photo</div>
//                             <div>
//                                 <label>
//                                     <CiCamera className="w-[25px] h-[25px] cursor-pointer text-green-800" />
//                                     <input type="file" accept="image/*" className="hidden" onChange={handleAddImage} />
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="flex flex-row-reverse justify-center items-center gap-2">
//                             <div>Video</div>
//                             <div>
//                                 <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer text-blue-800" />
//                             </div>
//                         </div>
//                         <div className="flex flex-row-reverse justify-center items-center gap-2">
//                             <div>Event</div>
//                             <div>
//                                 <AiOutlineCalendar className="w-5 h-5 cursor-pointer text-orange-700" />
//                             </div>
//                         </div>
//                         <div className="flex flex-row-reverse justify-center items-center gap-2">
//                             <div>Write Articles</div>
//                             <div>
//                                 <FaRegPenToSquare className="w-5 h-5 cursor-pointer text-red-800" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <div className="bg-[#0098F1] text-white flex flex-row justify-around items-center h-[44px] rounded-lg">
//                     <div>Filter post by :</div>
//                     <div>Popular</div>
//                 </div>
//             </div>

//             <div className="mt-4 overflow-y-auto h-[600px] overflow-hidden">
//                 {tweets.map((tweet) => (
//                     <div key={tweet.id} className="p-8">
//                         <div className="flex items-center">
//                             <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
//                             <span className="ml-2 font-bold">{tweet.tweetedBy.name}</span>
//                         </div>
//                         <p className="mt-2">{tweet.content}</p>
//                         {tweet.image && (
//                             <img src={`${tweet.image}`} alt="Tweet" className="mt-2 rounded-lg" />
//                         )}
//                         <div className="mt-2 flex justify-start items-center text-gray-500 border-t border-gray-300 gap-8 py-4">
//                             <div className="flex justify-center items-center flex-row gap-2">
//                                 <div
//                                     onClick={() => toggleLike(tweet.id)}
//                                     className={`cursor-pointer ${tweet.isLiked ? 'text-blue-500' : 'text-gray-500'}`}
//                                 >
//                                     <FaRegThumbsUp />
//                                 </div>
//                                 <div>Likes</div>
//                             </div>
//                             <div className="flex justify-center items-center flex-row gap-2">
//                                 <div
//                                     onClick={() => toggleCommentInput(tweet.id)}
//                                     className="cursor-pointer text-gray-500"
//                                 >
//                                     <FaRegMessage />
//                                 </div>
//                                 <div>Comments</div>
//                             </div>
//                             <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1]">
//                                 <div>{tweet.share}</div>
//                                 <div>Share</div>
//                             </div>
//                             <div className="flex justify-center items-center flex-row gap-2 text-[#0098F1]">
//                                 <div>{tweet.send}</div>
//                                 <div>Send</div>
//                             </div>
//                         </div>
//                         {selectedTweet === tweet.id && (
//                             <div>
//                                 <input
//                                     type="text"
//                                     placeholder="Add a comment..."
//                                     value={newComment}
//                                     onChange={(e) => setNewComment(e.target.value)}
//                                     className="border border-gray-300 rounded-lg w-full p-2 mt-2"
//                                 />
//                                 <button
//                                     onClick={() => addComment(tweet.id)}
//                                     className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//                                 >
//                                     Create Comment
//                                 </button>
//                             </div>
//                         )}
//                         <div className="mt-2">
//                             {tweet.comments && tweet.comments.map((comment, index) => (
//                                 <div key={index} className="border-t border-gray-300 mt-2 pt-2">
//                                     <p>{comment.text}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {showPopup && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white rounded-lg p-4 w-[500px]">
//                         <textarea
//                             placeholder="What's on your mind?"
//                             rows={4}
//                             className="rounded-lg w-full border border-blue-600 text-blue-700 outline-none resize-none text-lg placeholder-custom"
//                             onChange={handleChange}
//                             value={tweetData.content}
//                         />
//                         {tweetData.image && (
//                             <img src={`${tweetData.image}`} alt="Tweet" className="mt-2 rounded-lg" />
//                         )}
//                         <div className="flex justify-between items-center mt-4">
//                             <div className="flex justify-center items-center gap-8">
//                                 <label>
//                                     <AiOutlineFileImage className="w-6 h-6 cursor-pointer text-gray-500" />
//                                     <input type="file" accept="image/*" className="hidden" onChange={handleAddImage} />
//                                 </label>
//                                 <div>
//                                     <button
//                                         className="text-lg font-semibold text-blue-500"
//                                         onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//                                     >
//                                         Emoji
//                                     </button>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={addTweet}
//                                 className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                             >
//                                 Post
//                             </button>
//                         </div>
//                         {showEmojiPicker && (
//                             <div className="absolute z-50 mt-2">
//                                 <Picker onEmojiClick={handleEmojiClick} />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
