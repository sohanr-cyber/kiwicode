import React from "react";
import styles from "../../styles/Chat/Messages.module.css";
import Image from "next/image";

const messages = [
  {
    name: "Alice",
    text: "Hello there!",
    picture: "https://picsum.photos/200/200?image=100",
  },
  {
    name: "Bob",
    text: "How are you today?",
    picture: "https://picsum.photos/200/200?image=200",
  },
  {
    name: "Charlie",
    text: "It's a beautiful day!",
    picture: "https://picsum.photos/200/200?image=300",
  },
  {
    name: "Emily",
    text: "What are you up to today?",
    picture: "https://picsum.photos/200/200?image=400",
  },
  {
    name: "David",
    text: "I'm just relaxing at home.",
    picture: "https://picsum.photos/200/200?image=500",
  },
  {
    name: "Jessica",
    text: "I'm going to the park with my friends.",
    picture: "https://picsum.photos/200/200?image=600",
  },
  {
    name: "Kevin",
    text: "I'm working on a project for school.",
    picture: "https://picsum.photos/200/200?image=700",
  },
  {
    name: "Megan",
    text: "I'm going to the library to study.",
    picture: "https://picsum.photos/200/200?image=800",
  },
  {
    name: "Michael",
    text: "I'm going to the gym to workout.",
    picture: "https://picsum.photos/200/200?image=900",
  },
  {
    name: "Nicole",
    text: "I'm going to the grocery store to pick up some food.",
    picture: "https://picsum.photos/200/200?image=1000",
  },
  {
    name: "Olivia",
    text: "I'm going to the coffee shop to meet up with a friend.",
    picture: "https://picsum.photos/200/200?image=1100",
  },
  {
    name: "Peter",
    text: "I'm going to the movies to see a new film.",
    picture: "https://picsum.photos/200/200?image=1200",
  },
  {
    name: "Robert",
    text: "I'm going to the park to walk my dog.",
    picture: "https://picsum.photos/200/200?image=1300",
  },
  {
    name: "Sarah",
    text: "I'm going to the bookstore to buy a new book.",
    picture: "https://picsum.photos/200/200?image=1400",
  },
  {
    name: "William",
    text: "I'm going to the beach to relax and soak up the sun.",
    picture: "https://picsum.photos/200/200?image=1500",
  },
  {
    name: "Nicole",
    text: "I'm going to the grocery store to pick up some food.",
    picture: "https://picsum.photos/200/200?image=1000",
  },
  {
    name: "Olivia",
    text: "I'm going to the coffee shop to meet up with a friend.",
    picture: "https://picsum.photos/200/200?image=1100",
  },
  {
    name: "Peter",
    text: "I'm going to the movies to see a new film.",
    picture: "https://picsum.photos/200/200?image=1200",
  },
  {
    name: "Robert",
    text: "I'm going to the park to walk my dog.",
    picture: "https://picsum.photos/200/200?image=1300",
  },
  {
    name: "Sarah",
    text: "I'm going to the bookstore to buy a new book.",
    picture: "https://picsum.photos/200/200?image=1400",
  },
  {
    name: "William",
    text: "I'm going to the beach to relax and soak up the sun.",
    picture: "https://picsum.photos/200/200?image=1500",
  },
];

const Messages = () => {
  return (
    <div className={styles.messages}>
      {messages.map((item, index) => (
        <div
          className={styles.message}
          key={index}
          style={index % 2 == 0 ? { background: "white", color: "black" } : {}}
        >
          <Image priority src={item.picture} alt="" width={30} height={30} />
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Messages;
