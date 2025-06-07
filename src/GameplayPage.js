import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import mapBg from './assets/MapBeranda.png';
import serang from './assets/serang.jpg';
import Temple from './assets/Temple.png';
import Pantai from './assets/Pantai.png';
import gold_coin from './assets/item/gold_coin.png';
import fish from './assets/food/Fish.png';
import Mountain from './assets/Mountain.png';
import Idle from './assets/GiantSpirit/IdlePreview.gif';
import Hit from './assets/GiantSpirit/HitPreview.gif';
import GoldKnight_up from './assets/characters/GoldKnight/GoldKnight_up.png';
import GoldKnight_down from './assets/characters/GoldKnight/GoldKnight_down.png';
import GoldKnight_left from './assets/characters/GoldKnight/GoldKnight_left.png';
import GoldKnight_right from './assets/characters/GoldKnight/GoldKnight_right.png';
import GoldKnight_attack_right from './assets/characters/GoldKnight/GoldKnight_attack_right.png';
import GoldKnight_attack_left from './assets/characters/GoldKnight/GoldKnight_attack_left.png';
import GoldKnight_attack_up from './assets/characters/GoldKnight/GoldKnight_attack_up.png';
import GoldKnight_attack_down from './assets/characters/GoldKnight/GoldKnight_attack_down.png';
import knight_up from './assets/characters/Knight/knight_up.png';
import knight_down from './assets/characters/Knight/knight_down.png';
import knight_left from './assets/characters/Knight/knight_left.png';
import knight_right from './assets/characters/Knight/knight_right.png';
import knight_attack_down_knight from './assets/characters/Knight/knight_attack_down.png';
import knight_attack_up_knight from './assets/characters/Knight/knight_attack_up.png';
import knight_attack_left_knight from './assets/characters/Knight/knight_attack_left.png';
import knight_attack_right_knight from './assets/characters/Knight/knight_attack_right.png';
import Hunter_up from './assets/characters/Hunter/hunter_up.png';
import Hunter_down from './assets/characters/Hunter/hunter_down.png';
import Hunter_left from './assets/characters/Hunter/hunter_left.png';
import Hunter_right from './assets/characters/Hunter/hunter_right.png';
import hunter_attack_down from './assets/characters/Hunter/hunter_attack_down.png';
import hunter_attack_up from './assets/characters/Hunter/hunter_attack_up.png';
import hunter_attack_left from './assets/characters/Hunter/hunter_attack_left.png';
import hunter_attack_right from './assets/characters/Hunter/hunter_attack_right.png';
import skeleton_up from './assets/characters/skeleton/skeleton_up.png';
import skeleton_down from './assets/characters/skeleton/skeleton_down.png';
import skeleton_left from './assets/characters/skeleton/skeleton_left.png';
import skeleton_right from './assets/characters/skeleton/skeleton_right.png';
import skeleton_attack_down from './assets/characters/skeleton/skeleton_attack_down.png';
import skeleton_attack_up from './assets/characters/skeleton/skeleton_attack_up.png';
import skeleton_attack_left from './assets/characters/skeleton/skeleton_attack_left.png';
import skeleton_attack_right from './assets/characters/skeleton/skeleton_right.png';
import lion_up from './assets/characters/lion/lion_up.png';
import lion_down from './assets/characters/lion/lion_down.png';
import lion_left from './assets/characters/lion/lion_left.png';
import lion_right from './assets/characters/lion/lion_right.png';
import lion_attack_down from './assets/characters/lion/lion_attack_down.png';
import lion_attack_up from './assets/characters/lion/lion_attack_up.png';
import lion_attack_left from './assets/characters/lion/lion_attack_left.png';
import lion_attack_right from './assets/characters/lion/lion_attack_right.png';
import './GameplayPage.css';
import slashefek from './assets/slash.png';
import slashSound from './assets/Slash.wav';

// Component for map navigation buttons
const MapNavigationButtons = ({ onReturn, onReturnPreserve, isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      <button
        onClick={() => {
          console.log('Clicked Kembali ke Peta Utama');
          onReturn();
        }}
        className="modern-button"
        style={{
          position: 'fixed',
          bottom: '240px',
          right: '20px',
          zIndex: 1200,
          background: 'linear-gradient(45deg, #ff5733, #ff8c66)',
        }}
      >
        Kembali ke Peta Utama
      </button>
      <button
        onClick={() => {
          console.log('Clicked Kembali ke Peta Utama (Simpan Status)');
          onReturnPreserve();
        }}
        className="modern-button"
        style={{
          position: 'fixed',
          bottom: '310px',
          right: '20px',
          zIndex: 1200,
          background: 'linear-gradient(45deg, #00ffcc, #33ccff)',
        }}
      >
        Kembali ke Peta Utama (Simpan Status)
      </button>
    </>
  );
};

