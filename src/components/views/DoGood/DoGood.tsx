import * as React from 'react';
import { HumanitarianProject } from 'src/types';

import ProjectCard from './ProjectCard';

export interface Props {
  isFetchProjectsInProgress: boolean;
  projects: HumanitarianProject[];
}

const baseClass = 'gc-do-good';

const DoGood: React.SFC<Props> = ({ projects }) => (
  <div className={baseClass}>
    <div className={`${baseClass}__cards`}>
      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </div>
);

export default DoGood;
