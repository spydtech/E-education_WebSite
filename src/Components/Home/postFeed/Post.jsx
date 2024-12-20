import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { CiCamera } from "react-icons/ci";
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineVideoCamera, AiOutlineCalendar } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import EmojiPicker from "emoji-picker-react";

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
    comments: [],
  },
];

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
    comments: [],
  });

  const [tweets, setTweets] = useState(() => {
    const savedTweets = localStorage.getItem("tweets");
    return savedTweets ? JSON.parse(savedTweets) : initialTweets;
  });

  const [open, setOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [editTweetId, setEditTweetId] = useState(null);
  const [visibleComments, setVisibleComments] = useState({});
  const [replyData, setReplyData] = useState({});

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTweetData({ ...tweetData, content: value });
  };
  const handleReplyChange = (tweetId, commentId, value) => {
    setReplyData((prev) => ({
      ...prev,
      [`${tweetId}-${commentId}`]: value,
    }));
  };

  const handleAddMedia = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (file.type.startsWith("image/")) {
          setTweetData({ ...tweetData, image: event.target.result });
        } else if (file.type.startsWith("video/")) {
          setTweetData({ ...tweetData, video: event.target.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (editTweetId) {
      setTweets(
        tweets.map((tweet) =>
          tweet.id === editTweetId ? { ...tweetData, id: editTweetId } : tweet
        )
      );
      setEditTweetId(null);
    } else {
      setTweets([tweetData, ...tweets]);
    }
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
      comments: [],
    });
    setOpen(false);
    setShowEmojiPicker(false);
  };

  const onEmojiClick = (emojiObject) => {
    setTweetData({
      ...tweetData,
      content: tweetData.content + emojiObject.emoji,
    });
  };

  const toggleLike = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, isLiked: !tweet.isLiked } : tweet
      )
    );
  };

  const handleCommentChange = (e) => {
    setCommentData(e.target.value);
  };

  const addComment = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              comments: [
                ...(tweet.comments || []),
                { id: Math.random(), text: commentData },
              ],
            }
          : tweet
      )
    );
    setCommentData("");
  };

  const toggleCommentInput = (id) => {
    setVisibleComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };
  // Functionality for liking and replying to comments

  const toggleCommentLike = (tweetId, commentId) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, isLiked: !comment.isLiked }
                  : comment
              ),
            }
          : tweet
      )
    );
  };
  const addReply = (tweetId, commentId) => {
    const replyText = replyData[`${tweetId}-${commentId}`];
    if (!replyText) return;

    setTweets(
      tweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...(comment.replies || []),
                        { id: Math.random(), text: replyText, isLiked: false },
                      ],
                    }
                  : comment
              ),
            }
          : tweet
      )
    );

    setReplyData((prev) => ({
      ...prev,
      [`${tweetId}-${commentId}`]: "",
    }));
  };

  const editTweet = (tweet) => {
    setTweetData(tweet);
    setEditTweetId(tweet.id);
    setOpen(true);
  };

  return (
    <div className="lg:w-[500px] xl:w-[620px] 2xl:w-[800px]  w-auto rounded-lg bg-[#0098f1]">
      <div className="p-4">
        <div className="flex">
          <textarea
            placeholder="Create Post..."
            rows={2}
            className="rounded-lg w-full border  outline-none resize-none text-lg placeholder-custom"
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div
            onClick={() => setOpen(true)}
            className="flex flex-row-reverse  cursor-pointer justify-center items-center gap-2"
          >
            <div className="hidden md:block">Photo</div>
            <div>
              <label>
                <CiCamera className="w-[25px] h-[25px] cursor-pointer " />
                {/* <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAddImage}
                /> */}
              </label>
            </div>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex flex-row-reverse cursor-pointer justify-center items-center gap-2"
          >
            <div className="hidden md:block">Video</div>
            <div>
              <AiOutlineVideoCamera className="w-5 h-5 cursor-pointer " />
            </div>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex  cursor-pointer flex-row-reverse justify-center items-center gap-2"
          >
            <div className="hidden md:block">Event</div>
            <div>
              <AiOutlineCalendar className="w-5 h-5 cursor-pointer " />
            </div>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex  cursor-pointer flex-row-reverse justify-center items-center gap-2"
          >
            <div className="hidden md:block">Articles</div>
            <div>
              <FaRegPenToSquare className="w-5 h-5 cursor-pointer " />
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[400px] lg:w-[600px] border-2  shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <textarea
              placeholder="What is happening?!"
              rows={12}
              cols={28}
              className="w-full border border-[#0098f1] text-black rounded-lg outline-none resize-none text-lg"
              onChange={handleChange}
              value={tweetData.content}
            />
            <div className="mt-2 flex justify-between items-center">
              <label className="cursor-pointer">
                <CiCamera className="w-[25px] h-[25px] text-black" />

                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleAddMedia}
                />
              </label>
              <button
                className="bg-[#0098f1] text-white py-2 px-4 rounded"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                Emoji
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-16 right-8 z-10">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}
              <button
                className="bg-[#0098f1] text-white py-2 px-4 rounded"
                onClick={handlePost}
              >
                {editTweetId ? "Update" : "Post"}
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="bg-white mt-3 pl-3 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent overflow-y-auto max-h-[350px] ">
        {tweets.map((tweet) => (
          <div
            className="p-4 border  border-gray-300 rounded-lg mt-4"
            key={tweet.id}
          >
            <div className="flex justify-between">
              <Avatar alt={tweet.tweetedBy.name} src="" />
              <div className="ml-2">
                <div className="font-semibold">{tweet.tweetedBy.name}</div>
                <div className="text-sm text-gray-500">
                  {new Date(tweet.createdAt).toLocaleString()}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <FaEdit
                  className="text-[#0098f1] cursor-pointer"
                  onClick={() => editTweet(tweet)}
                />
                <FaTrash
                  className="text-red-600 cursor-pointer"
                  onClick={() => deleteTweet(tweet.id)}
                />
              </div>
            </div>
            <div className="mt-2">{tweet.content}</div>
            {tweet.image && (
              <img
                src={tweet.image}
                alt="Tweet"
                className="mt-2 max-w-full h-auto"
              />
            )}
            {/* Storage Size: LocalStorage typically allows 5MB of data per domain. A single video in Base64 format can easily exceed this limit */}
            {tweet.video && (
              <video controls src={tweet.video} className="mt-2 w-full h-96">
                Your browser does not support the video tag.
              </video>
            )}
            <div className="mt-2 flex justify-between items-center border-t  gap-8 py-4">
              {/* Like Section */}
              <div
                className="flex justify-center items-center flex-row gap-2 text-[#0098F1] mr-4 cursor-pointer"
                onClick={() => toggleLike(tweet.id)}
              >
                <div>
                  {tweet.isLiked ? (
                    <FcLike className="w-5 h-5" />
                  ) : (
                    <FcLikePlaceholder className="w-5 h-5" />
                  )}
                </div>
                <div className="ml-1">
                  {tweet.isLiked ? "" : "Like"}
                  {tweet.isLiked && (
                    <span className=" w-auto text-lg rounded-full  text-[#0098F1]">
                      1{/* like */}
                    </span>
                  )}
                </div>
              </div>

              {/* Comment Toggle Section */}
              <div
                className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]"
                onClick={() => toggleCommentInput(tweet.id)}
              >
                <div>
                  <FaRegComment />
                </div>
                <div className="ml-1">Comment</div>
              </div>

              {/* Share Section */}
              <div className="flex cursor-pointer justify-center items-center flex-row gap-2 text-[#0098F1]">
                <div>
                  <IoShareSocialOutline />
                </div>
                <div className="ml-1">Share</div>
              </div>
            </div>
            {/* Conditional Comment Input */}
            {visibleComments[tweet.id] && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full border border-[#0098F1] focus:border-none focus:outline-none p-2 rounded-lg"
                  value={commentData}
                  onChange={handleCommentChange}
                />
                <button
                  className="bg-[#0098f1] text-white py-2 px-4 rounded mt-2"
                  onClick={() => addComment(tweet.id)}
                  disabled={commentData.trim() === ""}
                >
                  Comment
                </button>
              </div>
            )}
            {/* Display Comments */}

            <div className="mt-2">
              {tweet.comments.map((comment) => (
                <div key={comment.id} className="mb-2">
                  <div className="flex items-center">
                    <Avatar alt="Commenter" src="" className="mr-2" />
                    <div className="bg-gray-100 w-full  m-2 p-2 rounded-lg flex flex-col">
                      <div>{comment.text}</div>
                      <div className="mt-1 flex gap-4 text-sm text-gray-600">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            toggleCommentLike(tweet.id, comment.id)
                          }
                        >
                          {comment.isLiked ? (
                            <FcLike className="w-4 h-4 mr-1" />
                          ) : (
                            <FcLikePlaceholder className="w-4 h-4 mr-1" />
                          )}
                          Like
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            setVisibleComments((prev) => ({
                              ...prev,
                              [`reply-${tweet.id}-${comment.id}`]:
                                !prev[`reply-${tweet.id}-${comment.id}`],
                            }))
                          }
                        >
                          Reply
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Reply Input */}
                  {visibleComments[`reply-${tweet.id}-${comment.id}`] && (
                    <div className="ml-10 mt-2">
                      <input
                        type="text"
                        placeholder="Write a reply..."
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        value={replyData[`${tweet.id}-${comment.id}`] || ""}
                        onChange={(e) =>
                          handleReplyChange(
                            tweet.id,
                            comment.id,
                            e.target.value
                          )
                        }
                      />
                      <button
                        className="bg-[#0098f1] text-white py-1 px-4 rounded mt-2"
                        onClick={() => addReply(tweet.id, comment.id)}
                        disabled={
                          !replyData[`${tweet.id}-${comment.id}`] ||
                          replyData[`${tweet.id}-${comment.id}`].trim() === ""
                        }
                      >
                        Reply
                      </button>
                    </div>
                  )}
                  {/* Display Replies */}
                  {comment.replies &&
                    comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="ml-10 mt-2 flex items-center"
                      >
                        <Avatar alt="Reply User" src="" className="mr-2" />
                        <div className="bg-gray-100 w-full p-2 rounded-lg">
                          {reply.text}
                          <div
                            className="mt-1 text-sm text-gray-600 cursor-pointer"
                            onClick={
                              () =>
                                toggleCommentLike(
                                  tweet.id,
                                  reply.id
                                ) /* Adjust for replies */
                            }
                          >
                            {reply.isLiked ? "Unlike" : "Like"}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
