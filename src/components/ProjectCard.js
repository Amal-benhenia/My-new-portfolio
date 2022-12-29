import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project amal" />
        <div className="proj-txtx">
        <a href={link} target="blank" class='link-project'> {title}  </a>
        <br></br>
        <br></br>
          <span className="proj-spaces">{description}</span>
        </div>
      
      </div>
    </Col>
  )
}
