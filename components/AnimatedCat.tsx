"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const catStyles = {
  wrapper: {
    position: "fixed" as const,
    bottom: "-10px",
    right: "-10px",
    zIndex: 9999,
    cursor: "pointer",
    userSelect: "none" as const,
    transition: "transform 0.3s ease",
  },
  canvas: {
    display: "block",
    width: "150px",
    height: "150px",
    borderRadius: "20px",
    background: "transparent",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  },
};

type CatEmotion = "idle" | "happy" | "surprised";

interface Message {
  text: string;
  emoji: string;
}

// --- 📚 ВСЕ СООБЩЕНИЯ (добавляй сколько хочешь) ---
const ALL_MESSAGES: Message[] = [
  // Приветствия
  { text: "Привет! 👋", emoji: "😸" },
  { text: "Здарова! ✌️", emoji: "😺" },
  { text: "Хей! Как дела?", emoji: "👋" },
  { text: "О, привет!", emoji: "🙌" },

  // Про разработку
  { text: "Я люблю React!", emoji: "⚛️" },
  { text: "TypeScript рулит!", emoji: "💙" },
  { text: "Next.js — мой бро!", emoji: "🚀" },
  { text: 'Git commit -m "fix"', emoji: "🔥" },
  { text: "npm start...", emoji: "📦" },
  { text: "Рефакторим потихоньку", emoji: "🔧" },
  { text: "Чищу баги... 🐛", emoji: "🧹" },
  { text: "Тесты проходят!", emoji: "✅" },
  { text: "CI/CD зелёный!", emoji: "🌿" },
  { text: "Мержим в main!", emoji: "🤝" },

  // Про кота
  { text: "МЯУ! ❤️", emoji: "😻" },
  { text: "Мур-мур...", emoji: "😺" },
  { text: "Дай молочка! 🥛", emoji: "😋" },
  { text: "Я устал... спать", emoji: "😴" },
  { text: "Кто тут мышку принёс?", emoji: "🐭" },
  { text: "Мяу! (перевод: привет)", emoji: "🐱" },

  // Шутки
  { text: "Тыкать можно!", emoji: "😄" },
  { text: "Не сломается!", emoji: "😏" },
  { text: "А ты смелый!", emoji: "🦁" },
  { text: "Я тебя вижу! 👀", emoji: "👁️" },
  { text: "Код — это поэзия", emoji: "📝" },
  { text: "Кофе закончился...", emoji: "☕" },
  { text: "Понедельник же!", emoji: "😩" },
  { text: "А может, пятница?", emoji: "🥳" },

  // Комплименты и мотивация
  { text: "Ты крутой!", emoji: "🌟" },
  { text: "Спасибо!", emoji: "🙏" },
  { text: "Ты лучший!", emoji: "🏆" },
  { text: "Продолжай в том же духе!", emoji: "💪" },
  { text: "У тебя отлично получается!", emoji: "🎯" },

  // Пасхалки
  { text: "404: кот не найден", emoji: "😹" },
  { text: "500: мяу-сервер упал", emoji: "🤯" },
  { text: "200 OK!", emoji: "✅" },
  { text: "npm install котик", emoji: "📦" },
  { text: "React 19 уже тут?", emoji: "🤔" },
  { text: "Vue? Не, не слышал", emoji: "😼" },

  // Про сайт и работу
  { text: "Отличный сайт!", emoji: "✨" },
  { text: "Хочешь связаться?", emoji: "📬" },
  { text: "Я open source!", emoji: "🐙" },
  { text: "Меня можно форкнуть", emoji: "🍴" },
];

