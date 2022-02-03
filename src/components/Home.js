import React from 'react';

import river from '../assets/river.png'
import mountain from '../assets/mountain.png'
import western from '../assets/western.png'
import beer from '../assets/beer.png'
import seattle from '../assets/seattle.png'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            card1: true,
            card2: true,
            card3: true,
            card4: true,
            card5: true
        }
    }

    toggleDisplay = (card) => {
        let display = this.state
        display[card] = !display[card]
        this.setState(display)
    }

    render() {
        return (
            <Container className='px-md-0'>
            <h2 className='my-3'>Upcoming Races:</h2>
            <Container className='px-0 d-md-flex flex-wrap' >

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 position-relative'>
                    <div className='position-absolute top-0 end-0 d-md-none'>
                        <p 
                            className='fw-bolder text-dark mx-2'
                            onClick={(()=>{this.toggleDisplay('card1')})}
                            >{this.state.card1 ? '-' : '+'}</p>
                    </div>
                    {this.state.card1 && 
                    <Card.Img variant="top" src={river} className='p-4 pb-2' />}
                    <Card.Body className='my-0'>
                        <Card.Title>Silver Falls Trail Challenge</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>half marathon</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>March 6, 2022</Card.Subtitle>
                        <Card.Link href='https://www.bivouacracing.com/silverfalls' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 position-relative'>
                    <div className='position-absolute top-0 end-0 d-md-none'>
                        <p 
                            className='fw-bolder text-dark mx-2'
                            onClick={(()=>{this.toggleDisplay('card2')})}
                            >{this.state.card1 ? '-' : '+'}</p>
                    </div>
                    {this.state.card1 && 
                    <Card.Img variant="top" src={seattle} className='p-4 pb-2' />}
                    <Card.Body className='my-0'>
                        <Card.Title>Seattle Cherry Blossom Run</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>5k</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>March 26, 2022</Card.Subtitle>
                        <Card.Link href='https://www.racethebloom.com/Race/Info/WA/Seattle/CherryBlossomRun' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 position-relative'>
                    <div className='position-absolute top-0 end-0 d-md-none'>
                        <p 
                            className='fw-bolder text-dark mx-2'
                            onClick={(()=>{this.toggleDisplay('card3')})}
                            >{this.state.card2 ? '-' : '+'}</p>
                    </div>
                    {this.state.card2 && 
                    <Card.Img variant="top" src={beer} className='p-4 pb-2' /> }
                    <Card.Body className='my-0'>
                        <Card.Title>Bend Beer Run</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>5k - with beer</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>September 3, 2022</Card.Subtitle>
                        <Card.Link href='https://bendraces.com/bend-beer-run/' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4 position-relative'>
                    <div className='position-absolute top-0 end-0 d-md-none'>
                        <p 
                            className='fw-bolder text-dark mx-2'
                            onClick={(()=>{this.toggleDisplay('card4')})}
                            >{this.state.card3 ? '-' : '+'}</p>
                    </div>
                    {this.state.card3 && 
                    <Card.Img variant="top" src={mountain} className='p-4 pb-2' /> }
                    <Card.Body className='my-0'>
                        <Card.Title>Three Sisters Skyline</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>50k</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>September 24, 2022</Card.Subtitle>
                        <Card.Link href='https://www.alpinerunning.co/three-sisters-skyline' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='shadow-sm mb-4 col-md-4 col-lg-4'>
                    <div className='position-absolute top-0 end-0 d-md-none'>
                        <p 
                            className='fw-bolder text-dark mx-2'
                            onClick={(()=>{this.toggleDisplay('card5')})}
                            >{this.state.card4 ? '-' : '+'}</p>
                    </div>
                    {this.state.card4 && 
                    <Card.Img variant="top" src={western} className='p-4 mb-1' /> }
                    <Card.Body className='my-0 mt-2'>
                        <Card.Title>Western States</Card.Title>
                        <Card.Subtitle className='text-muted py-1'>100m</Card.Subtitle>
                        <Card.Subtitle className='text-muted py-1'>TBD</Card.Subtitle>
                        <Card.Link href='https://www.wser.org/' target='_blank'>website</Card.Link>
                    </Card.Body>
                </Card>

            </Container>
            
        </Container>
        )
    }
}

export default Home;