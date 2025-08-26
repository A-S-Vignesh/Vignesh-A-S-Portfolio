import { useEffect, useState } from "react";

const TypingEffect = ({
  words = [],
  typingSpeed = 150,
  eraseSpeed = 100,
  delay = 1500,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Guard: nothing to type
    if (!Array.isArray(words) || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    // Choose the appropriate delay for this tick
    const atWordEnd = !isDeleting && text === currentWord;
    const tickDelay = atWordEnd ? delay : isDeleting ? eraseSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);
        if (next === currentWord) setIsDeleting(true);
      } else {
        const next = currentWord.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, tickDelay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, eraseSpeed, delay]);

  return (
    <span className="pr-1 text-blue-600 border-r-2 border-black dark:border-white">
      {text}
    </span>
  );
};

export default TypingEffect;
