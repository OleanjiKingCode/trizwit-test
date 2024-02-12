// this is the type of each syllabus item
export type Syllabus = {
  id: number;
  name: string;
  imageUrl: string;
};

// since i dint have a database I am using dummy data here
export const syllabusesData: Syllabus[] = [
  { id: 1, name: "Math (NCERT)", imageUrl: "/maths.png" },
  { id: 2, name: "Math Foundations", imageUrl: "/maths.png" },
  { id: 3, name: "Math (Maharashtra)", imageUrl: "/maths.png" },
  { id: 4, name: "PACE (SOE Punjab)", imageUrl: "/atom.png" },
  { id: 5, name: "Science (NCERT)", imageUrl: "/atom.png" },
  { id: 6, name: "All State boards", imageUrl: "/maths.png" },
];
