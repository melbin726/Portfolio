import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { Refresh, Close, Apps, Mouse, Tag, Gesture, Keyboard, Timeline } from '@mui/icons-material';
import { useThemeContext } from '../ThemeContext';
import MemoryGame from '../components/MemoryGame';

// --- Styled Components ---

const PageContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '60px',
    background: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
}));

const GameCard = styled(Card)(({ theme }) => ({
    height: '100%',
    borderRadius: '24px',
    background: theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.6)' : 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(20px)',
    border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }
}));

const GameIconBox = styled(Box)(({ theme, color }) => ({
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    background: color || theme.palette.primary.main,
    color: '#fff',
}));



// --- SUDOKU LOGIC ---
// Simple Pre-filled Sudoku for Demo (Full generation is complex)
const INITIAL_BOARD = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const SudokuGame = () => {
    const [board, setBoard] = useState(JSON.parse(JSON.stringify(INITIAL_BOARD)));
    const [selected, setSelected] = useState(null);

    const handleCellClick = (r, c) => {
        if (INITIAL_BOARD[r][c] === 0) {
            setSelected([r, c]);
        }
    };

    const handleNumberInput = (num) => {
        if (selected) {
            const [r, c] = selected;
            const newBoard = [...board];
            newBoard[r][c] = num;
            setBoard(newBoard);
        }
    };

    const reset = () => {
        setBoard(JSON.parse(JSON.stringify(INITIAL_BOARD)));
        setSelected(null);
    };

    return (
        <Box width="100%" maxWidth="400px">
            <Box display="grid" gridTemplateColumns="repeat(9, 1fr)" gap={0.5} sx={{ border: '2px solid', borderColor: 'divider', p: 0.5, mb: 3 }}>
                {board.map((row, r) => (
                    row.map((cell, c) => (
                        <Box
                            key={`${r}-${c}`}
                            onClick={() => handleCellClick(r, c)}
                            sx={{
                                aspectRatio: '1',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem',
                                fontWeight: INITIAL_BOARD[r][c] !== 0 ? 'bold' : 'normal',
                                bgcolor: selected && selected[0] === r && selected[1] === c ? 'primary.light' : 'background.paper',
                                color: INITIAL_BOARD[r][c] !== 0 ? 'text.primary' : 'primary.main',
                                cursor: INITIAL_BOARD[r][c] === 0 ? 'pointer' : 'default',
                                borderRight: (c + 1) % 3 === 0 && c !== 8 ? '2px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.05)',
                                borderBottom: (r + 1) % 3 === 0 && r !== 8 ? '2px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.05)',
                            }}
                        >
                            {cell !== 0 ? cell : ''}
                        </Box>
                    ))
                ))}
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(9, 1fr)" gap={1}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <Button
                        key={num}
                        variant="outlined"
                        sx={{ minWidth: 0, p: 1 }}
                        onClick={() => handleNumberInput(num)}
                    >
                        {num}
                    </Button>
                ))}
            </Box>
            <Button startIcon={<Refresh />} onClick={reset} fullWidth sx={{ mt: 2 }}>Reset Board</Button>
        </Box>
    );
};

// --- WHACK-A-SMILEY LOGIC ---
const WhackASmiley = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [activeHole, setActiveHole] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval;
        if (isPlaying && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(t => t - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeLeft]);

    useEffect(() => {
        let holeInterval;
        if (isPlaying && timeLeft > 0) {
            holeInterval = setInterval(() => {
                const randomHole = Math.floor(Math.random() * 9);
                setActiveHole(randomHole);
                setTimeout(() => setActiveHole(null), 800);
            }, 1000);
        }
        return () => clearInterval(holeInterval);
    }, [isPlaying, timeLeft]);

    const whack = (index) => {
        if (activeHole === index) {
            setScore(s => s + 10);
            setActiveHole(null);
            // Haptic feedack?
        } else {
            setScore(s => Math.max(0, s - 5));
        }
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setIsPlaying(true);
    };

    return (
        <Box textAlign="center" width="100%">
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Score: {score}</Typography>
                <Typography variant="h6" color={timeLeft < 10 ? "error" : "text.primary"}>Time: {timeLeft}s</Typography>
            </Box>

            {!isPlaying && timeLeft === 0 && (
                <Typography variant="h5" color="primary" gutterBottom>Game Over! Score: {score}</Typography>
            )}

            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} maxWidth="300px" mx="auto" mb={3}>
                {[...Array(9)].map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => isPlaying && whack(i)}
                        sx={{
                            aspectRatio: '1',
                            bgcolor: 'background.paper',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            boxShadow: 'inset 0 -5px 10px rgba(0,0,0,0.1)',
                            transition: 'transform 0.1s',
                            '&:active': { transform: 'scale(0.9)' }
                        }}
                    >
                        {activeHole === i ? (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>😀</motion.div>
                        ) : null}
                    </Box>
                ))}
            </Box>

            {!isPlaying && (
                <Button variant="contained" size="large" onClick={startGame}>
                    {timeLeft === 0 ? "Play Again" : "Start Game"}
                </Button>
            )}
        </Box>
    );
};

