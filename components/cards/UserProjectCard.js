import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function UserProjectCard({ projObj }) {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{projObj.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{projObj.location}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{projObj.date}</Card.Subtitle>
          <Card.Text>
            {projObj.category.type}
          </Card.Text>
          <Card.Text>
            {projObj.description}
          </Card.Text>
          <Button id="proj-details-btn" href={`/project/${projObj.id}`} passHref>View Project Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

UserProjectCard.propTypes = {
  projObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired;

export default UserProjectCard;