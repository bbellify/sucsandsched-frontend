import React from 'react';

import river from '../assets/river.png'
import mountain from '../assets/mountain.png'
import western from '../assets/western.png'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'



function Home() {
    return (
        <Container>
            <h2 className='my-3'>Upcoming Races:</h2>
            <Container className='px-0 d-md-flex justify-content-md' >
                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 me-md-3'>
                    <Card.Img variant="top" src={river} className='p-4 pb-2' />
                    <Card.Body className='my-0'>
                        <Card.Title>Silver Falls Trail Challenge</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>half marathon</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>March 6, 2022</Card.Subtitle>
                        <Card.Link href='https://www.bivouacracing.com/silverfalls' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 me-md-3'>
                    <Card.Img variant="top" src={mountain} className='p-4 pb-2' />
                    <Card.Body className='my-0'>
                        <Card.Title>Three Sisters Skyline</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>50k</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>September 24, 2022</Card.Subtitle>
                        <Card.Link href='https://www.alpinerunning.co/three-sisters-skyline' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 me-md-3'>
                    <Card.Img variant="top" src={western} className='p-4 mb-1' />
                    <Card.Body className='my-0 mt-2'>
                        <Card.Title>Western States</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>100m</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>TBD</Card.Subtitle>
                        <Card.Link href='https://www.wser.org/' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                </Container>

                <Card className='shadow-sm mb-4 col-md-5 col-lg-4'>
                    {/* eslint-disable-next-line */}
                    <Card.Header>icon information -<a href='https://thenounproject.com/' target='_blank'> the noun project</a></Card.Header>
                    
                    <ListGroup className='list-group-flush'>
                        <ListGroupItem>River by Dong Ik Seo from NounProject.com</ListGroupItem>
                        <ListGroupItem>Mountain by Florent B from NounProject.com
                        </ListGroupItem>
                        <ListGroupItem>Vertex by Marina Pugacheva from NounProject.com</ListGroupItem>
                    </ListGroup>
                </Card>
            
        </Container>
    );
}

export default Home;