// --- TIC TAC TOE LOGIC ---
const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = checkWinner(squares);

    const handleClick = (i) => {
        if (winner || squares[i]) return;
        const nextSquares = [...squares];
        nextSquares[i] = isXNext ? 'X' : 'O';
        setSquares(nextSquares);
        setIsXNext(!isXNext);
    };

    return (
        <Box textAlign="center">
            <Typography variant="h6" gutterBottom>
                {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
            </Typography>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} maxWidth="250px" mx="auto" mb={3}>
                {squares.map((val, i) => (
                    <Button
                        key={i}
                        variant="outlined"
                        onClick={() => handleClick(i)}
                        sx={{
                            aspectRatio: '1',
                            fontSize: '2rem',
                            borderColor: 'divider',
                            color: val === 'X' ? 'primary.main' : 'secondary.main'
                        }}
                    >
                        {val}
                    </Button>
                ))}
            </Box>
            <Button startIcon={<Refresh />} onClick={() => setSquares(Array(9).fill(null))}>Restart</Button>
        </Box>
    );
};

// --- SNAKE GAME LOGIC ---
const SnakeGame = () => {
    const GRID_SIZE = 15;
    const [snake, setSnake] = useState([{ x: 7, y: 7 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [dir, setDir] = useState({ x: 0, y: -1 }); // Moving Up
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [paused, setPaused] = useState(true);

    // Keyboard controls
    useEffect(() => {
        const handleKeys = (e) => {
            switch (e.key) {
                case 'ArrowUp': if (dir.y !== 1) setDir({ x: 0, y: -1 }); break;
                case 'ArrowDown': if (dir.y !== -1) setDir({ x: 0, y: 1 }); break;
                case 'ArrowLeft': if (dir.x !== 1) setDir({ x: -1, y: 0 }); break;
                case 'ArrowRight': if (dir.x !== -1) setDir({ x: 1, y: 0 }); break;
                default: break;
            }
        };
        window.addEventListener('keydown', handleKeys);
        return () => window.removeEventListener('keydown', handleKeys);
    }, [dir]);

    // Game Loop
    useEffect(() => {
        if (paused || gameOver) return;
        const moveSnake = setInterval(() => {
            setSnake(curr => {
                const head = { x: curr[0].x + dir.x, y: curr[0].y + dir.y };

                // Check Collision
                if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE ||
                    curr.some(seg => seg.x === head.x && seg.y === head.y)) {
                    setGameOver(true);
                    return curr;
                }

                const newSnake = [head, ...curr];
                if (head.x === food.x && head.y === food.y) {
                    setScore(s => s + 1);
                    setFood({
                        x: Math.floor(Math.random() * GRID_SIZE),
                        y: Math.floor(Math.random() * GRID_SIZE)
                    });
                } else {
                    newSnake.pop();
                }
                return newSnake;
            });
        }, 150);
        return () => clearInterval(moveSnake);
    }, [dir, food, gameOver, paused]);

    const restart = () => {
        setSnake([{ x: 7, y: 7 }]);
        setFood({ x: 5, y: 5 });
        setDir({ x: 0, y: -1 });
        setGameOver(false);
        setScore(0);
        setPaused(false);
    };

    return (
        <Box textAlign="center">
            <Typography variant="h6" gutterBottom>Score: {score}</Typography>
            {gameOver && <Typography color="error" fontWeight="bold">Game Over!</Typography>}

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gap: '1px',
                    bgcolor: 'divider',
                    border: '2px solid',
                    borderColor: 'text.primary',
                    width: '300px',
                    height: '300px',
                    mx: 'auto',
                    mb: 2
                }}
            >
                {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const isSnake = snake.some(s => s.x === x && s.y === y);
                    const isFood = food.x === x && food.y === y;
                    return (
                        <Box
                            key={i}
                            sx={{
                                bgcolor: isSnake ? 'success.main' : isFood ? 'error.main' : 'background.paper',
                                borderRadius: isSnake ? '2px' : isFood ? '50%' : '0'
                            }}
                        />
                    );
                })}
            </Box>

            <Box display="flex" justifyContent="center" gap={2}>
                <Button variant="contained" onClick={restart}>
                    {gameOver ? 'Try Again' : paused ? 'Start' : 'Restart'}
                </Button>
                {!gameOver && !paused && (
                    <Button variant="outlined" onClick={() => setPaused(true)}>Pause</Button>
                )}

                {/* Mobile Controls */}
                <Box display={{ xs: 'grid', md: 'none' }} gridTemplateColumns="repeat(3, 1fr)" gap={1} ml={2}>
                    <Box />
                    {/* Up */}
                    <Button variant="outlined" sx={{ minWidth: 0, p: 1 }} onClick={() => setDir({ x: 0, y: -1 })}><Keyboard sx={{ transform: 'rotate(0deg)' }} /></Button>
                    <Box />

                    {/* Left */}
                    <Button variant="outlined" sx={{ minWidth: 0, p: 1 }} onClick={() => setDir({ x: -1, y: 0 })}><Keyboard sx={{ transform: 'rotate(-90deg)' }} /></Button>
                    {/* Down */}
                    <Button variant="outlined" sx={{ minWidth: 0, p: 1 }} onClick={() => setDir({ x: 0, y: 1 })}><Keyboard sx={{ transform: 'rotate(180deg)' }} /></Button>
                    {/* Right */}
                    <Button variant="outlined" sx={{ minWidth: 0, p: 1 }} onClick={() => setDir({ x: 1, y: 0 })}><Keyboard sx={{ transform: 'rotate(90deg)' }} /></Button>
                </Box>
            </Box>
            <Typography variant="caption" display="block" mt={1}>Use Arrow Keys to Move</Typography>
        </Box>
    );
};

