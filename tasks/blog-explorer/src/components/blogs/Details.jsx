import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useQuery } from '@apollo/client'
import { GET_COMMENTS_BY_POST_ID } from '../../graphql/queries'
import Comment from './Comment';

function Details({ post, show, handleClose }) {

    const { loading, error, data } = useQuery(GET_COMMENTS_BY_POST_ID, {
        variables: { postId: post?.id }
    });

    const comments = data?.comments;

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Title : {post?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b>Description : </b>{post?.body} <br /><br />
                <h4><u>All Comments</u></h4>
                {
                    comments?.map(comment => (
                        <Comment comment={comment} />
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    );
}

export default Details