export default function GameplayPage() {
  const [showTeleportModal, setShowTeleportModal] = useState(false);
  const [modalRejected, setModalRejected] = useState(false);
  const [isInDungeon, setIsInDungeon] = useState(false);
  const [hasTriggeredBox, setHasTriggeredBox] = useState(false);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [lionKills, setLionKills] = useState(0);
  const [giantSpiritKills, setGiantSpiritKills] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [enemies, setEnemies] = useState([]);
  const [showDeathModal, setShowDeathModal] = useState(false);
  const [showBeachModal, setShowBeachModal] = useState(false);
  const [beachModalRejected, setBeachModalRejected] = useState(false);
  const [isInBeach, setIsInBeach] = useState(false);
  const [hasTriggeredBeachBox, setHasTriggeredBeachBox] = useState(false);
  const [showBoxFModal, setShowBoxFModal] = useState(false);
  const [hasTriggeredBoxF, setHasTriggeredBoxF] = useState(false);
  const [showMountainModal, setShowMountainModal] = useState(false);
  const [mountainModalRejected, setMountainModalRejected] = useState(false);
  const [isInMountain, setIsInMountain] = useState(false);
  const [hasTriggeredMountainBox, setHasTriggeredMountainBox] = useState(false);
  const [showBeachShopModal, setShowBeachShopModal] = useState(false);
  const [hasTriggeredBeachShopBox, setHasTriggeredBeachShopBox] = useState(false);
  const [notification, setNotification] = useState('');
  const [lastGreetingHour, setLastGreetingHour] = useState(null);
  const [showSlashEffect, setShowSlashEffect] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [hasTriggeredSleepBox, setHasTriggeredSleepBox] = useState(false);
  const boxFPos = useMemo(() => ({ x: 510, y: 2100 }), []);
  const beachShopPos = useMemo(() => ({ x: 1800, y: 1800 }), []);
  const sleepPos = useMemo(() => ({ x: 2315, y: 650 }), []);
  const [inventory, setInventory] = useState({ goldCoins: 0, fish: 0 });
  const [money, setMoney] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;

  const mapSize = { width: 4000, height: 4000 };
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [charPos, setCharPos] = useState({ x: 2000, y: 2000 });
  const [direction, setDirection] = useState('down');
  const [charSize, setCharSize] = useState({ width: 40, height: 40 });

  const [health, setHealth] = useState(5);
  const [hunger, setHunger] = useState(5);
  const [gameTimeMinutes, setGameTimeMinutes] = useState(420); // 07:00 = 420 minutes
  const startTimeRef = useRef(Date.now());
  const [isAttacking, setIsAttacking] = useState(false);
  const audioRef = useRef(new Audio(slashSound));

  const requiredLionKills = 2 * playerLevel + 1;
  const requiredGiantSpiritKills = 5;
  const maxEnemies = 10;
  const maxHealth = 5;
  const maxHunger = 5;

  const isNightTime = useCallback(() => {
    const hours = Math.floor(gameTimeMinutes / 60) % 24;
    return hours >= 18 || hours < 6; // Night time: 18:00 to 05:59
  }, [gameTimeMinutes]);

  const formatGameTime = useCallback((minutes) => {
    const totalMinutes = minutes % (24 * 60);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  }, []);

  const checkGreeting = useCallback((minutes) => {
    const hours = Math.floor(minutes / 60) % 24;
    if (hours === 6 && hours !== lastGreetingHour) return 'Good Morning';
    if (hours === 12 && hours !== lastGreetingHour) return 'Good Afternoon';
    if (hours === 15 && hours !== lastGreetingHour) return 'Good Evening';
    if (hours === 18 && hours !== lastGreetingHour) return 'Good Night';
    return '';
  }, [lastGreetingHour]);

  const clampCharPos = useCallback((x, y) => {
    const clampedX = Math.min(Math.max(x, 0), mapSize.width - charSize.width);
    const clampedY = Math.min(Math.max(y, 0), mapSize.height - charSize.height);
    return { x: clampedX, y: clampedY };
  }, [mapSize.width, mapSize.height, charSize.width, charSize.height]);

  const getRandomPosition = useCallback(() => {
    const minX = 500;
    const maxX = mapSize.width - 500;
    const minY = 500;
    const maxY = mapSize.height - 500;
    let pos;
    do {
      pos = {
        x: Math.floor(Math.random() * (maxX - minX) + minX),
        y: Math.floor(Math.random() * (maxY - minY) + minY),
      };
    } while (
      (pos.x < 3450 + 280 && pos.x + 200 > 3450 && pos.y < 2000 + 250 && pos.y + 200 > 2000) ||
      (pos.x < 80 + 3880 && pos.x + 200 > 80 && pos.y < 3700 + 450 && pos.y + 200 > 3700) ||
      (pos.x < 80 + 980 && pos.x + 200 > 80 && pos.y < 100 + 750 && pos.y + 200 > 100) ||
      (pos.x < 2315 + 100 && pos.x + 200 > 2315 && pos.y < 650 + 100 && pos.y + 200 > 650)
    );
    return pos;
  }, [mapSize.width, mapSize.height]);

  const getCharacterImage = useCallback((character, direction, isAttacking, isHit = false) => {
    const { name, image } = character || {};

    if (!name) return image || GoldKnight_down; // Fallback to default image

    if (name === 'GiantSpirit') {
      return isHit ? Hit : Idle;
    }

    if (isAttacking) {
      switch (name) {
        case 'Captain':
          return {
            up: GoldKnight_attack_up,
            down: GoldKnight_attack_down,
            left: GoldKnight_attack_left,
            right: GoldKnight_attack_right,
          }[direction];
        case 'Knight':
          return {
            up: knight_attack_up_knight,
            down: knight_attack_down_knight,
            left: knight_attack_left_knight,
            right: knight_attack_right_knight,
          }[direction];
        case 'Mage':
          return {
            up: hunter_attack_up,
            down: hunter_attack_down,
            left: hunter_attack_left,
            right: hunter_attack_right,
          }[direction];
        case 'Lion':
          return {
            up: lion_attack_up,
            down: lion_attack_down,
            left: lion_attack_left,
            right: lion_attack_right,
          }[direction];
        case 'Skeleton':
          return {
            up: skeleton_attack_up,
            down: skeleton_attack_down,
            left: skeleton_attack_left,
            right: skeleton_attack_right,
          }[direction];
        default:
          return image || GoldKnight_down;
      }
    } else {
      switch (name) {
        case 'Captain':
          return {
            up: GoldKnight_up,
            down: GoldKnight_down,
            left: GoldKnight_left,
            right: GoldKnight_right,
          }[direction];
        case 'Knight':
          return {
            up: knight_up,
            down: knight_down,
            left: knight_left,
            right: knight_right,
          }[direction];
        case 'Mage':
          return {
            up: Hunter_up,
            down: Hunter_down,
            left: Hunter_left,
            right: Hunter_right,
          }[direction];
        case 'Lion':
          return {
            up: lion_up,
            down: lion_down,
            left: lion_left,
            right: lion_right,
          }[direction];
        case 'Skeleton':
          return {
            up: skeleton_up,
            down: skeleton_down,
            left: skeleton_left,
            right: skeleton_right,
          }[direction];
        default:
          return image || GoldKnight_down;
      }
    }
  }, []);

  const handleSleep = useCallback(() => {
  if (isNightTime() && !isSleeping) {
    setIsSleeping(true);
    setNotification('Good Night');
    console.log('Player started sleeping at', formatGameTime(gameTimeMinutes));
    setTimeout(() => setNotification(''), 3000);

    // Simulate sleep until 7:00 AM
    setTimeout(() => {
      setGameTimeMinutes(420); // Set to 7:00 AM
      startTimeRef.current = Date.now(); // Reset start time to sync with 7:00 AM
      setIsSleeping(false);
      setNotification('Good Morning');
      setLastGreetingHour(6);
      console.log('Player woke up at', formatGameTime(420));
      setTimeout(() => setNotification(''), 3000);
      // Restore health and hunger
      setHealth(maxHealth);
      setHunger(maxHunger);
    }, 3000); // Sleep duration (3 seconds for simulation)
  }
}, [isNightTime, isSleeping, gameTimeMinutes, formatGameTime, maxHealth, maxHunger]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSleeping) return; // Pause game time progression during sleep

      const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const newGameTimeMinutes = 420 + elapsedSeconds;
      setGameTimeMinutes(newGameTimeMinutes);
      console.log(`Game time updated: ${formatGameTime(newGameTimeMinutes)}`);

      const greeting = checkGreeting(newGameTimeMinutes);
      if (greeting) {
        setNotification(greeting);
        setLastGreetingHour(Math.floor(newGameTimeMinutes / 60) % 24);
        console.log(`Greeting: ${greeting} at ${formatGameTime(newGameTimeMinutes)}`);
        setTimeout(() => setNotification(''), 3000);
      }

      if (elapsedSeconds % 120 === 0 && elapsedSeconds > 0) {
        setHunger((prevHunger) => {
          if (prevHunger > 0) {
            console.log(`Hunger decreased to ${prevHunger - 1} at ${formatGameTime(newGameTimeMinutes)}`);
            return prevHunger - 1;
          } else {
            setHealth((prevHealth) => {
              const newHealth = prevHealth > 0 ? prevHealth - 1 : 0;
              console.log(`Health decreased to ${newHealth} due to starvation at ${formatGameTime(newGameTimeMinutes)}`);
              if (newHealth === 0) {
                setShowDeathModal(true);
              }
              return newHealth;
            });
            return 0;
          }
        });
      }

      if (elapsedSeconds % 30 === 0 && hunger === maxHunger && health < maxHealth) {
        setHealth((prevHealth) => {
          const newHealth = Math.min(prevHealth + 1, maxHealth);
          console.log(`Health increased to ${newHealth} at ${formatGameTime(newGameTimeMinutes)}`);
          return newHealth;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hunger, health, maxHealth, maxHunger, checkGreeting, formatGameTime, isSleeping]);

  useEffect(() => {
    function onResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newCharWidth = Math.max(20, Math.min(40, width * 0.05));
      const newCharHeight = newCharWidth;
      setCharSize({ width: newCharWidth, height: newCharHeight });
      setViewportSize({ width, height });
    }

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (showDeathModal || isSleeping) return;

      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        return;
      }

      setCharPos((pos) => {
        let newX = pos.x;
        let newY = pos.y;
        const step = 15;

        switch (e.key) {
          case 'ArrowUp':
            newY -= step;
            setDirection('up');
            break;
          case 'ArrowDown':
            newY += step;
            setDirection('down');
            break;
          case 'ArrowLeft':
            newX -= step;
            setDirection('left');
            break;
          case 'ArrowRight':
            newX += step;
            setDirection('right');
            break;
          default:
            break;
        }

        return clampCharPos(newX, newY);
      });
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clampCharPos, showDeathModal, isSleeping]);

  useEffect(() => {
    if (isInDungeon || isInBeach || isInMountain || isSleeping) return;

    const boxX = 3450,
      boxY = 2000,
      boxW = 280,
      boxH = 250;
    const isColliding =
      charPos.x < boxX + boxW &&
      charPos.x + charSize.width > boxX &&
      charPos.y < boxY + boxH &&
      charPos.y + charSize.height > boxY;

    if (isColliding && !hasTriggeredBox) {
      setHasTriggeredBox(true);
      setShowTeleportModal(true);
      setModalRejected(false);
    } else if (!isColliding && hasTriggeredBox) {
      setHasTriggeredBox(false);
      setShowTeleportModal(false);
      setModalRejected(false);
    }
  }, [charPos, charSize, hasTriggeredBox, isInDungeon, isInBeach, isInMountain, isSleeping]);

  useEffect(() => {
    if (isInDungeon || isInBeach || isInMountain || isSleeping) return;

    const boxX = 80,
      boxY = 3700,
      boxW = 3880,
      boxH = 450;
    const isColliding =
      charPos.x < boxX + boxW &&
      charPos.x + charSize.width > boxX &&
      charPos.y < boxY + boxH &&
      charPos.y + charSize.height > boxY;

    if (isColliding && !hasTriggeredBeachBox) {
      setHasTriggeredBeachBox(true);
      setShowBeachModal(true);
      setBeachModalRejected(false);
    } else if (!isColliding && hasTriggeredBeachBox) {
      setHasTriggeredBeachBox(false);
      setShowBeachModal(false);
      setBeachModalRejected(false);
    }
  }, [charPos, charSize, hasTriggeredBeachBox, isInDungeon, isInBeach, isInMountain, isSleeping]);

  useEffect(() => {
    if (isInDungeon || isInBeach || isInMountain || isSleeping) return;

    const boxX = 80,
      boxY = 100,
      boxW = 980,
      boxH = 750;
    const isColliding =
      charPos.x < boxX + boxW &&
      charPos.x + charSize.width > boxX &&
      charPos.y < boxY + boxH &&
      charPos.y + charSize.height > boxY;

    if (isColliding && !hasTriggeredMountainBox) {
      setHasTriggeredMountainBox(true);
      setShowMountainModal(true);
      setMountainModalRejected(false);
    } else if (!isColliding && hasTriggeredMountainBox) {
      setHasTriggeredMountainBox(false);
      setShowMountainModal(false);
      setMountainModalRejected(false);
    }
  }, [charPos, charSize, hasTriggeredMountainBox, isInDungeon, isInBeach, isInMountain, isSleeping]);

  useEffect(() => {
    if (isInDungeon || isInBeach || isInMountain || isSleeping) return;

    const boxFX = boxFPos.x,
      boxFY = boxFPos.y,
      boxFW = 350,
      boxFH = 600;
    const isColliding =
      charPos.x < boxFX + boxFW &&
      charPos.x + charSize.width > boxFX &&
      charPos.y < boxFY + boxFH &&
      charPos.y + charSize.height > boxFY;

    if (isColliding && !hasTriggeredBoxF) {
      setHasTriggeredBoxF(true);
      setShowBoxFModal(true);
    } else if (!isColliding && hasTriggeredBoxF) {
      setHasTriggeredBoxF(false);
      setShowBoxFModal(false);
    }
  }, [charPos, charSize, boxFPos, hasTriggeredBoxF, isInDungeon, isInBeach, isInMountain, isSleeping]);

  useEffect(() => {
    if (!isInBeach || isSleeping) return;

    const boxX = beachShopPos.x,
      boxY = beachShopPos.y,
      boxW = 400,
      boxH = 400;
    const isColliding =
      charPos.x < boxX + boxW &&
      charPos.x + charSize.width > boxX &&
      charPos.y < boxY + boxH &&
      charPos.y + charSize.height > boxY;

    if (isColliding && !hasTriggeredBeachShopBox) {
      setHasTriggeredBeachShopBox(true);
      setShowBeachShopModal(true);
    } else if (!isColliding && hasTriggeredBeachShopBox) {
      setHasTriggeredBeachShopBox(false);
      setShowBeachShopModal(false);
    }
  }, [charPos, charSize, beachShopPos, hasTriggeredBeachShopBox, isInBeach, isSleeping]);
  

  useEffect(() => {
    if (isInDungeon || isInBeach || isInMountain || isSleeping) return;

    const boxSX = sleepPos.x,
      boxSY = sleepPos.y,
      boxSW = 100,
      boxSH = 100;
    const isColliding =
      charPos.x < boxSX + boxSW &&
      charPos.x + charSize.width > boxSX &&
      charPos.y < boxSY + boxSH &&
      charPos.y + charSize.height > boxSY;
      

    if (isColliding && !hasTriggeredSleepBox) {
      setHasTriggeredSleepBox(true);
    } else if (!isColliding && hasTriggeredSleepBox) {
      setHasTriggeredSleepBox(false);
    }
  }, [charPos, charSize, sleepPos, hasTriggeredSleepBox, isInDungeon, isInBeach, isInMountain, isSleeping]);

  useEffect(() => {
    let timer;
    if (!showTeleportModal && hasTriggeredBox && !isInDungeon && modalRejected) {
      timer = setTimeout(() => setShowTeleportModal(true), 5000);
    }
    return () => clearTimeout(timer);
  }, [showTeleportModal, hasTriggeredBox, isInDungeon, modalRejected]);

  useEffect(() => {
    let timer;
    if (!showBeachModal && hasTriggeredBeachBox && !isInBeach && beachModalRejected) {
      timer = setTimeout(() => setShowBeachModal(true), 5000);
    }
    return () => clearTimeout(timer);
  }, [showBeachModal, hasTriggeredBeachBox, isInBeach, beachModalRejected]);

  useEffect(() => {
    let timer;
    if (!showMountainModal && hasTriggeredMountainBox && !isInMountain && mountainModalRejected) {
      timer = setTimeout(() => setShowMountainModal(true), 5000);
    }
    return () => clearTimeout(timer);
  }, [showMountainModal, hasTriggeredMountainBox, isInMountain, mountainModalRejected]);

  useEffect(() => {
    if (!isInDungeon && !isInMountain) return;
    if (!enemies || enemies.length === 0) return;

    const interval = setInterval(() => {
      setEnemies((prev) =>
        prev.map((enemy) => {
          if (enemy.health <= 0) return enemy;

          const dx = charPos.x - enemy.position.x;
          const dy = charPos.y - enemy.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const speed = 5;

          let newDirection = enemy.direction;
          if (Math.abs(dx) > Math.abs(dy)) {
            newDirection = dx > 0 ? 'right' : 'left';
          } else {
            newDirection = dy > 0 ? 'down' : 'up';
          }

          let newX = enemy.position.x;
          let newY = enemy.position.y;
          if (distance > 50) {
            newX += (dx / distance) * speed;
            newY += (dy / distance) * speed;
          }

          const newPos = clampCharPos(newX, newY);

          const isEnemyAttacking = distance < 60 && !enemy.isAttacking;
          if (isEnemyAttacking) {
            setHealth((prevHealth) => {
              const newHealth = prevHealth > 0 ? prevHealth - 1 : 0;
              console.log(`Health decreased to ${newHealth} by ${enemy.type} at ${formatGameTime(gameTimeMinutes)}`);
              if (newHealth === 0) {
                setShowDeathModal(true);
              }
              return newHealth;
            });
          }

          return {
            ...enemy,
            position: newPos,
            direction: newDirection,
            isAttacking: isEnemyAttacking,
          };
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, [isInDungeon, isInMountain, enemies, charPos, clampCharPos, gameTimeMinutes, formatGameTime]);

  useEffect(() => {
    if (!enemies || enemies.length === 0) return;

    const timers = enemies.map((enemy, index) => {
      if (enemy.isHit) {
        return setTimeout(() => {
          setEnemies((prev) => {
            const newEnemies = [...prev];
            newEnemies[index] = { ...newEnemies[index], isHit: false };
            return newEnemies;
          });
        }, 300);
      }
      return null;
    });

    return () => timers.forEach((timer) => timer && clearTimeout(timer));
  }, [enemies]);

  useEffect(() => {
    if (!isInDungeon && !isInMountain) return;

    const respawnInterval = setInterval(() => {
      setEnemies((prev) => {
        const livingEnemies = prev.filter((enemy) => enemy.health > 0);
        if (livingEnemies.length >= maxEnemies) return prev;

        const newEnemy = {
          type: isInMountain ? 'GiantSpirit' : selectedLevel === 1 ? 'Lion' : 'Skeleton',
          position: getRandomPosition(),
          direction: 'down',
          isAttacking: false,
          isHit: false,
          health: isInMountain ? 6 : 3,
        };

        return [...prev, newEnemy];
      });
    }, 10000);

    return () => clearInterval(respawnInterval);
  }, [isInDungeon, isInMountain, selectedLevel, getRandomPosition, maxEnemies]);

  const handleAttack = useCallback(() => {
    if (!isAttacking && !showDeathModal && !isSleeping) {
      setIsAttacking(true);
      setShowSlashEffect(true);
      audioRef.current.currentTime = 0; // Rewind audio to start
      audioRef.current.play().catch((error) => console.log('Audio playback error:', error));
      setTimeout(() => {
        setIsAttacking(false);
        setShowSlashEffect(false);
      }, 300);

      if (!enemies || enemies.length === 0) return;

      setEnemies((prev) => {
        let newLionKills = lionKills;
        let newGiantSpiritKills = giantSpiritKills;
        const updatedEnemies = prev.map((enemy) => {
          if (enemy.health <= 0) return enemy;

          const dx = charPos.x - enemy.position.x;
          const dy = charPos.y - enemy.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            const newHealth = enemy.health - 1;
            if (newHealth <= 0) {
              console.log(`Enemy died, coin dropped: ${enemy.type} at ${formatGameTime(gameTimeMinutes)}`);
              setInventory((prev) => ({ ...prev, goldCoins: prev.goldCoins + 1 }));
              if (enemy.type === 'Lion') {
                newLionKills += 1;
              } else if (enemy.type === 'GiantSpirit') {
                newGiantSpiritKills += 1;
              }
            }
            return {
              ...enemy,
              health: newHealth,
              isHit: newHealth > 0,
            };
          }
          return enemy;
        });

        if (isInDungeon && newLionKills >= requiredLionKills) {
          setPlayerLevel((prevLevel) => prevLevel + 1);
          setLionKills(0);
          console.log(`Level up to ${playerLevel + 1} from Lion kills at ${formatGameTime(gameTimeMinutes)}`);
        } else {
          setLionKills(newLionKills);
        }

        if (isInMountain && newGiantSpiritKills >= requiredGiantSpiritKills) {
          setPlayerLevel((prevLevel) => prevLevel + 1);
          setGiantSpiritKills(0);
          console.log(`Level up to ${playerLevel + 1} from GiantSpirit kills at ${formatGameTime(gameTimeMinutes)}`);
        } else {
          setGiantSpiritKills(newGiantSpiritKills);
        }

        return updatedEnemies;
      });
    }
  }, [
    isAttacking,
    showDeathModal,
    isSleeping,
    enemies,
    charPos,
    lionKills,
    giantSpiritKills,
    isInDungeon,
    isInMountain,
    requiredLionKills,
    requiredGiantSpiritKills,
    playerLevel,
    gameTimeMinutes,
    formatGameTime,
  ]);

  const handleSellGoldCoin = useCallback(
    (quantity) => {
      if (inventory.goldCoins >= (quantity === 'all' ? 1 : quantity)) {
        let moneyEarned = 0;
        let coinsSold = quantity;

        if (quantity === 'all') {
          coinsSold = inventory.goldCoins;
          moneyEarned = Math.floor(coinsSold * 10.5);
        } else if (quantity === 5) {
          coinsSold = 5;
          moneyEarned = 55;
        } else {
          moneyEarned = 10 * quantity;
        }

        setInventory((prev) => ({ ...prev, goldCoins: prev.goldCoins - coinsSold }));
        setMoney((prev) => prev + moneyEarned);
        console.log(
          `Sold ${coinsSold} coin(s), Inventory: ${inventory.goldCoins - coinsSold}, Money: ${money + moneyEarned}`
        );
        setShowBoxFModal(false);
        setHasTriggeredBoxF(false);
      }
    },
    [inventory.goldCoins, money]
  );

  const handleBuyFish = useCallback(() => {
    if (money >= 40) {
      setMoney((prev) => prev - 40);
      setInventory((prev) => ({ ...prev, fish: prev.fish + 1 }));
      console.log(`Bought 1 fish, Money: ${money - 40}, Fish: ${inventory.fish + 1}`);
      setShowBeachShopModal(false);
      setHasTriggeredBeachShopBox(false);
    }
  }, [money, inventory.fish]);

  const handleConsumeFish = useCallback(() => {
    if (inventory.fish > 0 && hunger < maxHunger) {
      setInventory((prev) => ({ ...prev, fish: prev.fish - 1 }));
      setHunger((prev) => Math.min(prev + 1, maxHunger));
      console.log(`Consumed 1 fish, Hunger: ${Math.min(hunger + 1, maxHunger)}, Fish: ${inventory.fish - 1}`);
    }
  }, [inventory.fish, hunger, maxHunger]);

  const handleReturnToMap = useCallback(() => {
    setIsInDungeon(false);
    setIsInBeach(false);
    setIsInMountain(false);
    setShowMountainModal(false);
    setHasTriggeredMountainBox(false);
    setMountainModalRejected(false);
    setShowTeleportModal(false);
    setHasTriggeredBox(false);
    setModalRejected(false);
    setShowBeachModal(false);
    setHasTriggeredBeachBox(false);
    setBeachModalRejected(false);
    setShowBoxFModal(false);
    setHasTriggeredBoxF(false);
    setShowBeachShopModal(false);
    setHasTriggeredBeachShopBox(false);
    setIsSleeping(false);
    setHasTriggeredSleepBox(false);
    setCharPos({ x: 2000, y: 2000 });
    setEnemies([]);
    setSelectedLevel(1);
    setShowDeathModal(false);
    console.log('Returned to main map');
  }, []);

  const handleReturnToMapPreserve = useCallback(() => {
    setIsInDungeon(false);
    setIsInBeach(false);
    setIsInMountain(false);
    setShowMountainModal(false);
    setHasTriggeredMountainBox(false);
    setShowTeleportModal(false);
    setHasTriggeredBox(false);
    setShowBeachModal(false);
    setHasTriggeredBeachBox(false);
    setShowBoxFModal(false);
    setHasTriggeredBoxF(false);
    setShowBeachShopModal(false);
    setHasTriggeredBeachShopBox(false);
    setIsSleeping(false);
    setHasTriggeredSleepBox(false);
    setCharPos({ x: 2000, y: 2000 });
    setEnemies([]);
    setSelectedLevel(1);
    setShowDeathModal(false);
    console.log('Returned to main map with preserved stats: Level=', playerLevel, 'Health=', health, 'Hunger=', hunger);
  }, [playerLevel, health, hunger]);

  useEffect(() => {
    console.log('Current state:', { isInDungeon, isInBeach, isInMountain, showDeathModal, isSleeping });
  }, [isInDungeon, isInBeach, isInMountain, showDeathModal, isSleeping]);

  if (!character) {
    console.log('Character data not found');
    return (
      <div className="game-container">
        <div className="modal-content">
          <h2>Data karakter tidak ditemukan.</h2>
          <button className="modal-button" onClick={() => navigate('/')}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const cameraX = Math.min(
    Math.max(0, charPos.x + charSize.width / 2 - viewportSize.width / 2),
    mapSize.width - viewportSize.width
  );
  const cameraY = Math.min(
    Math.max(0, charPos.y + charSize.height / 2 - viewportSize.height / 2),
    mapSize.height - viewportSize.height
  );
  const charScreenX = charPos.x - cameraX;
  const charScreenY = charPos.y - cameraY;

  return (
    <div className="game-container">
      {notification && <div className="notification">{notification}</div>}

      {showDeathModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Game Over</h2>
            <p>Kesehatan Anda telah habis. Kembali ke peta utama untuk melanjutkan.</p>
            <button className="modal-button" onClick={handleReturnToMap}>
              Kembali ke Peta Utama
            </button>
          </div>
        </div>
      )}

      {isSleeping && !showDeathModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Time to Sleep</h2>
            <p>You are resting until morning...</p>
            <button
              className="modal-button"
              onClick={() => navigate('/')}
              style={{ background: 'linear-gradient(45deg, #007bff, #66b3ff)' }}
            >
              Back to Main Map
            </button>
          </div>
        </div>
      )}

      {showTeleportModal && !showDeathModal && !isSleeping && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => {
                setShowTeleportModal(false);
                setModalRejected(true);
              }}
              className="close-button"
              aria-label="Close modal"
            >
              ×
            </button>
            <p>Pilih level dungeon:</p>
            <button
              onClick={() => {
                console.log('Entering Dungeon Level 1');
                setIsInDungeon(true);
                setShowTeleportModal(false);
                setCharPos({ x: 1000, y: 1000 });
                setHasTriggeredBox(false);
                setSelectedLevel(1);
                setEnemies([
                  { type: 'Lion', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                  { type: 'Lion', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                  { type: 'Lion', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                  { type: 'Lion', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                ]);
              }}
              className="modal-button"
            >
              Level 1 (Lion)
            </button>
            <button
              onClick={() => {
                if (playerLevel >= 5) {
                  console.log('Entering Dungeon Level 2');
                  setIsInDungeon(true);
                  setShowTeleportModal(false);
                  setCharPos({ x: 1000, y: 1000 });
                  setHasTriggeredBox(false);
                  setSelectedLevel(5);
                  setEnemies([
                    { type: 'Skeleton', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                    { type: 'Skeleton', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                    { type: 'Skeleton', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 3 },
                  ]);
                }
              }}
              className="modal-button"
              disabled={playerLevel < 5}
            >
              Level 5 (Skeleton) {playerLevel < 1 ? '(Level Up Dulu Bos!)' : ''}
            </button>
          </div>
        </div>
      )}

      {showBeachModal && !showDeathModal && !isSleeping && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => {
                setShowBeachModal(false);
                setBeachModalRejected(true);
              }}
              className="close-button"
              aria-label="Close modal"
            >
              ×
            </button>
            <p>Apakah Anda akan masuk ke arena pantai?</p>
            <button
              onClick={() => {
                console.log('Entering Beach');
                setIsInBeach(true);
                setShowBeachModal(false);
                setCharPos({ x: 1000, y: 1000 });
                setHasTriggeredBeachBox(false);
              }}
              className="modal-button"
            >
              Ya
            </button>
            <button
              onClick={() => {
                setShowBeachModal(false);
                setBeachModalRejected(true);
              }}
              className="modal-button cancel"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {showMountainModal && !showDeathModal && !isSleeping && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => {
                setShowMountainModal(false);
                setMountainModalRejected(true);
              }}
              className="close-button"
              aria-label="Close modal"
            >
              ×
            </button>
            <p>Apakah Anda ingin masuk ke arena gunung? {playerLevel < 1 ? '(Level Up Dulu Bos!)' : ''}</p>
            <button
              onClick={() => {
                if (playerLevel >= 1) {
                  console.log('Entering Mountain');
                  setIsInMountain(true);
                  setShowMountainModal(false);
                  setCharPos({ x: 1000, y: 1000 });
                  setHasTriggeredMountainBox(false);
                  setEnemies([
                    { type: 'GiantSpirit', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 6 },
                    { type: 'GiantSpirit', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 6 },
                    { type: 'GiantSpirit', position: getRandomPosition(), direction: 'down', isAttacking: false, isHit: false, health: 6 },
                  ]);
                }
              }}
              className="modal-button"
              disabled={playerLevel < 1}
            >
              Ya
            </button>
            <button
              onClick={() => {
                setShowMountainModal(false);
                setMountainModalRejected(true);
              }}
              className="modal-button cancel"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {showBoxFModal && !showDeathModal && !isSleeping && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => {
                setShowBoxFModal(false);
                setHasTriggeredBoxF(false);
              }}
              className="close-button"
              aria-label="Close"
            >
              ×
            </button>
            <p>
              Anda berada di Toko Jual! Anda memiliki{' '}
              <img src={gold_coin} alt="Gold Coin" className="inventory-item-img" />
              x {inventory.goldCoins}. Pilih opsi penjualan:
            </p>
            <button
              onClick={() => handleSellGoldCoin(1)}
              className="modal-button"
              disabled={inventory.goldCoins < 1}
            >
              Jual 1 Koin (10 Money)
            </button>
            <button
              onClick={() => handleSellGoldCoin(5)}
              className="modal-button"
              disabled={inventory.goldCoins < 5}
            >
              Jual 5 Koin (55 Money)
            </button>
            <button
              onClick={() => handleSellGoldCoin('all')}
              className="modal-button"
              disabled={inventory.goldCoins < 1}
            >
              Jual Semua Koin ({Math.floor(inventory.goldCoins * 10.5)} Money)
            </button>
            <button
              onClick={() => {
                setShowBoxFModal(false);
                setHasTriggeredBoxF(false);
              }}
              className="modal-button cancel"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {showBeachShopModal && !showDeathModal && !isSleeping && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => {
                setShowBeachShopModal(false);
                setHasTriggeredBeachShopBox(false);
              }}
              className="close-button"
              aria-label="Close"
            >
              ×
            </button>
            <p>
              Anda berada di Toko Pantai! Anda memiliki 💰 {money}. Beli ikan untuk mengisi energi:
            </p>
            <button onClick={handleBuyFish} className="modal-button" disabled={money < 40}>
              Beli 1 Ikan (40 Money)
            </button>
            <button
              onClick={() => {
                setShowBeachShopModal(false);
                setHasTriggeredBeachShopBox(false);
              }}
              className="modal-button cancel"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      <h2 className="status-header">
        Status:{' '}
        {isSleeping ? (
          'Sleeping'
        ) : isInDungeon ? (
          `Di Dungeon (Level ${selectedLevel})`
        ) : isInBeach ? (
          'Di Arena Pantai'
        ) : isInMountain ? (
          'Di Arena Gunung'
        ) : (
          'Di Map Beranda'
        )}
      </h2>
      <p className="position-info">
        Posisi Karakter: X = {Math.floor(charPos.x)}, Y = {Math.floor(charPos.y)} | Waktu:{' '}
        {formatGameTime(gameTimeMinutes)}
      </p>

      <div className="status-panel">
        <div className="status-row">
          <strong>Health:</strong>
          <div className="health-container">
            <div className="health-bar">
              <div className="health-fill" style={{ width: `${(health / maxHealth) * 100}%` }}></div>
            </div>
            <img
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23ff3377'%3E%3Cpath d='M12 4.5C7 4.5 2.73 8.11 1 12c0.73 3.89 5 7.5 10 7.5s9.27-3.61 10-7.5c-0.73-3.89-5-7.5-10-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'/%3E%3C/svg%3E"
              alt="Health Icon"
              style={{ width: '20px', height: '20px', marginLeft: '8px' }}
            />
          </div>
        </div>
        <div className="status-row">
          <strong>Hunger:</strong>
          <div className="hunger-container">
            <div className="hunger-bar">
              <div className="hunger-fill" style={{ width: `${(hunger / maxHunger) * 100}%` }}></div>
            </div>
            <img
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%2300ffcc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E"
              alt="Hunger Icon"
              style={{ width: '20px', height: '20px', marginLeft: '8px' }}
            />
          </div>
        </div>
        <div className="status-row">
          <strong>Player Level:</strong>
          <span style={{ color: '#00ffcc', textShadow: '0 0 6px #00ffcc' }}>{playerLevel}</span>
        </div>
        <div className="status-row">
          <strong>Money:</strong>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='%23ffd700'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/svg%3E"
              alt="Coin Icon"
              style={{ width: '20px', height: '20px' }}
            />
            {money}
          </span>
        </div>
        <div className="status-row">
          <strong>Inventory:</strong>
          <div className="inventory-item">
            <img src={gold_coin} alt="Gold Coin" className="inventory-item-img" />
            x {inventory.goldCoins}
            <span style={{ marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <img
                src={fish}
                alt="Fish"
                className="inventory-item-img"
                style={{ cursor: inventory.fish > 0 && hunger < maxHunger ? 'pointer' : 'not-allowed' }}
                onClick={handleConsumeFish}
              />
              x {inventory.fish}
            </span>
          </div>
        </div>
        {isInDungeon && selectedLevel === 1 && (
          <div className="status-row">
            <strong>Lion Kills:</strong>
            {lionKills}/{requiredLionKills} for Level {playerLevel + 1}
          </div>
        )}
        {isInMountain && (
          <div className="status-row">
            <strong>GiantSpirit Kills:</strong>
            {giantSpiritKills}/{requiredGiantSpiritKills} for Level {playerLevel + 1}
          </div>
        )}
        {(isInDungeon || isInMountain) && enemies.length > 0 && (
          <div className="status-row">
            <strong>Enemies:</strong>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {enemies.map((enemy, i) =>
                enemy.health > 0 ? (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {enemy.type} {i + 1}:{' '}
                    <div className="health-bar" style={{ width: '60px', height: '10px' }}>
                      <div
                        className="health-fill"
                        style={{ width: `${(enemy.health / (isInMountain ? 6 : 3)) * 100}%` }}
                      ></div>
                    </div>
                  </span>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>

      <div className="game-map">
        <img
          src={isInDungeon ? Temple : isInBeach ? Pantai : isInMountain ? Mountain : mapBg}
          alt="Map"
          className="map-image"
          style={{
            top: -cameraY,
            left: -cameraX,
            width: mapSize.width,
            height: mapSize.height,
          }}
          draggable={false}
        />

        {!isInDungeon && !isInBeach && !isInMountain && (
          <>
            <div
              className="entity-box"
              style={{
                top: 2000 - cameraY,
                left: 3450 - cameraX,
                width: 280,
                height: 250,
              }}
            ></div>
            <div
              className="entity-box"
              style={{
                top: 100 - cameraY,
                left: 80 - cameraX,
                width: 980,
                height: 750,
              }}
            ></div>
            <div
              className="entity-box"
              style={{
                top: 3700 - cameraY,
                left: 80 - cameraX,
                width: 3880,
                height: 450,
              }}
            ></div>
            <div
              className="entity-box"
              style={{
                top: 2100 - cameraY,
                left: 510 - cameraX,
                width: 350,
                height: 600,
              }}
            ></div>
            <div
              className="entity-box"
              style={{
                top: sleepPos.y - cameraY,
                left: sleepPos.x - cameraX,
                width: 100,
                height: 100,
              }}
            ></div>
          </>
        )}

        {isInBeach && (
          <div
            className="entity-box"
            style={{
              top: beachShopPos.y - cameraY,
              left: beachShopPos.x - cameraX,
              width: 400,
              height: 400,
            }}
          ></div>
        )}

        {(isInDungeon || isInMountain) && enemies.length > 0 && enemies.map((enemy, index) =>
          enemy.health > 0 ? (
            <img
              key={index}
              src={getCharacterImage({ name: enemy.type }, enemy.direction, enemy.isAttacking, enemy.isHit)}
              alt={`${enemy.type}-${index}`}
              className="entity-image"
              style={{
                top: enemy.position.y - cameraY,
                left: enemy.position.x - cameraX,
                width: enemy.type === 'GiantSpirit' ? charSize.width * 1.5 : charSize.width,
                height: enemy.type === 'GiantSpirit' ? charSize.height * 1.5 : charSize.height,
              }}
              draggable={false}
            />
          ) : null
        )}

        <img
          src={getCharacterImage(character, direction, isAttacking)}
          alt={character.name}
          className="character-image"
          style={{
            top: charScreenY,
            left: charScreenX,
            width: charSize.width,
            height: charSize.height,
          }}
          draggable={false}
        />

        {showSlashEffect && (
          <img
            src={slashefek}
            alt="Slash Effect"
            className="slash-effect"
            style={{
              top: charScreenY + (direction === 'up' ? -charSize.height : direction === 'down' ? charSize.height : 0),
              left: charScreenX + (direction === 'left' ? -charSize.width : direction === 'right' ? charSize.width : 0),
              width: charSize.width,
              height: charSize.height,
              transform:
                direction === 'up' ? 'rotate(270deg)' :
                direction === 'down' ? 'rotate(90deg)' :
                direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)',
              position: 'absolute',
              zIndex: 1100,
            }}
            draggable={false}
          />
        )}

        <MapNavigationButtons
          onReturn={handleReturnToMap}
          onReturnPreserve={handleReturnToMapPreserve}
          isVisible={(isInDungeon || isInBeach || isInMountain) && !showDeathModal}
        />

        {hasTriggeredSleepBox && !isSleeping && isNightTime() && (
          <button
            onClick={() => {
              console.log('Sleep button clicked');
              handleSleep();
            }}
            className="modern-button"
            style={{
              position: 'fixed',
              bottom: '300px',
              right: '20px',
              zIndex: 1200,
              background: 'linear-gradient(45deg, #4b0082, #8a2be2)',
            }}
          >
            Sleep
          </button>
        )}
      </div>

      <button
        onClick={() => {
          console.log('Attack button clicked');
          handleAttack();
        }}
        className="attack-button"
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          zIndex: 1200,
        }}
        disabled={showDeathModal || isSleeping}
      >
        <img src={serang} alt="Serang" />
      </button>

      <button
        onClick={() => {
          console.log('Exiting to Beranda');
          navigate('/');
        }}
        className="modern-button"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1200,
          background: 'linear-gradient(45deg, #007bff, #66b3ff)',
        }}
      >
        Keluar ke Beranda
      </button>
    </div>
  );
}
