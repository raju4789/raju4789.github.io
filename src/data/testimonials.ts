export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  linkedin?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Shruti Burman",
    position: "Software Engineer",
    company: "DBS Bank",
    image: "https://i.pravatar.cc/150?img=47",
    text: "Raju is that guy who always has something valuable to contribute. While working with Raju, learning never stops, be it tea breaks or the regular brainstorming sessions that we had. His ideas are always intriguing and backed up with huge datasets. With colleagues like Raju, its never a dull day at work!",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/shruti-burman/"
  }
];
