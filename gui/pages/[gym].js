import { Card } from 'react-bootstrap'

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/gyms/${context.query.gym}`)
    const gym = await res.json()
    return { props: { gym } }
}

export default function Page({ gym }) {
    return (
        <Card>
            <Card.Title>{gym.name}</Card.Title>
            <Card.Body>
                <p>{gym.address}</p>
            </Card.Body>
        </Card>
    );
}
