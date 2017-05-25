export default function calculateWinrate(user, player){
    let gamesPlayed = 0;
    let gamesWon = 0;
    user.sessions.forEach((session) => {
        if (session.winner === player){
            gamesWon++;
        }
        session.players.forEach((sessionPlayer) => {
            if (sessionPlayer === player) {
                gamesPlayed++;
            }
        })
    })
    return Math.round((gamesWon/gamesPlayed) * 100);
}