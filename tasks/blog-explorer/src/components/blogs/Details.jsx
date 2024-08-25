import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useQuery } from '@apollo/client'
import { GET_COMMENTS_BY_POST_ID } from '../../graphql/queries'

function Details({ post, show, handleClose }) {
    const { loading, error, data } = useQuery(GET_COMMENTS_BY_POST_ID, {
        variables: { postId: 1 }
    });

    const comments = data;

    console.log('comments data', comments)

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {post?.body} <br />
                <h3>All Comments</h3>
                {
                    // data?.map(comments => {
                    //     comments.map()
                    // })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Details
