import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2027',
    title: 'Parul University',
    subtitle: 'B.Tech Computer Science',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Swaminarayan uniersity',
    subtitle: 'Diploma(CE)',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Thrive institute for', 
    subtitle: 'Internship',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2022',
    title: 'New english school',
    subtitle: '10th pass',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'FUTURE',
    title: 'Cloud & DevOps',
    subtitle: 'Building the future',
    position: 'right',
  }
]