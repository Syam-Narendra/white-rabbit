import Homepage from "~/welcome/welcome";

export function meta() {
  return [
    { title: "White Rabbit" },
    { name: "description", content: "Welcome to White Rabbit Tech!" },
  ];
}

export default function Home() {
  return <Homepage />;
}
