import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Storage, Public, Cloud, Terminal, Smartphone, Refresh, CheckCircle } from '@mui/icons-material';

// --- Styled Components ---

const GameContainer = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.03)'
        : 'rgba(0, 0, 0, 0.03)',
    borderRadius: '24px',
}));

const CardInner = styled(motion.div)({
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
});

const CardFace = styled(Box)(({ theme, variant }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    background: variant === 'front'
        ? (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : '#ffffff')
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transform: variant === 'front' ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

const GameStat = styled(Typography)(({ theme }) => ({
    fontSize: '0.9rem',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    marginBottom: '10px',
}));

// --- Icons & Data ---
const ICONS = [Code, Storage, Public, Cloud, Terminal, Smartphone];

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [moves, setMoves] = useState(0);

    const initializeGame = () => {
        const shuffled = [...ICONS, ...ICONS]
            .sort(() => Math.random() - 0.5)
            .map((Icon, index) => ({ id: index, Icon }));

        setCards(shuffled);
        setFlipped([]);
        setSolved([]);
        setMoves(0);
        setDisabled(false);
    };

    useEffect(() => {
        initializeGame();
    }, []);

    const handleClick = (id) => {
        if (disabled || flipped.includes(id) || solved.includes(id)) return;

        if (flipped.length === 0) {
            setFlipped([id]);
            return;
        }

        if (flipped.length === 1) {
            setDisabled(true);
            setFlipped([...flipped, id]);
            setMoves(m => m + 1);

            // Check match
            const firstCard = cards.find(c => c.id === flipped[0]);
            const secondCard = cards.find(c => c.id === id);

            if (firstCard.Icon === secondCard.Icon) {
                setSolved(prev => [...prev, flipped[0], id]);
                setFlipped([]);
                setDisabled(false);
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setDisabled(false);
                }, 1000);
            }
        }
    };

    const isGameOver = cards.length > 0 && solved.length === cards.length;

    return (
        <GameContainer>
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">Skill Match</Typography>
                <Box display="flex" gap={2} alignItems="center">
                    <GameStat>Moves: {moves}</GameStat>
                    <IconButton size="small" onClick={initializeGame} sx={{ bgcolor: 'action.hover' }}>
                        <Refresh fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {isGameOver ? (
                <Box textAlign="center" py={4}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                    </motion.div>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>All Systems Go!</Typography>
                    <Typography variant="body2" color="text.secondary" mb={3}>
                        You matched all tech stacks in {moves} moves.
                    </Typography>
                    <Button variant="contained" onClick={initializeGame} sx={{ borderRadius: 8 }}>
                        Play Again
                    </Button>
                </Box>
            ) : (
                <Grid container spacing={1} sx={{ maxWidth: 300 }}>
                    {cards.map((card) => (
                        <Grid item xs={3} key={card.id}>
                            <Box
                                sx={{ width: '60px', height: '60px', perspective: '1000px' }}
                                onClick={() => handleClick(card.id)}
                            >
                                <CardInner
                                    animate={{ rotateY: flipped.includes(card.id) || solved.includes(card.id) ? 180 : 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Back of Card (Default View) */}
                                    <CardFace variant="back" />

                                    {/* Front of Card (Revealed Icon) */}
                                    <CardFace variant="front">
                                        <card.Icon sx={{ fontSize: 28, color: solved.includes(card.id) ? 'success.main' : 'primary.main' }} />
                                    </CardFace>
                                </CardInner>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </GameContainer>
    );
};

export default MemoryGame;
