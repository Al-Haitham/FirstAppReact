import { useState } from "react";

function Post({ title, description }) {
    const [likes, setLikes]=useState(0);

    function handleLike(){
        setLikes(likes+1);
    }

    return (
        <aticle classNme="post">
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="post-footer">
                <span>❤️ {likes} Likes</span>
                <button onClick={handleLike}>Like</button>
            </div>
        </aticle>
    );
}

export default Post;
