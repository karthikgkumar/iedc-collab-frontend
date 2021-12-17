import React, { useContext, useMemo } from "react";
import "./ProjectList.scss";
import { ProjectContext } from "../../../../../contexts/ProjectContext";

const ProjectBox = ({ name, teamLeader, projectId }) => {
  const { project: selectedProject } = useContext(ProjectContext);
  const isSelected = useMemo(() => projectId === selectedProject.id, [
    projectId,
    selectedProject,
  ]);

  return (
    <div
      className={`d-flex align-items-center projectBox ${
        isSelected ? "selected" : ""
      }`}
    >
      <div>
        <h5 className="text-uppercase">{name}</h5>
        <h6 className={"text-capitalize"}>{teamLeader}</h6>
      </div>
      <i class="fa fa-play-circle playIcon"></i>
    </div>
  );
};

export default ProjectBox;
