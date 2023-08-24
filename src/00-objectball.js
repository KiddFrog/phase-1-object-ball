function gameObject() {
    const gameData = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: [
                {
                    name: 'Alan Anderson',
                    stats: {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1
                    }
                },
                {
                    name: 'Reggie Evans',
                    stats: {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 7,
                        slamDunks: 0
                    }
                },
            ]
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: [
                {
                    name: 'Jeff Adrien',
                    stats: {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    }
                },
                {
                    name: 'Bismak Biyombo',
                    stats: {
                        number: 0,
                        shoe: 16,
                        points: 13,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    }
                },
            ]
        }
    };

    return gameData;
}
console.log(gameObject());