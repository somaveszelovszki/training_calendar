import React from 'react';
import { Card, Table } from 'react-bootstrap'
import { Duration } from 'date-fns'
import TrainingCalendar from '../components/TrainingCalendar';

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/gyms/${context.query.gym}`)
    const gym = await res.json()
    return { props: { gym } }
}

function Training({ training }) {
    return (
        <tr>
            <td>{training.title}</td>
        </tr>
    );
}

export default function Page({ gym }) {
    console.log(JSON.stringify(gym.trainings));

    const opening_hours = {
        start: { hour: 8, minute: 0 },
        end: { hour: 21, minute: 0 }
    };

    const dateFromTime = (time) => new Date(new Date('1970-01-01').setHours(time.hour, time.minute, 0));

    const timeRange = {
        start: dateFromTime(opening_hours.start),
        end: dateFromTime(opening_hours.end),
        step: { minutes: 30 }
    };

    return (
        <Card>
            <Card.Title>{gym.name}</Card.Title>
            <Card.Body>
                <p>{gym.address}</p>

                <div className='table-responsive text-nowrap' style={{ width: '100%', maxHeight: '700px', overflow: 'scroll' }}>
                    <Table className='table'>
                        <tbody>
                            {gym.trainings.length > 0 ?
                                gym.trainings.map((training, index) => (<Training training={training} key={index} />)) :
                                <tr key='training-empty'><td>No trainings</td></tr>}
                        </tbody>
                    </Table>
                </div>

                <TrainingCalendar timeRange={timeRange} events={gym.trainings} locale={'en-US'} />
            </Card.Body>
        </Card>
    );
}
