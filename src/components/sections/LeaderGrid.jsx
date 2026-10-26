import { Container, Reveal, Section } from '../ui'
import { leaders } from '../../data'

function LeaderCard({ leader, index }) {
  const initials = leader.photo ? null : leader.name.split(' ').map(w => w[0]).join('').slice(0, 2)
  return (
    <Reveal as="article" delay={(index % 3) * 90} className="leader">
      <div className="leader-photo">
        {leader.photo ? <img src={leader.photo} alt={leader.name} loading="lazy" /> : <span>{initials}</span>}
      </div>
      <p className="leader-role">{leader.role}</p>
      <h3>{leader.name}</h3>
      <p className="leader-bio">{leader.bio}</p>
    </Reveal>
  )
}

export default function LeaderGrid() {
  return (
    <Section>
      <Container className="leaders">
        {leaders.map((l, i) => <LeaderCard key={l.role} leader={l} index={i} />)}
      </Container>
    </Section>
  )
}
