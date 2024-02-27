import { useState } from "react";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        avatar: null,
        email: "",
        message: "",
        secretWord: "",
    });
    const [selectedComment, setSelectedComment] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === "avatar" ? files[0] : value,
        });
    };

    const submit = (e) => {
        e.preventDefault();

        const newComment = {
            id: Date.now(),
            name: formData.name,
            avatar: URL.createObjectURL(formData.avatar),
            email: formData.email,
            message: formData.message,
            secretWord: formData.secretWord,
            date: new Date().toLocaleString(),
        };

        setComments([...comments, newComment]);

        setFormData({
            name: "",
            avatar: null,
            email: "",
            message: "",
            secretWord: "",
        });
    };

    const editComment = (id) => {
        const commentToEdit = comments.find((comment) => comment.id === id);
        setSelectedComment(commentToEdit);
        setFormData({
            name: commentToEdit.name,
            avatar: commentToEdit.avatar,
            email: commentToEdit.email,
            message: commentToEdit.message,
            secretWord: commentToEdit.secretWord,
        });
    };

    const updateComment = (e) => {
        e.preventDefault();

        const index = comments.findIndex((comment) => comment.id === selectedComment.id);

        comments[index] = {
            name: formData.name,
            avatar: formData.avatar,
            email: formData.email,
            message: formData.message,
            secretWord: formData.secretWord,
            date: new Date().toLocaleString(),
        };
        setComments(comments);
        setFormData({
            name: "",
            avatar: null,
            email: "",
            message: "",
            secretWord: "",
        });
        setSelectedComment(null);
    };

    const deleteComment = (id) => {
        const commentToDelete = comments.find((comment) => comment.id === id);
        const confirmation = window.prompt("To delete this comment, enter the secret word:");

        if (confirmation === commentToDelete.secretWord) {
            const updatedComments = comments.filter((comment) => comment.id !== id);
            setComments(updatedComments);
        } else {
            alert("Incorrect secret word. Deletion canceled.");
        }
    };

    const viewCommentInfo = (id) => {
        const commentToView = comments.find((comment) => comment.id === id);
        alert(`Comment Info:
      Name: ${commentToView.name}
      Email: ${commentToView.email}
      Date: ${commentToView.date}`);
    };

    return (
        <>
            <form onSubmit={selectedComment ? updateComment : submit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="avatar">Avatar</label>
                <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <label htmlFor="secretWord">Secret Word</label>
                <input
                    id="secretWord"
                    type="password"
                    name="secretWord"
                    value={formData.secretWord}
                    onChange={handleChange}
                />

                <button type="submit">{selectedComment ? "Update" : "Send"}</button>
            </form>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={comment.avatar} alt="Avatar" style={{ width: "50px", height: "50px", borderRadius: "10px" }} />
                    <div style={{ marginLeft: "10px" }}>
                        <div>Name: {comment.name}</div>
                        <div>Email: {comment.email}</div>
                        <div>Message: {comment.message}</div>
                        <div>Date: {comment.date}</div>
                    </div>
                    <div>
                        <button onClick={() => editComment(comment.id)}>Edit</button>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        <button onClick={() => viewCommentInfo(comment.id)}>View Info</button>
                    </div>
                </div>
            ))}
        </>
    );
}