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
  },
  {
    id: 2,
    name: "Joey Gilian Sutioso",
    position: "Sr. Software Engineer",
    company: "Agoda",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Raju is my go-to person for any technical discussion. His ability to quickly pick up new technologies and turn them into real, impactful solutions is truly impressive.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/joey-gilian-sutioso-178a0597/"
  },
  {
    id: 3,
    name: "Foysol Ahmed Shuvo",
    position: "Software Engineer",
    company: "Agoda",
    image: "https://i.pravatar.cc/150?img=33",
    text: "I had the privilege of working with Raju from my very first day at Agoda, and we spent nearly two years together on the same team. My onboarding experience was smooth largely because of his guidance, support, and willingness to help whenever needed. Raju is a hardworking and dedicated engineer with a strong curiosity for learning. He actively explores new technologies and consistently applies them to deliver high-quality work. His reliability, attention to detail, and commitment to meeting deadlines made him one of the most dependable teammates I've worked with. One of the biggest things I learned from Raju is how to ask thoughtful, structured questions during planning and requirement discussions. This skill not only strengthened my understanding of product requirements but also improved how I approach problem-solving and collaboration. Raju would be a valuable asset to any team, and I'm confident he will continue to excel wherever he goes.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/foysol-ahmed-shuvo/"
  }
];