const AnimatedCat: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [emotion, setEmotion] = useState<CatEmotion>("idle");
  const [message, setMessage] = useState<Message | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const frameRef = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);
  const messageTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const emotionRef = useRef<CatEmotion>("idle");
  const messageRef = useRef<Message | null>(null);

  useEffect(() => {
    emotionRef.current = emotion;
  }, [emotion]);

  useEffect(() => {
    messageRef.current = message;
  }, [message]);

  // --- ФУНКЦИЯ ДЛЯ СЛУЧАЙНОГО СООБЩЕНИЯ ---
  const getRandomMessage = useCallback(() => {
    // Исключаем приветствия при клике (чтобы не повторялись)
    const isClick = true;
    let pool = ALL_MESSAGES;

    // При клике исключаем приветствия
    if (isClick) {
      pool = ALL_MESSAGES.filter(
        (m) =>
          !m.text.includes("Привет") &&
          !m.text.includes("Здарова") &&
          !m.text.includes("Хей") &&
          !m.text.includes("О, привет")
      );
    }

    return pool[Math.floor(Math.random() * pool.length)];
  }, []);

  // --- ФУНКЦИЯ РИСОВАНИЯ ---
  const drawCat = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const currentMessage = messageRef.current;
      const currentEmotion = emotionRef.current;

      const scale = width / 400;
      const cx = width / 2;
      const cy = height / 2 + 10 * scale;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // --- ТЕЛО ---
      const bodyY = 30;
      ctx.fillStyle = "#FFB74D";
      ctx.shadowColor = "rgba(0,0,0,0.06)";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.ellipse(0, bodyY, 55, 48, 0, 0, Math.PI * 2);
      ctx.fill();

      // --- ЖИВОТ ---
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#FFE0B2";
      ctx.beginPath();
      ctx.ellipse(0, bodyY + 15, 35, 25, 0, 0, Math.PI * 2);
      ctx.fill();

      // --- ЗАДНИЕ ЛАПЫ ---
      ctx.fillStyle = "#FFB74D";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.ellipse(-32, bodyY + 25, 14, 20, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(32, bodyY + 25, 14, 20, 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "#FF8A80";
      ctx.beginPath();
      ctx.arc(-32, bodyY + 35, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(32, bodyY + 35, 5, 0, Math.PI * 2);
      ctx.fill();

      // --- ХВОСТ ---
      ctx.shadowBlur = 10;
      ctx.strokeStyle = "#FFB74D";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      const tailWave = Math.sin(frameRef.current * 0.04) * 25;
      ctx.beginPath();
      ctx.moveTo(50, bodyY - 5);
      ctx.quadraticCurveTo(
        75 + tailWave,
        -20,
        60 + tailWave * 0.7,
        -40 + Math.sin(frameRef.current * 0.04 + 1) * 10
      );
      ctx.stroke();

      // --- ПЕРЕДНИЕ ЛАПЫ ---
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#FFB74D";
      const pawWave = Math.sin(frameRef.current * 0.04) * 3;
      ctx.beginPath();
      ctx.ellipse(-38, bodyY + 15 + pawWave, 12, 16, -0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(38, bodyY + 15 - pawWave, 12, 16, 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "#FF8A80";
      ctx.beginPath();
      ctx.arc(-38, bodyY + 25 + pawWave, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(38, bodyY + 25 - pawWave, 4, 0, Math.PI * 2);
      ctx.fill();

      // --- ГОЛОВА ---
      ctx.shadowBlur = 15;
      ctx.fillStyle = "#FFB74D";
      ctx.save();
      ctx.translate(0, -20);
      ctx.beginPath();
      ctx.ellipse(0, 0, 48, 42, 0, 0, Math.PI * 2);
      ctx.fill();

      // --- УШИ ---
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#FFB74D";
      ctx.beginPath();
      ctx.moveTo(-35, -30);
      ctx.lineTo(-48, -68);
      ctx.lineTo(-15, -42);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(35, -30);
      ctx.lineTo(48, -68);
      ctx.lineTo(15, -42);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "#FF8A80";
      ctx.beginPath();
      ctx.moveTo(-30, -32);
      ctx.lineTo(-40, -58);
      ctx.lineTo(-18, -40);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(30, -32);
      ctx.lineTo(40, -58);
      ctx.lineTo(18, -40);
      ctx.fill();

      // --- ГЛАЗА ---
      ctx.shadowBlur = 0;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.ellipse(-18, -8, 12, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(18, -8, 12, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#2C3E50";
      ctx.beginPath();
      ctx.ellipse(-18, -6, 7, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(18, -6, 7, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.beginPath();
      ctx.arc(-15, -11, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(21, -11, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // --- НОС ---
      ctx.fillStyle = "#FF8A80";
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.moveTo(0, 8);
      ctx.lineTo(-6, 14);
      ctx.lineTo(6, 14);
      ctx.fill();

      // --- РОТ ---
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#2C3E50";
      ctx.lineWidth = 1.5;

      if (currentEmotion === "happy") {
        ctx.beginPath();
        ctx.arc(0, 12, 12, 0.1, Math.PI - 0.1);
        ctx.stroke();
      } else if (currentEmotion === "surprised") {
        ctx.beginPath();
        ctx.arc(0, 16, 8, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(-6, 12);
        ctx.quadraticCurveTo(0, 16, 6, 12);
        ctx.stroke();
      }

      // --- УСЫ ---
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#666";
      ctx.lineWidth = 1.2;
      [-22, 22].forEach((x) => {
        ctx.beginPath();
        ctx.moveTo(x, -2);
        ctx.lineTo(x + (x > 0 ? 28 : -28), -6);
        ctx.stroke();
      });

      ctx.restore(); // голова

      ctx.restore(); // основная

      // --- ОБЛАЧКО С СООБЩЕНИЕМ ---
      if (currentMessage) {
        ctx.save();

        const msgX = cx;
        const msgY = cy - 130 * scale;
        const rectW = 280 * scale;
        const rectH = 50 * scale;
        const radius = 20 * scale;

        ctx.shadowColor = "rgba(0,0,0,0.15)";
        ctx.shadowBlur = 30;

        ctx.fillStyle = "rgba(255, 255, 255, 0.98)";

        const x = msgX - rectW / 2;
        const y = msgY - rectH / 2;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + rectW - radius, y);
        ctx.quadraticCurveTo(x + rectW, y, x + rectW, y + radius);
        ctx.lineTo(x + rectW, y + rectH - radius);
        ctx.quadraticCurveTo(
          x + rectW,
          y + rectH,
          x + rectW - radius,
          y + rectH
        );
        ctx.lineTo(x + radius, y + rectH);
        ctx.quadraticCurveTo(x, y + rectH, x, y + rectH - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();

        // Хвостик облачка
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
        ctx.beginPath();
        ctx.moveTo(msgX + 20 * scale, y + rectH);
        ctx.lineTo(msgX + 40 * scale, y + rectH + 16 * scale);
        ctx.lineTo(msgX + 60 * scale, y + rectH);
        ctx.closePath();
        ctx.fill();

        // Текст
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#1a1a1a";
        ctx.font = `bold ${
          18 * scale
        }px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          `${currentMessage.emoji} ${currentMessage.text}`,
          msgX,
          msgY + 1 * scale
        );

        ctx.restore();
      }
    },
    []
  );

  // --- АНИМАЦИЯ ---
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawCat(ctx, canvas.width, canvas.height);

    frameRef.current += 1;
    animationRef.current = requestAnimationFrame(animate);
  }, [drawCat]);

  // --- ЗАПУСК ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 400;
    canvas.height = 400;

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // --- ПОКАЗ СООБЩЕНИЯ ---
  const showMessage = useCallback((msg: Message, duration: number = 3000) => {
    setMessage(msg);

    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }

    messageTimeoutRef.current = setTimeout(() => {
      setMessage(null);
    }, duration);
  }, []);

  // --- ОБРАБОТЧИКИ ---
  const handleMouseEnter = useCallback(() => {
    setEmotion("happy");
    // При наведении показываем только приветствия
    const greetings = ALL_MESSAGES.filter(
      (m) =>
        m.text.includes("Привет") ||
        m.text.includes("Здарова") ||
        m.text.includes("Хей") ||
        m.text.includes("О, привет")
    );
    const msg =
      greetings[Math.floor(Math.random() * greetings.length)] ||
      ALL_MESSAGES[0];
    showMessage(msg, 2000);
  }, [showMessage]);

  const handleMouseLeave = useCallback(() => {
    setEmotion("idle");
  }, []);

  const handleClick = useCallback(() => {
    setClickCount((prev) => prev + 1);
    setEmotion("surprised");

    // Исключаем приветствия при клике
    const nonGreetings = ALL_MESSAGES.filter(
      (m) =>
        !m.text.includes("Привет") &&
        !m.text.includes("Здарова") &&
        !m.text.includes("Хей") &&
        !m.text.includes("О, привет")
    );

    const randomMsg =
      nonGreetings[Math.floor(Math.random() * nonGreetings.length)] ||
      ALL_MESSAGES[0];

    showMessage(randomMsg, 2500);

    setTimeout(() => {
      setEmotion("idle");
    }, 2500);
  }, [showMessage]);

  return (
    <div
      style={catStyles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        style={catStyles.canvas}
        width={400}
        height={400}
      />
    </div>
  );
};

export default AnimatedCat;
