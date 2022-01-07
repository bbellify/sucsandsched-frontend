import React from 'react';

import river from '../assets/river.png'
import mountain from '../assets/mountain.png'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'



function Home() {
    return (
        <Container className='justify-content-center'>
            <h2 className='my-3'>Upcoming Races:</h2>

            <Card style={{ width: '100%', maxWidth: '500px' }} className='shadow-sm mb-4'>
                <Card.Img variant="top" src={river} className='p-4 pb-2' />
                <Card.Body className='my-0'>
                    <Card.Title>Silver Falls Trail Challenge</Card.Title>
                    <Card.Subtitle className='text-muted py-1'>half marathon</Card.Subtitle>
                    <Card.Subtitle className='text-muted py-1'>March 6, 2022</Card.Subtitle>
                    <Card.Link href='https://www.bivouacracing.com/silverfalls' target='_blank'>website</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '100%', maxWidth: '500px' }} className='shadow-sm mb-4'>
                <Card.Img variant="top" src={mountain} className='p-4 pb-2' />
                <Card.Body className='my-0'>
                    <Card.Title>Three Sisters Skyline</Card.Title>
                    <Card.Subtitle className='text-muted py-1'>50k</Card.Subtitle>
                    <Card.Subtitle className='text-muted py-1'>March 6, 2022</Card.Subtitle>
                    <Card.Link href='https://www.alpinerunning.co/three-sisters-skyline' target='_blank'>website</Card.Link>
                </Card.Body>
            </Card>



            <Card style={{ width: '100%', maxWidth: '500px' }} className='shadow-sm mb-4'>
                {/* eslint-disable-next-line */}
                <Card.Header>icon information -<a href='https://thenounproject.com/' target='_blank'> the noun project</a></Card.Header>
                
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>River by Dong Ik Seo from NounProject.com</ListGroupItem>
                    <ListGroupItem>Mountain by Florent B from NounProject.com
                    </ListGroupItem>
                </ListGroup>
            </Card>

        </Container>
    );
}

export default Home;