// --- ROCK PAPER SCISSORS ---
const RockPaperScissors = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const [userChoice, setUserChoice] = useState(null);
    const [compChoice, setCompChoice] = useState(null);
    const [result, setResult] = useState(null);

    const playGame = (choice) => {
        setUserChoice(choice);
        // Quick shuffle effect
        let i = 0;
        const interval = setInterval(() => {
            setCompChoice(choices[i % 3]);
            i++;
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            const random = Math.floor(Math.random() * 3);
            const comp = choices[random];
            setCompChoice(comp);

            if (choice === comp) setResult("It's a Tie!");
            else if (
                (choice === 'Rock' && comp === 'Scissors') ||
                (choice === 'Paper' && comp === 'Rock') ||
                (choice === 'Scissors' && comp === 'Paper')
            ) setResult("You Win! 🎉");
            else setResult("Computer Wins! 🤖");
        }, 1000);
    };

    return (
        <Box textAlign="center">
            <Typography variant="h6" gutterBottom minHeight="32px">{result || "Choose your weapon!"}</Typography>

            <Box display="flex" justifyContent="center" gap={4} my={4}>
                <Box>
                    <Typography variant="caption">You</Typography>
                    <Box sx={{ fontSize: '3rem' }}>
                        {userChoice === 'Rock' ? '✊' : userChoice === 'Paper' ? '✋' : userChoice === 'Scissors' ? '✌️' : '❓'}
                    </Box>
                </Box>
                <Typography variant="h4" sx={{ alignSelf: 'center' }}>VS</Typography>
                <Box>
                    <Typography variant="caption">Computer</Typography>
                    <Box sx={{ fontSize: '3rem' }}>
                        {compChoice === 'Rock' ? '✊' : compChoice === 'Paper' ? '✋' : compChoice === 'Scissors' ? '✌️' : '❓'}
                    </Box>
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" gap={2}>
                {choices.map(c => (
                    <Button key={c} variant="outlined" onClick={() => playGame(c)} disabled={!!result && result === null}>
                        {c}
                    </Button>
                ))}
            </Box>
            {result && <Button sx={{ mt: 2 }} onClick={() => { setResult(null); setUserChoice(null); setCompChoice(null); }}>Play Again</Button>}
        </Box>
    );
};

