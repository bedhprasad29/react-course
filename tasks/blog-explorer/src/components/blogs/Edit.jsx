import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../../redux/features/PostSlice';

function Edit({ postId, show, handleClose }) {
    const dispatch = useDispatch();

    const { posts, state } = useSelector(state => state.posts)
    useEffect(() => {
        if (postId) {
            dispatch(fetchPostById())
        }

    }, [])
    console.log(posts);
    const post = posts

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your title"
                            defaultValue={post?.title}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Blog Body</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={post?.body} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Edit