// --- TYPING TEST ---
const TypingTest = () => {
    const text = "The quick brown fox jumps over the lazy dog. Programming is the art of telling another human what one wants the computer to do.";
    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleChange = (e) => {
        const val = e.target.value;
        if (!startTime) setStartTime(Date.now());
        setInput(val);

        if (val === text) {
            setFinished(true);
            const durationArr = (Date.now() - startTime) / 60000;
            const words = text.split(" ").length;
            setWpm(Math.round(words / durationArr));
        }
    };

    return (
        <Box width="100%" maxWidth="500px">
            <Typography variant="body1" paragraph sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                {text}
            </Typography>

            {!finished ? (
                <textarea
                    rows={4}
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        border: '1px solid #ccc',
                        fontFamily: 'inherit'
                    }}
                    placeholder="Start typing here..."
                    value={input}
                    onChange={handleChange}
                />
            ) : (
                <Box textAlign="center">
                    <Typography variant="h4" color="success.main" gutterBottom>
                        {wpm} WPM
                    </Typography>
                    <Typography>Great job! You finished the test.</Typography>
                    <Button sx={{ mt: 2 }} variant="contained" onClick={() => { setInput(""); setFinished(false); setStartTime(null); }}>Try Again</Button>
                </Box>
            )}
        </Box>
    );
};

const GamesArcade = () => {
    const { theme } = useThemeContext();
    const [activeGame, setActiveGame] = useState(null);

    const games = [
        {
            id: 'memory',
            title: 'Skill Match',
            description: 'Flip cards to match the tech stack icons. Test your memory!',
            icon: <Apps fontSize="large" />,
            color: '#673ab7',
            component: <MemoryGame />
        },
        {
            id: 'sudoku',
            title: 'Sudoku',
            description: 'Classic number puzzle. Fill the grid so every row, column, and 3x3 box contains 1-9.',
            icon: <Apps fontSize="large" />,
            color: '#4dabf5',
            component: <SudokuGame />
        },
        {
            id: 'whack',
            title: 'Whack-a-Smiley',
            description: 'Test your reflexes! Whack the smiling emojis before they disappear.',
            icon: <Mouse fontSize="large" />,
            color: '#ff9800',
            component: <WhackASmiley />
        },
        {
            id: 'tictactoe',
            title: 'Tic Tac Toe',
            description: 'The classic X and O game. Challenge a friend or play against yourself.',
            icon: <Tag fontSize="large" />,
            color: '#f44336',
            component: <TicTacToe />
        },
        {
            id: 'snake',
            title: 'Snake',
            description: 'Navigate the snake to eat food and grow. Avoid hitting the walls or yourself!',
            icon: <Timeline fontSize="large" />,
            color: '#4caf50',
            component: <SnakeGame />
        },
        {
            id: 'rps',
            title: 'Rock Paper Scissors',
            description: 'The classic game of chance. Play against the computer.',
            icon: <Gesture fontSize="large" />,
            color: '#9c27b0',
            component: <RockPaperScissors />
        },
        {
            id: 'typing',
            title: 'Speed Typing',
            description: 'Test your typing speed (WPM) with a random paragraph.',
            icon: <Keyboard fontSize="large" />,
            color: '#607d8b',
            component: <TypingTest />
        }
    ];

    return (
        <PageContainer>
            <Container maxWidth="lg">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="h2" fontWeight="bold" gutterBottom textAlign="center">
                        Games Arcade 🕹️
                    </Typography>
                    <Typography variant="h5" color="text.secondary" textAlign="center" mb={6}>
                        Take a break and play some classic games!
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {games.map((game, index) => (
                        <Grid item xs={12} md={4} key={game.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ height: '100%' }}
                            >
                                <GameCard onClick={() => setActiveGame(game)}>
                                    <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                                        <GameIconBox color={game.color}>
                                            {game.icon}
                                        </GameIconBox>
                                        <Typography variant="h5" fontWeight="bold" gutterBottom>{game.title}</Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {game.description}
                                        </Typography>
                                        <Button variant="contained" fullWidth sx={{ mt: 'auto', borderRadius: 8 }}>
                                            Play Now
                                        </Button>
                                    </CardContent>
                                </GameCard>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Game Modal */}
                <Dialog
                    open={!!activeGame}
                    onClose={() => setActiveGame(null)}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                        style: {
                            borderRadius: 24,
                            padding: 10,
                            backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff'
                        }
                    }}
                >
                    {activeGame && (
                        <>
                            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <GameIconBox color={activeGame.color} sx={{ width: 40, height: 40, mb: 0, borderRadius: 2 }}>
                                        {React.cloneElement(activeGame.icon, { fontSize: 'medium' })}
                                    </GameIconBox>
                                    <Typography variant="h5" fontWeight="bold">
                                        {activeGame.title}
                                    </Typography>
                                </Box>
                                <IconButton onClick={() => setActiveGame(null)}>
                                    <Close />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent dividers>
                                <Box display="flex" justifyContent="center" width="100%">
                                    {activeGame.component}
                                </Box>
                            </DialogContent>
                        </>
                    )}
                </Dialog>

            </Container>
        </PageContainer>
    );
};

export default GamesArcade;
